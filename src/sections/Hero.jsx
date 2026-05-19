import Link from "next/link";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,0,0,0.06),transparent)]"
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen px-6 text-center pt-20 pb-16">
        <h1
          id="hero-heading"
          className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl font-semibold text-balance"
        >
          We Design & Build Digital Experiences That Grow Brands
        </h1>

        <p className="text-black/70 text-sm md:text-base leading-relaxed max-w-xl mt-5 md:mt-6">
          Tricons is a creative digital agency focused on web design, mobile
          apps, branding, UI/UX design, and performance marketing that helps
          businesses scale online.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-8 md:mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-black text-white text-sm tracking-wide rounded-full hover:bg-black/90 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Start a Project
          </Link>

          <Link
            href="/work"
            className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-black text-sm tracking-wide rounded-full border border-black/20 hover:bg-black/5 transition-all duration-300"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
