// src/components/cards/PillarCard.js
import React from 'react';

export default function PillarCard({ icon: Icon, title, description, className = '', style = {} }) {
  return (
    <div 
      className={`relative p-8 md:p-10 rounded-[2.5rem] glass-navy border border-[#5cb3ff]/10 hover:border-[#5cb3ff]/30 transition-all duration-500 group overflow-hidden card-hover ${className}`}
      style={style}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent pointer-events-none md:hidden" />
      <div className="flex items-start gap-5 relative z-10 text-left">
        {Icon && (
          <Icon
            className="w-10 h-10 text-neon-blue shrink-0 group-hover:scale-110 transition-transform duration-300"
            aria-hidden="true"
          />
        )}
        <div>
          <h3 className="font-bold text-xl text-white mb-2 font-jakarta">{title}</h3>
          <p className="text-sm text-white/60 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

