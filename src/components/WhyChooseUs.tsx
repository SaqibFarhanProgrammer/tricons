import { motion } from "framer-motion";
import { Zap, ShieldCheck, TrendingUp, Code2, Smartphone, Headphones } from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning Fast Delivery", description: "We ship 40% faster than industry average without compromising quality." },
  { icon: ShieldCheck, title: "Secure by Default", description: "Security baked into every layer — from code to infrastructure." },
  { icon: TrendingUp, title: "Built to Scale", description: "Architectures designed to grow seamlessly with your user base." },
  { icon: Code2, title: "Clean Code", description: "Maintainable, well-documented codebases that your team can extend." },
  { icon: Smartphone, title: "Mobile-First Design", description: "Every interface optimized for touch and small screens first." },
  { icon: Headphones, title: "Ongoing Support", description: "Dedicated support and maintenance long after launch day." },
];

const WhyChooseUs = () => {
  return (
    <section className="section-spacing bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-[600px] mx-auto"
        >
          <p className="section-label">WHY TRICON</p>
          <h2 className="section-title">Why choose us</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group text-center"
            >
              <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center mx-auto group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <f.icon size={24} strokeWidth={1.5} className="group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mt-6">{f.title}</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
