export default function Trust() {
  const stats = [
    { big: "+100", small: "Documentos y formatos\nlistos para auditoría" },
    { big: "SG-SST", small: "Implementación\ncon evidencias" },
    { big: "PESV", small: "Planes con\nseguimiento" },
    { big: "S. Social", small: "Afiliaciones,\nnovedades y control" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 relative overflow-hidden">
          {/* glow interno */}
          <div className="pointer-events-none absolute -top-24 left-10 h-64 w-64 rounded-full bg-emerald-400/20 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-violet-500/15 blur-[100px]" />

          <div className="relative">
            <h3 className="text-3xl font-extrabold text-white">
              Confianza basada en <span className="text-emerald-300">evidencia</span>
            </h3>
            <p className="mt-3 text-white/70 max-w-2xl">
              No prometemos “papeles bonitos”. Entregamos estructura, soportes y
              control real para que tu empresa cumpla y avance.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div
                  key={s.big}
                  className="rounded-2xl border border-white/10 bg-black/30 p-6"
                >
                  <div className="text-4xl font-black text-white">{s.big}</div>
                  <div className="mt-2 text-white/60 whitespace-pre-line">
                    {s.small}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="bg-gradient-to-r from-emerald-300 to-emerald-500 text-black shadow-emerald-500/40
                text-black px-6 py-3 rounded-xl font-bold
                           shadow-lg shadow-emerald-500/25 hover:scale-[1.03] transition"
              >
                Cotizar ahora
              </a>
              <a
                href="#servicios"
                className="border border-white/15 text-white px-6 py-3 rounded-xl hover:bg-white/5 transition"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
