import About from "@/sections/About";
import CTASection from "@/sections/CTA";
import Hero from "@/sections/Hero";
import LogoMarquee from "@/sections/LogoMarque";
import Process from "@/sections/Prosses";
import ServicesSection from "@/sections/Services";
import Projects from "@/sections/Work";
import Image from "next/image";

export default function Home() {
  return (
    <main>
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
