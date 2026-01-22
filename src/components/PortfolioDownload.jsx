import Reveal from "./UI/Reveal";
import { FileText, Download, ExternalLink, Sparkles } from "lucide-react";

const PDF_URL = "/portafolio/portafolio-sinergia.pdf";

export default function PortfolioDownload() {
  return (
    <section className="py-20 px-6" id="portafolio">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              Portafolio descargable
            </span>

            <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Conoce nuestros servicios en un{" "}
              <span className="text-emerald-600">PDF profesional</span>
            </h2>

            <p className="mt-4 text-slate-600 text-lg">
              Descarga el portafolio completo con nuestras líneas: SG-SST, PESV, Administración de Seguridad
              Social, Sinergia Digital y Sinergia Legal.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Card principal */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm overflow-hidden">
            <div className="p-7 border-b border-slate-200 bg-white/60">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700">
                    <FileText className="h-4 w-4 text-emerald-600" />
                    Portafolio Sinergia (PDF)
                  </div>
                  <h3 className="mt-3 text-xl md:text-2xl font-extrabold text-slate-900">
                    Portafolio de Servicios – Sinergia Consultoría SGI
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-slate-600">
                    Ideal para enviar a gerencia, compras o contratistas. Presentación clara, visual y lista
                    para tomar decisión.
                  </p>
                </div>

                <a
                  href={PDF_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-900 hover:bg-slate-50 transition"
                >
                  Ver <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Preview simple (sin depender de librerías) */}
            <div className="p-7">
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6">
                <p className="text-sm font-semibold text-slate-900">Incluye:</p>
                <ul className="mt-3 grid md:grid-cols-2 gap-2 text-sm text-slate-600">
                  <li>• SG-SST (implementación + evidencias)</li>
                  <li>• PESV (plan, control e indicadores)</li>
                  <li>• Administración de Seguridad Social</li>
                  <li>• Sinergia Digital (web + apps + automatización)</li>
                  <li>• Sinergia Legal (blindaje + defensa + accidentes)</li>
                  <li>• Planes (Esencial / Pro / Premium)</li>
                </ul>
                <p className="mt-4 text-xs text-slate-500">
                  {/* * Si tu PDF no abre, revisa que exista en: <span className="font-mono">{PDF_URL}</span> */}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={PDF_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 transition"
                >
                  Ver portafolio <ExternalLink className="h-4 w-4" />
                </a>

                <a
                  href={PDF_URL}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-50 transition"
                >
                  Descargar <Download className="h-4 w-4 text-emerald-600" />
                </a>

                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-6 py-3 font-semibold text-emerald-800 hover:bg-emerald-100 transition"
                >
                  Cotizar ahora
                </a>
              </div>
            </div>
          </div>

          {/* Card secundaria: “envíamelo por correo / WhatsApp” */}
          <div className="lg:col-span-5 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm p-8 flex flex-col">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm w-fit">
              <Download className="h-4 w-4 text-emerald-600" />
              Envío rápido
            </div>

            <h3 className="mt-6 text-xl md:text-2xl font-extrabold text-slate-900">
              ¿Te lo enviamos con una recomendación según tu empresa?
            </h3>

            <p className="mt-3 text-slate-600 leading-relaxed">
              Si nos dejas tus datos, te compartimos el PDF y además te sugerimos el plan (Esencial / Pro /
              Premium) según tu sector, número de trabajadores y nivel de riesgo.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-slate-900">Tip:</p>
              <p className="mt-2 text-sm text-slate-600">
                Esto sube la conversión porque el cliente no solo “descarga”, sino que también recibe una
                ruta clara.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 transition"
              >
                Solicitar recomendación
              </a>
              <a
                href={PDF_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-50 transition"
              >
                Ver PDF <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-auto pt-6 text-xs text-slate-500">
              {/* * En producción el PDF quedará público en tu dominio bajo <span className="font-mono">{PDF_URL}</span> */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
