import { absoluteUrl, blogRoutes, staticRoutes } from "./seo";

export default function sitemap() {
  const now = new Date();

  return [...staticRoutes, ...blogRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/blog/") ? 0.7 : 0.8,
  }));
}
