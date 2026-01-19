"use client";

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/knowei_website' : '';

// SVG Icons


const ArrowLeftIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="4">
    <line x1="23" y1="4" x2="8" y2="19"></line>
    <line x1="23" y1="28" x2="7" y2="14"></line>
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="4">
    <line x1="9" y1="4" x2="24" y2="19"></line>
    <line x1="9" y1="28" x2="25" y2="14"></line>
  </svg>
)

const vids = [
  { id: 1, video: '9Ce3vN64AhQ', name: 'Henk Janssen' },
  { id: 2, video: 'mW9rH9eG8LA', name: 'Johny van der Weesp' }, // AANPASSEN
  { id: 3, video: 'KJ3F-XlnPo8', name: 'Hachmid Youra' }, // AANPASSEN
  { id: 4, video: 'G6f3eFd8gHs', name: 'Janny de Vries' }, // AANPASSEN
  { id: 5, video: 'A5VN9Kp8Lvs', name: 'Johny van der Weesp' }, // AANPASSEN
  { id: 6, video: 'p65-3IFFk40', name: 'Hachmid Youra' }, // AANPASSEN
]

const VideoCard = ({ slide }: { slide: typeof vids[0] }) => {
  return (
    <div className="overflow-hidden flex flex-col h-full relative group">
      <div className="pt-6 px-2 w-full shrink-0 relative">
        <div className="relative w-full bg-black aspect-video">
          <iframe 
            src={`https://www.youtube.com/embed/${slide.video}`}
            title={slide.name}
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="pt-2 px-2 flex flex-col grow items-end">
        <h3 className="text-l font-semibold mb-2 truncate text-[var(--color-90)]">{slide.name}</h3>
      </div>
    </div>
  );
};

export default function VideoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div id="voorbeelden" className="w-full bg-[var(--color-10)] flex flex-col items-center min-h-screen pb-12 md:pb-20 pt-8 md:pt-16">
        {/* Top half area - centers text between top and carousel */}
        <div className="flex-1 flex flex-col justify-center w-full">
          <div className="w-full px-4">
              <h2 className="text-xl md:text-2xl font-bold text-center text-[var(--color-90)] mb-4">
                  Zie hoe onze toolboxen gebruikt worden. 
              </h2>

              {/* Description Text */}
              <div className="text-center text-[var(--color-90)] max-w-3xl mx-auto space-y-2">
              <p className="text-sm md:text-lg leading-relaxed">
                  Wie kan het beter vertellen dan wie het zelf mee heeft gemaakt?
              </p>
              </div>
          </div>
        </div>
      
      {/* Carousel Area - Centered in screen */}
      <div className="flex items-center gap-4 w-full max-w-[95%] shrink-0">
        
        {/* Prev Button */}
        <button 
          onClick={scrollPrev}
          className="p-3 rounded-full hover:bg-[var(--color-30)] text-[var(--color-70)] transition-colors md:block"
          aria-label="Previous slide"
        >
          <ArrowLeftIcon />
        </button>

        {/* Carousel Viewport */}
        <div className="overflow-hidden flex-1" ref={emblaRef}>
          <div className="flex">
            {vids.map((slide) => (
              <div key={slide.id} className="flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_35%] min-w-0">
                <VideoCard slide={slide} />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button 
          onClick={scrollNext}
          className="p-3 rounded-full hover:bg-[var(--color-30)] text-[var(--color-70)] transition-colors md:block"
          aria-label="Next slide"
        >
          <ArrowRightIcon />
        </button>
      </div>

      {/* Bottom balancing space */}
      <div className="flex-1" />
    </div>
  )
}