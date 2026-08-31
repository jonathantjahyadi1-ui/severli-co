import type { MetadataRoute } from "next";

const baseUrl = "https://severli.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about/", priority: 0.9, changeFrequency: "monthly" as const },
    {
      path: "/discover-severli/",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/collections/",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/best-sellers/",
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    { path: "/values/", priority: 0.7, changeFrequency: "monthly" as const },
    {
      path: "/lookbook/",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/our-journey/",
      priority: 0.8,
      changeFrequency: "yearly" as const,
    },
    {
      path: "/business-inquiries/",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
  ];

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
