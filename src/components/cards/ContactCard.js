// src/components/cards/ContactCard.js
import React from 'react';
import { Phone } from 'lucide-react';

export default function ContactCard({ role, name, phone, accentColor = '#5cb3ff' }) {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const waLink = `https://wa.me/${cleanPhone}`;

  return (
    <div 
      className="glass-panel p-8 rounded-[2.5rem] bg-navy-dark/20 text-center relative overflow-hidden group hover:border-[#5cb3ff]/30 transition-all duration-500"
      style={{
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#5cb3ff]/5 rounded-full blur-[20px] pointer-events-none" />
      
      <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest block font-jakarta mb-2">
        {role}
      </span>
      <h4 className="text-lg font-bold font-jakarta text-white uppercase tracking-wider mb-2">
        {name}
      </h4>
      <p className="text-xs text-white/50 mb-6 font-mono">
        {phone}
      </p>

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-4 py-2 border rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 font-jakarta"
        style={{
          borderColor: `${accentColor}40`,
          color: '#fff',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = accentColor;
          e.currentTarget.style.backgroundColor = `${accentColor}15`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = `${accentColor}40`;
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <Phone className="w-3.5 h-3.5" style={{ color: accentColor }} />
        Hubungi via WA
      </a>
    </div>
  );
}
