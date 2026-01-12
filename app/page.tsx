import Section from "@/components/home/section";
import Header from "@/components/home/header";
import HeroSection from "@/components/home/hero-section";
import ToolboxenSection from "@/components/home/toolboxen";
import ContactSection from "@/components/home/contact-section";
import TestemonialSection from "@/components/home/testamonial-section";
import AboutSection from "@/components/home/about-section";

export default function Home() {
  return (
    <main className="">
      <Header/>
      
      <HeroSection />

      <ToolboxenSection />

      <ContactSection />

      <TestemonialSection />

      <AboutSection />
    </main>
  );
}