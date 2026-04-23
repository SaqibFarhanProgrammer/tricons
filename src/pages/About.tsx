
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
    <main className="min-h-screen bg-white text-black">
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp}>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-6">
              About Tricon Studios
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold  leading-tight -tracking-[5px] text-black">
              Building smart solutions{" "}
              <span className="t">to simplify complex problems</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl">
              Tricon Studios is an elite software solutions agency combining cutting-edge technology 
              with exceptional design to deliver solutions that make a real difference. We don't just 
              follow trends — we architect the future.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp}>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-6">
              Our Philosophy
            </p>
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-black leading-tight">
                  Technology should serve business, not complicate it
                </h2>
              </div>
              <div className="space-y-6 text-neutral-600 leading-relaxed">
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

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen size={20} className="text-neutral-500" />
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                Research & Insights
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-black">
              Why we chose the modern stack
            </h2>
            <p className="mt-6 text-neutral-600 leading-relaxed max-w-3xl">
              The global web development landscape is undergoing a profound structural shift. 
              Our technology choices are backed by extensive research and real-world data — not hype.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchHighlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white p-8 border border-neutral-200 hover:border-neutral-400 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <item.icon size={24} className="text-neutral-400" strokeWidth={1.5} />
                  <span className="text-4xl font-light text-black">{item.stat}</span>
                </div>
                <h3 className="text-lg font-medium text-black mb-3">{item.label}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-neutral-500 hover:text-black transition-colors"
                >
                  <ExternalLink size={12} />
                  Source: {item.source}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeInUp}
            className="mt-20 space-y-12"
          >
            <div className="border-l-2 border-neutral-300 pl-8">
              <h3 className="text-2xl font-light text-black mb-4">
                The Performance Gap is Real
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Traditional WordPress sites frequently struggle with Core Web Vitals due to the cumulative 
                weight of plugins, heavy themes, and unoptimized assets. A typical WordPress installation 
                may load dozens of CSS and JavaScript files, many of which contain code that is not used 
                on the specific page being viewed, leading to significant render-blocking issues.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Next.js addresses these challenges through native optimizations: automatic code splitting 
                ensures only required JavaScript is sent to the client; the built-in Image component performs 
                lazy loading and modern format conversion; and Static Site Generation (SSG) eliminates 
                database queries at request time. The result? Time to First Byte (TTFB) under 50ms compared 
                to 200-600ms for optimized WordPress servers.
              </p>
            </div>

            <div className="border-l-2 border-neutral-300 pl-8">
              <h3 className="text-2xl font-light text-black mb-4">
                Security by Architecture
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                WordPress, powering over 40% of the internet, is the most targeted platform for cyberattacks. 
                The vast majority of breaches are caused by vulnerabilities in third-party plugins and themes. 
                The traditional architecture exposes clear attack vectors including the /wp-admin panel and 
                xmlrpc.php file — frequent targets for brute-force and DDoS attacks.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                A Next.js application with static generation has a fundamentally smaller attack surface. 
                The final site is a collection of static files with no server-side execution logic and no 
                direct database connection. This eliminates entire classes of vulnerabilities including 
                SQL injection and server-side XSS. The backend CMS can be placed behind a secure firewall, 
                accessible only to authorized editors and the build server.
              </p>
            </div>

            <div className="border-l-2 border-neutral-300 pl-8">
              <h3 className="text-2xl font-light text-black mb-4">
                The Total Cost of Ownership
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                While WordPress is cheaper initially ($3,000-$15,000 typical range), the 3-year TCO often 
                converges with modern stacks due to recurring expenses: managed hosting ($360-$3,600), 
                premium plugin renewals ($200-$1,500), and ongoing security maintenance ($3,600-$18,000). 
                Plugin conflicts and breaking updates require constant developer intervention.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Modern stacks start higher ($15,000-$50,000+) but offer better long-term ROI. Superior 
                performance directly impacts revenue — every 0.1s improvement in load time can increase 
                conversion rates by 8%. For high-traffic brands, this performance dividend justifies the 
                initial investment within months, not years.
              </p>
            </div>

            <div className="border-l-2 border-neutral-300 pl-8">
              <h3 className="text-2xl font-light text-black mb-4">
                When WordPress Still Wins
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                We are not ideologues. WordPress remains the gold standard for content-driven websites 
                where speed-to-market and editor autonomy are primary objectives. It is ideal for small 
                businesses, local services, bloggers, and standard corporate sites where non-technical 
                teams need to publish content without developer support.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                The Gutenberg block editor provides a "click-and-create" experience that headless CMS 
                setups often struggle to match. For these scenarios, we recommend WordPress — honestly. 
                Our recommendations are always driven by your business needs, not our technology preferences.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-4">
              Why Tricon
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-black">
              Why choose us
            </h2>
            <p className="mt-6 text-neutral-600 leading-relaxed max-w-3xl">
              We measure success by your business outcomes — increased users, revenue, and operational efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {whyTricon.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <h3 className="text-xl font-medium text-black mb-3">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-24 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-4">
              References
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-black">
              Research sources
            </h2>
            <p className="mt-4 text-neutral-600">
              Our technology recommendations are based on data from these industry sources.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                className="group flex items-start gap-3 p-4 bg-white border border-neutral-200 hover:border-neutral-400 transition-all duration-300"
              >
                <ExternalLink size={14} className="mt-1 text-neutral-400 group-hover:text-black transition-colors" />
                <div>
                  <p className="text-sm font-medium text-black">{source.name}</p>
                  <p className="text-xs text-neutral-500 mt-1">{source.topic}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 lg:px-24 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-black">
              Let's build something{" "}
              <span className="text-neutral-400">extraordinary</span>
            </h2>
            <p className="mt-8 text-neutral-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white hover:bg-neutral-800 transition-all duration-300 text-sm uppercase tracking-[0.1em]"
              >
                Start a Project
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-neutral-300 hover:border-black transition-all duration-300 text-sm uppercase tracking-[0.1em] text-black"
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