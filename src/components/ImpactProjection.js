import React, { useEffect, useRef, useState } from 'react';
import { Users, Globe, Award, Briefcase } from 'lucide-react';
import '../App.css';

const metrics = [
  {
    icon: Users,
    value: '5.000+',
    label: 'Target Pengunjung',
    desc: 'Estimasi total pengunjung offline & online untuk seluruh rangkaian kompetisi, seminar, dan konser penutup.',
    color: '#5cb3ff', // Blue
  },
  {
    icon: Globe,
    value: '100.000+',
    label: 'Digital Impressions',
    desc: 'Target paparan publik melalui promosi media sosial resmi, publikasi media partner, dan kampanye digital.',
    color: '#f97540', // Orange
  },
  {
    icon: Award,
    value: '50+',
    label: 'Sponsor & Mitra Media',
    desc: 'Kolaborasi aktif bersama berbagai instansi, perusahaan teknologi nasional, dan media partner terpercaya.',
    color: '#7e5dc1', // Purple
  },
  {
    icon: Briefcase,
    value: '30+',
    label: 'Institusi Terlibat',
    desc: 'Partisipasi delegasi dari berbagai SMA/SMK, Universitas, serta komunitas IT terkemuka di Indonesia.',
    color: '#ed374d', // Magenta
  },
];

const ImpactProjection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

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
      id="impact"
      ref={sectionRef}
      className="py-16 md:py-32 relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#7e5dc1]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-20 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <h2 className="font-bold text-3xl md:text-6xl mb-6 font-jakarta">
            <span className="text-white">IMPACT </span>
            <span className="text-[#5cb3ff]">PROJECTION</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg">
            SwitchFest 2026 menargetkan dampak paparan publik yang luas dan kontribusi nyata dalam memperkuat ekosistem inovasi teknologi nasional.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`group relative flex flex-col p-8 md:p-10 rounded-[2.5rem] glass-navy border border-[#5cb3ff]/10 transition-all duration-700 shadow-xl hover:border-[#5cb3ff]/30 hover:scale-[1.02] ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Accent glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none rounded-[24px]"
                  style={{
                    background: `radial-gradient(circle at 100% 0%, ${item.color} 0%, transparent 70%)`,
                  }}
                />
                
                {/* Icon Container */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}35` }}
                >
                  <Icon className="w-6 h-6" style={{ color: item.color }} />
                </div>

                <h3 className="text-3xl md:text-4xl font-black font-jakarta text-white tracking-tight mb-2">
                  {item.value}
                </h3>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: item.color }}>
                  {item.label}
                </h4>
                <p className="text-xs text-white/50 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Reach Progress Gauge */}
        <div
          className={`glass-navy border border-[#5cb3ff]/10 p-8 md:p-10 rounded-[2.5rem] max-w-4xl mx-auto shadow-2xl relative overflow-hidden transition-all duration-700 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/15 rounded-full blur-[40px] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between relative z-10">
            <div className="space-y-3 max-w-lg">
              <h3 className="text-lg md:text-xl font-bold font-jakarta text-white uppercase tracking-wider">
                Target Kesiapan Publikasi & Media
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Kami terus melakukan penyelarasan kerja sama dengan puluhan jaringan publikasi, media nasional, dan universitas di Jawa Tengah dan sekitarnya untuk menjamin tercapainya target dampak.
              </p>
            </div>
            
            <div className="w-full md:w-auto shrink-0 flex flex-col items-center gap-2">
              <div className="relative w-28 h-28 flex items-center justify-center">
                {/* Circular indicator track */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="56"
                    cy="56"
                    r="48"
                    className="stroke-white/5"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="56"
                    cy="56"
                    r="48"
                    className="stroke-neon-blue"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 48}
                    strokeDashoffset={2 * Math.PI * 48 * (1 - 0.85)}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-2xl font-black font-jakarta text-white">85%</span>
                  <span className="text-[10px] font-mono tracking-wider text-white/40 uppercase">Aligned</span>
                </div>
              </div>
              <span className="text-xs font-semibold text-neon-blue uppercase tracking-widest font-mono">
                Publication Pipeline
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ImpactProjection;
