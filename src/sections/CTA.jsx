import Link from "next/link";

export default function CTASection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative w-full bg-white py-24 md:py-32 lg:py-40 px-6 md:px-10 overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-black/40 text-[10px] tracking-[0.2em] uppercase block mb-6">
          Currently accepting new projects
        </p>

        <h2
          id="cta-heading"
          className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight font-semibold"
        >
          Ready to start
          <br />
          your next project?
        </h2>

        <p className="text-black/50 text-base md:text-lg leading-relaxed max-w-xl mx-auto mt-6 md:mt-8">
          We help brands design, build, and scale digital products that actually
          perform.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10 md:mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-black text-white text-sm tracking-wide rounded-full hover:bg-black/90 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Start a Project
          </Link>

          <a
            href="https://wa.me/923XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent text-black text-sm tracking-wide rounded-full border border-black/20 hover:bg-black/5 transition-all duration-300"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
