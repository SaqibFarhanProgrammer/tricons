import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, BookOpen, TrendingUp, Shield, Zap, Code2, Users } from "lucide-react";
import { Link } from "react-router-dom";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const researchHighlights = [
  {
    icon: Zap,
    stat: "40-60%",
    label: "Performance Improvement",
    desc: "Modern decoupled architectures deliver 40-60% improvement in Core Web Vitals over traditional monolithic WordPress setups.",
    source: "Neodigit Performance Analysis 2025",
    sourceUrl: "https://neodigit.fr",
  },
  {
    icon: TrendingUp,
    stat: "75%",
    label: "Load Time Reduction",
    desc: "Organizations migrating to Next.js with headless CMS see up to 75% reduction in page load times, directly impacting conversion rates.",
    source: "TechCrunch Migration Case Study",
    sourceUrl: "https://techcrunch.com",
  },
  {
    icon: Shield,
    stat: "0ms",
    label: "Database Exposure",
    desc: "Static Site Generation (SSG) eliminates direct database connections on the frontend, removing SQL injection vulnerabilities entirely.",
    source: "Berkeley Information Security Office",
    sourceUrl: "https://security.berkeley.edu",
  },
  {
    icon: Code2,
    stat: "98",
    label: "Lighthouse Score",
    desc: "Next.js applications consistently achieve 85-98 Lighthouse scores on mobile, compared to 20-40 for unoptimized WordPress sites.",
    source: "Google Lighthouse Benchmarks 2025",
    sourceUrl: "https://developers.google.com/speed",
  },
];

const whyTricon = [
  {
    title: "Lightning Fast Delivery",
    desc: "We ship 40% faster than industry average without compromising quality. Our modern stack enables rapid iteration and deployment.",
  },
  {
    title: "Secure by Default",
    desc: "Security baked into every layer — from code to infrastructure. We follow zero-trust principles and automated vulnerability scanning.",
  },
  {
    title: "Built to Scale",
    desc: "Architectures designed to grow seamlessly with your user base. From startup MVP to enterprise scale, we engineer for the future.",
  },
  {
    title: "Clean Code",
    desc: "Maintainable, well-documented codebases that your team can extend. TypeScript strict mode, ESLint, and comprehensive testing.",
  },
  {
    title: "Mobile-First Design",
    desc: "Every interface optimized for touch and small screens first. Core Web Vitals compliance as a baseline, not an afterthought.",
  },
  {
    title: "Ongoing Support",
    desc: "Dedicated support and maintenance long after launch day. We treat your product as our own, with 24/7 monitoring and rapid response.",
  },
];

