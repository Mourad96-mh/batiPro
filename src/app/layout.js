import "./globals.css";
import { LangProvider } from "@/lib/LangContext";
import { COMPANY, dict, areaServedLd, cityList } from "@/lib/dictionary";
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
  telephone: `+212${COMPANY.phones[0].slice(1)}`,
  image: `${SITE}/og.jpg`,
  logo: `${SITE}/logo.png`,
  slogan: COMPANY.slogan.fr,
  description: `Entreprise marocaine de construction, rénovation, aménagement, pilotage de chantier (OPC), assistance technique, maintenance et management QSE. Interventions à ${cityList("fr")}.`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: COMPANY.addressLocality,
    addressRegion: COMPANY.region,
    addressCountry: "MA",
  },
  areaServed: areaServedLd("fr"),
  founder: { "@type": "Person", name: COMPANY.director },
  knowsLanguage: ["fr", "en"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: `+212${COMPANY.phones[0].slice(1)}`,
      contactType: "customer service",
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
    "BATIPRO BTP CONSULTING : construction, rénovation, aménagement, OPC et maintenance à Kénitra, Rabat, Tanger, Meknès et Casablanca. Devis gratuit.",
  applicationName: "BATIPRO BTP CONSULTING",
  alternates: { canonical: "/", languages: altLanguages("/") },
  keywords: [
    "BATIPRO", "BTP Maroc", "entreprise de construction Maroc",
    "travaux de bâtiment", "rénovation", "gros œuvre", "OPC chantier",
    "coordination de chantier", "génie civil", "aménagement", "maintenance bâtiment",
    "QSE",
    "entreprise de construction Kénitra", "entreprise de construction Rabat",
    "entreprise de construction Tanger", "entreprise de construction Meknès",
    "entreprise de construction Casablanca",
    "travaux de rénovation Rabat", "société BTP Kénitra", "entreprise BTP Tanger",
  ],
  openGraph: {
    title: "BATIPRO BTP CONSULTING — Construction & bâtiment au Maroc",
    description:
      "Construction, rénovation, aménagement et accompagnement technique de vos projets de bâtiment à Kénitra, Rabat, Tanger, Meknès et Casablanca. Construire avec rigueur, accompagner avec confiance.",
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
      "Construction, rénovation, aménagement, OPC, maintenance et QSE à Kénitra, Rabat, Tanger, Meknès et Casablanca. Devis gratuit.",
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
