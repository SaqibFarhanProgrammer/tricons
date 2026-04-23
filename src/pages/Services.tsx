import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Palette,
  Server,
  ArrowRight,
  CheckCircle2,
  Workflow,
  Cpu,
  Bot,
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const services = [
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    subtitle:
      "Powerful Full-Stack Web Applications Built for Performance, Scalability, and Growth",
    description:
      "In today's digital-first world, your website or web application is often the first impression customers have of your business. We specialize in creating robust, fast, and scalable full-stack web solutions that handle high traffic, deliver seamless user experiences, and adapt as your business grows.",
    deliverables: [
      "Custom web applications and platforms tailored to your specific requirements",
      "High-performance websites optimized for speed, SEO, and conversion",
      "E-commerce platforms, SaaS products, dashboards, and complex web portals",
      "Progressive Web Apps (PWAs) that offer app-like experiences in the browser",
    ],
    technologies: [
      { category: "Frontend", items: "React, TypeScript, Next.js" },
      { category: "Backend", items: "Node.js" },
    ],
    benefits: [
      "Lightning-fast load times and excellent Core Web Vitals scores",
      "Fully responsive and mobile-first designs",
      "Secure, scalable architecture that grows with your user base",
      "Ongoing maintenance and support after launch",
    ],
    closing:
      "We don't just code — we engineer digital experiences that help your business thrive online.",
  },
  {
    id: "mobile-development",
    icon: Smartphone,
    title: "Mobile Development",
    subtitle:
      "Cross-Platform Mobile Apps with Native-Like Performance on iOS and Android",
    description:
      "Your customers are on their phones more than ever. We build beautiful, intuitive mobile applications that provide native-like experiences across both iOS and Android platforms — without the cost and time of building two separate apps.",
    deliverables: [
      "Consumer-facing apps for e-commerce, social, health, education, and more",
      "Enterprise mobile solutions for internal tools, field operations, and productivity",
      "Feature-rich apps with offline capabilities, push notifications, and integrations",
      "App Store and Google Play optimization for maximum visibility",
    ],
    technologies: [
      { category: "Cross-Platform", items: "React Native, Flutter" },
      {
        category: "Native",
        items:
          "iOS (Swift) and Android (Kotlin) where deep platform integration is needed",
      },
    ],
    benefits: [
      "Consistent experience and branding across both platforms",
      "Faster development cycles and lower maintenance costs",
      "Access to device features like camera, GPS, payments, and biometrics",
      "Regular updates and performance optimizations post-launch",
    ],
    closing:
      "From idea validation to app store launch and beyond, we handle the entire mobile journey so you can focus on growing your user base.",
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    subtitle:
      "Research-Driven Designs that Create Intuitive, Beautiful, and Engaging User Experiences",
    description:
      "Great design isn't just about looking good — it's about making complex things simple and delightful to use. Our UI/UX process is deeply rooted in user research, ensuring every interface we create solves real problems and drives measurable results.",
    deliverables: [
      "Complete UI/UX strategy and design systems",
      "High-fidelity wireframes, prototypes, and interactive mockups",
      "User research, usability testing, and iterative improvements",
      "Accessible, inclusive designs that work for everyone",
    ],
    technologies: [
      {
        category: "Tools",
        items: "Figma for collaborative design and prototyping",
      },
      {
        category: "Approach",
        items:
          "User Research & Testing, Design Systems, Information Architecture, User Journey Mapping",
      },
    ],
    benefits: [
      "Higher engagement and better conversion rates",
      "Reduced user friction and intuitive navigation",
      "Scalable design systems for consistent branding",
      "Inclusive design that works for all users",
    ],
    closing:
      "Beautiful design + thoughtful experience = products people actually enjoy using.",
  },
  {
    id: "backend-apis",
    icon: Server,
    title: "Backend & APIs",
    subtitle:
      "Robust, Reliable Server Architectures and APIs Built for Scale and Security",
    description:
      "Behind every great frontend or mobile app is a powerful backend that handles data, logic, security, and performance at scale. We design and build backend systems that are efficient, secure, and ready to support millions of users.",
    deliverables: [
      "Custom backend development and API integration",
      "Database design and optimization",
      "Authentication, authorization, and security implementations",
      "Microservices architecture and cloud deployments",
      "Third-party API integrations (payments, CRMs, analytics, etc.)",
    ],
    technologies: [
      { category: "Backend Frameworks", items: "Node.js, Python" },
      { category: "Databases", items: "PostgreSQL (and others as needed)" },
      { category: "API Styles", items: "RESTful APIs and GraphQL" },
    ],
    benefits: [
      "High availability and fault-tolerant architecture",
      "Optimized for speed and cost-efficiency",
      "Strong focus on data security and compliance",
      "Easy scalability as your business expands",
    ],
    closing:
      "We build backends that work silently in the background while powering exceptional user experiences in the front.",
  },
  {
    id: "chatbot-development",
    icon: Bot,
    title: "Chatbot Development",
    subtitle:
      "AI-Powered Conversational Systems for Support, Engagement, and Lead Generation",
    description:
      "Modern businesses need instant communication. We build intelligent chatbots that understand user intent, respond naturally, and handle conversations at scale. From customer support to sales funnels, our chatbots reduce manual workload while improving response time and user satisfaction.",
    deliverables: [
      "Custom AI chatbots tailored for websites, apps, and messaging platforms",
      "Customer support automation with FAQ handling and ticket routing",
      "Lead generation bots that qualify users and capture valuable data",
      "Integration with CRMs, databases, and third-party services",
    ],
    technologies: [
      {
        category: "AI & NLP",
        items: "LLMs (GPT-based), Natural Language Processing",
      },
      {
        category: "Integration",
        items: "REST APIs, Webhooks, CRM Integration",
      },
    ],
    benefits: [
      "24/7 automated support without human intervention",
      "Faster response times and improved user engagement",
      "Reduced operational costs for support teams",
      "Scalable communication handling thousands of users simultaneously",
    ],
    closing:
      "We design chatbots that don’t just reply — they understand, engage, and convert users into customers.",
  },
  {
    id: "ai-agents",
    icon: Cpu,
    title: "AI Agents",
    subtitle:
      "Autonomous AI Systems that Perform Tasks, Make Decisions, and Execute Workflows",
    description:
      "AI agents go beyond simple automation. They can think, plan, and act based on goals. We build intelligent agents that can handle complex tasks like data processing, decision-making, and multi-step workflows, helping businesses operate faster and smarter.",
    deliverables: [
      "Custom AI agents designed for specific business workflows",
      "Task automation agents for research, reporting, and operations",
      "Multi-step agents that can plan and execute actions autonomously",
      "Integration with tools, APIs, and internal systems",
    ],
    technologies: [
      {
        category: "Core AI",
        items: "LLMs, Prompt Engineering, Agent Frameworks",
      },
      {
        category: "Execution",
        items: "APIs, Automation Tools, Backend Systems",
      },
    ],
    benefits: [
      "Reduced manual effort in repetitive and complex tasks",
      "Faster decision-making with intelligent automation",
      "Improved productivity across teams",
      "Scalable systems that operate with minimal supervision",
    ],
    closing:
      "We build AI agents that don’t just assist — they actively work alongside your business processes.",
  },
  {
    id: "ai-automation",
    icon: Workflow,
    title: "AI Automation",
    subtitle:
      "Smart Automation Solutions that Streamline Workflows and Eliminate Repetitive Tasks",
    description:
      "Manual processes slow businesses down. We design AI-driven automation systems that connect your tools, handle repetitive workflows, and ensure operations run smoothly without constant human input.",
    deliverables: [
      "End-to-end workflow automation across business operations",
      "Integration between tools like CRMs, emails, databases, and apps",
      "Automated data processing, reporting, and notifications",
      "Custom automation pipelines tailored to your business logic",
    ],
    technologies: [
      {
        category: "Automation Tools",
        items: "Zapier, Make (Integromat), Custom Scripts",
      },
      { category: "AI Integration", items: "LLMs, APIs, Workflow Engines" },
    ],
    benefits: [
      "Significant time savings on repetitive tasks",
      "Reduced human error in operations",
      "Better efficiency and operational consistency",
      "Ability to scale processes without increasing workforce",
    ],
    closing:
      "We turn time-consuming processes into intelligent systems that run automatically in the background.",
  },
];

