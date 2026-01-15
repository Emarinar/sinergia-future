import Reveal from "./UI/Reveal";
import { Check, Sparkles, Shield, Rocket, Crown } from "lucide-react";

const plans = [
  {
    name: "ESENCIAL",
    tag: "Micro y emprendimientos",
    price: "Arranque ordenado + control básico",
    icon: Shield,
    features: [
      "Diagnóstico + plan de acción trimestral",
      "Documentación mínima priorizada",
      "Capacitación base + soporte mensual",
    ],
    cta: "Cotizar ESENCIAL",
  },
  {
    name: "PRO",
    tag: "Operación estable",
    highlight: true,
    price: "Administración mensual + seguimiento real",
    icon: Rocket,
    features: [
      "Administración SG-SST mensual",
      "Capacitaciones por riesgo + inspecciones internas",
      "Indicadores + comité + seguimiento a mejoras",
      "Soporte ante visitas / requerimientos",
    ],
    badge: "Recomendado",
    cta: "Cotizar PRO",
  },
  {
    name: "PREMIUM",
    tag: "Alto riesgo o exigencia contractual",
    price: "Control avanzado + paquete 360",
    icon: Crown,
    features: [
      "Todo el PRO +",
      "Auditoría interna + simulacro de inspección",
      "Investigación de incidentes + plan de cierre",
      "Integración SG-SST + PESV + Seguridad Social (paquete 360)",
    ],
    cta: "Cotizar PREMIUM",
  },
];

export default function Plans() {
  return (
    <section id="planes" className="relative py-20">
      {/* fondo suave */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              Planes comerciales
            </span>

            <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Elige el plan ideal y <span className="text-emerald-600">cotiza en minutos</span>
            </h2>

            <p className="mt-4 text-slate-600 text-lg">
              Tres niveles claros para que tengas acompañamiento real, evidencias listas y control sostenido.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          {plans.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className={[
                  "relative rounded-3xl border bg-white/70 backdrop-blur-xl shadow-sm p-7 overflow-hidden",
                  p.highlight
                    ? "border-emerald-200 ring-1 ring-emerald-200/60 shadow-md"
                    : "border-slate-200",
                ].join(" ")}
              >
                {/* halo top (solo recomendado) */}
                {p.highlight && (
                  <div className="pointer-events-none absolute -top-24 -right-20 h-56 w-56 rounded-full bg-emerald-200/35 blur-3xl" />
                )}

                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div
                      className={[
                        "h-11 w-11 rounded-2xl grid place-items-center border",
                        p.highlight
                          ? "bg-emerald-50 border-emerald-100"
                          : "bg-slate-50 border-slate-200",
                      ].join(" ")}
                    >
                      <Icon className={["h-5 w-5", p.highlight ? "text-emerald-700" : "text-slate-700"].join(" ")} />
                    </div>

                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900">{p.name}</h3>
                      <p className="mt-1 text-sm text-slate-600">{p.tag}</p>
                    </div>
                  </div>

                  {p.badge && (
                    <span className="inline-flex items-center rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white shadow-sm">
                      {p.badge}
                    </span>
                  )}
                </div>

                <p className="mt-4 text-slate-900 font-semibold">{p.price}</p>

                <ul className="mt-5 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-slate-600">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <span className="text-sm leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={[
                    "mt-6 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 font-semibold transition",
                    p.highlight
                      ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm"
                      : "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
                  ].join(" ")}
                >
                  {p.cta}
                </a>

                <p className="mt-3 text-xs text-slate-500">
                  * Ajustamos el plan según tamaño, sector, número de sedes y nivel de riesgo.
                </p>
              </div>
            );
          })}
        </div>

        {/* mini nota comercial */}
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="font-extrabold text-slate-900">¿No sabes cuál elegir?</p>
            <p className="mt-1 text-slate-600 text-sm">
              Te decimos cuál plan te conviene según tu situación actual y el nivel de exigencia (auditoría, contrato o riesgo).
            </p>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800 transition"
          >
            Recomiéndame un plan
          </a>
        </div>
      </div>
    </section>
  );
}
