"use client";

import React, { useCallback, useRef, useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import BestellenButton from '@/components/ui/bestellenButton'

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/knowei_website' : '';

// SVG Icons
const PlayIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80 hover:opacity-100 transition-opacity">
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="10 8 16 12 10 16 10 8" fill="white"></polygon>
  </svg>
)

const ArrowLeftIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
)

const slides = [
  { id: 1, video: `${basePath}/test_video.mp4`, title: 'CHEMIE VAN OVERLEGGEN', desc: 'Deze box daagt je uit en maakt je actief oph et gebied van overleggen enzo.' },
  { id: 2, video: `${basePath}/test_video_2.mp4`, title: 'SAMEN INNOVEREN', desc: 'Deze box daagt je uit en maakt je actief oph et gebied van overleggen enzo.' },
  { id: 3, video: `${basePath}/test_video.mp4`, title: 'GROWTH HACKING', desc: 'Deze box daagt je uit en maakt je actief oph et gebied van overleggen enzo.' },
  { id: 4, video: `${basePath}/test_video_2.mp4`, title: 'TEAM BUILDING', desc: 'Deze box daagt je uit en maakt je actief oph et gebied van overleggen enzo.' },
  { id: 5, video: `${basePath}/test_video.mp4`, title: 'LEADERSHIP', desc: 'Deze box daagt je uit en maakt je actief oph et gebied van overleggen enzo.' },
]

const VideoCard = ({ slide }: { slide: typeof slides[0] }) => {
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
    <div className="bg-[var(--color-30)] overflow-hidden flex flex-col h-full relative group">
      <div className="pt-6 px-6 w-full shrink-0 relative">
        <div className="relative h-48 w-full bg-black cursor-pointer" onClick={togglePlay}>
          <video 
            ref={videoRef}
            src={slide.video}
            loop 
            playsInline
            className="w-full h-full object-cover"
            // Default muted if autoplay is desired, but for play button we usually want sound. 
            // We start paused, so no autoplay.
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
      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold mb-2 truncate text-[var(--color-70)]">{slide.title}</h3>
        <p className="mb-6 line-clamp-2 text-[var(--color-70)]">{slide.desc}</p>
        
        {/* Button */}
        <div className="flex justify-center mt-auto">
          <BestellenButton href="/" />
        </div>
      </div>
    </div>
  );
};

export default function VideoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 4000, stopOnInteraction: true })])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="w-full bg-[var(--color-10)] flex items-center justify-center min-h-screen py-20">
      <div className="flex items-center gap-4 w-full max-w-[95%]">
        
        {/* Prev Button */}
        <button 
          onClick={scrollPrev}
          className="p-3 bg-[var(--color-30)] rounded-full hover:bg-[var(--color-50)] text-[var(--color-70)] transition-colors hidden md:block"
          aria-label="Previous slide"
        >
          <ArrowLeftIcon />
        </button>

        {/* Carousel Viewport */}
        <div className="overflow-hidden flex-1" ref={emblaRef}>
          <div className="flex -ml-4">
            {slides.map((slide) => (
              <div key={slide.id} className="flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_25%] min-w-0 pl-4">
                <VideoCard slide={slide} />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button 
          onClick={scrollNext}
          className="p-3 bg-[var(--color-30)] rounded-full hover:bg-[var(--color-50)] text-[var(--color-70)] transition-colors hidden md:block"
          aria-label="Next slide"
        >
          <ArrowRightIcon />
        </button>
        
      </div>
    </div>
  )
}