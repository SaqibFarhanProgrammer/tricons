import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Tricon Studios transformed our vision into a product that exceeded every expectation. Their attention to detail is unmatched.",
    name: "Sarah Chen",
    role: "CEO, TECHCORP",
  },
  {
    quote: "Working with this team felt like having a technical co-founder. They truly understand both business and technology.",
    name: "James Miller",
    role: "FOUNDER, STARTUPX",
  },
  {
    quote: "The quality of code and design they deliver is on par with teams three times their size. Incredible work ethic.",
    name: "Ayesha Khan",
    role: "CTO, DATAFLOW",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-spacing bg-secondary">
      <div className="section-container max-w-3xl mx-auto text-center">
        <p className="section-label">TESTIMONIALS</p>

        <div className="relative min-h-[280px] flex items-center justify-center mt-12">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 text-[120px] font-bold text-foreground/5 leading-none select-none">"</span>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <p className="text-2xl md:text-[32px] font-light leading-[1.4]">
                {testimonials[current].quote}
              </p>
              <div className="w-16 h-px bg-border mx-auto my-8" />
              <p className="text-lg font-semibold">{testimonials[current].name}</p>
              <p className="text-sm uppercase tracking-[0.1em] text-muted-foreground mt-1">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-foreground w-6" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
