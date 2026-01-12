import Reveal from "./UI/Reveal";
import { Camera } from "lucide-react";

const images = [
  "/field/field-1.jpg",
  "/field/field-2.jpg",
  "/field/field-3.jpg",
  "/field/field-4.jpg",
  "/field/field-5.jpg",
  "/field/field-6.jpg"
];

function SlideCard({ src }) {
  return (
    <div className="mx-3 shrink-0">
      <div className="relative h-44 w-72 md:h-56 md:w-96 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <img
          src={src}
          alt="Sinergia en campo"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          draggable="false"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
      </div>
    </div>
  );
}

function Track({ reverse = false }) {
  const loop = [...images, ...images, ...images]; // más largo, más fluido
  return (
    <div className={`field-slider-track ${reverse ? "is-reverse" : ""}`}>
      {loop.map((src, i) => (
        <SlideCard key={`${src}-${i}`} src={src} />
      ))}
    </div>
  );
}

export default function FieldSlider() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm">
              <Camera className="h-4 w-4 text-emerald-600" />
              En acción
            </span>

            <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Nuestro trabajo en{" "}
              <span className="text-emerald-600">empresas reales</span>
            </h2>

            <p className="mt-4 text-slate-600 text-lg">
              Capacitación, inspecciones, auditorías, implementación y seguimiento con evidencias.
            </p>
          </div>
        </Reveal>

        {/* Premium: doble carrusel */}
        <div className="mt-10 space-y-5">
          <div className="field-slider-wrap rounded-3xl border border-slate-200 bg-white/60 backdrop-blur-xl shadow-sm overflow-hidden">
            <Track />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />
          </div>

          <div className="field-slider-wrap rounded-3xl border border-slate-200 bg-white/60 backdrop-blur-xl shadow-sm overflow-hidden">
            <Track reverse />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
          {["SG-SST", "Seguridad Social", "PESV"].map((x) => (
            <span
              key={x}
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1"
            >
              {x}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
