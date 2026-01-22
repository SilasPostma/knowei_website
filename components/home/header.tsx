"use client";

import Image from 'next/image';
import Link from 'next/link';
import HeaderButton from '../ui/headerButton';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import L70 from '@/public/L_70.png';
import W70 from '@/public/W_70.png';

// Hamburger Icon Component
const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="w-6 h-5 flex flex-col justify-between cursor-pointer">
    <motion.span 
      animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
      className="w-full h-0.5 bg-[var(--color-70)] block origin-left"
    />
    <motion.span 
      animate={{ opacity: isOpen ? 0 : 1 }}
      className="w-full h-0.5 bg-[var(--color-70)] block"
    />
    <motion.span 
      animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
      className="w-full h-0.5 bg-[var(--color-70)] block origin-left"
    />
  </div>
);

export default function Header() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    let threshold = 2000;
    
    if (typeof window !== 'undefined') {
      const toolboxenElement = document.getElementById('toolboxen');
      if (toolboxenElement) {
        threshold = toolboxenElement.offsetTop - window.innerHeight + 100;
      } else {
        threshold = window.innerHeight * 2.25;
      }
    }

    if (latest > threshold && !isVisible) {
      setIsVisible(true);
    } else if (latest <= threshold && isVisible) {
      setIsVisible(false);
      setMobileMenuOpen(false);
    }
  });

  const navLinks = [
    { href: "/#toolboxen", text: "toolboxen" },
    { href: "/#toolbox_op_maat", text: "toolbox op maat" },
    { href: "/#voorbeelden", text: "voorbeelden" },
    { href: "/#mijn_verhaal", text: "mijn verhaal" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Handle scroll with offset for fixed header
    if (href.includes('#')) {
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        const headerHeight = 64; // h-16 = 64px
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - headerHeight, behavior: 'smooth' });
        // Preserve current pathname when updating hash
        window.history.pushState(null, '', `${window.location.pathname}#${id}`);
      }
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Preserve current pathname when updating hash
    window.history.pushState(null, '', `${window.location.pathname}#home`);
  };

  return (
    <>
      <motion.header 
        initial={{ y: "-100%" }}
        animate={{ y: isVisible ? "0%" : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full h-16 flex items-center md:items-end pb-0 md:pb-3 px-4 md:px-8 bg-[var(--color-30)] z-50 border-b-2 border-[var(--color-70)]"
      >
        
        {/* Logo Left */}
        <div className="z-10">
          <Link href="/#home" onClick={scrollToTop}>
            <Image src={W70} alt="KNOWEI" width={120} height={80} className="w-24 md:w-[80px] lg:w-[120px]" />
          </Link>
        </div>

        {/* Desktop Navigation - Hidden on Mobile */}
        <div className="hidden md:flex absolute right-1/2 gap-[var(--header-button-gap)] pr-[calc(var(--header-button-gap)/2)] items-end h-full">
          <HeaderButton href="/#toolboxen" text='toolboxen'/>
          <HeaderButton href="/#toolbox_op_maat" text='toolbox op maat'/>
        </div>

        <div className="hidden md:flex absolute left-1/2 gap-[var(--header-button-gap)] pl-[calc(var(--header-button-gap)/2)] items-end h-full">
          <HeaderButton href="/#voorbeelden" text='voorbeelden'/>
          <HeaderButton href="/#mijn_verhaal" text='mijn verhaal'/>
        </div>

        {/* Logo Right - Desktop */}
        <div className="hidden md:block ml-auto z-10">
          <Link href="/#home" onClick={scrollToTop}>
            <Image src={L70} alt="LOGO" width={35} height={35} className="w-12 md:w-[30px] lg:w-[35px]"/>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden ml-auto z-10 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <HamburgerIcon isOpen={mobileMenuOpen} />
        </button>

      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 w-full bg-[var(--color-30)] z-40 border-b-2 border-[var(--color-70)] md:hidden"
          >
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-6 py-3 text-[var(--color-70)] hover:bg-[var(--color-50)] transition-colors uppercase text-md font-semibold tracking-wide"
                >
                  {link.text}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}