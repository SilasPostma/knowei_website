"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

import W10 from "@/public/W_10.png";
import L10 from "@/public/L_10.png";
import BgFade from "@/public/bg_fade.jpg";


const ScrollArrowIcon = () => (
  <svg
    width="24"
    height="64"
    viewBox="0 0 24 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
  >
    <line x1="12" y1="4" x2="12" y2="60"></line>
    <line x1="2" y1="50" x2="14" y2="61"></line>
    <line x1="22" y1="50" x2="9" y2="61"></line>
  </svg>
);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // DESKTOP TRANSFORMS
  const introTextOpacityDT = useTransform(
    scrollYProgress,
    [0.05, 0.25],
    [1, 0]
  );
  const bgOpacityDT = useTransform(
    scrollYProgress,
    [0.05, 0.35, 0.5, 0.75],
    [0, 1, 1, 0]
  );
  const w10OpacityDT = useTransform(scrollYProgress, [0.5, 0.7], [1, 0]);
  const narrativeTextOpacityDT = useTransform(
    scrollYProgress,
    [0.75, 0.9],
    [0, 1]
  );
  const l10YDT = useTransform(scrollYProgress, [0.7, 0.9], ["20%", "-20%"]);

  // MOBILE TRANSFORMS - Adjusted for longer scroll (h-[250vh])
  const introTextOpacityMB = useTransform(scrollYProgress, [0.1, 0.25], [1, 0]);
  const bgOpacityMB = useTransform(
    scrollYProgress,
    [0.2, 0.35, 0.5, 0.65],
    [0, 1, 1, 0]
  );
  const w10OpacityMB = useTransform(scrollYProgress, [0.45, 0.6], [1, 0]);
  const narrativeTextOpacityMB = useTransform(
    scrollYProgress,
    [0.6, 0.8],
    [0, 1]
  );

  // Logic Selectors
  // Mobile-specific transform for L10 logo to move up as soon as main text reaches full opacity
  const l10YMB = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "-160%"]);

  const introTextOpacity = isMobile ? introTextOpacityMB : introTextOpacityDT;
  const bgOpacity = isMobile ? bgOpacityMB : bgOpacityDT;
  const w10Opacity = isMobile ? w10OpacityMB : w10OpacityDT;
  const narrativeTextOpacity = isMobile
    ? narrativeTextOpacityMB
    : narrativeTextOpacityDT;
  const l10Y = isMobile ? l10YMB : l10YDT;
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

