import JsonLd from "@/components/JsonLd";
import { createMetadata, webPageJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

const metaDescription =
  "Contact Tricons Digital Agency Karachi for website, web app, UI/UX, AI or marketing projects. Fast response within 24-48 hours.";

export const metadata = createMetadata({
  title: "Contact Tricons | Digital Agency Karachi",
  description: metaDescription,
  path: "/contact",
  keywords: [
    "contact digital agency karachi",
    "web development quote pakistan",
    "hire web developer karachi",
  ],
  openGraph: {
    title: "Contact Tricons Digital Agency",
  },
});

export default function ContactPage() {
  return (
    <main id="main-content" className="w-full bg-white px-6 md:px-10 py-24 md:py-32">
      <JsonLd
        data={webPageJsonLd({
          name: `Contact ${site.name}`,
          description: metaDescription,
          path: "/contact",
          type: "ContactPage",
        })}
      />

      <article className="max-w-3xl mx-auto text-center">
        <p className="text-black/50 text-xs tracking-[0.2em] uppercase">
          GET IN TOUCH
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-[1.05] mt-6">
          Let’s Discuss Your Project
        </h1>

        <section className="mt-16 bg-zinc-50 border border-black/10 rounded-3xl p-12 md:p-16">
          <a
            href={`mailto:${site.email}`}
            className="inline-block px-12 py-5 bg-black text-white rounded-full text-lg font-medium hover:bg-black/90"
          >
            Send Email
          </a>
          <p className="mt-6 text-black">
            <a href={`mailto:${site.email}`} className="hover:underline">
              {site.email}
            </a>
          </p>
          <p className="text-black/50 mt-8">We reply within 24–48 hours</p>
        </section>
      </article>
    </main>
  );
}
