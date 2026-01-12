import { useState } from "react";

export default function Contact() {
  const API_URL = "https://sinergiasgi.com/api/contact.php";

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "idle", msg: "" }); // idle | loading | success | error

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", msg: "Enviando..." });

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.message || "Error al enviar. Intenta de nuevo.");
      }

      setStatus({ type: "success", msg: "¡Listo! Tu solicitud fue enviada. Te contactaremos pronto." });
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", msg: err.message || "No se pudo enviar." });
    }
  };

  return (
    <section id="contacto" className="py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-stretch">
        {/* Info */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-24 left-10 h-64 w-64 rounded-full bg-emerald-400/20 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-violet-500/15 blur-[100px]" />

          <div className="relative">
            <h2 className="text-4xl font-extrabold text-white">
              Hablemos y <span className="text-emerald-300">cotiza</span> hoy
            </h2>
            <p className="mt-4 text-white/70 text-lg leading-relaxed">
              Te guiamos paso a paso. Cuéntanos tu necesidad y te proponemos una ruta clara para SG-SST, Seguridad Social o PESV.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-white font-bold">📍 Ubicación</p>
                <p className="text-white/60 mt-1">Medellín – Colombia</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-white font-bold">⚡ Respuesta</p>
                <p className="text-white/60 mt-1">Rápida por WhatsApp</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-white font-bold">🧾 Servicios</p>
                <p className="text-white/60 mt-1">SG-SST • S. Social • PESV</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-white font-bold">✅ Entregables</p>
                <p className="text-white/60 mt-1">Evidencias + control</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/3147204124?text=Hola%20Sinergia%20Consultor%C3%ADa%20SGI,%20quiero%20una%20cotizaci%C3%B3n."
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-emerald-300 to-emerald-500 text-black px-6 py-3 rounded-xl font-bold
                           shadow-lg shadow-emerald-500/40 hover:scale-[1.03] transition"
              >
                Escribir por WhatsApp
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

        {/* Formulario real */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">
          <h3 className="text-2xl font-bold text-white">Déjanos tus datos</h3>
          <p className="mt-2 text-white/60">Te respondemos lo más pronto posible.</p>

          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-emerald-300/60"
              placeholder="Nombre *"
              required
            />

            <input
              name="company"
              value={form.company}
              onChange={onChange}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-emerald-300/60"
              placeholder="Empresa"
            />

            <input
              name="email"
              value={form.email}
              onChange={onChange}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-emerald-300/60"
              placeholder="Correo *"
              type="email"
              required
            />

            <input
              name="phone"
              value={form.phone}
              onChange={onChange}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-emerald-300/60"
              placeholder="Teléfono"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows={5}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-emerald-300/60 resize-none"
              placeholder="Cuéntanos qué necesitas (SG-SST, Seguridad Social o PESV)… *"
              required
            />

            <button
              type="submit"
              disabled={status.type === "loading"}
              className="w-full bg-gradient-to-r from-emerald-300 to-emerald-500 text-black px-6 py-3 rounded-xl font-bold
                         shadow-lg shadow-emerald-500/40 hover:brightness-110 transition disabled:opacity-60"
            >
              {status.type === "loading" ? "Enviando..." : "Enviar solicitud"}
            </button>

            {status.type !== "idle" && (
              <div
                className={[
                  "mt-4 rounded-2xl border px-4 py-3 text-sm",
                  status.type === "success"
                    ? "border-emerald-300/30 bg-emerald-400/10 text-emerald-200"
                    : status.type === "error"
                    ? "border-red-300/30 bg-red-400/10 text-red-200"
                    : "border-white/10 bg-white/5 text-white/70",
                ].join(" ")}
              >
                {status.msg}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
