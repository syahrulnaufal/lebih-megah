import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, ChevronDown } from 'lucide-react';
import SubpageHeader from './common/SubpageHeader';
import SectionTitle from './common/SectionTitle';
import TimelineCard from './cards/TimelineCard';
import '../App.css';

const timelineData = [
  { title: 'Pendaftaran Tim', date: '1 - 30 September 2026', desc: 'Registrasi tim futsal SMA/SMK/Sederajat resmi dibuka secara online.' },
  { title: 'Technical Meeting', date: '15 Oktober 2026', desc: 'Drawing grup pertandingan, regulasi juklak, juknis, dan tata tertib.' },
  { title: 'Group Stage (Penyisihan)', date: '24 Oktober 2026', desc: 'Pertandingan fase grup penyisihan turnamen futsal di lapangan utama.' },
  { title: 'Grand Final & Awarding', date: '25 Oktober 2026', desc: 'Pertandingan babak semifinal, perebutan juara, dan penyerahan piala.' },
];

const faqData = [
  {
    question: 'Apakah turnamen ini untuk tingkat umum?',
    answer: 'Turnamen futsal SwitchFest 2026 diperuntukkan khusus bagi tim perwakilan SMA/SMK/Sederajat (pelajar) sesuai regulasi panduan terbaru.',
  },
  {
    question: 'Berapakah biaya pendaftaran turnamen futsal?',
    answer: 'Biaya registrasi adalah Rp 150.000,- per tim perwakilan.',
  },
  {
    question: 'Di mana lokasi pertandingan berlangsung?',
    answer: 'Pertandingan futsal akan diselenggarakan secara offline di lapangan olahraga mitra UIN Walisongo Semarang.',
  },
];

const FutsalPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="text-white relative pt-28 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10 space-y-16">
        
        {/* Subpage Header */}
        <SubpageHeader
          title="FUTSAL"
          accentTitle="CHAMPIONSHIP"
          subtitle="Tunjukkan sportivitas, daya tahan fisik, serta kerjasama tim terbaikmu untuk merebut trofi kemenangan SwitchFest Futsal Cup."
          categoryLabel="FUTSAL CUP"
          backPath="/"
        />

        {/* Futsal Tactics Pitch Header Card */}
        <div className="glass-navy rounded-[2.5rem] border border-[#5cb3ff]/10 max-w-3xl mx-auto overflow-hidden shadow-2xl relative p-6 md:p-8">
          {/* Tactical Pitch Lines Graphic Overlay */}
          <div className="absolute inset-0 opacity-[0.04] bg-no-repeat bg-center pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at center, transparent 30%, white 30.5%, transparent 31%), linear-gradient(to right, transparent 49%, white 49.5%, white 50.5%, transparent 51%)',
            backgroundSize: '100% 100%'
          }} />
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#55D5E7]/10 to-transparent blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <div className="relative shrink-0 animate-float">
              <img
                src="/images/mass.png"
                alt="Tivo Mascot"
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#55D5E7]/15 text-[#55D5E7] text-[9px] font-mono font-bold tracking-widest uppercase border border-[#55D5E7]/30">Coach TIVO Instructions</span>
                <span className="text-white/30 text-[9px] font-mono">Formasi: 2-2 / Diamond</span>
              </div>
              <p className="text-white/90 font-medium text-sm md:text-base leading-relaxed font-jakarta">
                "Jaga sportivitas, ayo cetak gol kemenangan timmu! Tunjukkan bakat olahragamu di lapangan hijau!"
              </p>
            </div>
          </div>
        </div>

        {/* Details & CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Rules/Info Card */}
          <div className="glass-navy border border-[#5cb3ff]/10 p-8 md:p-10 rounded-[2.5rem] space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-jakarta text-white">Detail Kompetisi</h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-[#55D5E7] font-bold">•</span>
                  <span>Kategori: Pelajar SMA/SMK/Sederajat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#55D5E7] font-bold">•</span>
                  <span>Biaya Registrasi: Rp 150.000,- / Tim</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#55D5E7] font-bold">•</span>
                  <span>Pemain: 5 Utama + Pemain Cadangan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#55D5E7] font-bold">•</span>
                  <span>Sistem: Grup Stage + Knockout Stage</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/5">
              <a
                href="https://wa.me/6281229811522?text=Halo%20Kak%20Yunus%2C%20saya%20ingin%20bertanya%20mengenai%20Turnamen%20Futsal%20SwitchFest%202026."
                className="flex-1 text-center py-3.5 px-4 font-bold rounded-2xl border border-white/10 hover:border-white/30 text-white bg-white/5 transition-all duration-300 font-jakarta text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
              >
                Tanya Panitia (WA)
              </a>
              <Link
                to="/register?category=futsal"
                className="flex-1 text-center py-3.5 px-4 font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden font-jakarta text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 bg-[#55D5E7] text-black hover:bg-[#55D5E7]/95"
              >
                <UserPlus className="w-3.5 h-3.5" />
                Daftar Turnamen
              </Link>
            </div>
          </div>

          {/* Prize Pool Card */}
          <div className="glass-navy border border-[#5cb3ff]/10 p-8 md:p-10 rounded-[2.5rem] space-y-6 flex flex-col justify-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-tr from-[#55D5E7]/10 to-transparent blur-2xl" />
            <h3 className="text-2xl font-bold font-jakarta text-white text-center">Total Hadiah</h3>
            <div className="text-center space-y-2">
              <p className="text-4xl md:text-6xl font-black font-jakarta text-[#5cb3ff] tracking-wider drop-shadow-[0_0_15px_rgba(92,179,255,0.4)]">
                JUTAAN RUPIAH
              </p>
              <p className="text-sm text-white/50 font-mono tracking-widest uppercase">
                + Trophy Pemenang & Medali Penghargaan
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-12 max-w-4xl mx-auto">
          <SectionTitle
            mainText="Jadwal"
            accentText="Pertandingan"
            subtitle="Tactical Match Schedule"
            size="text-2xl md:text-4xl"
          />

          <div className="relative border-l border-white/10 md:border-l-0 pl-6 md:pl-0 space-y-10 md:space-y-0">
            {/* Connecting Dashed Line representing football passes/tactics */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0 border-l-2 border-dashed border-[#55D5E7] -translate-x-1/2 pointer-events-none opacity-40" />

            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative md:grid md:grid-cols-2 md:gap-16 items-center md:pb-8">
                  {/* Soccer ball node marker */}
                  <div className="absolute left-[-32.5px] md:left-1/2 top-6 md:top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border border-black z-10 flex items-center justify-center bg-black transition-all group-hover:rotate-45"
                       style={{ borderColor: isEven ? '#55D5E7' : '#5cb3ff' }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: isEven ? '#55D5E7' : '#5cb3ff', boxShadow: `0 0 10px ${isEven ? '#55D5E7' : '#5cb3ff'}` }} />
                  </div>

                  {/* Left Side (Even) */}
                  <div className={`${isEven ? 'block' : 'hidden md:block opacity-0 pointer-events-none'}`}>
                    {isEven && (
                      <TimelineCard
                        step={`0${idx + 1}`}
                        date={item.date}
                        title={item.title}
                        description={item.desc}
                        accentColor="#55D5E7"
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
                        accentColor="#5cb3ff"
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

export default FutsalPage;
