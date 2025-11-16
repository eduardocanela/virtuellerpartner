// app/(de)/leistungen/page.tsx
export default function LeistungenPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-10 text-sm">
      <header className="space-y-3">
        <h1 className="text-2xl font-semibold">Leistungen</h1>
        <p className="text-slate-300 max-w-2xl">
          Virtueller Partner verbindet Entwicklung, Design und Beratung – ein
          zweisprachiger Ansprechpartner für Technik und Kommunikation auf
          Deutsch und Spanisch.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-base font-semibold">
          1) Entwicklung & Automatisierung
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="font-semibold mb-2">
              Was gehört dazu?
            </p>
            <ul className="space-y-1 text-slate-300">
              <li>• Individuelle Bots (Discord, WhatsApp, Telegram, Web)</li>
              <li>• Automatisierung von Geschäftsprozessen</li>
              <li>• Maßgeschneiderte CRM-Systeme und Verwaltungspanels</li>
              <li>• API-Integrationen (z. B. Easyvet & Google Sheets)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-slate-300">
            <p className="font-semibold mb-2">Geeignet für...</p>
            <p>
              Praxen, Akademien und kleine Unternehmen, die wiederkehrende
              Aufgaben reduzieren und klarere Prozesse schaffen möchten – mit
              Fokus auf Qualität statt Chaos.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-base font-semibold">
          2) Digitales Design & Branding
        </h2>
        <p className="text-slate-300 max-w-3xl">
          Professionelle Gestaltung von Logos, Broschüren, Etiketten und
          Social-Media-Designs sowie zweisprachiges Webdesign (Spanisch–Deutsch)
          mit SEO-Optimierung.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-base font-semibold">
          3) Multimedia & Content
        </h2>
        <ul className="space-y-1 text-slate-300">
          <li>• Videobearbeitung für Reels, YouTube, Werbung und Schulungen</li>
          <li>• Audiovisuelle Produktion mit Kamera, GoPro und Mac</li>
          <li>• Einfache Intros, Effekte und Animationen</li>
          <li>• Social-Media-Management (Planung, Gestaltung, Analyse)</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-base font-semibold">
          4) Online-Beratung & digitale Services
        </h2>
        <ul className="space-y-1 text-slate-300">
          <li>• Einrichtung und Optimierung von Discord-Servern</li>
          <li>• Beratung zur digitalen Transformation kleiner Unternehmen</li>
          <li>• Website-Erstellung für Freiberufler, Tierarztpraxen oder Sprachschulen</li>
          <li>• Technischer Fernsupport und Systemwartung für macOS</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-base font-semibold">
          5) Bildung, Kurse & Beratung
        </h2>
        <ul className="space-y-1 text-slate-300">
          <li>• Online-Unterricht (Deutsch, IT, KI, Produktivität)</li>
          <li>• Erstellung professioneller Online-Kurse</li>
          <li>• Mentoring für Lehrkräfte und Akademien</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-base font-semibold">
          6) Digitales Marketing & Marke
        </h2>
        <ul className="space-y-1 text-slate-300">
          <li>• Entwicklung von Markenstrategien (persönlich oder geschäftlich)</li>
          <li>• Digitale Werbung – Meta-Ads, Google-Ads, lokale SEO</li>
          <li>• Erstellung von Landing Pages und digitalen Katalogen</li>
          <li>• Automatisierte WhatsApp- und E-Mail-Kampagnen</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-base font-semibold">
          7) 3D-Design & Produktion (Bambu Lab)
        </h2>
        <ul className="space-y-1 text-slate-300">
          <li>• 3D-Design und individueller Druck für Praxen oder Unternehmen</li>
          <li>• Individuelle Halterungen, Etiketten und Komponenten</li>
          <li>• Verkauf von herunterladbaren STL-Modellen</li>
        </ul>
      </section>
    </div>
  );
}
