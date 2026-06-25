import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronDown, Clock, MapPin, Music, Sparkles, Store } from 'lucide-react';
import SubpageHeader from './common/SubpageHeader';
import SectionTitle from './common/SectionTitle';
import TimelineCard from './cards/TimelineCard';
import GuestStarCard from './cards/GuestStarCard';
import '../App.css';

const concertInfo = [
  { icon: Calendar, label: 'Tanggal', value: 'Jumat, 13 November 2026', iconColor: 'text-[#ed374d]' },
  { icon: Clock, label: 'Waktu', value: '18.30 - Selesai', iconColor: 'text-[#ed374d]' },
  { icon: MapPin, label: 'Lokasi', value: 'Gedung Auditorium 2, Kampus 3 UIN Walisongo Semarang', iconColor: 'text-[#ed374d]' },
];

const timelineData = [
  { title: 'Pendaftaran Tiket', date: '20 September - 5 November 2026', desc: 'Registrasi pemesanan tiket masuk konser secara online.' },
  { title: 'Open Gate Area', date: '13 November 2026 - 17.00 WIB', desc: 'Gerbang utama dibuka untuk pemeriksaan tiket penonton.' },
  { title: 'Opening Act (Band Lokal)', date: '13 November 2026 - 18.30 WIB', desc: 'Penampilan pembuka dari band-band lokal pilihan.' },
  { title: 'Sesi Awarding & Penutupan', date: '13 November 2026 - 20.00 WIB', desc: 'Pemberian penghargaan simbolis kepada panitia dan seluruh pihak terkait.' },
  { title: 'Guest Star Performance', date: '13 November 2026 - 20.30 WIB', desc: 'Konser perayaan puncak persembahan dari bintang tamu utama SwitchFest.' },
];

const wishlistArtists = [
  {
    name: 'Dhyo Haw',
    genre: 'Reggae',
    image: '/images/guest star/Dhyo Haw.png',
    delay: '0s',
  },
  {
    name: 'For Revenge',
    genre: 'Emo / Post-Hardcore',
    image: '/images/guest star/For Reveng.png',
    delay: '0.8s',
  },
  {
    name: 'Hindia',
    genre: 'Indie / Alt Rock',
    image: '/images/guest star/Hindia.png',
    delay: '1.6s',
  },
  {
    name: 'Perunggu',
    genre: 'Indie / Sporty Rock',
    image: '/images/guest star/Perunggu.png',
    delay: '2.4s',
  },
  {
    name: 'Rumah Sakit',
    genre: 'Indie Pop / Britpop',
    image: '/images/guest star/Rumah Sakit.png',
    delay: '3.2s',
  },
  {
    name: 'The Lantis',
    genre: 'Indie Pop / Retro Rock',
    image: '/images/guest star/The Lantis.png',
    delay: '4.0s',
  },
];

// DATA LINE UP RESMI CONCERT
// Anda dapat memperbarui data ini, mengubah nama, genre, dan gambar yang disimpan di public/images/line up konser/
const lineupArtists = [
  {
    name: 'COMING SOON',
    genre: 'Secret Guest #1',
    image: '/images/line up konser/siluet.png', // Ganti dengan path gambar asli, misal: '/images/line up konser/lineup1.png'
    delay: '0s',
  },
  {
    name: 'COMING SOON',
    genre: 'Secret Guest #2',
    image: '/images/line up konser/siluet.png', // Ganti dengan path gambar asli, misal: '/images/line up konser/lineup2.png'
    delay: '0.8s',
  },
  {
    name: 'COMING SOON',
    genre: 'Secret Guest #3',
    image: '/images/line up konser/siluet.png', // Ganti dengan path gambar asli, misal: '/images/line up konser/lineup3.png'
    delay: '1.6s',
  },
];

