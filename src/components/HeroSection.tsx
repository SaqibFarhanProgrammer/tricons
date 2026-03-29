import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import light from "@/assets/light.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden py-20">
      {/* Background Light Effect */}
      <img 
        src={light} 
        alt="" 
        className="w-full h-full object-cover absolute inset-0 brightness-200 blur-[60px] sm:blur-[80px] lg:blur-[110px] -rotate-45 -z-10 opacity-60 pointer-events-none" 
      />

      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 sm:mb-6 z-10"
      >
        SOFTWARE SOLUTIONS AGENCY
      </motion.p>

      {/* Main Heading - Single responsive heading instead of 3 overlapping */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:leading-[1.1] tracking-tight max-w-4xl z-10 px-2"
      >
        Building smart solutions to simplify complex problems.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mt-6 sm:mt-8 leading-relaxed px-4 z-10"
      >
        An elite agency combining cutting-edge technology with exceptional design to deliver solutions that make a real difference.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-8 sm:mt-10 z-10 w-full sm:w-auto px-4"
      >
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="w-full sm:w-auto bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-sm font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors rounded-full"
        >
          Start a Project
        </button>
        <button
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          className="flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wider hover:opacity-70 transition-opacity group"
        >
          View Our Work
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-12 z-10"
      >
        <ArrowDown size={20} className="animate-bounce text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;