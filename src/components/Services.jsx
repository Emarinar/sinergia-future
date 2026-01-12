import Reveal from "./UI/Reveal";
import {
  ShieldCheck,
  FileText,
  Car,
  GraduationCap,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";

const IconBox = ({ children }) => (
  <div className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-emerald-300">
    {children}
  </div>
);

export default function Services() {
  const services = [
    {
      title: "SG-SST Integral",
      desc: "Implementación, auditoría y acompañamiento legal del SG-SST.",
      icon: <ShieldCheck size={22} />,
    },
    {
      title: "Seguridad Social",
      desc: "Afiliación, novedades, control documental y verificación.",
      icon: <FileText size={22} />,
    },
    {
      title: "PESV",
      desc: "Plan Estratégico de Seguridad Vial con seguimiento real.",
      icon: <Car size={22} />,
    },
    {
      title: "Capacitaciones",
      desc: "Formación práctica, certificada y orientada a resultados.",
      icon: <GraduationCap size={22} />,
    },
    {
      title: "Auditorías",
      desc: "Revisión técnica y legal de cumplimiento y evidencias.",
      icon: <BadgeCheck size={22} />,
    },
    {
      title: "Consultoría Empresarial",
      desc: "Estrategia para crecer con orden, control y cumplimiento.",
      icon: <TrendingUp size={22} />,
    },
  ];

  return (
    <section id="servicios" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-4xl font-extrabold text-white text-center">
            Servicios que elevan tu empresa
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-white/60 text-center max-w-2xl mx-auto mt-4">
            Soluciones diseñadas para cumplir, proteger y crecer con respaldo real.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <Reveal key={s.title} delay={0.06 * idx} y={18}>
              <div className="relative group">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-400/40 to-violet-500/20 blur-xl opacity-0 group-hover:opacity-25 transition duration-300" />

                <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl
                                hover:-translate-y-1 hover:border-white/20 transition duration-300">
                  <div className="flex items-center gap-4">
                    <IconBox>{s.icon}</IconBox>
                    <h3 className="text-xl font-bold text-white">{s.title}</h3>
                  </div>

                  <p className="mt-4 text-white/70 leading-relaxed">{s.desc}</p>

                  <div className="mt-6 inline-flex items-center gap-2 text-emerald-300 font-semibold">
                    Ver detalle <span className="group-hover:translate-x-1 transition">→</span>
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
