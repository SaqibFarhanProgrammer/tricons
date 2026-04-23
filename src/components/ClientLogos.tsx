const logos = ["TechCorp", "DesignLab", "StartupX", "CloudBase", "DataFlow", "AppWorks"];

const ClientLogos = () => {
  return (
    <section className="border-y text-black border-divider py-12 overflow-hidden">
      <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
        {[...logos, ...logos].map((logo, i) => (
          <span
            key={i}
            className="text-2xl font-bold t 0uppercase tracking-[0.15em] mx-12 md:mx-16 select-none"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;
