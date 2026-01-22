"use client";

import Link from "next/link";
import { MouseEvent } from "react";

interface buttonProps {
  text: string;
  href: string;
}

export default function headerButton({ text, href }: buttonProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // If the link is a hash link (e.g. /#toolboxen), try to find the element and scroll to it
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
  };

  return (
    <Link 
      href={href}
      onClick={handleClick}
      className="font-semibold text-[var(--color-70)] hover:bg-[var(--color-10)] px-2"
    >
      {text}
    </Link>
  );
}