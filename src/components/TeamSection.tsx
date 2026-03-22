import { motion } from "framer-motion";

const team = [
  {
    name: "Ali Huzaifa",
    role: "LEAD DEVELOPER",
    quote: "Great software starts with understanding the problem deeply before writing a single line of code.",
    initials: "AH",
    num: "01",
  },
  {
    name: "Saqib Farhan",
    role: "UI/UX DESIGNER",
    quote: "Design isn't about decoration — it's about making complex things feel simple and intuitive.",
    initials: "SF",
    num: "02",
  },
  {
    name: "Muhammad Usman",
    role: "BACKEND ENGINEER",
    quote: "The best architecture is one that scales without anyone noticing it needed to.",
    initials: "MU",
    num: "03",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="section-spacing">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">OUR TEAM</p>
          <h2 className="section-title">The people behind the code</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="aspect-[3/4] bg-muted flex items-center justify-center overflow-hidden">
                <span className="text-6xl font-bold text-muted-foreground/20 group-hover:text-muted-foreground/40 transition-colors duration-500 select-none">
                  {member.initials}
                </span>
              </div>
              <div className="pt-6">
                <p className="text-xs text-muted-foreground">{member.num}</p>
                <h3 className="text-2xl font-semibold mt-1">{member.name}</h3>
                <p className="text-sm uppercase tracking-[0.1em] text-muted-foreground mt-1">{member.role}</p>
                <blockquote className="text-muted-foreground mt-4 border-l-2 border-border pl-4 italic leading-relaxed">
                  "{member.quote}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