const faqData = [
  {
    question: 'Apakah konser penutup ini terbuka untuk umum?',
    answer: 'Ya, Closing Concert SwitchFest 2026 terbuka untuk umum. Baik mahasiswa UIN Walisongo maupun penonton luar diizinkan masuk dengan tiket resmi.',
  },
  {
    question: 'Berapakah harga tiket masuk konser?',
    answer: 'Informasi mengenai kategori tiket (Presale, OTS) dan harganya akan dirilis secara bertahap di media sosial resmi kami. Pantau terus @switchfest_!',
  },
  {
    question: 'Barang apa saja yang dilarang dibawa masuk?',
    answer: 'Dilarang membawa senjata tajam, minuman keras/alkohol, obat-obatan terlarang, kamera profesional (tanpa izin media), serta benda berbahaya lainnya demi keamanan bersama.',
  },
];

const ConcertPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="text-white relative pt-28 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10 space-y-16">
        
        {/* Subpage Header */}
        <SubpageHeader
          title="CLOSING"
          accentTitle="CONCERT"
          subtitle="Rayakan kebersamaan dan puncak kemeriahan SwitchFest 2026 dengan konser musik spektakuler dari bintang tamu luar biasa!"
          categoryLabel="MUSIC FESTIVAL"
          backPath="/"
        />

        {/* Stage Lights & Equalizer Header Card */}
        <div className="glass-navy rounded-[2.5rem] border border-[#5cb3ff]/10 max-w-3xl mx-auto overflow-hidden shadow-2xl relative p-6 md:p-8">
          {/* Moving Stage Spotlights Graphic Overlay */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(237,55,77,0.3) 35px, rgba(237,55,77,0.3) 70px)',
            backgroundSize: '200% 200%',
            animation: 'shimmer 15s linear infinite'
          }} />
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#ed374d]/10 to-transparent blur-3xl pointer-events-none" />
          
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
                <span className="px-2 py-0.5 rounded bg-[#ed374d]/15 text-[#ed374d] text-[9px] font-mono font-bold tracking-widest uppercase border border-[#ed374d]/30">Live Concert Celebration</span>
                <span className="text-white/30 text-[9px] font-mono">Presale: Segera Hadir</span>
              </div>
              <p className="text-white/90 font-medium text-sm md:text-base leading-relaxed font-jakarta">
                "Bersenang-senanglah di Konser penutup festival kita! Ayo bernyanyi bersama dan nikmati kemeriahannya!"
              </p>
            </div>
          </div>
        </div>

        {/* Guest Star Showcase & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Stage Orbits Visual (Left on desktop) */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center w-full h-[300px] md:h-[450px] z-10">
            {/* Spinning music orbits */}
            <div
              className="absolute w-[220px] h-[220px] md:w-[350px] md:h-[350px] border border-white/10 rounded-full border-dashed opacity-50"
              style={{ animation: 'spin 25s linear infinite' }}
            />
            <div
              className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px] border-2 border-[#ed374d]/20 rounded-full opacity-45"
              style={{ animation: 'spin 35s linear infinite reverse' }}
            />
            <div className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px] bg-gradient-to-tr from-[#ed374d]/20 via-purple-500/20 to-transparent rounded-full blur-[70px]" />

            <div className="relative z-30 glass-navy border border-[#5cb3ff]/10 p-10 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.6)] text-center flex flex-col items-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ed374d]/15 rounded-full blur-[40px] -mr-6 -mt-6 pointer-events-none" />
              <div className="w-14 h-14 rounded-full bg-[#ed374d]/10 border border-[#ed374d]/30 flex items-center justify-center mb-4">
                <Music className="w-6 h-6 text-[#ed374d]" />
              </div>
              <h3 className="text-xl md:text-3xl font-extrabold text-white mb-2 leading-tight font-jakarta">
                Guest Star
                <br />
                SwitchFest
              </h3>
              <p className="text-xs text-[#ed374d] font-mono tracking-widest uppercase font-black mt-2 animate-pulse">
                To Be Announced
              </p>
            </div>
          </div>

          {/* Details Column (Right on desktop) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-4xl font-bold font-jakarta text-white">Selebrasi Penutup</h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                Sebagai ungkapan rasa syukur dan penutup dari seluruh rangkaian festival teknologi SwitchFest 2026, kami mengundang kamu untuk berkumpul, bernyanyi bersama, dan melepaskan seluruh penat dalam gelaran konser musik spektakuler.
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full">
              {concertInfo.map((item, idx) => {
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
                to="/register?category=concert"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ed374d] text-white font-bold uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(237,55,77,0.3)] font-jakarta text-sm"
              >
                Pesan Tiket Konser
                <Music className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Official Lineup Section */}
        <div className="space-y-12 max-w-5xl mx-auto pt-8">
          <div className="text-center space-y-2 flex flex-col items-center">
            <SectionTitle
              mainText="Concert"
              accentText="Line Up"
              center={true}
              size="text-2xl md:text-4xl"
            />
            <p className="text-white/60 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed -mt-4 font-jakarta">
              Ini dia deretan musisi dan penampil resmi yang akan memeriahkan panggung Closing Concert SwitchFest 2026!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-12">
            {lineupArtists.map((artist, lIdx) => (
              <GuestStarCard
                key={lIdx}
                name={artist.name}
                image={artist.image}
                genre={artist.genre}
                delay={artist.delay}
              />
            ))}
          </div>
        </div>

        {/* Wishlist Guest Star Section */}
        <div className="space-y-12 max-w-5xl mx-auto pt-8">
          <div className="text-center space-y-2 flex flex-col items-center">
            <SectionTitle
              mainText="Guest Star"
              accentText="Wishlist"
              center={true}
              size="text-2xl md:text-4xl"
            />
            <p className="text-white/60 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed -mt-4">
              Berikut adalah beberapa target musisi utama dalam radar selebrasi penutup SwitchFest 2026.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-12">
            {wishlistArtists.map((artist, aIdx) => (
              <GuestStarCard
                key={aIdx}
                name={artist.name}
                image={artist.image}
                genre={artist.genre}
                delay={artist.delay}
              />
            ))}
          </div>

          <div className="glass-navy border border-[#5cb3ff]/10 p-8 md:p-10 rounded-[2.5rem] max-w-2xl mx-auto text-center space-y-4 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-[#ed374d]/10 rounded-full blur-[40px] pointer-events-none" />
            <h4 className="text-xl font-bold font-jakarta text-white">Ingin Menjadi Sponsor Utama Konser?</h4>
            <p className="text-xs text-white/60 leading-relaxed max-w-lg mx-auto">
              Dapatkan eksposur brand yang maksimal di hadapan ribuan audiens konser. Hubungi koordinator sponsorship kami untuk mendapatkan proposal kemitraan khusus.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/6285117369252?text=Halo%20Kak%20Bagus%2C%20saya%20tertarik%20untuk%20menjadi%20sponsor%20Closing%20Concert%20SwitchFest%202026."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-[#ed374d]/30 hover:border-[#ed374d]/60 text-white font-bold rounded-2xl transition-all duration-300 font-jakarta text-xs uppercase tracking-wider shadow-lg active:scale-95"
              >
                Hubungi Koordinator Sponsor (WA)
              </a>
            </div>
          </div>
        </div>

        {/* Open Submission Section */}
        <div className="space-y-10 max-w-5xl mx-auto pt-8">
          <div className="text-center space-y-2 flex flex-col items-center">
            <SectionTitle
              mainText="Open"
              accentText="Submission"
              center={true}
              size="text-2xl md:text-4xl"
            />
            <p className="text-white/60 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed -mt-4">
              Tunjukkan bakat band lokal Anda atau daftarkan tenant kuliner/kreatif Anda untuk memeriahkan Closing Concert SwitchFest 2026!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Band Submission Card */}
            <div className="glass-navy border border-[#5cb3ff]/10 p-8 rounded-[2.5rem] flex flex-col justify-between space-y-6 shadow-2xl relative overflow-hidden group hover:border-[#ed374d]/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ed374d]/5 rounded-full blur-2xl pointer-events-none" />
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#ed374d]/10 border border-[#ed374d]/20 flex items-center justify-center text-[#ed374d] group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold font-jakarta text-white">Band Performance (Opening Act)</h4>
                <p className="text-xs md:text-sm text-white/60 leading-relaxed font-jakarta">
                  Ingin band Anda tampil di panggung megah Closing Concert SwitchFest 2026? Daftarkan band lokal Anda dan kirimkan portofolio/demo lagu terbaik Anda kepada kami.
                </p>
                <ul className="text-xs text-white/50 space-y-2 pt-2 font-jakarta">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#ed374d]" />
                    Membawakan genre musik yang enerjik
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#ed374d]" />
                    Mengirimkan link video live session/YouTube
                  </li>
                </ul>
              </div>
              <div className="pt-4">
                <a
                  href="https://wa.me/6285117369252?text=Halo%20Koordinator%20Acara%20SwitchFest%202026%2C%20saya%20tertarik%20untuk%20mendaftarkan%20band%20saya%20sebagai%20Opening%20Act%20di%20Closing%20Concert."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#ed374d]/10 hover:bg-[#ed374d] border border-[#ed374d]/30 hover:border-[#ed374d] text-white font-bold rounded-2xl transition-all duration-300 font-jakarta text-xs uppercase tracking-wider shadow-lg active:scale-95 text-center"
                >
                  Hubungi Koordinator Band (WA)
                </a>
              </div>
            </div>

            {/* Tenant Submission Card */}
            <div className="glass-navy border border-[#5cb3ff]/10 p-8 rounded-[2.5rem] flex flex-col justify-between space-y-6 shadow-2xl relative overflow-hidden group hover:border-[#5cb3ff]/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#5cb3ff]/5 rounded-full blur-2xl pointer-events-none" />
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#5cb3ff]/10 border border-[#5cb3ff]/20 flex items-center justify-center text-[#5cb3ff] group-hover:scale-110 transition-transform duration-300">
                  <Store className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold font-jakarta text-white">Bazaar Tenant (F&B & Creative)</h4>
                <p className="text-xs md:text-sm text-white/60 leading-relaxed font-jakarta">
                  Buka booth bazar Anda di area venue Closing Concert yang akan dihadiri oleh ribuan pengunjung. Terbuka untuk produk makanan, minuman, merchandise, maupun produk kreatif lainnya.
                </p>
                <ul className="text-xs text-white/50 space-y-2 pt-2 font-jakarta">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#5cb3ff]" />
                    Terbuka untuk F&B, Aksesoris, & Creative Brand
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#5cb3ff]" />
                    Slot terbatas untuk menjaga variasi produk
                  </li>
                </ul>
              </div>
              <div className="pt-4">
                <a
                  href="https://wa.me/6285117369252?text=Halo%20Koordinator%20Tenant%20SwitchFest%202026%2C%20saya%20tertarik%20untuk%20mendaftarkan%20booth%2Ftenant%20saya%20di%20Closing%20Concert."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-[#5cb3ff] hover:text-[#020817] border border-[#5cb3ff]/30 hover:border-[#5cb3ff] text-white font-bold rounded-2xl transition-all duration-300 font-jakarta text-xs uppercase tracking-wider shadow-lg active:scale-95 text-center"
                >
                  Hubungi Koordinator Tenant (WA)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-12 max-w-4xl mx-auto">
          <SectionTitle
            mainText="Susunan"
            accentText="Acara Konser"
            subtitle="Live Performance Setlist"
            size="text-2xl md:text-4xl"
          />

          <div className="relative border-l border-white/10 md:border-l-0 pl-6 md:pl-0 space-y-10 md:space-y-0">
            {/* Wavy music note line connecting list (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ed374d] via-[#f97540] to-transparent -translate-x-1/2 pointer-events-none" />

            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative md:grid md:grid-cols-2 md:gap-16 items-center md:pb-8">
                  {/* Music Node marker (glowing) */}
                  <div className="absolute left-[-32.5px] md:left-1/2 top-6 md:top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-black z-10 flex items-center justify-center bg-black transition-all group-hover:scale-110"
                       style={{ borderColor: isEven ? '#ed374d' : '#f97540' }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: isEven ? '#ed374d' : '#f97540', boxShadow: `0 0 10px ${isEven ? '#ed374d' : '#f97540'}` }} />
                  </div>

                  {/* Left Side (Even) */}
                  <div className={`${isEven ? 'block' : 'hidden md:block opacity-0 pointer-events-none'}`}>
                    {isEven && (
                      <TimelineCard
                        step={`0${idx + 1}`}
                        date={item.date}
                        title={item.title}
                        description={item.desc}
                        accentColor="#ed374d"
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
            accentText="Seputar Konser"
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

export default ConcertPage;
