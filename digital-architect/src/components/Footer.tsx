import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, ArrowRight } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const cols = [
    {
      heading: "Services",
      links: [
        { label: "Software Development", href: "/services" },
        { label: "Cloud Architecture", href: "/services" },
        { label: "AI & Machine Learning", href: "/services" },
        { label: "Cybersecurity", href: "/services" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Process", href: "/services" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Case Studies", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Documentation", href: "#" },
        { label: "Privacy Policy", href: "#" },
      ],
    },
  ];

  return (
    <footer style={{ background: "#0B0F2F" }}>
      {/* Top CTA band */}
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
        <div className="container-xl section-pad-sm relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3
                className="text-2xl md:text-3xl font-bold text-white mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Ready to architect your next solution?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.95rem" }}>
                Let's build something extraordinary together.
              </p>
            </div>
            <Link to="/contact">
              <button className="btn-primary whitespace-nowrap shrink-0">
                Start a Conversation <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-xl section-pad">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-5">
              <img src="/logo.png" alt="UNAI Logo" className="h-8 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
            </Link>
            <p
              className="text-sm leading-relaxed mb-7"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Premium technology consulting for organizations that demand precision, scale, and innovation.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/in/unai-tech-2177072a0" },
                { Icon: Twitter, href: "#" },
                { Icon: Github, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.6)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(79,70,229,0.3)";
                    el.style.borderColor = "rgba(79,70,229,0.5)";
                    el.style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,255,255,0.07)";
                    el.style.borderColor = "rgba(255,255,255,0.1)";
                    el.style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <h5
                className="text-sm font-bold uppercase tracking-widest mb-6"
                style={{ fontFamily: "Poppins, sans-serif", color: "rgba(255,255,255,0.4)" }}
              >
                {col.heading}
              </h5>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)";
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>
            © {year} UNAI. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["Terms", "Privacy", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)";
                }}
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
