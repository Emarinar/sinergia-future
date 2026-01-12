import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "w-full fixed top-0 left-0 z-50 border-b border-white/10 transition-all duration-300",
        scrolled
          ? "bg-black/55 backdrop-blur-xl shadow-lg py-2"
          : "bg-black/35 backdrop-blur-xl py-4",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
            <img src={logo} alt="Sinergia" className="h-6 w-auto object-contain" />
          </div>
          <span className="text-white font-bold tracking-wide">Sinergia</span>
        </a>

        <div className="hidden md:flex gap-8 text-white/70">
          <a href="#inicio" className="hover:text-white transition">Inicio</a>
          <a href="#servicios" className="hover:text-white transition">Servicios</a>
          <a href="#nosotros" className="hover:text-white transition">Nosotros</a>
          <a href="#contacto" className="hover:text-white transition">Contacto</a>
        </div>

        <a
          href="#contacto"
          className="relative inline-flex items-center justify-center px-5 py-2 rounded-xl
                     bg-gradient-to-r from-emerald-300 to-emerald-500
                     text-black font-bold shadow-lg shadow-emerald-500/40
                     hover:brightness-110 hover:scale-[1.04] transition"
        >
          Cotizar ahora
        </a>
      </div>
    </nav>
  );
}
