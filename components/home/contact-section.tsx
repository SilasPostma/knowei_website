"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

    const email = "info@knowei.nl";
    const subject = `Een andere oplossing`;
    
    const bodyText = `Beste Knowei,

Ik ben nieuwsgierig naar … en wil graag beter begrijpen hoe jij/ jullie daarin werkt of denkt.

Groet,

[Naam]
[Organisatie]
[Telefoonnummer]
[E-mailadres]`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;

  const handleMailClick = async (e: React.MouseEvent) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Kon het email adres niet kopiëren:", err);
    }
  };

  return (
    <div id="toolbox_op_maat" className="bg-[var(--color-50)] min-h-screen flex flex-col items-center pb-12 md:pb-20 pt-8 md:pt-16">
      {/* Top half area - centers text between top and grid */}
      <div className="flex-1 flex flex-col justify-center w-full">
        <div className="max-w-6xl w-full mx-auto pb-4 px-4">
          {/* Header */}
          <h2 className="text-xl md:text-2xl font-bold text-center text-[var(--color-90)] mb-8">
            Elke praktijkvraag een andere oplossing.
          </h2>

          {/* Description Text */}
          <div className="text-center text-[var(--color-90)] max-w-3xl mx-auto space-y-2">
            <p className="text-base md:text-lg leading-relaxed">
              Daarom gaan we graag met jou in gesprek om jouw anders scherp te krijgen.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Zo kunnen we een toolbox op maat samenstellen die echt past bij jouw vraag.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Wat helpt jou om met energie te beginnen?
            </p>
          </div>
        </div>
      </div>

      {/* Cards Grid - centered in the screen */}
      <div className="w-full max-w-6xl shrink-0">
        <div className="flex flex-wrap justify-center gap-12 max-w-5xl mx-auto">
          
          {/* Chat Card */}
          <div className="flex flex-col items-center w-full max-w-[300px]">
            <a href="https://wa.me/31640393757" target="_blank" rel="noopener noreferrer" className="bg-[var(--color-90)] w-full aspect-square flex flex-col items-center justify-center p-6 mb-6">
              <div className="mb-6">
                <svg width="80" height="80" viewBox="0 0 120 120" fill="none" className="text-white">
                  <rect x="30" y="15" width="60" height="90" rx="8" stroke="currentColor" strokeWidth="3" fill="none" />
                  <circle cx="60" cy="95" r="3" fill="currentColor" />
                  <line x1="45" y1="25" x2="75" y2="25" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Chat</h3>
              <p className="text-white text-center text-sm md:text-base opacity-90 px-2">Kort en direct afstemmen.</p>
            </a>
            <a href="https://wa.me/31640393757" target="_blank" rel="noopener noreferrer">
              <button className="bg-[var(--color-30)] text-[var(--color-70)] px-8 py-2 text-sm font-semibold tracking-wide hover:bg-[var(--color-10)] transition-colors cursor-pointer">
                START CHAT
              </button>
            </a>
          </div>

          {/* Persoonlijk Gesprek Card */}
          <div className="flex flex-col items-center w-full max-w-[300px]">
            <a href="https://app.acuityscheduling.com/schedule.php?owner=38056795&appointmentType=category:intake" target="_blank" rel="noopener noreferrer" className="bg-[var(--color-90)] w-full aspect-square flex flex-col items-center justify-center p-6 mb-6">
              <div className="mb-6">
                <svg width="80" height="80" viewBox="0 0 120 120" fill="none" className="text-white">
                  <rect x="25" y="30" width="70" height="60" rx="4" stroke="currentColor" strokeWidth="3" fill="none" />
                  <line x1="25" y1="45" x2="95" y2="45" stroke="currentColor" strokeWidth="3" />
                  <line x1="40" y1="25" x2="40" y2="35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <line x1="80" y1="25" x2="80" y2="35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="40" cy="60" r="2" fill="currentColor" /><circle cx="52" cy="60" r="2" fill="currentColor" />
                  <circle cx="64" cy="60" r="2" fill="currentColor" /><circle cx="76" cy="60" r="2" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">Persoonlijk gesprek</h3>
              <p className="text-white text-center text-sm md:text-base opacity-90 px-2">Eerst even samen overleggen</p>
            </a>
            <a href="https://app.acuityscheduling.com/schedule.php?owner=38056795&appointmentType=category:intake" target="_blank" rel="noopener noreferrer">
              <button className="bg-[var(--color-30)] text-[var(--color-70)] px-8 py-2 text-sm font-semibold tracking-wide hover:bg-[var(--color-10)] transition-colors cursor-pointer">
                INPLANNEN
              </button>
            </a>
          </div>

          {/* Email Card */}
          <div className="flex flex-col items-center w-full max-w-[300px]">
            <a href={mailtoLink} onClick={handleMailClick} target="_blank" rel="noopener noreferrer" className="bg-[var(--color-90)] w-full aspect-square flex flex-col items-center justify-center p-6 mb-6">
              <div className="mb-6">
                <svg width="80" height="80" viewBox="0 0 120 120" fill="none" className="text-white">
                  <rect x="20" y="35" width="80" height="50" rx="4" stroke="currentColor" strokeWidth="3" fill="currentColor" />
                  <path d="M20 35 L60 60 L100 35" stroke="var(--color-90)" strokeWidth="3" fill="none" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-white text-center text-sm md:text-base opacity-90 px-2">Rustig op papier zetten</p>
            </a>
            <a href={mailtoLink} onClick={handleMailClick} target="_blank" rel="noopener noreferrer">
              <button className="bg-[var(--color-30)] text-[var(--color-70)] px-8 py-2 text-sm font-semibold tracking-wide hover:bg-[var(--color-10)] transition-colors cursor-pointer">
                {copied ? "GEKOPIEERD" : "STARTEN"}
              </button>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom balancing space */}
      <div className="flex-1" />
    </div>
  );
}