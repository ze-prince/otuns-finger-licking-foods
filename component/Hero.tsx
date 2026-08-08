'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [showButtons, setShowButtons] = useState(false);

  const title = "Finger Licking Nigerian Delights";
  const subtitle = "Signature Asun, Small Chops, Party Packs & More. Hot, Fresh & Delivered Fast!";

  useEffect(() => {
    let titleIndex = 0;
    let subtitleIndex = 0;

    // Type the title first
    const titleInterval = setInterval(() => {
      if (titleIndex <= title.length) {
        setDisplayedTitle(title.slice(0, titleIndex));
        titleIndex++;
      } else {
        clearInterval(titleInterval);

        // After title finishes, type the subtitle
        const subtitleInterval = setInterval(() => {
          if (subtitleIndex <= subtitle.length) {
            setDisplayedSubtitle(subtitle.slice(0, subtitleIndex));
            subtitleIndex++;
          } else {
            clearInterval(subtitleInterval);
            setShowButtons(true); // Show buttons after typing finishes
          }
        }, 28); // Speed of subtitle typing
      }
    }, 55); // Speed of title typing

    return () => clearInterval(titleInterval);
  }, []);

  return (
    <section className="relative h-[85vh] md:h-[90vh] flex items-center text-white overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center md:object-center"
      >
        <source src="/ota.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* Animated Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-5 md:mb-6 leading-tight drop-shadow-lg min-h-[120px] md:min-h-[160px]">
          {displayedTitle}
          <span className="inline-block w-[3px] h-[0.9em] bg-orange-400 ml-1 animate-pulse" />
        </h1>
        
        {/* Animated Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md min-h-[60px]">
          {displayedSubtitle}
        </p>

        {/* Buttons appear after typing finishes */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Link href="/menu">
            <Button size="lg" className="w-full sm:w-auto text-lg px-10 py-6 md:py-7 bg-orange-600 hover:bg-orange-700">
              View Menu & Order
            </Button>
          </Link>
          
          <a href="https://wa.me/2348088740343?text=Hi, I'd like to place an order" target="_blank">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-lg px-10 py-6 md:py-7 border-white text-white hover:bg-white hover:text-black"
            >
              Order via WhatsApp
            </Button>
          </a>
        </div>
      </div><br />

      {/* Scroll indicator */}<br />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10 text-white/80 text-sm">
        ↓ Scroll to explore
      </div>
    </section>
  );
}