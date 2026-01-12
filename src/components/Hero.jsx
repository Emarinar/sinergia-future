import logo from "../assets/logo.png";
import Reveal from "./UI/Reveal";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-32 md:pt-36 px-6 overflow-hidden"
    >
      {/* Overlay suave para contraste (evita que el fondo queme el texto) */}
      <div className="absolute inset-0 bg-white/55 backdrop-blur-[2px]" />

      {/* Glows suaves futuristas */}
      <div className="pointer-events-none absolute -top-40 left-10 h-[520px] w-[520px] rounded-full bg-emerald-400/25 blur-[160px]" />
      <div className="pointer-events-none absolute -top-20 right-0 h-[520px] w-[520px] rounded-full bg-violet-400/20 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Copy */}
        <div className="max-w-xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-4 py-2 text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_18px_rgba(16,185,129,.55)]" />
              Consultoría SG-SST • Seguridad Social • PESV
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-7 text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
              La consultoría que{" "}
              <span className="text-emerald-600">protege</span> tu empresa
              <br />
              y acelera tu crecimiento
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              Cumplimiento legal + estrategia + tecnología. En Sinergia hacemos
              que tu SG-SST sea sólido, auditable y rentable para tu empresa.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold
                           shadow-md hover:shadow-lg transition hover:scale-[1.02]"
              >
                Cotizar ahora
              </a>

              <a
                href="#servicios"
                className="border border-slate-300 text-slate-700 px-6 py-3 rounded-xl
                           hover:bg-slate-100 transition"
              >
                Ver servicios
              </a>
            </div>
          </Reveal>

          {/* Mini métricas */}
          <Reveal delay={0.18}>
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-xl p-4 shadow-sm hover:shadow-md transition">
                <p className="text-slate-900 font-semibold">SG-SST</p>
                <p className="text-slate-500 text-sm">Implementación</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-xl p-4 shadow-sm hover:shadow-md transition">
                <p className="text-slate-900 font-semibold">PESV</p>
                <p className="text-slate-500 text-sm">Seguimiento</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-xl p-4 shadow-sm hover:shadow-md transition">
                <p className="text-slate-900 font-semibold">S. Social</p>
                <p className="text-slate-500 text-sm">Control</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Card premium */}
        <Reveal delay={0.1}>
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-400/25 to-violet-500/20 blur-2xl opacity-35" />

            <div className="relative rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl p-8 md:p-10 shadow-xl">
              <img
                src={logo}
                alt="Sinergia Consultoría SGI"
                className="w-56 max-w-full h-auto object-contain mx-auto"
              />

              <p className="mt-6 text-center text-slate-600">
                Diseño futurista + experiencia real en SG-SST. Te acompañamos
                paso a paso para evitar sanciones y proteger tu equipo.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { t: "Diagnóstico", s: "Ruta clara" },
                  { t: "Ejecución", s: "Documentos" },
                  { t: "Auditoría", s: "Evidencias" },
                ].map((x) => (
                  <div
                    key={x.t}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-center shadow-sm hover:shadow-md transition"
                  >
                    <p className="text-slate-900 font-semibold">{x.t}</p>
                    <p className="text-slate-500 text-xs">{x.s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
