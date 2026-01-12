import Reveal from "./UI/Reveal";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "¿Qué pasa si no tengo SG-SST?",
    a: "Te expones a sanciones, cierres temporales y mayor riesgo de accidentes. Nosotros te organizamos el sistema con ruta clara y evidencias.",
  },
  {
    q: "¿Cuánto tarda implementar?",
    a: "Depende del tamaño y el nivel de avance. Una base sólida puede quedar en pocas semanas y luego se continúa con seguimiento y mejora.",
  },
  {
    q: "¿Trabajan con pymes?",
    a: "Sí. De hecho, nuestro enfoque es hacer el SG-SST práctico y sostenible para pymes en Colombia.",
  },
  {
    q: "¿Incluye visitas?",
    a: "Podemos trabajar remoto, presencial o mixto. En planes Estándar/Premium se incluyen visitas según necesidad y ciudad.",
  },
  {
    q: "¿Qué entregables recibo?",
    a: "Documentación, matrices, evidencias, capacitaciones, actas, indicadores y soporte para auditoría/inspección.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-20 px-6" id="faq">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Preguntas frecuentes
            </span>

            <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Resolvemos dudas{" "}
              <span className="text-emerald-600">antes de que cotices</span>
            </h2>

            <p className="mt-4 text-slate-600 text-lg">
              Transparencia total: tiempos, entregables y forma de trabajo.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 max-w-4xl">
          {faqs.map((x, i) => {
            const isOpen = open === i;
            return (
              <div
                key={x.q}
                className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="font-semibold text-slate-900">{x.q}</span>
                  <ChevronDown
                    className={[
                      "h-5 w-5 text-slate-500 transition",
                      isOpen ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                    {x.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
