// app/(es)/layout.tsx
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Virtueller Partner | Partner digital bilingüe (ES–DE)",
  description:
    "Agencia digital bilingüe para desarrollo de software, automatización, diseño, multimedia y consultoría en español y alemán.",
};

export default function EsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar lang="es" />
      <main className="flex-1 bg-slate-950">
        {children}
      </main>
      <Footer lang="es" />
    </div>
  );
}
