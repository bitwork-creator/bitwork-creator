import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brenda · Diseño & Desarrollo Web",
  description:
    "Freelance web developer en Valencia. Creo landing pages, sitios corporativos y experiencias digitales para negocios que quieren destacar online.",
  keywords: [
    "diseño web Valencia",
    "desarrollo web freelance",
    "landing page Valencia",
    "WordPress Valencia",
    "Next.js freelance",
    "web developer Valencia",
  ],
  authors: [{ name: "Brenda" }],
  openGraph: {
    title: "Brenda · Diseño & Desarrollo Web",
    description:
      "Freelance web developer en Valencia. Landing pages, sitios corporativos y experiencias digitales.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
