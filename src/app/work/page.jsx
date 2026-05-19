import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { portfolioProjects } from "@/data/projects";
import { createMetadata, webPageJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

const description =
  "Browse Tricons portfolio — web apps, landing pages, and UI systems built with a focus on design, performance, and business outcomes.";

export const metadata = createMetadata({
  title: "Work & Portfolio",
  description,
  path: "/work",
});

export default function WorkPage() {
  return (
    <main className="w-full bg-white px-6 md:px-10 py-24 md:py-32">
      <JsonLd
        data={webPageJsonLd({
          name: `${site.name} Portfolio`,
          description,
          path: "/work",
        })}
      />

      <article className="max-w-6xl mx-auto">
        <p className="text-black/40 text-[10px] tracking-[0.2em] uppercase">
          Selected Work
        </p>

        <h1 className="text-black text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mt-6">
          Projects built with focus on design and functionality
        </h1>

        <p className="mt-6 text-black/60 text-base md:text-lg max-w-3xl">
          A collection of web apps, landing pages, and UI systems created for
          clients and product experiments.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 list-none m-0 p-0">
          {portfolioProjects.map((project) => (
            <li
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-black/10"
            >
              <div className="relative w-full h-[320px]">
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.tag}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white/60 text-[10px] tracking-[0.2em] uppercase">
                  {project.tag}
                </p>
                <h2 className="text-white text-xl md:text-2xl font-semibold mt-2">
                  {project.title}
                </h2>
              </div>
            </li>
          ))}
        </ul>

        <section className="mt-20 text-center" aria-labelledby="work-cta-heading">
          <h2
            id="work-cta-heading"
            className="text-black text-2xl md:text-3xl font-semibold"
          >
            Want a project like this?
          </h2>
          <p className="text-black/50 mt-4">
            Let’s build something custom for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex mt-8 px-8 py-3 bg-black text-white rounded-full hover:bg-black/90 transition"
          >
            Start a Project
          </Link>
        </section>
      </article>
    </main>
  );
}
