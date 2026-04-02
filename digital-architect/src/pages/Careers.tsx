import { motion } from "motion/react";
import { MapPin, Clock, ArrowRight, Briefcase, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const perks = [
  { emoji: "🌍", title: "Remote-First", desc: "Work from anywhere. We measure impact, not attendance." },
  { emoji: "🚀", title: "Accelerated Growth", desc: "Clear promotion paths and a ₹50k annual learning budget." },
  { emoji: "💡", title: "Impactful Work", desc: "Every project you ship reaches thousands of real users." },
  { emoji: "🏥", title: "Full Health Cover", desc: "Comprehensive health, dental, and vision for you and family." },
  { emoji: "🧘", title: "Work-Life Balance", desc: "Flexible hours, generous PTO, and mental health support." },
  { emoji: "💰", title: "Competitive Pay", desc: "Market-leading salaries with equity participation options." },
];

const openings = [
  {
    title: "Senior Full-Stack Engineer",
    dept: "Engineering",
    location: "Remote / Bangalore",
    type: "Full-time",
    desc: "Build and scale complex distributed systems across our fintech and enterprise client projects.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Cloud Infrastructure Architect",
    dept: "DevOps",
    location: "Remote / Mumbai",
    type: "Full-time",
    desc: "Design multi-region cloud architectures and own internal platform engineering initiatives.",
    tags: ["AWS", "Kubernetes", "Terraform"],
  },
  {
    title: "AI/ML Engineer",
    dept: "Research & AI",
    location: "Remote",
    type: "Full-time",
    desc: "Integrate large language models and ML pipelines into real-world client products.",
    tags: ["Python", "LangChain", "PyTorch"],
  },
  {
    title: "Product Designer (UI/UX)",
    dept: "Design",
    location: "Bangalore",
    type: "Full-time",
    desc: "Own design for cutting-edge web and mobile products, from concept to pixel-perfect delivery.",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    title: "Technical Project Manager",
    dept: "Operations",
    location: "Chennai / Hybrid",
    type: "Full-time",
    desc: "Drive delivery of complex multi-team projects with clear communication and agile processes.",
    tags: ["Jira", "Agile", "Stakeholder Mgmt"],
  },
  {
    title: "Cybersecurity Analyst",
    dept: "Security",
    location: "Remote",
    type: "Contract",
    desc: "Conduct security audits, pen tests, and implement best-practice security postures.",
    tags: ["OWASP", "Kali", "SOC 2"],
  },
];

const Careers = () => {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0B0F2F 0%, #1E2448 100%)" }}
      >
        <div className="absolute inset-0 dot-grid opacity-25" />
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)" }}
        />
        <div className="container-xl relative z-10 py-36 md:py-44 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge badge-white mb-6">Join Our Team</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Poppins, sans-serif", lineHeight: 1.15 }}
          >
            Build the Future{" "}
            <span className="gradient-text">With Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            We're a team of obsessive builders, designers, and thinkers. If you want to do the
            best work of your life — you've found the right place.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <a href="#openings">
              <button className="btn-primary">
                View Open Roles <ArrowRight size={16} />
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Perks ── */}
      <section style={{ background: "#F8FAFC" }} className="section-pad">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="badge badge-indigo mb-4">Why Join Us</span>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "Poppins, sans-serif", color: "#0F172A" }}
            >
              Life at <span className="gradient-text">UNAI</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                className="card p-7"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="text-3xl mb-4">{perk.emoji}</div>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: "Poppins, sans-serif", color: "#0F172A" }}>
                  {perk.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Roles ── */}
      <section id="openings" style={{ background: "#FFFFFF" }} className="section-pad">
        <div className="container-xl">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="badge badge-indigo mb-4">Open Positions</span>
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "Poppins, sans-serif", color: "#0F172A" }}
              >
                Current Openings
              </h2>
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {openings.map((job, i) => (
              <motion.div
                key={job.title}
                className="card p-8 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="badge badge-indigo mb-3">{job.dept}</span>
                    <h3 className="font-bold text-lg" style={{ fontFamily: "Poppins, sans-serif", color: "#0F172A" }}>
                      {job.title}
                    </h3>
                  </div>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-indigo"
                    style={{
                      border: "2px solid #E2E8F0",
                      background: "transparent",
                    }}
                  >
                    <ArrowRight size={14} style={{ color: "#4F46E5" }} />
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-5" style={{ color: "#475569" }}>
                  {job.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {job.tags.map((tag) => (
                    <span key={tag} className="badge badge-cyan">{tag}</span>
                  ))}
                </div>

                <div className="flex items-center gap-5 text-xs font-semibold" style={{ color: "#94A3B8" }}>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} />{job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />{job.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hiring Process ── */}
      <section style={{ background: "#F8FAFC" }} className="section-pad">
        <div className="container-xl">
          <div className="text-center mb-12">
            <span className="badge badge-indigo mb-4">The Process</span>
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "Poppins, sans-serif", color: "#0F172A" }}
            >
              How We Hire
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {[
              { step: "01", title: "Apply Online", desc: "Submit your resume and a short note on why you'd be a great fit." },
              { step: "02", title: "Screening Call", desc: "A 30-min intro call with our talent team to understand your background and goals." },
              { step: "03", title: "Technical Assessment", desc: "A practical challenge relevant to the role — no trick questions, just real work." },
              { step: "04", title: "Final Interview", desc: "Meet the team, discuss your work style, and get all your questions answered." },
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
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1"
                  style={{ background: "linear-gradient(135deg, #4F46E5, #06B6D4)" }}
                >
                  <span className="text-white text-xs font-bold" style={{ fontFamily: "Poppins, sans-serif" }}>{s.step}</span>
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1" style={{ fontFamily: "Poppins, sans-serif", color: "#0F172A" }}>{s.title}</h3>
                  <p className="text-sm" style={{ color: "#475569" }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Application CTA ── */}
      <section style={{ background: "#0B0F2F" }} className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="container-xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: "linear-gradient(135deg, #4F46E5, #06B6D4)" }}
            >
              <Briefcase size={26} className="text-white" />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-5"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Don't See Your Role?
            </h2>
            <p className="text-base mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
              We're always looking for exceptional people. Send us your portfolio and tell us how you'd like to contribute.
            </p>
            <Link to="/contact">
              <button className="btn-primary">Send an Open Application <ArrowRight size={16} /></button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Careers;