const sources = [
  { name: "Neodigit", url: "https://neodigit.fr", topic: "Next.js vs WordPress Performance" },
  { name: "MediaPlus Singapore", url: "https://mediaplus.com.sg", topic: "Headless CMS Decision Guide" },
  { name: "ZTABS", url: "https://ztabs.co", topic: "Business Platform Comparison" },
  { name: "Codeble", url: "https://codeble.com.au", topic: "WordPress vs Headless CMS 2026" },
  { name: "EPIXS Media", url: "https://epixs.in", topic: "Agency Migration Strategies" },
  { name: "BKThemes", url: "https://bkthemes.design", topic: "Performance & SEO Showdown" },
  { name: "Pantheon.io", url: "https://pantheon.io", topic: "Headless WordPress Hosting" },
  { name: "Strapi", url: "https://strapi.io", topic: "Switching from WordPress" },
  { name: "Contentful", url: "https://contentful.com", topic: "Composable DXP Architecture" },
  { name: "Storyblok", url: "https://storyblok.com", topic: "Enterprise Headless Gaps" },
  { name: "BCMS", url: "https://thebcms.com", topic: "WordPress Companies Going Headless" },
  { name: "Otterdev", url: "https://otterdev.io", topic: "Why We Don't Use WordPress" },
  { name: "Berkeley Security", url: "https://security.berkeley.edu", topic: "React & Next.js Vulnerabilities" },
  { name: "StepSecurity", url: "https://stepsecurity.io", topic: "RCE in React Server Components" },
  { name: "rtCamp", url: "https://rtcamp.com", topic: "GraphQL vs REST for Headless WP" },
  { name: "Dev.to", url: "https://dev.to", topic: "Technical Decision Framework 2025" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-white text-black overflow-x-hidden">
      <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div {...fadeInUp}>
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-500 mb-4 sm:mb-6">
              About Tricon Studios
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight -tracking-[2px] md:-tracking-[5px] text-black break-words">
              Building smart solutions{" "}
              <span className="t">to simplify complex problems</span>
            </h1>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl">
              Tricon Studios is an elite software solutions agency combining cutting-edge technology 
              with exceptional design to deliver solutions that make a real difference. We don't just 
              follow trends — we architect the future.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-neutral-200">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div {...fadeInUp}>
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-500 mb-4 sm:mb-6">
              Our Philosophy
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black leading-tight">
                  Technology should serve business, not complicate it
                </h2>
              </div>
              <div className="space-y-5 sm:space-y-6 text-neutral-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Founded by a team of engineers and designers who were tired of seeing businesses 
                  struggle with outdated technology, Tricon Studios was built on a simple principle: 
                  every line of code should drive measurable business value.
                </p>
                <p>
                  We specialize in modern, decoupled architectures using Next.js, TypeScript, and 
                  headless CMS platforms — not because they are trendy, but because they deliver 
                  superior performance, security, and scalability compared to legacy monolithic systems.
                </p>
                <p>
                  Our approach is research-driven. We analyze your specific needs, traffic patterns, 
                  and growth trajectory before recommending any technology stack. Whether you need a 
                  high-conversion marketing site or a complex SaaS platform, we engineer solutions 
                  that perform.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-neutral-50">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div {...fadeInUp} className="mb-12 sm:mb-16">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <BookOpen size={18} className="text-neutral-500" />
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-500">
                Research & Insights
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black">
              Why we chose the modern stack
            </h2>
            <p className="mt-4 sm:mt-6 text-neutral-600 leading-relaxed max-w-3xl text-sm sm:text-base">
              The global web development landscape is undergoing a profound structural shift. 
              Our technology choices are backed by extensive research and real-world data — not hype.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {researchHighlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white p-6 sm:p-8 border border-neutral-200 hover:border-neutral-400 transition-all duration-300 w-full"
              >
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <item.icon size={22} className="text-neutral-400" strokeWidth={1.5} />
                  <span className="text-3xl sm:text-4xl font-light text-black">{item.stat}</span>
                </div>
                <h3 className="text-base sm:text-lg font-medium text-black mb-2 sm:mb-3">{item.label}</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{item.desc}</p>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-neutral-500 hover:text-black transition-colors break-all"
                >
                  <ExternalLink size={12} />
                  Source: {item.source}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-16 sm:mt-20 space-y-10 sm:space-y-12">
            <div className="border-l-2 border-neutral-300 pl-6 sm:pl-8">
              <h3 className="text-xl sm:text-2xl font-light text-black mb-3 sm:mb-4">
                The Performance Gap is Real
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Traditional WordPress sites frequently struggle with Core Web Vitals due to the cumulative 
                weight of plugins, heavy themes, and unoptimized assets. A typical WordPress installation 
                may load dozens of CSS and JavaScript files, many of which contain code that is not used 
                on the specific page being viewed, leading to significant render-blocking issues.
              </p>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                Next.js addresses these challenges through native optimizations: automatic code splitting 
                ensures only required JavaScript is sent to the client; the built-in Image component performs 
                lazy loading and modern format conversion; and Static Site Generation (SSG) eliminates 
                database queries at request time.
              </p>
            </div>

            <div className="border-l-2 border-neutral-300 pl-6 sm:pl-8">
              <h3 className="text-xl sm:text-2xl font-light text-black mb-3 sm:mb-4">
                Security by Architecture
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                WordPress, powering over 40% of the internet, is the most targeted platform for cyberattacks. 
                The vast majority of breaches are caused by vulnerabilities in third-party plugins and themes.
              </p>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                A Next.js application with static generation has a fundamentally smaller attack surface. 
                The final site is a collection of static files with no server-side execution logic.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-neutral-200">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div {...fadeInUp} className="mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3 sm:mb-4">
              Why Tricon
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black">
              Why choose us
            </h2>
            <p className="mt-4 sm:mt-6 text-neutral-600 leading-relaxed max-w-3xl text-sm sm:text-base">
              We measure success by your business outcomes — increased users, revenue, and operational efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-12 gap-y-10 sm:gap-y-12">
            {whyTricon.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <h3 className="text-lg sm:text-xl font-medium text-black mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div {...fadeInUp} className="mb-10 sm:mb-12">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3 sm:mb-4">
              References
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black">
              Research sources
            </h2>
            <p className="mt-3 sm:mt-4 text-neutral-600 text-sm sm:text-base">
              Our technology recommendations are based on data from these industry sources.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sources.map((source, i) => (
              <motion.a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.4 }}
                className="group flex items-start gap-3 p-4 bg-white border border-neutral-200 hover:border-neutral-400 transition-all duration-300 w-full"
              >
                <ExternalLink size={14} className="mt-1 text-neutral-400 group-hover:text-black transition-colors" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-black truncate">{source.name}</p>
                  <p className="text-xs text-neutral-500 mt-1 break-words">{source.topic}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto text-center w-full">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-tight text-black break-words">
              Let's build something{" "}
              <span className="text-neutral-400">extraordinary</span>
            </h2>
            <p className="mt-6 sm:mt-8 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.
            </p>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center w-full">
              <Link
                to="/contact"
                className="w-full rounded-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white hover:bg-neutral-800 transition-all duration-300 text-xs sm:text-sm uppercase tracking-[0.1em]"
              >
                Start a Project
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/work"
                className="w-full rounded-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border border-neutral-300 hover:border-black transition-all duration-300 text-xs sm:text-sm uppercase tracking-[0.1em] text-black"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}