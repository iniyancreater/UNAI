import { motion } from "motion/react";
import { Shield, Zap, Globe, Users, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "120+", label: "Projects Delivered" },
  { value: "18", label: "Countries Served" },
  { value: "60+", label: "Team Members" },
  { value: "6+", label: "Years of Excellence" },
];

const values = [
  { icon: Shield, title: "Trust by Design", desc: "Security-first architecture and transparent collaboration are non-negotiable on every engagement." },
  { icon: Zap, title: "Speed & Precision", desc: "We move fast without breaking things — rapid iteration backed by engineering discipline." },
  { icon: Globe, title: "Global Mindset", desc: "Solutions built for scale, serving clients across 18 countries and multiple industries." },
  { icon: Users, title: "People-First Culture", desc: "Our success is measured by the growth of both our team and the clients we serve." },
  { icon: Award, title: "Uncompromising Quality", desc: "Every deliverable passes rigorous review — we ship work we're proud to put our name on." },
  { icon: TrendingUp, title: "Outcome-Driven", desc: "We focus on business outcomes, not just technical deliverables. Results are our north star." },
];

const team = [
  {
    name: "Arjun Mehta",
    role: "CEO & Founder",
    bio: "Former engineering lead at McKinsey Digital with 15+ years scaling enterprise platforms.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5HjWN4Ivv9CRLNUfOPaBmv2Lvy8E4ak4B68rATf8zMRcee-QmQ4CSCsBZJX7QFQ1nc76ghpj5I5z1hXMiKosPzHGKubip4ysmCa6Kt0r-fbfcWcDfEGTo_p_rHuZNS7hGE0qRLQ2L7RltVIGQj33xkCRUiQA8X-ZzBoOM8n63mdgKpI-vwEFr-ihJeknoKXezbYZ2FsM0pt_hyve76ZuEW0jZGbFrbt6Fbad3oohQ1HNkhxS6zqVenLON0Z0isxnKfaxj8j1RmQ",
  },
  {
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    bio: "AWS Solutions Architect and distributed systems expert. Previously at Thoughtworks and Infosys.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZiDH3Pucf6FY08L5uPfmau4vb890L0NbiuLfcsffs73Jad0xVH1Fb-P7rIJEmUzSk_Og_HbfCrirn3kkdTe7NX8UyK7poYI68fuzcXM_y3zQhrdZBtVMpxWZflCHbKRAdFVlSxKFCjxfrRJzKYHnizDGb8rxlyLhMKyjK8S78rbXwp-gE9Qz0HU_GXHO-VY71Vh57Qs8VF0aUSfDHEGVPBt9xv1hN_WTtQwq2KR-bvUSL610aS83UhsVhyljO2e_xf0rfR8t4Xg",
  },
  {
    name: "Lena Koch",
    role: "Head of Design",
    bio: "Design system architect with a decade of crafting enterprise UX for Fortune 500 companies.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDS0MCNBmf41jMleoV1VdLVdOupiJSXr-u5dv_P0RDYYTYv1dDriVREkH9AWU0yi9OBdmk3qnmMW0qeY0lp3vt-PpCV0O_hkja0usJDQq3nA4qQCUnp4igSx5ev5Bhg7qDKWPmMgbrlp82wRHpzOmBZyQ54O8wagiD36kcOUDbosNyTZrtXUdxpjAhTsAPXD4FJGWl_rJRZSW3cAbymOqAyOgY8oQZghdKfo7EZkeE22GIM0ITD08IKAOIJ0v5Vi--P-QHkZUMKLA",
  },
];

