import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="page-main flex flex-1 flex-col items-center justify-center px-6 text-center"
    >
      <p className="text-black/50 text-xs tracking-[0.2em] uppercase">404</p>
      <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tighter text-black text-balance">
        Page not found
      </h1>
      <p className="mt-4 text-black/60 max-w-md leading-relaxed">
        The page you are looking for does not exist or may have been moved.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-black text-white text-sm rounded-full hover:bg-black/90 transition-colors"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 border border-black/20 text-black text-sm rounded-full hover:bg-black/5 transition-colors"
        >
          Contact {site.name}
        </Link>
      </div>
    </main>
  );
}
