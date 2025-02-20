import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import ReduxProvider from "@/components/ReduxProvider"; // Ajout du Provider Redux

export const metadata: Metadata = {
  title: "Hardware Store",
  description: "Boutique en ligne de hardware et composants PC",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <ReduxProvider> {/* Assure-toi que Redux englobe toute l'application */}
          <Navbar />
          <main className="container mx-auto p-4">{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
