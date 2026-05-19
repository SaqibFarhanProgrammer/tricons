/**
 * Server-rendered structured data for crawlers.
 * @param {{ data: Record<string, unknown> | Record<string, unknown>[] }} props
 */
export default function JsonLd({ data }) {
  const blocks = Array.isArray(data) ? data : [data];

  return blocks.map((block, index) => (
    <script
      key={index}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
    />
  ));
}
