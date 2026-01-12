import Reveal from "./UI/Reveal";
import { Search, ClipboardList, Wrench, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico",
    desc: "Revisamos tu estado actual, brechas y prioridades. Te damos claridad desde el primer día.",
  },
  {
    icon: ClipboardList,
    title: "Plan",
    desc: "Creamos una ruta de trabajo con cronograma, responsables y entregables medibles.",
  },
  {
    icon: Wrench,
    title: "Implementación",
    desc: "Documentamos, capacitamos y ejecutamos. Todo queda ordenado y trazable.",
  },
  {
    icon: ShieldCheck,
    title: "Evidencias / Auditoría",
    desc: "Dejamos evidencias listas para inspección y auditoría, con control y seguimiento.",
  },
];

export default function Process() {
  return (
    <section className="py-20 px-6" id="proceso">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Cómo trabajamos
            </span>

            <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Proceso claro,{" "}
              <span className="text-emerald-600">resultados medibles</span>
            </h2>

            <p className="mt-4 text-slate-600 text-lg">
              En Sinergia te guiamos paso a paso para que el cumplimiento sea simple y sostenible.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm p-6 hover:shadow-md transition"
            >
              <div className="h-12 w-12 rounded-2xl border border-slate-200 bg-white shadow-sm flex items-center justify-center">
                <s.icon className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
