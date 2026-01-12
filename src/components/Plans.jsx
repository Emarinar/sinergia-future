import Reveal from "./UI/Reveal";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Básico",
    tag: "Para empezar",
    price: "Ideal para pymes",
    features: [
      "Diagnóstico inicial",
      "Plan de trabajo",
      "Documentos esenciales",
      "Asesoría remota",
    ],
  },
  {
    name: "Estándar",
    tag: "Más vendido",
    highlight: true,
    price: "Equilibrio perfecto",
    features: [
      "Todo lo del Básico",
      "Capacitaciones clave",
      "Matriz y evidencias",
      "Seguimiento mensual",
      "Soporte por WhatsApp",
    ],
  },
  {
    name: "Premium",
    tag: "Control total",
    price: "Para auditoría y crecimiento",
    features: [
      "Todo lo del Estándar",
      "Visitas en sitio (según plan)",
      "Auditoría interna + plan de mejora",
      "Indicadores + tablero de control",
      "Acompañamiento de inspecciones",
    ],
  },
];

export default function Plans() {
  return (
    <section className="py-20 px-6" id="planes">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              Planes comerciales
            </span>

            <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Elige un plan y{" "}
              <span className="text-emerald-600">cotiza en minutos</span>
            </h2>

            <p className="mt-4 text-slate-600 text-lg">
              Tres niveles claros para que tengas el acompañamiento justo que tu empresa necesita.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={[
                "rounded-3xl border bg-white/70 backdrop-blur-xl shadow-sm p-7",
                p.highlight
                  ? "border-emerald-200 ring-1 ring-emerald-200/60 shadow-md"
                  : "border-slate-200",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">{p.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{p.tag}</p>
                </div>
                {p.highlight && (
                  <span className="inline-flex items-center rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
                    Recomendado
                  </span>
                )}
              </div>

              <p className="mt-4 text-slate-700 font-semibold">{p.price}</p>

              <ul className="mt-5 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-slate-600">
                    <Check className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={[
                  "mt-6 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 font-semibold transition",
                  p.highlight
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
                ].join(" ")}
              >
                Cotizar este plan
              </a>

              <p className="mt-3 text-xs text-slate-500">
                * Ajustamos el plan según tamaño, sector y número de sedes.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
