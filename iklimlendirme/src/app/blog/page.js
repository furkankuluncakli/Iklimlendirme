import BlogClient from "./BlogClient";
import { createMetadata } from "../seo";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Adana, Mersin, Osmaniye, Hatay ve çevre ilçelerde havalandırma ve iklimlendirme çözümleri hakkında yerel rehberler.",
  path: "/blog",
  keywords: ["havalandırma blog", "iklimlendirme rehberi", "yerel havalandırma hizmetleri"],
});

export default function BlogPage() {
  return <BlogClient />;
}
