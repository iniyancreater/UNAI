import { motion, AnimatePresence } from "motion/react";
import { MagicCardContainer, MagicCard } from "../components/MagicCard";
import {
  ArrowRight, CheckCircle, TrendingUp, Globe,
  ShieldCheck, Users, Star, ChevronRight, CalendarDays,
  Code, Briefcase, Megaphone, GraduationCap, Target, Bot,
  Building2, Brain, BarChart3, Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

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
    className="relative pt-24 pb-20 lg:pt-28 lg:pb-28 overflow-hidden"
    style={{ background: "var(--color-navy)" }}
  >
    <div className="absolute inset-0 gradient-hero opacity-95" />
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

    <div className="container-xl relative z-10">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* ── Left copy ── */}
        <div className="flex flex-col justify-center">


          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-[1.15] md:leading-[1.12]"
          >
            Empowering Businesses with{" "}
            <span className="gradient-text">Next-Gen Consulting</span>{" "}
            & Digital Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-lg md:text-xl leading-relaxed mb-12"
            style={{ color: "rgba(255,255,255,0.7)", maxWidth: "600px" }}
          >
            At UNAI Consultancy Services, we help startups, enterprises, and individuals accelerate growth through technology, strategy, and innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-wrap gap-5 mb-16"
          >
            <Link to="/contact">
              <button className="btn-primary">
                Get Started <ArrowRight size={18} />
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn-ghost">
                <CalendarDays size={18} /> Book Free Consultation
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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, cubicBezier: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative hidden lg:flex items-center justify-center p-4"
        >
          <div
            className="relative rounded-[2rem] w-full glass p-2 overflow-hidden shadow-2xl shadow-indigo-500/10"
            style={{ border: "1px solid rgba(255,255,255,0.15)" }}
          >
            <img 
              src="/hero-image.png" 
              alt="AI-Powered Consulting Platform" 
              className="w-full aspect-[4/3] object-cover rounded-[1.5rem] block"
              loading="eager"
            />
          </div>
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

/* ═══════════════════════ SHORT ABOUT ═══════════════════════════════ */
const ShortAbout = () => (
  <section className="section-pad bg-white">
    <div className="container-xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-xl md:text-3xl leading-relaxed text-navy font-medium">
          "UNAI Consultancy Services, a division of UNAI TECH, is a modern consulting firm delivering cutting-edge solutions in technology, business strategy, and digital transformation."
        </p>
      </motion.div>
    </div>
  </section>
);

/* ═══════════════════════ WHY CHOOSE US ═════════════════════════════ */
const WhyChooseUs = () => {
  const points = [
    { icon: Building2, text: "Startup to Enterprise Solutions" },
    { icon: Brain, text: "AI-Powered Approach" },
    { icon: BarChart3, text: "Data-Driven Strategies" },
    { icon: Globe, text: "Global Standards Execution" },
    { icon: Lightbulb, text: "Innovation First Mindset" }
  ];

  return (
    <section className="section-pad bg-bg-subtle">
      <div className="container-xl">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge badge-indigo mb-5"
          >
            Why UNAI
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-navy"
          >
            The <span className="gradient-text">Advantage</span>
          </motion.h2>
        </div>
        
        <MagicCardContainer className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto" glowColor="99, 102, 241">
          {points.map((p, i) => (
            <motion.div
              key={p.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <MagicCard
                className="card px-8 py-6 flex items-center gap-5 h-full"
                glowColor="99, 102, 241"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 relative z-10"
                  style={{ 
                    background: "linear-gradient(135deg, rgba(79,70,229,0.08) 0%, rgba(6,182,212,0.05) 100%)",
                    border: "1px solid rgba(79,70,229,0.1)"
                  }}
                >
                  <p.icon size={22} className="text-indigo" />
                </div>
                <p className="font-semibold text-[1.05rem] text-navy leading-snug relative z-10">
                  {p.text}
                </p>
              </MagicCard>
            </motion.div>
          ))}
        </MagicCardContainer>
      </div>
    </section>
  );
};

/* ═══════════════════════ SERVICES PREVIEW ══════════════════════════ */
const ServicesPreview = () => {
  const items = [
    {
      icon: Code,
      title: "Software Development",
      desc: "Custom web, mobile, and enterprise applications built for scalability and performance.",
    },
    {
      icon: Briefcase,
      title: "IT Consulting",
      desc: "Strategic guidance on technology stacks, infrastructure, and systemic modernization.",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      desc: "Data-driven growth strategies, SEO, and impactful campaigns that convert leads.",
    },
    {
      icon: GraduationCap,
      title: "Interview Training",
      desc: "Specialized coaching and technical prep to land roles at top-tier tech firms.",
    },
    {
      icon: Target,
      title: "Business Strategy",
      desc: "Actionable operational frameworks to optimize workflows, margins, and market positioning.",
    },
    {
      icon: Bot,
      title: "AI & Automation",
      desc: "Intelligent systems, language models, and process automation to elevate efficiency.",
    },
  ];

  return (
    <section className="section-pad bg-white">
      <div className="container-xl">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge badge-indigo mb-5"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-navy"
          >
            Solutions Built for <span className="gradient-text">Future Impact</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto text-muted"
          >
            We merge deep technical expertise with strategic insight to build 
            digital products and infrastructure that scale with your ambitions.
          </motion.p>
        </div>

        <MagicCardContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" glowColor="99, 102, 241">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <MagicCard
                className="card p-10 flex flex-col items-start group transition-all duration-300 h-full w-full"
                glowColor="99, 102, 241"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-white transition-all duration-300 group-hover:bg-transparent relative z-10"
                  style={{
                    background: "linear-gradient(135deg, rgba(79,70,229,0.08) 0%, rgba(6,182,212,0.05) 100%)",
                    border: "1px solid rgba(79,70,229,0.1)",
                  }}
                >
                  <item.icon size={26} className="text-indigo transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-navy group-hover:text-indigo transition-colors duration-300 relative z-10">
                  {item.title}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-muted mb-6 flex-1 relative z-10">
                  {item.desc}
                </p>
                <Link to="/services" className="text-indigo font-bold text-sm inline-flex items-center gap-2 group/btn relative z-10">
                  Learn More <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </MagicCard>
            </motion.div>
          ))}
        </MagicCardContainer>

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

