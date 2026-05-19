const brands = [
  "NOVA",
  "APEX",
  "ORBIT",
  "PRISM",
  "FLUX",
  "VOXEL",
  "HELIX",
  "NEXUS",
  "AURA",
  "CIPHER",
  "ZENITH",
  "KINETIC",
  "STRATOS",
  "PULSE",
  "VERTEX",
];

/** Server Component — CSS-only marquee (no client JS). */
export default function LogoMarquee() {
  const allBrands = [...brands, ...brands];

  return (
    <section
      aria-label="Brands we work with"
      className="relative w-full bg-white py-16 md:py-24 overflow-hidden border-y border-black/5"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 mb-10 md:mb-12">
        <p className="text-black/50 text-xs tracking-[0.2em] uppercase">
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
          {allBrands.map((name, index) => (
            <li
              key={`${name}-${index}`}
              className="flex items-center justify-center px-10 md:px-14 min-w-[120px] md:min-w-[160px]"
            >
              <span className="text-sm md:text-base font-medium tracking-[0.25em] text-black/40 hover:text-black/70 transition-colors duration-500 select-none uppercase">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
