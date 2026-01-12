import Reveal from "./UI/Reveal";
import { TrendingUp, FileCheck2, Users } from "lucide-react";

const items = [
  {
    icon: FileCheck2,
    title: "Evidencias listas para auditoría",
    desc: "Organizamos documentos, matrices y soportes con trazabilidad para inspecciones y auditorías.",
  },
  {
    icon: TrendingUp,
    title: "Menos reprocesos en Seguridad Social",
    desc: "Control documental y validación de novedades para evitar inconsistencias y retrasos.",
  },
  {
    icon: Users,
    title: "Capacitaciones y cultura preventiva",
    desc: "Formación práctica para equipos: menos incidentes y más cumplimiento real.",
  },
];

export default function Results() {
  return (
    <section className="py-20 px-6" id="resultados">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Resultados reales
            </span>

            <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Lo que logramos{" "}
              <span className="text-emerald-600">en empresas reales</span>
            </h2>

            <p className="mt-4 text-slate-600 text-lg">
              No es teoría: es orden, control y cumplimiento que se nota.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm p-7 hover:shadow-md transition"
            >
              <div className="h-12 w-12 rounded-2xl border border-slate-200 bg-white shadow-sm flex items-center justify-center">
                <it.icon className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
