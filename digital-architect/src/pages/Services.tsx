import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MagicCardContainer, MagicCard } from "../components/MagicCard";
import { 
  Code2, 
  Laptop, 
  Briefcase, 
  Megaphone, 
  GraduationCap, 
  BarChart3, 
  Users, 
  TrendingUp, 
  Settings, 
  Sparkles, 
  ChevronDown, 
  CheckCircle, 
  ArrowRight,
  Rocket,
  Activity,
  Landmark,
  ShoppingCart,
  BookOpen,
  Building,
  Factory,
  CloudCog
} from "lucide-react";
import { Link } from "react-router-dom";

const servicesData = [
  {
    icon: Code2,
    title: "Software Development",
    desc: "End-to-end engineering of scalable web, mobile, and enterprise applications tailored precisely to your business needs.",
    bullets: ["Custom Web & Mobile Apps", "Microservices Architecture", "API Design & Integration", "Legacy System Modernization"],
  },
  {
    icon: Laptop,
    title: "IT Consulting & Digital Transformation",
    desc: "Strategic guidance on technology stacks, infrastructure, and systemic modernization to propel your digital journey.",
    bullets: ["IT Infrastructure Audits", "Cloud Migration Strategy", "Digital Maturity Assessment", "Enterprise Architecture Design"],
  },
  {
    icon: Briefcase,
    title: "Business Strategy Consulting",
    desc: "Actionable operational frameworks to optimize workflows, margins, and market positioning.",
    bullets: ["Market Entry Strategy", "Competitive Analysis", "Operating Model Design", "Growth & Scalability Planning"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Data-driven growth strategies, SEO, and impactful campaigns that convert leads and amplify your brand presence.",
    bullets: ["SEO & Content Strategy", "Performance Marketing (PPC)", "Social Media Management", "Conversion Rate Optimization"],
  },
  {
    icon: GraduationCap,
    title: "Interview Training",
    desc: "Specialized coaching and technical prep to land roles at top-tier tech firms and Fortune 500 companies.",
    bullets: ["Mock Technical Interviews", "Resume & Portfolio Review", "System Design Coaching", "Behavioral Interview Prep"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics & BI",
    desc: "Robust data pipelines, warehouses, and real-time analytics for data-driven decision making.",
    bullets: ["Data Warehouse Setup", "Business Intelligence Dashboards", "Predictive Analytics", "Data Governance & Quality"],
  },
  {
    icon: Users,
    title: "HR & Recruitment Consulting",
    desc: "Building high-performance teams by designing efficient recruitment workflows and optimizing talent acquisition.",
    bullets: ["Talent Sourcing Strategy", "Employer Branding", "Interview Process Optimization", "Organizational Design"],
  },
  {
    icon: TrendingUp,
    title: "Financial & Risk Consulting",
    desc: "Comprehensive financial modeling, risk assessment, and compliance strategies for sustainable business growth.",
    bullets: ["Financial Forecasting", "Risk Mitigation Strategies", "Regulatory Compliance", "M&A Technical Due Diligence"],
  },
  {
    icon: Settings,
    title: "Operations Consulting",
    desc: "Streamlining business processes, reducing overhead, and maximizing operational efficiency across your organization.",
    bullets: ["Supply Chain Optimization", "Process Automation (RPA)", "Lean Agile Implementation", "Performance Benchmarking"],
  },
  {
    icon: Sparkles,
    title: "AI & Innovation Consulting",
    desc: "Integrating intelligent automation, predictive analytics, and LLM-powered features to create a definitive competitive edge.",
    bullets: ["Custom LLM Integration", "AI-Powered Automation", "Innovation Workshops & Prototyping", "Machine Learning Roadmaps"],
    premium: true,
  },
];

const process = [
  { step: "01", title: "Discovery & Strategy", desc: "We immerse in your business context, map technical constraints, and define a clear solution blueprint before any code is written." },
  { step: "02", title: "Architecture Design", desc: "Our engineers design a scalable, maintainable system architecture informed by industry best practices and your specific scale requirements." },
  { step: "03", title: "Agile Delivery", desc: "Rapid, iterative development sprints with continuous delivery — shipping working software and adapting based on real feedback." },
  { step: "04", title: "Launch & Scale", desc: "Production deployment with full monitoring, performance optimization, and a dedicated support plan for long-term reliability." },
];

const industries = [
  { icon: Rocket, title: "Startups", desc: "Rapid scaling and MVP architecture for disruptive new ventures." },
  { icon: Activity, title: "Healthcare", desc: "HIPAA-compliant systems and robust telemedicine platforms." },
  { icon: Landmark, title: "Finance", desc: "Secure fintech infrastructures and high-frequency trading tools." },
  { icon: ShoppingCart, title: "E-commerce", desc: "Headless commerce solutions handling peak global traffic." },
  { icon: BookOpen, title: "Education", desc: "Interactive EdTech platforms and scalable learning systems." },
  { icon: Building, title: "Real Estate", desc: "PropTech innovations, property portals, and smart systems." },
  { icon: Factory, title: "Manufacturing", desc: "IoT integration, supply chain automation, and industry 4.0." },
  { icon: CloudCog, title: "IT & SaaS", desc: "Multi-tenant B2B architectures and high-availability cloud." },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-64 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(6,182,212,0.18) 0%, transparent 70%)" }}
        />
        <div className="container-xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge badge-white mb-6">What We Do</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 md:mb-10 leading-[1.15] md:leading-[1.12]"
          >
            Services Built for <span className="gradient-text">Scale</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-white/70"
          >
            A full spectrum of digital engineering disciplines — from cloud infrastructure to AI integration.
            We bring the depth of a specialist firm and the breadth of a full-service partner.
          </motion.p>
        </div>
      </section>

      {/* ── Services Accordion ── */}
      <section className="section-pad bg-bg-subtle">
        <div className="container-xl max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              Our <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Explore our comprehensive suite of consulting and engineering services designed to elevate your business.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-border overflow-hidden">
            {servicesData.map((svc, i) => {
              const isOpen = openIndex === i;
              return (
                <div 
                  key={svc.title} 
                  className={`border-b border-border last:border-0 transition-colors duration-300 ${isOpen ? 'bg-bg-subtle' : ''}`}
                >
                  <button
                    className="w-full text-left py-6 px-6 md:px-10 flex items-center justify-between group focus:outline-none"
                    onClick={() => toggleAccordion(i)}
                  >
                    <div className="flex items-center gap-5 md:gap-8">
                      <div 
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shrink-0
                          ${isOpen 
                            ? 'bg-indigo text-white shadow-md shadow-indigo/20 scale-110' 
                            : 'bg-white text-indigo border border-indigo/10 group-hover:bg-indigo/5'
                          }
                        `}
                      >
                        <svc.icon size={24} />
                      </div>
                      <div>
                        {svc.premium && (
                          <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-widest text-indigo mb-1 bg-indigo/10 px-2 py-0.5 rounded-full">
                            <Sparkles size={10} /> Premium Offering
                          </span>
                        )}
                        <h3 className="text-xl md:text-2xl font-bold transition-colors duration-300 text-navy group-hover:text-indigo">
                          {svc.title}
                        </h3>
                      </div>
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-indigo/10 text-indigo' : 'bg-transparent text-muted group-hover:bg-indigo/5 group-hover:text-indigo'}`}>
                      <ChevronDown
                        size={24}
                        className={`transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 px-6 md:px-10 lg:pl-[6.5rem]">
                          <p className="text-[1.05rem] text-muted leading-relaxed mb-6 max-w-3xl">
                            {svc.desc}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                            {svc.bullets.map((b) => (
                              <div key={b} className="flex items-start gap-3">
                                <CheckCircle size={18} className="text-cyan mt-[3px] shrink-0" />
                                <span className="text-[0.95rem] text-navy font-medium leading-snug">{b}</span>
                              </div>
                            ))}
                          </div>
                          
                          {svc.premium && (
                            <div className="mt-8 pt-6 border-t border-indigo/10">
                              <Link to="/contact">
                                <button className="text-sm font-bold text-indigo hover:text-indigo/80 transition-colors flex items-center gap-2">
                                  Inquire about {svc.title} <ArrowRight size={16} />
                                </button>
                              </Link>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center mb-20">
            <span className="badge badge-indigo mb-5">How We Work</span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy">
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
                <div className="step-number leading-none mb-6">{p.step}</div>
                <h3 className="font-bold text-xl mb-4 text-navy">
                  {p.title}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-muted">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="section-pad bg-bg-subtle relative overflow-hidden">
        <div className="container-xl relative z-10">
          <div className="text-center mb-16">
            <span className="badge badge-indigo mb-5">Industries We Serve</span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy">
              Expertise Across <span className="gradient-text">Sectors</span>
            </h2>
          </div>
          <MagicCardContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" glowColor="99, 102, 241">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
              >
                <MagicCard
                  className="card p-8 group transition-transform duration-300 flex flex-col h-full w-full"
                  glowColor="99, 102, 241"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white border border-border/80 mb-5 transition-all duration-300 relative z-10">
                    <ind.icon size={22} className="text-indigo" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2 relative z-10">{ind.title}</h3>
                  <p className="text-[0.9rem] text-muted leading-relaxed relative z-10">{ind.desc}</p>
                </MagicCard>
              </motion.div>
            ))}
          </MagicCardContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad bg-bg">
        <div className="container-xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] p-16 md:p-24 shadow-premium relative text-center overflow-hidden"
            style={{ background: "var(--color-navy)" }}
          >
            <div className="absolute inset-0 gradient-hero opacity-80" />
            <div className="absolute inset-0 dot-grid opacity-10" />
            <div
              className="absolute top-0 right-0 w-96 h-96 blur-[120px] pointer-events-none opacity-40"
              style={{ background: "radial-gradient(circle, var(--color-indigo) 0%, transparent 70%)" }}
            />
            
            <div className="relative z-10">
              <span className="badge badge-cyan mb-6">Let's Build Together</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your <span className="gradient-text">Next Project</span>?
              </h2>
              <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-white/60">
                Schedule a free architectural consultation. We'll assess your needs and outline a path to success.
              </p>
              <Link to="/contact">
                <button className="btn-primary" style={{ padding: "16px 36px", fontSize: "1rem" }}>
                  Schedule a Consultation <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;
