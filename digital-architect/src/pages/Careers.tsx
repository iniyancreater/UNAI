import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MagicCardContainer, MagicCard } from "../components/MagicCard";
import {
  MapPin, Clock, ArrowRight, Briefcase, X, Upload,
  Code2, Megaphone, Users, Brain,
  Wifi, BookOpen, Heart, DollarSign, Coffee, Shield
} from "lucide-react";

// ── TYPES ──
type Job = {
  title: string;
  dept: string;
  location: string;
  type: string;
  desc: string;
  tags: string[];
  icon: React.ElementType;
  color: string;
};

// ── DATA ──
const openings: Job[] = [
  {
    icon: Code2,
    color: "from-indigo-500 to-blue-500",
    title: "Senior Full-Stack Developer",
    dept: "Engineering",
    location: "Remote / Bangalore",
    type: "Full-time",
    desc: "Build and scale complex distributed systems across our fintech and enterprise client projects. You will own end-to-end delivery of critical product features.",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    icon: Megaphone,
    color: "from-pink-500 to-rose-500",
    title: "Digital Marketing Strategist",
    dept: "Marketing",
    location: "Remote / Chennai",
    type: "Full-time",
    desc: "Drive brand awareness and lead generation through data-driven SEO, content, and paid campaigns across our key markets. Own the full growth funnel.",
    tags: ["SEO", "Content Strategy", "PPC", "Analytics"],
  },
  {
    icon: Users,
    color: "from-emerald-500 to-teal-500",
    title: "HR & Talent Acquisition Specialist",
    dept: "Human Resources",
    location: "Bangalore / Hybrid",
    type: "Full-time",
    desc: "Lead end-to-end recruitment for technical and non-technical roles. Build and champion our employer brand while crafting an exceptional candidate experience.",
    tags: ["Talent Sourcing", "Employer Branding", "HRIS", "Onboarding"],
  },
  {
    icon: Brain,
    color: "from-violet-500 to-purple-600",
    title: "AI / ML Engineer",
    dept: "AI & Innovation",
    location: "Remote",
    type: "Full-time",
    desc: "Design and integrate cutting-edge LLM-powered features and machine learning pipelines into real-world client products. This is a high-impact, high-visibility role.",
    tags: ["Python", "LangChain", "PyTorch", "RAG"],
  },
];

const benefits = [
  { icon: Wifi, label: "Remote-First", desc: "Work from anywhere in the world — we measure outcomes, not hours." },
  { icon: BookOpen, label: "₹50k Learning Budget", desc: "Annual budget for courses, conferences, and certifications of your choice." },
  { icon: Heart, label: "Health & Wellness", desc: "Comprehensive health, dental, and mental wellness coverage for you and family." },
  { icon: DollarSign, label: "Competitive Pay", desc: "Industry-leading salaries with transparent pay bands and equity options." },
  { icon: Coffee, label: "Work-Life Balance", desc: "Flexible working hours, unlimited PTO, and zero burnout culture." },
  { icon: Shield, label: "Job Security", desc: "We've never had a layoff. We grow deliberately and take care of our people." },
];