/* ═══════════════════════ STATS COUNTER ═════════════════════════════ */
const StatsCounterSection = () => {
  const stats = [
    { target: 100, suffix: "+", label: "Projects Delivered" },
    { target: 50, suffix: "+", label: "Happy Clients" },
    { target: 10, suffix: "+", label: "Industries Served" },
    { target: 95, suffix: "%", label: "Client Satisfaction" },
  ];

  const AnimatedNumber = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          let startTime: number | null = null;
          const duration = 2000;
          const animate = (time: number) => {
            if (!startTime) startTime = time;
            const progress = Math.min((time - startTime) / duration, 1);
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeProgress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
          if (ref.current) observer.unobserve(ref.current);
        }
      });
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [end]);

    return (
      <span ref={ref} className="text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-white" style={{ fontFamily: "Poppins, sans-serif" }}>
        {count}{suffix}
      </span>
    );
  };

  return (
    <section className="section-pad relative overflow-hidden" style={{ background: "var(--color-navy)" }}>
      {/* Background embellishments */}
      <div className="absolute inset-0 line-grid opacity-10" />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] blur-[120px] pointer-events-none opacity-30"
        style={{ background: "radial-gradient(ellipse, var(--color-indigo) 0%, transparent 70%)" }}
      />
      
      <div className="container-xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 md:divide-x divide-white/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-4"
            >
              <div className="mb-3">
                <AnimatedNumber end={s.target} suffix={s.suffix} />
              </div>
              <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-white/50">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════ CASE STUDIES ══════════════════════════════ */
