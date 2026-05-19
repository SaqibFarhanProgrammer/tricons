import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageCta from "@/components/PageCta";
import PageHeader from "@/components/PageHeader";
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
    <main
      id="main-content"
      className="page-main w-full bg-white px-6 md:px-10 pb-24 md:pb-32"
    >
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
        <PageHeader
          eyebrow="Selected work"
          title="Projects Built with Precision & Performance"
          description={metaDescription}
        />

        <ul className="grid md:grid-cols-2 gap-6 md:gap-8 mt-14 md:mt-16 list-none m-0 p-0">
          {portfolioProjects.map((project, i) => (
            <li
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-black/10 bg-black"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={project.image}
                  alt={`${project.title} - Tricons Project`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={i < 2}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 p-6 md:p-8 text-white z-[1] pointer-events-none">
                <p className="uppercase text-[10px] tracking-[0.2em] text-white/70">
                  {project.tag}
                </p>
                <h3 className="text-xl md:text-2xl font-semibold mt-2">
                  {project.title}
                </h3>
              </div>
              <Link
                href="/contact"
                className="absolute inset-0 z-10"
                aria-label={`Contact for ${project.title}`}
              />
            </li>
          ))}
        </ul>

        <PageCta
          title="Want Similar Results?"
          secondaryHref="/services"
          secondaryLabel="Our Services"
        />
      </article>
    </main>
  );
}
