import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { services } from "@/data/services";
import { createMetadata, webPageJsonLd, servicesJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

const metaDescription =
  "Tricons offers professional web development, web applications, UI/UX design, AI solutions, automation, and performance marketing services in Karachi, Pakistan.";

export const metadata = createMetadata({
  title:
    "Services | Web Development, UI/UX & Digital Marketing Agency Karachi",
  description: metaDescription,
  path: "/services",
  keywords: [
    "web development karachi",
    "ui ux design karachi",
    "digital marketing agency pakistan",
    "next.js development",
    "ai solutions karachi",
    "web app development pakistan",
  ],
  openGraph: {
    title: "Our Services — Tricons Digital Agency",
  },
});

export default function ServicesPage() {
  return (
    <main id="main-content" className="w-full bg-white px-6 md:px-10 py-24 md:py-32">
      <JsonLd
        data={[
          webPageJsonLd({
            name: `${site.name} Services`,
            description: metaDescription,
            path: "/services",
          }),
          servicesJsonLd({ items: services }),
        ]}
      />

      <article className="max-w-5xl mx-auto">
        <p className="text-black/50 text-xs tracking-[0.2em] uppercase">
          OUR SERVICES
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-[1.05] mt-6">
          Digital Services That Drive Real Growth
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {services.map((item) => (
            <div
              key={item.title}
              className="p-9 border border-black/10 rounded-3xl hover:border-black/30 transition-all"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-black/70 mt-4 text-[17px]">{item.description}</p>
              <Link
                href="/contact"
                className="inline-block mt-6 text-sm font-medium"
              >
                Discuss this service →
              </Link>
            </div>
          ))}
        </div>

        <section className="mt-28 text-center bg-zinc-950 text-white rounded-3xl py-20">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Let’s Bring Your Idea to Life
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block px-12 py-4 bg-white text-black rounded-full font-medium"
          >
            Start Your Project
          </Link>
        </section>
      </article>
    </main>
  );
}
