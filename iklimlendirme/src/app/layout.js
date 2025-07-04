import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  metadataBase: new URL("https://www.bnrhavalandirma.com"),
  title: "BNR Havalandırma | İklimlendirme Sistemleri",
  description:
    "Adana'nın lider iklimlendirme ve havalandırma firması. Hastane, AVM, otel, konut ve işyerleri için profesyonel çözümler. Klima, havalandırma, ısıtma-soğutma sistemleri kurulum ve bakım hizmetleri.",
  keywords:
    "havalandırma, iklimlendirme, klima, ısıtma, soğutma, Adana, mekanik tesisat, hastane havalandırma, endüstriyel havalandırma",
  authors: [{ name: "BNR Havalandırma" }],
  creator: "BNR Havalandırma",
  publisher: "BNR Havalandırma",
  openGraph: {
    title: "BNR Havalandırma | İklimlendirme ve Havalandırma Sistemleri",
    description:
      "Adana'nın lider iklimlendirme ve havalandırma firması. Profesyonel çözümler ve uzman ekip.",
    url: "https://bnrhavalandirma.com",
    siteName: "BNR Havalandırma",
    images: [
      {
        url: "/img/logo.jpg",
        width: 800,
        height: 600,
        alt: "BNR Havalandırma Logo",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/img/logo.jpg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
