import React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <div className="full-height-section h-vh justify-center items-center bg-[var(--hero-bg-color)] flex flex-col gap-4 p-8 text-center">
      <div className="text-white text-9xl">{title}</div>
      <div className="text-gray-600">{subtitle}</div>
    </div>
  );
}
