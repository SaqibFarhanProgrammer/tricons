
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

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
    description: "Mon - Sat, 9am - 6pm PK",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pakistan",
    href: "#",
    description: "Available for remote projects worldwide",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Available for projects",
    href: "#",
    description: "Currently accepting new clients",
  },
];

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Most web projects take 4-8 weeks from kickoff to launch. Mobile apps typically range from 8-12 weeks. Complex SaaS platforms or AI integrations may take 12-16 weeks. We always provide a detailed timeline during our discovery phase.",
  },
  {
    question: "How do you handle project pricing?",
    answer:
      "We offer both fixed-price and retainer models depending on project scope. After our initial consultation, we provide a detailed proposal with transparent breakdowns. No hidden fees — ever.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Absolutely. We work with clients across the US, UK, UAE, and Europe. Our team is comfortable with async communication across time zones, and we schedule overlapping hours for important meetings.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in the modern JavaScript ecosystem: Next.js, React, TypeScript, Node.js, and PostgreSQL. For AI and automation, we work with GPT-based LLMs, LangChain, and custom agent frameworks. For mobile, we use React Native and Flutter.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes, we offer monthly maintenance retainers that include bug fixes, performance monitoring, security updates, and minor feature enhancements. Most of our clients stay with us long-term for continuous improvements.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    desc: "We start with a deep dive into your business, goals, and technical requirements. This includes stakeholder interviews, competitor analysis, and feasibility assessment.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    desc: "Based on discovery insights, we define the architecture, tech stack, timeline, and milestones. You get a detailed proposal with scope, deliverables, and investment.",
  },
  {
    number: "03",
    title: "Design & Prototyping",
    desc: "We create wireframes, high-fidelity mockups, and interactive prototypes. Every screen is reviewed and approved before we write a single line of code.",
  },
  {
    number: "04",
    title: "Development",
    desc: "Our engineers build your product using agile sprints. You get weekly demos, access to staging environments, and full transparency into progress.",
  },
  {
    number: "05",
    title: "Testing & Launch",
    desc: "Rigorous QA, performance optimization, and security audits. We handle deployment, domain setup, and monitor the launch in real-time.",
  },
  {
    number: "06",
    title: "Support & Scale",
    desc: "Post-launch monitoring, bug fixes, and iterative improvements. We help you scale as your user base grows and your business evolves.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp}>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-950 mb-6">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight -tracking-[5px] text-black">
              Let&apos;s build something{" "}
              <span className="text-neutral-950">great</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-neutral-950 leading-relaxed max-w-3xl">
              Have a project in mind? We&apos;d love to hear about it. Drop us a 
              message and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Left Column - Contact Info */}
            <motion.div
              {...fadeInUp}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-8">
                  Contact Information
                </p>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-start gap-4 p-4 border border-neutral-200 hover:border-black transition-all duration-300"
                    >
                      <div className="p-2 border border-neutral-200 group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                        <item.icon size={18} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.1em] text-neutral-500 mb-1">
                          {item.label}
                        </p>
                        <p className="text-black font-medium">{item.value}</p>
                        <p className="text-neutral-500 text-sm mt-1">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="p-6 bg-neutral-50 border border-neutral-200">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare size={18} className="text-neutral-500" />
                  <p className="text-sm font-medium text-black">
                    Quick Response Guarantee
                  </p>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  We respond to all inquiries within 24 hours. For urgent projects, 
                  mention it in your message and we&apos;ll prioritize accordingly.
                </p>
              </div>

              {/* Schedule Call */}
              <div className="p-6 border border-neutral-200">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar size={18} className="text-neutral-500" />
                  <p className="text-sm font-medium text-black">
                    Prefer a call?
                  </p>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  Schedule a free 30-minute discovery call to discuss your project 
                  in detail.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-black hover:text-neutral-600 transition-colors"
                >
                  Book a call
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              {...fadeInUp}
              className="lg:col-span-3"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-8">
                Send a Message
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 border border-neutral-200 text-center"
                >
                  <CheckCircle2 size={48} className="mx-auto mb-4 text-black" />
                  <h3 className="text-2xl font-light text-black mb-2">
                    Message Sent
                  </h3>
                  <p className="text-neutral-600">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.1em] text-neutral-500 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-transparent border border-neutral-200 text-black placeholder:text-neutral-400 focus:border-black focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.1em] text-neutral-500 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-transparent border border-neutral-200 text-black placeholder:text-neutral-400 focus:border-black focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.1em] text-neutral-500 mb-2">
                      Subject
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-transparent border border-neutral-200 text-black focus:border-black focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select a subject</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-development">Mobile Development</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="backend-apis">Backend & APIs</option>
                      <option value="ai-automation">AI & Automation</option>
                      <option value="chatbot">Chatbot Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.1em] text-neutral-500 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={6}
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-transparent border border-neutral-200 text-black placeholder:text-neutral-400 focus:border-black focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white hover:bg-neutral-800 transition-all duration-300 text-sm uppercase tracking-[0.1em]"
                  >
                    Send Message
                    <Send size={16} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-4">
              How We Work
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-black">
              Our process
            </h2>
            <p className="mt-6 text-neutral-600 leading-relaxed max-w-3xl">
              A battle-tested workflow that ensures transparency, quality, and 
              on-time delivery — every single time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group p-6 bg-white border border-neutral-200 hover:border-black transition-all duration-300"
              >
                <p className="text-4xl font-light text-neutral-200 group-hover:text-neutral-400 transition-colors mb-4">
                  {step.number}
                </p>
                <h3 className="text-lg font-medium text-black mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-4">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-black">
              Frequently asked questions
            </h2>
            <p className="mt-6 text-neutral-600 leading-relaxed">
              Everything you need to know about working with us.
            </p>
          </motion.div>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="border-b border-neutral-200 py-8"
              >
                <h3 className="text-lg font-medium text-black mb-3">
                  {faq.question}
                </h3>
                <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-12 lg:px-24 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-black">
              Ready to start{" "}
              <span className="text-neutral-400">your project?</span>
            </h2>
            <p className="mt-8 text-neutral-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Whether you have a clear vision or just an idea, we&apos;re here to help 
              you turn it into reality. Let&apos;s talk.
            </p>
            <div className="mt-12">
              <a
                href="mailto:hello@triconstudios.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white hover:bg-neutral-800 transition-all duration-300 text-sm uppercase tracking-[0.1em]"
              >
                <Mail size={16} />
                hello@triconstudios.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}