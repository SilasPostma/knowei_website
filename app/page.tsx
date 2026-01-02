import Section from "@/components/home/section";
import Header from "@/components/home/header";
import HeroSection from "@/components/home/hero-section";

export default function Home() {
  return (
    <main className="">
      <Header/>
      
      {/* Special Hero (Self-contained scroll logic) */}
      <HeroSection />

      {/* Standard Sections with unique children */}
      <Section id="Toolboxen" color="var(--color-10)">
        <div className="grid grid-cols-3 gap-4">
          {/* Your Toolbox content here */}
        </div>
      </Section>

      <Section id="Contact" color="var(--color-50)">
        <form>{/* Your Form */}</form>
      </Section>

      <Section id="Testemonials" color="var(--color-10)"></Section>

      <Section id="About" color="var(--color-30)"></Section>
    </main>
  );
}