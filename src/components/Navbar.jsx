import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const Item = ({ href, children, onClick }) => (
    <a
      href={href}
      onClick={onClick}
      className="block rounded-xl px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition"
    >
      {children}
    </a>
  );

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={[
          "w-full fixed top-0 left-0 z-50 transition-all duration-300",
          "border-b border-slate-200",
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-sm py-2"
            : "bg-white/70 backdrop-blur-xl py-4",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
              <img src={logo} alt="Sinergia" className="h-6 w-auto object-contain" />
            </div>
            <span className="text-slate-900 font-bold tracking-wide">
              Sinergia
            </span>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8 text-slate-700 font-medium">
            <a href="#inicio" className="hover:text-slate-900 transition">
              Inicio
            </a>
            <a href="#servicios" className="hover:text-slate-900 transition">
              Servicios
            </a>
            <a href="#nosotros" className="hover:text-slate-900 transition">
              Nosotros
            </a>
            <a href="#contacto" className="hover:text-slate-900 transition">
              Contacto
            </a>
          </div>

          {/* Desktop CTA */}
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-xl
                       bg-emerald-500 hover:bg-emerald-600
                       text-white font-semibold shadow-md hover:shadow-lg
                       transition hover:scale-[1.03]"
          >
            Cotizar ahora
          </a>

          {/* Mobile button */}
          <button
            className="md:hidden h-11 w-11 rounded-xl border border-slate-200 bg-white/70
                       flex items-center justify-center text-slate-900 shadow-sm"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu />
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={[
          "fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={() => setOpen(false)}
      />

      {/* DRAWER */}
      <aside
        className={[
          "fixed right-0 top-0 z-50 h-full w-[88%] max-w-sm transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="h-full bg-white/90 backdrop-blur-xl border-l border-slate-200 shadow-2xl p-6 flex flex-col">
          {/* Header drawer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                <img src={logo} alt="Sinergia" className="h-6 w-auto" />
              </div>
              <span className="text-slate-900 font-bold">Sinergia</span>
            </div>
            <button
              className="h-10 w-10 rounded-xl border border-slate-200 bg-white
                         flex items-center justify-center text-slate-900 shadow-sm"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
            >
              <X />
            </button>
          </div>

          {/* Links */}
          <nav className="mt-8 space-y-2">
            <Item href="#inicio" onClick={() => setOpen(false)}>Inicio</Item>
            <Item href="#servicios" onClick={() => setOpen(false)}>Servicios</Item>
            <Item href="#nosotros" onClick={() => setOpen(false)}>Nosotros</Item>
            <Item href="#contacto" onClick={() => setOpen(false)}>Contacto</Item>
          </nav>

          {/* CTA */}
          <div className="mt-auto pt-6 border-t border-slate-200">
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl
                         bg-emerald-500 hover:bg-emerald-600 text-white font-semibold
                         shadow-md hover:shadow-lg transition"
            >
              Cotizar ahora
            </a>

            <a
              href="https://wa.me/3147204124"
              target="_blank"
              rel="noreferrer"
              className="mt-3 w-full inline-flex items-center justify-center px-6 py-3 rounded-xl
                         border border-slate-300 text-slate-800 hover:bg-slate-100 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
