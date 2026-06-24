import React, { useEffect, useRef, useState } from 'react';
import { Phone, Download, Shield } from 'lucide-react';
import SectionTitle from './common/SectionTitle';
import '../App.css';

const tiers = [
  {
    name: 'Diamond / Platinum',
    sub: 'Exclusive Partner',
    color: '#5cb3ff', // Blue
    features: [
      'Logo eksklusif berukuran terbesar pada seluruh materi cetak & digital.',
      'Booth pameran utama di area strategis tengah festival.',
      'Slot ad-lib utama oleh MC di seluruh panggung event.',
      'Product placement / sampling eksklusif di venue.',
      'Penayangan company profile video di opening & closing.',
      'Sertifikat penghargaan kemitraan eksklusif dari UIN Walisongo.',
    ],
    highlight: true,
  },
  {
    name: 'Gold / Silver',
    sub: 'Supporting Sponsor',
    color: '#f97540', // Orange
    features: [
      'Logo ukuran sedang pada backdrop panggung & banner promosi.',
      'Booth pameran standard di lokasi festival.',
      'Ad-lib berkala oleh MC di sela-sela acara kompetisi.',
      'Pembagian brosur / merchandise sponsor ke peserta.',
      'Sertifikat kerja sama sponsorship resmi.',
    ],
    highlight: false,
  },
  {
    name: 'Bronze & Media',
    sub: 'Media Partner / Community',
    color: '#7e5dc1', // Purple
    features: [
      'Logo bersama pada baliho publikasi & footer website.',
      'Publikasi feeds/story berkala di akun sosial media event.',
      'Akses liputan eksklusif jalannya festival teknologi.',
      'Penyebaran rilisan pers resmi pasca-acara.',
      'Sertifikat kemitraan media partner.',
    ],
    highlight: false,
  },
];

const Partnership = () => {
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

  const handleDownloadDeck = () => {
    // Open standard drive or mockup PDF URL
    window.open('https://drive.google.com/file/d/1ZqcHdqEH1-QxNi-MEjXQ_Ysb2agbn0YD/view?usp=sharing', '_blank');
  };

  return (
    <section
      id="partnership"
      ref={sectionRef}
      className="py-16 md:py-32 relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#f97540]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-20 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <SectionTitle
            mainText="PARTNERSHIP"
            accentText="OPPORTUNITY"
            size="text-3xl md:text-6xl"
          />
          <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg -mt-4">
            Bergabunglah bersama kami sebagai sponsor atau mitra media untuk meningkatkan visibilitas merek Anda di hadapan ribuan talenta muda dan komunitas teknologi.
          </p>
        </div>

        {/* Tier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`glass-navy border p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden transition-all duration-700 shadow-xl ${
                tier.highlight
                  ? 'border-neon-blue bg-[rgba(92,179,255,0.03)]'
                  : 'border-[#5cb3ff]/10'
              } hover:border-white/20 hover:scale-[1.01] ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 120 + 100}ms` }}
            >
              {/* Glow accent */}
              <div
                className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${tier.color} 0%, transparent 70%)`,
                }}
              />
              
              <div>
                {/* Badge for highlight */}
                {tier.highlight && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest font-bold uppercase bg-neon-blue text-black">
                    Highly Recommended
                  </span>
                )}
                
                <h3 className="text-2xl font-black font-jakarta text-white mb-1">
                  {tier.name}
                </h3>
                <p className="text-xs font-semibold tracking-wider uppercase font-mono mb-6" style={{ color: tier.color }}>
                  {tier.sub}
                </p>
                
                <ul className="space-y-4">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-xs text-white/70 leading-relaxed">
                      <Shield className="w-4 h-4 mt-0.5 shrink-0" style={{ color: tier.color }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom tier contact request */}
              <div className="pt-8 border-t border-white/5 mt-8">
                <a
                  href={`https://wa.me/6281215836206?text=Halo%20Panitia%20SwitchFest%202026%2C%20saya%20tertarik%20untuk%20menjadi%20partner%20dalam%20kategori%20${encodeURIComponent(tier.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 font-bold rounded-2xl border text-center transition-all duration-300 font-jakarta text-xs uppercase tracking-wider block"
                  style={{
                    borderColor: `${tier.color}30`,
                    background: `${tier.color}05`,
                    color: tier.color,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = tier.color;
                    e.target.style.background = `${tier.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = `${tier.color}30`;
                    e.target.style.background = `${tier.color}05`;
                  }}
                >
                  Pilih Kategori Ini
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Actions & Direct Communication */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={handleDownloadDeck}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-black font-bold uppercase tracking-wider hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-300 font-jakarta text-xs"
          >
            <Download className="w-4 h-4" />
            Unduh Proposal (PDF)
          </button>
          
          <a
            href="https://wa.me/6281215836206?text=Halo%20Panitia%20SwitchFest%202026%2C%20saya%20tertarik%20untuk%20menjalin%20kemitraan%2Fpartnership%20dan%20ingin%20meminta%20dokumen%20Proposal%20terbaru."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-neon-orange text-black font-bold uppercase tracking-wider hover:bg-[#ff8b53] hover:scale-105 active:scale-95 transition-all duration-300 font-jakarta text-xs shadow-[0_0_20px_rgba(249,117,64,0.3)]"
          >
            <Phone className="w-4 h-4" />
            Hubungi Partnership (WA)
          </a>
        </div>

      </div>
    </section>
  );
};

export default Partnership;
