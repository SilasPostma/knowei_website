import Section from "@/components/home/section";
import Header from "@/components/home/header";

export default function Home() {
  return (
    <div>
      <Header/>
      <Section id="Hero" color="var(--color-50)"/>
      <Section id="Toolboxen" color="var(--color-10)"/>
      <Section id="Contact" color="var(--color-50)"/>
      <Section id="Testemonials" color="var(--color-10)"/>
      <Section id="About" color="var(--color-50)"/> {/* moet miss anders door header */}
    </div>
  );
}
