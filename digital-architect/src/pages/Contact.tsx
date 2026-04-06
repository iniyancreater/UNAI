import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react";
import React, { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@unai.tech",
    sub: "We reply within 24 hours",
    href: "mailto:hello@unai.tech",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 90439 88697",
    sub: "Mon–Fri, 9am–6pm IST",
    href: "tel:+919043988697",
  },
  {
    icon: MapPin,
    label: "Our Office",
    value: "Chennai, Tamil Nadu",
    sub: "Anna Salai, Chennai – 600 002",
    href: "https://maps.google.com/?q=Anna+Salai+Chennai",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Fri 9am–6pm",
    sub: "IST (UTC +5:30)",
    href: null,
  },
];

const services = [
  "Software Development",
  "Cloud Architecture",
  "AI & Machine Learning",
  "Cybersecurity",
  "Data Engineering",
  "Mobile Development",
  "Other",
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
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
        className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="absolute inset-0 dot-grid opacity-25" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] blur-[120px] pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(ellipse, var(--color-indigo) 0%, transparent 70%)",
          }}
        />
        <div className="container-xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge badge-white mb-6">Get In Touch</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-[1.12]"
          >
            Let's Build <span className="gradient-text">Together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-white/70"
          >
            Have a project in mind or a challenge to solve? We'd love to hear
            from you.
          </motion.p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="section-pad bg-bg-subtle">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* ── Left: Contact Info ── */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-navy">
                Contact Information
              </h2>
              <p className="text-[0.95rem] leading-relaxed mb-10 text-muted">
                Whether you want to start a project, explore a partnership, or
                just have a question — we're ready.
              </p>

              <div className="space-y-4 mb-10">
                {contactInfo.map((item) => {
                  const Wrapper = item.href ? "a" : "div";
                  return (
                    <Wrapper
                      key={item.label}
                      {...(item.href
                        ? {
                            href: item.href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                      className="card flex items-start gap-5 p-6 no-underline"
                      style={{ display: "flex" }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(79,70,229,0.08) 0%, rgba(6,182,212,0.05) 100%)",
                          border: "1px solid rgba(79,70,229,0.1)",
                        }}
                      >
                        <item.icon size={20} className="text-indigo" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest mb-1 text-dim">
                          {item.label}
                        </p>
                        <p className="text-base font-bold text-navy mb-0.5">
                          {item.value}
                        </p>
                        <p className="text-[0.85rem] text-muted">{item.sub}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              {/* What to expect */}
              <div
                className="rounded-2xl p-8 relative overflow-hidden shrink-0"
                style={{ background: "var(--color-navy)" }}
              >
                <div className="absolute inset-0 dot-grid opacity-10" />
                <h4 className="text-sm font-bold tracking-widest uppercase mb-5 text-white/50 relative z-10">
                  What happens next?
                </h4>
                <ul className="space-y-4 relative z-10">
                  {[
                    "We review your message within 24h",
                    "Schedule a discovery call",
                    "Receive a tailored proposal",
                  ].map((step) => (
                    <li key={step} className="flex items-start gap-4">
                      <CheckCircle
                        size={18}
                        className="text-cyan mt-[-1px] shrink-0"
                      />
                      <span className="text-[0.9rem] text-white/80 font-medium leading-snug">
                        {step}
                      </span>
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
            <div className="card p-10 md:p-12 h-full">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-indigo), var(--color-cyan))",
                    }}
                  >
                    <Send size={32} className="text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4 text-navy">
                    Message Sent!
                  </h3>
                  <p className="text-[1.05rem] leading-relaxed max-w-sm text-muted">
                    Thanks for reaching out. Our team will review your message
                    and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-2 text-navy">
                    Send Us a Message
                  </h3>
                  <p className="text-[0.95rem] mb-8 text-muted">
                    Fill in the form and we'll reach out shortly.
                  </p>

                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-dim">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
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
                      <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-dim">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
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

                  {/* Row 2: Phone + Service */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-dim">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 90439 88697"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-dim">
                        Service Needed
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="input-field"
                        style={{ cursor: "pointer", appearance: "none" }}
                      >
                        <option value="">Select a service…</option>
                        {services.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div className="mb-8">
                    <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-dim">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, timeline, and goals…"
                      className="input-field resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit"
                    className="btn-primary w-full py-4 text-[1rem] justify-center"
                  >
                    Send Message <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Google Maps ── */}
      <section className="section-pad-sm bg-surface">
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="badge badge-indigo mb-4">Our Location</span>
            <h2 className="text-3xl font-bold text-navy mb-3">
              Find Us in <span className="gradient-text">Chennai</span>
            </h2>
            <p className="text-muted text-[0.95rem]">
              Anna Salai, Chennai – 600 002, Tamil Nadu, India
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl overflow-hidden shadow-lg"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <iframe
              title="UNAI Office – Chennai"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8190990028795!2d80.27036887454808!3d13.060424913373497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267e8d4a23e5b%3A0x7f8b5ed0c91d6fec!2sAnna%20Salai%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1712214437629!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
