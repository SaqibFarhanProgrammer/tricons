import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "What technologies do you work with?", a: "We primarily work with React, Next.js, TypeScript, Node.js, React Native, and modern cloud platforms like AWS and Vercel. We choose the best tools for each project." },
  { q: "How long does a typical project take?", a: "Most projects take 4-12 weeks depending on complexity. We provide detailed timelines after our initial consultation and keep you updated throughout." },
  { q: "Do you provide ongoing support?", a: "Yes, we offer dedicated maintenance and support packages. We believe in long-term partnerships, not just one-off projects." },
  { q: "What is your pricing model?", a: "We work with both fixed-price and time-and-materials models. After understanding your requirements, we'll recommend the best approach for your budget." },
  { q: "Can you work with our existing team?", a: "Absolutely. We frequently embed with client teams, providing additional expertise and capacity while sharing knowledge and best practices." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-spacing">
      <div className="section-container">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Frequently asked questions</h2>
            <p className="section-description mt-4">
              Everything you need to know about working with us.
            </p>
          </motion.div>

          <div>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="border-b border-border"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <span className="text-lg md:text-xl font-semibold pr-4">{faq.q}</span>
                  <Plus
                    size={20}
                    className={`shrink-0 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground pb-6 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
