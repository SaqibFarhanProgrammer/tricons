import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageCta from "@/components/PageCta";
import PageHeader from "@/components/PageHeader";
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
    <main
      id="main-content"
      className="page-main w-full bg-white px-6 md:px-10 pb-24 md:pb-32"
    >
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
        <PageHeader
          eyebrow="Our services"
          title="Digital Services That Drive Real Growth"
          description={metaDescription}
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-14 md:mt-16">
          {services.map((item) => (
            <div
              key={item.title}
              className="group p-8 md:p-9 border border-black/10 rounded-3xl hover:border-black/30 hover:shadow-sm transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl font-semibold">{item.title}</h3>
              <p className="text-black/70 mt-4 text-[17px] leading-relaxed">
                {item.description}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 mt-6 text-sm font-medium text-black/80 group-hover:text-black transition-colors"
              >
                Discuss this service
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>

        <PageCta title="Let’s Bring Your Idea to Life" />
      </article>
    </main>
  );
}
