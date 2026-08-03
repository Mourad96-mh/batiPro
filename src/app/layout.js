import "./globals.css";
import { LangProvider } from "@/lib/LangContext";
import { COMPANY, dict, areaServedLd, coverageIn, telHref } from "@/lib/dictionary";
import { altLanguages } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";

const SITE = COMPANY.siteUrl;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${SITE}/#business`,
  name: COMPANY.legalName,
  alternateName: COMPANY.name,
  url: SITE,
  email: COMPANY.email,
  telephone: telHref(COMPANY.phones[0].number),
  image: `${SITE}/og.jpg`,
  logo: `${SITE}/logo.svg`,
  slogan: COMPANY.slogan.fr,
  // Profils officiels : aide Google à rattacher l'entité au bon compte social.
  sameAs: COMPANY.social.map((s) => s.url),
  description: `Entreprise marocaine de construction, rénovation, aménagement, pilotage de chantier (OPC), assistance technique, maintenance et management QSE. Interventions ${coverageIn("fr")}.`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.office.street,
    addressLocality: COMPANY.office.locality,
    addressRegion: COMPANY.office.region,
    addressCountry: "MA",
  },
  hasMap: COMPANY.mapsUrl,
  geo: {
    "@type": "GeoCoordinates",
    latitude: COMPANY.office.geo.lat,
    longitude: COMPANY.office.geo.lng,
  },
  areaServed: areaServedLd("fr"),
  founder: { "@type": "Person", name: COMPANY.director },
  knowsLanguage: ["fr", "en"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: telHref(COMPANY.phones[0].number),
      contactType: "customer service",
      areaServed: "MA",
      availableLanguage: ["fr", "en"],
    },
    {
      "@type": "ContactPoint",
      telephone: telHref(COMPANY.phones[2].number),
      contactType: "sales",
      areaServed: "MA",
      availableLanguage: ["fr", "en"],
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: dict.fr.services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        url: `${SITE}/services/${s.slug}/`,
      },
    })),
  },
};

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "BATIPRO BTP CONSULTING — Construction & bâtiment au Maroc",
    template: "%s | BATIPRO BTP CONSULTING",
  },
  description:
    "BATIPRO BTP CONSULTING : construction, rénovation, aménagement, OPC et maintenance partout au Maroc. Devis gratuit.",
  applicationName: "BATIPRO BTP CONSULTING",
  alternates: { canonical: "/", languages: altLanguages("/") },
  keywords: [
    "BATIPRO", "BTP Maroc", "entreprise de construction Maroc",
    "travaux de bâtiment", "rénovation", "gros œuvre", "OPC chantier",
    "coordination de chantier", "génie civil", "aménagement", "maintenance bâtiment",
    "QSE",
    "dalle réticulée", "dalle réticulée Maroc", "plancher caisson",
    "dalle nervurée béton armé", "entreprise dalle réticulée",
    "entreprise de construction Maroc", "société BTP Maroc",
    "travaux de rénovation Maroc", "entreprise de bâtiment Maroc",
    "construction partout au Maroc",
  ],
  openGraph: {
    title: "BATIPRO BTP CONSULTING — Construction & bâtiment au Maroc",
    description:
      "Construction, rénovation, aménagement et accompagnement technique de vos projets de bâtiment partout au Maroc. Construire aujourd'hui, bâtir la confiance de demain.",
    type: "website",
    locale: "fr_MA",
    url: "/",
    siteName: "BATIPRO BTP CONSULTING",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "BATIPRO BTP CONSULTING — construction & bâtiment au Maroc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BATIPRO BTP CONSULTING — Construction & bâtiment au Maroc",
    description:
      "Construction, rénovation, aménagement, OPC, maintenance et QSE partout au Maroc. Devis gratuit.",
    images: ["/og.jpg"],
  },
};

export const viewport = { themeColor: "#0b2a5c" };

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <LangProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <StickyBar />
        </LangProvider>
      </body>
    </html>
  );
}
