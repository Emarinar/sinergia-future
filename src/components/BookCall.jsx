import { useEffect, useState } from "react";
import { track } from "../lib/track";
import Reveal from "./UI/Reveal";
import { Calendar, X, PhoneCall, ArrowRight } from "lucide-react";

const BOOKING_URL = "https://calendar.app.google/t82KW5RGv8Y3j48g9";
const WA_URL =
  "https://wa.me/3147204124?text=Hola%20Sinergia%2C%20quiero%20agendar%20una%20llamada%20de%20diagn%C3%B3stico%20gratuito.";

function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80]">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl rounded-3xl border border-white/20 bg-white shadow-xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
            <h3 className="text-lg font-extrabold text-slate-900">{title}</h3>
            <button
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5 text-slate-600" />
            </button>
          </div>
          <div className="p-0">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function BookCall() {
  const [open, setOpen] = useState(false);
  const [embedError, setEmbedError] = useState(false);

  const openNewTab = () => window.open(BOOKING_URL, "_blank", "noopener,noreferrer");

  return (
    <section className="py-20 px-6" id="agenda">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm p-10 grid lg:grid-cols-2 gap-10 items-center">
            {/* Copy */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm">
                <Calendar className="h-4 w-4 text-emerald-600" />
                Agenda gratis
              </span>

              <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Agenda una llamada de{" "}
                <span className="text-emerald-600">diagnóstico</span>
              </h2>

              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                Te escuchamos, evaluamos tu situación y te damos una ruta clara para SG-SST,
                Seguridad Social o PESV.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    setEmbedError(false);
                    setOpen(true);
                  }}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-emerald-700 transition"
                >
                  <PhoneCall className="h-5 w-5" />
                  Agendar ahora
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={openNewTab}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-50 transition"
                >
                  <Calendar className="h-5 w-5 text-emerald-600" />
                  Abrir en nueva pestaña
                </button>
              </div>

              <p className="mt-4 text-sm text-slate-500">
                * Si el calendario no abre dentro del sitio, usa “Abrir en nueva pestaña”.
              </p>
            </div>

            {/* Panel info */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-extrabold text-slate-900">¿Qué pasa en la llamada?</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  Entendemos tu sector, tamaño y urgencia.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  Te decimos qué falta y qué priorizar.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  Te proponemos plan y entregables.
                </li>
              </ul>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                Tip: Si prefieres, agenda por WhatsApp y te confirmamos el horario.
              </div>

              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 w-full rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50 transition"
              >
                Agendar por WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Modal con iframe (y fallback si lo bloquea) */}
        <Modal open={open} onClose={() => setOpen(false)} title="Agenda tu llamada">
          <div className="relative w-full h-[70vh] bg-white">
            {!embedError ? (
              <iframe
                title="Agendar llamada"
                src={BOOKING_URL}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                onError={() => setEmbedError(true)}
              />
            ) : (
              <div className="p-10">
                <p className="text-slate-700">
                  Tu navegador bloqueó el calendario dentro del sitio. Ábrelo en nueva pestaña:
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    onClick={openNewTab}
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 transition"
                  >
                    Abrir calendario <ArrowRight className="h-4 w-4" />
                  </button>

                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-50 transition"
                  >
                    Agendar por WhatsApp <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </Modal>
      </div>
    </section>
  );
}
