"use client";

import React, { useState } from "react";

export default function ContactSection() {

    const [copied, setCopied] = useState(false);

    const handleMailClick = async (e: React.MouseEvent) => {
        const email = "info@knowei.nl";
        try {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
        } catch (err) {
        console.error("Kon het email adres niet kopiëren:", err);
        }
    };

    return (
    <div id="toolbox_op_maat" className="bg-[var(--color-50)] min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <h2 className="text-xl md:text-2xl font-bold text-center text-[var(--color-90)] mb-8">
          Elke praktijkvraag een andere oplossing.
        </h2>

        {/* Description Text */}
        <div className="text-center text-[var(--color-90)] max-w-3xl mx-auto mb-16 space-y-2">
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Chat Card */}
          <div className="flex flex-col items-center">
            <div className="bg-[var(--color-90)] w-full aspect-[1/1] flex flex-col items-center justify-center p-8 mb-6">
              {/* Phone Icon */}
              <div className="mb-8">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="text-white">
                  <rect x="30" y="15" width="60" height="90" rx="8" stroke="currentColor" strokeWidth="3" fill="none" />
                  <circle cx="60" cy="95" r="3" fill="currentColor" />
                  <line x1="45" y1="25" x2="75" y2="25" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Chat</h3>
              <p className="text-white text-center text-lg">Kort en direct afstemmen.</p>
            </div>
            <a href="https://wa.me/31657747434" target="_blank" rel="noopener noreferrer">
                <button className="bg-[var(--color-30)] text-[var(--color-70)] px-8 py-2 text-sm font-semibold tracking-wide hover:bg-[var(--color-10)] transition-colors"> {/*NUMMER AANPASSEN TODO */}
                START CHAT
                </button>
            </a>
          </div>

          {/* Persoonlijk Gesprek Card */}
          <div className="flex flex-col items-center">
            <div className="bg-[var(--color-90)] w-full aspect-[1/1] flex flex-col items-center justify-center p-8 mb-6">
              {/* Calendar Icon */}
              <div className="mb-8">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="text-white">
                  <rect x="25" y="30" width="70" height="60" rx="4" stroke="currentColor" strokeWidth="3" fill="none" />
                  <line x1="25" y1="45" x2="95" y2="45" stroke="currentColor" strokeWidth="3" />
                  <line x1="40" y1="25" x2="40" y2="35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <line x1="80" y1="25" x2="80" y2="35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  {/* Grid dots */}
                  <circle cx="40" cy="60" r="2" fill="currentColor" />
                  <circle cx="52" cy="60" r="2" fill="currentColor" />
                  <circle cx="64" cy="60" r="2" fill="currentColor" />
                  <circle cx="76" cy="60" r="2" fill="currentColor" />
                  <circle cx="40" cy="72" r="2" fill="currentColor" />
                  <circle cx="52" cy="72" r="2" fill="currentColor" />
                  <circle cx="64" cy="72" r="2" fill="currentColor" />
                  <circle cx="76" cy="72" r="2" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Persoonlijk gesprek</h3>
              <p className="text-white text-center text-lg">Eerst even samen overleggen</p>
            </div>
            <button className="bg-[var(--color-30)] text-[var(--color-70)] px-8 py-2 text-sm font-semibold tracking-wide hover:bg-[var(--color-10)] transition-colors">
              INPLANNEN
            </button>
          </div>

          {/* Email Card */}
          <div className="flex flex-col items-center">
            <div className="bg-[var(--color-90)] w-full aspect-[1/1] flex flex-col items-center justify-center p-8 mb-6">
              {/* Email Icon */}
              <div className="mb-8">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="text-white">
                  <rect
                    x="20"
                    y="35"
                    width="80"
                    height="50"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="currentColor"
                  />
                  <path d="M20 35 L60 60 L100 35" stroke="var(--color-90)" strokeWidth="3" fill="none" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Email</h3>
              <p className="text-white text-center text-lg">Rustig op papier zetten</p>
            </div>

            <a href="mailto:info@knowei.nl" onClick={handleMailClick} target="_blank" rel="noopener noreferrer">
                <button className="bg-[var(--color-30)] text-[var(--color-70)] px-8 py-2 text-sm font-semibold tracking-wide hover:bg-[var(--color-10)] transition-colors">
                {copied ? "GEKOPIEERD" : "STARTEN"}
                </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
