// src/components/cards/TimelineCard.js
import React from 'react';

export default function TimelineCard({ step, date, title, description, accentColor = 'var(--color-primary-light)', className = '', style = {} }) {
  return (
    <div 
      className={`glass-navy border border-[var(--color-primary-light)]/10 p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group hover:border-[var(--color-primary-light)]/30 transition-all duration-500 shadow-xl text-left card-hover ${className}`}
      style={style}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-primary-light)]/5 rounded-full blur-[20px] pointer-events-none" />
      
      <div className="flex items-center justify-between gap-4 mb-2.5">
        <span className="text-[10px] font-black font-mono tracking-wider uppercase" style={{ color: accentColor }}>
          {date}
        </span>
        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded uppercase tracking-wider bg-white/5 border border-white/10 text-white/30">
          Step {step}
        </span>
      </div>

      <h3 className="text-lg font-bold font-jakarta text-white uppercase mb-2">{title}</h3>
      <p className="text-xs text-white/50 leading-relaxed font-jakarta">{description}</p>
    </div>
  );
}

