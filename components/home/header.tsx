"use client";

import Image from 'next/image';
import HeaderButton from '../ui/headerButton';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show header after scrolling past 2.5 viewports (Hero is 300vh)
    const threshold = typeof window !== 'undefined' ? window.innerHeight * 2.5 : 2000;
    if (latest > threshold && !isVisible) {
      setIsVisible(true);
    } else if (latest <= threshold && isVisible) {
      setIsVisible(false);
    }
  });

  return (
    <motion.header 
      initial={{ y: "-100%" }}
      animate={{ y: isVisible ? "0%" : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full h-16 flex items-end pb-3 px-8 bg-[var(--color-30)] z-50 border-b-2 border-[var(--color-70)]"
    >
      
      <div className="z-10">
        <Image src="/W_70.png" alt="KNOWEI" width={120} height={80} />
      </div>

      <div className="absolute right-1/2 flex gap-[var(--header-button-gap)] pr-[calc(var(--header-button-gap)/2)] items-end h-full">
        <HeaderButton href="/#home" text='toolboxen'/>
        <HeaderButton href="/#home" text='toolbox op maat'/>
      </div>

      <div className="absolute left-1/2 flex gap-[var(--header-button-gap)] pl-[calc(var(--header-button-gap)/2)] items-end h-full">
        <HeaderButton href="/#home" text='voorbeelden'/>
        <HeaderButton href="/#home" text='mijn verhaal'/>
      </div>

      <div className="ml-auto z-10">
        <Image src="/L_70.png" alt="LOGO" width={35} height={35} />
      </div>

    </motion.header>
  );
}