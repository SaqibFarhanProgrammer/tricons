import Link from "next/link";

/**
 * Dark rounded CTA block used at the bottom of inner pages.
 */
export default function PageCta({
  title,
  primaryHref = "/contact",
  primaryLabel = "Start a Project",
  secondaryHref,
  secondaryLabel,
}) {
  return (
    <section className="mt-20 md:mt-28 text-center bg-zinc-950 text-white rounded-3xl py-16 md:py-20 px-6 md:px-8">
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-balance">
        {title}
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
        <Link
          href={primaryHref}
          className="inline-flex items-center justify-center px-10 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors"
        >
          {primaryLabel}
        </Link>
        {secondaryHref && secondaryLabel ? (
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center px-10 py-4 border border-white/40 rounded-full font-medium hover:bg-white/10 transition-colors"
          >
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
