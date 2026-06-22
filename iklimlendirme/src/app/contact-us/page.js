import ContactForm from "./ContactForm";
import { createMetadata } from "../seo";

export const metadata = createMetadata({
  title: "İletişim",
  description:
    "BNR Havalandırma ile iletişime geçin. Adana ve çevresinde havalandırma, iklimlendirme ve mekanik tesisat projeleri için ücretsiz keşif talep edin.",
  path: "/contact-us",
  keywords: ["BNR Havalandırma iletişim", "Adana ücretsiz keşif", "havalandırma teklif"],
});

export default function ContactUsPage() {
  return <ContactForm />;
}
