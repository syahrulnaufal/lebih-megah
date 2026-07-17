import React, { useEffect, useRef, useState } from 'react';
import PopupButton from './PopupButton';
import SectionTitle from './common/SectionTitle';
import EventCard from './cards/EventCard';
import '../App.css';

const events = [
  {
    id: 'lomba_it',
    title: 'Lomba IT',
    badge: 'IT COMPETITION',
    description: 'Tantang kemampuan teknismu di bidang Web Programming, UI/UX Design, atau Infografis tingkat nasional dan buktikan karyamu!',
    accentColor: 'var(--color-highlight-lime)', // Canva Purple
    secondaryColor: 'var(--color-highlight-orange)',
    categories: ['SMA/SMK', 'Mahasiswa'],
    benefits: ['Total Hadiah Jutaan Rupiah', 'Sertifikat Tingkat Nasional', 'Kategori: Web, UI/UX & Infografis'],
    actionType: 'popup',
    path: '/lomba-it',
    icon: (
      <svg width="64" height="64" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="256" cy="256" r="180" fill="var(--color-highlight-lime)" fillOpacity="0.15" />
        <rect x="128" y="148" width="256" height="180" rx="20" fill="var(--color-highlight-lime)" fillOpacity="0.3" />
        <rect x="148" y="168" width="216" height="140" rx="12" fill="var(--color-highlight-lime)" />
        <rect x="168" y="188" width="80" height="12" rx="6" fill="white" fillOpacity="0.9" />
        <rect x="168" y="210" width="140" height="8" rx="4" fill="white" fillOpacity="0.5" />
        <rect x="168" y="228" width="100" height="8" rx="4" fill="white" fillOpacity="0.3" />
        <rect x="168" y="260" width="60" height="24" rx="12" fill="white" fillOpacity="0.8" />
      </svg>
    ),
  },
  {
    id: 'esport',
    title: 'E-Sport Tournament',
    badge: 'E-SPORT ARENA',
    description: 'Bentuk tim terkuatmu, susun strategi terbaik, dan kuasai arena kompetitif Mobile Legends di SwitchFest E-Sport!',
    accentColor: 'var(--color-highlight-orange)', // Canva Sky Blue
    secondaryColor: 'var(--color-highlight-lime)',
    categories: ['Pelajar', 'Mahasiswa', 'Umum'],
    benefits: ['Total Prize Pool Jutaan Rupiah', 'Terbuka untuk Umum (MLBB)', 'Pertandingan Grand Final Offline'],
    actionType: 'popup',
    path: '/esport',
    icon: (
      <svg width="64" height="64" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="256" cy="256" r="180" fill="var(--color-highlight-orange)" fillOpacity="0.15" />
        <rect x="136" y="176" width="240" height="140" rx="40" fill="var(--color-highlight-orange)" fillOpacity="0.3" />
        <rect x="156" y="196" width="200" height="100" rx="30" fill="var(--color-highlight-orange)" />
        <rect x="190" y="236" width="30" height="10" rx="3" fill="white" fillOpacity="0.8" />
        <rect x="200" y="226" width="10" height="30" rx="3" fill="white" fillOpacity="0.8" />
        <circle cx="296" cy="236" r="10" fill="white" fillOpacity="0.8" />
        <circle cx="316" cy="256" r="10" fill="white" fillOpacity="0.8" />
      </svg>
    ),
  },
  {
    id: 'futsal',
    title: 'Futsal Tournament',
    badge: 'FUTSAL CUP',
    description: 'Tunjukkan sportivitas, kelincahan, dan kerja sama tim terbaikmu dalam turnamen futsal memperebutkan Piala SwitchFest!',
    accentColor: 'var(--color-primary-light)', // Neon-Blue
    secondaryColor: 'var(--color-primary-light)',
    categories: ['SMA/SMK'],
    benefits: ['Piala Bergilir & Uang Pembinaan', 'Sertifikat Juara & Pemain Terbaik', 'Kategori Pelajar SMA/SMK/Sederajat'],
    actionType: 'popup',
    path: '/futsal',
    icon: (
      <svg width="64" height="64" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="256" cy="256" r="180" fill="var(--color-primary-light)" fillOpacity="0.15" />
        <path d="M256 120 L320 180 L300 320 L212 320 L192 180 Z" fill="var(--color-primary-light)" fillOpacity="0.3" />
        <circle cx="256" cy="210" r="45" fill="var(--color-primary-light)" />
        <rect x="236" y="320" width="40" height="60" fill="var(--color-primary-light)" fillOpacity="0.6" />
        <rect x="216" y="370" width="80" height="16" rx="8" fill="var(--color-primary-light)" />
      </svg>
    ),
  },
  {
    id: 'talkshow',
    title: 'National Talkshow',
    badge: 'INSPIRATIONAL SEMINAR',
    description: 'Ideas that Matter: Impactful Solution. Belajar langsung dari praktisi teknologi terkemuka Indonesia dalam sesi interaktif.',
    accentColor: 'var(--color-primary-light)', // Canva Orange
    secondaryColor: 'var(--color-highlight-orange)',
    categories: ['Mahasiswa', 'Umum'],
    benefits: ['Sertifikat & Seminar Kit Eksklusif', 'Wawasan Karir dari Praktisi Ahli', 'Kuisioner Berhadiah Menarik'],
    actionType: 'popup',
    path: '/talkshow',
    icon: (
      <svg width="64" height="64" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="256" cy="256" r="180" fill="var(--color-primary-light)" fillOpacity="0.15" />
        <rect x="231" y="140" width="50" height="120" rx="25" fill="var(--color-primary-light)" />
        <path d="M196 210 C196 280 316 280 316 210" stroke="var(--color-primary-light)" strokeWidth="16" strokeLinecap="round" />
        <rect x="246" y="276" width="20" height="70" fill="var(--color-primary-light)" fillOpacity="0.6" />
        <rect x="216" y="340" width="80" height="16" rx="8" fill="var(--color-primary-light)" />
      </svg>
    ),
  },
  {
    id: 'konser',
    title: 'Closing Concert',
    badge: 'MUSIC FESTIVAL',
    description: 'Momen puncak perayaan inovasi teknologi dengan penampilan panggung meriah dari guest star SwitchFest!',
    accentColor: 'var(--color-highlight-orange)', // Canva Magenta
    secondaryColor: 'var(--color-highlight-orange)',
    categories: ['Umum'],
    benefits: ['Penampilan Bintang Tamu Spesial', 'Panggung Hiburan Musik Terbuka', 'Tiket Terjangkau & Spot Foto Keren'],
    actionType: 'popup',
    path: '/concert',
    icon: (
      <svg width="64" height="64" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="256" cy="256" r="180" fill="var(--color-highlight-orange)" fillOpacity="0.15" />
        <path d="M140 360 L200 160 L312 160 L372 360 Z" fill="var(--color-highlight-orange)" fillOpacity="0.3" />
        <circle cx="256" cy="180" r="15" fill="var(--color-highlight-orange)" />
        <path d="M180 360 C200 300 312 300 332 360" fill="none" stroke="var(--color-highlight-orange)" strokeWidth="12" />
        <circle cx="230" cy="260" r="12" fill="white" />
        <rect x="238" y="210" width="6" height="50" fill="white" />
        <circle cx="280" cy="240" r="12" fill="white" />
        <rect x="288" y="190" width="6" height="50" fill="white" />
        <rect x="240" y="190" width="54" height="8" fill="white" />
      </svg>
    ),
  },
];

