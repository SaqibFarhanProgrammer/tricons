import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { createMetadata, webPageJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

const metaDescription =
  "Tricons is a Karachi-based digital agency specializing in high-performance websites, custom web applications, UI/UX design, AI solutions, automation, and ROI-driven performance marketing.";

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
    <main id="main-content" className="w-full bg-white px-6 md:px-10 py-24 md:py-32">
      <JsonLd
        data={webPageJsonLd({
          name: `About ${site.name}`,
          description: metaDescription,
          path: "/about",
          type: "AboutPage",
        })}
      />

      <article className="max-w-5xl mx-auto">
        <p className="text-black/50 text-xs tracking-[0.2em] uppercase font-medium">
          ABOUT TRICONS
        </p>

        <h1 className="text-black text-4xl md:text-6xl font-semibold tracking-tighter leading-[1.05] mt-6">
          Premium Digital Agency in Karachi Building High-Performance Digital
          Experiences
        </h1>

        <p className="mt-8 text-black/70 text-lg leading-relaxed max-w-3xl">
          We help ambitious businesses grow through beautiful, fast, and
          conversion-focused websites, web apps, and digital strategies.
        </p>

        <hr className="my-16 border-black/10" />

        <section aria-labelledby="expertise-heading">
          <h2
            id="expertise-heading"
            className="text-3xl md:text-4xl font-semibold tracking-tight"
          >
            Our Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mt-12">
            {[
              "Website Development",
              "Web Applications",
              "UI/UX Design",
              "Performance Marketing",
            ].map((title) => (
              <div key={title}>
                <h3 className="font-semibold text-xl">{title}</h3>
                <p className="text-black/70 mt-3 text-[17px] leading-relaxed">
                  {title === "Website Development" &&
                    "SEO-first, lightning-fast websites using Next.js and modern architecture."}
                  {title === "Web Applications" &&
                    "Scalable SaaS, dashboards, and enterprise web apps."}
                  {title === "UI/UX Design" &&
                    "Conversion-focused, accessible, and delightful user experiences."}
                  {title === "Performance Marketing" &&
                    "Meta Ads, Google Ads, and data-driven growth campaigns."}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-28 text-center bg-zinc-950 text-white rounded-3xl py-20 px-8">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Ready to Work Together?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/contact"
              className="px-12 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90"
            >
              Start a Project
            </Link>
            <Link
              href="/work"
              className="px-12 py-4 border border-white/50 rounded-full hover:bg-white/10"
            >
              View Our Work
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
