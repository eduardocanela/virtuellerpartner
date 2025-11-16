// app/(es)/servicios/page.tsx
export default function ServiciosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-10 text-sm">
      <header className="space-y-3">
        <h1 className="text-2xl font-semibold">Servicios</h1>
        <p className="text-slate-300 max-w-2xl">
          Virtueller Partner reúne desarrollo, diseño y consultoría para que
          tengas un solo partner técnico, bilingüe y de confianza, tanto en
          alemán como en español.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-base font-semibold">
          1) Desarrollo & Automatización
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="font-semibold mb-2">
              ¿Qué hago exactamente?
            </p>
            <ul className="space-y-1 text-slate-300">
              <li>• Bots personalizados (Discord, WhatsApp, Telegram, Web)</li>
              <li>• Automatización de tareas de negocio (scripts, integraciones)</li>
              <li>• CRM o paneles personalizados para veterinarias y academias</li>
              <li>• Integraciones API (ej. Easyvet ⇄ Google Sheets)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-slate-300">
            <p className="font-semibold mb-2">Ideal para ti si...</p>
            <p>
              Repetís las mismas tareas cada día, trabajas con varios sistemas
              separados o quieres tener una visión clara de tus clientes y
              reservas en un solo lugar.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-base font-semibold">2) Diseño Digital & Branding</h2>
        <p className="text-slate-300 max-w-3xl">
          Diseño piezas digitales coherentes con tu marca: logotipos, folletos,
          etiquetas, materiales para redes sociales y webs bilingües optimizadas
          para buscadores.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-base font-semibold">3) Multimedia & Contenido</h2>
        <ul className="space-y-1 text-slate-300">
          <li>• Edición de video profesional (Reels, YouTube, anuncios, clases)</li>
          <li>• Producción de contenido con cámara, GoPro y Mac</li>
          <li>• Intros, efectos y animaciones simples</li>
          <li>• Gestión de redes sociales (contenido, diseño, programación)</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-base font-semibold">
          4) Consultoría Online & Servicios Digitales
        </h2>
        <ul className="space-y-1 text-slate-300">
          <li>• Configuración y optimización de Discord para academias o comunidades</li>
          <li>• Consultoría de digitalización para pequeños negocios</li>
          <li>• Creación de sitios web para freelancers, veterinarias o academias</li>
          <li>• Soporte remoto y mantenimiento de sistemas macOS</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-base font-semibold">
          5) Educación, Cursos & Asesorías
        </h2>
        <ul className="space-y-1 text-slate-300">
          <li>• Clases online (alemán, informática, IA, productividad)</li>
          <li>• Cursos digitales pregrabados</li>
          <li>• Mentorías para academias/profesores (Discord, marketing, automatización)</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-base font-semibold">
          6) Marketing Digital & Marca
        </h2>
        <ul className="space-y-1 text-slate-300">
          <li>• Estrategias de marca personal o profesional</li>
          <li>• Publicidad digital (Meta Ads, Google Ads, SEO local)</li>
          <li>• Landing pages y catálogos digitales</li>
          <li>• Campañas de WhatsApp Business y correos automatizados</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-base font-semibold">
          7) Diseño 3D & Producción (Bambu Lab)
        </h2>
        <ul className="space-y-1 text-slate-300">
          <li>• Diseño 3D e impresión personalizada para clínicas o empresas</li>
          <li>• Soportes, etiquetas y piezas personalizadas</li>
          <li>• Venta de modelos STL descargables</li>
        </ul>
      </section>
    </div>
  );
}
