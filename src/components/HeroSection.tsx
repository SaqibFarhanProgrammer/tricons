import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="section-label mb-6"
      >
        SOFTWARE SOLUTIONS AGENCY
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className="text-4xl md:text-6xl lg:text-[72px] font-bold leading-[1] tracking-[-0.02em] max-w-[900px]"
      >
        Building smart solutions to simplify complex problems.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-lg md:text-xl text-muted-foreground max-w-[600px] mt-8 leading-relaxed"
      >
        An elite agency combining cutting-edge technology with exceptional design to deliver solutions that make a real difference.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex items-center gap-4 mt-10"
      >
        <button
          className="bg-primary text-primary-foreground px-8 py-4 text-sm font-medium uppercase tracking-[0.05em] hover:bg-primary/90 transition-colors rounded-full"
        >
          Start a Project
        </button>
        <button
          className="flex items-center rounded-xl gap-2 text-sm font-medium uppercase tracking-[0.05em] hover:opacity-70 transition-opacity"
        >
          View Our Work
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12"
      >
        <ArrowDown size={20} className="animate-bounce-scroll text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;