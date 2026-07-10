// src/components/RegistrationModal.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, AlertCircle } from 'lucide-react';
import GlowingOrb from './common/GlowingOrb';
import '../App.css';

// CENTRALIZED GOOGLE FORM LINKS CONFIGURATION
// Silakan ganti link di bawah ini dengan tautan Google Form pendaftaran Anda yang asli.
const GOOGLE_FORM_LINKS = {
  web_dev: 'https://docs.google.com/forms/d/e/1FAIpQLSfplaceholder_web_dev/viewform',
  ui_ux: 'https://docs.google.com/forms/d/e/1FAIpQLSfplaceholder_ui_ux/viewform',
  poster: 'https://docs.google.com/forms/d/e/1FAIpQLSfplaceholder_infografis/viewform',
  esport: 'https://docs.google.com/forms/d/e/1FAIpQLSfplaceholder_esport/viewform',
  // futsal: 'https://docs.google.com/forms/d/e/1FAIpQLSfplaceholder_futsal/viewform',
  futsal: 'https://docs.google.com/forms/d/e/1FAIpQLSc4XNd74BPYXdDAf-sqbUa57rprvF7aJVfZZlqWW2vXt8mMQw/viewform?usp=header',
  talkshow: 'https://docs.google.com/forms/d/e/1FAIpQLSfplaceholder_talkshow/viewform',
  concert: 'https://wa.me/6285117369252?text=Halo%20Kak%20Bagus%2C%20saya%20ingin%20memesan%20tiket%20Closing%20Concert%20SwitchFest%202026.',
};

const EVENT_LABELS = {
  web_dev: 'Lomba IT – Web Programming',
  ui_ux: 'Lomba IT – UI/UX Design',
  poster: 'Lomba IT – Infografis',
  esport: 'Lomba E-Sport',
  futsal: 'Lomba Futsal',
  talkshow: 'Talkshow Nasional',
  concert: 'Konser Penutup (Closing Concert)',
};

export default function RegistrationModal() {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const initialCategory = searchParams.get('category') || '';
  
  const [category, setCategory] = useState(initialCategory);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (category && GOOGLE_FORM_LINKS[category]) {
      setRedirecting(true);
      const timer = setTimeout(() => {
        window.location.href = GOOGLE_FORM_LINKS[category];
      }, 800); // 800ms delay to show the sleek premium loader
      return () => clearTimeout(timer);
    } else {
      setRedirecting(false);
    }
  }, [category]);

  const handleCategoryChange = (e) => {
    const newCat = e.target.value;
    setCategory(newCat);
  };

  const currentFormLink = GOOGLE_FORM_LINKS[category] || '';
  const currentFormLabel = EVENT_LABELS[category] || '';

  return (
    <main className="min-h-screen hero-aurora-bg text-white relative pt-28 pb-20 flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background Neon Spot */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ isolation: 'isolate' }}>
        <GlowingOrb color="orange" size="w-[600px] h-[600px]" position="top-[-10%] left-[-10%]" opacity="opacity-25" />
        <GlowingOrb color="purple" size="w-[600px] h-[600px]" position="bottom-[-10%] right-[-10%]" opacity="opacity-20" />
        <GlowingOrb color="orange" size="w-[500px] h-[500px]" position="top-[25%] left-[25%]" opacity="opacity-15" />
        {/* Noise overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="w-full max-w-md relative z-10 flex flex-col items-center animate-fadeIn">
        {/* Back Link */}
        <div className="w-full mb-6 text-left">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider font-jakarta focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </button>
        </div>

        {/* Form Container */}
        <div className="w-full bg-[#0b0b0c]/90 border border-white/10 p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-orange/20 rounded-full blur-[40px] -mr-6 -mt-6 pointer-events-none" />

          {redirecting ? (
            <div className="flex flex-col items-center py-10 text-center space-y-6 animate-fadeIn">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-4 border-[var(--color-highlight-orange)]/10 border-t-[var(--color-highlight-orange)] animate-spin shadow-[0_0_15px_rgba(249,117,64,0.5)]" />
                <div className="absolute inset-2 rounded-full border-4 border-[var(--color-highlight-lime)]/10 border-b-[var(--color-highlight-lime)] animate-spin [animation-direction:reverse] [animation-duration:1s]" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-bold font-jakarta text-white uppercase tracking-wider">
                  MENGALIHKAN...
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-jakarta">
                  {currentFormLink.includes('wa.me') ? (
                    <>Anda akan dialihkan ke WhatsApp Ketua Konser untuk pemesanan tiket <strong className="text-[var(--color-highlight-orange)]">{currentFormLabel}</strong>.</>
                  ) : (
                    <>Anda akan dialihkan ke Google Form Pendaftaran untuk <strong className="text-[var(--color-primary-light)]">{currentFormLabel}</strong>.</>
                  )}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 w-full">
                <a
                  href={currentFormLink}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black hover:bg-white/90 font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md"
                >
                  {currentFormLink.includes('wa.me') ? 'Hubungi Ketua Konser' : 'Buka Google Form'} <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="block text-[10px] text-white/30 mt-2 font-jakarta">
                  Klik tombol di atas jika Anda tidak dialihkan secara otomatis.
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col items-center mb-2">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary-light)]/10 border border-[var(--color-primary-light)]/30 flex items-center justify-center mb-4">
                  <ExternalLink className="w-6 h-6 text-[var(--color-primary-light)]" />
                </div>
                <h2 className="text-xl font-bold font-jakarta text-white uppercase tracking-wider text-center">
                  Portal Pendaftaran
                </h2>
                <p className="text-center text-[10px] text-white/40 font-jakarta mt-1 uppercase tracking-widest font-bold">
                  SwitchFest 2026
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 block mb-2 font-jakarta">
                    Pilih Lomba / Acara
                  </label>
                  <select
                    name="event_category"
                    value={category}
                    onChange={handleCategoryChange}
                    className="w-full bg-[#0b0b0c]/80 border border-white/10 px-4 py-3 rounded-xl text-xs text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-primary-light)]/30 transition-all duration-300 font-jakarta"
                  >
                    <option value="">Pilih Kategori...</option>
                    <option value="web_dev">Lomba IT – Web Programming</option>
                    <option value="ui_ux">Lomba IT – UI/UX Design</option>
                    <option value="poster">Lomba IT – Infografis</option>
                    <option value="esport">Lomba E‑Sport</option>
                    <option value="futsal">Lomba Futsal</option>
                    <option value="talkshow">Talkshow Nasional</option>
                    <option value="concert">Konser Penutup (Closing Concert)</option>
                  </select>
                </div>

                {!category && (
                  <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] flex items-start gap-3 text-white/50 text-[11px] leading-relaxed font-jakarta">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[var(--color-primary-light)]" />
                    <span>Silakan pilih salah satu kategori di atas untuk melanjutkan pendaftaran melalui Google Form resmi kami.</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
