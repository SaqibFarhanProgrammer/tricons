import React from "react";

function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-white py-24 md:py-32 lg:py-40 px-6 md:px-10"
    >
      <div className="max-w-5xl mx-auto">

        {/* Main Heading */}
        <h2 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight font-semibold">
          We are a digital agency focused on{" "}
          <span className="text-black/50">
            design, development, and performance marketing
          </span>{" "}
          built to scale modern brands.
        </h2>

        {/* Paragraph 1 */}
        <p className="text-black/60 text-lg md:text-xl lg:text-2xl leading-relaxed mt-10 md:mt-14 max-w-3xl">
          From building strong brand identities to developing high-performance websites and running conversion-driven ad campaigns, we handle the full digital ecosystem.
        </p>

        {/* Paragraph 2 */}
        <p className="text-black/50 text-base md:text-lg leading-relaxed mt-6 md:mt-8 max-w-2xl">
          Every project is tailored. No templates, no shortcuts — only strategies designed around your business goals and audience behavior.
        </p>

        {/* CTA Button */}
        <a
          href="#contact"
          className="mt-12 md:mt-16 inline-flex items-center gap-2 px-6 py-2.5 bg-black text-white text-xs tracking-wide rounded-full hover:bg-black/90 transition-all duration-300 hover:scale-105 active:scale-95 group"
        >
          Start Your Project
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

      </div>
    </section>
  );
}

export default About;