import JsonLd from "@/components/JsonLd";
import { createMetadata, webPageJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

const description =
  "Contact Tricons to discuss your next website, app, or marketing project. We typically respond within 24–48 hours.";

export const metadata = createMetadata({
  title: "Contact",
  description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="w-full bg-white px-6 md:px-10 py-24 md:py-32">
      <JsonLd
        data={[
          webPageJsonLd({
            name: `Contact ${site.name}`,
            description,
            path: "/contact",
          }),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: `Contact ${site.name}`,
            url: new URL("/contact", site.url).toString(),
            mainEntity: {
              "@type": "Organization",
              name: site.legalName,
              email: site.email,
              url: site.url,
            },
          },
        ]}
      />

      <article className="max-w-3xl mx-auto text-center">
        <p className="text-black/40 text-[10px] tracking-[0.2em] uppercase">
          Contact
        </p>

        <h1 className="text-black text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mt-6">
          Let’s talk about your next project
        </h1>

        <p className="mt-6 text-black/60 text-base md:text-lg leading-relaxed">
          Share your idea, product, or business goal. We’ll respond with a clear
          direction and next steps.
        </p>

        <section
          className="mt-14 border border-black/10 rounded-2xl p-10 md:p-14"
          aria-labelledby="contact-direct-heading"
        >
          <h2 id="contact-direct-heading" className="sr-only">
            Direct contact
          </h2>
          <p className="text-black/50 text-sm mb-6">Direct contact</p>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center justify-center px-10 py-4 bg-black text-white text-sm tracking-wide rounded-full hover:bg-black/90 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Send Email
          </a>
          <p className="text-black/40 text-xs mt-6">
            <a href={`mailto:${site.email}`} className="hover:text-black/60">
              {site.email}
            </a>
          </p>
        </section>

        <p className="mt-16 text-black/40 text-xs tracking-wide">
          Typical response time: 24–48 hours
        </p>
      </article>
    </main>
  );
}
