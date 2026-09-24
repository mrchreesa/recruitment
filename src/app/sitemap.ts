import type { MetadataRoute } from "next";
import { absoluteUrl, indexedPages } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexedPages.map((p) => ({
    url: absoluteUrl(p.path),
    changeFrequency: "monthly",
    priority: p.priority,
  }));
}
