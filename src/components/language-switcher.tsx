// components/language-switcher.tsx
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const pathMap: Record<string, { es: string; de: string }> = {
  "/": { es: "/", de: "/de" },
  "/servicios": { es: "/servicios", de: "/de/leistungen" },
  "/contacto": { es: "/contacto", de: "/de/kontakt" },
  "/sobre-mi": { es: "/sobre-mi", de: "/de/ueber-mich" },
  "/portfolio": { es: "/portfolio", de: "/de/referenzen" },
  "/de": { es: "/", de: "/de" },
  "/de/leistungen": { es: "/servicios", de: "/de/leistungen" },
  "/de/kontakt": { es: "/contacto", de: "/de/kontakt" },
  "/de/ueber-mich": { es: "/sobre-mi", de: "/de/ueber-mich" },
  "/de/referenzen": { es: "/portfolio", de: "/de/referenzen" },
};

export default function LanguageSwitcher({ lang }: { lang: "es" | "de" }) {
  const pathname = usePathname() || "/";
  const entry =
    pathMap[pathname] ||
    pathMap[pathname.replace(/\/$/, "")] ||
    pathMap["/"];

  const target = lang === "es" ? entry.de : entry.es;
  const label = lang === "es" ? "DE" : "ES";

  return (
    <Link
      href={target}
      className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-200 hover:border-cyan-500 hover:text-cyan-400 transition"
    >
      {label}
    </Link>
  );
}
