import logo from "../assets/logo.png";
import Reveal from "./UI/Reveal";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen pt-28 md:pt-32 px-6">
      {/* Decoración tipo glow */}
      <div className="pointer-events-none absolute -top-40 left-10 h-[560px] w-[560px] rounded-full bg-emerald-400/15 blur-[140px]" />
      <div className="pointer-events-none absolute -top-20 right-0 h-[560px] w-[560px] rounded-full bg-violet-500/10 blur-[160px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div className="max-w-xl">
          <Reveal delay={0.05}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,.9)]" />
              Consultoría SG-SST • Seguridad Social • PESV
            </div>
          </Reveal>

          <Reveal delay={0.12} y={18}>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-white leading-tight">
              La consultoría que{" "}
              <span className="text-emerald-300">protege</span> tu empresa
              <br />
              y acelera tu crecimiento
            </h1>
          </Reveal>

          <Reveal delay={0.18} y={18}>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              Cumplimiento legal + estrategia + tecnología. En Sinergia hacemos
              que tu SG-SST sea sólido, auditable y rentable para tu empresa.
            </p>
          </Reveal>

          <Reveal delay={0.24} y={18}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="bg-gradient-to-r from-emerald-300 to-emerald-500 text-black shadow-emerald-500/40 text-black px-6 py-3 rounded-xl font-bold
                           shadow-lg shadow-emerald-500/25 hover:scale-[1.03] transition"
              >
                Cotizar ahora
              </a>

              <a
                href="#servicios"
                className="border border-white/15 text-white px-6 py-3 rounded-xl hover:bg-white/5 transition"
              >
                Ver servicios
              </a>
            </div>
          </Reveal>

          {/* mini métricas */}
          <Reveal delay={0.30} y={18}>
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 hover:-translate-y-1 transition">
                <p className="text-white font-bold">SG-SST</p>
                <p className="text-white/60 text-sm">Implementación</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 hover:-translate-y-1 transition">
                <p className="text-white font-bold">PESV</p>
                <p className="text-white/60 text-sm">Seguimiento</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 hover:-translate-y-1 transition">
                <p className="text-white font-bold">S. Social</p>
                <p className="text-white/60 text-sm">Control</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Card Glass */}
        <Reveal delay={0.18} y={18}>
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-400/50 to-violet-500/30 blur-2xl opacity-25" />

            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-2xl hover:-translate-y-1 transition">
              <img
                src={logo}
                alt="Sinergia Consultoría SGI"
                className="w-56 max-w-full h-auto object-contain mx-auto opacity-95"
              />

              <p className="mt-6 text-center text-white/70">
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
                    className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-center hover:bg-white/5 transition"
                  >
                    <p className="text-white font-bold">{x.t}</p>
                    <p className="text-white/60 text-xs">{x.s}</p>
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
