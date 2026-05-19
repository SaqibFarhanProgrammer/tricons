/**
 * Consistent hero block for inner pages (clears fixed navbar via parent .page-main).
 */
export default function PageHeader({ eyebrow, title, description }) {
  return (
    <header className="max-w-5xl mx-auto">
      {eyebrow ? (
        <p className="text-black/50 text-xs tracking-[0.2em] uppercase font-medium">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-black text-4xl md:text-6xl font-semibold tracking-tighter leading-[1.05] mt-6 text-balance">
        {title}
      </h1>
      {description ? (
        <p className="mt-6 md:mt-8 text-black/70 text-lg leading-relaxed max-w-3xl">
          {description}
        </p>
      ) : null}
    </header>
  );
}
