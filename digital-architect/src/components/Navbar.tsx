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

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Careers", to: "/careers" },
    { label: "Contact", to: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-light shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="container-xl flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center shadow-indigo">
              <span className="text-white font-bold text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>DA</span>
            </div>
            <span
              className="text-lg font-bold text-navy tracking-tight"
              style={{ fontFamily: "Poppins, sans-serif", color: scrolled ? "#0B0F2F" : "#FFFFFF" }}
            >
              Digital<span style={{ color: "#4F46E5" }}>Architect</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-semibold transition-colors duration-200 relative group ${
                  isActive(link.to)
                    ? "text-indigo"
                    : scrolled
                    ? "text-text hover:text-indigo"
                    : "text-white/80 hover:text-white"
                }`}
                style={{
                  fontFamily: "Poppins, sans-serif",
                  color: isActive(link.to)
                    ? "#4F46E5"
                    : scrolled
                    ? "#0F172A"
                    : "rgba(255,255,255,0.85)",
                }}
              >
                {link.label}
                {isActive(link.to) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 gradient-primary rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact">
              <button className="btn-primary text-sm px-5 py-2.5">Get Started</button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: scrolled ? "#0F172A" : "#FFFFFF" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="fixed top-0 left-0 right-0 z-40 bg-white shadow-xl pt-20 pb-8 px-6"
            style={{ borderBottom: "1px solid #E2E8F0" }}
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    background: isActive(link.to) ? "rgba(79,70,229,0.08)" : "transparent",
                    color: isActive(link.to) ? "#4F46E5" : "#0F172A",
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
