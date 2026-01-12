import { useEffect, useMemo, useState } from "react";
import Reveal from "./UI/Reveal";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const stars = Array.from({ length: 5 });

export default function Testimonials() {
  const items = useMemo(
    () => [
      {
        name: "Gerencia – Empresa del sector construcción",
        text:
          "Con Sinergia logramos organizar el SG-SST y tener evidencias claras. La asesoría fue directa, práctica y con acompañamiento real.",
      },
      {
        name: "Talento Humano – Pyme de alimentos",
        text:
          "Nos guiaron paso a paso con Seguridad Social y documentación. Ahora todo queda controlado, sin reprocesos y con trazabilidad.",
      },
      {
        name: "Administración – Empresa de servicios",
        text:
          "El enfoque es moderno y muy profesional. Se nota la experiencia y la forma en que estructuran la información para auditorías.",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  // autoplay suave
  useEffect(() => {
    const t = setInterval(() => next(), 6500);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const item = items[index];

  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-4xl font-extrabold text-white text-center">
            Lo que dicen nuestros clientes
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-white/60 text-center max-w-2xl mx-auto mt-4">
            Resultados reales, evidencias claras y acompañamiento que se siente.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[1fr_420px] gap-10 items-center">
          {/* Card grande (carrusel) */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-400/30 to-violet-500/20 blur-2xl opacity-35" />

            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-1 text-emerald-300">
                    {stars.map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>

                  <p className="mt-5 text-white/75 text-lg leading-relaxed">
                    “{item.text}”
                  </p>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-white font-bold">{item.name}</p>
                    <p className="text-white/50 text-sm">Cliente Sinergia</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* controles */}
              <div className="mt-8 flex items-center justify-between gap-4">
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="h-11 w-11 rounded-2xl border border-white/10 bg-black/30 hover:bg-white/5 transition flex items-center justify-center text-white"
                    aria-label="Anterior"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="h-11 w-11 rounded-2xl border border-white/10 bg-black/30 hover:bg-white/5 transition flex items-center justify-center text-white"
                    aria-label="Siguiente"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                {/* dots */}
                <div className="flex items-center gap-2">
                  {items.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={[
                        "h-2.5 rounded-full transition",
                        i === index ? "w-8 bg-emerald-300" : "w-2.5 bg-white/20 hover:bg-white/35",
                      ].join(" ")}
                      aria-label={`Testimonio ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mini lista (preview) */}
          <div className="space-y-4">
            {items.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setIndex(i)}
                className={[
                  "w-full text-left rounded-2xl border transition p-5",
                  i === index
                    ? "border-emerald-300/40 bg-emerald-400/10"
                    : "border-white/10 bg-white/5 hover:bg-white/7",
                ].join(" ")}
              >
                <p className="text-white font-bold line-clamp-1">{t.name}</p>
                <p className="text-white/60 text-sm mt-1 line-clamp-2">
                  {t.text}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
