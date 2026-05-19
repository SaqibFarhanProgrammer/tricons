import { jsonLdScript } from "@/lib/seo";

/**
 * Server-rendered structured data for crawlers.
 * @param {{ data: Record<string, unknown> | Record<string, unknown>[] }} props
 */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={jsonLdScript(data)}
    />
  );
}
