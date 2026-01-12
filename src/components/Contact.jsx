import { useState } from "react";
import { MapPin, Clock, FileText, ShieldCheck } from "lucide-react";

export default function Contact() {
  const API_URL = "https://sinergiasgi.com/api/enviar.php";

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "idle", msg: "" });

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

      if (data.status !== "success") {
        throw new Error(data.message || "Error al enviar. Intenta de nuevo.");
      }

      setStatus({
        type: "success",
        msg: "¡Listo! Tu solicitud fue enviada. Te contactaremos pronto.",
      });
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus({
        type: "error",
        msg: err.message || "No se pudo enviar. Intenta de nuevo.",
      });
    }
  };

  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-stretch">
        {/* Info */}
        <div className="relative rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl p-10 shadow-sm overflow-hidden">
          <div className="pointer-events-none absolute -top-24 left-10 h-64 w-64 rounded-full bg-emerald-400/18 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-violet-500/12 blur-[100px]" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Agenda tu asesoría y recibe una{" "}
              <span className="text-emerald-600">ruta clara</span>
            </h2>

            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Cuéntanos tu necesidad y te proponemos un plan de trabajo para
              SG-SST, Seguridad Social o PESV. Respuesta rápida.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <InfoCard icon={MapPin} title="Ubicación" text="Medellín – Colombia" />
              <InfoCard icon={Clock} title="Respuesta" text="Rápida por WhatsApp" />
              <InfoCard icon={FileText} title="Servicios" text="SG-SST • S. Social • PESV" />
              <InfoCard icon={ShieldCheck} title="Enfoque" text="Evidencias y control" />
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/3147204124?text=Hola%20Sinergia%20Consultor%C3%ADa%20SGI,%20quiero%20una%20cotizaci%C3%B3n."
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold
                           shadow-md hover:shadow-lg transition hover:scale-[1.02]"
              >
                Escribir por WhatsApp
              </a>

              <a
                href="#servicios"
                className="border border-slate-300 text-slate-700 px-6 py-3 rounded-xl hover:bg-slate-100 transition font-medium"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl p-10 shadow-sm">
          <h3 className="text-2xl font-extrabold text-slate-900">
            Déjanos tus datos
          </h3>
          <p className="mt-2 text-slate-600">
            Te respondemos lo más pronto posible.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <Input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Nombre *"
              required
            />

            <Input
              name="company"
              value={form.company}
              onChange={onChange}
              placeholder="Empresa"
            />

            <Input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="Correo *"
              required
            />

            <Input
              name="phone"
              value={form.phone}
              onChange={onChange}
              placeholder="Teléfono"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows={5}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400
                         outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 resize-none"
              placeholder="Cuéntanos qué necesitas (SG-SST, Seguridad Social o PESV)… *"
              required
            />

            <button
              type="submit"
              disabled={status.type === "loading"}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold
                         shadow-md hover:shadow-lg transition disabled:opacity-60"
            >
              {status.type === "loading" ? "Enviando..." : "Enviar solicitud"}
            </button>

            {status.type !== "idle" && (
              <div
                className={[
                  "mt-4 rounded-2xl border px-4 py-3 text-sm",
                  status.type === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                    : status.type === "error"
                    ? "border-red-200 bg-red-50 text-red-700"
                    : "border-slate-200 bg-white text-slate-600",
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

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
      <div className="flex items-center gap-2 text-slate-800 font-semibold">
        <Icon className="h-4 w-4 text-emerald-600" />
        {title}
      </div>
      <p className="mt-1 text-slate-600 text-sm">{text}</p>
    </div>
  );
}

function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={[
        "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400",
        "outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100",
        className,
      ].join(" ")}
    />
  );
}
