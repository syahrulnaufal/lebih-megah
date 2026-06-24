import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, UserPlus, ChevronDown } from 'lucide-react';
import SubpageHeader from './common/SubpageHeader';
import SectionTitle from './common/SectionTitle';
import TimelineCard from './cards/TimelineCard';
import '../App.css';

const subComps = [
  {
    id: 'web',
    title: 'Web Programming',
    desc: 'Tantang kemampuanmu dalam membangun aplikasi web inovatif, fungsional, dan responsif menggunakan teknologi terdepan.',
    registerLink: '/register?category=web_dev',
    juklakLink: 'https://drive.google.com/file/d/1ve29XMamqWfeevCN7htFM6XCHo8tAL5i/view?usp=drivesdk',
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    desc: 'Tunjukkan kreativitasmu dalam merancang antarmuka (interface) dan pengalaman pengguna (experience) yang memukau dan user-friendly.',
    registerLink: '/register?category=ui_ux',
    juklakLink: 'https://drive.google.com/file/d/1vadpN8UT0icQn3SCuflCTc6di7DFLgwQ/view?usp=drivesdk',
  },
  {
    id: 'poster',
    title: 'Infografis',
    desc: 'Ekspresikan gagasan dan pesanmu secara artistik melalui desain infografis digital yang kreatif, inspiratif, dan persuasif.',
    registerLink: '/register?category=poster',
    juklakLink: 'https://drive.google.com/file/d/1vi1-bds6tkxZTdSDhCAP7OWfMt0iFLtn/view?usp=drivesdk',
  },
];

const timelineData = [
  { title: 'Pendaftaran', date: '20 Agustus - 20 September 2026', desc: 'Registrasi online seluruh peserta kompetisi IT nasional.' },
  { title: 'Technical Meeting', date: '23 September 2026', desc: 'Sesi penjelasan tata tertib lomba dan tanya jawab teknis.' },
  { title: 'Kualifikasi & Unggah Karya', date: '24 - 26 September 2026', desc: 'Batas akhir unggah berkas proposal dan mock-up karya.' },
  { title: 'Grand Final UI/UX Design', date: '28 September 2026', desc: 'Presentasi karya finalis UI/UX di depan dewan juri secara offline.' },
  { title: 'Grand Final Web Programming', date: '29 September 2026', desc: 'Presentasi aplikasi web buatan finalis secara langsung.' },
  { title: 'Grand Final Infografis', date: '30 September 2026', desc: 'Presentasi konsep karya infografis digital secara luring.' },
  { title: 'Awarding & Penutupan', date: '1 Oktober 2026', desc: 'Pengumuman resmi juara seluruh cabang lomba IT SwitchFest 2026.' },
];

const faqData = [
  {
    question: 'Apakah satu tim boleh mengikuti lebih dari satu cabang lomba IT?',
    answer: 'Ya, anggota tim diperbolehkan mendaftar di cabang lomba berbeda, namun satu karya hanya boleh didaftarkan di satu cabang kompetisi saja.',
  },
  {
    question: 'Berapakah jumlah anggota dalam satu tim?',
    answer: 'Untuk Web Programming dan UI/UX Design terdiri dari maksimal 3 orang per tim. Untuk Infografis merupakan kompetisi individu (1 orang).',
  },
  {
    question: 'Di manakah babak final diselenggarakan?',
    answer: 'Babak final (presentasi karya) akan diadakan secara luring/offline di Kampus UIN Walisongo Semarang.',
  },
];

const LombaItPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="text-white relative pt-28 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10 space-y-16">
        
        {/* Subpage standard header */}
        <SubpageHeader
          title="LOMBA"
          accentTitle="IT NASIONAL"
          subtitle="Asah keahlian teknismu dan ciptakan karya teknologi inovatif dalam 3 sub-cabang kompetisi IT bergengsi SwitchFest 2026."
          categoryLabel="IT COMPETITION"
          backPath="/"
        />

        {/* Cyber Hacker Terminal Mock */}
        <div className="glass-navy rounded-[2.5rem] border border-[#5cb3ff]/10 max-w-3xl mx-auto overflow-hidden shadow-2xl font-mono text-xs relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#7e5dc1]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="bg-white/5 px-4 py-2.5 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80" />
            </div>
            <span className="text-white/40 text-[9px] uppercase tracking-[0.2em] font-jakarta font-bold">tivo@switchfest: ~/competition-it</span>
            <span className="w-10" />
          </div>
          <div className="p-6 space-y-4 bg-black/40 text-[#10b981]">
            <div className="flex items-start gap-2">
              <span className="text-[#7e5dc1] font-bold shrink-0">$</span>
              <span className="text-white/80">./tivo_mascot_greet.sh --target="all_it_participants"</span>
            </div>
            <div className="text-white/70 pl-4 py-1.5 leading-relaxed border-l-2 border-[#7e5dc1]/30 font-jakarta italic text-sm">
              "Tunjukkan baris kode dan kreativitas desain terbaikmu! Aku tunggu karya hebatmu di panggung SwitchFest!"
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#7e5dc1] font-bold">$</span>
              <span className="text-[#10b981] animate-pulse">■</span>
            </div>
          </div>
        </div>

        {/* Sub-Competitions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subComps.map((comp) => (
            <div
              key={comp.id}
              className="glass-navy border border-[#5cb3ff]/10 p-8 md:p-10 rounded-[2.5rem] flex flex-col h-full hover:border-[#7e5dc1]/40 transition-all duration-300 relative group overflow-hidden shadow-xl"
            >
              {/* Subtle accent hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-[#7e5dc1] to-transparent transition-opacity duration-500 pointer-events-none" />

              <h3 className="text-xl md:text-2xl font-bold font-jakarta text-white mb-3">{comp.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-8 flex-1">{comp.desc}</p>
              
              <div className="flex flex-col gap-3 relative z-10">
                <a
                  href={comp.juklakLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 px-4 font-bold rounded-2xl border border-white/10 hover:border-white/30 text-white bg-white/5 transition-all duration-300 font-jakarta text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Juklak (PDF)
                </a>
                <Link
                  to={comp.registerLink}
                  className="w-full text-center py-3 px-4 font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden font-jakarta text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 bg-[#7e5dc1] text-white hover:opacity-90"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  Daftar Sekarang
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="space-y-12 max-w-4xl mx-auto">
          <SectionTitle
            mainText="Timeline"
            accentText="Kompetisi"
            subtitle="Process Sequence Map"
            size="text-2xl md:text-4xl"
          />

          <div className="relative border-l border-white/10 md:border-l-0 pl-6 md:pl-0 space-y-10 md:space-y-0">
            {/* Connecting Circuit-themed Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#7e5dc1] via-[#f97540] to-transparent -translate-x-1/2 pointer-events-none" />

            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative md:grid md:grid-cols-2 md:gap-16 items-center md:pb-8">
                  {/* Circuit Node Marker (glowing) */}
                  <div className="absolute left-[-29px] md:left-1/2 top-6 md:top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-black z-10 flex items-center justify-center bg-black transition-all group-hover:scale-110"
                       style={{ borderColor: isEven ? '#7e5dc1' : '#f97540' }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: isEven ? '#7e5dc1' : '#f97540', boxShadow: `0 0 10px ${isEven ? '#7e5dc1' : '#f97540'}` }} />
                  </div>

                  {/* Left Side (Even) */}
                  <div className={`${isEven ? 'block' : 'hidden md:block opacity-0 pointer-events-none'}`}>
                    {isEven && (
                      <TimelineCard
                        step={`0${idx + 1}`}
                        date={item.date}
                        title={item.title}
                        description={item.desc}
                        accentColor="#7e5dc1"
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
                        accentColor="#f97540"
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
            accentText="Seputar Lomba"
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

export default LombaItPage;
