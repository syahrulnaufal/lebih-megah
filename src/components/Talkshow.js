import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import '../App.css';

const infoItems = [
  { icon: Calendar, label: 'Tanggal', value: 'Kamis, 5 November 2026', hoverColor: 'group-hover:bg-neon-blue/10 group-hover:border-neon-blue/50', iconColor: 'text-neon-blue' },
  { icon: Clock, label: 'Waktu', value: '08.30 - 11.30 WIB', hoverColor: 'group-hover:bg-neon-purple/10 group-hover:border-neon-purple/50', iconColor: 'text-neon-purple' },
  { icon: MapPin, label: 'Lokasi', value: 'Gedung Auditorium 2, Kampus 3 UIN', hoverColor: 'group-hover:bg-neon-orange/10 group-hover:border-neon-orange/50', iconColor: 'text-neon-orange' },
];

const Talkshow = () => {
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
      id="talkshow"
      ref={sectionRef}
      className="relative w-full py-8 md:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left column — Text content */}
        <div className="lg:col-span-6 flex flex-col items-start w-full">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-1.5 sm:gap-2.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-neon-blue/40 bg-neon-blue/10 mb-4 lg:mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(29,188,211,0.2)] w-max transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue shadow-[0_0_8px_rgba(29,188,211,0.8)]" />
            </span>
            <span className="text-neon-blue font-black text-xs md:text-sm tracking-[0.2em] uppercase drop-shadow-[0_0_8px_rgba(29,188,211,0.5)] font-jakarta">
              TALKSHOW
            </span>
          </div>

          {/* Title */}
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] uppercase mb-3 lg:mb-4 tracking-tighter w-full font-jakarta transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
            }`}
          >
            Ideas that Matter:{' '}
            <br />
            <span className="text-gradient-section leading-[1.2]">Impactful Solution</span>
          </h2>

          {/* Subtitle */}
          <p
            className={`text-sm md:text-xl text-white/60 w-full font-light mb-6 lg:mb-8 leading-relaxed transition-all duration-700 delay-200 ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Ubah cara pandangmu terhadap teknologi. Saatnya dengar langsung dari mereka yang membangun solusinya.
          </p>

          {/* Info items */}
          <div className="flex flex-col gap-3 md:gap-4 w-full">
            {infoItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 sm:gap-4 group transition-all duration-700 ${
                    visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                  }`}
                  style={{ transitionDelay: `${300 + idx * 100}ms` }}
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center ${item.hoverColor} transition-all duration-300 shrink-0`}>
                    <Icon className={`w-4 h-4 md:w-5 md:h-5 ${item.iconColor}`} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-white/50 text-[9px] md:text-[10px] font-mono tracking-[0.2em] uppercase mb-0.5 leading-none">
                      {item.label}
                    </h4>
                    <p className="font-medium text-white/90 text-xs md:text-base leading-tight">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div
            className={`w-full sm:w-auto z-40 mt-6 lg:mt-8 transition-all duration-700 delay-[600ms] ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <a
              href="#talkshow"
              className="group relative flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 lg:px-10 lg:py-5 bg-white text-black font-bold uppercase tracking-widest overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] w-full sm:w-max font-jakarta"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2 text-xs lg:text-base">
                Lihat Detail
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-all duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>

        {/* Right column — Speaker visual */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center w-full h-[350px] md:h-[500px] lg:h-[600px] z-10">
          {/* Spinning circles */}
          <div
            className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] border border-white/10 rounded-full border-dashed opacity-50"
            style={{ animation: 'spin 30s linear infinite' }}
          />
          <div
            className="absolute w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[350px] lg:h-[350px] border-2 border-neon-purple/20 rounded-full opacity-50"
            style={{ animation: 'spin 40s linear infinite reverse' }}
          />
          {/* Gradient blob */}
          <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-gradient-to-tr from-neon-blue/20 via-neon-purple/20 to-transparent rounded-full blur-[60px]" />

          {/* Speaker name card */}
          <div
            className={`relative z-30 bg-black/80 backdrop-blur-2xl border border-white/10 p-6 md:p-8 rounded-lg md:rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-700 delay-500 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-neon-purple/30 rounded-full blur-[40px] -mr-6 -mt-6 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-1 leading-none font-jakarta">
                Speaker
                <br />
                SwitchFest
              </h3>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="w-2 h-2 rounded-full bg-neon-orange animate-pulse" />
                <p className="text-neon-orange font-mono text-[9px] md:text-xs tracking-widest uppercase font-bold leading-none">
                  Coming Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talkshow;
