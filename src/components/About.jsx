import logo from "../assets/logo.png";

export default function About() {
  return (
    <section id="nosotros" className="py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          <h2 className="text-4xl font-extrabold text-white">
            Somos <span className="text-emerald-300">Sinergia</span>
          </h2>

          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            Acompañamos a empresas en Colombia a implementar, mantener y mejorar
            su SG-SST, Seguridad Social y PESV con un enfoque práctico:
            evidencias claras, cumplimiento real y mejora continua.
          </p>

          <p className="mt-4 text-white/70 leading-relaxed">
            Nuestro diferencial es la combinación de{" "}
            <span className="text-white font-semibold">metodología</span>,{" "}
            <span className="text-white font-semibold">tecnología</span> y{" "}
            <span className="text-white font-semibold">acompañamiento</span>{" "}
            para que tu empresa esté protegida y preparada ante auditorías.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="bg-gradient-to-r from-emerald-300 to-emerald-500 text-black shadow-emerald-500/40 text-black px-6 py-3 rounded-xl font-bold
                         shadow-lg shadow-emerald-500/25 hover:scale-[1.03] transition"
            >
              Hablemos por WhatsApp
            </a>

            <a
              href="#servicios"
              className="border border-white/15 text-white px-6 py-3 rounded-xl hover:bg-white/5 transition"
            >
              Ver servicios
            </a>
          </div>
        </div>

        {/* Card visual */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-400/35 to-violet-500/20 blur-2xl opacity-30" />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl border border-white/10 bg-black/30 flex items-center justify-center">
                <span className="text-emerald-300 text-xl">✦</span>
              </div>
              <div>
                <p className="text-white font-bold">Cumplimiento + Futuro</p>
                <p className="text-white/60 text-sm">
                  Consultoría moderna para empresas reales
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-black/30 p-6">
              <img
                src={logo}
                alt="Sinergia Consultoría SGI"
                className="w-52 max-w-full h-auto object-contain mx-auto opacity-95"
              />
              <p className="mt-4 text-center text-white/70">
                Tu empresa, más segura. Tus procesos, más organizados. Tu
                cumplimiento, a otro nivel.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { k: "Ruta", v: "Paso a paso" },
                { k: "Evidencia", v: "Soportes" },
                { k: "Control", v: "Seguimiento" },
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <p className="text-white font-bold">{x.k}</p>
                  <p className="text-white/60 text-xs">{x.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
