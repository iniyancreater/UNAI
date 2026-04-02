import { motion } from "motion/react";
import {
  ArrowRight, CheckCircle, TrendingUp, Globe,
  ShieldCheck, Users, Star, ChevronRight, CalendarDays,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

/* ═══════════════════════ PARTICLE CANVAS ═══════════════════════════ */
const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 60;
    const DIST = 140;

    type P = { x: number; y: number; vx: number; vy: number; r: number; o: number };
    const particles: P[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
      o: Math.random() * 0.5 + 0.2,
    }));

    let animId: number;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${p.o})`;
        ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < DIST) {
            const a = (1 - d / DIST) * 0.32;
            const g = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            g.addColorStop(0, `rgba(79,70,229,${a})`);
            g.addColorStop(1, `rgba(6,182,212,${a})`);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = g;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
};

/* ═══════════════════════════ HERO ══════════════════════════════════ */
const Hero = () => (
  <section
    className="relative min-h-screen flex items-center overflow-hidden"
    style={{ background: "linear-gradient(135deg, #0B0F2F 0%, #141838 45%, #0B0F2F 100%)" }}
  >
    <ParticleCanvas />

    {/* Glow blobs */}
    <div
      className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(79,70,229,0.18) 0%, transparent 70%)" }}
    />
    <div
      className="absolute bottom-1/4 left-1/6 w-80 h-80 rounded-full blur-3xl pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)" }}
    />

    <div className="container-xl relative z-10 py-32 lg:py-0">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        style={{ minHeight: "100vh" }}
      >
        {/* ── Left copy ── */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge badge-white mb-6">✦ &nbsp;UNAI Consultancy Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "Poppins, sans-serif", lineHeight: 1.18, fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}
          >
            Empowering Businesses with{" "}
            <span className="gradient-text">Next-Gen Consulting</span>{" "}
            &amp; Digital Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-base md:text-lg leading-relaxed mb-10"
            style={{ color: "rgba(255,255,255,0.62)", maxWidth: "540px" }}
          >
            At UNAI Consultancy Services, we help startups, enterprises, and individuals
            accelerate growth through technology, strategy, and innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <Link to="/contact">
              <button className="btn-primary" style={{ fontSize: "1rem", padding: "14px 28px" }}>
                Get Started <ArrowRight size={17} />
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn-ghost" style={{ fontSize: "1rem", padding: "13px 28px" }}>
                <CalendarDays size={17} /> Book Free Consultation
              </button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-8"
          >
            {[
              { value: "120+", label: "Projects Delivered" },
              { value: "18", label: "Countries Served" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="text-2xl font-bold"
                  style={{ fontFamily: "Poppins, sans-serif", color: "#06B6D4" }}
                >
                  {s.value}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.42)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right illustration ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.25 }}
          className="relative hidden lg:flex items-center justify-center"
          style={{ minHeight: "520px" }}
        >
          <div
            className="relative rounded-3xl w-full"
            style={{
              background: "linear-gradient(135deg, rgba(79,70,229,0.12) 0%, rgba(6,182,212,0.07) 100%)",
              border: "1px solid rgba(79,70,229,0.25)",
              padding: "2.5rem",
            }}
          >
            {/* SVG Consulting / AI Illustration */}
            <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <circle cx="240" cy="180" r="160" fill="rgba(79,70,229,0.06)" />
              <circle cx="240" cy="180" r="120" fill="rgba(79,70,229,0.05)" />
              {/* Centre hub */}
              <circle cx="240" cy="180" r="44" fill="url(#cg)" />
              <circle cx="240" cy="180" r="38" fill="rgba(79,70,229,0.9)" />
              <text x="240" y="188" textAnchor="middle" fontSize="22" fontWeight="bold" fill="white" fontFamily="Poppins,sans-serif">AI</text>
              {/* Orbit rings */}
              <circle cx="240" cy="180" r="80" stroke="rgba(79,70,229,0.3)" strokeWidth="1" strokeDasharray="4 6" />
              <circle cx="240" cy="180" r="120" stroke="rgba(6,182,212,0.2)" strokeWidth="1" strokeDasharray="2 8" />
              {/* Orbit nodes */}
              <circle cx="240" cy="100" r="14" fill="rgba(6,182,212,0.9)" />
              <text x="240" y="105" textAnchor="middle" fontSize="10" fill="white">💡</text>
              <circle cx="310" cy="225" r="14" fill="rgba(99,102,241,0.9)" />
              <text x="310" y="230" textAnchor="middle" fontSize="10" fill="white">📊</text>
              <circle cx="170" cy="225" r="14" fill="rgba(6,182,212,0.85)" />
              <text x="170" y="230" textAnchor="middle" fontSize="10" fill="white">🚀</text>
              <circle cx="160" cy="145" r="12" fill="rgba(79,70,229,0.75)" />
              <text x="160" y="150" textAnchor="middle" fontSize="9" fill="white">⚙️</text>
              <circle cx="320" cy="145" r="12" fill="rgba(6,182,212,0.75)" />
              <text x="320" y="150" textAnchor="middle" fontSize="9" fill="white">🛡️</text>
              {/* Connector lines */}
              <line x1="240" y1="136" x2="240" y2="114" stroke="rgba(6,182,212,0.5)" strokeWidth="1.5" />
              <line x1="267" y1="214" x2="297" y2="212" stroke="rgba(99,102,241,0.5)" strokeWidth="1.5" />
              <line x1="214" y1="214" x2="184" y2="212" stroke="rgba(6,182,212,0.5)" strokeWidth="1.5" />
              <line x1="200" y1="161" x2="172" y2="153" stroke="rgba(79,70,229,0.4)" strokeWidth="1.5" />
              <line x1="280" y1="161" x2="309" y2="153" stroke="rgba(6,182,212,0.4)" strokeWidth="1.5" />
              {/* Floating data dots */}
              <circle cx="100" cy="80" r="4" fill="rgba(79,70,229,0.5)" />
              <circle cx="390" cy="90" r="3" fill="rgba(6,182,212,0.5)" />
              <circle cx="80" cy="280" r="5" fill="rgba(6,182,212,0.4)" />
              <circle cx="400" cy="270" r="4" fill="rgba(79,70,229,0.5)" />
              {/* Mini metric cards in SVG */}
              <rect x="30" y="150" width="88" height="42" rx="9" fill="rgba(255,255,255,0.07)" stroke="rgba(79,70,229,0.3)" strokeWidth="1" />
              <text x="44" y="168" fontSize="8" fill="rgba(255,255,255,0.5)" fontFamily="Inter,sans-serif">Strategy</text>
              <text x="44" y="182" fontSize="11" fontWeight="bold" fill="white" fontFamily="Poppins,sans-serif">+47%</text>
              <rect x="362" y="150" width="88" height="42" rx="9" fill="rgba(255,255,255,0.07)" stroke="rgba(6,182,212,0.3)" strokeWidth="1" />
              <text x="376" y="168" fontSize="8" fill="rgba(255,255,255,0.5)" fontFamily="Inter,sans-serif">Revenue</text>
              <text x="376" y="182" fontSize="11" fontWeight="bold" fill="white" fontFamily="Poppins,sans-serif">3× ROI</text>
              <rect x="155" y="290" width="130" height="42" rx="9" fill="rgba(255,255,255,0.07)" stroke="rgba(79,70,229,0.25)" strokeWidth="1" />
              <text x="170" y="308" fontSize="8" fill="rgba(255,255,255,0.5)" fontFamily="Inter,sans-serif">Client Satisfaction</text>
              <text x="170" y="322" fontSize="11" fontWeight="bold" fill="#06B6D4" fontFamily="Poppins,sans-serif">98% ★★★★★</text>
              <defs>
                <radialGradient id="cg" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(99,102,241,0.4)" />
                  <stop offset="100%" stopColor="rgba(79,70,229,0.1)" />
                </radialGradient>
              </defs>
            </svg>

            <div className="text-center mt-4">
              <p
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.32)", fontFamily: "Poppins,sans-serif" }}
              >
                AI-Powered Consulting Platform
              </p>
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
            className="absolute -top-5 -left-5 glass rounded-2xl px-4 py-3"
          >
            <div className="flex items-center gap-2">
              <CheckCircle size={16} style={{ color: "#06B6D4" }} />
              <span className="text-white text-xs font-semibold" style={{ fontFamily: "Poppins,sans-serif" }}>
                Enterprise Ready
              </span>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.6 }}
            className="absolute -bottom-5 -right-5 glass rounded-2xl px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <TrendingUp size={16} style={{ color: "#4F46E5" }} />
              <div>
                <p
                  className="text-white text-sm font-bold leading-none"
                  style={{ fontFamily: "Poppins,sans-serif" }}
                >
                  +240%
                </p>
                <p className="text-xs leading-none mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Avg. growth
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>

    {/* Bottom fade */}
    <div
      className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
      style={{ background: "linear-gradient(to bottom, transparent, #F8FAFC)" }}
    />
  </section>
);

/* ═══════════════════════ TRUSTED BY ════════════════════════════════ */
const TrustedBy = () => (
  <section style={{ background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
    <div className="container-xl py-12">
      <p
        className="text-center text-xs font-bold uppercase tracking-widest mb-8"
        style={{ color: "#94A3B8", fontFamily: "Poppins, sans-serif" }}
      >
        Trusted by industry leaders across the globe
      </p>
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
        {["Nexus Global", "PayStream", "CloudNine", "Vertex AI", "DataForge", "SecureEdge"].map((brand) => (
          <span
            key={brand}
            className="text-lg font-bold tracking-tight"
            style={{ color: "#CBD5E1", fontFamily: "Poppins, sans-serif" }}
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════ SERVICES PREVIEW ══════════════════════════ */
const ServicesPreview = () => {
  const items = [
    {
      icon: Globe,
      title: "Cloud Architecture",
      desc: "Scalable, resilient infrastructure on AWS, GCP & Azure — designed for global reach.",
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity",
      desc: "Zero-trust frameworks, security audits, and compliance programs that protect your assets.",
    },
    {
      icon: TrendingUp,
      title: "AI & Data Engineering",
      desc: "Predictive analytics, LLM integrations, and real-time data pipelines for competitive advantage.",
    },
    {
      icon: Users,
      title: "Digital Transformation",
      desc: "End-to-end modernization strategy from legacy migration to cloud-native architecture.",
    },
  ];

  return (
    <section style={{ background: "#F8FAFC" }} className="section-pad">
      <div className="container-xl">
        <div className="text-center mb-16">
          <span className="badge badge-indigo mb-4">What We Do</span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Poppins, sans-serif", color: "#0F172A" }}
          >
            Services Built for{" "}
            <span className="gradient-text">Enterprise Scale</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#475569" }}>
            We cover the full digital stack — from infrastructure to AI — with precision that enterprise clients expect.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="card p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(79,70,229,0.12) 0%, rgba(6,182,212,0.08) 100%)",
                }}
              >
                <item.icon size={22} style={{ color: "#4F46E5" }} />
              </div>
              <h3
                className="font-bold text-base mb-2"
                style={{ fontFamily: "Poppins, sans-serif", color: "#0F172A" }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services">
            <button className="btn-outline">
              View All Services <ChevronRight size={16} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════ CASE STUDIES ══════════════════════════════ */
const CaseStudies = () => {
  const cases = [
    {
      tag: "Fintech",
      title: "Nexus Bank UI",
      desc: "Rebuilt the entire customer-facing banking portal with a micro-frontend architecture — reducing load time by 65%.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_FQAgVog0gXYM7S8aesCwDdZwQ4ss8D_AhJj7QfyOWcx65Mw6kGeCUzC-YHe0PBfPJKI-WPkd_E_6nXimHDyMdP3wQKbJN6Fynmxfo_W2vcy7FHQUECWzo3jbYjo_Y7a-znoTQUfWxfiz5FPVyOMZs5zWHm89l1QuxYcZ8F5rIeP_VLQMGBk-kHHnGHepMyj-MjTDtU7MEXhOdA1c8EEj8BhvuUOInJ6nMdybmaEyniELqne6JRXFVy-wN5QhFB1WEJGlIPyQ8Q",
    },
    {
      tag: "Data Science",
      title: "Insight Engine",
      desc: "Real-time supply chain analytics platform processing 40M+ events/day with sub-100ms latency.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9vMtduUG1hMeMuujaS8wpufJeUtPLoU78S1v_aUEsXtsc8tuY84vRfLJ4bb1UfBFlYAVG-fb_jAT7oX5_tGu4DS1UVXiU4O66CVaHAaU87r2qGhvtRAJkjp8v7RyYop3bW7qkgFaqbbjcAUV0-T4EqzLx_Pr0zAmXOaDOMRtoagGhFWX-YXeI43sT6R3tIhJh1RPBrrZIAQumFTGLWn4X7vlrRxkTwv-fe3JTjnDnNl2EbeozSQASPunCwpFDfmYsOChUrMb_sQ",
    },
    {
      tag: "E-Commerce",
      title: "Veloce Retail",
      desc: "Headless commerce replatform that powered 3× revenue growth during peak sale events.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVy9Im6gtHWutnx8zS8YqKCtXhjBn0NEGMTjVSN4u7nVKTF3lSOH0kHXNmv-yMBGEmBM7EwuGVwO2z5gr4sGkVQRgEQrewta5WEr1CnxT73Rd32XDS5feoQWhHVG7dzMJhBHpeGpabJY0YTr9hcPAcASJT4q8_iN0QP7G9rtrR7y-WtSDqxl_NueHGzkWsK9d_ZXdAlLADAq5tR8e3EvlPuwDwKFOS0uF_rdRlKioQ8-9fIeNsFVBMGXAZiUGh9frXNCrIon0UPg",
    },
  ];

  return (
    <section style={{ background: "#FFFFFF" }} className="section-pad">
      <div className="container-xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-14">
          <div>
            <span className="badge badge-indigo mb-4">Portfolio</span>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "Poppins, sans-serif", color: "#0F172A" }}
            >
              Outcomes That Speak
            </h2>
          </div>
          <Link to="/services">
            <button className="btn-outline text-sm shrink-0">
              View All Projects <ArrowRight size={15} />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              className="card overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-7">
                <span className="badge badge-indigo mb-3">{c.tag}</span>
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                  {c.desc}
                </p>
                <button
                  className="mt-5 flex items-center gap-2 text-sm font-semibold transition-all duration-200"
                  style={{ color: "#4F46E5", fontFamily: "Poppins, sans-serif" }}
                >
                  Read Case Study <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════ TESTIMONIALS ══════════════════════════════ */
const Testimonials = () => {
  const items = [
    {
      quote:
        "Digital Architect transformed our legacy platform into a modern powerhouse. Their attention to architectural detail is unparalleled.",
      author: "Marcus Chen",
      role: "CTO, Vertex Global",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5HjWN4Ivv9CRLNUfOPaBmv2Lvy8E4ak4B68rATf8zMRcee-QmQ4CSCsBZJX7QFQ1nc76ghpj5I5z1hXMiKosPzHGKubip4ysmCa6Kt0r-fbfcWcDfEGTo_p_rHuZNS7hGE0qRLQ2L7RltVIGQj33xkCRUiQA8X-ZzBoOM8n63mdgKpI-vwEFr-ihJeknoKXezbYZ2FsM0pt_hyve76ZuEW0jZGbFrbt6Fbad3oohQ1HNkhxS6zqVenLON0Z0isxnKfaxj8j1RmQ",
    },
    {
      quote:
        "The fluidity of their process combined with technical precision is exactly what we needed to scale our fintech startup globally.",
      author: "Sarah Jenkins",
      role: "Head of Product, PayStream",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZiDH3Pucf6FY08L5uPfmau4vb890L0NbiuLfcsffs73Jad0xVH1Fb-P7rIJEmUzSk_Og_HbfCrirn3kkdTe7NX8UyK7poYI68fuzcXM_y3zQhrdZBtVMpxWZflCHbKRAdFVlSxKFCjxfrRJzKYHnizDGb8rxlyLhMKyjK8S78rbXwp-gE9Qz0HU_GXHO-VY71Vh57Qs8VF0aUSfDHEGVPBt9xv1hN_WTtQwq2KR-bvUSL610aS83UhsVhyljO2e_xf0rfR8t4Xg",
    },
    {
      quote:
        "They don't just solve problems — they anticipate them. Their cloud architecture saved us thousands in monthly overhead.",
      author: "David Miller",
      role: "CEO, CloudNine Logistics",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDS0MCNBmf41jMleoV1VdLVdOupiJSXr-u5dv_P0RDYYTYv1dDriVREkH9AWU0yi9OBdmk3qnmMW0qeY0lp3vt-PpCV0O_hkja0usJDQq3nA4qQCUnp4igSx5ev5Bhg7qDKWPmMgbrlp82wRHpzOmBZyQ54O8wagiD36kcOUDbosNyTZrtXUdxpjAhTsAPXD4FJGWl_rJRZSW3cAbymOqAyOgY8oQZghdKfo7EZkeE22GIM0ITD08IKAOIJ0v5Vi--P-QHkZUMKLA",
    },
  ];

  return (
    <section style={{ background: "#0B0F2F" }} className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 line-grid opacity-20" />
      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <span className="badge badge-white mb-4">Client Voices</span>
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {items.map((t, i) => (
            <motion.div
              key={t.author}
              className="card-dark p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} size={15} fill="#F59E0B" style={{ color: "#F59E0B" }} />
                ))}
              </div>
              <p
                className="text-sm leading-relaxed mb-7 italic"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.author}
                  className="w-11 h-11 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p
                    className="font-semibold text-white text-sm"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {t.author}
                  </p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════ FINAL CTA ═════════════════════════════════ */
const FinalCTA = () => (
  <section style={{ background: "#F8FAFC" }} className="section-pad">
    <div className="container-xl">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl overflow-hidden relative"
        style={{ background: "linear-gradient(135deg, #0B0F2F 0%, #1E2448 100%)" }}
      >
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(79,70,229,0.3) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 p-12 md:p-20 text-center">
          <span className="badge badge-cyan mb-6">Get Started Today</span>
          <h2
            className="text-3xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Ready to <span className="gradient-text">Elevate</span> Your Digital Stack?
          </h2>
          <p
            className="text-lg mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Schedule a free architectural review and discover how we can accelerate your growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <button className="btn-primary">
                Book a Free Consultation <ArrowRight size={16} />
              </button>
            </Link>
            <Link to="/services">
              <button className="btn-ghost">View Our Services</button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ═══════════════════════ PAGE EXPORT ═══════════════════════════════ */
const Home = () => (
  <main>
    <Hero />
    <TrustedBy />
    <ServicesPreview />
    <CaseStudies />
    <Testimonials />
    <FinalCTA />
  </main>
);

export default Home;
