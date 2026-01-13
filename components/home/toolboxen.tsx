"use client";

import React, { useCallback, useRef, useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
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

const CloseIcon = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="4">
    <line x1="23" y1="2" x2="2" y2="22"></line>
    <line x1="2" y1="3" x2="22" y2="22"></line>
  </svg>
)

interface Slide {
  id: number;
  video: string;
  title: string;
  desc: string;
  price: string; 
  format: string;
  details: string; 
  content: string[]; // Changed to array for bullet points
  image?: string; 
}

// Updated slides data
const slides: Slide[] = [
  { 
    id: 1, 
    video: `${basePath}/test_video.mp4`, 
    title: 'CHEMIE VAN OVERLEGGEN', 
    desc: 'Deze box daagt je uit en maakt je actief op het gebied van overleggen enzo.',
    price: '€ 149,-',
    format: 'Fysieke Box',
    details: '20+ deelnemers.  -   1 onderwerp   -   generiek',
    content: [
      '1x Handleiding',
      '1x Set gesprekskaarten',
      '1x Zandloper',
      '1x Notitieblok'
    ]
  },
  { 
    id: 2, 
    video: `${basePath}/test_video_2.mp4`, 
    title: 'SAMEN INNOVEREN', 
    desc: 'Deze box daagt je uit en maakt je actief op het gebied van overleggen enzo.',
    price: '€ 199,-',
    format: 'Digitaal & Fysiek',
    details: '20+ deelnemers.  -   1 onderwerp   -   generiek',
    content: [
      '5x Innovatie canvassen',
      '1x Brainstorm gids',
      'Access tot online portal'
    ]
  },
  { 
    id: 3, 
    video: `${basePath}/test_video.mp4`, 
    title: 'GROWTH HACKING', 
    desc: 'Deze box daagt je uit en maakt je actief op het gebied van overleggen enzo.',
    price: '€ 129,-',
    format: 'Online Course',
    details: '20+ deelnemers.  -   1 onderwerp   -   generiek',
    content: [
      'Toegang tot 10 modules',
      'Werkboeken',
      'Growth templates'
    ]
  },
  { 
    id: 4, 
    video: `${basePath}/test_video_2.mp4`, 
    title: 'TEAM BUILDING', 
    desc: 'Deze box daagt je uit en maakt je actief op het gebied van overleggen enzo.',
    price: '€ 249,-',
    format: 'Event Box',
    details: '20+ deelnemers.  -   1 onderwerp   -   generiek',
    content: [
      'Spelmaterialen',
      'Teamgids',
      'Nabesprekingsvragen'
    ]
  },
  { 
    id: 5, 
    video: `${basePath}/test_video.mp4`, 
    title: 'LEADERSHIP', 
    desc: 'Deze box daagt je uit en maakt je actief op het gebied van overleggen enzo.',
    price: '€ 299,-',
    format: 'Masterclass',
    details: '20+ deelnemers.  -   1 onderwerp   -   generiek',
    content: [
      'Reflectiekaarten',
      'Leiderschapsboek',
      '1-op-1 coachingsessie'
    ]
  },
]

const ToolboxPopup = ({ slide, onClose }: { slide: Slide; onClose: () => void }) => {
  // Prevent body scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 transition-opacity animate-in fade-in duration-200" onClick={onClose}>
      <div 
        className="bg-[var(--color-30)] w-full max-w-[80%] relative flex flex-col shadow-2xl overflow-hidden border-[8px] border-[var(--color-70)] h-[80%]" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute -top-[8px] -right-[8px] w-14 h-14 flex items-center justify-center bg-[var(--color-70)] transition-all z-10 group text-[var(--color-30)] hover:text-[var(--color-50)]"
        >
          <CloseIcon color="currentColor" /> 
        </button>

        <div className="p-8 overflow-y-auto custom-scrollbar">
          <h2 className="text-2xl font-bold text-[var(--color-70)] uppercase mb-2">{slide.title}</h2>
          
          <div>
            <p className="text-lg text-[var(--color-90)] font-medium">Prijs: {slide.price}</p>
          </div>
          <div>
            <p className="text-lg text-[var(--color-90)] font-medium mb-4">Formaat: {slide.format}</p>
          </div>
          <div>
            <p className="bg-[var(--color-10)] w-fit mb-6 px-2 text-lg text-[var(--color-90)] font-medium">{slide.details}</p>
          </div>

          <div className="mb-8">
            <span className="block text-md font-bold text-[var(--color-70)] uppercase mb-2">Inhoud</span>
            <ul className="list-disc list-inside text-[var(--color-90)] pl-2">
              {slide.content.map((item, index) => (
                <li key={index} className="leading-snug">{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-end absolute bottom-10">
            <div>
              <p className="text-md mt-8 text-[var(--color-90)] font-medium">Is dit precies wat je nodig hebt?</p>
            </div>

            <div className="flex items-end justify-between my-1 relative">
              <BestellenButton href="/" />
              
              {slide.image && (
                <div className="absolute right-0 bottom-0 md:relative md:block w-32 h-32 ml-4">
                    <img src={slide.image} alt="" className="w-full h-full object-contain" />
                </div>
              )}
            </div>

            <div>
              <p className="text-md mt-1 text-[var(--color-90)] font-medium">Of kijk verder naar bestaande toolboxen of laten we samen een toolbox op maat ontwerpen.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const VideoCard = ({ slide, onClick }: { slide: Slide; onClick: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
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
    <div 
      className="bg-[var(--color-30)] hover:bg-[var(--color-50)] overflow-hidden flex flex-col h-full relative group cursor-pointer transition-colors duration-300"
      onClick={onClick}
    >
      <div className="pt-6 px-6 w-full shrink-0 relative">
        <div className="relative h-48 w-full bg-black" onClick={togglePlay}>
          <video 
            ref={videoRef}
            src={slide.video}
            loop 
            playsInline
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
      <div className="p-6 flex flex-col grow">
        <h3 className="text-lg font-bold mb-2 truncate text-[var(--color-70)]">{slide.title}</h3>
        <p className="text-sm mb-6 line-clamp-2 text-[var(--color-70)]">{slide.desc}</p>
        
        {/* Button */}
        <div className="flex justify-center mt-auto">
          {/* Prevent opening popup when directly clicking buy, or let it happen? 
              Assuming user intends to navigate. */}
          <div onClick={(e) => e.stopPropagation()}>
            <BestellenButton href="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function VideoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [selectedSlide, setSelectedSlide] = useState<Slide | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <>
      <div id="toolboxen" className="w-full bg-[var(--color-10)] flex items-center justify-center min-h-screen py-20 relative">
          <div className="absolute top-20 w-full px-4 z-10">
              <h2 className="text-xl md:text-2xl font-bold text-center text-[var(--color-90)] mb-2">
                  Ontdek de toolboxen van anderen.
              </h2>
              <div className="text-center text-[var(--color-90)] max-w-3xl mx-auto mb-4 space-y-2">

                <p className="text-base md:text-lg leading-relaxed text-center text-[var(--color-90)]">
                  In deze shop vind je toolboxen van mensen zoals jij. Blader, kies en ontdek welke toolboxen voor anderen werken en misschien ook voor jou.
                </p>
              </div>
          </div>
        <div className="flex items-center gap-4 mt-8 w-full max-w-[95%]">
          
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
                  <VideoCard slide={slide} onClick={() => setSelectedSlide(slide)} />
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

      {selectedSlide && (
        <ToolboxPopup 
          slide={selectedSlide} 
          onClose={() => setSelectedSlide(null)} 
        />
      )}
    </>
  )
}