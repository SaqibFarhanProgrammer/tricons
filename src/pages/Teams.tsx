import { motion } from "framer-motion";
import {
  ArrowRight,
  Linkedin,
  Github,
  Twitter,
  Mail,
  Quote,
} from "lucide-react";
import Link from "react-router-dom";
import h from "@/assets/huzaifa3.jpg";
import u from "@/assets/u.jpg";
import s from "@/assets/s.png";
import umer from "@/assets/umer.jpg";
import ayan from "@/assets/ayan.jpeg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const team = [
  {
    id: "huzaifa",
    firstName: "Ali",
    lastName: "Huzaifa",
    image: h,
    role: "Co-Founder & Lead Software Engineer",
    shortRole: "Lead Engineer",
    bio: "Ali Huzaifa drives the technical vision at Tricon Studios. With deep expertise in system architecture and backend engineering, he ensures every solution we build is scalable, secure, and built to last. He believes that great software starts with understanding the problem deeply — not just writing code, but engineering systems that solve real business challenges.",
    quote: "Great software starts with understanding the problem deeply.",
    expertise: [
      "System Architecture",
      "Backend Engineering",
      "Database Design",
      "API Development",
      "DevOps",
    ],
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
    initials: "AH",
    color: "bg-neutral-900",
  },
  {
    id: "saqib",
    firstName: "Saqib",
    lastName: "Farhan",
    image: s,
    role: "Co-Founder, Lead Developer & UI Designer",
    shortRole: "Lead Developer & Designer",
    bio: "Saqib Farhan bridges the gap between engineering and design. As a full-stack developer with a designer's eye, he leads our development team while crafting intuitive user interfaces. His philosophy is simple: design is about making complex things feel simple. Every pixel and every line of code serves a purpose.",
    quote: "Design is about making complex things feel simple.",
    expertise: [
      "Full-Stack Development",
      "UI/UX Design",
      "React & Next.js",
      "TypeScript",
      "Design Systems",
    ],
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
    initials: "SF",
    color: "bg-neutral-800",
  },
  {
    id: "usman",
    firstName: "Muhammad",
    lastName: "Usman",
    image: u,
    role: "Frontend Developer & Content Manager",
    shortRole: "Frontend & Content",
    bio: "Muhammad Usman is the voice and interface of Tricon Studios. He builds the frontend experiences users interact with while managing content strategy and sales operations. From React components to client relationships, he ensures that what we build not only works beautifully but also communicates clearly. He also leads our sales and client management efforts.",
    quote: "The best architecture scales without anyone noticing.",
    expertise: [
      "Frontend Development",
      "React & Tailwind",
      "Content Strategy",
      "Client Relations",
      "Sales Management",
    ],
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
    initials: "MU",
    color: "bg-neutral-700",
  },
  {
    id: "umer",
    firstName: "Umer",
    lastName: "Farooq",
    image: umer,
    role: "Creative Video Editor",
    shortRole: "Video Production",
    bio: "Umer Farooq brings stories to life through video. As our creative video editor, he transforms raw footage into compelling narratives that capture attention and communicate brand value. Whether it's product demos, brand films, or social content, every frame is crafted with purpose, pacing, and clarity.",
    quote: "Content is crafted with purpose, pacing, and clarity.",
    expertise: [
      "Video Editing",
      "Motion Graphics",
      "Color Grading",
      "Storytelling",
      "Content Production",
    ],
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
    initials: "UF",
    color: "bg-neutral-600",
  },
  {
    id: "ayan",
    firstName: "Muhammad",
    lastName: "Ayan",
    image: ayan,
    role: "AI Engineer",
    shortRole: "AI Engineer",
    bio: "Muhammad Ayan focuses on building intelligent systems that automate workflows and enhance decision-making. He works on AI agents, automation pipelines, and integration of modern AI tools into real-world applications to make systems more efficient and scalable.",
    quote:
      "AI is not about replacing humans, it's about amplifying what they can do.",
    expertise: [
      "Python",
      "JavaScript / TypeScript",
      "OpenAI Agent SDK",
      "n8n",
      "AI Automation",
    ],
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
    initials: "MA",
    color: "bg-neutral-500",
  },
];

