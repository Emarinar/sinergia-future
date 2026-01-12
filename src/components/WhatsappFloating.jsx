import { motion } from "framer-motion";

export default function WhatsappFloating() {
  const WA =
    "https://wa.me/3147204124?text=Hola%20Sinergia%20Consultor%C3%ADa%20SGI,%20quiero%20una%20cotizaci%C3%B3n.";

  return (
    <motion.a
      href={WA}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp Sinergia"
      className="fixed bottom-6 right-6 z-50 rounded-full px-6 py-4
                 bg-gradient-to-r from-green-400 to-emerald-500
                 text-black font-bold shadow-2xl shadow-green-400/50
                 flex items-center gap-2"
      initial={{ opacity: 0, y: 18, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-lg">💬</span>
      WhatsApp

      {/* halo animado */}
      <span className="absolute inset-0 rounded-full animate-ping bg-green-400/30" />
    </motion.a>
  );
}