const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Software", "Marketing", "AI", "Strategy"];

  const cases = [
    {
      category: "Software",
      title: "Nexus Bank Global Platform",
      client: "Leading Retail Bank",
      challenge: "Legacy monolithic architecture causing 99.1% uptime and slow deployment cycles.",
      solution: "Migrated to a microservices architecture on AWS with fully automated CI/CD.",
      result: "65% faster load times, 99.99% uptime, and deployment cycles reduced from weeks to hours.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_FQAgVog0gXYM7S8aesCwDdZwQ4ss8D_AhJj7QfyOWcx65Mw6kGeCUzC-YHe0PBfPJKI-WPkd_E_6nXimHDyMdP3wQKbJN6Fynmxfo_W2vcy7FHQUECWzo3jbYjo_Y7a-znoTQUfWxfiz5FPVyOMZs5zWHm89l1QuxYcZ8F5rIeP_VLQMGBk-kHHnGHepMyj-MjTDtU7MEXhOdA1c8EEj8BhvuUOInJ6nMdybmaEyniELqne6JRXFVy-wN5QhFB1WEJGlIPyQ8Q",
    },
    {
      category: "AI",
      title: "Insight Engine Prediction",
      client: "Global Logistics Corp",
      challenge: "Manual supply chain routing was causing a 15% loss in fuel efficiency and delivery delays.",
      solution: "Developed a real-time LLM-powered analytics platform processing 40M+ events/day.",
      result: "12% reduction in fuel consumption and sub-100ms algorithmic routing latency.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9vMtduUG1hMeMuujaS8wpufJeUtPLoU78S1v_aUEsXtsc8tuY84vRfLJ4bb1UfBFlYAVG-fb_jAT7oX5_tGu4DS1UVXiU4O66CVaHAaU87r2qGhvtRAJkjp8v7RyYop3bW7qkgFaqbbjcAUV0-T4EqzLx_Pr0zAmXOaDOMRtoagGhFWX-YXeI43sT6R3tIhJh1RPBrrZIAQumFTGLWn4X7vlrRxkTwv-fe3JTjnDnNl2EbeozSQASPunCwpFDfmYsOChUrMb_sQ",
    },
    {
      category: "Marketing",
      title: "Veloce Retail Growth",
      client: "Luxury D2C Brand",
      challenge: "High cart abandonment rates and low organic search visibility during peak seasons.",
      solution: "Headless commerce replatforming combined with a robust programmatic SEO pipeline.",
      result: "3× revenue growth during peak sale events and a 140% increase in organic traffic.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVy9Im6gtHWutnx8zS8YqKCtXhjBn0NEGMTjVSN4u7nVKTF3lSOH0kHXNmv-yMBGEmBM7EwuGVwO2z5gr4sGkVQRgEQrewta5WEr1CnxT73Rd32XDS5feoQWhHVG7dzMJhBHpeGpabJY0YTr9hcPAcASJT4q8_iN0QP7G9rtrR7y-WtSDqxl_NueHGzkWsK9d_ZXdAlLADAq5tR8e3EvlPuwDwKFOS0uF_rdRlKioQ8-9fIeNsFVBMGXAZiUGh9frXNCrIon0UPg",
    },
    {
      category: "Strategy",
      title: "Market Transition Framework",
      client: "B2B SaaS Provider",
      challenge: "Struggling to transition from SMB market segments into Enterprise-level contracts.",
      solution: "Comprehensive restructuring of the operating model and enterprise go-to-market strategy.",
      result: "Secured 4 Fortune 500 contracts within 6 months, increasing ACV by 310%.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW8VWrKVD1dTjBlRYRi-AeMOl3oFihPk93U5VSwb2i_kZH026i_5MhJ20zK_TBl3rLoLtmaUnyO5Z1E8tJRONkBmf795fPwGdNt1ti35yXv55FETSpfXP6YCxzcNchuUTZja0MzYy7MnxTBXY4W_6LB3AqsbkxFzhN9KWcm3pUycHBamefH0f8UXhgiLbzeBA05Bv5iGwB8AHQbeRwuQ2AgR274h53K_G7fpatXiQ-Z-ueMldGYMN7p2yayiuxOOlcFy1sLaL5Wg",
    }
  ];

  const filteredCases = activeFilter === "All" ? cases : cases.filter(c => c.category === activeFilter);

  return (
    <section className="section-pad bg-bg-subtle min-h-[800px]">
      <div className="container-xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-10">
          <div className="max-w-xl">
            <span className="badge badge-indigo mb-5">Featured Impact</span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy">
              Proven Outcomes
            </h2>
          </div>
          <Link to="/services">
            <button className="btn-outline mb-1 hidden md:flex">
              Explore Our Portfolio <ArrowRight size={18} />
            </button>
          </Link>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-[0.95rem] font-bold transition-all duration-300 ${
                activeFilter === filter 
                  ? "bg-indigo text-white shadow-md shadow-indigo/30 scale-105" 
                  : "bg-white text-navy/70 border border-border hover:border-indigo/40 hover:text-indigo hover:bg-indigo/5"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <MagicCardContainer className="mt-8" glowColor="6, 182, 212">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredCases.map((c) => (
                <motion.div
                  layout
                  key={c.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  <MagicCard
                    className="card p-0 overflow-hidden group cursor-pointer flex flex-col h-full bg-white hover:-translate-y-1 hover:shadow-premium transition-all duration-400"
                    glowColor="6, 182, 212"
                  >
                    <div className="h-56 overflow-hidden relative shrink-0">
                      <img
                        src={c.img}
                        alt={c.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-5 left-5">
                        <span className="badge badge-white shadow-lg font-bold">{c.category}</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,15,47,0.5)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-8 flex flex-col flex-1 relative z-10 bg-white">
                      <h3 className="font-bold text-2xl mb-1 text-navy group-hover:text-indigo transition-colors duration-300">
                        {c.title}
                      </h3>
                      <p className="text-sm font-semibold tracking-widest text-indigo/70 mb-8 uppercase">
                        {c.client}
                      </p>
                      
                      <div className="space-y-5 mb-10 flex-1">
                        <div>
                          <p className="text-[0.7rem] font-bold uppercase tracking-widest text-muted mb-2">Challenge</p>
                          <p className="text-[0.95rem] text-navy/80 leading-relaxed font-medium">{c.challenge}</p>
                        </div>
                        <div>
                          <p className="text-[0.7rem] font-bold uppercase tracking-widest text-indigo mb-2">Solution</p>
                          <p className="text-[0.95rem] text-navy/80 leading-relaxed font-medium">{c.solution}</p>
                        </div>
                        <div className="bg-cyan/5 p-5 rounded-2xl border border-cyan/10">
                          <p className="text-[0.7rem] font-bold uppercase tracking-widest text-cyan-600 mb-2">Result</p>
                          <p className="text-[0.95rem] font-bold text-navy leading-relaxed">{c.result}</p>
                        </div>
                      </div>

                    </div>
                  </MagicCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </MagicCardContainer>
      </div>
    </section>
  );
};

/* ═══════════════════════ TESTIMONIALS ══════════════════════════════ */
const Testimonials = () => {
  const items = [
    {
      quote:
        "UNAI transformed our legacy platform into a modern powerhouse. Their attention to architectural detail is unparalleled.",
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
    <section className="section-pad relative overflow-hidden bg-navy">
      <div className="absolute inset-0 line-grid opacity-10" />
      <div className="container-xl relative z-10">
        <div className="text-center mb-20">
          <span className="badge badge-white mb-5">Client Success</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Trusted by <span className="gradient-text">Global Leaders</span>
          </h2>
        </div>
        <MagicCardContainer className="flex flex-nowrap md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0" glowColor="6, 182, 212">
          <style>{`
            /* Hide scrollbar for Chrome, Safari and Opera */
            .flex::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {items.map((t, i) => (
            <motion.div
              key={t.author}
              className="w-[85vw] sm:w-[50vw] shrink-0 snap-center md:w-auto md:shrink-1"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <MagicCard
                className="card-dark p-8 lg:p-10 flex flex-col h-full hover:shadow-2xl transition-all duration-500"
                glowColor="6, 182, 212"
              >
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} size={16} fill="#06B6D4" stroke="none" />
                  ))}
                </div>
                <p className="text-[1.05rem] leading-relaxed mb-10 text-white/80 italic flex-1 relative z-10">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/10 relative z-10">
                  <img
                    src={t.img}
                    alt={t.author}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo/30"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="font-bold text-white text-sm">
                      {t.author}
                    </p>
                    <p className="text-xs font-semibold tracking-wide text-white/40 uppercase">
                      {t.role}
                    </p>
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </MagicCardContainer>
      </div>
    </section>
  );
};

/* ═══════════════════════ FINAL CTA ═════════════════════════════════ */
const FinalCTA = () => (
  <section 
    className="py-24 md:py-32 relative overflow-hidden"
    style={{ background: "linear-gradient(135deg, var(--color-indigo-deep) 0%, var(--color-indigo-soft) 100%)" }}
  >
    <div className="absolute inset-0 dot-grid opacity-20" />
    <div 
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] blur-[120px] pointer-events-none opacity-20"
      style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
    />
    
    <div className="container-xl relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Let's build something extraordinary together.
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Schedule a free 30-minute consultation with our experts today.
        </p>
        <Link to="/contact">
          <button 
            className="bg-white hover:bg-gray-50 text-indigo font-bold py-4 px-10 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 mx-auto"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Schedule Free Call <ArrowRight size={18} />
          </button>
        </Link>
      </motion.div>
    </div>
  </section>
);

/* ═══════════════════════ PAGE EXPORT ═══════════════════════════════ */
const Home = () => (
  <main>
    <Hero />
    <ShortAbout />
    <WhyChooseUs />
    <ServicesPreview />
    <StatsCounterSection />
    <CaseStudies />
    <Testimonials />
    <FinalCTA />
  </main>
);

export default Home;
