// Layout raíz: metadata global, JSON-LD Schema.org, importación de fuente
import type { Metadata } from "next";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import {
  SITE_URL,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
} from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "HyperLeaf — Asociación Civil de Cannabis Medicinal en Mendoza",
    template: "%s | HyperLeaf Asociación Civil",
  },
  description:
    "HyperLeaf es una asociación civil de cannabis medicinal con sede en Chacras de Coria, Mendoza. Acceso legal, seguro y acompañado a tratamientos con cannabis bajo REPROCANN y la Ley 27.350, con seguimiento de profesionales especializados.",
  keywords: [
    "cannabis medicinal Mendoza",
    "asociación civil cannabis Mendoza",
    "REPROCANN Mendoza",
    "cannabis legal Mendoza",
    "aceite CBD Mendoza",
    "HyperLeaf",
    "dispensario cannabis Cuyo",
    "cannabis recreativo Mendoza",
    "club cannabis Mendoza",
    "cannabis Chacras de Coria",
  ],
  authors: [{ name: "HyperLeaf Asociación Civil" }],
  creator: "HyperLeaf Asociación Civil",
  publisher: "HyperLeaf Asociación Civil",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "HyperLeaf Asociación Civil",
    title: "HyperLeaf — Cannabis Medicinal Legal en Mendoza",
    description:
      "Acompañamiento profesional y acceso legal al cannabis medicinal en Mendoza. Asociación civil bajo REPROCANN y Ley 27.350, con productos certificados y seguimiento médico continuo.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HyperLeaf — Asociación Civil de Cannabis Medicinal en Mendoza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HyperLeaf — Cannabis Medicinal Legal en Mendoza",
    description:
      "Asociación civil de cannabis medicinal en Mendoza. Acompañamiento profesional bajo REPROCANN y Ley 27.350.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// JSON-LD Schema.org tipo Organization — ayuda a buscadores y asistentes
// a entender quién es HyperLeaf, dónde está y cómo contactarla.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HyperLeaf Asociación Civil",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description:
    "Asociación civil de cannabis medicinal con sede en Chacras de Coria, Mendoza, Argentina. Operamos bajo el marco regulatorio REPROCANN y la Ley 27.350, acompañando a nuestros asociados con seguimiento médico profesional.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chacras de Coria",
    addressLocality: "Luján de Cuyo",
    addressRegion: "Mendoza",
    addressCountry: "AR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: WHATSAPP_DISPLAY,
    availableLanguage: "Spanish",
  },
  sameAs: [INSTAGRAM_URL],
  areaServed: {
    "@type": "State",
    name: "Mendoza",
    containedInPlace: {
      "@type": "Country",
      name: "Argentina",
    },
  },
  legalName: "HyperLeaf Asociación Civil",
  foundingLocation: {
    "@type": "Place",
    name: "Chacras de Coria, Mendoza, Argentina",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <head>
        {/* Preconnect para optimizar carga de Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* JSON-LD Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-sans">
        {children}
        {/* Botón flotante de WhatsApp — visible en todas las páginas */}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
