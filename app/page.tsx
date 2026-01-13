import Section from "@/components/home/section";
import Header from "@/components/home/header";
import HeroSection from "@/components/home/hero-section";
import ToolboxenSection from "@/components/home/toolboxen-section";
import ContactSection from "@/components/home/contact-section";
import TestimonialSection from "@/components/home/testimonial-section";
import AboutSection from "@/components/home/about-section";

export default function Home() {
  return (
    <main className="">
      <Header/>
      
      <HeroSection />

      <ToolboxenSection />

      <ContactSection />

      <TestimonialSection />

      <AboutSection />
    </main>
  );
}