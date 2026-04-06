import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CalendarDays, Clock, CheckCircle, Send } from "lucide-react";

/* ── Types ──────────────────────────────────────────────────────────── */
interface Props {
  open: boolean;
  onClose: () => void;
}

const SERVICES = [
  "Software Development",
  "Cloud Architecture",
  "AI & Machine Learning",
  "Cybersecurity",
  "Data Engineering",
  "Mobile Development",
  "IT Consulting",
  "Digital Marketing",
  "Business Strategy",
  "Other",
];

const TIME_SLOTS = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "02:00 PM", "03:00 PM",
  "04:00 PM", "05:00 PM",
];

/* ── Helpers ───────────────────────────────────────────────────────── */
const todayStr = () => {
  const d = new Date();
  return d.toISOString().split("T")[0];
};

/* ── Component ──────────────────────────────────────────────────────── */
const AppointmentModal: React.FC<Props> = ({ open, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  /* Lock body scroll when modal open */
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* Close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setSubmitted(false), 400);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 14px",
    borderRadius: "10px",
    border: "1px solid #E2E8F0",
    background: "#F8FAFC",
    fontFamily: "var(--font-body)",
    fontSize: "0.9rem",
    color: "var(--color-text)",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.07em",
    textTransform: "uppercase",
    color: "#64748B",
    marginBottom: "6px",
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[60]"
            style={{ background: "rgba(11,15,47,0.7)", backdropFilter: "blur(6px)" }}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="fixed z-[61] inset-x-4 top-1/2 -translate-y-1/2 mx-auto overflow-y-auto rounded-2xl shadow-2xl"
            style={{
              maxWidth: "600px",
              maxHeight: "90vh",
              background: "#FFFFFF",
            }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Book an Appointment"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-7 py-5 sticky top-0 z-10"
              style={{
                background: "linear-gradient(135deg, var(--color-indigo) 0%, var(--color-cyan) 100%)",
              }}
            >
              <div className="flex items-center gap-3">
                <CalendarDays size={22} className="text-white" />
                <div>
                  <h2
                    className="font-bold text-white text-lg leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Book a Consultation
                  </h2>
                  <p className="text-white/70 text-xs mt-1">Free 30-minute discovery call</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                aria-label="Close modal"
                className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X size={18} className="text-white" />
              </button>
            </div>

            {/* Body */}
            <div className="px-7 py-6">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, var(--color-indigo), var(--color-cyan))",
                    }}
                  >
                    <CheckCircle size={36} className="text-white" />
                  </motion.div>
                  <h3
                    className="text-2xl font-bold text-navy mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Appointment Requested!
                  </h3>
                  <p className="text-muted text-[0.95rem] max-w-xs leading-relaxed">
                    We've received your booking for <strong>{form.date}</strong> at{" "}
                    <strong>{form.time}</strong>. Our team will confirm within 24 hours via{" "}
                    <strong>{form.email}</strong>.
                  </p>
                  <button
                    onClick={handleClose}
                    className="btn-primary mt-8 px-8 py-3"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row: Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  {/* Row: Phone + Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={labelStyle}>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 90439 88697"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Service Interested In *</label>
                      <select
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: "pointer", appearance: "none" }}
                      >
                        <option value="">Select a service…</option>
                        {SERVICES.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row: Date + Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={labelStyle}>
                        <CalendarDays size={11} className="inline mr-1" />
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        min={todayStr()}
                        value={form.date}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>
                        <Clock size={11} className="inline mr-1" />
                        Preferred Time *
                      </label>
                      <select
                        name="time"
                        required
                        value={form.time}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: "pointer", appearance: "none" }}
                      >
                        <option value="">Select a time slot…</option>
                        {TIME_SLOTS.map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label style={labelStyle}>Notes / Questions</label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={form.notes}
                      onChange={handleChange}
                      placeholder="Tell us briefly what you'd like to discuss…"
                      style={{ ...inputStyle, resize: "none" }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    id="appointment-submit"
                    className="btn-primary w-full py-3.5 justify-center text-[0.95rem]"
                  >
                    Confirm Appointment <Send size={17} />
                  </button>

                  <p className="text-center text-xs text-muted mt-2">
                    Mon–Fri, 9am–6pm IST · Free 30-minute call · No commitment required
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AppointmentModal;
