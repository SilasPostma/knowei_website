"use client";

import React, { useCallback, useRef, useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/knowei_website' : '';

// SVG Icons
const PlayIcon = () => (
  <svg 
    width="64" height="64" viewBox="0 0 64 64" fill="none" 
    stroke="#FAF7F3"
    strokeWidth="8"
  >
    <line x1="16" y1="10" x2="52" y2="34"></line>
    <line x1="48" y1="30" x2="18" y2="54"></line>
    <line x1="14" y1="52" x2="15" y2="12"></line>
  </svg>
)

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
  { id: 1, video: `${basePath}/test_video.mp4`, name: 'Janny de Vries' },
  { id: 2, video: `${basePath}/test_video_2.mp4`, name: 'Johny van der Weesp' },
  { id: 3, video: `${basePath}/test_video.mp4`, name: 'Hachmid Youra' },
  { id: 4, video: `${basePath}/test_video_2.mp4`, name: 'Janny de Vries' },
  { id: 5, video: `${basePath}/test_video.mp4`, name: 'Johny van der Weesp' },
  { id: 6, video: `${basePath}/test_video_2.mp4`, name: 'Hachmid Youra' },
]

const VideoCard = ({ slide }: { slide: typeof vids[0] }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="overflow-hidden flex flex-col h-full relative group">
      <div className="pt-6 px-2 w-full shrink-0 relative">
        <div className="relative w-full bg-black cursor-pointer" onClick={togglePlay}>
          <video 
            ref={videoRef}
            src={slide.video}
            loop 
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
          
          {/* Play Button Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <PlayIcon />
            </div>
          )}
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
    <div id="voorbeelden" className="w-full bg-[var(--color-10)] flex flex-col items-center justify-center min-h-screen py-12 md:py-20">
        <div className="w-full px-4 mb-8 md:mb-12 pt-8">
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
      
      <div className="flex items-center gap-4 w-full max-w-[95%]">
        
        {/* Prev Button */}
        <button 
          onClick={scrollPrev}
          className="p-3 rounded-full hover:bg-[var(--color-30)] text-[var(--color-70)] transition-colors hidden md:block"
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
          className="p-3 rounded-full hover:bg-[var(--color-30)] text-[var(--color-70)] transition-colors hidden md:block"
          aria-label="Next slide"
        >
          <ArrowRightIcon />
        </button>
        
      </div>
    </div>
  )
}