import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Users, Newspaper, Building2, Award } from 'lucide-react';
import sponsorData from '../data/sponsorData';
import SubpageHeader from './common/SubpageHeader';
import '../App.css';

const SF_LOGO = '/images/logo-sf.png';

const getLogoUrl = (sponsor) => {
  if (sponsor.category === 'media') {
    return `/images/logo media patner/${sponsor.file}`;
  }
  return `/images/logo sponsor/${sponsor.file}`;
};

const TABS = [
  { key: 'all', label: 'Semua', icon: Grid, count: sponsorData.filter(s => s.category !== 'sponsor').length },
  { key: 'media', label: 'Media Partner', icon: Newspaper, count: sponsorData.filter(s => s.category === 'media').length },
  { key: 'organisasi', label: 'Organisasi & HMJ', icon: Building2, count: sponsorData.filter(s => s.category === 'organisasi').length },
  { key: 'komunitas', label: 'Komunitas Teknologi', icon: Users, count: sponsorData.filter(s => s.category === 'komunitas').length },
];

const SponsorPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const officialSponsors = sponsorData.filter(s => s.category === 'sponsor');
  const mediaPartners = activeTab === 'all'
    ? sponsorData.filter(s => s.category !== 'sponsor')
    : sponsorData.filter(s => s.category === activeTab);

  return (
    <main className="text-white relative pt-28 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10 space-y-16">

        {/* Subpage Header */}
        <SubpageHeader
          title="SPONSOR &"
          accentTitle="MEDIA PARTNER"
          subtitle="Kami bangga bekerja sama dengan organisasi-organisasi terkemuka yang mendukung kesuksesan SwitchFest 2026."
          categoryLabel="COLLABORATOR LIST"
          backPath="/"
        />

        {/* SECTION 1: SPONSOR RESMI */}
        <div className="space-y-8 pt-6">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-neon-orange" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-[0.2em] font-jakarta text-white">Sponsor Resmi</h2>
            </div>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-5xl mx-auto">
            {officialSponsors.map((sponsor, idx) => (
              <div
                key={sponsor.file}
                className="flex flex-col items-center justify-center gap-2 group transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${idx * 50}ms`, minWidth: '140px' }}
              >
                <div className="h-20 flex items-center justify-center">
                  <img
                    src={getLogoUrl(sponsor)}
                    alt={`Logo ${sponsor.name}`}
                    className="max-h-16 w-auto object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    onError={(e) => {
                      const currentSrc = e.target.src;
                      if (currentSrc.includes('logo%20sponsor')) {
                        e.target.src = `/images/logo media patner/${sponsor.file}`;
                      } else {
                        e.target.onerror = null;
                        e.target.src = SF_LOGO;
                      }
                    }}
                    draggable={false}
                    loading="lazy"
                  />
                </div>
                <span className="text-[10px] font-bold text-white/40 text-center group-hover:text-white/80 transition-colors duration-300 uppercase tracking-widest font-jakarta leading-tight max-w-[130px] break-words">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: MEDIA PARTNER & KOLABORATOR */}
        <div className="space-y-8 border-t border-white/5 pt-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-neon-purple" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-[0.2em] font-jakarta">Media Partner & Kolaborator</h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider font-jakarta transition-all duration-300 border ${
                      isActive
                        ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.15)]'
                        : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {tab.label}
                    <span className={`ml-1 text-[10px] font-mono ${isActive ? 'text-black/50' : 'text-white/30'}`}>
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Partners Grid */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 max-w-6xl mx-auto">
            {mediaPartners.map((sponsor, idx) => (
              <div
                key={sponsor.file}
                className="flex flex-col items-center justify-center gap-2 group transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${idx * 30}ms`, minWidth: '120px' }}
              >
                <div className="h-16 flex items-center justify-center">
                  <img
                    src={getLogoUrl(sponsor)}
                    alt={`Logo ${sponsor.name}`}
                    className="max-h-12 w-auto object-contain filter grayscale opacity-45 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
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
                </div>
                <span className="text-[9px] font-bold text-white/30 text-center group-hover:text-white/60 transition-colors duration-300 uppercase tracking-wider font-jakarta leading-tight max-w-[110px] break-words">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>

          {mediaPartners.length === 0 && (
            <div className="text-center py-16 text-white/30">
              <p className="text-lg font-jakarta">Belum ada partner di kategori ini.</p>
            </div>
          )}
        </div>

        {/* Partnership CTA */}
        <div className="glass-navy border border-[#5cb3ff]/10 p-8 md:p-10 rounded-[2.5rem] max-w-3xl mx-auto text-center space-y-4">
          <h3 className="text-xl md:text-2xl font-black font-jakarta text-white">
            Tertarik Menjadi <span className="text-[#5cb3ff]">Partner</span>?
          </h3>
          <p className="text-xs text-white/50 max-w-lg mx-auto leading-relaxed">
            Bergabunglah bersama puluhan mitra media, komunitas teknologi, dan organisasi kampus lainnya untuk mendukung SwitchFest 2026.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/partnership"
              className="px-8 py-3 rounded-2xl bg-white text-black font-bold uppercase tracking-wider hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-300 font-jakarta text-xs"
            >
              Lihat Paket Kemitraan
            </Link>
            <a
              href="https://wa.me/6281215836206?text=Halo%20Panitia%20SwitchFest%202026%2C%20kami%20tertarik%20menjadi%20media%20partner."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-2xl border border-white/20 text-white/80 font-bold uppercase tracking-wider hover:bg-white/5 hover:text-white transition-all duration-300 font-jakarta text-xs"
            >
              Hubungi Panitia (WA)
            </a>
          </div>
        </div>

      </div>
    </main>
  );
};

export default SponsorPage;
