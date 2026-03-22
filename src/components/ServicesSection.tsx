import { motion } from "framer-motion";
import { Globe, Smartphone, Palette, Server, ShieldCheck, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Full-stack web applications built with modern frameworks for performance and scalability.",
    tags: ["React", "TypeScript", "Node.js", "Next.js"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile apps that deliver native-like experience on iOS and Android.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Research-driven design that creates intuitive, beautiful user experiences.",
    tags: ["Figma", "Prototyping", "User Research", "Design Systems"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description: "Robust server architectures and APIs built for reliability and scale.",
    tags: ["Node.js", "Python", "PostgreSQL", "REST/GraphQL"],
  },

];

const ServicesSection = () => {
  return (
    <section id="services" className="section-spacing bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">WHAT WE BUILD</p>
          <h2 className="section-title">Services that drive growth</h2>
          <p className="section-description mt-4">
            From concept to launch and beyond, we provide end-to-end solutions tailored to your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group p-8 border border-transparent hover:border-border hover:bg-background transition-all duration-500"
            >
              <service.icon size={48} strokeWidth={1} className="transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-2xl font-semibold mt-6">{service.title}</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs uppercase tracking-[0.05em] px-4 py-2 border border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
