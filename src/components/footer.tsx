// components/footer.tsx
import Link from "next/link";

type FooterProps = {
  lang: "es" | "de";
};

export function Footer({ lang }: FooterProps) {
  const isES = lang === "es";

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          © {new Date().getFullYear()} Virtueller Partner.{" "}
          {isES
            ? "Partner digital bilingüe para negocios en español y alemán."
            : "Zweisprachiger Digitalpartner für spanische und deutsche Unternehmen."}
        </div>
        <div className="flex gap-4">
          <Link
            href={isES ? "/contacto" : "/de/kontakt"}
            className="hover:text-cyan-400 transition"
          >
            {isES ? "Contacto" : "Kontakt"}
          </Link>
          {/* Aquí en el futuro: Aviso Legal / Impressum / Datenschutz */}
        </div>
      </div>
    </footer>
  );
}
