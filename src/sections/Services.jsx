import React from "react";

const services = [
  {
    title: "Website Development",
    desc: "Modern, fast, and responsive websites using React and Next.js with scalable architecture.",
  },
  {
    title: "Full Stack Web Apps",
    desc: "Complete web applications with authentication, dashboards, APIs, and database integration.",
  },
  {
    title: "UI/UX Design",
    desc: "Clean, conversion-focused interfaces designed with modern usability principles.",
  },
  {
    title: "AI Solutions",
    desc: "Chatbots, AI assistants, and intelligent systems integrated into real products.",
  },
  {
    title: "Automation Systems",
    desc: "Business workflows and tools that reduce manual effort and increase efficiency.",
  },
  {
    title: "Digital Marketing",
    desc: "Performance-based ads and growth strategies focused on real ROI.",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-white px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">

        <span className="text-black/40 text-[10px] tracking-[0.2em] uppercase">
          Services
        </span>

        <h2 className="text-black text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mt-6">
          What we do to help your business grow
        </h2>

        <p className="mt-6 text-black/60 text-base md:text-lg max-w-3xl leading-relaxed">
          We design and build digital products that are fast, scalable, and focused on real business outcomes.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {services.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-black/10 hover:border-black/20 transition-all duration-300"
            >
              <h3 className="text-black text-lg font-medium">
                {item.title}
              </h3>

              <p className="text-black/60 text-sm mt-3 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}