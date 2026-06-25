import React, { useEffect, useRef, useState } from 'react';
import sponsorData from '../data/sponsorData';
import SectionTitle from './common/SectionTitle';
import '../App.css';

const SF_LOGO = '/images/logo-sf.png';

const getLogoUrl = (sponsor) => {
  if (sponsor.category === 'media') {
    return `/images/logo media patner/${sponsor.file}`;
  }
  return `/images/logo sponsor/${sponsor.file}`;
};

const SponsorLogo = ({ sponsor }) => (
  <div className="flex-shrink-0 flex flex-col items-center justify-center p-6 group" style={{ minWidth: '160px' }}>
    <img
      src={getLogoUrl(sponsor)}
      alt={`Logo ${sponsor.name}`}
      className="h-14 md:h-16 lg:h-20 w-auto filter grayscale opacity-50 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
      onError={(e) => {
        const currentSrc = e.target.src;
        if (currentSrc.includes('logo%20sponsor')) {
          e.target.src = `/images/logo media patner/${sponsor.file}`;
        } else if (currentSrc.includes('logo%20media%20patner')) {
          e.target.src = `/images/logo sponsor/${sponsor.file}`;
        } else {
          e.target.onerror = null;
          e.target.src = SF_LOGO;
        }
      }}
      draggable={false}
      loading="lazy"
    />
    <div className="mt-2 text-xs font-medium text-white/30 text-center group-hover:text-white/60 transition-colors duration-300" style={{ maxWidth: '140px', wordBreak: 'break-word', lineHeight: 1.2 }}>
      {sponsor.name}
    </div>
  </div>
);

const Sponsor = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Split data
  const officialSponsors = sponsorData.filter(s => s.category === 'sponsor');
  const mediaPartners = sponsorData.filter(s => s.category !== 'sponsor');

  // Repeat sponsors to ensure smooth infinite marquee scroll
  const repeatedSponsors = [...officialSponsors, ...officialSponsors, ...officialSponsors, ...officialSponsors];

  return (
    <section id="sponsor" ref={sectionRef} className="relative w-full py-16 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Title */}
        <div
          className={`mb-12 md:mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <SectionTitle
            mainText="Sponsor &"
            accentText="Mitra Media"
            subtitle="Partnership"
            size="text-3xl md:text-5xl lg:text-6xl"
          />
          <p className="text-white/50 max-w-xl mx-auto text-base md:text-lg -mt-4">
            Kami bangga bekerja sama dengan sponsor resmi dan mitra kolaborator SwitchFest 2026.
          </p>
        </div>

        {/* Separated Sections */}
        <div className="w-full max-w-7xl mx-auto space-y-16">
          
          {/* Section 1: Official Sponsors */}
          {officialSponsors.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-white/20" />
                <h3 className="text-xs font-bold text-white/50 uppercase tracking-[0.3em] font-jakarta">Sponsor Resmi</h3>
                <span className="h-px w-8 bg-gradient-to-l from-transparent to-white/20" />
              </div>
              <div className="marquee-outer" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                <div className="marquee-track marquee-animate-left">
                  {repeatedSponsors.map((sponsor, idx) => (
                    <div key={'official-' + sponsor.file + idx} className="marquee-logo-item" style={{ minWidth: '180px' }}>
                      <SponsorLogo sponsor={sponsor} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Section 2: Media Partner & Kolaborator */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-white/20" />
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-[0.3em] font-jakarta">Media Partner & Kolaborator</h3>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-white/20" />
            </div>
            <div className="marquee-outer" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
              <div className="marquee-track marquee-animate-left">
                {[...mediaPartners, ...mediaPartners].map((sponsor, idx) => (
                  <div key={'media-left-' + sponsor.file + idx} className="marquee-logo-item" style={{ minWidth: '160px' }}>
                    <SponsorLogo sponsor={sponsor} />
                  </div>
                ))}
              </div>
            </div>
            <div className="marquee-outer" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
              <div className="marquee-track marquee-animate-right">
                {[...mediaPartners, ...mediaPartners].reverse().map((sponsor, idx) => (
                  <div key={'media-right-' + sponsor.file + idx} className="marquee-logo-item" style={{ minWidth: '160px' }}>
                    <SponsorLogo sponsor={sponsor} />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sponsor;