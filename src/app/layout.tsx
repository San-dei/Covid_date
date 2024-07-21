import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Estadísticas COVID-19 en Estados Unidos",
  description: "Consulta estadísticas actualizadas sobre COVID-19 en todos los estados de Estados Unidos. Encuentra datos detallados y análisis por estado.",
  keywords: "COVID-19, estadísticas, Estados Unidos, datos COVID, análisis, estados americanos",
  openGraph: {
    title: "Estadísticas COVID-19 en Estados Unidos",
    description: "Consulta estadísticas actualizadas sobre COVID-19 en todos los estados de Estados Unidos. Encuentra datos detallados y análisis por estado.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