const whyPartner = [
  {
    title: "End-to-End Ownership",
    desc: "From initial discovery workshops to post-launch support and iterations.",
  },
  {
    title: "Agile & Transparent Process",
    desc: "Regular updates, demos, and collaboration at every step.",
  },
  {
    title: "Focus on Results",
    desc: "We measure success by your business growth — increased users, revenue, and efficiency.",
  },
  {
    title: "Long-Term Partnership",
    desc: "Many clients stay with us for ongoing enhancements and new projects.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp}>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-950 mb-6">
              What We Build
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight -tracking-[5px]">
              Services that drive <span className="">real growth</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-black leading-relaxed max-w-3xl">
              From concept to launch and beyond, we deliver end-to-end digital
              solutions tailored to your unique business needs. Whether
              you&apos;re a startup looking to establish your online presence or
              an established company aiming to scale, we turn your vision into
              high-performing digital products.
            </p>
            <p className="mt-6 text-neutral-950 leading-relaxed max-w-3xl">
              We combine cutting-edge technology, user-centered design, and
              proven development practices to build solutions that don&apos;t
              just look great — they perform exceptionally well in today&apos;s
              competitive market.
            </p>
            <div className="mt-12">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 border border-black/10 hover:border-black hover:bg-black hover:text-white transition-all duration-300 text-sm uppercase tracking-[0.1em]"
              >
                Start a Project
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-black/5">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="mb-20">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-950 mb-4">
              Our Core Services
            </p>
            <h2 className="text-3xl md:text-4xl font-light">
              Everything you need to build and scale
            </h2>
          </motion.div>

          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.article
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="scroll-mt-32"
              >
                <div className="flex items-start gap-6 mb-10">
                  <div className="p-4 border border-black/10 bg-neutral-95">
                    <service.icon
                      size={32}
                      strokeWidth={1}
                      className="text-black"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-neutral-950 text-lg leading-relaxed max-w-2xl">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-neutral-950 leading-relaxed text-lg mb-12 max-w-4xl">
                  {service.description}
                </p>

                <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                  <div>
                    <h4 className="text-sm uppercase tracking-[0.15em] text-neutral-950 mb-6">
                      What We Deliver
                    </h4>
                    <ul className="space-y-4">
                      {service.deliverables.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-neutral-950 leading-relaxed"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-1 shrink-0 text-neutral-950"
                          />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm uppercase tracking-[0.15em] text-neutral-950 mb-6">
                      Technologies
                    </h4>
                    <div className="space-y-4">
                      {service.technologies.map((tech, i) => (
                        <div key={i}>
                          <p className="text-xs uppercase tracking-[0.1em] text-neutral-950 mb-1">
                            {tech.category}
                          </p>
                          <p className="text-neutral-950 text-sm">
                            {tech.items}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm uppercase tracking-[0.15em] text-neutral-950 mb-6">
                      Key Benefits
                    </h4>
                    <ul className="space-y-4">
                      {service.benefits.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-neutral-950 leading-relaxed"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-1 shrink-0 text-neutral-950"
                          />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-black/5">
                  <p className="text-neutral-950 italic text-lg">
                    {service.closing}
                  </p>
                </div>

                {index < services.length - 1 && (
                  <div className="mt-32 border-b border-black/5" />
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-black/5 bg-neutral-95">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-950 mb-4">
              Why Partner With Us
            </p>
            <h2 className="text-3xl md:text-4xl font-light">
              More than just developers and designers
            </h2>
            <p className="mt-6 text-neutral-950 text-lg leading-relaxed max-w-3xl">
              When you work with us, you get a dedicated team that treats your
              project like our own.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {whyPartner.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <h3 className="text-xl font-light mb-3">{item.title}</h3>
                <p className="text-neutral-950 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 lg:px-24 border-t border-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight">
              Let&apos;s Build the Future{" "}
              <span className="text-neutral-950">Together</span>
            </h2>
            <p className="mt-8 text-neutral-950 text-lg leading-relaxed max-w-2xl mx-auto">
              Have a project in mind? Whether it&apos;s a new web app, mobile
              solution, complete redesign, or backend overhaul — we&apos;re
              ready to help.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white hover:bg-neutral-950 transition-all duration-300 text-sm uppercase tracking-[0.1em]"
              >
                Get a Free Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-black/10 hover:border-black transition-all duration-300 text-sm uppercase tracking-[0.1em]"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
