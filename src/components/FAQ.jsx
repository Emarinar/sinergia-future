import { useMemo, useState } from "react";
import Reveal from "./UI/Reveal";
import { HelpCircle, ChevronDown, ShieldCheck, PhoneCall } from "lucide-react";

export default function FAQ() {
  const items = useMemo(
    () => [
      {
        q: "¿Qué pasa si no tengo SG-SST?",
        a: "Te expones a sanciones, cierres temporales y mayor riesgo de accidentes. En Sinergia organizamos tu sistema con ruta clara, evidencias y control para que no dependas de “apagar incendios”.",
      },
      {
        q: "¿Cuánto tarda implementar?",
        a: "Depende del tamaño de la empresa y del estado actual. Normalmente iniciamos con diagnóstico y una ruta por prioridades para ver avances desde las primeras semanas.",
      },
      {
        q: "¿Trabajan con pymes?",
        a: "Sí. Diseñamos y operamos SG-SST para micro, pequeñas y medianas empresas con enfoque práctico: entregables claros, evidencias y seguimiento.",
      },
      {
        q: "¿Incluye visitas?",
        a: "Podemos trabajar remoto, presencial o mixto. Si el servicio requiere inspecciones, capacitación o acompañamiento en campo, lo incluimos en el plan acordado.",
      },
      {
        q: "¿Qué entregables recibo?",
        a: "Recibes documentación y evidencias listas para auditoría: formatos, matrices, plan de trabajo, soportes de capacitaciones, inspecciones, indicadores y trazabilidad según el alcance.",
      },
    ],
    []
  );

  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-20">
      {/* Fondo suave para separar sección */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm">
              <HelpCircle className="h-4 w-4 text-emerald-600" />
              Preguntas frecuentes
            </span>

            <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Resolvemos dudas <span className="text-emerald-600">antes de que cotices</span>
            </h2>

            <p className="mt-4 text-slate-600 text-lg">
              Transparencia total: tiempos, entregables y forma de trabajo.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-12 gap-6 items-start">
          {/* FAQ */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm overflow-hidden">
              <div className="divide-y divide-slate-200">
                {items.map((it, idx) => {
                  const isOpen = open === idx;
                  return (
                    <button
                      key={it.q}
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : idx)}
                      className="w-full text-left p-5 md:p-6 hover:bg-slate-50/60 transition"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <p className="font-bold text-slate-900">{it.q}</p>
                        <ChevronDown
                          className={`h-5 w-5 text-slate-500 transition ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </div>

                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-slate-600 leading-relaxed">{it.a}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              * Si tu caso es especial (sector, número de trabajadores, auditoría próxima), escríbenos y
              te guiamos con la ruta correcta.
            </p>
          </div>

          {/* Panel lateral (pro) */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm p-6">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-2xl bg-emerald-50 border border-emerald-100 grid place-items-center">
                  <ShieldCheck className="h-5 w-5 text-emerald-700" />
                </div>
                <div>
                  <p className="text-slate-900 font-extrabold">¿Quieres una ruta clara?</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Te orientamos según tu necesidad (SG-SST, Seguridad Social o PESV).
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 transition shadow-sm"
                >
                  Cotizar ahora
                </a>

                <a
                  href="https://calendar.app.google/t82KW5RGv8Y3j48g9"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50 transition"
                >
                  <PhoneCall className="h-5 w-5 text-emerald-700" />
                  Agendar llamada
                </a>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-800">Tip rápido</p>
                <p className="mt-1 text-sm text-slate-600">
                  Si tienes visita de auditoría o inspección pronto, priorizamos evidencias y control para
                  que llegues con respaldo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