const stats = [
  { number: "4", label: "Founding Members" },
  { number: "50+", label: "Projects Delivered" },
  { number: "3+", label: "Years Together" },
  { number: "100%", label: "Remote First" },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen w-full bg-white text-black overflow-x-hidden">
      <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div {...fadeInUp}>
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-500 mb-4 sm:mb-6">
              The Team
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight -tracking-[2px] md:-tracking-[5px] text-black break-words">
              The people <span>behind the code</span>
            </h1>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl">
              We're a tight-knit team of engineers, designers, and creators who
              believe that exceptional software comes from exceptional people.
              Meet the minds shaping Tricon Studios.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-neutral-200"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl md:text-4xl font-light text-black">
                  {stat.number}
                </p>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-500 uppercase tracking-[0.1em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-neutral-200">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div {...fadeInUp} className="mb-12 sm:mb-20">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3 sm:mb-4">
              Founding Team
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black">
              Four minds, one mission
            </h2>
          </motion.div>

          <div className="space-y-16 sm:space-y-24">
            {team.map((member, index) => (
              <motion.article
                key={member.id}
                id={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`scroll-mt-24 sm:scroll-mt-32 ${index !== 0 ? "pt-16 sm:pt-24 border-t border-neutral-200" : ""}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-start">
                  <div className="md:col-span-4 w-full">
                    <div className="aspect-[3/4] bg-neutral-100 relative overflow-hidden group w-full">
                      <img
                        src={`${member.image}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                    </div>
                  </div>

                  <div className="md:col-span-8 w-full min-w-0">
                    <p className="text-xs sm:text-sm uppercase tracking-[0.15em] text-neutral-500 mb-2">
                      {member.shortRole}
                    </p>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-black mb-2 break-words">
                      {member.firstName} {member.lastName}
                    </h3>

                    <p className="text-neutral-400 text-xs sm:text-sm uppercase tracking-[0.1em] mb-6 sm:mb-8">
                      {member.role}
                    </p>

                    <p className="text-neutral-600 leading-relaxed text-base sm:text-lg mb-6 sm:mb-8">
                      {member.bio}
                    </p>

                    <div className="border-l-2 border-neutral-300 pl-4 sm:pl-6 py-2 mb-6 sm:mb-8">
                      <Quote size={18} className="text-neutral-300 mb-2" />
                      <p className="text-neutral-800 italic text-base sm:text-lg leading-relaxed">
                        {member.quote}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-neutral-500 mb-3 sm:mb-4">
                        Areas of Expertise
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs uppercase tracking-[0.05em] border border-neutral-200 text-neutral-600 hover:border-black hover:text-black transition-all duration-300 break-words"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div {...fadeInUp} className="mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3 sm:mb-4">
              Our Culture
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black">
              How we work together
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-3 sm:mb-4">
                01
              </p>
              <h3 className="text-lg sm:text-xl font-medium text-black mb-2 sm:mb-3">
                Engineering First
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Every decision starts with technical feasibility and long-term
                maintainability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-3 sm:mb-4">
                02
              </p>
              <h3 className="text-lg sm:text-xl font-medium text-black mb-2 sm:mb-3">
                Design With Purpose
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Every interface we create serves a business goal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-3 sm:mb-4">
                03
              </p>
              <h3 className="text-lg sm:text-xl font-medium text-black mb-2 sm:mb-3">
                Own The Outcome
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                We treat every project as our own from start to finish.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto text-center w-full">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-tight text-black break-words">
              Want to join <span className="text-neutral-400">the team?</span>
            </h2>
            <p className="mt-6 sm:mt-8 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              We're always looking for talented engineers, designers, and
              creators.
            </p>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center w-full">
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-full hover:bg-neutral-800 transition-all duration-300 text-xs sm:text-sm uppercase tracking-[0.1em]"
              >
                Get in Touch
                <ArrowRight size={16} />
              </a>
              <a
                href="mailto:careers@triconstudios.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border border-neutral-300 rounded-full hover:border-black transition-all duration-300 text-xs sm:text-sm uppercase tracking-[0.1em] text-black"
              >
                <Mail size={16} />
                careers@triconstudios.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
