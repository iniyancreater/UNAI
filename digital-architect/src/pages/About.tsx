import { motion } from "motion/react";
import { MagicCardContainer, MagicCard } from "../components/MagicCard";
import { Shield, Lightbulb, Award, TrendingUp, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

// ── DATA ──
const values = [
  { icon: Shield, title: "Integrity", desc: "We operate with uncompromising transparency and uphold the highest ethical standards in all our client engagements." },
  { icon: Lightbulb, title: "Innovation", desc: "We continuously explore emerging paradigms to deliver cutting-edge, future-proof solutions." },
  { icon: Award, title: "Excellence", desc: "We are committed to delivering exceptional quality without shortcuts, shipping work we are intensely proud of." },
  { icon: TrendingUp, title: "Client Success", desc: "Our ultimate metric of success is the tangible growth and competitive advantage we secure for our partners." },
];

const team = [
  {
    name: "Arjun Mehta",
    role: "CEO & Founder",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5HjWN4Ivv9CRLNUfOPaBmv2Lvy8E4ak4B68rATf8zMRcee-QmQ4CSCsBZJX7QFQ1nc76ghpj5I5z1hXMiKosPzHGKubip4ysmCa6Kt0r-fbfcWcDfEGTo_p_rHuZNS7hGE0qRLQ2L7RltVIGQj33xkCRUiQA8X-ZzBoOM8n63mdgKpI-vwEFr-ihJeknoKXezbYZ2FsM0pt_hyve76ZuEW0jZGbFrbt6Fbad3oohQ1HNkhxS6zqVenLON0Z0isxnKfaxj8j1RmQ",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZiDH3Pucf6FY08L5uPfmau4vb890L0NbiuLfcsffs73Jad0xVH1Fb-P7rIJEmUzSk_Og_HbfCrirn3kkdTe7NX8UyK7poYI68fuzcXM_y3zQhrdZBtVMpxWZflCHbKRAdFVlSxKFCjxfrRJzKYHnizDGb8rxlyLhMKyjK8S78rbXwp-gE9Qz0HU_GXHO-VY71Vh57Qs8VF0aUSfDHEGVPBt9xv1hN_WTtQwq2KR-bvUSL610aS83UhsVhyljO2e_xf0rfR8t4Xg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Lena Koch",
    role: "Head of Design",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDS0MCNBmf41jMleoV1VdLVdOupiJSXr-u5dv_P0RDYYTYv1dDriVREkH9AWU0yi9OBdmk3qnmMW0qeY0lp3vt-PpCV0O_hkja0usJDQq3nA4qQCUnp4igSx5ev5Bhg7qDKWPmMgbrlp82wRHpzOmBZyQ54O8wagiD36kcOUDbosNyTZrtXUdxpjAhTsAPXD4FJGWl_rJRZSW3cAbymOqAyOgY8oQZghdKfo7EZkeE22GIM0ITD08IKAOIJ0v5Vi--P-QHkZUMKLA",
    linkedin: "https://linkedin.com",
  },
];

const About = () => {
  return (
    <main>
      {/* 1. Who We Are (Hero Section) */}
      <section
        className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0B0F2F 0%, #1E2448 100%)" }}
      >
        <div className="absolute inset-0 dot-grid opacity-25" />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none opacity-40"
          style={{ background: "radial-gradient(circle, var(--color-indigo) 0%, transparent 70%)" }}
        />
        <div className="container-xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="badge badge-white mb-6">Who We Are</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight"
          >
            Built by <span className="gradient-text">Architects</span>,<br />Driven by Purpose
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            UNAI is a premium technology consultancy helping forward-thinking organizations
            build, scale, and secure their digital foundations since 2018.
          </motion.p>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="section-pad bg-white">
        <div className="container-xl max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge badge-indigo mb-5">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy">
              From a Small Team to Global Innovators
            </h2>
            <p className="text-base leading-relaxed text-muted mb-6">
              Founded by a group of passionate engineers in 2018, UNAI began with a simple belief: that profound technical expertise shouldn't be siloed within mega-corporations. We set out to democratize high-tier technology consulting and bring enterprise-grade architecture to growing businesses worldwide.
            </p>
            <p className="text-base leading-relaxed text-muted">
              Today, what started as a boutique architectural firm has blossomed into a multi-national powerhouse. We've guided over 120 companies through digital transformations, launched scalable cloud infrastructures, and fostered a culture where engineering discipline meets visionary layout design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 & 4. Vision & Mission */}
      <section className="section-pad bg-bg-subtle relative overflow-hidden">
        <MagicCardContainer className="container-xl grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10" glowColor="99, 102, 241">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <MagicCard
              className="card p-10 lg:p-14 border hover:border-indigo/30 transition-colors h-full"
              glowColor="99, 102, 241"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white relative z-10" style={{ border: "1px solid rgba(79,70,229,0.15)" }}>
                <Lightbulb size={24} className="text-indigo" />
              </div>
              <span className="badge badge-indigo mb-4 relative z-10">Vision</span>
              <h3 className="text-2xl font-bold text-navy mb-4 relative z-10">A Future Designed by Intelligence</h3>
              <p className="text-muted leading-relaxed relative z-10">
                We envision a world where organizations operate seamlessly through elegantly architected systems. Our goal is to be the catalyst for global digital evolution, building technologies that empower businesses to reach their maximum potential without boundaries.
              </p>
            </MagicCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <MagicCard
              className="card p-10 lg:p-14 border hover:border-indigo/30 transition-colors h-full"
              glowColor="6, 182, 212"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white relative z-10" style={{ border: "1px solid rgba(6,182,212,0.15)" }}>
                <Award size={24} className="text-cyan-600" />
              </div>
              <span className="badge badge-indigo mb-4 relative z-10">Mission</span>
              <h3 className="text-2xl font-bold text-navy mb-4 relative z-10">Bridging Vision & Reality</h3>
              <p className="text-muted leading-relaxed relative z-10">
                We exist to close the gap between ambitious business goals and scalable technical execution. By combining deep engineering expertise with a design-forward approach, we create digital ecosystems that don't just work reliably — they inspire greatness.
              </p>
            </MagicCard>
          </motion.div>
        </MagicCardContainer>
      </section>

      {/* 5. Core Values */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center mb-16">
            <span className="badge badge-indigo mb-4">Core Values</span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy">
              What We Stand For
            </h2>
          </div>
          <MagicCardContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" glowColor="99, 102, 241">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
              >
                <MagicCard
                  className="card p-8 flex flex-col items-start border-2 border-navy hover:shadow-premium transition-all duration-300 h-full w-full"
                  glowColor="99, 102, 241"
                >
                  <div className="flex items-center gap-4 mb-4 relative z-10 w-full">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center bg-bg-subtle shrink-0"
                      style={{ border: "1px solid rgba(79,70,229,0.1)" }}
                    >
                      <v.icon size={20} className="text-indigo" />
                    </div>
                    <h3 className="font-bold text-xl text-navy">
                      {v.title}
                    </h3>
                  </div>
                  <p className="text-[0.95rem] leading-relaxed text-muted relative z-10">{v.desc}</p>
                </MagicCard>
              </motion.div>
            ))}
          </MagicCardContainer>
        </div>
      </section>

      {/* 6. Team Section */}
      <section className="section-pad relative overflow-hidden bg-navy">
        <div className="absolute inset-0 line-grid opacity-15" />
        <div className="container-xl relative z-10">
          <div className="text-center mb-16">
            <span className="badge badge-white mb-4">Leadership</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Meet the <span className="gradient-text">Team</span>
            </h2>
          </div>
          
          <MagicCardContainer className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto" glowColor="6, 182, 212">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <MagicCard
                  className="card-dark p-0 overflow-hidden h-full flex flex-col hover:-translate-y-2 transition-all duration-300"
                  glowColor="6, 182, 212"
                >
                  {/* Image Container */}
                  <div className="h-64 sm:h-72 overflow-hidden relative pointer-events-none">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      referrerPolicy="no-referrer"
                    />
                    {/* Gradient Overlay for seamless blend */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-card-dark)] to-transparent opacity-80" />
                  </div>
                  
                  {/* Details Card slightly overlapping the image */}
                  <div className="p-6 relative -mt-16 flex-1 flex flex-col z-10 pointer-events-auto">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex-1 flex flex-col items-center text-center shadow-lg transform transition-transform duration-300">
                      <h3 className="font-bold text-xl text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold tracking-widest uppercase text-cyan-glow mb-5">
                        {member.role}
                      </p>
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="mt-auto inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-indigo text-white/70 hover:text-white border border-white/10 hover:border-indigo transition-all duration-300 cursor-pointer relative z-20"
                        title={`Connect with ${member.name} on LinkedIn`}
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </MagicCardContainer>
        </div>
      </section>

    </main>
  );
};

export default About;
