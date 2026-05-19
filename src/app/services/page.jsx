import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { services } from "@/data/services";
import { createMetadata, servicesJsonLd, webPageJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

const description =
  "Explore Tricons services: website development, full-stack apps, UI/UX design, AI solutions, automation systems, and performance digital marketing.";

export const metadata = createMetadata({
  title: "Services",
  description,
  path: "/services",
});

export default function ServicesPage() {
  const jsonLdItems = services.map((s) => ({
    name: s.title,
    description: s.description,
  }));

  return (
    <main className="w-full bg-white px-6 md:px-10 py-24 md:py-32">
      <JsonLd
        data={[
          webPageJsonLd({
            name: `${site.name} Services`,
            description,
            path: "/services",
          }),
          servicesJsonLd({ items: jsonLdItems }),
        ]}
      />

      <article className="max-w-5xl mx-auto">
        <p className="text-black/40 text-[10px] tracking-[0.2em] uppercase">
          Services
        </p>

        <h1 className="text-black text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mt-6">
          Digital services built for growth, performance, and scale
        </h1>

        <p className="mt-6 text-black/60 text-base md:text-lg leading-relaxed max-w-3xl">
          {site.description}
        </p>

        <ul className="grid md:grid-cols-2 gap-6 mt-16 list-none m-0 p-0">
          {services.map((item) => (
            <li
              key={item.title}
              className="p-8 rounded-2xl border border-black/10 hover:border-black/20 transition-all duration-300"
            >
              <h2 className="text-black text-lg font-semibold">{item.title}</h2>
              <p className="text-black/60 text-sm mt-3 leading-relaxed">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        <section className="mt-20 text-center" aria-labelledby="services-cta-heading">
          <h2
            id="services-cta-heading"
            className="text-black text-2xl md:text-3xl font-semibold"
          >
            Ready to start your project?
          </h2>
          <p className="text-black/50 mt-4">
            Tell us what you need — we’ll recommend the right stack and timeline.
          </p>
          <Link
            href="/contact"
            className="inline-flex mt-8 px-8 py-3 bg-black text-white rounded-full hover:bg-black/90 transition"
          >
            Get in Touch
          </Link>
        </section>
      </article>
    </main>
  );
}
