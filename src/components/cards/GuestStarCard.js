// src/components/cards/GuestStarCard.js
import React from 'react';
import { Music } from 'lucide-react';

export default function GuestStarCard({ image, name, genre, delay = '0s' }) {
  // If genre is provided, render the character cutout style with genre badge (ConcertPage.js)
  if (genre) {
    return (
      <div 
        className="flex flex-col items-center text-center group animate-float w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] max-w-[260px]"
        style={{ animationDelay: delay }}
      >
        {/* Photo Container - No Crop, No Card panel */}
        <div className="w-full h-48 md:h-60 flex items-center justify-center relative overflow-visible">
          <img 
            src={image} 
            alt={name} 
            className="max-w-full max-h-full object-contain filter drop-shadow-[0_10px_20px_rgba(237,55,77,0.15)] group-hover:drop-shadow-[0_15px_30px_rgba(237,55,77,0.4)] group-hover:scale-105 transition-all duration-700" 
          />
        </div>

        <div className="mt-5 space-y-1.5 text-center">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-white/50 uppercase tracking-wider">
            <Music className="w-2.5 h-2.5 text-[var(--color-highlight-orange)]" />
            <span>{genre}</span>
          </div>
          <h4 className="text-xl font-black font-jakarta text-white group-hover:text-[var(--color-highlight-orange)] transition-colors tracking-wide">{name}</h4>
        </div>
      </div>
    );
  }

  // Otherwise, render the circular cropped layout (general or homepage style)
  return (
    <div 
      className="flex flex-col items-center group relative hero-mascot-wrap"
      style={{ 
        animation: `float 6s ease-in-out infinite`, 
        animationDelay: delay 
      }}
    >
      <div 
        className="relative w-44 h-44 md:w-52 md:h-52 mb-4 rounded-full overflow-hidden transition-transform duration-500 group-hover:scale-105"
        style={{ 
          boxShadow: `0 10px 40px rgba(92, 179, 255, 0.15)`,
          border: `1.5px solid rgba(255, 255, 255, 0.1)` 
        }}
      >
        {/* Inner glow ring */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--color-primary-light)]/30 rounded-full transition-colors duration-500 z-10 pointer-events-none" />
        
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
      </div>
      <h4 className="text-sm font-bold font-jakarta text-white uppercase tracking-wider group-hover:text-[var(--color-primary-light)] transition-colors">
        {name}
      </h4>
    </div>
  );
}

