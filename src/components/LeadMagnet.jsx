// src/components/LeadMagnet.jsx
import { useMemo, useState } from "react";
import Reveal from "./UI/Reveal";
import {
  BookOpen,
  Download,
  ShieldCheck,
  Sparkles,
  Mail,
  Building2,
  User,
  ExternalLink,
  Loader2,
} from "lucide-react";

/**
 * LeadMagnet – Revista Sinergia (descargable)
 * - Envía lead a tu backend (PHP) y luego abre la revista
 * - Incluye tracking (gtag / dataLayer) + UTM básicos
 *
 * Requisitos:
 * - Coloca el PDF en: /public/revista/revista-sinergia.pdf  (o ajusta PDF_URL)
 * - Endpoint backend (PHP) debe aceptar JSON:
 *   { nombre, email, empresa, mensaje, tipo, source, utm... }
 *   y responder { status: "success" | "error" }
 */

// ✅ AJUSTA ESTO A TU RUTA REAL (public/...)
const PDF_URL = "/revista/revista-sinergia.pdf";

// ✅ AJUSTA ESTO A TU ENDPOINT REAL
// Si estás usando cPanel: /enviar.php (en la raíz del hosting)
// En dev puedes apuntar a "http://localhost/enviar.php" si lo sirves ahí,
// pero lo normal es dejarlo relativo y que producción lo resuelva.
const API_URL = "/enviar.php";

function safeTrack(eventName, params = {}) {
  try {
    // Google Analytics gtag
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }
    // Google Tag Manager dataLayer
    if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: eventName, ...params });
    }
    // Plausible (si algún día lo agregas)
    if (typeof window !== "undefined" && typeof window.plausible === "function") {
      window.plausible(eventName, { props: params });
    }
  } catch (_) {
    // no-op
  }
}

