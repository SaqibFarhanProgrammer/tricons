import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = "service_ipl0fep";
    const PUBLIC_KEY = "i8EvYBjUBv8cmaaV9";
    const TEMPLATE_ID = "template_eoynzgo";

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
      reply_to: form.email,
    };

    emailjs.init(PUBLIC_KEY);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully!");
          setForm({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          setLoading(false);
          toast.error("Failed to send message.");
          console.error(error);
        }
      );
  };

  const inputClass =
    "w-full bg-transparent border-b border-border pb-4 pt-2 text-base focus:border-foreground focus:outline-none transition-all duration-300 placeholder:text-muted-foreground hover:border-muted-foreground/50";

  return (
    <section id="contact" className="section-spacing bg-secondary/30 relative">
      {/* VERIFICATION MARKER */}
      <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-[10px] font-bold uppercase tracking-widest z-50">
        System Active: EmailJS Integrated
      </div>

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label">GET IN TOUCH</p>
            <h2 className="section-title text-5xl font-light tracking-tight">Let's build something <span className="text-primary italic">great</span></h2>
            <p className="section-description mt-6 text-lg leading-relaxed">
              Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.
            </p>

            <div className="flex flex-col gap-10 mt-16">
              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                  <Mail size={20} strokeWidth={1.5} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Email us</span>
                  <span className="text-lg font-medium">hello@triconstudios.com</span>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                  <Phone size={20} strokeWidth={1.5} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Call us</span>
                  <span className="text-lg font-medium">+92 317 838 6880</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-10 bg-background/40 p-8 lg:p-12 rounded-3xl border border-border/50 backdrop-blur-sm"
          >
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground ml-1">Full Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground ml-1">Email Address</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground ml-1">Subject</label>
              <Select
                value={form.subject}
                onValueChange={(value) => setForm({ ...form, subject: value })}
              >
                <SelectTrigger className="w-full bg-transparent border-none border-b border-border rounded-none px-0 py-6 h-auto focus:ring-0 focus:border-foreground transition-all duration-300 text-base shadow-none hover:border-muted-foreground/50">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent className="bg-background/98 backdrop-blur-xl border-border/50 rounded-2xl overflow-hidden shadow-2xl">
                  <SelectItem value="web" className="py-4 px-6 focus:bg-primary focus:text-primary-foreground cursor-pointer transition-colors">Web Development</SelectItem>
                  <SelectItem value="mobile" className="py-4 px-6 focus:bg-primary focus:text-primary-foreground cursor-pointer transition-colors">Mobile App</SelectItem>
                  <SelectItem value="design" className="py-4 px-6 focus:bg-primary focus:text-primary-foreground cursor-pointer transition-colors">UI/UX Design</SelectItem>
                  <SelectItem value="consulting" className="py-4 px-6 focus:bg-primary focus:text-primary-foreground cursor-pointer transition-colors">Consulting</SelectItem>
                  {/* Ai Agents & Models */}
                  <SelectItem value="ai-agents" className="py-4 px-6 focus:bg-primary focus:text-primary-foreground cursor-pointer transition-colors">AI Agents</SelectItem>
                  {/* Video Editing */}
                  <SelectItem value="video-editing" className="py-4 px-6 focus:bg-primary focus:text-primary-foreground cursor-pointer transition-colors">Video Editing</SelectItem>
                  <SelectItem value="other" className="py-4 px-6 focus:bg-primary focus:text-primary-foreground cursor-pointer transition-colors">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground ml-1">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none min-h-[120px]`}
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="relative group bg-primary text-primary-foreground py-6 text-xs font-bold uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(var(--primary),0.3)] disabled:opacity-50"
            >
              <span className="relative z-10">{loading ? "Sending..." : "Send Message"}</span>
              <div className="absolute inset-0 bg-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
