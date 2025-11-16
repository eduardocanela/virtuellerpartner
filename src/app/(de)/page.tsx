// app/(de)/page.tsx
import Link from "next/link";

export default function HomeDe() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-16">
      {/* HERO */}
      <section className="grid gap-8 md:grid-cols-[3fr,2fr] md:items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
            Zweisprachige Digitalagentur ES–DE
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Ihr virtueller Partner für
            <span className="text-cyan-400"> klare, automatisierte und moderne digitale Systeme.</span>
          </h1>
          <p className="text-sm text-slate-300 max-w-xl">
            Ich bin Eduardo Canela und begleite Sie als digitaler Partner auf
            Deutsch und Spanisch. Von individueller Softwareentwicklung und
            Automatisierung bis hin zu Branding, Multimedia und Beratung für
            Tierarztpraxen, Akademien und kleine Unternehmen.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/de/kontakt"
              className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition"
            >
              Gespräch vereinbaren
            </Link>
            <Link
              href="/de/leistungen"
              className="rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-slate-100 hover:border-cyan-500 hover:text-cyan-400 transition"
            >
              Leistungen ansehen
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs text-slate-400 max-w-md">
            <div>
              <p className="font-semibold text-slate-200">
                Entwicklung & Automatisierung
              </p>
              <p>Bots, individuelle CRM-Systeme und API-Integrationen.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-200">
                Design & Inhalte
              </p>
              <p>Zweisprachiges Webdesign, Video-Content und digitales Marketing.</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-xs text-slate-300">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Für wen ist Virtueller Partner?
          </p>
          <ul className="space-y-2">
            <li>• Tierarztpraxen mit klaren Abläufen und digitalen Workflows.</li>
            <li>• Sprachschulen, Trainer und Online-Akademien.</li>
            <li>• Freiberufler und kleine Unternehmen mit hohen Qualitätsansprüchen.</li>
            <li>• Teams, die wiederkehrende Aufgaben automatisieren möchten.</li>
          </ul>
          <p className="text-[11px] text-slate-400">
            Kommunikation flexibel auf Deutsch oder Spanisch – so wie es für Sie
            am angenehmsten ist.
          </p>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Kernleistungen</h2>
        <p className="text-sm text-slate-300 max-w-2xl">
          Ein Partner für Technik, Design und Beratung – damit Sie nicht fünf
          verschiedene Dienstleister koordinieren müssen.
        </p>

        <div className="grid gap-4 md:grid-cols-3 text-sm">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
            <h3 className="text-sm font-semibold mb-2">
              Entwicklung & Automatisierung
            </h3>
            <ul className="space-y-1 text-slate-300">
              <li>• Individuelle Bots (Discord, WhatsApp, Telegram, Web)</li>
              <li>• Automatisierung von Geschäftsprozessen</li>
              <li>• Maßgeschneiderte CRM-Systeme</li>
              <li>• API-Integrationen (z. B. Easyvet & Google Sheets)</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
            <h3 className="text-sm font-semibold mb-2">
              Digitales Design & Inhalt
            </h3>
            <ul className="space-y-1 text-slate-300">
              <li>• Professionelles Branding & Grafikdesign</li>
              <li>• Zweisprachiges Webdesign mit SEO-Fokus</li>
              <li>• Videobearbeitung für Social Media & Werbung</li>
              <li>• Social-Media-Management</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
            <h3 className="text-sm font-semibold mb-2">
              Beratung & Schulung
            </h3>
            <ul className="space-y-1 text-slate-300">
              <li>• Einrichtung von Discord-Servern für Bildung & Community</li>
              <li>• Beratung zur digitalen Transformation</li>
              <li>• Online-Unterricht & Mentoring (Deutsch, IT, KI)</li>
              <li>• 3D-Design und Druck für Praxen</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-cyan-500/40 bg-cyan-500/5 p-6 text-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-base font-semibold">
              Lassen Sie uns über Ihr Projekt sprechen.
            </h2>
            <p className="text-slate-300 text-sm max-w-xl">
              Beschreiben Sie kurz Ihre Ausgangssituation und Ihre Ziele –
              anschließend erhalten Sie einen klar strukturierten Vorschlag, wie
              wir Technik, Design und Automatisierung kombinieren können.
            </p>
          </div>
          <Link
            href="/de/kontakt"
            className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition self-start"
          >
            Nachricht senden
          </Link>
        </div>
      </section>
    </div>
  );
}
