// src/components/Timeline.js
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Award, Trophy, Users, Mic, Music } from 'lucide-react';
import SectionTitle from './common/SectionTitle';
import TimelineCard from './cards/TimelineCard';
import '../App.css';

const timelineEvents = [
  {
    date: '24 SEP 2026',
    title: 'Pembukaan Switchfest',
    desc: 'Opening ceremony peresmian rangkaian festival Switchfest 2026 secara simbolis.',
    icon: Calendar,
    color: 'var(--color-highlight-orange)', // Purple
    link: '#',
  },
  {
    date: '28 SEP - 06 OKT 2026',
    title: 'Lomba Eksternal IT',
    desc: 'Kompetisi IT tingkat nasional (Web Programming, UI/UX Design, dan Design Poster / Infografis) secara online & offline.',
    icon: Trophy,
    color: 'var(--color-highlight-lime)', // Sky Blue
    link: '/lomba-it',
  },
  {
    date: '10 - 11 OKT 2026',
    title: 'Lomba Internal',
    desc: 'Kompetisi khusus mahasiswa Teknologi Informasi UIN Walisongo Semarang untuk mengasah bakat internal.',
    icon: Users,
    color: 'var(--color-primary-light)', // Teal
    link: '#',
  },
  {
    date: '17 OKT 2026',
    title: 'Lomba E-Sport (MLBB)',
    desc: 'Turnamen Mobile Legends: Bang Bang memperebutkan hadiah jutaan rupiah di panggung utama.',
    icon: Award,
    color: 'var(--color-highlight-orange)', // Orange
    link: '/esport',
  },
  {
    date: '24 - 25 OKT 2026',
    title: 'Lomba Futsal Cup',
    desc: 'Pertandingan futsal bergengsi antar instansi/sekolah untuk memperebutkan piala Switchfest.',
    icon: Trophy,
    color: 'var(--color-highlight-lime)', // Red
    link: '/futsal',
  },
  {
    date: '5 NOV 2026',
    title: 'National Talkshow',
    desc: 'Seminar nasional bertema "Ideas that Matter: Impactful Solution" bersama praktisi teknologi terkemuka Indonesia.',
    icon: Mic,
    color: 'var(--color-primary-light)', // Orange
    link: '/talkshow',
  },
  {
    date: 'JUM\'AT, 13 NOV 2026',
    title: 'Closing Concert',
    desc: 'Konser penutup spektakuler sebagai perayaan puncak rangkaian festival SwitchFest 2026 bersama bintang tamu spesial.',
    icon: Music,
    color: 'var(--color-highlight-orange)', // Violet
    link: '/concert',
  },
];

const Timeline = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="timeline" 
      ref={sectionRef} 
      className="py-16 md:py-32 relative overflow-hidden px-4"
    >
      {/* Background Neon Spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        
        {/* Header */}
        <div className={`transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <SectionTitle
            mainText="PETA JALAN"
            accentText="ACARA"
            size="text-4xl md:text-7xl"
          />
          <p className="text-white/60 max-w-xl mx-auto text-base md:text-lg text-center -mt-4">
            Ikuti perjalanan serangkaian acara SwitchFest 2026 mulai dari pendaftaran hingga panggung puncak konser closing.
          </p>
        </div>

        {/* Timeline Roadmap Winding Map Body */}
        <div className="relative pt-8">
          
          {/* Central Connecting SVG Road (Desktop only) */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[600px] hidden lg:block pointer-events-none" aria-hidden="true">
            <svg width="100%" height="100%" viewBox="0 0 600 1200" fill="none" preserveAspectRatio="none" className="opacity-40">
              {/* Path winding route */}
              <path 
                d="M 300 0 C 300 150, 480 150, 480 300 C 480 450, 120 450, 120 600 C 120 750, 480 750, 480 900 C 480 1050, 300 1050, 300 1200" 
                stroke="url(#road-gradient)" 
                strokeWidth="6" 
                strokeDasharray="12 8"
                className="animate-[dash_30s_linear_infinite]"
              />
              <defs>
                <linearGradient id="road-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  {/* <stop offset="0%" stopColor="var(--color-highlight-orange)" />
                  <stop offset="16.5%" stopColor="var(--color-highlight-lime)" />
                  <stop offset="33%" stopColor="var(--color-primary-light)" />
                  <stop offset="49.5%" stopColor="var(--color-highlight-orange)" />
                  <stop offset="66%" stopColor="var(--color-highlight-lime)" />
                  <stop offset="82.5%" stopColor="var(--color-primary-light)" />
                  <stop offset="100%" stopColor="var(--color-highlight-orange)" /> */}
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#fff" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Simple left line (Mobile only) */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-highlight-lime)] via-[var(--color-highlight-orange)] to-[var(--color-highlight-lime)] opacity-25 lg:hidden" aria-hidden="true" />

          {/* Roadmap Milestones */}
          <div className="space-y-12 lg:space-y-0 relative">
            {timelineEvents.map((evt, idx) => {
              const EvtIcon = evt.icon;
              // Even items align to left side on desktop, odd items to right side
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={evt.title}
                  onClick={() => evt.link && evt.link !== '#' && navigate(evt.link)}
                  className={`flex flex-col lg:flex-row items-start lg:items-center relative w-full lg:min-h-[260px] transition-all duration-1000 ${
                    evt.link && evt.link !== '#' ? 'cursor-pointer hover:opacity-90 hover:scale-[1.01]' : ''
                  } ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  {/* Left Side Content (Desktop) */}
                  <div className={`w-full lg:w-1/2 pr-0 lg:pr-16 hidden lg:block ${isEven ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
                    {isEven && (
                      <TimelineCard
                        step={`0${idx + 1}`}
                        date={evt.date}
                        title={evt.title}
                        description={evt.desc}
                        accentColor={evt.color}
                        className="max-w-md ml-auto"
                      />
                    )}
                  </div>

                  {/* Central Node Circle */}
                  <div className="absolute left-6 md:left-8 lg:left-1/2 -translate-x-1/2 lg:-translate-x-1/2 z-20 flex items-center justify-center">
                    {/* Outer pulse */}
                    <div 
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/5 flex items-center justify-center glass-navy shadow-[0_0_20px_rgba(255,255,255,0.05)] transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                      style={{ borderColor: `color-mix(in srgb, ${evt.color} 25%, transparent)`, background: `color-mix(in srgb, ${evt.color} 4%, transparent)` }}
                    >
                      <EvtIcon className="w-5 h-5 md:w-6 md:h-6" style={{ color: evt.color }} />
                    </div>
                  </div>

                  {/* Right Side Content (Desktop/Mobile) */}
                  <div className={`w-full lg:w-1/2 pl-16 md:pl-20 lg:pl-16 ${!isEven ? 'opacity-100 pointer-events-auto' : 'pointer-events-auto lg:pointer-events-none lg:opacity-0'}`}>
                    <TimelineCard
                      step={`0${idx + 1}`}
                      date={evt.date}
                      title={evt.title}
                      description={evt.desc}
                      accentColor={evt.color}
                      className="max-w-md mr-auto"
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Timeline;