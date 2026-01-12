import Reveal from "./UI/Reveal";
import { Instagram, Facebook, ExternalLink, ArrowRight } from "lucide-react";

const IG_URL = "https://www.instagram.com/sinergiasgi/";
const FB_URL = "https://www.facebook.com/profile.php?id=61578121284838#";
const WA_URL = "https://wa.me/3147204124";

const gallery = [
  // Usa tus fotos reales del campo (ya están en /public/field/)
  "/field/field-1.jpg",
  "/field/field-2.jpg",
  "/field/field-3.jpg",
  "/field/field-4.jpg",
  "/field/field-5.jpg",
];

function SocialButton({ href, icon: Icon, label, sub }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-xl px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-gradient-to-r from-emerald-50 via-white to-violet-50" />
      <div className="relative flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
          <Icon className="h-5 w-5 text-emerald-600" />
        </span>
        <div className="min-w-0">
          <p className="font-semibold text-slate-900 leading-tight">{label}</p>
          <p className="text-sm text-slate-600 truncate">{sub}</p>
        </div>
        <ExternalLink className="ml-auto h-4 w-4 text-slate-400 transition group-hover:text-slate-700" />
      </div>
    </a>
  );
}

export default function Social() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Comunidad Sinergia
            </span>

            <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Síguenos y mira <span className="text-emerald-600">evidencias reales</span>
            </h2>

            <p className="mt-4 text-slate-600 text-lg">
              Publicamos tips, recordatorios normativos, casos reales y momentos en campo.
              Conéctate con Sinergia en redes.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-2 gap-10 items-start">
          {/* Lado izquierdo */}
          <div className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <SocialButton
                href={IG_URL}
                icon={Instagram}
                label="Instagram"
                sub="@sinergiasgi"
              />
              <SocialButton
                href={FB_URL}
                icon={Facebook}
                label="Facebook"
                sub="Sinergia Consultoría SGI"
              />
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-slate-900">
                ¿Quieres una asesoría rápida?
              </h3>
              <p className="mt-2 text-slate-600">
                Te respondemos por WhatsApp y te damos una ruta clara para SG-SST, Seguridad Social o PESV.
              </p>

              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Escribir por WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="text-sm text-slate-500">
              * Próximo paso PRO: automatizar “últimos posts” desde IG (requiere token/API o servicio intermedio).
            </div>
          </div>

          {/* Lado derecho: galería tipo feed */}
          <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-bold text-slate-900">Galería</h3>
              <a
                href={IG_URL}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Ver más en Instagram →
              </a>
            </div>

            <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-4">
              {gallery.map((src) => (
                <div
                  key={src}
                  className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <img
                    src={src}
                    alt="Sinergia en campo"
                    className="h-28 w-full object-cover md:h-32"
                    loading="lazy"
                    draggable="false"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm text-slate-600">
              Estas imágenes salen de <code className="px-1 py-0.5 rounded bg-slate-100">/public/field</code>.
              Luego podemos crear un álbum por cliente, sector o servicio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
