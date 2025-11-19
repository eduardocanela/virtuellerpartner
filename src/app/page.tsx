// app/(es)/page.tsx
import Link from "next/link";

export default function HomeEs() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-16">
      {/* HERO */}
      <section className="grid gap-8 md:grid-cols-[3fr,2fr] md:items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
            Agencia / Partner Digital Bilingüe ES–DE
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Transformo tus ideas en sistemas digitales
            <span className="text-cyan-400"> claros, automatizados y listos para vender.</span>
          </h1>
          <p className="text-sm text-slate-300 max-w-xl">
            Soy Eduardo Canela, tu partner digital en alemán y español. Desarrollo
            software, bots y automatizaciones, diseño tu identidad digital y te
            acompaño en la digitalización de tu negocio: veterinarias, academias,
            freelancers y pequeños negocios.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contacto"
              className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition"
            >
              Reservar una llamada
            </Link>
            <Link
              href="/servicios"
              className="rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-slate-100 hover:border-cyan-500 hover:text-cyan-400 transition"
            >
              Ver servicios
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs text-slate-400 max-w-md">
            <div>
              <p className="font-semibold text-slate-200">
                Desarrollo & Automatización
              </p>
              <p>Bots, CRM personalizados e integraciones API.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-200">
                Diseño & Contenido
              </p>
              <p>Branding, web bilingüe, video y marketing digital.</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-xs text-slate-300">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            ¿Para quién es Virtueller Partner?
          </p>
          <ul className="space-y-2">
            <li>• Veterinarias que quieren sistemas y procesos claros.</li>
            <li>• Academias y profesores que usan Discord o plataformas online.</li>
            <li>• Freelancers y pequeños negocios que necesitan presencia digital profesional.</li>
            <li>• Equipos que quieren automatizar tareas repetitivas.</li>
          </ul>
          <p className="text-[11px] text-slate-400">
            Hablamos en español o alemán, según te resulte más cómodo.
          </p>
        </div>
      </section>

      {/* SERVICIOS DESTACADOS */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Servicios principales</h2>
        <p className="text-sm text-slate-300 max-w-2xl">
          Una combinación de desarrollo, diseño y consultoría para que tengas un
          partner técnico de confianza, no solo “un diseñador” o “un programador”.
        </p>

        <div className="grid gap-4 md:grid-cols-3 text-sm">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
            <h3 className="text-sm font-semibold mb-2">
              Desarrollo & Automatización
            </h3>
            <ul className="space-y-1 text-slate-300">
              <li>• Bots personalizados (Discord, WhatsApp, Telegram, Web)</li>
              <li>• Automatización de tareas de negocio</li>
              <li>• CRM y paneles para veterinarias o academias</li>
              <li>• Integraciones API (ej. Easyvet ⇄ Google Sheets)</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
            <h3 className="text-sm font-semibold mb-2">
              Diseño & Contenido
            </h3>
            <ul className="space-y-1 text-slate-300">
              <li>• Branding y diseño digital bilingüe</li>
              <li>• Webs optimizadas para SEO (ES–DE)</li>
              <li>• Edición de video (Reels, YouTube, anuncios)</li>
              <li>• Gestión de redes y contenido</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
            <h3 className="text-sm font-semibold mb-2">
              Consultoría & Educación
            </h3>
            <ul className="space-y-1 text-slate-300">
              <li>• Configuración de Discord para academias</li>
              <li>• Digitalización de pequeños negocios</li>
              <li>• Clases y mentorías (alemán, IA, productividad)</li>
              <li>• Diseño 3D e impresión para clínicas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="rounded-2xl border border-cyan-500/40 bg-cyan-500/5 p-6 text-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-base font-semibold">
              ¿Listo para darle forma digital a tu proyecto?
            </h2>
            <p className="text-slate-300 text-sm max-w-xl">
              Cuéntame en qué punto estás y preparamos juntos la mejor combinación
              de desarrollo, diseño y automatización para tu caso concreto.
            </p>
          </div>
          <Link
            href="/contacto"
            className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition self-start"
          >
            Enviar mensaje
          </Link>
        </div>
      </section>
    </div>
  );
}
