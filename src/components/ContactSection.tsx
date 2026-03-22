import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const inputClass =
    "w-full bg-transparent border-b border-border pb-4 pt-2 text-base focus:border-foreground focus:outline-none transition-colors duration-300 placeholder:text-muted-foreground";

  return (
    <section id="contact" className="section-spacing bg-secondary">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">GET IN TOUCH</p>
            <h2 className="section-title">Let's build something great</h2>
            <p className="section-description mt-4">
              Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.
            </p>

            <div className="flex flex-col gap-8 mt-12">
              <div className="flex items-center gap-4">
                <Mail size={20} strokeWidth={1.5} className="text-muted-foreground" />
                <span>hello@triconstudios.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} strokeWidth={1.5} className="text-muted-foreground" />
                <span>+92 317 838 6880</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={20} strokeWidth={1.5} className="text-muted-foreground" />
                <span>Pakistan</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-12">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'hsl(142, 71%, 45%)' }} />
              <span className="text-xs uppercase tracking-[0.05em] text-muted-foreground">Available for projects</span>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
          >
            <div>
              <label className="text-xs uppercase tracking-[0.1em] text-muted-foreground">Full Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.1em] text-muted-foreground">Email Address</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.1em] text-muted-foreground">Subject</label>
              <select
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className={`${inputClass} appearance-none cursor-pointer`}
              >
                <option value="">Select a subject</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile App</option>
                <option value="design">UI/UX Design</option>
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.1em] text-muted-foreground">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-y min-h-[120px]`}
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-primary-foreground py-5 text-sm font-medium uppercase tracking-[0.05em] hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
