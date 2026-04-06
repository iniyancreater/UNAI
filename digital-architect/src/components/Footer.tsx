import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

/* ─── Data ─────────────────────────────────────────────────────────── */

const quickLinks = [
  { label: "Home",     href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers",  href: "/careers" },
  { label: "Blog",     href: "/blog" },
  { label: "Contact",  href: "/contact" },
];

const services = [
  { label: "Software Development", href: "/services" },
  { label: "Cloud Architecture",   href: "/services" },
  { label: "AI & Machine Learning",href: "/services" },
  { label: "Cybersecurity",        href: "/services" },
  { label: "Data Engineering",     href: "/services" },
  { label: "Mobile Development",   href: "/services" },
];

const contactDetails = [
  {
    Icon: Mail,
    text: "hello@unai.tech",
    href: "mailto:hello@unai.tech",
  },
  {
    Icon: Phone,
    text: "+91 90439 88697",
    href: "tel:+919043988697",
  },
  {
    Icon: MapPin,
    text: "Anna Salai, Chennai – 600 002\nTamil Nadu, India",
    href: "https://maps.google.com/?q=Anna+Salai+Chennai",
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/unai-tech-2177072a0",
    Icon: Linkedin,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/UnaiTech74505",
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/unai.tech?igsh=MXZycG91ZzMzeGw0ZQ==",
    Icon: Instagram,
  },
];

/* ─── Helper: social icon button ───────────────────────────────────── */
const SocialBtn = ({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: React.ElementType;
  key?: string;
}) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
    style={{
      background: "rgba(255,255,255,0.07)",
      border: "1px solid rgba(255,255,255,0.1)",
      color: "rgba(255,255,255,0.6)",
    }}
    onMouseEnter={(e) => {
      const el = e.currentTarget as HTMLElement;
      el.style.background = "rgba(79,70,229,0.3)";
      el.style.borderColor = "rgba(79,70,229,0.6)";
      el.style.color = "#FFFFFF";
      el.style.transform = "translateY(-2px)";
    }}
    onMouseLeave={(e) => {
      const el = e.currentTarget as HTMLElement;
      el.style.background = "rgba(255,255,255,0.07)";
      el.style.borderColor = "rgba(255,255,255,0.1)";
      el.style.color = "rgba(255,255,255,0.6)";
      el.style.transform = "translateY(0)";
    }}
  >
    <Icon size={16} />
  </a>
);

/* ─── Helper: column heading ────────────────────────────────────────── */
const ColHeading = ({ children }: { children: React.ReactNode }) => (
  <h5 className="text-xs font-bold uppercase tracking-widest mb-6"
      style={{ color: "rgba(255,255,255,0.4)" }}>
    {children}
  </h5>
);

/* ─── Component ─────────────────────────────────────────────────────── */
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--color-navy)" }} className="relative overflow-hidden">

      {/* ── Ambient glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 80%, rgba(79,70,229,0.1) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(6,182,212,0.06) 0%, transparent 50%)",
        }}
      />

      {/* ── CTA band ── */}
      <div
        className="relative overflow-hidden"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 60% 50%, rgba(79,70,229,0.18) 0%, transparent 65%)",
          }}
        />
        <div className="absolute inset-0 dot-grid opacity-10" />

        <div className="container-xl py-16 md:py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">
                Ready to architect your next solution?
              </h3>
              <p className="text-[0.95rem]" style={{ color: "rgba(255,255,255,0.55)" }}>
                Let's build something extraordinary together.
              </p>
            </div>
            <Link to="/contact">
              <button className="btn-primary py-3 px-8 text-[0.95rem] whitespace-nowrap shrink-0">
                Start a Conversation <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ── 4-column grid ── */}
      <div className="container-xl mt-8 md:mt-12 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ── Col 1: Brand + tagline ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center mb-5">
              <img
                src="/logo.png"
                alt="UNAI Logo"
                className="h-8 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p
              className="text-[0.93rem] leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Premium technology consulting for organisations that demand
              precision, scale, and lasting innovation.
            </p>

            {/* Social icons */}
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Follow Us
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <SocialBtn key={s.label} href={s.href} label={s.label} Icon={s.Icon} />
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <ColHeading>Quick Links</ColHeading>
            <ul className="space-y-3 list-none p-0 m-0">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-[0.93rem] transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "rgba(255,255,255,0.5)")
                    }
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Services ── */}
          <div>
            <ColHeading>Services</ColHeading>
            <ul className="space-y-3 list-none p-0 m-0">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-[0.93rem] transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "rgba(255,255,255,0.5)")
                    }
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact Info ── */}
          <div>
            <ColHeading>Contact Us</ColHeading>
            <ul className="space-y-5 list-none p-0 m-0">
              {contactDetails.map(({ Icon, text, href }) => (
                <li key={text}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-3 group no-underline"
                  >
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200"
                      style={{
                        background: "rgba(79,70,229,0.12)",
                        border: "1px solid rgba(79,70,229,0.2)",
                        color: "rgba(99,102,241,1)",
                      }}
                    >
                      <Icon size={14} />
                    </span>
                    <span
                      className="text-[0.88rem] leading-snug whitespace-pre-line transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-[0.84rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
            © {year} UNAI Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[0.84rem] transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.35)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.7)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.35)")
                }
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
