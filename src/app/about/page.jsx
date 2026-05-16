export default function AboutPage() {
  return (
    <section className="w-full bg-white px-6 md:px-10 py-24 md:py-32">

      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <span className="text-black/40 text-[10px] tracking-[0.2em] uppercase">
          About Us
        </span>

        {/* Heading */}
        <h1 className="text-black text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mt-6">
          We are a digital agency focused on building websites, apps, and modern digital solutions.
        </h1>

        {/* Intro */}
        <p className="mt-6 text-black/60 text-base md:text-lg leading-relaxed max-w-3xl">
          We design and develop websites, web applications, and digital products for businesses. Our work covers UI/UX design, full-stack development, and basic digital marketing support.
        </p>

        {/* Divider */}
        <div className="my-16 border-t border-black/10" />

        {/* What We Do */}
        <h2 className="text-black text-2xl md:text-3xl font-semibold">
          What we do
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="p-6 border border-black/10 rounded-xl">
            <h3 className="text-black font-medium">Website Development</h3>
            <p className="text-black/60 text-sm mt-2">
              We build responsive websites using modern frontend technologies.
            </p>
          </div>

          <div className="p-6 border border-black/10 rounded-xl">
            <h3 className="text-black font-medium">Web Applications</h3>
            <p className="text-black/60 text-sm mt-2">
              We develop basic to medium complexity web apps with authentication and APIs.
            </p>
          </div>

          <div className="p-6 border border-black/10 rounded-xl">
            <h3 className="text-black font-medium">UI/UX Design</h3>
            <p className="text-black/60 text-sm mt-2">
              We design clean and simple user interfaces focused on usability.
            </p>
          </div>

          <div className="p-6 border border-black/10 rounded-xl">
            <h3 className="text-black font-medium">Digital Services</h3>
            <p className="text-black/60 text-sm mt-2">
              We help with basic branding and online presence setup.
            </p>
          </div>

        </div>

        {/* Approach */}
        <div className="mt-20">

          <h2 className="text-black text-2xl md:text-3xl font-semibold">
            Our approach
          </h2>

          <p className="mt-6 text-black/60 leading-relaxed max-w-3xl">
            We focus on clear communication, simple design, and functional development. Every project is built based on client requirements without unnecessary complexity.
          </p>

        </div>

        {/* CTA */}
        <div className="mt-20 text-center">

          <h3 className="text-black text-2xl md:text-3xl font-semibold">
            Let’s work together
          </h3>

          <p className="text-black/50 mt-4">
            If you have a project idea, we can help you build it.
          </p>

          <a
            href="#contact"
            className="inline-flex mt-8 px-8 py-3 bg-black text-white rounded-full hover:bg-black/90 transition"
          >
            Contact Us
          </a>

        </div>

      </div>

    </section>
  )
}