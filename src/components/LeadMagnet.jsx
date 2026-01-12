import { useMemo, useState } from "react";
import { track } from "../lib/track";
import Reveal from "./UI/Reveal";
import { Download, Mail, Building2, ShieldCheck, CheckCircle2, Loader2 } from "lucide-react";

export default function LeadMagnet() {
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "" });
  const [status, setStatus] = useState({ type: "idle", msg: "" }); // idle | loading | success | error

  const pdfUrl = "/downloads/Checklist-SG-SST-2026.pdf";

  // IMPORTANTE:
  // En local (Vite) NO ejecuta PHP. Esto funciona al desplegar en cPanel.
  // Para evitar líos: en producción tu endpoint quedará en /lead.php
  const endpoint = useMemo(() => {
    const base = import.meta?.env?.VITE_API_BASE?.trim();
    return base ? `${base.replace(/\/$/, "")}/lead.php` : "/lead.php";
  }, []);

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nombre = form.nombre.trim();
    const empresa = form.empresa.trim();
    const email = form.email.trim();

    if (!nombre || !email) {
      setStatus({ type: "error", msg: "Por favor completa tu nombre y correo." });
      return;
    }
    if (!isValidEmail(email)) {
      setStatus({ type: "error", msg: "Correo inválido. Revisa e intenta de nuevo." });
      return;
    }

    try {
      setStatus({ type: "loading", msg: "Enviando..." });

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          empresa,
          email,
          lead: "Checklist SG-SST 2026",
          origen: window.location.href,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.status !== "success") {
        throw new Error(data?.message || "No se pudo enviar.");
      }

      setStatus({
        type: "success",
        msg: "Listo ✅ Te enviamos el checklist y ya puedes descargarlo.",
      });

      track("leadmagnet_download", {
        lead: "Checklist SG-SST 2026",
        email_domain: email.split("@")[1] || "",
     });

      // Descarga automática
      window.open(pdfUrl, "_blank");
    } catch (err) {
      setStatus({
        type: "error",
        msg:
          "No se pudo enviar en este momento. Si estás en local, recuerda que PHP solo funciona en el hosting (cPanel).",
      });
    }
  };

  return (
    <section className="py-20 px-6" id="descargable">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Card izquierda */}
            <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Descargable gratis
              </div>

              <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Checklist <span className="text-emerald-600">SG-SST 2026</span>
              </h2>

              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                Una guía rápida para validar el estado de tu SG-SST y detectar brechas que generan sanciones.
              </p>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <span>Qué debes tener “sí o sí” para inspección.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <span>Errores comunes y cómo corregirlos.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <span>Entregables y evidencias listos para auditoría.</span>
                </li>
              </ul>

              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50 transition"
              >
                <Download className="h-5 w-5 text-emerald-600" />
                Ver PDF (solo lectura)
              </a>

              <p className="mt-3 text-xs text-slate-500">
                * Al dejar tus datos también recibes una ruta sugerida para SG-SST, Seguridad Social o PESV.
              </p>
            </div>

            {/* Form derecha */}
            <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm p-8">
              <h3 className="text-xl font-extrabold text-slate-900">Recíbelo y descárgalo</h3>
              <p className="mt-2 text-slate-600">
                Déjanos tu correo y te llega el checklist + recomendaciones.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <Building2 className="h-5 w-5" />
                  </span>
                  <input
                    name="nombre"
                    value={form.nombre}
                    onChange={onChange}
                    placeholder="Nombre *"
                    className="w-full rounded-xl border border-slate-200 bg-white px-11 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-emerald-200"
                  />
                </div>

                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <Building2 className="h-5 w-5" />
                  </span>
                  <input
                    name="empresa"
                    value={form.empresa}
                    onChange={onChange}
                    placeholder="Empresa (opcional)"
                    className="w-full rounded-xl border border-slate-200 bg-white px-11 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-emerald-200"
                  />
                </div>

                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <Mail className="h-5 w-5" />
                  </span>
                  <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="Correo *"
                    type="email"
                    className="w-full rounded-xl border border-slate-200 bg-white px-11 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-emerald-200"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.type === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 transition disabled:opacity-60"
                >
                  {status.type === "loading" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Download className="h-5 w-5" />
                      Enviar y descargar
                    </>
                  )}
                </button>

                {status.type !== "idle" && (
                  <div
                    className={[
                      "rounded-xl border px-4 py-3 text-sm",
                      status.type === "success"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                        : status.type === "error"
                        ? "border-rose-200 bg-rose-50 text-rose-800"
                        : "border-slate-200 bg-white text-slate-700",
                    ].join(" ")}
                  >
                    {status.msg}
                  </div>
                )}

                <p className="text-xs text-slate-500">
                  Al enviar aceptas contacto por correo/WhatsApp para darte respuesta a tu solicitud.
                </p>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
