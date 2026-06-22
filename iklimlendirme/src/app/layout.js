import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createMetadata, siteUrl } from "./seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
  preload: true,
});

export const metadata = {
  ...createMetadata({
    description:
      "Adana'da havalandırma, iklimlendirme, ısıtma, soğutma ve mekanik tesisat projeleri için profesyonel keşif, projelendirme, montaj ve bakım hizmetleri.",
  }),
  authors: [{ name: "BNR Havalandırma" }],
  creator: "BNR Havalandırma",
  publisher: "BNR Havalandırma",
  verification: {
    google: "DGgefgEMv1u6ue-mlTT8669erZ6CMC9kK00bHkqI60o",
  },
};

export default function RootLayout({ children }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: "BNR Havalandırma",
    url: siteUrl,
    logo: `${siteUrl}/img/logo.webp`,
    image: `${siteUrl}/img/mainPage1.webp`,
    telephone: "+905446653943",
    email: "bnrhavalandirma@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Levent Mahallesi 1830 Sokak No:47",
      addressLocality: "Yüreğir",
      addressRegion: "Adana",
      addressCountry: "TR",
    },
    areaServed: ["Adana", "Mersin", "Osmaniye", "Hatay"],
    priceRange: "$$",
    sameAs: ["https://www.instagram.com/bnrhavalandirma"],
  };

  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/img/logo.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
