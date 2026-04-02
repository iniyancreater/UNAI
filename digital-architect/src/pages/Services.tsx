import { motion } from "motion/react";
import { Code2, Cloud, Brain, ShieldCheck, BarChart3, Smartphone, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "End-to-end engineering of scalable web and enterprise applications tailored precisely to your business needs.",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    highlights: ["Microservices architecture", "API-first design", "CI/CD pipelines"],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    desc: "Design and deployment of resilient, cost-optimized cloud infrastructure across AWS, GCP, and Azure.",
    tags: ["AWS", "Terraform", "Kubernetes", "CI/CD"],
    highlights: ["Multi-region deployments", "Auto-scaling", "Cost optimization"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Integrating intelligent automation, predictive analytics, and LLM-powered features into your product stack.",
    tags: ["Python", "LangChain", "OpenAI", "TensorFlow"],
    highlights: ["RAG pipelines", "Fine-tuned LLMs", "Real-time inference"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "Comprehensive security audits, penetration testing, and zero-trust architecture implementation.",
    tags: ["OWASP", "Pen Testing", "SOC 2", "Vault"],
    highlights: ["Zero-trust frameworks", "Compliance audits", "Threat modeling"],
  },
  {
    icon: BarChart3,
    title: "Data Engineering",
    desc: "Robust data pipelines, warehouses, and real-time analytics for data-driven decision making.",
    tags: ["dbt", "Spark", "Kafka", "Snowflake"],
    highlights: ["Real-time streaming", "Data lakehouse", "BI dashboards"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Cross-platform mobile apps with native performance and exceptional user experiences.",
    tags: ["React Native", "Flutter", "Expo", "Firebase"],
    highlights: ["iOS & Android", "Offline-first", "Push notifications"],
  },
];

const process = [
  { step: "01", title: "Discovery & Strategy", desc: "We immerse in your business context, map technical constraints, and define a clear solution blueprint before any code is written." },
  { step: "02", title: "Architecture Design", desc: "Our engineers design a scalable, maintainable system architecture informed by industry best practices and your specific scale requirements." },
  { step: "03", title: "Agile Delivery", desc: "Rapid, iterative development sprints with continuous delivery — shipping working software and adapting based on real feedback." },
  { step: "04", title: "Launch & Scale", desc: "Production deployment with full monitoring, performance optimization, and a dedicated support plan for long-term reliability." },
];

const Services = () => {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0B0F2F 0%, #1E2448 100%)" }}
      >
        <div className="absolute inset-0 dot-grid opacity-25" />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-64 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(6,182,212,0.18) 0%, transparent 70%)" }}
        />
        <div className="container-xl relative z-10 py-36 md:py-44 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge badge-white mb-6">What We Do</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Poppins, sans-serif", lineHeight: 1.15 }}
          >
            Services Built for <span className="gradient-text">Scale</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            A full spectrum of digital engineering disciplines — from cloud infrastructure to AI integration.
            We bring the depth of a specialist firm and the breadth of a full-service partner.
          </motion.p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section style={{ background: "#F8FAFC" }} className="section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                className="card p-8 flex flex-col"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div
                  className="w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: "linear-gradient(135deg, rgba(79,70,229,0.12) 0%, rgba(6,182,212,0.08) 100%)" }}
                >
                  <svc.icon size={22} style={{ color: "#4F46E5" }} />
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "Poppins, sans-serif", color: "#0F172A" }}>
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#475569" }}>{svc.desc}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6 flex-1">
                  {svc.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <CheckCircle size={13} style={{ color: "#06B6D4", flexShrink: 0 }} />
                      <span className="text-xs" style={{ color: "#475569" }}>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span key={tag} className="badge badge-indigo">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section style={{ background: "#FFFFFF" }} className="section-pad">
        <div className="container-xl">
          <div className="text-center mb-16">
            <span className="badge badge-indigo mb-4">How We Work</span>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "Poppins, sans-serif", color: "#0F172A" }}
            >
              Our Delivery <span className="gradient-text">Process</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative"
              >
                {/* Connector line (not on last) */}
                {i < process.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-full w-full h-px"
                    style={{ background: "linear-gradient(90deg, rgba(79,70,229,0.3), transparent)" }}
                  />
                )}
                <div className="step-number leading-none mb-4">{p.step}</div>
                <h3 className="font-bold text-base mb-3" style={{ fontFamily: "Poppins, sans-serif", color: "#0F172A" }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#0B0F2F" }} className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div
          className="absolute top-0 right-0 w-96 h-96 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(79,70,229,0.3) 0%, transparent 70%)" }}
        />
        <div className="container-xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge badge-cyan mb-5">Let's Build Together</span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-5"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Ready to Start Your <span className="gradient-text">Next Project</span>?
            </h2>
            <p className="text-base mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
              Schedule a free architectural consultation. We'll assess your needs and outline a path to success.
            </p>
            <Link to="/contact">
              <button className="btn-primary">
                Schedule a Consultation <ArrowRight size={16} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;