return (
  <div
    id="home"
    ref={containerRef}
    className={`${
      isMobile ? "h-[250vh]" : "h-[300vh]"
    } w-full relative bg-[var(--color-50)]`}
  >
    {/* Sticky container handles the animation phase */}
    <div
      className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-visible"
    >
      {/* Background Fade Layer */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${BgFade.src}')` }}
        ></div>
      </motion.div>

      <div
        className={`relative flex flex-col items-center justify-center w-full px-6 md:px-16 ${
          isMobile ? "pt-12" : "" 
        }`}
      >
        {/* Logos Container */}
        <div
          className={`flex w-full items-center justify-between ${
            isMobile
              ? "relative flex-col gap-6 mb-8 z-40" 
              : "relative flex-row gap-8 mb-12 bottom-25" // Restored desktop bottom-25
          }`}
        >
          {/* W10 (Text Logo) - Bottom on Mobile, Left on Desktop */}
          <motion.div
            style={{ opacity: w10Opacity }}
            className={`flex-1 flex ${
              isMobile ? "justify-center order-2" : "justify-start pl-12"
            } z-20`}
          >
            <Image
              src={W10}
              alt="Logo Text"
              width={500}
              height={175}
              className="w-auto h-16 md:h-32 lg:h-48 xl:h-64 max-w-none"
            />
          </motion.div>

          {/* L10 (Icon Logo) - Top on Mobile, Right on Desktop */}
          <motion.div
            style={{ y: l10Y }}
            className={`flex-1 flex ${
              isMobile ? "justify-center order-1" : "justify-end pr-12"
            } z-20`}
          >
            <Image
              src={L10}
              alt="Logo Icon"
              width={500}
              height={175}
              className="w-auto h-20 md:h-32 lg:h-48 xl:h-64 max-w-none"
            />
          </motion.div>
        </div>

        {/* Frame 1: Intro Text */}
        <motion.div
          style={{ opacity: introTextOpacity }}
          className={`text-center text-[var(--color-90)] max-w-2xl px-4 z-10 ${
            isMobile 
              ? "relative mt-4" // Flow positioning for mobile to prevent overlap
              : "absolute top-[70%]" // Restored original desktop absolute position
          }`}
        >
          <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed">
            Je voelt dat het anders kan.
            <br />
            Je wil geen standaard advies, maar zelf doorbouwen op what werkt.
            <br />
            Jij bouwt, wij geven de onderdelen en het zetje.
          </p>
        </motion.div>

        {/* Frame 3: Narrative Text */}
        <motion.div
          style={{ opacity: narrativeTextOpacity }}
          className={`text-[var(--color-90)] max-w-3xl space-y-6 px-4 z-10 ${
            isMobile 
              ? "absolute top-1/2 -translate-y-1/2 text-left" 
              : "absolute -top-25 text-left" // Restored desktop -top-25
          }`}
        >
          {isMobile ? (
            <>
              <p className="text-lg leading-relaxed">
                Je voelt dat het anders kan, maar je weet nog niet hoe. Je weet
                wel, je wil geen advies, geen coach, geen leraar. Wat dan wél?
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Een uitnodiging om zelf kennis te maken — DIY‑style. Jij
                bouwt, wij geven de onderdelen en het zetje.
              </p>
              <p className="text-xl font-bold mt-4 bg-[var(--color-30)] px-1">
                Jouw ‘anders’ vind jij zelf — niet omdat wij het weten, maar
                omdat jij het stap voor stap bouwt.
              </p>
            </>
          ) : (
            <>
              <p className="text-lg md:text-lg lg:text-xl leading-relaxed ">
                <span className="bg-[var(--color-30)] p-1">
                  Je loopt vast. Op school, thuis of op je werk gaat iets niet
                </span>{" "}
                zoals je wilt. Je voelt dat het anders kan, maar je weet niet
                hoe. Je vraagt hulp aan leraren, coaches of consultants. Hun
                antwoorden helpen niet genoeg. Het blijft lastig en je energie
                stroomt weg.
              </p>
              <p className="text-lg md:text-lg lg:text-xl leading-relaxed font-semibold">
                Maar het moet toch kunnen!
              </p>
              <p className="text-lg leading-relaxed">
                <span className="bg-[var(--color-30)] p-1">
                  Je blijft nieuwsgierig zoeken hoe het wél kan.
                </span>{" "}
                Soms te weinig: standaardoplossingen die niet werken. Soms te
                veel: verdwalen in ideeën zonder richting en dan precies goed:
                <span className="italic block mt-2">
                  nieuwsgierigheid die jou laat bouwen met what er wél is.
                </span>
              </p>
              <p className="text-lg leading-relaxed">
                Geen adviesbureau, geen brainstorm, geen groepsuitje. Wel een
                uitnodiging om zelf kennis te maken—DIY style. Zoals IKEA voor
                know‑how:{" "}
                <span className="bg-[var(--color-30)] p-1">
                  bouwt, wij geven de onderdelen en het zetje.
                </span>
              </p>
              <p className="text-lg leading-relaxed">
                Dan merk je: what vastzat komt los, waar energie lekte stroomt
                weer, en je droom komt dichterbij. Je ontdekt dat je niet gek
                bent, maar slim op weg.
              </p>
              <p className="text-xl font-bold mt-4 bg-[var(--color-30)] px-1">
                Jouw ‘anders’? Jij vindt het. Niet omdat wij het weten, maar
                omdat jij het bouwt.
              </p>
            </>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity: scrollOpacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-sm uppercase tracking-[0.2em] text-[var(--color-70)] font-semibold">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-[var(--color-70)]"
        >
          <ScrollArrowIcon />
        </motion.div>
      </motion.div>
    </div>
  </div>
);
}
