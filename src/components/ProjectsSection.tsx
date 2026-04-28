import { motion } from "framer-motion";
import WealthPluse from "@/assets/WealthPluse.png"
import FinalWealth from "@/assets/FinalWealth.png"
import projectSplitty from "@/assets/project-splitty.jpg"
import SpikEdu from "@/assets/School2.png"


const projects = [
  {
    image: FinalWealth,
    category: "FINTECH PLATFORM",
    title: "WealthPulse",
    description:
      "WealthPulse is a AI-Powered financial dashboard for small businesses with real-time insights, expense tracking, and smart analytics. ",
    tech: ["Next Js", "Gemini AI", "Mongo Db"],
  },
  {
    image: projectSplitty,
    category: "UTILITY APP",
    title: "Splitly",
    description:
      "Smart group expense splitting system that automatically calculates balances and simplifies settlements.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    image: SpikEdu,
    category: "E-LEARNING PLATFORM",
    title: "SpikEdu",
    description: "SpikEdu is a comprehensive e-learning platform designed to connect students with expert teachers and provide a seamless learning experience.",
    tech: ["Next.js", "Nest Js", "Postgrace", "AWS", "Open AI"],
  }
  // {
  //   image: projectProjectio,
  //   category: "SAAS PLATFORM",
  //   title: "Projectio",
  //   description:
  //     "Advanced project management tool with Kanban boards, collaboration, analytics, and real-time tracking.",
  //   tech: ["Next.js", "TypeScript", "Tailwind"],
  // },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-spacing">
      <div className="section-container">


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">SELECTED WORK</p>
          <h2 className="section-title">Projects we're proud of</h2>
        </motion.div>


        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-16">

          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.15,
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
              }}
              className={`group relative overflow-hidden aspect-[4/3] cursor-pointer rounded-2xl ${i === 2 ? "md:col-span-2 md:aspect-[2/1]" : ""
                }`}
            >

              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
              />


              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />


              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">

                <p className="text-xs uppercase tracking-[0.1em] text-white/70">
                  {project.category}
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
                  {project.title}
                </h3>

                <p className="text-white/70 mt-2 max-w-md text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs uppercase tracking-[0.05em] text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>


              <span className="absolute top-6 left-8 text-[120px] font-light text-white/10 leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;