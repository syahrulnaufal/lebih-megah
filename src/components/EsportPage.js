import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, ChevronDown } from 'lucide-react';
import SubpageHeader from './common/SubpageHeader';
import SectionTitle from './common/SectionTitle';
import TimelineCard from './cards/TimelineCard';
import '../App.css';

const timelineData = [
  { title: 'Pendaftaran Tim', date: '1 - 30 September 2026', desc: 'Registrasi pendaftaran tim Mobile Legends resmi dibuka secara online.' },
  { title: 'Technical Meeting', date: '10 Oktober 2026', desc: 'Sesi drawing bracket tim dan pembacaan regulasi turnamen secara daring.' },
  { title: 'Babak Kualifikasi & Babak Final(Offline)', date: '17 Oktober 2026', desc: 'Pertandingan kualifikasi online fase penyisihan sistem gugur dan Laga puncak perebutan gelar juara secara luring di Gedung Auditorium 2' },
  // { title: 'Semifinal & Grand Final (Offline)', date: '17 Oktober 2026', desc: 'Laga puncak perebutan gelar juara secara luring di Gedung Auditorium 2.' },
];

const faqData = [
  {
    question: 'Berapa banyak anggota tim yang diperbolehkan?',
    answer: 'Setiap tim terdiri dari 5 pemain inti dan maksimal 1 pemain cadangan (total 6 pemain).',
  },
  {
    question: 'Apakah turnamen ini khusus mahasiswa UIN Walisongo?',
    answer: 'Tidak, turnamen E-Sport ini dibuka untuk umum (pelajar, mahasiswa, dan masyarakat umum seluruh Indonesia).',
  },
  {
    question: 'Bagaimana sistem pertandingannya?',
    answer: 'Sistem penyisihan menggunakan format Single Elimination (sistem gugur) BO3 (Best of 3) pada babak tertentu, dan BO5 pada babak Grand Final.',
  },
];

const EsportPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="text-white relative pt-28 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10 space-y-16">
        
        {/* Subpage Header */}
        <SubpageHeader
          title="E-SPORT"
          accentTitle="CHAMPIONSHIP"
          subtitle="Siapkan tim terkuatmu, latih strategimu, dan buktikan ketangguhanmu dalam turnamen Mobile Legends: Bang Bang SwitchFest 2026."
          categoryLabel="E-SPORT ARENA"
          backPath="/"
        />

        {/* Gaming Cyber-Grid Header Card */}
        <div className="glass-navy rounded-[2.5rem] border border-[var(--color-highlight-orange)]/10 max-w-3xl mx-auto overflow-hidden shadow-2xl relative p-6 md:p-8">
          <div className="absolute inset-0 opacity-[0.03] bg-grid-pattern pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--color-highlight-orange)]/10 to-transparent blur-3xl pointer-events-none" />
          
          {/* Angled Gaming UI Decors */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--color-highlight-orange)]" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[var(--color-highlight-orange)]" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[var(--color-highlight-orange)]" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--color-highlight-orange)]" />
          
          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <div className="relative shrink-0 animate-float">
              <img
                src="/images/mass.png"
                alt="Tivo Mascot"
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
              <div className="absolute -bottom-1 -right-1 w-fit p-1 rounded-full bg-green-600 border-2 border-black flex items-center justify-center text-[9px] font-bold text-white" title="Tivo Online">ON</div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[var(--color-highlight-orange)]/15 text-[var(--color-highlight-orange)] text-[9px] font-mono font-bold tracking-widest uppercase border-[var(--color-hightlight-lime)]/30">System Message</span>
                <span className="text-white/30 text-[9px] font-mono">ID: TIVO_MLBB_BOT</span>
              </div>
              <p className="text-white/90 font-medium text-sm md:text-base leading-relaxed font-jakarta">
                "Gunakan strategi terbaik, sampai jumpa di Land of Dawn! Tunjukkan chemistry tim terkuatmu!"
              </p>
            </div>
          </div>
        </div>

        {/* Info & Rule Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Rules Card */}
          <div className="glass-navy border border-[var(--color-highlight-orange)]/10 p-8 md:p-10 rounded-[2.5rem] space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[var(--color-highlight-orange)]/10 to-transparent blur-2xl" />
            <h3 className="text-2xl font-bold font-jakarta text-white">Ketentuan Turnamen</h3>
            <div className="space-y-4">
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-highlight-orange)] font-bold">•</span>
                  <span>Game: Mobile Legends: Bang Bang (MLBB)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-highlight-orange)] font-bold">•</span>
                  <span>Biaya Registrasi: Rp 50.000,- / Tim</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-highlight-orange)] font-bold">•</span>
                  <span>Pemain: 5 Utama + 2 Cadangan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-highlight-orange)] font-bold">•</span>
                  <span>Skins & Emotes: Bebas/Allowed (mengikuti aturan TM)</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/5">
              <a
                href="https://wa.me/6282325067587?text=Halo%20Kak%20Wafiq%2C%20saya%20ingin%20bertanya%20mengenai%20Turnamen%20E-Sport%20SwitchFest%202026."
                className="flex-1 text-center py-3.5 px-4 font-bold rounded-2xl border border-white/10 hover:border-white/30 text-white bg-white/5 transition-all duration-300 font-jakarta text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
              >
                Tanya Panitia (WA)
              </a>
              <Link
                to="/register?category=esport"
                className="flex-1 text-center py-3.5 px-4 font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden font-jakarta text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 bg-[var(--color-highlight-orange)] text-white hover:bg-[var(--color-highlight-orange)]/95"
              >
                <UserPlus className="w-3.5 h-3.5" />
                Daftar Turnamen
              </Link>
            </div>
          </div>

          {/* Prize Pool Card */}
          <div className="glass-navy border border-[var(--color-highlight-orange-20)] p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between gap-5 items-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-tr from-[var(--color-highlight-orange-20)] to-transparent blur-2xl" />
            <h3 className="text-2xl font-bold font-jakarta text-white text-center">Total Hadiah</h3>
            <div className="text-center space-y-2 pb-6">
              <p className="text-4xl md:text-6xl font-black font-jakarta text-[var(--color-highlight-orange)] tracking-wider drop-shadow-[0_0_15px_rgba(246,123,7,0.4)]">
                JUTAAN RUPIAH
              </p>
            </div>
              <p className="text-sm text-white/50 font-mono tracking-widest uppercase">
                + E-Certificate 
              </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-12 max-w-4xl mx-auto">
          <SectionTitle
            mainText="Jadwal"
            accentText="Pertandingan"
            subtitle="Tactical Schedule Nodes"
            size="text-2xl md:text-4xl"
          />

          <div className="relative border-l border-white/10 md:border-l-0 pl-6 md:pl-0 space-y-10 md:space-y-0">
            {/* Connecting line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/60 -translate-x-1/2 pointer-events-none" />

            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative md:grid md:grid-cols-2 md:gap-16 items-center md:pb-8">
                  {/* Glowing Diamond Node (centered) */}
                  <div className="absolute left-[-32.5px] md:left-1/2 top-6 md:top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 rotate-45 border-2 border-black z-10 flex items-center justify-center bg-black transition-all group-hover:scale-110"
                       style={{ borderColor: isEven ? 'var(--color-highlight-orange)' : 'var(--color-highlight-orange)' }}>
                    <div className="w-1.5 h-1.5" style={{ backgroundColor: isEven ? 'var(--color-highlight-orange)' : 'var(--color-highlight-orange)', boxShadow: `0 0 10px ${isEven ? 'var(--color-highlight-orange)' : 'var(--color-highlight-orange)'}` }} />
                  </div>

                  {/* Left Side (Even) */}
                  <div className={`${isEven ? 'block' : 'hidden md:block opacity-0 pointer-events-none'}`}>
                    {isEven && (
                      <TimelineCard
                        step={`0${idx + 1}`}
                        date={item.date}
                        title={item.title}
                        description={item.desc}
                        accentColor="var(--color-highlight-orange)"
                        className="md:mr-4 shadow-xl"
                      />
                    )}
                  </div>

                  {/* Right Side (Odd) */}
                  <div className={`${!isEven ? 'block' : 'hidden md:block opacity-0 pointer-events-none'}`}>
                    {!isEven && (
                      <TimelineCard
                        step={`0${idx + 1}`}
                        date={item.date}
                        title={item.title}
                        description={item.desc}
                        accentColor="var(--color-highlight-orange)"
                        className="md:ml-4 shadow-xl"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-8 max-w-4xl mx-auto">
          <SectionTitle
            mainText="Pertanyaan"
            accentText="Seputar Turnamen"
            center={true}
            size="text-2xl md:text-4xl"
          />
          <div className="divide-y divide-white/5">
            {faqData.map((faq, idx) => (
              <div key={idx} className="py-5">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span className="text-base md:text-lg font-bold font-jakarta text-white/80 group-hover:text-white transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-white/40 group-hover:text-white transition-all ${openFaq === idx ? 'rotate-180 text-white' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-[300px] mt-4 pb-2' : 'max-h-0'}`}>
                  <p className="text-sm md:text-base text-white/50 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};

export default EsportPage;
