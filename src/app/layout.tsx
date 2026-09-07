import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://techtojob-landing.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TechToJob | Comunidad tech para desarrolladores y empresas",
    template: "%s | TechToJob",
  },
  description:
    "Comunidad de desarrolladores y empresas tech en español. Comparte tu perfil, encuentra talento, participa en torneos y entra al sector con una oportunidad real.",
  keywords: [
    "comunidad tech en español",
    "desarrolladores",
    "empleo tech",
    "talentos tech",
    "empresas tech",
    "torneos de programación",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TechToJob | Comunidad tech para desarrolladores y empresas",
    description:
      "Comunidad de desarrolladores y empresas tech en español. Comparte tu perfil, encuentra talento, participa en torneos y consigue una oportunidad real.",
    url: siteUrl,
    siteName: "TechToJob",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechToJob | Comunidad tech para desarrolladores y empresas",
    description:
      "Comunidad de desarrolladores y empresas tech en español. Comparte tu perfil, encuentra talento, y consigue una oportunidad real.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TechToJob",
  url: siteUrl,
  logo: `${siteUrl}/v1Positivo.svg`,
  sameAs: [
    "https://discord.gg/techtojob",
    "https://www.linkedin.com/company/techtojob",
    "https://github.com/GejorDev/techtojob-landing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${sora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
