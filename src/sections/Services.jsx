import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section
      aria-labelledby="services-heading"
      className="w-full bg-white px-6 md:px-10 py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-black/40 text-[10px] tracking-[0.2em] uppercase">
          Services
        </p>

        <h2
          id="services-heading"
          className="text-black text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mt-6"
        >
          What we do to help your business grow
        </h2>

        <p className="mt-6 text-black/60 text-base md:text-lg max-w-3xl leading-relaxed">
          We design and build digital products that are fast, scalable, and
          focused on real business outcomes.
        </p>

        <ul className="grid md:grid-cols-2 gap-6 mt-16 list-none m-0 p-0">
          {services.map((item) => (
            <li
              key={item.title}
              className="p-8 rounded-2xl border border-black/10 hover:border-black/20 transition-all duration-300"
            >
              <h3 className="text-black text-lg font-medium">{item.title}</h3>
              <p className="text-black/60 text-sm mt-3 leading-relaxed">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-12">
          <Link
            href="/services"
            className="text-black text-sm font-medium underline-offset-4 hover:underline"
          >
            View all services
          </Link>
        </p>
      </div>
    </section>
  );
}
