export default function AboutPage() {
  return (
    <section className="w-full bg-white px-6 md:px-10 py-24 md:py-32">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <span className="text-black/40 text-[10px] tracking-[0.2em] uppercase">
          About Tricons Agency
        </span>

        <h1 className="text-black text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mt-6">
          We build digital products, automate businesses, and design experiences that scale.
        </h1>

        <p className="mt-6 text-black/60 text-base md:text-lg leading-relaxed max-w-3xl">
          Tricons is a full-service digital agency focused on modern web development, AI-powered solutions, automation systems, and high-performance digital marketing. We help startups and businesses turn ideas into scalable digital products.
        </p>

        {/* Divider */}
        <div className="my-16 border-t border-black/10" />

        {/* What We Do */}
        <h2 className="text-black text-2xl md:text-3xl font-semibold">
          What we do
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="p-6 border border-black/10 rounded-xl">
            <h3 className="text-black font-semibold">Website Development</h3>
            <p className="text-black/60 text-sm mt-2">
              Modern, fast, responsive websites using Next.js, React, and scalable architecture.
            </p>
          </div>

          <div className="p-6 border border-black/10 rounded-xl">
            <h3 className="text-black font-semibold">Full Stack Web Apps</h3>
            <p className="text-black/60 text-sm mt-2">
              End-to-end applications with authentication, dashboards, APIs, and database integration.
            </p>
          </div>

          <div className="p-6 border border-black/10 rounded-xl">
            <h3 className="text-black font-semibold">AI Development</h3>
            <p className="text-black/60 text-sm mt-2">
              Chatbots, AI assistants, and intelligent systems integrated into real-world products.
            </p>
          </div>

          <div className="p-6 border border-black/10 rounded-xl">
            <h3 className="text-black font-semibold">Automation Systems</h3>
            <p className="text-black/60 text-sm mt-2">
              Business automation tools that reduce manual work and increase efficiency.
            </p>
          </div>

          <div className="p-6 border border-black/10 rounded-xl">
            <h3 className="text-black font-semibold">UI/UX Design</h3>
            <p className="text-black/60 text-sm mt-2">
              Clean, modern interfaces designed for conversion, usability, and user experience.
            </p>
          </div>

          <div className="p-6 border border-black/10 rounded-xl">
            <h3 className="text-black font-semibold">Digital Marketing</h3>
            <p className="text-black/60 text-sm mt-2">
              Meta Ads, Google Ads, and performance campaigns focused on ROI and growth.
            </p>
          </div>

        </div>

        {/* Philosophy Section */}
        <div className="mt-20">
          <h2 className="text-black text-2xl md:text-3xl font-semibold">
            Our approach
          </h2>

          <p className="mt-6 text-black/60 leading-relaxed max-w-3xl">
            We don’t use templates or generic solutions. Every project is built from scratch with strategy, design thinking, and engineering precision. Our goal is simple — build systems that actually grow businesses, not just websites that look good.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">

          <h3 className="text-black text-2xl md:text-3xl font-semibold">
            Let’s build something powerful
          </h3>

          <p className="text-black/50 mt-4">
            From idea to execution — we handle everything.
          </p>

          <a
            href="#contact"
            className="inline-flex mt-8 px-8 py-3 bg-black text-white rounded-full hover:bg-black/90 transition"
          >
            Start a Project
          </a>

        </div>

      </div>

    </section>
  )
}