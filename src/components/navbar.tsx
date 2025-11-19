"use client";

import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "./language-switcher";

type NavProps = {
  lang: "es" | "de";
};

export function Navbar({ lang }: NavProps) {
  const isES = lang === "es";
  const [open, setOpen] = useState(false);

  const links = isES
    ? [
        { href: "/servicios", label: "Servicios" },
        { href: "/sobre-mi", label: "Sobre mí" },
        { href: "/portfolio", label: "Proyectos" },
      ]
    : [
        { href: "/de/leistungen", label: "Leistungen" },
        { href: "/de/ueber-mich", label: "Über mich" },
        { href: "/de/referenzen", label: "Projekte" },
      ];

  const cta = isES
    ? { href: "/contacto", label: "Reservar una llamada" }
    : { href: "/de/kontakt", label: "Gespräch vereinbaren" };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* LOGO / MARCA */}
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
                : "Zweisprachiger Digitalpartner ES–DE"}
            </span>
          </div>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href={cta.href}
            className="rounded-full bg-cyan-500 px-4 py-1.5 text-xs font-semibold text-slate-950 hover:bg-cyan-400 transition"
          >
            {cta.label}
          </Link>

          <LanguageSwitcher lang={lang} />
        </nav>

        {/* CONTROLES MÓVIL (md:hidden) */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher lang={lang} />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 text-slate-100 hover:border-cyan-500 hover:text-cyan-400 transition"
            aria-label="Abrir menú"
          >
            {/* Icono hamburguesa simple con 3 líneas */}
            <span className="flex flex-col gap-[3px]">
              <span className="block h-[2px] w-5 rounded bg-current" />
              <span className="block h-[2px] w-5 rounded bg-current" />
              <span className="block h-[2px] w-5 rounded bg-current" />
            </span>
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {open && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3 text-sm">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-slate-200 hover:text-cyan-400 transition"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={cta.href}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-cyan-500 px-4 py-2 text-center text-xs font-semibold text-slate-950 hover:bg-cyan-400 transition"
            >
              {cta.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

