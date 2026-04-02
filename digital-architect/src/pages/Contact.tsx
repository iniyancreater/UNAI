import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "hello@digitalarchitect.io", sub: "We reply within 24 hours" },
  { icon: Phone, label: "Call Us", value: "+91 98765 43210", sub: "Mon–Fri, 9am–6pm IST" },
  { icon: MapPin, label: "Headquarters", value: "Bangalore, India", sub: "Koramangala, 560034" },
  { icon: Clock, label: "Business Hours", value: "Mon–Fri 9am–6pm", sub: "IST (UTC +5:30)" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0B0F2F 0%, #1E2448 100%)" }}
      >
        <div className="absolute inset-0 dot-grid opacity-25" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(79,70,229,0.18) 0%, transparent 70%)" }}
        />
        <div className="container-xl relative z-10 py-36 md:py-44 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge badge-white mb-6">Get In Touch</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Poppins, sans-serif", lineHeight: 1.15 }}
          >
            Let's Build{" "}
            <span className="gradient-text">Together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Have a project in mind or a challenge to solve? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section style={{ background: "#F8FAFC" }} className="section-pad">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* ── Left: Contact Info ── */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "Poppins, sans-serif", color: "#0F172A" }}
              >
                Contact Information
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "#475569" }}>
                Whether you want to start a project, explore a partnership, or just have a question — we're ready.
              </p>

              <div className="space-y-4 mb-10">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="card flex items-start gap-4 p-5"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "linear-gradient(135deg, rgba(79,70,229,0.12) 0%, rgba(6,182,212,0.08) 100%)" }}
                    >
                      <item.icon size={17} style={{ color: "#4F46E5" }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#94A3B8", fontFamily: "Poppins, sans-serif" }}>
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold" style={{ color: "#0F172A", fontFamily: "Poppins, sans-serif" }}>{item.value}</p>
                      <p className="text-xs mt-0.5" style={{ color: "#94A3B8" }}>{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* What to expect */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "linear-gradient(135deg, #0B0F2F 0%, #1E2448 100%)",
                  border: "1px solid rgba(79,70,229,0.2)",
                }}
              >
                <h4
                  className="text-sm font-bold text-white mb-4"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  What happens next?
                </h4>
                <ul className="space-y-3">
                  {[
                    "We review your message within 24h",
                    "Schedule a discovery call",
                    "Receive a tailored proposal",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle size={14} style={{ color: "#06B6D4", flexShrink: 0 }} />
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Form ── */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 4px 16px rgba(15,23,42,0.08)" }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "linear-gradient(135deg, #4F46E5, #06B6D4)" }}
                  >
                    <Send size={28} className="text-white" />
                  </motion.div>
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ fontFamily: "Poppins, sans-serif", color: "#0F172A" }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#475569" }}>
                    Thanks for reaching out. Our team will review your message and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ fontFamily: "Poppins, sans-serif", color: "#0F172A" }}
                  >
                    Send Us a Message
                  </h3>
                  <p className="text-sm mb-7" style={{ color: "#94A3B8" }}>
                    Fill in the form and we'll reach out shortly.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label
                        className="block text-xs font-bold uppercase tracking-widest mb-2"
                        style={{ color: "#475569", fontFamily: "Poppins, sans-serif" }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-bold uppercase tracking-widest mb-2"
                        style={{ color: "#475569", fontFamily: "Poppins, sans-serif" }}
                      >
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label
                        className="block text-xs font-bold uppercase tracking-widest mb-2"
                        style={{ color: "#475569", fontFamily: "Poppins, sans-serif" }}
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Company Inc."
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-bold uppercase tracking-widest mb-2"
                        style={{ color: "#475569", fontFamily: "Poppins, sans-serif" }}
                      >
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="input-field"
                        style={{ cursor: "pointer" }}
                      >
                        <option value="">Select a service…</option>
                        <option>Software Development</option>
                        <option>Cloud Architecture</option>
                        <option>AI & Machine Learning</option>
                        <option>Cybersecurity</option>
                        <option>Data Engineering</option>
                        <option>Mobile Development</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-7">
                    <label
                      className="block text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: "#475569", fontFamily: "Poppins, sans-serif" }}
                    >
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, timeline, and goals…"
                      className="input-field resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
