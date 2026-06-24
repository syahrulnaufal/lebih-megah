// src/components/common/SubpageHeader.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function SubpageHeader({ title, accentTitle, subtitle, categoryLabel, backPath = '/' }) {
  return (
    <div className="w-full relative z-10 mb-12">
      <Link
        to={backPath}
        className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider mb-8 font-jakarta"
      >
        <ArrowLeft className="w-4 h-4" /> Kembali
      </Link>

      <div className="flex flex-col items-center text-center relative">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white font-jakarta leading-none">
          {title} {accentTitle && <span>{accentTitle}</span>}
        </h1>
        {subtitle && (
          <p className="text-xs text-white/50 max-w-xl leading-relaxed mt-6 font-jakarta">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
