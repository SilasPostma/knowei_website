import Section from "@/components/home/section";
import Header from "@/components/home/header";
import HeroSection from "@/components/home/hero-section";
import ToolboxenSection from "@/components/home/toolboxen";

export default function Home() {
  return (
    <main className="">
      <Header/>
      
      {/* Special Hero (Self-contained scroll logic) */}
      <HeroSection />

      {/* Standard Sections with unique children */}
      <ToolboxenSection />


      <Section id="contact" color="var(--color-50)">
        <form>{/* Your Form */}</form>
      </Section>

      <Section id="testemonials" color="var(--color-10)"></Section>

      <Section id="about" color="var(--color-30)"></Section>
    </main>
  );
}