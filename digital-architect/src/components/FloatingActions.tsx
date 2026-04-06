import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CalendarDays, X } from "lucide-react";
import AppointmentModal from "./AppointmentModal";

/* ── WhatsApp SVG icon ─────────────────────────────────────────────── */
const WhatsAppIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ── Component ──────────────────────────────────────────────────────── */
const FloatingActions: React.FC = () => {
  const [apptOpen, setApptOpen] = useState(false);
  const [waTooltip, setWaTooltip] = useState(false);
  const [apptTooltip, setApptTooltip] = useState(false);

  const WHATSAPP_NUMBER = "919043988697"; // E.164 without +
  const WHATSAPP_MSG = encodeURIComponent(
    "Hello UNAI! I'd like to learn more about your services."
  );
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

  return (
    <>
      {/* ── Floating stack (bottom-left) ── */}
      <div
        className="fixed z-40 flex flex-col gap-3"
        style={{ bottom: "24px", left: "24px" }}
      >
        {/* WhatsApp */}
        <div className="relative flex items-center">
          {/* Tooltip */}
          <AnimatePresence>
            {waTooltip && (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                className="absolute left-16 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-semibold shadow-lg"
                style={{
                  background: "var(--color-navy)",
                  color: "#fff",
                  pointerEvents: "none",
                }}
              >
                Chat on WhatsApp
              </motion.span>
            )}
          </AnimatePresence>

          <motion.a
            id="whatsapp-float"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.93 }}
            onMouseEnter={() => setWaTooltip(true)}
            onMouseLeave={() => setWaTooltip(false)}
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
            style={{
              background: "#25D366",
              color: "#fff",
              boxShadow: "0 6px 24px rgba(37,211,102,0.45)",
            }}
          >
            <WhatsAppIcon size={26} />
          </motion.a>
        </div>

        {/* Book Appointment */}
        <div className="relative flex items-center">
          {/* Tooltip */}
          <AnimatePresence>
            {apptTooltip && (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                className="absolute left-16 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-semibold shadow-lg"
                style={{
                  background: "var(--color-navy)",
                  color: "#fff",
                  pointerEvents: "none",
                }}
              >
                Book Appointment
              </motion.span>
            )}
          </AnimatePresence>

          <motion.button
            id="book-appointment-float"
            onClick={() => setApptOpen(true)}
            aria-label="Book an appointment"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.93 }}
            onMouseEnter={() => setApptTooltip(true)}
            onMouseLeave={() => setApptTooltip(false)}
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
            style={{
              background: "linear-gradient(135deg, var(--color-indigo), var(--color-cyan))",
              color: "#fff",
              boxShadow: "0 6px 24px rgba(79,70,229,0.4)",
              border: "none",
              cursor: "pointer",
            }}
          >
            <CalendarDays size={24} />
          </motion.button>
        </div>
      </div>

      {/* ── Appointment Modal ── */}
      <AppointmentModal open={apptOpen} onClose={() => setApptOpen(false)} />
    </>
  );
};

export default FloatingActions;
