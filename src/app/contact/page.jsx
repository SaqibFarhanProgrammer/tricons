import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
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
    <main
      id="main-content"
      className="page-main w-full bg-white px-6 md:px-10 pb-24 md:pb-32"
    >
      <JsonLd
        data={webPageJsonLd({
          name: `Contact ${site.name}`,
          description: metaDescription,
          path: "/contact",
          type: "ContactPage",
        })}
      />

      <article className="max-w-3xl mx-auto">
        <PageHeader
          eyebrow="Get in touch"
          title="Let’s Discuss Your Project"
          description="Tell us about your goals. We typically reply within 24–48 hours on business days."
        />

        <section className="mt-12 md:mt-16 grid gap-6">
          <div className="bg-zinc-50 border border-black/10 rounded-3xl p-10 md:p-14 text-center">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center px-10 py-4 bg-black text-white rounded-full text-base font-medium hover:bg-black/90 transition-colors"
            >
              Send Email
            </a>
            <p className="mt-6">
              <a
                href={`mailto:${site.email}`}
                className="text-black text-lg hover:underline"
              >
                {site.email}
              </a>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-black/10 p-6">
              <p className="text-[10px] uppercase tracking-[0.15em] text-black/40">
                Location
              </p>
              <p className="mt-2 text-black font-medium">
                {site.city}, {site.address.region}
              </p>
              <p className="text-black/60 text-sm mt-1">{site.address.country}</p>
            </div>
            <div className="rounded-2xl border border-black/10 p-6">
              <p className="text-[10px] uppercase tracking-[0.15em] text-black/40">
                Hours
              </p>
              <p className="mt-2 text-black font-medium">Mon – Sat</p>
              <p className="text-black/60 text-sm mt-1">10AM – 7PM PKT</p>
            </div>
          </div>

          {(site.linkedin || site.instagram) && (
            <div className="flex flex-wrap justify-center gap-6 pt-2">
              {site.linkedin ? (
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-black/60 hover:text-black transition-colors"
                >
                  LinkedIn →
                </a>
              ) : null}
              {site.instagram ? (
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-black/60 hover:text-black transition-colors"
                >
                  Instagram →
                </a>
              ) : null}
            </div>
          )}
        </section>
      </article>
    </main>
  );
}
