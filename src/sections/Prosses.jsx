import Link from "next/link";

const steps = [
  {
    num: "01",
    emoji: "🎯",
    title: "Discovery Call",
    desc: "We understand your business, goals, audience, and vision. This step defines the foundation of everything that follows.",
    tags: ["Free Consultation", "Goal Alignment"],
  },
  {
    num: "02",
    emoji: "🗺️",
    title: "Strategy & Planning",
    desc: "We build a structured roadmap tailored to your objectives, timeline, and budget before any execution starts.",
    tags: ["Custom Strategy", "Clear Timeline"],
  },
  {
    num: "03",
    emoji: "⚡",
    title: "Design & Development",
    desc: "We design and develop your product with a focus on performance, usability, and modern UI standards.",
    tags: ["Fast Execution", "Quality Focus"],
  },
  {
    num: "04",
    emoji: "🚀",
    title: "Launch & Growth",
    desc: "We launch your project and continuously optimize it for performance, conversions, and long-term growth.",
    tags: ["Optimization", "Scaling"],
  },
];

export default function Process() {
  return (
    <section
      aria-labelledby="process-heading"
      className="relative w-full bg-white py-24 md:py-32 lg:py-40 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 md:gap-16 mb-16 md:mb-24">
          <div>
            <p className="text-black/40 text-[10px] tracking-[0.2em] uppercase block mb-4">
              Process
            </p>

            <h2
              id="process-heading"
              className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight font-semibold"
            >
              Simple Process,
              <br />
              Strong Execution
            </h2>
          </div>

          <p className="text-black/50 text-sm md:text-base leading-relaxed max-w-sm">
            A structured workflow designed to remove guesswork and deliver
            predictable, high-quality digital outcomes.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 gap-5 list-none m-0 p-0">
          {steps.map((step) => (
            <li
              key={step.num}
              className="group relative p-8 md:p-10 rounded-2xl border border-black/10 bg-white hover:border-black/20 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-black text-white text-xs font-semibold">
                  {step.num}
                </span>
                <span
                  aria-hidden="true"
                  className="text-2xl md:text-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                >
                  {step.emoji}
                </span>
              </div>

              <h3 className="text-black text-xl md:text-2xl tracking-tight font-medium mb-4">
                {step.title}
              </h3>

              <p className="text-black/50 text-sm leading-relaxed mb-8">
                {step.desc}
              </p>

              <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
                {step.tags.map((tag) => (
                  <li key={tag}>
                    <span className="px-3 py-1.5 rounded-full border border-black/10 text-black/50 text-[10px] tracking-wide">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-20 md:mt-28 text-center">
          <p className="text-black/30 text-[10px] tracking-[0.2em] uppercase block mb-4">
            Now accepting new projects
          </p>

          <h3 className="text-black text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold mb-8">
            Ready to build something meaningful?
          </h3>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-black text-white text-sm tracking-wide rounded-full hover:bg-black/90 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
}
