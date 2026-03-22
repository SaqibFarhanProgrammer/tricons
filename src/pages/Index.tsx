import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ClientLogos from "@/components/ClientLogos";
import WhyChooseUs from "@/components/WhyChooseUs";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <ProjectsSection />
      <ClientLogos />
      <WhyChooseUs />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
