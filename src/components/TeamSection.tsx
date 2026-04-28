import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import s from "../assets/s.png";
import u from "../assets/u.jpg";
import h from "../assets/huzaifa3.jpg";
import umer from "../assets/umer.jpg";
import ayan from "@/assets/ayan.jpeg";

const TeamSection = () => {
  const carouselRef = useRef(null);
  const autoScrollRef = useRef(null);

  const team = [
    {
      name: "Huzaifa",
      fullName: "Ali Huzaifa",
      role: "Co-Founder & Lead Software Engineer",
      quote: "Great software starts with understanding the problem deeply.",
      image: h,
    },
    {
      name: "Saqib",
      fullName: "Saqib Farhan",
      role: "Co-Founder, Lead Developer & UI Designer",
      quote: "Design is about making complex things feel simple.",
      image: s,
    },
    {
      name: "Usman",
      fullName: "Muhammad Usman",
      role: "Frontend Developer & Content Manager",
      quote: "The best architecture scales without anyone noticing.",
      image: u,
    },
    {
      name: "Umer",
      fullName: "Umer Farooq",
      role: "Creative Video Editor",
      quote: "Content is crafted with purpose, pacing, and clarity.",
      image: umer,
    },
    {
      name: "Ayan",
      fullName: "Muhammad Ayan",
      role: "AI Engineer",
      quote: "AI systems are built to automate intelligence, not replace it.",
      image: ayan,
    },
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let isPaused = false;

    autoScrollRef.current = setInterval(() => {
      if (isPaused) return;

      carousel.scrollLeft += 0.5;

      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      }
    }, 16);

    const pause = () => (isPaused = true);
    const resume = () => (isPaused = false);

    carousel.addEventListener("mouseenter", pause);
    carousel.addEventListener("mouseleave", resume);

    return () => {
      clearInterval(autoScrollRef.current);
      carousel.removeEventListener("mouseenter", pause);
      carousel.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <section id="team" className="min-h-screen py-20 px-4 ">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          The people behind the code
        </motion.h2>
      </div>

      <div className="w-full   mx-auto relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-[15%] md:w-[10%] z-20 bg-gradient-to-r from-background via-background/80 to-transparent backdrop-blur-[2px]" />

        <div className="pointer-events-none absolute right-0 top-0 h-full w-[15%] md:w-[10%] z-20 bg-gradient-to-l from-background via-background/80 to-transparent backdrop-blur-[2px]" />

        <button
          onClick={() => (carouselRef.current.scrollLeft -= 350)}
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-30 bg-background border rounded-full p-2"
        >
          <ArrowLeft />
        </button>

        <button
          onClick={() => (carouselRef.current.scrollLeft += 350)}
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-30 bg-background border rounded-full p-2"
        >
          <ArrowRight />
        </button>

        <div
          ref={carouselRef}
          className="flex gap-8 overflow-x-auto px-4"
          style={{
            scrollBehavior: "auto",
            scrollbarWidth: "none",
          }}
        >
          {[...team, ...team].map((member, index) => (
            <div
              key={index}
              className="group flex-shrink-0 w-[300px] bg-card border rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold">{member.fullName}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {member.role}
                </p>
                <p className="text-sm italic text-muted-foreground">
                  "{member.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
