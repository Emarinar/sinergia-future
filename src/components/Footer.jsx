import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl p-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <p className="text-slate-900 font-extrabold text-lg">
                Sinergia Consultoría SGI
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Consultoría en SG-SST, Seguridad Social y PESV. Orden, evidencias
                y acompañamiento real para empresas que quieren crecer.
              </p>
            </div>

            {/* Contact */}
            <div>
              <p className="text-slate-900 font-bold">Contacto</p>
              <div className="mt-4 space-y-3 text-slate-700">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-emerald-600" />
                  <span>comercial@sinergiasgi.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-emerald-600" />
                  <span>+57 314 720 4124</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-emerald-600" />
                  <span>Medellín – Colombia</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <p className="text-slate-900 font-bold">¿Listos para comenzar?</p>
              <p className="mt-3 text-slate-600">
                Agenda tu asesoría y recibe una ruta clara con entregables y
                evidencias.
              </p>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl
                             bg-emerald-500 hover:bg-emerald-600 text-white font-semibold
                             shadow-md hover:shadow-lg transition"
                >
                  Cotizar ahora
                </a>
                <a
                  href="https://wa.me/3147204124"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl
                             border border-slate-300 text-slate-700 hover:bg-slate-100 transition font-medium"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Sinergia Consultoría SGI. Todos los derechos reservados.
            </p>
            <p className="text-slate-500 text-sm">
              Hecho con enfoque en cumplimiento y evidencia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
