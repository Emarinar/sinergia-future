export default function Footer() {
  return (
    <footer className="py-14 px-6 border-t border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <p className="text-white font-extrabold text-xl">Sinergia Consultoría SGI</p>
          <p className="mt-3 text-white/60 leading-relaxed">
            Consultoría futurista con enfoque real: cumplimiento, evidencias y control
            para empresas en Colombia.
          </p>
        </div>

        <div>
          <p className="text-white font-bold">Secciones</p>
          <div className="mt-4 space-y-2 text-white/60">
            <a href="#inicio" className="block hover:text-white">Inicio</a>
            <a href="#servicios" className="block hover:text-white">Servicios</a>
            <a href="#nosotros" className="block hover:text-white">Nosotros</a>
            <a href="#contacto" className="block hover:text-white">Contacto</a>
          </div>
        </div>

        <div>
          <p className="text-white font-bold">Contacto</p>
          <p className="mt-4 text-white/60">Medellín – Colombia</p>
          <p className="mt-1 text-white/60">WhatsApp: 314 720 4124</p>
          <p className="mt-1 text-white/60">Correo: comercial@sinergiasgi.com</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 text-white/40 text-sm">
        © {new Date().getFullYear()} Sinergia Consultoría SGI. Todos los derechos reservados.
      </div>
    </footer>
  );
}
