export const siteUrl = "https://www.bnrhavalandirma.com";

export const defaultTitle = "BNR Havalandırma | İklimlendirme Sistemleri";

export const defaultDescription =
  "Adana'da havalandırma, iklimlendirme, ısıtma, soğutma ve mekanik tesisat projeleri için profesyonel keşif, projelendirme, montaj ve bakım hizmetleri.";

export const defaultKeywords = [
  "havalandırma",
  "iklimlendirme",
  "klima",
  "ısıtma",
  "soğutma",
  "Adana",
  "mekanik tesisat",
  "endüstriyel havalandırma",
];

export const blogRoutes = [
  "/blog/adana",
  "/blog/yuregir",
  "/blog/saricam",
  "/blog/seyhan",
  "/blog/cukurova",
  "/blog/kozan",
  "/blog/ceyhan",
  "/blog/aladag",
  "/blog/karaisali",
  "/blog/feke",
  "/blog/pozanti",
  "/blog/mersin",
  "/blog/osmaniye",
  "/blog/hatay",
  "/blog/iskenderun",
  "/blog/tarsus",
];

export const staticRoutes = ["/", "/about-us", "/services", "/contact-us", "/blog"];

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function createMetadata({ title, description, path = "/", keywords = [] }) {
  const pageTitle = title ? `${title} | BNR Havalandırma` : defaultTitle;
  const pageDescription = description || defaultDescription;

  return {
    metadataBase: new URL(siteUrl),
    title: pageTitle,
    description: pageDescription,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: absoluteUrl(path),
      siteName: "BNR Havalandırma",
      images: [
        {
          url: "/img/logo.webp",
          width: 800,
          height: 600,
          alt: "BNR Havalandırma Logo",
        },
      ],
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: ["/img/logo.webp"],
    },
  };
}