const About = () => {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0B0F2F 0%, #1E2448 100%)" }}
      >
        <div className="absolute inset-0 dot-grid opacity-25" />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(79,70,229,0.2) 0%, transparent 70%)" }}
        />
        <div className="container-xl relative z-10 py-36 md:py-44 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="badge badge-white mb-6">Who We Are</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Poppins, sans-serif", lineHeight: 1.15 }}
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
            Digital Architect is a premium technology consultancy helping forward-thinking organizations
            build, scale, and secure their digital foundations since 2018.
          </motion.p>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
        <div className="container-xl py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <p
                  className="text-3xl md:text-4xl font-bold mb-1 gradient-text"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {s.value}
                </p>
                <p className="text-sm font-medium" style={{ color: "#475569" }}>{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section style={{ background: "#F8FAFC" }} className="section-pad">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge badge-indigo mb-5">Our Mission</span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "Poppins, sans-serif", color: "#0F172A" }}
            >
              Bridging Vision &amp; <span className="gradient-text">Technical Reality</span>
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#475569" }}>
              We exist to close the gap between ambitious business goals and scalable technical
              execution. By combining deep engineering expertise with a design-forward approach,
              we create systems that don't just work — they inspire.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#475569" }}>
              Since 2018, we've partnered with over 120 companies across fintech, e-commerce,
              healthcare, and logistics — transforming their digital foundations and accelerating growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="rounded-2xl overflow-hidden shadow-xl"
              style={{ border: "1px solid #E2E8F0" }}
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW8VWrKVD1dTjBlRYRi-AeMOl3oFihPk93U5VSwb2i_kZH026i_5MhJ20zK_TBl3rLoLtmaUnyO5Z1E8tJRONkBmf795fPwGdNt1ti35yXv55FETSpfXP6YCxzcNchuUTZja0MzYy7MnxTBXY4W_6LB3AqsbkxFzhN9KWcm3pUycHBamefH0f8UXhgiLbzeBA05Bv5iGwB8AHQbeRwuQ2AgR274h53K_G7fpatXiQ-Z-ueMldGYMN7p2yayiuxOOlcFy1sLaL5Wg"
                alt="Our Mission"
                className="w-full h-72 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-5 -left-5 card px-5 py-4 flex items-center gap-3 shadow-lg"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #4F46E5, #06B6D4)" }}
              >
                <Award size={16} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-bold" style={{ fontFamily: "Poppins, sans-serif" }}>ISO 27001 Certified</p>
                <p className="text-xs" style={{ color: "#94A3B8" }}>Security accredited</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Values ── */}
      <section style={{ background: "#FFFFFF" }} className="section-pad">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="badge badge-indigo mb-4">Core Values</span>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "Poppins, sans-serif", color: "#0F172A" }}
            >
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="card p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "linear-gradient(135deg, rgba(79,70,229,0.12) 0%, rgba(6,182,212,0.08) 100%)" }}
                >
                  <v.icon size={21} style={{ color: "#4F46E5" }} />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: "Poppins, sans-serif", color: "#0F172A" }}>
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section style={{ background: "#0B0F2F" }} className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 line-grid opacity-15" />
        <div className="container-xl relative z-10">
          <div className="text-center mb-14">
            <span className="badge badge-white mb-4">Leadership</span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Meet the <span className="gradient-text">Team</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="card-dark p-8 text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <div
                  className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-5"
                  style={{ border: "3px solid rgba(79,70,229,0.4)" }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-bold text-lg text-white mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {member.name}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#06B6D4" }}>
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#F8FAFC" }} className="section-pad">
        <div className="container-xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-14 md:p-20"
            style={{
              background: "linear-gradient(135deg, rgba(79,70,229,0.06) 0%, rgba(6,182,212,0.04) 100%)",
              border: "1px solid rgba(79,70,229,0.15)",
            }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-5"
              style={{ fontFamily: "Poppins, sans-serif", color: "#0F172A" }}
            >
              Ready to Work With Us?
            </h2>
            <p className="text-base max-w-xl mx-auto mb-8" style={{ color: "#475569" }}>
              Let's start a conversation about how Digital Architect can help your organization thrive in a digital-first world.
            </p>
            <Link to="/contact">
              <button className="btn-primary">Get in Touch</button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
