import Section from "@/components/home/section";
import Header from "@/components/home/header";
import HeroSection from "@/components/home/hero-section";
import ToolboxenSection from "@/components/home/toolboxen";
import ContactSection from "@/components/home/contact-section";
import TestemonialSection from "@/components/home/testamonial-section";

export default function Home() {
  return (
    <main className="">
      <Header/>
      
      {/* Special Hero (Self-contained scroll logic) */}
      <HeroSection />

      {/* Standard Sections with unique children */}
      <ToolboxenSection />


      <ContactSection />

      <TestemonialSection />

      <Section id="about" color="var(--color-30)"></Section>
    </main>
  );
}