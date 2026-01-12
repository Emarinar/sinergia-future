import Reveal from "./UI/Reveal";
import { MapPin, Star, ExternalLink } from "lucide-react";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Medell%C3%ADn%2C%20Antioquia%2C%20Colombia";

// Placeholder para reseñas (lo cambiamos cuando tengas Google Business)
const REVIEWS_URL = MAPS_URL;

export default function MapReviews() {
  return (
    <section className="py-20 px-6" id="ubicacion">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm">
              <MapPin className="h-4 w-4 text-emerald-600" />
              Ubicación
            </span>

            <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Estamos en <span className="text-emerald-600">Medellín</span>
            </h2>

            <p className="mt-4 text-slate-600 text-lg">
              Atendemos empresas en Medellín y otras ciudades (remoto, presencial o mixto).
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-2 gap-6 items-stretch">
          {/* MAPA */}
          <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 bg-white/60">
              <h3 className="text-lg font-extrabold text-slate-900">Mapa</h3>
              <p className="mt-1 text-sm text-slate-600">
                Placeholder Medellín (lo reemplazamos por tu punto exacto).
              </p>
            </div>

            <div className="relative w-full h-[360px] bg-slate-100">
              <iframe
                title="Mapa Medellín"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Medell%C3%ADn%2C%20Antioquia%2C%20Colombia&z=12&output=embed"
              />
            </div>

            <div className="p-6 flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50 transition"
              >
                <MapPin className="h-5 w-5 text-emerald-600" />
                Abrir en Google Maps <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* RESEÑAS */}
          <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm p-8 flex flex-col">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm w-fit">
              <Star className="h-4 w-4 text-emerald-600" />
              Reseñas
            </div>

            <h3 className="mt-6 text-xl md:text-2xl font-extrabold text-slate-900">
              ¿Te gustaría dejarnos una reseña?
            </h3>

            <p className="mt-3 text-slate-600 leading-relaxed">
              Las reseñas ayudan a que más empresas confíen en nuestro trabajo. Cuando tengamos el enlace
              de Google Business, aquí quedará directo a “Escribir reseña”.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm text-slate-700 font-semibold">Sugerencia para reseña:</p>
              <p className="mt-2 text-sm text-slate-600">
                “Sinergia nos organizó el SG-SST, capacitó al equipo y dejó evidencias listas para auditoría.
                Recomendados por su claridad y acompañamiento.”
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={REVIEWS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 transition"
              >
                <Star className="h-5 w-5" />
                Ver en Google Maps <ExternalLink className="h-4 w-4" />
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-50 transition"
              >
                Pedir asesoría
              </a>
            </div>

            <p className="mt-auto pt-6 text-xs text-slate-500">
              * Cuando tengas el enlace real del negocio, reemplazamos REVIEWS_URL por el link directo a reseñas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
