import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { createMetadata, webPageJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

const description =
  "Learn about Tricons — a digital agency building websites, web apps, UI/UX, AI solutions, automation, and performance marketing for growing brands.";

export const metadata = createMetadata({
  title: "About Us",
  description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="w-full bg-white px-6 md:px-10 py-24 md:py-32">
      <JsonLd
        data={webPageJsonLd({
          name: `About ${site.name}`,
          description,
          path: "/about",
        })}
      />

      <article className="max-w-5xl mx-auto">
        <p className="text-black/40 text-[10px] tracking-[0.2em] uppercase">
          About Us
        </p>

        <h1 className="text-black text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mt-6">
          We are a digital agency focused on building websites, apps, and modern
          digital solutions.
        </h1>

        <p className="mt-6 text-black/60 text-base md:text-lg leading-relaxed max-w-3xl">
          We design and develop websites, web applications, and digital products
          for businesses. Our work covers UI/UX design, full-stack development,
          and performance-focused digital marketing.
        </p>

        <hr className="my-16 border-t border-black/10" />

        <h2 className="text-black text-2xl md:text-3xl font-semibold">
          What we do
        </h2>

        <ul className="grid md:grid-cols-2 gap-6 mt-10 list-none m-0 p-0">
          <li className="p-6 border border-black/10 rounded-xl">
            <h3 className="text-black font-medium">Website Development</h3>
            <p className="text-black/60 text-sm mt-2">
              Responsive websites using modern frontend technologies and SEO-first
              architecture.
            </p>
          </li>
          <li className="p-6 border border-black/10 rounded-xl">
            <h3 className="text-black font-medium">Web Applications</h3>
            <p className="text-black/60 text-sm mt-2">
              Web apps with authentication, APIs, and dashboards built for scale.
            </p>
          </li>
          <li className="p-6 border border-black/10 rounded-xl">
            <h3 className="text-black font-medium">UI/UX Design</h3>
            <p className="text-black/60 text-sm mt-2">
              Clean interfaces focused on usability, accessibility, and conversion.
            </p>
          </li>
          <li className="p-6 border border-black/10 rounded-xl">
            <h3 className="text-black font-medium">Digital Marketing</h3>
            <p className="text-black/60 text-sm mt-2">
              Meta Ads, Google Ads, and growth campaigns focused on measurable ROI.
            </p>
          </li>
        </ul>

        <section className="mt-20" aria-labelledby="approach-heading">
          <h2
            id="approach-heading"
            className="text-black text-2xl md:text-3xl font-semibold"
          >
            Our approach
          </h2>
          <p className="mt-6 text-black/60 leading-relaxed max-w-3xl">
            We focus on clear communication, intentional design, and functional
            development. Every project is built from client requirements without
            unnecessary complexity.
          </p>
        </section>

        <section className="mt-20 text-center" aria-labelledby="about-cta-heading">
          <h2
            id="about-cta-heading"
            className="text-black text-2xl md:text-3xl font-semibold"
          >
            Let’s work together
          </h2>
          <p className="text-black/50 mt-4">
            If you have a project idea, we can help you build it.
          </p>
          <Link
            href="/contact"
            className="inline-flex mt-8 px-8 py-3 bg-black text-white rounded-full hover:bg-black/90 transition"
          >
            Contact Us
          </Link>
        </section>
      </article>
    </main>
  );
}
