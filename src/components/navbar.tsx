// components/navbar.tsx
import Link from "next/link";
import LanguageSwitcher from "./language-switcher";

type NavProps = {
  lang: "es" | "de";
};

export function Navbar({ lang }: NavProps) {
  const isES = lang === "es";

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href={isES ? "/" : "/de"} className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/40">
            <span className="text-sm font-bold text-cyan-400">VP</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide">
              Virtueller Partner
            </span>
            <span className="text-[11px] text-slate-400">
              {isES
                ? "Partner digital bilingüe ES–DE"
                : "Ihr zweisprachiger Digitalpartner ES–DE"}
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link
            href={isES ? "/servicios" : "/de/leistungen"}
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            {isES ? "Servicios" : "Leistungen"}
          </Link>
          <Link
            href={isES ? "/sobre-mi" : "/de/ueber-mich"}
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            {isES ? "Sobre mí" : "Über mich"}
          </Link>
          <Link
            href={isES ? "/portfolio" : "/de/referenzen"}
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            {isES ? "Proyectos" : "Projekte"}
          </Link>
          <Link
            href={isES ? "/contacto" : "/de/kontakt"}
            className="rounded-full bg-cyan-500 px-4 py-1.5 text-xs font-semibold text-slate-950 hover:bg-cyan-400 transition"
          >
            {isES ? "Reservar una llamada" : "Gespräch vereinbaren"}
          </Link>

          <LanguageSwitcher lang={lang} />
        </nav>
      </div>
    </header>
  );
}
