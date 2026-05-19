import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";

export default function Projects() {
  const [first, second, third] = featuredProjects;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative w-full bg-white py-20 md:py-28 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10 md:mb-14">
          <h2
            id="work-heading"
            className="text-black text-sm md:text-base tracking-wide font-medium"
          >
            Featured Projects
          </h2>

          <Link
            href="/work"
            className="inline-flex items-center justify-center px-5 py-2 border border-black/20 text-black text-[11px] tracking-wide rounded-full hover:bg-black/5 transition-all duration-300"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-3">
          {[first, second].map((project) => (
            <article
              key={project.id}
              className="group relative w-full aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden border border-black/10"
            >
              <Link
                href="/contact"
                className="absolute inset-0 z-10"
                aria-label={`Start a project like ${project.title}`}
              />
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-[1] pointer-events-none">
                <h3 className="text-white text-2xl md:text-3xl tracking-tight font-semibold">
                  {project.title}
                </h3>
                <ul className="flex flex-wrap gap-2 mt-2 list-none m-0 p-0">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <span className="text-white/80 text-[10px] md:text-xs tracking-wide border border-white/25 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          <article className="group relative w-full aspect-[16/9] md:col-span-2 rounded-2xl overflow-hidden border border-black/10">
            <Link
              href="/contact"
              className="absolute inset-0 z-10"
              aria-label={`Start a project like ${third.title}`}
            />
            <Image
              src={third.image}
              alt={`${third.title} project preview`}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-[1] pointer-events-none">
              <h3 className="text-white text-2xl md:text-3xl tracking-tight font-semibold">
                {third.title}
              </h3>
              <ul className="flex flex-wrap gap-2 mt-2 list-none m-0 p-0">
                {third.tags.map((tag) => (
                  <li key={tag}>
                    <span className="text-white/80 text-[10px] md:text-xs tracking-wide border border-white/25 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
