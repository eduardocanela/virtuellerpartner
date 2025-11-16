// app/(de)/layout.tsx
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Virtueller Partner | Zweisprachiger Digitalpartner (ES–DE)",
  description:
    "Virtueller Partner unterstützt Unternehmen mit individueller Softwareentwicklung, Automatisierung, Design und Beratung auf Deutsch und Spanisch.",
};

export default function DeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar lang="de" />
      <main className="flex-1 bg-slate-950">
        {children}
      </main>
      <Footer lang="de" />
    </div>
  );
}