// ── APPLY MODAL ──
const ApplyModal = ({ job, onClose }: { job: Job; onClose: () => void }) => {
  const [step, setStep] = useState<"form" | "success">("form");
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.files?.[0]?.name ?? "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(11,15,47,0.75)", backdropFilter: "blur(10px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white rounded-3xl w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {step === "form" ? (
          <>
            {/* Modal Header */}
            <div
              className="p-8 relative overflow-hidden"
              style={{ background: "var(--color-navy)" }}
            >
              <div className="absolute inset-0 dot-grid opacity-20" />
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <span className="badge badge-indigo mb-3">Now Hiring</span>
                  <h2 className="text-2xl font-bold text-white mb-1">{job.title}</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-white/60 font-medium mt-3">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} /> {job.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={14} /> {job.dept}
                    </span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors mt-1 shrink-0"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">First Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Arjun"
                    className="w-full border border-border rounded-xl px-4 py-3.5 text-sm text-navy placeholder:text-muted focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Last Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Mehta"
                    className="w-full border border-border rounded-xl px-4 py-3.5 text-sm text-navy placeholder:text-muted focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/10 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-navy mb-2">Email Address *</label>
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-border rounded-xl px-4 py-3.5 text-sm text-navy placeholder:text-muted focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 90439 88697"
                    className="w-full border border-border rounded-xl px-4 py-3.5 text-sm text-navy placeholder:text-muted focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/10 transition-all"
                  />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy mb-2">Portfolio / LinkedIn URL</label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full border border-border rounded-xl px-4 py-3.5 text-sm text-navy placeholder:text-muted focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy mb-2">Cover Letter</label>
                <textarea
                  rows={4}
                  placeholder="Tell us why you'd be a great fit for this role..."
                  className="w-full border border-border rounded-xl px-4 py-3.5 text-sm text-navy placeholder:text-muted focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/10 transition-all resize-none"
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-sm font-bold text-navy mb-2">Resume / CV *</label>
                <label className="flex flex-col items-center justify-center w-full border-2 border-dashed border-border rounded-2xl p-8 cursor-pointer hover:border-indigo/50 hover:bg-indigo/2 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-indigo/5 flex items-center justify-center mb-3 group-hover:bg-indigo/10 transition-colors">
                    <Upload size={22} className="text-indigo" />
                  </div>
                  {fileName ? (
                    <p className="text-sm font-bold text-indigo">{fileName}</p>
                  ) : (
                    <>
                      <p className="text-sm font-bold text-navy">Click to upload or drag & drop</p>
                      <p className="text-xs text-muted mt-1">PDF, DOCX up to 5MB</p>
                    </>
                  )}
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                </label>
              </div>

              <div className="flex gap-4 pt-2">
                <button type="button" onClick={onClose} className="btn-outline flex-1 justify-center">
                  Cancel
                </button>
                <button type="submit" className="btn-primary flex-1 justify-center">
                  Submit Application <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </>
        ) : (
          /* Success State */
          <div className="p-16 flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 15, stiffness: 200 }}
              className="w-24 h-24 rounded-full flex items-center justify-center mb-8 text-5xl shadow-lg"
              style={{ background: "linear-gradient(135deg, var(--color-indigo), var(--color-cyan))" }}
            >
              ✓
            </motion.div>
            <h2 className="text-3xl font-bold text-navy mb-3">Application Sent!</h2>
            <p className="text-muted text-lg leading-relaxed max-w-sm mb-10">
              Thanks for applying for <strong className="text-navy">{job.title}</strong>. Our team will review it and get back to you within 5 business days.
            </p>
            <button onClick={onClose} className="btn-primary px-10">
              Close
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

// ── PAGE ──
const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

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
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none opacity-40"
          style={{ background: "radial-gradient(circle, var(--color-cyan) 0%, transparent 70%)" }}
        />
        <div className="container-xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge badge-white mb-6">Join Our Team</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-[1.12]"
          >
            Build the Future <span className="gradient-text">With Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-white/70 mb-10"
          >
            We're a team of obsessive builders, designers, and thinkers. If you want to do the best work of your life — you've found the right place.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <a href="#openings">
              <button className="btn-primary">
                View Open Roles <ArrowRight size={16} />
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="section-pad bg-bg-subtle">
        <div className="container-xl">
          <div className="text-center mb-16">
            <span className="badge badge-indigo mb-5">Why Join Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy">
              Life at <span className="gradient-text">UNAI</span>
            </h2>
            <p className="text-lg text-muted max-w-xl mx-auto mt-4">
              We don't just offer jobs. We offer careers where you grow, thrive, and do your life's best work.
            </p>
          </div>
          <MagicCardContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" glowColor="99, 102, 241">
            {benefits.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="h-full"
              >
                <MagicCard
                  className="card p-8 flex flex-col group transition-transform duration-300 h-full w-full"
                  glowColor="99, 102, 241"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 relative z-10"
                    style={{
                      background: "linear-gradient(135deg, rgba(79,70,229,0.08) 0%, rgba(6,182,212,0.05) 100%)",
                      border: "1px solid rgba(79,70,229,0.1)",
                    }}
                  >
                    <b.icon size={24} className="text-indigo" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-navy group-hover:text-indigo transition-colors duration-300 relative z-10">
                    {b.label}
                  </h3>
                  <p className="text-[0.95rem] leading-relaxed text-muted relative z-10">{b.desc}</p>
                </MagicCard>
              </motion.div>
            ))}
          </MagicCardContainer>
        </div>
      </section>

      {/* ── Open Roles ── */}
      <section id="openings" className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center mb-16">
            <span className="badge badge-indigo mb-5">Open Positions</span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy">
              Current <span className="gradient-text">Openings</span>
            </h2>
            <p className="text-lg text-muted max-w-xl mx-auto mt-4">
              We are currently hiring across 4 key departments. Click "Apply Now" on any role to submit your application.
            </p>
          </div>

          <MagicCardContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8" glowColor="6, 182, 212">
            {openings.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
              >
                <MagicCard
                  className="card p-8 lg:p-10 cursor-pointer group flex flex-col hover:-translate-y-1 transition-transform duration-300 h-full w-full"
                  glowColor="6, 182, 212"
                >
                  <div className="flex items-start gap-5 mb-5 relative z-10">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 bg-gradient-to-br ${job.color} shadow-md`}
                    >
                      <job.icon size={26} className="text-white" />
                    </div>
                    <div>
                      <span className="badge badge-indigo mb-2">{job.dept}</span>
                      <h3 className="font-bold text-xl text-navy group-hover:text-indigo transition-colors duration-300 leading-tight">
                        {job.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-[0.95rem] leading-relaxed mb-6 text-muted flex-1 relative z-10">
                    {job.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                    {job.tags.map((tag) => (
                      <span key={tag} className="badge badge-cyan">{tag}</span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-border relative z-20">
                    <div className="flex items-center gap-5 text-sm font-semibold text-muted">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={15} className="text-indigo/60" />{job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={15} className="text-indigo/60" />{job.type}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="btn-primary py-2.5 px-6 text-sm whitespace-nowrap cursor-pointer z-30"
                    >
                      Apply Now <ArrowRight size={14} />
                    </button>
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </MagicCardContainer>
        </div>
      </section>

      {/* ── Hiring Process ── */}
      <section className="section-pad bg-bg-subtle">
        <div className="container-xl">
          <div className="text-center mb-16">
            <span className="badge badge-indigo mb-5">The Process</span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy">How We Hire</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {[
              { step: "01", title: "Apply Online", desc: "Submit your application directly from this page. It takes under 5 minutes." },
              { step: "02", title: "Screening Call", desc: "A 30-min intro call with our talent team to understand your background and goals." },
              { step: "03", title: "Technical Assessment", desc: "A practical challenge relevant to the role — real work, no puzzles or trick questions." },
              { step: "04", title: "Final Interview", desc: "Meet the team, see the culture, and get all your questions answered honestly." },
              { step: "05", title: "Offer & Onboarding", desc: "Competitive offer, smooth onboarding, and a buddy to help you hit the ground running." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                className="flex gap-6 mb-8 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-md text-white text-sm font-bold"
                  style={{ background: "linear-gradient(135deg, var(--color-indigo), var(--color-cyan))" }}
                >
                  {s.step}
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-xl mb-2 text-navy">{s.title}</h3>
                  <p className="text-[0.95rem] text-muted leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Application CTA ── */}
      <section className="section-pad bg-bg">
        <div className="container-xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] p-16 md:p-24 shadow-premium relative overflow-hidden"
            style={{ background: "var(--color-navy)" }}
          >
            <div className="absolute inset-0 gradient-hero opacity-80" />
            <div className="absolute inset-0 dot-grid opacity-10" />
            <div className="absolute top-0 right-0 w-96 h-96 blur-[120px] pointer-events-none opacity-40"
              style={{ background: "radial-gradient(circle, var(--color-indigo) 0%, transparent 70%)" }}
            />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg"
                style={{ background: "linear-gradient(135deg, var(--color-indigo), var(--color-cyan))" }}>
                <Briefcase size={28} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Don't See Your Role?</h2>
              <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-white/60">
                We're always looking for exceptional talent. Send us your portfolio and tell us how you'd like to contribute.
              </p>
              <button
                onClick={() => setSelectedJob({
                  icon: Briefcase, color: "from-indigo-500 to-blue-500",
                  title: "Open Application", dept: "Any Department",
                  location: "Remote / Flexible", type: "Full-time",
                  desc: "Tell us about yourself and how you can contribute to UNAI.",
                  tags: []
                })}
                className="btn-primary"
                style={{ padding: "16px 36px", fontSize: "1rem" }}
              >
                Send an Open Application <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Apply Modal ── */}
      <AnimatePresence>
        {selectedJob && (
          <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
        )}
      </AnimatePresence>
    </main>
  );
};

export default Careers;
