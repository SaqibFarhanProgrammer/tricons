import JsonLd from "@/components/JsonLd";
import PageCta from "@/components/PageCta";
import PageHeader from "@/components/PageHeader";
import { createMetadata, webPageJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

const metaDescription =
  "Tricons is a Karachi-based digital agency specializing in high-performance websites, custom web applications, UI/UX design, AI solutions, automation, and ROI-driven performance marketing.";

const expertise = [
  {
    title: "Website Development",
    description:
      "SEO-first, lightning-fast websites using Next.js and modern architecture.",
  },
  {
    title: "Web Applications",
    description: "Scalable SaaS, dashboards, and enterprise web apps.",
  },
  {
    title: "UI/UX Design",
    description:
      "Conversion-focused, accessible, and delightful user experiences.",
  },
  {
    title: "Performance Marketing",
    description: "Meta Ads, Google Ads, and data-driven growth campaigns.",
  },
];

export const metadata = createMetadata({
  title: "About Tricons | Digital Agency Karachi | Web Development Pakistan",
  description: metaDescription,
  path: "/about",
  keywords: [
    "digital agency karachi",
    "web development karachi",
    "web development pakistan",
    "ui ux design karachi",
    "next.js agency pakistan",
    "performance marketing karachi",
    "ai solutions karachi",
    "best digital agency pakistan",
    "tricons agency",
  ],
  openGraph: {
    title: "About Tricons — Digital Agency Karachi",
  },
});

export default function AboutPage() {
  return (
    <main
      id="main-content"
      className="page-main w-full bg-white px-6 md:px-10 pb-24 md:pb-32"
    >
      <JsonLd
        data={webPageJsonLd({
          name: `About ${site.name}`,
          description: metaDescription,
          path: "/about",
          type: "AboutPage",
        })}
      />

      <article className="max-w-5xl mx-auto">
        <PageHeader
          eyebrow="About Tricons"
          title="Premium Digital Agency in Karachi Building High-Performance Digital Experiences"
          description="We help ambitious businesses grow through beautiful, fast, and conversion-focused websites, web apps, and digital strategies."
        />

        <hr className="my-14 md:my-16 border-black/10" />

        <section aria-labelledby="expertise-heading">
          <h2
            id="expertise-heading"
            className="text-3xl md:text-4xl font-semibold tracking-tight"
          >
            Our Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 mt-10 md:mt-12">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl border border-black/10 hover:border-black/25 transition-colors"
              >
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <p className="text-black/70 mt-3 text-[17px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <PageCta
          title="Ready to Work Together?"
          secondaryHref="/work"
          secondaryLabel="View Our Work"
        />
      </article>
    </main>
  );
}
