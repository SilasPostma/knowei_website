import Hero from "@/components/sections/Hero";
import Header from "@/components/sections/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-purple-200">
      <Header></Header>
      <Hero
        title="KNOWEI"
        subtitle="Je voelt dat het anders kan.\n
        Je wil geen standaard advies, maar zelf doorbouwen op wat werkt.\n
        Jij bouwt, wij geven de onderdelen en het zetje.
      "
      ></Hero>
      <div className="full-height-section bg-[#FAF6F3]"></div>
      <div className="full-height-section bg-[var(--hero-bg-color)]"></div>
      <div className="full-height-section bg-[#FAF6F3]"></div>
    </main>
  );
}
