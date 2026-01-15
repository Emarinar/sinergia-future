// src/components/Hero.jsx
import logo from "../assets/logo.png";
import Reveal from "./UI/Reveal";
import {
  ShieldCheck,
  FileCheck2,
  BarChart3,
  ClipboardList,
  Users,
  MapPin,
  PhoneCall,
  Sparkles,
  BadgeCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const quickBullets = [
  "Evidencias listas para inspección y auditoría",
  "Ruta clara por fases (sin reprocesos)",
  "Acompañamiento humano + control con indicadores",
];

const highlights = [
  {
    icon: ShieldCheck,
    title: "Cumplimiento real",
    desc: "Alineación a normatividad vigente con evidencia verificable.",
  },
  {
    icon: FileCheck2,
    title: "Entregables claros",
    desc: "Formatos, matrices, soportes y trazabilidad lista para revisar.",
  },
  {
    icon: BarChart3,
    title: "Control y mejora",
    desc: "Indicadores, comités y seguimiento que se sostiene en el tiempo.",
  },
];

const stats = [
  { k: "SG-SST", v: "Implementación", icon: ClipboardList },
  { k: "PESV", v: "Seguimiento", icon: BadgeCheck },
  { k: "Seg. Social", v: "Control", icon: Users },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 md:pt-32 pb-20 px-6"
    >
      {/* Background premium (claro, con profundidad) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Gradiente base suave */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-violet-50" />
        {/* Glows */}
        <div className="absolute -top-40 -left-40 h-[560px] w-[560px] rounded-full bg-emerald-300/25 blur-[140px]" />
        <div className="absolute -top-40 -right-40 h-[620px] w-[620px] rounded-full bg-violet-300/20 blur-[160px]" />
        <div className="absolute bottom-[-180px] left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-sky-300/15 blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* LEFT */}
        <div className="max-w-2xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-slate-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_18px_rgba(16,185,129,.6)]" />
              Consultoría SG-SST • Seguridad Social • PESV
              <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 border border-emerald-100">
                <Sparkles className="h-3.5 w-3.5" />
                Premium
              </span>
            </div>
          </Reveal>

          <Reveal>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
              La consultoría que{" "}
              <span className="text-emerald-600">protege</span> tu empresa
              <br className="hidden sm:block" /> y acelera tu crecimiento
            </h1>
          </Reveal>

          <Reveal>
            <p className="mt-5 text-slate-600 text-lg leading-relaxed max-w-xl">
              Cumplimiento legal + estrategia + control. En Sinergia organizamos
              tu SG-SST con evidencias claras, entregables auditables y un plan
              que sí se ejecuta.
            </p>
          </Reveal>

          {/* Bullets */}
          <Reveal>
            <ul className="mt-6 space-y-2.5">
              {quickBullets.map((t) => (
                <li key={t} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <span className="text-sm md:text-base">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* CTAs */}
          <Reveal>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-emerald-700 transition"
              >
                Cotizar ahora
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/80 px-6 py-3 font-semibold text-slate-900 hover:bg-white transition"
              >
                Ver servicios
              </a>

              <a
                href="https://wa.me/3147204124"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-3 font-semibold text-emerald-800 hover:bg-emerald-100 transition"
              >
                <PhoneCall className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </Reveal>

          {/* Trust strip */}
          <Reveal>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              <div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  <p className="font-semibold text-slate-900">Medellín – Colombia</p>
                </div>
                <p className="mt-1 text-sm text-slate-600">
                  Atención presencial, remota o mixta según tu operación.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-emerald-600" />
                  <p className="font-semibold text-slate-900">Evidencias verificables</p>
                </div>
                <p className="mt-1 text-sm text-slate-600">
                  Documentación + trazabilidad lista para auditoría.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Mini métricas */}
          <Reveal>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {stats.map(({ k, v, icon: Icon }) => (
                <div
                  key={k}
                  className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-4 shadow-sm"
                >
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <Icon className="h-5 w-5 text-emerald-600" />
                    <p className="text-slate-900 font-extrabold">{k}</p>
                  </div>
                  <p className="text-slate-600 text-xs md:text-sm mt-1 text-center md:text-left">
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* RIGHT */}
        <div className="relative">
          {/* halo */}
          <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-300/35 to-violet-300/25 blur-2xl opacity-60" />

          <Reveal>
            <div className="relative rounded-3xl border border-slate-200 bg-white/75 backdrop-blur-xl shadow-sm p-8 md:p-10">
              {/* logo + microcopy */}
              <div className="flex items-center justify-between gap-4">
                <img
                  src={logo}
                  alt="Sinergia Consultoría SGI"
                  className="w-44 md:w-52 h-auto object-contain"
                />
                <div className="hidden md:flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 shadow-sm">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  SG-SST con orden
                </div>
              </div>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Te acompañamos paso a paso para evitar sanciones, proteger tu equipo
                y sostener el sistema en el tiempo.
              </p>

              {/* highlights */}
              <div className="mt-7 grid gap-3">
                {highlights.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-2">
                        <Icon className="h-5 w-5 text-emerald-700" />
                      </div>
                      <div>
                        <p className="font-extrabold text-slate-900">{title}</p>
                        <p className="mt-1 text-sm text-slate-600">{desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* mini proceso */}
              <div className="mt-7 rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm">
                <p className="text-sm font-extrabold text-slate-900">
                  ¿Cómo trabajamos?
                </p>
                <div className="mt-3 grid grid-cols-4 gap-2 text-center">
                  {[
                    { t: "Diagnóstico", s: "Brechas" },
                    { t: "Plan", s: "Ruta" },
                    { t: "Implementación", s: "Ejecución" },
                    { t: "Evidencias", s: "Auditoría" },
                  ].map((x, idx) => (
                    <div
                      key={x.t}
                      className="rounded-xl border border-slate-200 bg-white px-3 py-3"
                    >
                      <p className="text-xs font-extrabold text-slate-900">
                        {idx + 1}. {x.t}
                      </p>
                      <p className="text-[11px] text-slate-600 mt-1">{x.s}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA inside card */}
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 transition"
                >
                  <BadgeCheck className="h-5 w-5" />
                  Solicitar diagnóstico
                </a>
                <a
                  href="#planes"
                  className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50 transition"
                >
                  Ver planes
                </a>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                * Ajustamos el acompañamiento según tamaño, sector, sedes y nivel de riesgo.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
