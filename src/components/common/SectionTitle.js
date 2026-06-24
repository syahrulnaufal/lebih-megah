// src/components/common/SectionTitle.js
import React from 'react';

export default function SectionTitle({ mainText, accentText, subtitle, center = true, size = 'text-3xl md:text-4xl' }) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className="text-[10px] font-bold text-[#5cb3ff] tracking-[0.3em] uppercase block mb-2 font-mono">
          {subtitle}
        </span>
      )}
      <h2 className={`${size} font-extrabold uppercase tracking-wider font-jakarta text-white`}>
        {mainText} {accentText && <span>{accentText}</span>}
      </h2>
    </div>
  );
}
