import type { APIRoute } from "astro";

const fallbackSite = new URL("https://salmanthoriq95.github.io");

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site ?? fallbackSite);
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${sitemapURL.href}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
