import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { portfolioProjects } from "@/data/projects";
import { createMetadata, webPageJsonLd, itemListJsonLd } from "@/lib/seo";
import { site, getAbsoluteUrl } from "@/lib/site";

const metaDescription =
  "Explore Tricons portfolio of high-performance websites, web apps, and digital projects built for clients in Karachi and worldwide.";

export const metadata = createMetadata({
  title: "Our Work & Portfolio | Digital Agency Karachi",
  description: metaDescription,
  path: "/work",
  keywords: [
    "portfolio",
    "web development portfolio karachi",
    "next.js projects",
    "ui ux case studies",
  ],
  openGraph: {
    title: "Tricons Portfolio",
  },
});

export default function WorkPage() {
  const projectsForSchema = portfolioProjects.map((project) => ({
    name: project.title,
    description: project.description ?? project.tag,
    image: project.image.startsWith("http")
      ? project.image
      : getAbsoluteUrl(project.image),
    url: getAbsoluteUrl("/work"),
  }));

  return (
    <main id="main-content" className="w-full bg-white px-6 md:px-10 py-24 md:py-32">
      <JsonLd
        data={[
          webPageJsonLd({
            name: `${site.name} Portfolio`,
            description: metaDescription,
            path: "/work",
          }),
          itemListJsonLd({
            name: "Featured Projects",
            items: projectsForSchema,
          }),
        ]}
      />

      <article className="max-w-6xl mx-auto">
        <p className="text-black/50 text-xs tracking-[0.2em] uppercase">
          SELECTED WORK
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-[1.05] mt-6">
          Projects Built with Precision & Performance
        </h1>

        <ul className="grid md:grid-cols-2 gap-8 mt-16">
          {portfolioProjects.map((project, i) => (
            <li
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-black/10"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={project.image}
                  alt={`${project.title} - Tricons Project`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority={i < 2}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-8 text-white">
                <p className="uppercase text-xs tracking-widest">{project.tag}</p>
                <h3 className="text-2xl font-semibold mt-2">{project.title}</h3>
              </div>
              <Link
                href="/contact"
                className="absolute inset-0 z-10"
                aria-label={`Contact for ${project.title}`}
              />
            </li>
          ))}
        </ul>

        <section className="mt-28 text-center bg-zinc-950 text-white rounded-3xl py-20 px-8">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Want Similar Results?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/contact"
              className="px-12 py-4 bg-white text-black rounded-full font-medium"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="px-12 py-4 border border-white/50 rounded-full"
            >
              Our Services
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
