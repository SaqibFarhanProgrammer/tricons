import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-black/10 bg-white relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto text-center">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.2em] text-black/60"
        >
          Let’s Work Together
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-6 leading-tight"
        >
          Have an idea? Let’s turn it into a product.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-black/70 mt-6 max-w-2xl mx-auto"
        >
          We build scalable digital solutions for startups and businesses that want real impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-4 rounded-full bg-black text-white text-sm uppercase tracking-wider hover:bg-neutral-800 transition-all"
          >
            Start a Project
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default CTASection;