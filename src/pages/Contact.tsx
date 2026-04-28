import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@triconstudios.com",
    href: "mailto:hello@triconstudios.com",
    description: "We respond within 24 hours",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 317 838 6880",
    href: "tel:+923178386880",
    description: "Mon - Sat, 9am - 6pm",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pakistan",
    href: "#",
    description: "Remote worldwide",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Open for projects",
    href: "#",
    description: "Currently accepting work",
  },
];

const processSteps = [
  { number: "01", title: "Discovery", desc: "Understand goals." },
  { number: "02", title: "Planning", desc: "Define scope." },
  { number: "03", title: "Design", desc: "UI system & wireframes." },
  { number: "04", title: "Development", desc: "Build in sprints." },
  { number: "05", title: "Launch", desc: "Deploy & optimize." },
  { number: "06", title: "Support", desc: "Maintain & scale." },
];

const subjects = [
  "Web Development",
  "Mobile App",
  "UI/UX Design",
  "AI / Automation",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const SERVICE_ID = "service_ipl0fep";
  const PUBLIC_KEY = "i8EvYBjUBv8cmaaV9";
  const TEMPLATE_ID = "template_eoynzgo";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.subject) return alert("Please select a subject");

    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email,
    };

    emailjs.init(PUBLIC_KEY);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const btnPrimary =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-800 transition-all duration-300 text-sm uppercase tracking-[0.1em] disabled:opacity-50";

  const iconBtn =
    "p-3 rounded-full border border-black/10 hover:bg-black hover:text-white transition-all duration-300";

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="pt-28 md:pt-32 pb-16 px-4 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp}>
            <p className="text-xs uppercase tracking-[0.2em] text-black/60">
              Contact
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold mt-6 leading-tight">
              Let’s build something <span>real</span>
            </h1>
            <p className="mt-6 text-black/70 max-w-3xl">
              Share your idea. We convert it into a scalable digital product.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-12 lg:px-24 border-t border-black/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-start gap-4 p-4 border border-black/10 rounded-2xl hover:border-black transition"
              >
                <div className={iconBtn}>
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-black/60 uppercase">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                  <p className="text-sm text-black/60">{item.description}</p>
                </div>
              </a>
            ))}

            <div className="p-5 border border-black/10 rounded-2xl bg-black/5">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare size={16} />
                <p className="text-sm font-medium">Fast Response</p>
              </div>
              <p className="text-sm text-black/70">Replies within 24 hours.</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-black/60 mb-6">
              Send Message
            </p>

            {submitted ? (
              <div className="p-10 border border-black/10 rounded-2xl text-center">
                <CheckCircle2 className="mx-auto mb-4" size={40} />
                <h3 className="text-xl font-medium">Message Sent</h3>
                <p className="text-black/60 mt-2">We will contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    required
                    placeholder="Your Name"
                    className="px-6 py-3 rounded-full border border-black/10 bg-white focus:outline-none focus:border-black transition-all"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="px-6 py-3 rounded-full border border-black/10 bg-white focus:outline-none focus:border-black transition-all"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                {/* Custom Animated Dropdown */}
                <div className="relative">
                  <div
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full px-6 py-3 rounded-full border transition-all cursor-pointer flex justify-between items-center ${isDropdownOpen ? "border-black" : "border-black/10"
                      } bg-white`}
                  >
                    <span className={!formData.subject ? "text-black/40" : "text-black text-sm"}>
                      {formData.subject || "Select Subject"}
                    </span>
                    <motion.div
                      animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={18} className="text-black/40" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <>
                        <div
                          className="fixed inset-0 z-10"
                          onClick={() => setIsDropdownOpen(false)}
                        />
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 5 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute z-20 w-full bg-white border border-black/10 rounded-2xl shadow-xl overflow-hidden py-2"
                        >
                          {subjects.map((item) => (
                            <div
                              key={item}
                              className="px-6 py-3 hover:bg-black hover:text-white transition-colors cursor-pointer text-sm"
                              onClick={() => {
                                setFormData({ ...formData, subject: item });
                                setIsDropdownOpen(false);
                              }}
                            >
                              {item}
                            </div>
                          ))}
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>

                <textarea
                  required
                  rows={6}
                  placeholder="Your message"
                  className="w-full px-6 py-4 rounded-2xl border border-black/10 bg-white resize-none focus:outline-none focus:border-black transition-all"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />

                <button type="submit" disabled={loading} className={btnPrimary}>
                  {loading ? "Sending..." : "Send Message"} <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-12 lg:px-24 bg-black/[0.02] border-t border-black/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light mb-10">Our Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="p-6 border border-black/10 rounded-2xl bg-white hover:border-black transition-colors"
              >
                <p className="text-3xl text-black/20">{step.number}</p>
                <h3 className="font-medium mt-2">{step.title}</h3>
                <p className="text-sm text-black/60 mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-12 lg:px-24 text-center border-t border-black/10">
        <h2 className="text-3xl md:text-5xl font-light">Ready to start?</h2>
        <p className="text-black/60 mt-4 max-w-xl mx-auto">
          Let’s build something meaningful.
        </p>
        <a
          href="mailto:hello@triconstudios.com"
          className={btnPrimary + " mt-8"}
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}