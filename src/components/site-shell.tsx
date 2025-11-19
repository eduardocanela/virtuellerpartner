"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";

  // Si la ruta empieza por /de → alemán, si no → español
  const lang: "es" | "de" = pathname.startsWith("/de") ? "de" : "es";

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar lang={lang} />
      <main className="flex-1 bg-slate-950">{children}</main>
      <Footer lang={lang} />
    </div>
  );
}
