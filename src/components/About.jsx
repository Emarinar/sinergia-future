import Reveal from "./UI/Reveal";
import { ShieldCheck, FileCheck2, Users, Target, CheckCircle2 } from "lucide-react";

export default function About() {
  const bullets = [
    {
      icon: ShieldCheck,
      title: "Cumplimiento sin estrés",
      desc: "Te ayudamos a cumplir con evidencias claras y enfoque práctico para inspección y auditoría.",
    },
    {
      icon: FileCheck2,
      title: "Evidencias listas y trazables",
      desc: "Ordenamos documentos, formatos, actas, soportes y registros para que todo sea verificable.",
    },
    {
      icon: Users,
      title: "Acompañamiento real",
      desc: "No te dejamos con una carpeta: guiamos el proceso y sostenemos el sistema en el tiempo.",
    },
    {
      icon: Target,
      title: "Enfoque empresarial",
      desc: "El SG-SST como herramienta de control y mejora: menos reprocesos, más orden y prevención.",
    },
  ];

  const stats = [
    { k: "Enfoque", v: "Evidencias + control" },
    { k: "Atención", v: "Remoto / Presencial" },
    { k: "Sectores", v: "Pyme y operación" },
    { k: "Entregables", v: "Listos para auditoría" },
  ];

  return (
    <section id="nosotros" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Col izquierda */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Sobre Sinergia
              </span>

              <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Una consultoría que combina{" "}
                <span className="text-emerald-600">técnica, estrategia</span> y orden
              </h2>

              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                En Sinergia Consultoría SGI trabajamos con empresas que necesitan implementar,
                sostener o mejorar su SG-SST (y servicios relacionados) con un enfoque moderno:
                claridad, evidencias, seguimiento y control.
              </p>

              <div className="mt-7 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl p-6 shadow-sm">
                <p className="text-sm font-bold text-slate-900">Lo que garantizamos</p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Ruta clara de trabajo y priorización por riesgo",
                    "Documentación organizada + trazabilidad",
                    "Capacitaciones y soporte según necesidad real",
                    "Evidencias listas para auditoría / inspección",
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-2 text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <span className="text-sm">{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 transition"
                >
                  Hablar con un asesor
                </a>
                <a
                  href="#planes"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-50 transition"
                >
                  Ver planes
                </a>
              </div>
            </div>

            {/* Col derecha */}
            <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm p-7">
              <h3 className="text-xl font-extrabold text-slate-900">¿Por qué elegirnos?</h3>
              <p className="mt-2 text-slate-600">
                Porque trabajamos con foco en resultados: orden, control y evidencias.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {bullets.map((b) => {
                  const Icon = b.icon;
                  return (
                    <div
                      key={b.title}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{b.title}</p>
                          <p className="mt-1 text-sm text-slate-600">{b.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.k}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <p className="text-xs uppercase tracking-wide text-slate-500">{s.k}</p>
                    <p className="mt-1 font-extrabold text-slate-900">{s.v}</p>
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
