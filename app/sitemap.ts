import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/* The "store directory" Google reads to find every page on the site. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.meta.url;
  const lastModified = new Date();

  const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/our-services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/properties", priority: 0.9, changeFrequency: "weekly" },
    { path: "/search", priority: 0.8, changeFrequency: "weekly" },
    { path: "/press", priority: 0.7, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.9, changeFrequency: "yearly" },
    { path: "/newsletter", priority: 0.6, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/cookies", priority: 0.2, changeFrequency: "yearly" },
    { path: "/dmca", priority: 0.2, changeFrequency: "yearly" },
    { path: "/fair-housing", priority: 0.2, changeFrequency: "yearly" },
    { path: "/accessibility", priority: 0.2, changeFrequency: "yearly" },
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
