import Reveal from "./UI/Reveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Gerencia",
    role: "Empresa del sector construcción",
    text:
      "Con Sinergia logramos organizar el SG-SST y tener evidencias claras. La asesoría fue directa, práctica y con acompañamiento real.",
    rating: 5,
  },
  {
    name: "Talento Humano",
    role: "Pyme de alimentos",
    text:
      "Nos guiaron paso a paso con Seguridad Social y documentación. Ahora todo queda controlado, sin reprocesos y con trazabilidad.",
    rating: 5,
  },
  {
    name: "Administración",
    role: "Empresa de servicios",
    text:
      "El enfoque es moderno y muy profesional. Se nota la experiencia y la forma en que estructuran la información para auditorías.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm">
              <Quote className="h-4 w-4 text-emerald-600" />
              Testimonios
            </span>

            <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Lo que dicen nuestros{" "}
              <span className="text-emerald-600">clientes</span>
            </h2>

            <p className="mt-4 text-slate-600 text-lg">
              Resultados reales, evidencias claras y acompañamiento que se siente.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05} y={16}>
              <article className="group relative rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Glow hover sutil */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/0 to-violet-500/0 group-hover:from-emerald-400/15 group-hover:to-violet-500/10 transition" />

                {/* Top: rating */}
                <div className="relative z-10 flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-4 w-4 text-emerald-500 fill-emerald-500"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="relative z-10 mt-5 text-slate-700 leading-relaxed">
                  “{t.text}”
                </p>

                {/* Divider */}
                <div className="relative z-10 mt-6 h-px w-full bg-slate-200/70" />

                {/* Footer: person */}
                <div className="relative z-10 mt-6 flex items-center gap-4">
                  <div className="h-11 w-11 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-800">
                    {t.name.split(" ")[0][0]}
                  </div>

                  <div className="min-w-0">
                    <p className="text-slate-900 font-semibold truncate">
                      {t.name}
                    </p>
                    <p className="text-slate-500 text-sm truncate">{t.role}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bottom note / CTA */}
        <Reveal delay={0.12}>
          <div className="mt-12 flex items-center justify-between flex-col md:flex-row gap-4 rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl p-6 shadow-sm">
            <div>
              <p className="text-slate-900 font-semibold">
                ¿Quieres resultados así en tu empresa?
              </p>
              <p className="text-slate-600 text-sm">
                Te guiamos con una ruta clara y evidencias listas para auditoría.
              </p>
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl
                         bg-emerald-500 hover:bg-emerald-600 text-white font-semibold
                         shadow-md hover:shadow-lg transition hover:scale-[1.02]"
            >
              Cotizar ahora
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
