import JsonLd from "@/components/JsonLd";
import About from "@/sections/About";
import CTASection from "@/sections/CTA";
import Hero from "@/sections/Hero";
import LogoMarquee from "@/sections/LogoMarque";
import Process from "@/sections/Prosses";
import ServicesSection from "@/sections/Services";
import Projects from "@/sections/Work";
import { createMetadata, webPageJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = createMetadata({
  title: `${site.name} — Web Design, Development & Digital Marketing`,
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <main id="main-content">
      <JsonLd
        data={webPageJsonLd({
          name: site.name,
          description: site.description,
          path: "/",
        })}
      />
      <Hero />
      <LogoMarquee />
      <About />
      <ServicesSection />
      <Process />
      <Projects />
      <CTASection />
    </main>
  );
}
