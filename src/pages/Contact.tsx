import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
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
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 317 838 6880",
    href: "tel:+923178386880",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pakistan",
    href: "#",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Open for projects",
    href: "#",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const SERVICE_ID = "service_zfacoka";
  const TEMPLATE_ID = "template_67uc1gh";
  const PUBLIC_KEY = "1AE55HBtgnTghIHlm";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "General Inquiry",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 4000);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        alert("Failed to send message. Try again.");
      });
  };

  const btnPrimary =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-800 transition-all duration-300 text-sm uppercase tracking-[0.1em] disabled:opacity-50";

  const iconBtn =
    "p-3 rounded-full border border-black/10 hover:bg-black hover:text-white transition-all duration-300";

  return (
    <main className="min-h-screen bg-white text-black">
      
      <section className="pt-28 pb-16 px-4 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp}>
            <p className="text-xs uppercase text-black/60">Contact</p>
            <h1 className="text-4xl md:text-6xl font-semibold mt-6">
              Let’s build something real
            </h1>
            <p className="mt-4 text-black/70">
              Share your idea. We convert it into a digital product.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-12 lg:px-24 border-t border-black/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Contact Info */}
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
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="p-10 border border-black/10 rounded-2xl text-center">
                <CheckCircle2 className="mx-auto mb-4" size={40} />
                <h3 className="text-xl font-medium">Message Sent</h3>
                <p className="text-black/60 mt-2">We will contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                <input
                  required
                  placeholder="Your Name"
                  className="w-full px-6 py-3 rounded-full border border-black/10"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full px-6 py-3 rounded-full border border-black/10"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <textarea
                  required
                  rows={6}
                  placeholder="Your message"
                  className="w-full px-6 py-4 rounded-2xl border border-black/10"
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

    </main>
  );
}