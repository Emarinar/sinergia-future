import Reveal from "./UI/Reveal";
import { ShieldCheck, FileSearch, BadgeCheck, Users } from "lucide-react";

const items = [
  {
    title: "Cumplimiento real",
    desc: "Alineación a normatividad vigente con evidencias listas para inspección y auditoría.",
    icon: ShieldCheck,
  },
  {
    title: "Evidencias claras",
    desc: "Documentos, formatos y trazabilidad: lo que realmente piden cuando revisan tu SG-SST.",
    icon: FileSearch,
  },
  {
    title: "Acompañamiento experto",
    desc: "Te guiamos paso a paso para implementar, mejorar y sostener el sistema en el tiempo.",
    icon: Users,
  },
  {
    title: "Enfoque empresarial",
    desc: "No solo cumplimiento: orden, control y mejora continua para proteger y crecer.",
    icon: BadgeCheck,
  },
];

export default function Trust() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              Confianza y respaldo
            </span>

            <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Una consultoría que combina{" "}
              <span className="text-emerald-600">técnica, estrategia</span> y{" "}
              <span className="text-emerald-600">orden</span>
            </h2>

            <p className="mt-4 text-slate-600 text-lg">
              Diseñamos sistemas que funcionan en la práctica y se sostienen con
              evidencias, cultura y seguimiento.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((x, i) => (
            <Reveal key={x.title} delay={i * 0.05} y={14}>
              <div className="group relative rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl p-7 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/0 to-violet-500/0 group-hover:from-emerald-400/14 group-hover:to-violet-500/10 transition" />

                <div className="relative z-10 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                    <x.icon className="h-6 w-6 text-emerald-600" />
                  </div>

                  <div>
                    <h3 className="text-slate-900 font-bold text-lg">
                      {x.title}
                    </h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">
                      {x.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
