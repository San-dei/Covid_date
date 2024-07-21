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
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Consulta estadísticas actualizadas sobre COVID-19 en todos los estados de Estados Unidos. Encuentra datos detallados y análisis por estado." />
        <meta name="keywords" content="COVID-19, estadísticas, Estados Unidos, datos COVID, análisis, estados americanos" />
        <meta name="author" content="Nombre del Autor" />
        <meta property="og:title" content="Estadísticas COVID-19 en Estados Unidos" />
        <meta property="og:description" content="Consulta estadísticas actualizadas sobre COVID-19 en todos los estados de Estados Unidos. Encuentra datos detallados y análisis por estado." />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Estadísticas COVID-19" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
