import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, MapPin, Music } from 'lucide-react';
import GlowingOrb from './common/GlowingOrb';
import SectionTitle from './common/SectionTitle';
import '../App.css';

const concertInfo = [
  { icon: Calendar, label: 'Tanggal', value: 'Jumat, 13 November 2026', hoverColor: 'group-hover:bg-rose-500/10 group-hover:border-rose-500/50', iconColor: 'text-rose-500' },
  { icon: Clock, label: 'Waktu', value: '18.30 - Selesai', hoverColor: 'group-hover:bg-rose-500/10 group-hover:border-rose-500/50', iconColor: 'text-rose-500' },
  { icon: MapPin, label: 'Lokasi', value: 'Gedung Auditorium 2, Kampus 3 UIN Walisongo', hoverColor: 'group-hover:bg-rose-500/10 group-hover:border-rose-500/50', iconColor: 'text-rose-500' },
];

const Concert = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="concert"
      ref={sectionRef}
      className="relative w-full py-16 md:py-32 overflow-hidden px-4"
    >
      {/* Background neon glows */}
      <GlowingOrb color="orange" size="w-[500px] h-[500px]" position="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" opacity="opacity-5" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column — Guest Star Visual / Music orbits */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center w-full h-[350px] md:h-[500px] z-10 order-last lg:order-first">
          {/* Spinning music orbits */}
          <div
            className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] border border-rose-500/10 rounded-full border-dashed opacity-50"
            style={{ animation: 'spin 25s linear infinite' }}
          />
          <div
            className="absolute w-[220px] h-[220px] md:w-[320px] md:h-[320px] border-2 border-rose-500/20 rounded-full opacity-45"
            style={{ animation: 'spin 35s linear infinite reverse' }}
          />
          {/* Gradient backdrop */}
          <div className="absolute w-[220px] h-[220px] md:w-[320px] md:h-[320px] bg-gradient-to-tr from-rose-500/20 via-purple-500/20 to-transparent rounded-full blur-[70px]" />

          {/* Guest Star Card */}
          <div
            className={`relative z-30 bg-black/80 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-700 delay-300 flex flex-col items-center justify-center text-center ${
              visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'
            }`}
          >
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/30 rounded-full blur-[40px] -mr-6 -mt-6 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mb-6 animate-pulse">
                <Music className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-2 leading-tight font-jakarta">
                Guest Star
                <br />
                SwitchFest
              </h3>
              <div className="flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                <p className="text-rose-400 font-mono text-[10px] md:text-xs tracking-widest uppercase font-black leading-none">
                  To Be Announced
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column — Text Content */}
        <div className="lg:col-span-6 flex flex-col items-start w-full">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-500/40 bg-rose-500/10 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(244,63,94,0.15)] w-max transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
            </span>
            <span className="text-rose-400 font-black text-xs md:text-sm tracking-[0.25em] uppercase font-jakarta">
              Closing Celebration
            </span>
          </div>

          {/* Title */}
          <div
            className={`w-full transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
            }`}
          >
            <SectionTitle
              mainText="SwitchFest"
              accentText="Closing Concert"
              center={false}
              size="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1]"
            />
          </div>

          {/* Subtitle */}
          <p
            className={`text-sm md:text-lg text-white/60 w-full font-light mb-8 leading-relaxed transition-all duration-700 delay-200 ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Rayakan kebersamaan dan berakhirnya ajang festival teknologi kita dengan konser penutup spektakuler yang menampilkan kolaborasi musik luar biasa.
          </p>

          {/* Info Items */}
          <div className="flex flex-col gap-4 w-full mb-8">
            {concertInfo.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-4 group transition-all duration-700 ${
                    visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                  }`}
                  style={{ transitionDelay: `${300 + idx * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center ${item.hoverColor} transition-all duration-300 shrink-0`}>
                    <Icon className={`w-5 h-5 ${item.iconColor}`} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-white/50 text-[10px] font-mono tracking-[0.2em] uppercase mb-0.5 leading-none">
                      {item.label}
                    </h4>
                    <p className="font-semibold text-white/90 text-sm md:text-base leading-tight">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stage lights decorative footer line */}
          <div
            className={`w-full flex items-center gap-2 pt-6 border-t border-white/5 text-white/45 text-xs font-semibold tracking-wide font-jakarta transition-all duration-700 delay-[600ms] ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <Music className="w-4 h-4 text-rose-500 animate-pulse" />
            <span>Terbuka untuk Umum & Seluruh Peserta SwitchFest 2026</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Concert;
