// src/components/common/GlowingOrb.js
import React from 'react';

export default function GlowingOrb({ color = 'blue', size = 'w-[500px] h-[500px]', position = '', opacity = 'opacity-5', animationDelay = '' }) {
  const bgColors = {
    blue: 'bg-neon-blue',
    purple: 'bg-neon-purple',
    orange: 'bg-neon-orange',
  };

  const bgClass = bgColors[color] || bgColors.blue;
  const delayClass = animationDelay ? `animation-delay-${animationDelay}` : '';

  return (
    <div
      className={`absolute rounded-full blur-[130px] pointer-events-none animate-[pulse-glow_10s_infinite] ${bgClass} ${size} ${position} ${opacity} ${delayClass}`}
      style={animationDelay ? { animationDelay } : undefined}
      aria-hidden="true"
    />
  );
}
