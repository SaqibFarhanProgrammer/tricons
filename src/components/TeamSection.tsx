import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import s from "../assets/s.png";
import u from "../assets/usman.webp";
import h from "../assets/huzaifa.jpeg";
import umer from "../assets/umer.jpg";

const TeamSection = () => {
  const carouselRef = useRef(null);
  const autoScrollRef = useRef(null);

  const team = [
    {
      name: "Huzaifa",
      fullName: "Ali Huzaifa",
      role: "Co-Founder & Lead Software Engineer",
      badge: "Co-Founder",
      quote: "Great software starts with understanding the problem deeply.",
      num: "01",
      image: h,
      details: { skills: ["Node.js", "MongoDB", "Express", "System Design"] },
    },
    {
      name: "Saqib",
      fullName: "Saqib Farhan",
      role: "Co-Founder, Lead Developer & UI Designer",
      badge: "Co-Founder",
      quote: "Design is about making complex things feel simple.",
      num: "02",
      image: s,
      details: { skills: ["React", "JavaScript", "GSAP", "Tailwind CSS"] },
    },
    {
      name: "Usman",
      fullName: "Muhammad Usman",
      role: "Frontend Developer & Content Manager",
      badge: "Team",
      quote: "The best architecture scales without anyone noticing.",
      num: "03",
      image: u,
      details: { skills: ["HTML", "CSS", "JavaScript", "Content Management"] },
    },
    {
      name: "Umer",
      fullName: "Umer Farooq",
      role: "Creative Video Editor",
      badge: "Team",
      quote: "Content is crafted with purpose, pacing, and clarity.",
      num: "04",
      image: umer,
      details: { skills: ["Premiere Pro", "Photoshop", "Illustrator", "CapCut"] },
    },
  ];

  // Infinite Auto Scroll
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let isPaused = false;

    const start = () => {
      autoScrollRef.current = setInterval(() => {
        if (isPaused) return;

        carousel.scrollLeft += 0.5; // speed control

        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        }
      }, 16);
    };

    start();

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
    <section className="min-h-screen py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2 className="text-4xl font-bold">
          The people behind the code
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Buttons (manual scroll) */}
        <button
          onClick={() => (carouselRef.current.scrollLeft -= 350)}
          className="absolute -left-10 top-1/2 -translate-y-1/2 z-10"
        >
          <ArrowLeft />
        </button>

        <button
          onClick={() => (carouselRef.current.scrollLeft += 350)}
          className="absolute -right-10 top-1/2 -translate-y-1/2 z-10"
        >
          <ArrowRight />
        </button>

        {/* Infinite Track */}
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
              className="flex-shrink-0 w-[300px] bg-card border rounded-2xl overflow-hidden"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={member.image}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold">{member.fullName}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {member.role}
                </p>

                <p className="text-sm italic mb-3">"{member.quote}"</p>

              
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 