import React from "react";
import Reveal from "./UI/Reveal";
import { Building2 } from "lucide-react";

  const clients = [
    { name: "Cliente 1", src: "/clients/cliente-1.png" },
    { name: "Cliente 2", src: "/clients/cliente-2.png" },
    { name: "Cliente 3", src: "/clients/cliente-3.png" },
    { name: "Cliente 4", src: "/clients/cliente-4.png" },
    { name: "Cliente 5", src: "/clients/cliente-5.png" },
    { name: "Cliente 6", src: "/clients/cliente-6.png" },
    { name: "Cliente 7", src: "/clients/cliente-7.png" },
    { name: "Cliente 8", src: "/clients/cliente-8.png" },
    { name: "Cliente 9", src: "/clients/cliente-9.png" },
    { name: "Cliente 10", src: "/clients/cliente-10.png" },
    { name: "Cliente 11", src: "/clients/cliente-11.png" },
  ];

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

export default function Clients() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm">
              <Building2 className="h-4 w-4 text-emerald-600" />
              Clientes
            </span>

            <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Empresas que confían en{" "}
              <span className="text-emerald-600">Sinergia</span>
            </h2>

            <p className="mt-4 text-slate-600 text-lg">
              Acompañamiento real, evidencias claras y control documental para
              auditorías, inspecciones y mejora continua.
            </p>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((c, idx) => (
            <Reveal key={c.name} delay={idx * 0.03} y={14}>
              <ClientLogo name={c.name} src={c.src} />
            </Reveal>
          ))}
        </div>

        {/* Footer CTA */}
        <Reveal delay={0.12}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl p-6 shadow-sm">
            <div>
              <p className="text-slate-900 font-semibold">
                ¿Quieres que tu empresa sea la próxima?
              </p>
              <p className="text-slate-600 text-sm">
                Agenda una asesoría y te proponemos una ruta clara para SG-SST,
                Seguridad Social o PESV.
              </p>
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl
                         bg-emerald-500 hover:bg-emerald-600 text-white font-semibold
                         shadow-md hover:shadow-lg transition hover:scale-[1.02]"
            >
              Hablemos
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ClientLogo({ name, src }) {
  const [error, setError] = React.useState(false);

  return (
    <div className="group relative">
      {/* Glow hover suave */}
      <div
        className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-emerald-400/0 to-violet-500/0
                   group-hover:from-emerald-400/18 group-hover:to-violet-500/12 blur-xl opacity-0
                   group-hover:opacity-100 transition duration-300"
      />

      <div
        className="relative h-20 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl
                   flex items-center justify-center p-4 shadow-sm hover:shadow-md transition"
        title={name}
      >
        {!error ? (
          <img
            src={src}
            alt={name}
            className="max-h-10 w-auto opacity-90 group-hover:opacity-100 transition
                       grayscale group-hover:grayscale-0"
            onError={() => setError(true)}
          />
        ) : (
          <div className="flex items-center gap-2 text-slate-600">
            <span className="h-9 w-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center font-bold">
              {initials(name)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

