import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver, revealBootstrap } from "@/components/Motion";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const sitio = "Kromos Laboratorio";
const descripcion = "Somos una empresa especializada en citogenética, con más de 50.000 estudios realizados hasta el momento.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kromoslab.com.ar"),
  title: { default: `Inicio | ${sitio}`, template: `%s | ${sitio}` },
  description: descripcion,
  openGraph: { type: "website", locale: "es_AR", siteName: "Kromos Laboratorio de Citogenética", description: descripcion },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#1B84A1" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealBootstrap }} />
      </head>
      <body>
        <a className="skip" href="#contenido">Saltar al contenido</a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
