import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Bot, User, Loader2, Minimize2, CalendarDays, MessageCircle } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import AppointmentModal from "./AppointmentModal";

/* ── Types ──────────────────────────────────────────────────────────── */
interface Message {
  id: number;
  role: "user" | "assistant";
  text: string;
}

/* ── WhatsApp icon ──────────────────────────────────────────────────── */
const WhatsAppIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ── AI system prompt ───────────────────────────────────────────────── */
const SYSTEM_PROMPT = `You are a helpful AI assistant for UNAI Consultancy Services (a division of UNAI TECH), a premium technology consulting firm based in Chennai, India.

Key details:
- Services: Software Development, Cloud Architecture, AI & Machine Learning, Cybersecurity, Data Engineering, Mobile Development, IT Consulting, Digital Marketing, Business Strategy
- Location: Anna Salai, Chennai – 600 002, Tamil Nadu, India
- Email: hello@unai.tech
- Phone: +91 90439 88697
- Business Hours: Mon–Fri, 9am–6pm IST

Answer questions about services, pricing enquiries (direct to contact page), appointments, and general tech consulting. Be professional, concise, and friendly. If you don't know something specific, suggest they email or call UNAI directly.`;

const WELCOME: Message = {
  id: 0,
  role: "assistant",
  text: "👋 Hi! I'm UNAI's AI assistant. I can help you learn about our services, answer questions, or guide you to the right team. How can I help you today?",
};

/* ── Tooltip helper ─────────────────────────────────────────────────── */
const Tooltip: React.FC<{ show: boolean; label: string }> = ({ show, label }) => (
  <AnimatePresence>
    {show && (
      <motion.span
        initial={{ opacity: 0, x: 8 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 8 }}
        className="absolute right-16 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-semibold shadow-lg pointer-events-none"
        style={{ background: "var(--color-navy)", color: "#fff" }}
      >
        {label}
      </motion.span>
    )}
  </AnimatePresence>
);

