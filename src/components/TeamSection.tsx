import { motion } from "framer-motion";
import s from "../assets/s.png";
import u from "../assets/u.jpg";
import h from "../assets/huzaifa.webp";

const team = [
  {
    name: "Ali Huzaifa",
    role: "Builds scalable systems and leads backend architecture.",
    quote:
      "Great software starts with understanding the problem deeply before writing a single line of code.",
    initials: "AH",
    num: "01",
    image: h,
  },
  {
    name: "Saqib Farhan",
    role: "Designs clean interfaces and develops modern web applications.",
    quote:
      "Design isn't about decoration — it's about making complex things feel simple and intuitive.",
    initials: "SF",
    num: "02",
    image: s,
  },
  {
    name: "Muhammad Usman",
    role: "Develops responsive interfaces and manages web content.",
    quote:
      "The best architecture is one that scales without anyone noticing it needed to.",
    initials: "MU",
    num: "03",
    image: u,
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
              <div className="aspect-[3/4] bg-muted overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`
      h-full w-full object-cover 
      object-center
      grayscale
      transition-all duration-500 
      group-hover:scale-145
    `}
                />
              </div>
              <div className="pt-6">
                <p className="text-xs text-muted-foreground">{member.num}</p>
                <h3 className="text-2xl font-semibold mt-1">{member.name}</h3>
                <p className="text-sm uppercase tracking-[0.1em] text-muted-foreground mt-1">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
