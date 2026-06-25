import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Calendar, ChevronDown, Clock, MapPin } from 'lucide-react';
import SubpageHeader from './common/SubpageHeader';
import SectionTitle from './common/SectionTitle';
import TimelineCard from './cards/TimelineCard';
import '../App.css';

const talkshowInfo = [
  { icon: Calendar, label: 'Tanggal', value: 'Kamis, 5 November 2026', iconColor: 'text-[#f97540]' },
  { icon: Clock, label: 'Waktu', value: '08.30 - 11.30 WIB', iconColor: 'text-[#f97540]' },
  { icon: MapPin, label: 'Lokasi', value: 'Gedung Auditorium 2, Kampus 3 UIN Walisongo', iconColor: 'text-[#f97540]' },
];

const timelineData = [
  { title: 'Registrasi Peserta', date: '10 September - 25 Oktober 2026', desc: 'Pendaftaran tiket seminar talkshow teknologi nasional secara online.' },
  { title: 'Open Gate & Check-in', date: '5 November 2026 - 08.00 WIB', desc: 'Pintu masuk dibuka, penukaran tiket fisik di meja registrasi.' },
  { title: 'Opening & Keynote', date: '5 November 2026 - 08.30 WIB', desc: 'Pembukaan acara resmi oleh rektorat dan sambutan panitia.' },
  { title: 'Sesi Talkshow Utama', date: '5 November 2026 - 09.00 WIB', desc: 'Penyampaian materi dan sesi tanya jawab interaktif bersama narasumber.' },
  { title: 'Networking & Closing', date: '5 November 2026 - 11.30 WIB', desc: 'Sesi dokumentasi bersama dan pembagian e-sertifikat.' },
];

const faqData = [
  {
    question: 'Apakah acara talkshow ini gratis?',
    answer: 'Ya, Talkshow Nasional SwitchFest 2026 dibuka secara gratis bagi mahasiswa UIN Walisongo dan peserta umum, namun wajib melakukan pendaftaran untuk mendapatkan e-ticket karena kuota terbatas.',
  },
  {
    question: 'Apakah peserta akan mendapatkan sertifikat?',
    answer: 'Ya, seluruh peserta terdaftar yang menghadiri sesi talkshow hingga selesai akan mendapatkan E-Sertifikat tingkat nasional.',
  },
  {
    question: 'Siapakah pembicara talkshow kali ini?',
    answer: 'Pembicara merupakan praktisi teknologi terkemuka Indonesia yang akan diumumkan secara bertahap melalui akun Instagram resmi @switchfest_. Pantau terus!',
  },
];

const TalkshowPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="text-white relative pt-28 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10 space-y-16">
        
        {/* Subpage Header */}
        <SubpageHeader
          title="TALKSHOW"
          accentTitle="INSPIRATIF"
          subtitle="Ubah pandanganmu terhadap dunia digital. Dengar dan belajar langsung dari praktisi teknologi terkemuka Indonesia."
          categoryLabel="INSPIRATIONAL SEMINAR"
          backPath="/"
        />

        {/* Tech Forum Audio Waves Header Card */}
        <div className="glass-panel rounded-3xl border border-white/10 max-w-3xl mx-auto overflow-hidden shadow-2xl relative p-6 md:p-8">
          {/* Soundwave lines overlay */}
          <div className="absolute bottom-2 right-6 flex items-end gap-1 opacity-[0.08] pointer-events-none h-16">
            <span className="w-1.5 h-12 bg-white rounded-full animate-pulse" />
            <span className="w-1.5 h-16 bg-white rounded-full" />
            <span className="w-1.5 h-8 bg-white rounded-full animate-pulse" />
            <span className="w-1.5 h-14 bg-white rounded-full" />
            <span className="w-1.5 h-6 bg-white rounded-full" />
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#f97540]/10 to-transparent blur-3xl pointer-events-none" />
          
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
                <span className="px-2 py-0.5 rounded bg-[#f97540]/15 text-[#f97540] text-[9px] font-mono font-bold tracking-widest uppercase border border-[#f97540]/30">Keynote Speaker Info</span>
                <span className="text-white/30 text-[9px] font-mono">Status: Registrasi Dibuka</span>
              </div>
              <p className="text-white/90 font-medium text-sm md:text-base leading-relaxed font-jakarta">
                "Ayo serap ilmu baru dari praktisi teknologi terkemuka! Dapatkan insight berharga untuk masa depan digitalmu!"
              </p>
            </div>
          </div>
        </div>

        {/* Speaker Showcase & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Orbits Visual (Left on desktop) */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center w-full h-[300px] md:h-[450px] z-10">
            {/* Concentric spinning circles */}
            <div
              className="absolute w-[220px] h-[220px] md:w-[350px] md:h-[350px] border border-white/10 rounded-full border-dashed opacity-50"
              style={{ animation: 'spin 30s linear infinite' }}
            />
            <div
              className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px] border-2 border-[#f97540]/20 rounded-full opacity-50"
              style={{ animation: 'spin 40s linear infinite reverse' }}
            />
            <div className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px] bg-gradient-to-tr from-[#f97540]/20 via-[#7e5dc1]/20 to-transparent rounded-full blur-[60px]" />

            <div className="relative z-30 glass-navy border border-[#5cb3ff]/10 p-8 md:p-10 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-center">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#7e5dc1]/15 rounded-full blur-[30px] -mr-6 -mt-6 pointer-events-none" />
              <h3 className="text-xl md:text-3xl font-bold text-white mb-2 leading-none font-jakarta">
                Speaker
                <br />
                SwitchFest
              </h3>
              <p className="text-xs text-[#f97540] font-mono tracking-widest uppercase font-bold mt-2 animate-pulse">
                Coming Soon
              </p>
            </div>
          </div>

          {/* Details Column (Right on desktop) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-4xl font-bold font-jakarta text-white">Agenda & Informasi</h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                Tahun ini, Talkshow membawakan sub-tema **Ideas that Matter: Impactful Solution** untuk menggugah pola pikir mahasiswa dan umum tentang bagaimana sebuah solusi teknologi harus dibangun untuk memberikan dampak positif nyata bagi masyarakat.
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full">
              {talkshowInfo.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <div>
                      <h4 className="text-white/50 text-[10px] font-mono tracking-[0.2em] uppercase mb-0.5 leading-none">
                        {item.label}
                      </h4>
                      <p className="font-semibold text-white/90 text-sm md:text-base leading-tight">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-6">
              <Link
                to="/register?category=talkshow"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f97540] text-black font-bold uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(249,117,64,0.3)] font-jakarta text-sm"
              >
                Daftar Seminar Free
                <UserPlus className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-12 max-w-4xl mx-auto">
          <SectionTitle
            mainText="Susunan"
            accentText="Acara Talkshow"
            subtitle="Interactive Session Timeline"
            size="text-2xl md:text-4xl"
          />

          <div className="relative border-l border-white/10 md:border-l-0 pl-6 md:pl-0 space-y-10 md:space-y-0">
            {/* Spotlight timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#f97540] via-[#7e5dc1] to-transparent -translate-x-1/2 pointer-events-none" />

            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative md:grid md:grid-cols-2 md:gap-16 items-center md:pb-8">
                  {/* Speech bubble marker node */}
                  <div className="absolute left-[-32.5px] md:left-1/2 top-6 md:top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-black z-10 flex items-center justify-center bg-black transition-all group-hover:scale-110"
                       style={{ borderColor: isEven ? '#f97540' : '#7e5dc1' }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: isEven ? '#f97540' : '#7e5dc1', boxShadow: `0 0 10px ${isEven ? '#f97540' : '#7e5dc1'}` }} />
                  </div>

                  {/* Left Side (Even) */}
                  <div className={`${isEven ? 'block' : 'hidden md:block opacity-0 pointer-events-none'}`}>
                    {isEven && (
                      <TimelineCard
                        step={`0${idx + 1}`}
                        date={item.date}
                        title={item.title}
                        description={item.desc}
                        accentColor="#f97540"
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
                        accentColor="#7e5dc1"
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
            accentText="Seputar Talkshow"
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

export default TalkshowPage;
