// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { SiteShell } from "@/components/site-shell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Virtueller Partner – Partner digital bilingüe ES–DE",
  description:
    "Virtueller Partner: desarrollo de software, automatización, diseño digital y consultoría para negocios en español y alemán.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className + " bg-slate-950 text-slate-100"}>
        {/* AQUÍ está tu navbar raíz (dentro de SiteShell) */}
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