export default function LeadMagnet() {
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [msg, setMsg] = useState("");

  const utm = useMemo(() => {
    if (typeof window === "undefined") return {};
    const p = new URLSearchParams(window.location.search);
    return {
      utm_source: p.get("utm_source") || "",
      utm_medium: p.get("utm_medium") || "",
      utm_campaign: p.get("utm_campaign") || "",
      utm_content: p.get("utm_content") || "",
      utm_term: p.get("utm_term") || "",
    };
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(String(email || "").trim());

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    const nombre = form.nombre.trim();
    const email = form.email.trim();
    const empresa = form.empresa.trim();

    if (!nombre) {
      setStatus("error");
      setMsg("Por favor escribe tu nombre.");
      return;
    }
    if (!validateEmail(email)) {
      setStatus("error");
      setMsg("Por favor ingresa un correo válido.");
      return;
    }

    setStatus("loading");

    // Tracking: intento de envío
    safeTrack("leadmagnet_submit", {
      lead_type: "revista",
      source: "leadmagnet",
      email_domain: email.split("@")[1] || "",
      has_company: Boolean(empresa),
      ...utm,
    });

    const payload = {
      nombre,
      email,
      empresa: empresa || "",
      tipo: "revista",
      source: "leadmagnet",
      mensaje:
        "Solicitud de Revista Sinergia (Lead Magnet). Enviar enlace / adjunto del PDF al usuario.",
      pdf_url: PDF_URL,
      page: typeof window !== "undefined" ? window.location.href : "",
      ...utm,
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data?.status === "success") {
        setStatus("success");
        setMsg("¡Listo! Te enviamos la revista a tu correo. También puedes abrirla ahora.");

        // Tracking: éxito
        safeTrack("leadmagnet_success", {
          lead_type: "revista",
          source: "leadmagnet",
          ...utm,
        });

        // Abrimos la revista (mejor UX: que el usuario vea valor inmediatamente)
        window.open(PDF_URL, "_blank", "noopener,noreferrer");
        return;
      }

      setStatus("error");
      setMsg("No pudimos enviar en este momento. Intenta de nuevo o escríbenos por WhatsApp.");

      safeTrack("leadmagnet_error", {
        lead_type: "revista",
        source: "leadmagnet",
        reason: "api_error",
        http_status: String(res.status || ""),
        ...utm,
      });
    } catch (err) {
      setStatus("error");
      setMsg("Error de conexión. Revisa tu red e intenta nuevamente.");

      safeTrack("leadmagnet_error", {
        lead_type: "revista",
        source: "leadmagnet",
        reason: "network_error",
        ...utm,
      });
    }
  };

  return (
    <section id="revista" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* LEFT: copy + mock */}
            <div className="relative rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm overflow-hidden p-8 md:p-10">
              {/* soft glows */}
              <div className="pointer-events-none absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-emerald-400/20 blur-[110px]" />
              <div className="pointer-events-none absolute -bottom-48 -right-40 h-[520px] w-[520px] rounded-full bg-violet-500/15 blur-[130px]" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm">
                  <BookOpen className="h-4 w-4 text-emerald-600" />
                  Revista digital gratuita
                </span>

                <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Revista <span className="text-emerald-600">Sinergia</span>: Seguridad y Bienestar Empresarial
                </h2>

                <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                  Una publicación para empresarios que quieren cumplir la norma, proteger su gente y construir
                  un legado sostenible.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex gap-3">
                    <ShieldCheck className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <p className="text-slate-700">
                      Marco normativo del SG-SST explicado de forma clara y aplicable.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Sparkles className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <p className="text-slate-700">
                      Cumplimiento con evidencias, cultura preventiva y enfoque empresarial.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Download className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <p className="text-slate-700">
                      Úsala como guía para ordenar documentos, evitar sanciones y preparar auditorías.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={PDF_URL}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() =>
                      safeTrack("leadmagnet_view_pdf", { lead_type: "revista", source: "leadmagnet", ...utm })
                    }
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50 transition"
                  >
                    <ExternalLink className="h-4 w-4 text-slate-700" />
                    Ver revista (solo lectura)
                  </a>

                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 transition"
                    onClick={() => safeTrack("leadmagnet_cta_contact", { lead_type: "revista", source: "leadmagnet" })}
                  >
                    Cotizar asesoría
                  </a>
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  * Al dejar tus datos, recibes la revista y recomendaciones sugeridas según tu necesidad (SG-SST,
                  Seguridad Social o PESV).
                </p>
              </div>
            </div>

            {/* RIGHT: form */}
            <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm p-8 md:p-10">
              <div className="max-w-xl">
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">
                  Recíbela y descárgala
                </h3>
                <p className="mt-2 text-slate-600">
                  Déjanos tu correo y te llega la revista + una recomendación rápida para tu caso.
                </p>
              </div>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="sr-only">Nombre</span>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      name="nombre"
                      value={form.nombre}
                      onChange={onChange}
                      placeholder="Nombre *"
                      autoComplete="name"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-12 py-4 text-slate-900 placeholder:text-slate-400 shadow-sm outline-none focus:ring-4 focus:ring-emerald-200"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="sr-only">Empresa</span>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      name="empresa"
                      value={form.empresa}
                      onChange={onChange}
                      placeholder="Empresa (opcional)"
                      autoComplete="organization"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-12 py-4 text-slate-900 placeholder:text-slate-400 shadow-sm outline-none focus:ring-4 focus:ring-emerald-200"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="sr-only">Correo</span>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="Correo *"
                      autoComplete="email"
                      inputMode="email"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-12 py-4 text-slate-900 placeholder:text-slate-400 shadow-sm outline-none focus:ring-4 focus:ring-emerald-200"
                    />
                  </div>
                </label>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-4 font-semibold text-white shadow-sm hover:bg-emerald-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Enviando…
                    </>
                  ) : (
                    <>
                      <Download className="h-5 w-5" />
                      Recibir revista gratis
                    </>
                  )}
                </button>

                {/* feedback */}
                {status !== "idle" && (
                  <div
                    className={[
                      "rounded-2xl border px-4 py-3 text-sm",
                      status === "success"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                        : status === "error"
                        ? "border-rose-200 bg-rose-50 text-rose-800"
                        : "border-slate-200 bg-white text-slate-700",
                    ].join(" ")}
                  >
                    {msg}
                  </div>
                )}

                <p className="text-xs text-slate-500">
                  Al enviar aceptas contacto por correo/WhatsApp para responder tu solicitud. No compartimos tus datos.
                </p>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
