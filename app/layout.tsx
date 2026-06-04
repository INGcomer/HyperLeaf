// Layout raíz: metadata global, JSON-LD Schema.org, importación de fuente
import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://hyperleaf.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "HyperLeaf — Asociación Civil Cannabis Legal Mendoza",
    template: "%s | HyperLeaf Asociación Civil",
  },
  description:
    "HyperLeaf es una asociación civil de cannabis legal con sede en Chacras de Coria, Mendoza. Acceso seguro, legal y consciente al cannabis medicinal y recreativo bajo el marco REPROCANN y la Ley 27.350.",
  keywords: [
    "cannabis legal Mendoza",
    "asociación civil cannabis Mendoza",
    "REPROCANN Mendoza",
    "cannabis medicinal Mendoza",
    "cannabis recreativo Mendoza",
    "HyperLeaf",
    "dispensario cannabis Cuyo",
    "aceite CBD Mendoza",
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
    title: "HyperLeaf — Cannabis Legal en Mendoza",
    description:
      "Acceso seguro y legal al cannabis en Mendoza. Asociación civil bajo REPROCANN y Ley 27.350. Cannabis medicinal y recreativo en Chacras de Coria.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HyperLeaf — Asociación Civil Cannabis Legal Mendoza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HyperLeaf — Cannabis Legal en Mendoza",
    description:
      "Asociación civil de cannabis legal en Mendoza. Acceso seguro bajo REPROCANN y Ley 27.350.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// JSON-LD Schema.org tipo Organization
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HyperLeaf Asociación Civil",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description:
    "Asociación civil de cannabis legal con sede en Chacras de Coria, Mendoza, Argentina. Operamos bajo el marco regulatorio REPROCANN y la Ley 27.350.",
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
    availableLanguage: "Spanish",
  },
  sameAs: [
    "https://www.instagram.com/hyperleaf.ar",
    "https://www.facebook.com/hyperleaf.ar",
  ],
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
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
