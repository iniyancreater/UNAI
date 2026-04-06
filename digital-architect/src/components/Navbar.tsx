import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Blog", to: "/blog" },
    { label: "Careers", to: "/careers" },
    { label: "Contact", to: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-light shadow-sm py-3"
            : "bg-transparent py-4"
        }`}
      >
        <nav className="container-xl flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/logo.png" 
              alt="UNAI Logo" 
              className={`h-9 md:h-11 w-auto transition-all duration-300 group-hover:scale-105 ${
                !scrolled && !mobileOpen ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-5">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[0.925rem] font-semibold transition-all duration-300 relative px-1 py-1 group ${
                  isActive(link.to)
                    ? "text-indigo"
                    : scrolled
                    ? "text-navy hover:text-indigo"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-[3px] gradient-primary rounded-full shadow-indigo-glow"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact">
              <button className="btn-primary py-2.5 px-6 text-sm">Get Started</button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2.5 rounded-xl transition-all active:scale-95"
            style={{ 
              color: scrolled || mobileOpen ? "#0B0F2F" : "#FFFFFF",
              background: scrolled || mobileOpen ? "rgba(79,70,229,0.08)" : "rgba(255,255,255,0.1)"
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl pt-24 pb-10 px-8 shadow-2xl"
            style={{ borderBottom: "1px solid rgba(79, 70, 229, 0.1)" }}
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center gap-4 px-5 py-4 rounded-2xl text-[1rem] font-bold transition-all duration-300 active:scale-95"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    background: isActive(link.to) ? "linear-gradient(135deg, rgba(79,70,229,0.08) 0%, rgba(6,182,212,0.05) 100%)" : "transparent",
                    color: isActive(link.to) ? "#4F46E5" : "#0B0F2F",
                    border: isActive(link.to) ? "1px solid rgba(79,70,229,0.15)" : "1px solid transparent",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4" style={{ borderTop: "1px solid #E2E8F0" }}>
                <Link to="/contact">
                  <button className="btn-primary w-full justify-center">Get Started</button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
