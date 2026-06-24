// src/components/cards/EventCard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Info, UserPlus } from 'lucide-react';

export default function EventCard({
  id,
  title,
  badge,
  description,
  categories = [],
  benefits = [],
  accentColor = '#5cb3ff',
  icon,
  actionType = 'link',
  path = '',
  onAction,
  style = {},
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col p-8 md:p-10 overflow-hidden rounded-[2.5rem] glass-navy border transition-all duration-500 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.75rem)] max-w-[380px]"
      style={{
        ...style,
        transform: hovered ? 'translateY(-6px) scale(1.02)' : 'translateY(0) scale(1)',
        borderColor: hovered ? `${accentColor}50` : 'rgba(92, 179, 255, 0.08)',
        boxShadow: hovered 
          ? `0 25px 60px -15px rgba(0,0,0,0.8), 0 0 35px ${accentColor}25` 
          : '0 20px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)'
      }}
    >
      {/* Hover glow background blob */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none rounded-[2.5rem]"
        style={{
          background: `radial-gradient(circle at 100% 0%, ${accentColor} 0%, transparent 80%)`,
        }}
      />
      {/* Ambient blur blob */}
      <div
        className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-[0.03] group-hover:opacity-20 transition-opacity duration-700 mix-blend-screen blur-3xl pointer-events-none"
        style={{ background: accentColor }}
      />

      {/* Event Badge */}
      <div className="flex justify-between items-start mb-6">
        <span 
          className="px-3.5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest font-mono border"
          style={{ 
            borderColor: `${accentColor}30`, 
            background: `${accentColor}08`,
            color: accentColor
          }}
        >
          {badge}
        </span>
        
        {/* Event Icon */}
        <div 
          className="transition-all duration-300 origin-right flex-shrink-0"
          style={{
            transform: hovered ? 'scale(1.15)' : 'scale(1)',
            filter: hovered ? `drop-shadow(0 0 12px ${accentColor})` : 'none'
          }}
        >
          {icon}
        </div>
      </div>

      {/* Categories/Sub-events tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {categories.map((cat, catIdx) => (
          <span 
            key={catIdx}
            className="px-2.5 py-1 rounded text-[9px] font-bold tracking-wider font-jakarta uppercase transition-colors"
            style={{
              background: hovered ? `${accentColor}10` : 'rgba(255,255,255,0.02)',
              border: hovered ? `1px solid ${accentColor}25` : '1px solid rgba(255,255,255,0.05)',
              color: hovered ? accentColor : 'rgba(255,255,255,0.6)'
            }}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Title & Description */}
      <div className="space-y-3 mb-6">
        <h3 className="text-2xl md:text-3xl font-black text-white font-jakarta tracking-tight">{title}</h3>
        <p className="text-sm text-white/50 leading-relaxed font-jakarta font-medium">{description}</p>
      </div>

      {/* Highlight Benefits List */}
      <ul className="space-y-2.5 mb-8 text-xs text-white/70 font-jakarta flex-1">
        {benefits.map((benefit, bIdx) => (
          <li key={bIdx} className="flex items-center gap-2">
            <span 
              className="w-1.5 h-1.5 rounded-full shrink-0 animate-pulse" 
              style={{ 
                backgroundColor: accentColor, 
                boxShadow: `0 0 8px ${accentColor}` 
              }} 
            />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      {/* CTA Buttons */}
      <div className="space-y-3 w-full relative z-20">
        {actionType === 'popup' ? (
          <button
            onClick={onAction}
            className="w-full py-4 px-6 font-bold rounded-2xl transition-all duration-300 font-jakarta text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 active:scale-98"
            style={{ 
              backgroundColor: accentColor,
              color: (accentColor === '#5cb3ff' || accentColor === '#55D5E7') ? '#020817' : '#ffffff',
              boxShadow: hovered ? `0 10px 25px -5px ${accentColor}50` : 'none'
            }}
          >
            <UserPlus className="w-4 h-4" />
            Daftar Sekarang
          </button>
        ) : (
          <Link
            to={id === 'talkshow' ? '/register?category=talkshow' : '/register?category=concert'}
            className="w-full py-4 px-6 font-bold rounded-2xl transition-all duration-300 font-jakarta text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 active:scale-98"
            style={{ 
              backgroundColor: accentColor,
              color: (accentColor === '#5cb3ff' || accentColor === '#55D5E7') ? '#020817' : '#ffffff',
              boxShadow: hovered ? `0 10px 25px -5px ${accentColor}50` : 'none'
            }}
          >
            <UserPlus className="w-4 h-4" />
            Daftar Sekarang
          </Link>
        )}

        <Link
          to={path}
          className="w-full py-3.5 px-6 font-bold rounded-2xl border transition-all duration-300 font-jakarta text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-98 text-white/70 hover:text-white"
          style={{
            borderColor: hovered ? `${accentColor}30` : 'rgba(255,255,255,0.1)',
            background: hovered ? `${accentColor}0a` : 'rgba(255,255,255,0.02)',
          }}
        >
          <Info className="w-4 h-4 text-white/40" />
          Lihat Detail Acara
        </Link>
      </div>
    </div>
  );
}

