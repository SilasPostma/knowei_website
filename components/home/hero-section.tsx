"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animation Ranges
  // Frame 1 [0 - 0.33]: Initial State (Logos + Intro Text)
  // Transition 1->2 [0.33 - 0.5]: Fade out Intro Text, Fade in BG
  // Frame 2 [0.5 - 0.66]: BG is separate, Logos Static
  // Transition 2->3 [0.66 - 0.8]: Fade out W70, Move L70 Up, Fade in Narrative Text

  // Opacities
  const introTextOpacity = useTransform(scrollYProgress, [0.33, 0.45], [1, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0.33, 0.5], [0, 1]);
  const w70Opacity = useTransform(scrollYProgress, [0.6, 0.7], [1, 0]);
  const narrativeTextOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  // Movements
  // L70 moves from center (50%) to top third (approx 30%)
  const l70Y = useTransform(scrollYProgress, [0.6, 0.8], ["0%", "-120%"]);

  return (
    <div ref={containerRef} className="h-[300vh] w-full relative bg-[var(--color-50)]">
      
      {/* Background Fade Layer */}
      <motion.div 
        style={{ opacity: bgOpacity }}
        className="fixed inset-0 w-full h-full pointer-events-none"
      >
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url("/bg-fade.jpg")' }}></div>
      </motion.div>

      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Main Centered Content Container */}
        <div className="relative flex flex-col items-center justify-center w-full max-w-4xl px-4">
            
            {/* Logos Component */}
            <div className="relative z-20 flex items-center justify-center gap-8 mb-12">
               {/* L70 Logo - Moves Up */}
               <motion.div style={{ y: l70Y }} className="relative z-30">
                  <Image src="/L 70.png" alt="Logo L 70" width={120} height={120} className="w-auto h-24 md:h-32" />
               </motion.div>

               {/* W70 Logo - Fades Out */}
               <motion.div style={{ opacity: w70Opacity }} className="relative z-20">
                 <Image src="/W 70.png" alt="Logo W 70" width={300} height={100} className="w-auto h-24 md:h-32" />
               </motion.div>
            </div>

            {/* Frame 1: Intro Text - Fades Out */}
            <motion.div 
              style={{ opacity: introTextOpacity }} 
              className="absolute top-[60%] text-center text-[var(--color-90)] max-w-2xl"
            >
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                Je voelt dat het anders kan.<br/>
                Je wil geen standaard advies, maar zelf doorbouwen op wat werkt.<br/>
                Jij bouwt, wij geven de onderdelen en het zetje.
              </p>
            </motion.div>

            {/* Frame 3: Narrative Text - Fades In */}
            <motion.div 
              style={{ opacity: narrativeTextOpacity }} 
              className="absolute top-[40%] text-center text-[var(--color-90)] max-w-3xl space-y-6"
            >
              <p className="text-lg leading-relaxed">
                Je loopt vast. Op school, thuis of op je werk gaat iets niet zoals je wilt. 
                Je voelt dat het anders kan, maar je weet niet hoe. Je vraagt hulp aan leraren, coaches of consultants. 
                Hun antwoorden helpen niet genoeg. Het blijft lastig en je energie stroomt weg.
              </p>
              <p className="text-lg leading-relaxed font-semibold">
                Maar het moet toch kunnen!
              </p>
              <p className="text-lg leading-relaxed">
                Je blijft nieuwsgierig zoeken hoe het wél kan. Soms te weinig: standaardoplossingen die niet werken. 
                Soms te veel: verdwalen in ideeën zonder richting en dan precies goed: 
                <span className="italic block mt-2">nieuwsgierigheid die jou laat bouwen met wat er wél is.</span>
              </p>
              <p className="text-lg leading-relaxed">
                Geen adviesbureau, geen brainstorm, geen groepsuitje. Wel een uitnodiging om zelf kennis te maken—DIY style. 
                Zoals IKEA voor know‑how: jij bouwt, wij geven de onderdelen en het zetje.
              </p>
              <p className="text-lg leading-relaxed">
                Dan merk je: wat vastzat komt los, waar energie lekte stroomt weer, en je droom komt dichterbij. 
                Je ontdekt dat je niet gek bent, maar slim op weg.
              </p>
              <p className="text-xl font-bold mt-4">
                Jouw ‘anders’? Jij vindt het. Niet omdat wij het weten, maar omdat jij het bouwt.
              </p>
            </motion.div>

        </div>
        
      </div>
    </div>
  );
}