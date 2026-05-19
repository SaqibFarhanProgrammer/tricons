import { site } from "@/lib/site";

const routes = ["/", "/services", "/work", "/about", "/contact"];

/** @returns {import('next').MetadataRoute.Sitemap} */
export default function sitemap() {
  const lastModified = new Date();

  return routes.map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
