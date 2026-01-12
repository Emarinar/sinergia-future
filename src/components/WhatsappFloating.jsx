import { MessageCircle } from "lucide-react";

export default function WhatsAppFloating() {
  return (
    <a
      href="https://wa.me/3147204124?text=Hola%20Sinergia%20Consultoría%20SGI,%20quiero%20recibir%20información."
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Glow suave */}
      <span
        className="absolute inset-0 rounded-2xl bg-emerald-400/30 blur-xl opacity-0
                   group-hover:opacity-100 transition duration-300"
      />

      {/* Botón */}
      <span
        className="relative flex items-center gap-3 rounded-2xl
                   bg-white/90 backdrop-blur-xl border border-slate-200
                   px-4 py-3 shadow-lg hover:shadow-xl
                   transition-all duration-300 group-hover:-translate-y-0.5"
      >
        {/* Icon */}
        <span
          className="flex h-10 w-10 items-center justify-center rounded-xl
                     bg-emerald-500 text-white shadow-sm"
        >
          <MessageCircle className="h-5 w-5" />
        </span>

        {/* Texto (desktop only) */}
        <span className="hidden sm:block text-slate-900 font-semibold">
          WhatsApp
        </span>
      </span>
    </a>
  );
}