const popupItemsByEventId = {
  lomba_it: [
    { nama: 'Daftar Web Programming', link: '/register?category=web_dev' },
    { nama: 'Juklak Web Programming', link: 'https://drive.google.com/file/d/1ve29XMamqWfeevCN7htFM6XCHo8tAL5i/view?usp=drivesdk' },
    { nama: 'Daftar UI/UX Design', link: '/register?category=ui_ux' },
    { nama: 'Juklak UI/UX Design', link: 'https://drive.google.com/file/d/1vadpN8UT0icQn3SCuflCTc6di7DFLgwQ/view?usp=drivesdk' },
    { nama: 'Daftar Infografis', link: '/register?category=poster' },
    { nama: 'Juklak Infografis', link: 'https://drive.google.com/file/d/1vi1-bds6tkxZTdSDhCAP7OWfMt0iFLtn/view?usp=drivesdk' },
  ],
  esport: [
    { nama: 'Daftar Turnamen E-Sport', link: '/register?category=esport' },
    { nama: 'Hubungi Panitia (WA)', link: 'https://wa.me/6282325067587' },
  ],
  futsal: [
    { nama: 'Daftar Turnamen Futsal', link: '/register?category=futsal' },
    { nama: 'Hubungi Panitia (WA)', link: 'https://wa.me/6281229811522' },
  ],
  talkshow: [
    { nama: 'Daftar Talkshow', link: '/register?category=talkshow' },
    { nama: 'Hubungi Panitia (WA)', link: 'https://wa.me/6287743872524' },
  ],
  konser: [
    { nama: 'Daftar Konser', link: '/register?category=concert' },
    { nama: 'Hubungi Panitia (WA)', link: 'https://wa.me/628156808770' },
  ]
};

const Category = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalEvent, setModalEvent] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleAction = (event) => {
    setModalEvent(event);
    setShowModal(true);
  };

  return (
    <section
      id="category"
      ref={sectionRef}
      className="py-16 md:py-32 relative overflow-hidden px-4"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <SectionTitle
            mainText="PENDAFTARAN"
            accentText="ACARA"
            size="text-4xl md:text-7xl"
          />
          <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg text-center -mt-4 mb-12 md:mb-20">
            Pilih cabang kegiatan SwitchFest 2026 yang ingin kamu ikuti. Pelajari informasi selengkapnya atau langsung lakukan pendaftaran!
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {events.map((event, idx) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              badge={event.badge}
              description={event.description}
              categories={event.categories}
              benefits={event.benefits}
              accentColor={event.accentColor}
              icon={event.icon}
              actionType={event.actionType}
              path={event.path}
              onAction={() => handleAction(event)}
              style={{
                transitionDelay: `${idx * 100}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(32px)',
                transitionProperty: 'opacity, transform, border-color, box-shadow',
              }}
            />
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {showModal && modalEvent && (
        <PopupButton
          showModal={showModal}
          setShowModal={setShowModal}
          label={modalEvent.title}
          items={popupItemsByEventId[modalEvent.id] || []}
        />
      )}
    </section>
  );
};

export default Category;