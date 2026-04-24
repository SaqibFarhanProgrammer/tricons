import { Link } from "react-router-dom";

const services = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Powerful Full-Stack Web Applications Built for Performance, Scalability, and Growth",
    details: "In today's digital-first world, your website or web application is often the first impression customers have of your business. We specialize in creating robust, fast, and scalable full-stack web solutions that handle high traffic, deliver seamless user experiences, and adapt as your business grows.",
    deliverables: [
      "Custom web applications and platforms tailored to your specific requirements",
      "High-performance websites optimized for speed, SEO, and conversion",
      "E-commerce platforms, SaaS products, dashboards, and complex web portals",
      "Progressive Web Apps (PWAs) that offer app-like experiences in the browser",
    ],
    technologies: [
      "React, TypeScript, Next.js",
      "Node.js",
    ],
    benefits: [
      "Lightning-fast load times and excellent Core Web Vitals scores",
      "Fully responsive and mobile-first designs",
      "Secure, scalable architecture that grows with your user base",
      "Ongoing maintenance and support after launch",
    ],
    closing: "We don't just code — we engineer digital experiences that help your business thrive online.",
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description: "Cross-Platform Mobile Apps with Native-Like Performance on iOS and Android",
    details: "Your customers are on their phones more than ever. We build beautiful, intuitive mobile applications that provide native-like experiences across both iOS and Android platforms — without the cost and time of building two separate apps.",
    deliverables: [
      "Consumer-facing apps for e-commerce, social, health, education, and more",
      "Enterprise mobile solutions for internal tools, field operations, and productivity",
      "Feature-rich apps with offline capabilities, push notifications, and integrations",
      "App Store and Google Play optimization for maximum visibility",
    ],
    technologies: [
      "React Native, Flutter",
      "iOS (Swift) and Android (Kotlin) where deep platform integration is needed",
    ],
    benefits: [
      "Consistent experience and branding across both platforms",
      "Faster development cycles and lower maintenance costs",
      "Access to device features like camera, GPS, payments, and biometrics",
      "Regular updates and performance optimizations post-launch",
    ],
    closing: "From idea validation to app store launch and beyond, we handle the entire mobile journey so you can focus on growing your user base.",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Research-Driven Designs that Create Intuitive, Beautiful, and Engaging User Experiences",
    details: "Great design isn't just about looking good — it's about making complex things simple and delightful to use. Our UI/UX process is deeply rooted in user research, ensuring every interface we create solves real problems and drives measurable results.",
    deliverables: [
      "Complete UI/UX strategy and design systems",
      "High-fidelity wireframes, prototypes, and interactive mockups",
      "User research, usability testing, and iterative improvements",
      "Accessible, inclusive designs that work for everyone",
    ],
    technologies: [
      "Figma for collaborative design and prototyping",
      "User Research & Testing, Design Systems, Information Architecture, User Journey Mapping",
    ],
    benefits: [
      "Higher engagement and better conversion rates",
      "Reduced user friction and intuitive navigation",
      "Scalable design systems for consistent branding",
      "Inclusive design that works for all users",
    ],
    closing: "Beautiful design + thoughtful experience = products people actually enjoy using.",
  },
  {
    id: "backend-apis",
    title: "Backend & APIs",
    description: "Robust, Reliable Server Architectures and APIs Built for Scale and Security",
    details: "Behind every great frontend or mobile app is a powerful backend that handles data, logic, security, and performance at scale. We design and build backend systems that are efficient, secure, and ready to support millions of users.",
    deliverables: [
      "Custom backend development and API integration",
      "Database design and optimization",
      "Authentication, authorization, and security implementations",
      "Microservices architecture and cloud deployments",
      "Third-party API integrations (payments, CRMs, analytics, etc.)",
    ],
    technologies: [
      "Node.js, Python",
      "PostgreSQL (and others as needed)",
      "RESTful APIs and GraphQL",
    ],
    benefits: [
      "High availability and fault-tolerant architecture",
      "Optimized for speed and cost-efficiency",
      "Strong focus on data security and compliance",
      "Easy scalability as your business expands",
    ],
    closing: "We build backends that work silently in the background while powering exceptional user experiences in the front.",
  },
  {
    id: "chatbot-development",
    title: "Chatbot Development",
    description: "AI-Powered Conversational Systems for Support, Engagement, and Lead Generation",
    details: "Modern businesses need instant communication. We build intelligent chatbots that understand user intent, respond naturally, and handle conversations at scale. From customer support to sales funnels, our chatbots reduce manual workload while improving response time and user satisfaction.",
    deliverables: [
      "Custom AI chatbots tailored for websites, apps, and messaging platforms",
      "Customer support automation with FAQ handling and ticket routing",
      "Lead generation bots that qualify users and capture valuable data",
      "Integration with CRMs, databases, and third-party services",
    ],
    technologies: [
      "LLMs (GPT-based), Natural Language Processing",
      "REST APIs, Webhooks, CRM Integration",
    ],
    benefits: [
      "24/7 automated support without human intervention",
      "Faster response times and improved user engagement",
      "Reduced operational costs for support teams",
      "Scalable communication handling thousands of users simultaneously",
    ],
    closing: "We design chatbots that don't just reply — they understand, engage, and convert users into customers.",
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    description: "Autonomous AI Systems that Perform Tasks, Make Decisions, and Execute Workflows",
    details: "AI agents go beyond simple automation. They can think, plan, and act based on goals. We build intelligent agents that can handle complex tasks like data processing, decision-making, and multi-step workflows, helping businesses operate faster and smarter.",
    deliverables: [
      "Custom AI agents designed for specific business workflows",
      "Task automation agents for research, reporting, and operations",
      "Multi-step agents that can plan and execute actions autonomously",
      "Integration with tools, APIs, and internal systems",
    ],
    technologies: [
      "LLMs, Prompt Engineering, Agent Frameworks",
      "APIs, Automation Tools, Backend Systems",
    ],
    benefits: [
      "Reduced manual effort in repetitive and complex tasks",
      "Faster decision-making with intelligent automation",
      "Improved productivity across teams",
      "Scalable systems that operate with minimal supervision",
    ],
    closing: "We build AI agents that don't just assist — they actively work alongside your business processes.",
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description: "Smart Automation Solutions that Streamline Workflows and Eliminate Repetitive Tasks",
    details: "Manual processes slow businesses down. We design AI-driven automation systems that connect your tools, handle repetitive workflows, and ensure operations run smoothly without constant human input.",
    deliverables: [
      "End-to-end workflow automation across business operations",
      "Integration between tools like CRMs, emails, databases, and apps",
      "Automated data processing, reporting, and notifications",
      "Custom automation pipelines tailored to your business logic",
    ],
    technologies: [
      "Zapier, Make (Integromat), Custom Scripts",
      "LLMs, APIs, Workflow Engines",
    ],
    benefits: [
      "Significant time savings on repetitive tasks",
      "Reduced human error in operations",
      "Better efficiency and operational consistency",
      "Ability to scale processes without increasing workforce",
    ],
    closing: "We turn time-consuming processes into intelligent systems that run automatically in the background.",
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
    <main className="min-h-screen w-full bg-white text-black">
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-6 sm:px-12 md:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6">
            What We Build
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Services that drive real growth
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl">
            From concept to launch and beyond, we deliver end-to-end digital solutions tailored to your unique business needs. Whether you're a startup looking to establish your online presence or an established company aiming to scale, we turn your vision into high-performing digital products.
          </p>
          <p className="mt-4 text-neutral-500 leading-relaxed max-w-3xl text-sm sm:text-base">
            We combine cutting-edge technology, user-centered design, and proven development practices to build solutions that don't just look great — they perform exceptionally well in today's competitive market.
          </p>
          <div className="mt-10">
 <Link
  to="/contact"
  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black text-xs uppercase tracking-[0.1em] hover:bg-black hover:text-white transition-all duration-300"
>
  Start a Project
</Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-6 sm:px-12 md:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">
            Our Core Services
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">
            Everything you need to build and scale
          </h2>

          <div className="mt-16 sm:mt-24 space-y-20 sm:space-y-32">
            {services.map((service, index) => (
              <article key={service.id} id={service.id} className="scroll-mt-24">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-medium">
                  {service.title}
                </h3>
                <p className="mt-2 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                  {service.description}
                </p>

                <p className="mt-6 text-neutral-500 leading-relaxed text-sm sm:text-base max-w-4xl">
                  {service.details}
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.15em] text-neutral-400 mb-4">
                      What We Deliver
                    </h4>
                    <ul className="space-y-3">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="text-neutral-600 text-sm leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-[0.15em] text-neutral-400 mb-4">
                      Technologies
                    </h4>
                    <ul className="space-y-3">
                      {service.technologies.map((tech, i) => (
                        <li key={i} className="text-neutral-600 text-sm leading-relaxed">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-[0.15em] text-neutral-400 mb-4">
                      Key Benefits
                    </h4>
                    <ul className="space-y-3">
                      {service.benefits.map((item, i) => (
                        <li key={i} className="text-neutral-600 text-sm leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="mt-10 text-neutral-500 italic text-sm sm:text-base">
                  {service.closing}
                </p>

                {index < services.length - 1 && (
                  <div className="mt-20 sm:mt-32 border-b border-neutral-100" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 px-6 sm:px-12 md:px-24 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">
            Why Partner With Us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">
            More than just developers and designers
          </h2>
          <p className="mt-6 text-neutral-500 text-base sm:text-lg leading-relaxed max-w-3xl">
            When you work with us, you get a dedicated team that treats your project like our own.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {whyPartner.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg sm:text-xl font-medium mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 rounded-full sm:py-32 px-6 sm:px-12 md:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-tight">
            Let's Build the Future Together
          </h2>
          <p className="mt-8 text-neutral-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Have a project in mind? Whether it's a new web app, mobile solution, complete redesign, or backend overhaul — we're ready to help.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
      
            <Link
              to="/work"
              className="inline rounded-full -flex items-center justify-center gap-2 px-6 py-3 border border-black text-xs uppercase tracking-[0.1em] hover:bg-black hover:text-white transition-colors duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}