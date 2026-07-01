// src/components/cards/BenefitCard.js
import React from 'react';

export default function BenefitCard({
  tier,
  price,
  logoPromo,
  fundContribution,
  promoRatio,
  accentColor = 'var(--color-primary-light)',
  glowClass = 'diamond'
}) {
  return (
    <div 
      className={`glass-panel p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 benefit-card-${glowClass}`}
      style={{
        boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.7)',
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[40px] -mr-6 -mt-6 pointer-events-none"
           style={{ backgroundColor: `${accentColor}10` }} />

      <h3 className="text-2xl font-black font-jakarta text-white uppercase tracking-wider mb-2">
        {tier} <span className="text-xs font-mono text-white/30 font-medium">TIER</span>
      </h3>

      <div className="text-xl font-black font-mono text-[var(--color-primary-light)] mb-6">
        {price}
      </div>

      <div className="space-y-4 pt-6 border-t border-white/5">
        <div className="space-y-2">
          <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest block font-jakarta">Logo / Flyer Promosi:</span>
          <span className="text-xs font-bold text-white leading-relaxed font-jakarta">
            {logoPromo}
          </span>
        </div>

        <div className="space-y-2">
          <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest block font-jakarta">Kontribusi Pendanaan:</span>
          <span className="text-xs font-bold text-white leading-relaxed font-jakarta">
            {fundContribution}
          </span>
        </div>

        <div className="space-y-2">
          <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest block font-jakarta">Rasio Promosi Kemitraan:</span>
          <span className="text-xs font-bold text-white leading-relaxed font-jakarta">
            {promoRatio}
          </span>
        </div>
      </div>
    </div>
  );
}
