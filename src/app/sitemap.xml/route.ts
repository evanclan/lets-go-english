const BASE_URL = "https://www.raja-english.com";

const pages = [
  { loc: "", changefreq: "weekly", priority: "1.0" },
  { loc: "/concept", changefreq: "monthly", priority: "0.8" },
  { loc: "/plan-fees", changefreq: "monthly", priority: "0.9" },
  { loc: "/about", changefreq: "monthly", priority: "0.7" },
  { loc: "/about-tedmiller", changefreq: "monthly", priority: "0.7" },
  { loc: "/reviews/coco", changefreq: "monthly", priority: "0.6" },
  { loc: "/reviews/layla", changefreq: "monthly", priority: "0.6" },
  {
    loc: "/%E3%83%96%E3%83%AD%E3%82%B0",
    changefreq: "weekly",
    priority: "0.5",
  },
  { loc: "/campaign/bali-indonesia", changefreq: "weekly", priority: "0.9" },
  { loc: "/j/privacy", changefreq: "yearly", priority: "0.3" },
  { loc: "/sitemap", changefreq: "monthly", priority: "0.3" },
];

export function GET() {
  const now = new Date().toISOString().split("T")[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${BASE_URL}${p.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
