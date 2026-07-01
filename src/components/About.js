import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, PartyPopper, Megaphone } from 'lucide-react';
import PillarCard from './cards/PillarCard';
import '../App.css';

const pillars = [
  {
    title: 'Akademik',
    desc: 'Ajang kompetisi teknologi tingkat nasional. Uji kemampuanmu dalam bidang Web Programming, UI/UX Design, atau Infografis, dan jadikan karyamu sebagai bukti nyata inovasi.',
    icon: GraduationCap,
    color: 'text-[#F67B07]',
  },
  {
    title: 'Festival',
    desc: 'Sinergi teknologi, olahraga, dan seni. Rayakan festival lewat kompetisi E-Sport, Futsal Cup, Talkshow interaktif, hingga Konser musik spektakuler.',
    icon: PartyPopper,
    color: 'text-neon-blue',
  },
  {
    title: 'Publikasi',
    desc: 'Membuka kolaborasi yang menghubungkan ide inovatif para pelajar dan mahasiswa dengan praktisi industri, akademisi, serta masyarakat luas.',
    icon: Megaphone,
    color: 'text-neon-blue',
  },
];

const About = () => {
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
      id="about"
      ref={sectionRef}
      className="relative pt-24 md:pt-48 pb-16 md:pb-32 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left — Text */}
          <div
            className={`transition-all duration-700 ease-out ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl lg:leading-[1.1] mb-8 text-white flex flex-col gap-2 font-jakarta">
              <span className="block text-[var(--color-highlight-lime)] text-xs md:text-sm uppercase tracking-[0.4em] mb-2 opacity-80">
                Tentang SwitchFest 2026
              </span>
              <span className="block tracking-tight text-balance">Code the Stars,</span>
              <span className="block tracking-tight text-balance">Beyond the Horizons.</span>
            </h2>
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              SWITCHFEST (Super Walisongo Information Technology Festival) adalah festival teknologi tingkat nasional yang diselenggarakan oleh UIN Walisongo. Tahun ini, kami menghadirkan 5 rangkaian acara utama: Lomba IT (Web Programming, UI/UX Design, Infografis), Turnamen E-Sport, Turnamen Futsal, Talkshow Nasional, dan Konser Penutup.
            </p>
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              Kami percaya, teknologi yang baik adalah teknologi yang membawa manfaat nyata. Oleh karena itu, tahun ini SwitchFest berfokus pada karya yang memiliki dampak langsung bagi masyarakat.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Melalui kriteria{' '}
              <span className="text-white font-semibold">Impact Projection</span>, kami akan mengevaluasi seberapa relevan dan aplikatif solusimu dalam menjawab tantangan di lapangan.
            </p>
          </div>

          {/* Right — Pillar Cards */}
          <div className="grid grid-cols-1 gap-6">
            {pillars.map((pillar, idx) => (
              <PillarCard
                key={idx}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.desc}
                className={visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                style={{ transitionDelay: `${idx * 150 + 200}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;