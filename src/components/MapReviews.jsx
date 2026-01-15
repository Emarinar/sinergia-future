import Reveal from "./UI/Reveal";
import { MapPin, Star, ExternalLink, Navigation, Copy } from "lucide-react";

const ADDRESS_TEXT = "Cra 32 # 77 Sur 205, Sabaneta, Antioquia, Colombia";

// Query para Google Maps (bien codificado)
const MAP_QUERY = encodeURIComponent(ADDRESS_TEXT);

// Link para abrir búsqueda/pin en Google Maps
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

// Link para “Cómo llegar” (abre navegación con destino)
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

// Placeholder para reseñas (luego reemplazamos por el link real de Google Business)
const REVIEWS_URL = MAPS_URL;

// Embed del mapa (dirección directa)
const EMBED_URL = `https://www.google.com/maps?q=${MAP_QUERY}&z=16&output=embed`;

export default function MapReviews() {
  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(ADDRESS_TEXT);
      // Si quieres toast luego, lo agregamos.
      // Por ahora lo dejamos silencioso para no meter dependencias.
    } catch {
      // fallback simple
      const textarea = document.createElement("textarea");
      textarea.value = ADDRESS_TEXT;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
  };

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
              Estamos en <span className="text-emerald-600">Sabaneta</span>
            </h2>

            <p className="mt-4 text-slate-600 text-lg">
              Dirección: <span className="font-semibold text-slate-800">{ADDRESS_TEXT}</span>
              <br />
              Atendemos empresas en Antioquia y otras ciudades (remoto, presencial o mixto).
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-2 gap-6 items-stretch">
          {/* MAPA */}
          <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 bg-white/60">
              <h3 className="text-lg font-extrabold text-slate-900">Mapa</h3>
              <p className="mt-1 text-sm text-slate-600">
                Encuéntranos en Sabaneta y agenda una visita o asesoría.
              </p>
            </div>

            <div className="relative w-full h-[360px] bg-slate-100">
              <iframe
                title="Mapa Sinergia - Sabaneta"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={EMBED_URL}
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

              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 transition"
              >
                <Navigation className="h-5 w-5" />
                Cómo llegar <ExternalLink className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={copyAddress}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50 transition"
              >
                <Copy className="h-5 w-5 text-emerald-600" />
                Copiar dirección
              </button>
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
              Las reseñas ayudan a que más empresas confíen en nuestro trabajo. En cuanto tengas tu enlace
              de Google Business, lo conectamos para “Escribir reseña” directo.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm text-slate-700 font-semibold">Sugerencia para reseña:</p>
              <p className="mt-2 text-sm text-slate-600">
                “Sinergia nos organizó el SG-SST, capacitó al equipo y dejó evidencias listas para auditoría.
                Recomendados por su claridad, enfoque y acompañamiento.”
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
              * Cuando tengas el link real de Google Business, reemplazamos <b>REVIEWS_URL</b> por “Escribir reseña”.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
