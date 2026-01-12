import { ShieldCheck, ClipboardList, Truck, CheckCircle } from "lucide-react";
import Reveal from "./UI/Reveal";

const services = [
  {
    title: "SG-SST",
    subtitle: "Implementación y mejora",
    icon: ShieldCheck,
    description:
      "Diseñamos, implementamos y fortalecemos tu Sistema de Gestión de Seguridad y Salud en el Trabajo, alineado a la normatividad vigente y enfocado en evidencias reales.",
    items: [
      "Evaluación inicial",
      "Matriz legal y riesgos",
      "Programas y formatos",
      "Auditorías y seguimiento",
    ],
  },
  {
    title: "Seguridad Social",
    subtitle: "Control y trazabilidad",
    icon: ClipboardList,
    description:
      "Aseguramos la correcta afiliación, control y seguimiento de la Seguridad Social, reduciendo riesgos legales y reprocesos administrativos.",
    items: [
      "Afiliaciones y novedades",
      "Verificación de pagos",
      "Control documental",
      "Soporte ante requerimientos",
    ],
  },
  {
    title: "PESV",
    subtitle: "Plan Estratégico Vial",
    icon: Truck,
    description:
      "Implementamos y damos seguimiento al Plan Estratégico de Seguridad Vial, con enfoque preventivo, operativo y normativo.",
    items: [
      "Diagnóstico inicial",
      "Plan y políticas",
      "Capacitación",
      "Evidencias y reportes",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              Servicios profesionales
            </span>

            <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Soluciones claras para{" "}
              <span className="text-emerald-600">empresas que quieren crecer</span>
            </h2>

            <p className="mt-4 text-slate-600 text-lg">
              No solo cumplimos la norma. Construimos sistemas sólidos,
              auditables y sostenibles en el tiempo.
            </p>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div
                className="group relative rounded-3xl border border-slate-200 bg-white/80
                           backdrop-blur-xl p-8 shadow-sm hover:shadow-xl
                           transition-all duration-300"
              >
                {/* Glow hover */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl
                                bg-gradient-to-br from-emerald-400/0 to-violet-500/0
                                group-hover:from-emerald-400/15 group-hover:to-violet-500/10
                                transition" />

                {/* Icon */}
                <div className="relative z-10 flex items-center gap-4">
                  <div
                    className="h-12 w-12 rounded-2xl bg-emerald-50 border border-emerald-200
                               flex items-center justify-center"
                  >
                    <s.icon className="h-6 w-6 text-emerald-600" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {s.title}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {s.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="relative z-10 mt-6 text-slate-600 leading-relaxed">
                  {s.description}
                </p>

                {/* List */}
                <ul className="relative z-10 mt-6 space-y-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-slate-600"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="relative z-10 mt-8">
                  <a
                    href="#contacto"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl
                               border border-slate-300 text-slate-700
                               hover:bg-slate-100 transition font-medium"
                  >
                    Solicitar información
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
