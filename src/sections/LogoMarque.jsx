const brands = [
  { name: "NOVA", font: "font-['c']", style: "text-xl tracking-[0.25em]" },
  { name: "APEX", font: "font-['b']", style: "text-lg tracking-[0.4em] uppercase" },
  { name: "ORBIT", font: "font-['a']", style: "text-xl tracking-[0.15em]" },
  { name: "PRISM", font: "font-['c']", style: "text-2xl tracking-tight" },
  {
    name: "FLUX",
    font: "font-['Inter-regular']",
    style: "text-lg tracking-[0.3em] font-light",
  },
  { name: "VOXEL", font: "font-['b']", style: "text-xl tracking-[0.2em]" },
  { name: "HELIX", font: "font-['italic']", style: "text-2xl tracking-wide" },
  { name: "NEXUS", font: "font-['a']", style: "text-lg tracking-[0.35em]" },
  { name: "AURA", font: "font-['c']", style: "text-2xl tracking-[0.1em]" },
  {
    name: "CIPHER",
    font: "font-['Inter-regular']",
    style: "text-sm tracking-[0.5em] uppercase",
  },
  { name: "ZENITH", font: "font-['b']", style: "text-xl tracking-[0.3em]" },
  { name: "KINETIC", font: "font-['a']", style: "text-lg tracking-[0.2em]" },
  { name: "STRATOS", font: "font-['c']", style: "text-xl tracking-[0.15em]" },
  {
    name: "PULSE",
    font: "font-['Inter-regular']",
    style: "text-lg tracking-[0.4em] font-light",
  },
  { name: "VERTEX", font: "font-['b']", style: "text-xl tracking-[0.25em]" },
];

/** Server Component — CSS-only marquee (no client JS). */
export default function LogoMarquee() {
  const allBrands = [...brands, ...brands];

  return (
    <section
      aria-label="Brands we work with"
      className="relative w-full bg-white py-16 md:py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 mb-12 md:mb-16">
        <p className="text-black/60 text-xs md:text-sm tracking-[0.15em] uppercase">
          Trusted by industry leaders
        </p>
      </div>

      <div className="relative w-full">
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 h-full w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"
        />

        <ul className="marquee-track flex items-center w-max list-none m-0 p-0">
          {allBrands.map((brand, index) => (
            <li
              key={`${brand.name}-${index}`}
              className="flex items-center justify-center px-8 md:px-12 min-w-[140px] md:min-w-[180px]"
            >
              <span
                className={`${brand.font} ${brand.style} text-black/60 hover:text-black transition-colors duration-500 select-none`}
              >
                {brand.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
