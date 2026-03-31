import { motion } from "motion/react";
import { 
  Cloud, 
  Terminal, 
  ShieldCheck, 
  BarChart3, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Headphones,
  Star,
  Mail,
  Phone,
  Globe,
  Share2,
  AtSign,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/70 backdrop-blur-xl shadow-glass h-16" : "bg-transparent h-20"
      }`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 h-full">
        <div className="text-2xl font-black tracking-tighter text-slate-900">Digital Architect</div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="font-headline tracking-tight font-semibold text-sm text-slate-600 hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="signature-gradient text-on-primary px-6 py-2.5 rounded-xl font-semibold text-sm hover:scale-105 transition-transform shadow-signature">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-slate-100 p-6 space-y-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-headline font-semibold text-slate-600"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full signature-gradient text-on-primary px-6 py-3 rounded-xl font-semibold text-sm">
            Get Started
          </button>
        </motion.div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-56 md:pb-40 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-color-primary-container)_0%,_transparent_40%)] opacity-20"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-widest uppercase bg-tertiary-container text-on-tertiary-container rounded-full">
            Future Ready IT
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 mb-8 leading-[1.1] md:leading-[0.95]">
            Innovative <span className="text-primary italic">Digital</span> Solutions
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg">
            We build high-performance digital architectures that balance technical authority with innovative fluidity. Scaling your vision into reality.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="signature-gradient text-on-primary px-8 py-4 rounded-xl font-bold text-base shadow-signature hover:scale-105 transition-transform duration-300">
              Get Started
            </button>
            <button className="bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-bold text-base hover:bg-surface-container-highest transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-tertiary-fixed/30 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
          <div className="relative z-10 glass-card rounded-[2rem] p-4 shadow-2xl">
            <img 
              alt="Tech Architecture" 
              className="rounded-[1.5rem] w-full h-[300px] md:h-[500px] object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW8VWrKVD1dTjBlRYRi-AeMOl3oFihPk93U5VSwb2i_kZH026i_5MhJ20zK_TBl3rLoLtmaUnyO5Z1E8tJRONkBmf795fPwGdNt1ti35yXv55FETSpfXP6YCxzcNchuUTZja0MzYy7MnxTBXY4W_6LB3AqsbkxFzhN9KWcm3pUycHBamefH0f8UXhgiLbzeBA05Bv5iGwB8AHQbeRwuQ2AgR274h53K_G7fpatXiQ-Z-ueMldGYMN7p2yayiuxOOlcFy1sLaL5Wg"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-24 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-square bg-surface-container-highest rounded-[3rem] overflow-hidden">
              <img 
                alt="Team Collaboration" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7ZeJyYdzaQ3_ROcDkXDMEw_UbnbEifFb8t_jIW3qqB5MzDmbyaL8R81f3a4LogQAq9t7C-54AWiBlQIq4SSVKjfLg5IhMPOLyNIuoI-JYeVLnfuufHTYMrfPjtn_O3HW-uXeGlto5M65v2UwpAW7Ab2lHPsGPbQAQ-c9Sh4-T38BCglVmg9YeYT76Y0WNfpGsPeTps9ptb-YI3_6Hw288DeWwSpD6Z7m84bJrJKnM6e4qn0FgKWXaFLfVcX0tFKx-YaszjleWWg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-2xl shadow-xl max-w-xs">
              <p className="text-primary font-headline text-4xl font-bold mb-1">12+</p>
              <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Years of Precision</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Architecting the <span className="text-primary">Next Era</span> of Tech.
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
              At Digital Architect, we don't just write code. We design ecosystems. Our approach combines rigorous engineering principles with an editorial eye for user experience, ensuring your business stands out in a crowded digital landscape.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-headline text-2xl font-bold text-slate-900">500+</h4>
                <p className="text-sm text-on-surface-variant">Global Projects Delivered</p>
              </div>
              <div>
                <h4 className="font-headline text-2xl font-bold text-slate-900">98%</h4>
                <p className="text-sm text-on-surface-variant">Client Retention Rate</p>
              </div>
            </div>
            <button className="text-primary font-bold flex items-center gap-2 group">
              Learn more about our mission
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Cloud Infrastructure",
      desc: "High-availability architectures designed for global reach and zero-downtime scalability.",
      icon: <Cloud size={32} />,
      tags: ["AWS", "Azure"],
      colSpan: "md:col-span-3",
      gradient: true
    },
    {
      title: "Custom Software",
      desc: "Bespoke enterprise applications tailored to your specific operational workflows and needs.",
      icon: <Terminal size={32} />,
      tags: ["Fullstack", "API First"],
      colSpan: "md:col-span-3",
      gradient: false,
      iconBg: "bg-tertiary-fixed"
    },
    {
      title: "Cyber Security",
      desc: "Fortifying your perimeter with modern zero-trust protocols and monitoring.",
      icon: <ShieldCheck size={24} />,
      colSpan: "md:col-span-2"
    },
    {
      title: "Data Intelligence",
      desc: "Converting raw metrics into actionable growth strategies through AI and ML.",
      icon: <BarChart3 size={24} />,
      colSpan: "md:col-span-2"
    },
    {
      title: "Mobile First",
      desc: "Native and cross-platform mobile experiences that users actually love.",
      icon: <Smartphone size={24} />,
      colSpan: "md:col-span-2"
    }
  ];

  return (
    <section className="py-24 bg-surface" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">Core Competencies</h2>
          <p className="text-on-surface-variant">Specialized services designed to scale with precision and fluidity.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${service.colSpan} bg-surface-container-lowest p-8 md:p-10 rounded-[2rem] hover:shadow-2xl transition-all duration-500 group`}
            >
              <div className={`w-14 h-14 ${service.gradient ? "signature-gradient text-on-primary" : service.iconBg || "bg-primary-container/20 text-primary"} rounded-xl flex items-center justify-center mb-8 shadow-lg`}>
                {service.icon}
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-on-surface-variant mb-6">{service.desc}</p>
              {service.tags && (
                <div className="flex gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-tertiary-container text-[10px] font-bold uppercase rounded-full text-on-tertiary-container">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "Nexus Bank UI",
      category: "Fintech",
      desc: "Modernizing global banking with a fluid micro-frontend architecture.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_FQAgVog0gXYM7S8aesCwDdZwQ4ss8D_AhJj7QfyOWcx65Mw6kGeCUzC-YHe0PBfPJKI-WPkd_E_6nXimHDyMdP3wQKbJN6Fynmxfo_W2vcy7FHQUECWzo3jbYjo_Y7a-znoTQUfWxfiz5FPVyOMZs5zWHm89l1QuxYcZ8F5rIeP_VLQMGBk-kHHnGHepMyj-MjTDtU7MEXhOdA1c8EEj8BhvuUOInJ6nMdybmaEyniELqne6JRXFVy-wN5QhFB1WEJGlIPyQ8Q",
      delay: 0
    },
    {
      title: "Insight Engine",
      category: "Data Science",
      desc: "Real-time predictive analytics platform for supply chain optimization.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9vMtduUG1hMeMuujaS8wpufJeUtPLoU78S1v_aUEsXtsc8tuY84vRfLJ4bb1UfBFlYAVG-fb_jAT7oX5_tGu4DS1UVXiU4O66CVaHAaU87r2qGhvtRAJkjp8v7RyYop3bW7qkgFaqbbjcAUV0-T4EqzLx_Pr0zAmXOaDOMRtoagGhFWX-YXeI43sT6R3tIhJh1RPBrrZIAQumFTGLWn4X7vlrRxkTwv-fe3JTjnDnNl2EbeozSQASPunCwpFDfmYsOChUrMb_sQ",
      delay: 0.2,
      offset: true
    },
    {
      title: "Veloce Retail",
      category: "E-Commerce",
      desc: "Omni-channel shopping experience with headless commerce integration.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVy9Im6gtHWutnx8zS8YqKCtXhjBn0NEGMTjVSN4u7nVKTF3lSOH0kHXNmv-yMBGEmBM7EwuGVwO2z5gr4sGkVQRgEQrewta5WEr1CnxT73Rd32XDS5feoQWhHVG7dzMJhBHpeGpabJY0YTr9hcPAcASJT4q8_iN0QP7G9rtrR7y-WtSDqxl_NueHGzkWsK9d_ZXdAlLADAq5tR8e3EvlPuwDwKFOS0uF_rdRlKioQ8-9fIeNsFVBMGXAZiUGh9frXNCrIon0UPg",
      delay: 0.4
    }
  ];

  return (
    <section className="py-24 bg-surface-container" id="portfolio">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">Precision Portfolios</h2>
            <p className="text-on-surface-variant">A curated selection of digital architectures we've brought to life for industry leaders.</p>
          </div>
          <button className="font-bold text-primary flex items-center gap-2 group pb-2 border-b-2 border-primary/20 hover:border-primary transition-all">
            View all projects
            <ArrowRight size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: project.delay }}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-surface-container-lowest ${project.offset ? "lg:mt-12" : ""}`}
            >
              <img 
                alt={project.title} 
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700" 
                src={project.img}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-[10px] font-bold text-on-tertiary-container bg-tertiary-container w-fit px-3 py-1 rounded-full mb-3 uppercase tracking-widest">
                  {project.category}
                </span>
                <h4 className="text-2xl font-headline font-bold text-white mb-2">{project.title}</h4>
                <p className="text-white/80 text-sm mb-6">{project.desc}</p>
                <button className="bg-white text-primary px-6 py-2.5 rounded-xl text-sm font-bold w-fit hover:bg-on-primary transition-colors">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Quality Without Compromise",
      desc: "We adhere to the highest coding standards and architectural patterns, ensuring long-term maintainability.",
      icon: <CheckCircle2 size={24} />
    },
    {
      title: "Agile & Fluid Delivery",
      desc: "Our \"Precision Fluidity\" approach allows us to pivot rapidly without losing architectural integrity.",
      icon: <Zap size={24} />
    },
    {
      title: "Strategic Partnership",
      desc: "We act as an extension of your CTO office, providing strategic roadmap guidance at every step.",
      icon: <Headphones size={24} />
    }
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-4xl font-bold mb-8">
              Why the Industry Trusts Our <span className="text-primary italic">Architecture</span>.
            </h2>
            <div className="space-y-8">
              {reasons.map(reason => (
                <div key={reason.title} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    {reason.icon}
                  </div>
                  <div>
                    <h5 className="text-lg font-bold mb-2">{reason.title}</h5>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-surface-container-low rounded-[3rem] p-6 md:p-12"
          >
            <div className="absolute inset-0 signature-gradient opacity-5 rounded-[3rem]"></div>
            <img 
              alt="Quality Work" 
              className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-video" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXJKVTbyiA_ig2ufZkECGNuouyWH8fyUdvDQpB7UuTX5z2k6UoiSkf26M03xOfDdwfyVBuJlfRoSxIhgvssgyfx9B_Nhd-EFmRq1zaVr0XvQwpmCyvyg1OmuaOqdmQsO-hqbNpyaWmN9OzLRtxvwmCZ49dgC3ej8McYg2Kh9yya4C5bBIhBba_d5z5MicME_PBXl8a4Fiu6lWOBwK5ojfbzK4Y5PJ_a_Eik90s1TjwszvICu_5z7RYTDa9k4gm0jkgShELSQLqGw"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Digital Architect transformed our legacy platform into a modern powerhouse. Their attention to detail in the architecture is unparalleled.",
      author: "Marcus Chen",
      role: "CTO, Vertex Global",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5HjWN4Ivv9CRLNUfOPaBmv2Lvy8E4ak4B68rATf8zMRcee-QmQ4CSCsBZJX7QFQ1nc76ghpj5I5z1hXMiKosPzHGKubip4ysmCa6Kt0r-fbfcWcDfEGTo_p_rHuZNS7hGE0qRLQ2L7RltVIGQj33xkCRUiQA8X-ZzBoOM8n63mdgKpI-vwEFr-ihJeknoKXezbYZ2FsM0pt_hyve76ZuEW0jZGbFrbt6Fbad3oohQ1HNkhxS6zqVenLON0Z0isxnKfaxj8j1RmQ"
    },
    {
      quote: "The fluidity of their process combined with technical precision is exactly what we needed to scale our fintech startup.",
      author: "Sarah Jenkins",
      role: "Product Head, PayStream",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZiDH3Pucf6FY08L5uPfmau4vb890L0NbiuLfcsffs73Jad0xVH1Fb-P7rIJEmUzSk_Og_HbfCrirn3kkdTe7NX8UyK7poYI68fuzcXM_y3zQhrdZBtVMpxWZflCHbKRAdFVlSxKFCjxfrRJzKYHnizDGb8rxlyLhMKyjK8S78rbXwp-gE9Qz0HU_GXHO-VY71Vh57Qs8VF0aUSfDHEGVPBt9xv1hN_WTtQwq2KR-bvUSL610aS83UhsVhyljO2e_xf0rfR8t4Xg"
    },
    {
      quote: "They don't just solve problems; they anticipate them. Their cloud infrastructure has saved us thousands in overhead.",
      author: "David Miller",
      role: "CEO, CloudNine Logistics",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDS0MCNBmf41jMleoV1VdLVdOupiJSXr-u5dv_P0RDYYTYv1dDriVREkH9AWU0yi9OBdmk3qnmMW0qeY0lp3vt-PpCV0O_hkja0usJDQq3nA4qQCUnp4igSx5ev5Bhg7qDKWPmMgbrlp82wRHpzOmBZyQ54O8wagiD36kcOUDbosNyTZrtXUdxpjAhTsAPXD4FJGWl_rJRZSW3cAbymOqAyOgY8oQZghdKfo7EZkeE22GIM0ITD08IKAOIJ0v5Vi--P-QHkZUMKLA"
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold mb-4">Voice of the Partners</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={t.author}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface-container-lowest p-8 rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex text-primary mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-on-surface italic mb-8 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                  <img 
                    alt={t.author} 
                    className="w-full h-full object-cover" 
                    src={t.img}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm">{t.author}</p>
                  <p className="text-[10px] uppercase font-semibold tracking-wider text-on-surface-variant">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-24 bg-surface" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="bg-surface-container-lowest rounded-[3rem] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-16">
            <h2 className="font-headline text-4xl font-bold mb-4">Start Your <span className="text-primary italic">Build</span></h2>
            <p className="text-on-surface-variant mb-10">Have a project in mind? Our architects are ready to help you blueprint your future.</p>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Name</label>
                  <input 
                    className="w-full px-5 py-4 bg-surface-container-low border-none rounded-xl focus:bg-surface-container-highest focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                    placeholder="John Doe" 
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Email</label>
                  <input 
                    className="w-full px-5 py-4 bg-surface-container-low border-none rounded-xl focus:bg-surface-container-highest focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                    placeholder="john@company.com" 
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Message</label>
                <textarea 
                  className="w-full px-5 py-4 bg-surface-container-low border-none rounded-xl focus:bg-surface-container-highest focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                  placeholder="Describe your project vision..." 
                  rows={4}
                ></textarea>
              </div>
              <button className="w-full signature-gradient text-on-primary py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="relative bg-slate-900 overflow-hidden min-h-[400px]">
            <div className="absolute inset-0 opacity-50">
              <img 
                alt="Office Location" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX2KS4dpKe9ThWJA0hyXiHI0YTFOM_pGVxHxiUY54P5ryfVnvldC0iXW5k314H-C5QspaMHrstCQn0LanrYmAf2KpXQjfLYoJNm_G0zRLECsofUbFKNRnYzyH1arw-F8BuInJ95UNy-G1mYhc71KrvbuJ2NP3u_ScLr3kCADuggYg-YiZUKFWIcWxJ4_aYFDpb9ET2HsBToxTwMWV_hM8ZSIsPXUUSGqEjlVF5gR7_dHloKyQni_JD-55iTOCrz06CtqYZaAouag"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
            <div className="relative z-10 p-12 md:p-16 h-full flex flex-col justify-end text-white">
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Headquarters</h4>
                <p className="text-white/70 leading-relaxed">101 Architecture Way<br/>San Francisco, CA 94105</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-tertiary-fixed" size={20} />
                  <span className="text-sm">hello@digitalarchitect.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-tertiary-fixed" size={20} />
                  <span className="text-sm">+1 (555) 012-3456</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="w-full pt-16 pb-8 bg-slate-50 border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <span className="text-xl font-bold text-slate-900 mb-4 block">Digital Architect</span>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            Crafting premium digital infrastructures with precision and strategic fluidity.
          </p>
        </div>
        
        <div>
          <h5 className="font-bold text-slate-900 mb-6">Services</h5>
          <ul className="space-y-4">
            {["Cloud Architecture", "Software Design", "Data Strategy", "Cyber Defense"].map(item => (
              <li key={item}>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors text-sm">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="font-bold text-slate-900 mb-6">Company</h5>
          <ul className="space-y-4">
            {["About Us", "Our Process", "Portfolio", "Careers"].map(item => (
              <li key={item}>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors text-sm">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="font-bold text-slate-900 mb-6">Connect</h5>
          <div className="flex gap-4">
            {[Globe, Share2, AtSign].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-16 pt-8 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-xs">© 2024 Digital Architect. Precision Fluidity in Tech.</p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"].map(item => (
            <a key={item} href="#" className="text-slate-500 hover:text-primary text-xs transition-colors">{item}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
