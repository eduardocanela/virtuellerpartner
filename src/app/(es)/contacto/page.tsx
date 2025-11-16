// app/(es)/contacto/page.tsx
export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 text-sm">
      <h1 className="text-2xl font-semibold mb-3">Contacto</h1>
      <p className="text-slate-300 mb-8">
        Cuéntame brevemente tu proyecto, en qué idioma prefieres hablar
        (español o alemán) y cómo te gustaría que te contacte de vuelta.
      </p>

      <form className="space-y-5">
        <div className="space-y-1">
          <label className="block text-xs font-medium text-slate-200">
            Nombre
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-500"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-xs font-medium text-slate-200">
            Correo electrónico
          </label>
          <input
            type="email"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-500"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-xs font-medium text-slate-200">
            Idioma preferido
          </label>
          <select className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-500">
            <option>Español</option>
            <option>Alemán</option>
            <option>Ambos</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="block text-xs font-medium text-slate-200">
            Mensaje
          </label>
          <textarea
            rows={5}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-500"
            placeholder="Describe brevemente tu proyecto, tu sector y qué necesitas..."
          />
        </div>

        <button
          type="submit"
          className="rounded-full bg-cyan-500 px-6 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition"
        >
          Enviar mensaje
        </button>

        <p className="text-[11px] text-slate-500">
          *De momento este formulario no envía correos automáticamente. Puedes
          escribirme también directamente a tu futura dirección de contacto.
        </p>
      </form>
    </div>
  );
}