/* ── Main component ─────────────────────────────────────────────────── */
const AIChatbot: React.FC = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [apptOpen, setApptOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showBubble, setShowBubble] = useState(true);

  // Tooltips
  const [waTooltip, setWaTooltip] = useState(false);
  const [apptTooltip, setApptTooltip] = useState(false);
  const [chatTooltip, setChatTooltip] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(1);

  const WHATSAPP_URL = `https://wa.me/919043988697?text=${encodeURIComponent(
    "Hello UNAI! I'd like to learn more about your services."
  )}`;

  /* Auto-scroll chat */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  /* Focus input when chat opens */
  useEffect(() => {
    if (chatOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [chatOpen]);

  /* Hide nudge bubble after 6s */
  useEffect(() => {
    const t = setTimeout(() => setShowBubble(false), 6000);
    return () => clearTimeout(t);
  }, []);

  const openChat = () => {
    setChatOpen(true);
    setShowBubble(false);
  };

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { id: nextId.current++, role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const apiKey = (process.env as Record<string, string>).GEMINI_API_KEY;
      if (!apiKey) throw new Error("No API key");

      const ai = new GoogleGenAI({ apiKey });
      const history = [...messages, userMsg]
        .filter((m) => m.id !== 0)
        .map((m) => ({
          role: m.role === "user" ? "user" : "model",
          parts: [{ text: m.text }],
        }));

      const chat = ai.chats.create({
        model: "gemini-2.0-flash",
        config: { systemInstruction: SYSTEM_PROMPT },
        history: history.slice(0, -1),
      });

      const response = await chat.sendMessage({ message: text });
      setMessages((prev) => [
        ...prev,
        { id: nextId.current++, role: "assistant", text: response.text ?? "Sorry, I couldn't respond." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: nextId.current++,
          role: "assistant",
          text: "I'm having trouble connecting. Please email hello@unai.tech or call +91 90439 88697.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          RIGHT-SIDE FLOATING STACK  (bottom → top: WA → Appt → Chat)
      ══════════════════════════════════════════════════════════════ */}
      <div
        className="fixed z-50 flex flex-col-reverse items-end gap-3"
        style={{ bottom: "24px", right: "24px" }}
        aria-label="Quick contact actions"
      >
        {/* ── 1. WhatsApp (bottom) ── */}
        <div className="relative flex items-center">
          <Tooltip show={waTooltip} label="Chat on WhatsApp" />
          <motion.a
            id="whatsapp-float"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.93 }}
            onMouseEnter={() => setWaTooltip(true)}
            onMouseLeave={() => setWaTooltip(false)}
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
            style={{
              background: "#25D366",
              color: "#fff",
              boxShadow: "0 6px 24px rgba(37,211,102,0.45)",
            }}
          >
            <WhatsAppIcon size={26} />
          </motion.a>
        </div>

        {/* ── 2. Book Appointment (middle) ── */}
        <div className="relative flex items-center">
          <Tooltip show={apptTooltip} label="Book Appointment" />
          <motion.button
            id="book-appointment-float"
            onClick={() => setApptOpen(true)}
            aria-label="Book an appointment"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.93 }}
            onMouseEnter={() => setApptTooltip(true)}
            onMouseLeave={() => setApptTooltip(false)}
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
            style={{
              background: "linear-gradient(135deg, var(--color-indigo), var(--color-cyan))",
              color: "#fff",
              boxShadow: "0 6px 24px rgba(79,70,229,0.4)",
              border: "none",
              cursor: "pointer",
            }}
          >
            <CalendarDays size={24} />
          </motion.button>
        </div>

        {/* ── 3. AI Chatbot (top) ── */}
        <div className="relative flex items-center">
          {/* Nudge bubble */}
          <AnimatePresence>
            {showBubble && !chatOpen && (
              <motion.div
                initial={{ opacity: 0, x: 16, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 16, scale: 0.9 }}
                className="absolute right-16 rounded-2xl px-4 py-3 text-sm font-semibold shadow-xl pointer-events-none"
                style={{
                  background: "var(--color-navy)",
                  color: "#fff",
                  border: "1px solid rgba(79,70,229,0.4)",
                  width: "180px",
                  lineHeight: 1.4,
                }}
              >
                💬 Ask me anything about UNAI!
              </motion.div>
            )}
          </AnimatePresence>

          {/* Chat window */}
          <AnimatePresence>
            {chatOpen && (
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                className="absolute bottom-16 right-0 flex flex-col overflow-hidden rounded-2xl shadow-2xl"
                style={{
                  width: "min(380px, calc(100vw - 48px))",
                  height: "520px",
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                }}
              >
                {/* Header */}
                <div
                  className="flex items-center gap-3 px-5 py-4 shrink-0"
                  style={{ background: "linear-gradient(135deg, var(--color-indigo) 0%, var(--color-cyan) 100%)" }}
                >
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Bot size={20} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-white text-sm leading-none">UNAI Assistant</p>
                    <p className="text-white/70 text-xs mt-1">Powered by Gemini AI</p>
                  </div>
                  <button
                    onClick={() => setChatOpen(false)}
                    aria-label="Minimize chat"
                    className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <Minimize2 size={16} className="text-white" />
                  </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4" style={{ background: "#F8FAFC" }}>
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex items-start gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{
                          background: msg.role === "user"
                            ? "linear-gradient(135deg, var(--color-indigo), var(--color-cyan))"
                            : "rgba(79,70,229,0.1)",
                        }}
                      >
                        {msg.role === "user"
                          ? <User size={13} className="text-white" />
                          : <Bot size={13} className="text-indigo" />}
                      </div>
                      <div
                        className="rounded-2xl px-4 py-2.5 text-sm leading-relaxed max-w-[82%]"
                        style={msg.role === "user"
                          ? { background: "linear-gradient(135deg, var(--color-indigo), var(--color-cyan))", color: "#fff", borderBottomRightRadius: "4px" }
                          : { background: "#fff", color: "var(--color-text)", border: "1px solid #E2E8F0", borderBottomLeftRadius: "4px" }}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}

                  {loading && (
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center bg-indigo/10 shrink-0">
                        <Bot size={13} className="text-indigo" />
                      </div>
                      <div className="rounded-2xl px-4 py-3 flex items-center gap-2" style={{ background: "#fff", border: "1px solid #E2E8F0", borderBottomLeftRadius: "4px" }}>
                        <Loader2 size={14} className="text-indigo animate-spin" />
                        <span className="text-xs text-muted">Thinking…</span>
                      </div>
                    </div>
                  )}
                  <div ref={bottomRef} />
                </div>

                {/* Input */}
                <div className="px-4 py-3 flex items-center gap-2 shrink-0" style={{ borderTop: "1px solid #E2E8F0", background: "#fff" }}>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder="Type a message…"
                    disabled={loading}
                    className="flex-1 rounded-xl px-4 py-2.5 text-sm outline-none"
                    style={{ background: "#F1F5F9", border: "1px solid #E2E8F0", color: "var(--color-text)", fontFamily: "var(--font-body)" }}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!input.trim() || loading}
                    aria-label="Send message"
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200"
                    style={{
                      background: input.trim() && !loading
                        ? "linear-gradient(135deg, var(--color-indigo), var(--color-cyan))"
                        : "#E2E8F0",
                      cursor: input.trim() && !loading ? "pointer" : "not-allowed",
                    }}
                  >
                    <Send size={16} className={input.trim() && !loading ? "text-white" : "text-muted"} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Chat FAB */}
          <Tooltip show={chatTooltip && !chatOpen} label="AI Assistant" />
          <motion.button
            id="chatbot-toggle"
            onClick={() => (chatOpen ? setChatOpen(false) : openChat())}
            aria-label="Open AI chat"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onMouseEnter={() => setChatTooltip(true)}
            onMouseLeave={() => setChatTooltip(false)}
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
            style={{
              background: chatOpen
                ? "var(--color-navy)"
                : "linear-gradient(135deg, var(--color-indigo) 0%, var(--color-cyan) 100%)",
              boxShadow: "0 8px 30px rgba(79,70,229,0.4)",
              border: "none",
              cursor: "pointer",
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {chatOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <X size={24} className="text-white" />
                </motion.span>
              ) : (
                <motion.span key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <MessageCircle size={24} className="text-white" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* ── Appointment Modal ── */}
      <AppointmentModal open={apptOpen} onClose={() => setApptOpen(false)} />
    </>
  );
};

export default AIChatbot;
