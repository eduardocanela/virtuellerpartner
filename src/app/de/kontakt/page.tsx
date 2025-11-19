// app/(de)/kontakt/page.tsx
export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 text-sm">
      <h1 className="text-2xl font-semibold mb-3">Kontakt</h1>
      <p className="text-slate-300 mb-8">
        Beschreiben Sie kurz Ihr Projekt, Ihre bevorzugte Sprache (Deutsch oder
        Spanisch) und wie ich Sie am besten erreichen kann.
      </p>

      <form className="space-y-5">
        <div className="space-y-1">
          <label className="block text-xs font-medium text-slate-200">
            Name
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-500"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-xs font-medium text-slate-200">
            E-Mail
          </label>
          <input
            type="email"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-500"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-xs font-medium text-slate-200">
            Bevorzugte Sprache
          </label>
          <select className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-500">
            <option>Deutsch</option>
            <option>Spanisch</option>
            <option>Beide</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="block text-xs font-medium text-slate-200">
            Nachricht
          </label>
          <textarea
            rows={5}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-500"
            placeholder="Kurze Beschreibung Ihrer Situation, Ihres Sektors und Ihrer Ziele..."
          />
        </div>

        <button
          type="submit"
          className="rounded-full bg-cyan-500 px-6 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition"
        >
          Nachricht senden
        </button>

        <p className="text-[11px] text-slate-500">
          *Aktuell sendet dieses Formular noch keine automatischen E-Mails. Sie
          können mich auch direkt per E-Mail kontaktieren.
        </p>
      </form>
    </div>
  );
}
