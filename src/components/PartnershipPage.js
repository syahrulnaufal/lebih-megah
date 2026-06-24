import React, { useEffect, useState } from 'react';
import {
  Phone,
  Download,
  ShieldCheck,
  Gem,
  Award,
  Shield,
  Landmark,
  Wrench,
  Utensils,
  MessageSquare,
  Check,
  X,
  Users,
  Eye,
  Globe,
  Briefcase
} from 'lucide-react';
import SubpageHeader from './common/SubpageHeader';
import SectionTitle from './common/SectionTitle';
import ContactCard from './cards/ContactCard';
import '../App.css';

const statsData = [
  {
    value: '3.000+',
    label: 'Estimasi Pengunjung',
    desc: 'Lomba IT, Turnamen E-Sport, Turnamen Futsal, Talkshow, dan Closing Concert.',
    icon: Users
  },
  {
    value: '100k+',
    label: 'Total Impresi Promosi',
    desc: 'Melalui Instagram Stories, Feeds, video TikTok, pamflet digital, dan livestream.',
    icon: Eye
  },
  {
    value: '50+',
    label: 'Kolaborator & Media',
    desc: 'Didukung puluhan jaringan media partner, organisasi mahasiswa, dan komunitas IT.',
    icon: Globe
  },
  {
    value: '20+',
    label: 'Brand Pendukung',
    desc: 'Bekerja sama dengan berbagai merchant lokal dan brand nasional tepercaya.',
    icon: Briefcase
  }
];

const benefitsData = [
  {
    title: 'Brand Exposure',
    desc: 'Logo brand Anda memiliki kesempatan tampil secara masif di berbagai atribut acara mulai dari baju panitia, spanduk, spanduk panggung, photobooth, lanyard, pamflet digital, tiket cetak, hingga aftermovie resmi.',
    color: '#ff8c42', // Orange theme
    icon: Gem,
    cardClass: 'benefit-card-diamond'
  },
  {
    title: 'Eksklusivitas Sektor',
    desc: 'Brand Anda berkesempatan menjadi satu-satunya partner perwakilan dari kategori bisnis/sektor industri Anda di SwitchFest 2026. Bebas persaingan dari kompetitor sejenis di area pameran acara.',
    color: '#ff8c42',
    icon: Award,
    cardClass: 'benefit-card-gold'
  },
  {
    title: 'Interaksi Langsung',
    desc: 'Dapatkan fasilitas pendirian stan/booth penjualan di area pameran teramai, promosi lisan (Adlibs) berkala oleh MC utama, serta izin distribusi tester produk (sampling keliling) ke seluruh penonton.',
    color: '#ff8c42',
    icon: Shield,
    cardClass: 'benefit-card-bronze'
  }
];

const mainTiers = [
  {
    name: 'DIAMOND',
    price: 'Rp 7.500.000,00',
    sub: 'Exclusive Title Partner',
    icon: Gem,
    color: '#5cb3ff',
    badge: 'Slot Terbatas',
    features: [
      'Eksposur Utama (Extra Large Logo) pada pamflet, baliho, banner panggung, photobooth, & lanyard',
      'Penyebutan nama brand (Adlibs) oleh MC secara eksklusif disandingkan dengan nama event',
      'Branding Running Text Eksklusif di sepanjang Livestream acara',
      'Promosi Utama: Unlimited Instagram Stories, multiple feed posts, & video promosi buatan panitia',
      'Akses Gratis: 5 Tiket Futsal + Akses Lomba Eksternal, Esport, Talkshow, & Konser (Maksimal 3)',
      'Hak Pemasangan Banner Sponsor di setiap area acara (termasuk Wingdrop Futsal & Konser)',
      'Fasilitas Stand / Booth hingga di 4 Acara',
      'Branding Tiket Event, Aftermovie & Dokumentasi Lengkap, Data & Insight Audiens',
      'Prioritas Event Berikutnya, Open/Closing Mention MC, Tampil di Panggung, Konten Kolaborasi, Hak Promosi & Bagi Produk'
    ]
  },
  {
    name: 'GOLD',
    price: 'Rp 5.000.000,00',
    sub: 'Major Sponsor',
    icon: Award,
    color: '#ffb938',
    badge: 'Rekomendasi',
    features: [
      'Eksposur Besar (Large Logo) pada pamflet, baliho, banner panggung, photobooth, & lanyard',
      'Penyebutan nama brand (Adlibs) berkala oleh MC di sela-sela acara',
      'Branding Running Text di sela livestream acara',
      'Promosi Menengah: 3x Instagram Stories, 1x Feeds khusus, & medsos panitia',
      'Akses Gratis: 3 Tiket Futsal + Akses Lomba/Esport/Talkshow/Konser (Maksimal 2)',
      'Hak Pemasangan Banner Sponsor di setiap area acara + Wingdrop Futsal & Konser',
      'Fasilitas Stand / Booth di 1 Acara',
      'Branding Tiket Event, Logo di Aftermovie Resmi, & Konten Sponsor Highlight (Reels/Story)'
    ]
  },
  {
    name: 'SILVER',
    price: 'Rp 2.500.000,00',
    sub: 'Supporting Partner',
    icon: Shield,
    color: '#e2e8f0',
    features: [
      'Eksposur Sedang (Medium Logo) pada pamflet, baliho, banner panggung, photobooth, & lanyard',
      'Penyebutan nama brand (Adlibs) oleh MC di sela kompetisi',
      'Branding Running Text & Thumbnail Logo di livestream acara',
      'Promosi Standard: 2x Instagram Stories & publikasi medsos panitia',
      'Akses Gratis: 2 Tiket Futsal & Akses Lomba Eksternal',
      'Hak Pemasangan Banner Sponsor di setiap area acara + Wingdrop Futsal',
      'Tag di postingan event recap umum, Highlight khusus IG sponsor, & dokumentasi foto event'
    ]
  },
  {
    name: 'BRONZE',
    price: 'Rp 1.000.000,00',
    sub: 'Basic Sponsor',
    icon: Landmark,
    color: '#ca7853',
    features: [
      'Eksposur Standar (Small Logo) pada pamflet, baliho, banner panggung, photobooth, & lanyard',
      'Penyebutan nama brand (Adlibs) oleh MC di sela kompetisi',
      'Branding Running Text di livestream acara',
      'Promosi Basic: 1x Instagram Story',
      'Akses Gratis: 2 Tiket Futsal',
      'Hak Pemasangan Banner Sponsor di setiap area acara (Collective)',
      'Tag di postingan recap umum & dokumentasi foto event'
    ]
  }
];

const matrixRows = [
  {
    benefit: 'Logo pada Media Promosi (Cetak & Digital)',
    diamond: 'Ukuran XL',
    gold: 'Ukuran L',
    silver: 'Ukuran M',
    bronze: 'Ukuran S'
  },
  {
    benefit: 'MC Adlibs (Penyebutan Brand)',
    diamond: 'Eksklusif disandingkan nama event',
    gold: 'Berkala oleh MC',
    silver: 'Sela Kompetisi',
    bronze: 'Sela Kompetisi'
  },
  {
    benefit: 'Running Text Livestream',
    diamond: '✓ (Eksklusif)',
    gold: '✓',
    silver: '✓',
    bronze: '✓'
  },
  {
    benefit: 'Promosi Media Sosial',
    diamond: 'Stories Unlimited + Feeds + Video',
    gold: '3x Story + 1x Feeds',
    silver: '2x Story + Panitia Repost',
    bronze: '1x Story'
  },
  {
    benefit: 'Free Ticket & Akses Acara',
    diamond: '5 Futsal + 3 Tiket Event',
    gold: '3 Futsal + 2 Tiket Event',
    silver: '2 Futsal + 1 Tiket Event',
    bronze: '2 Futsal Only'
  },
  {
    benefit: 'Hak Pemasangan Banner Sponsor',
    diamond: 'Setiap Venue + Wingdrop Futsal & Konser',
    gold: 'Setiap Venue + Wingdrop Futsal & Konser',
    silver: 'Setiap Venue + Wingdrop Futsal',
    bronze: 'Setiap Venue (Collective)'
  },
  {
    benefit: 'Fasilitas Stand / Booth',
    diamond: 'Stand Max 4 Acara',
    gold: 'Stand 1 Acara',
    silver: '✗',
    bronze: '✗'
  },
  {
    benefit: 'Aftermovie & Dokumentasi',
    diamond: 'Aftermovie + Dok Lengkap',
    gold: 'Logo di Aftermovie Resmi',
    silver: 'Dokumentasi Foto Event',
    bronze: 'Dokumentasi Foto Event'
  },
  {
    benefit: 'Branding Tiket Event',
    diamond: '✓',
    gold: '✓',
    silver: '✗',
    bronze: '✗'
  },
  {
    benefit: 'Eksklusivitas Kategori Industri',
    diamond: '✓',
    gold: '✗',
    silver: '✗',
    bronze: '✗'
  },
  {
    benefit: 'Hak Tambahan Eksklusif (Mention MC, Panggung, Bagi Produk)',
    diamond: '✓',
    gold: '✗',
    silver: '✗',
    bronze: '✗'
  }
];

const alternateSponsors = [
  {
    title: 'Sponsor Peralatan (Alat / Transport)',
    icon: Wrench,
    desc: 'Menyediakan atau meminjamkan alat/perlengkapan acara yang dibutuhkan selama rangkaian SwitchFest.',
    price: 'Fleksibel (Sesuai Alat)',
    color: '#ff8c42',
    benefits: [
      'Penyantuman logo perusahaan pada banner publikasi.',
      'Promosi postingan feeds Instagram resmi.',
      'Branding logo pada running text livestream.',
      'Sponsor menyediakan / menanggung biaya sewa peralatan.'
    ]
  },
  {
    title: 'Sponsor Konsumsi (Catering Panitia)',
    icon: Utensils,
    desc: 'Menyediakan porsi makan/minum panitia pelaksana selama turnamen futsal berlangsung.',
    price: 'Fleksibel (Sesuai Porsi)',
    color: '#ff8c42',
    benefits: [
      'Penyantuman logo perusahaan pada pamflet promosi.',
      'Promosi postingan feeds Instagram resmi.',
      'Branding logo pada area photobooth venue.',
      'Konsumsi disediakan penuh untuk crew & panitia futsal.'
    ]
  }
];

const paidContentAds = {
  title: 'Paid Content Ads',
  icon: MessageSquare,
  desc: 'Pilihan iklan cepat (digital placement) pada media sosial resmi SwitchFest.',
  tiers: [
    { price: 'Rp 200.000,00', text: 'Konten disediakan dari pihak sponsor (IG Story + TikTok)' },
    { price: 'Rp 350.000,00', text: 'Konten diproduksi/dibuatkan penuh oleh panitia (IG Story + TikTok)' }
  ]
};

const PartnershipPage = () => {
  const [activeMobileTier, setActiveMobileTier] = useState('DIAMOND');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownloadDeck = () => {
    window.open('https://drive.google.com/file/d/1ZqcHdqEH1-QxNi-MEjXQ_Ysb2agbn0YD/view?usp=sharing', '_blank');
  };

  const getTierIcon = (name) => {
    switch (name) {
      case 'DIAMOND': return Gem;
      case 'GOLD': return Award;
      case 'SILVER': return Shield;
      case 'BRONZE': return Landmark;
      default: return Gem;
    }
  };

  const getTierColorClass = (name) => {
    switch (name) {
      case 'DIAMOND': return 'tier-header-diamond';
      case 'GOLD': return 'tier-header-gold';
      case 'SILVER': return 'tier-header-silver';
      case 'BRONZE': return 'tier-header-bronze';
      default: return 'text-white';
    }
  };

  const activeMobileTierData = mainTiers.find((t) => t.name === activeMobileTier);

  return (
    <main className="text-white relative pt-28 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-24">
        
        {/* Subpage Header */}
        <SubpageHeader
          title="PARTNER"
          accentTitle="WITH US!"
          subtitle="Bermitra dengan kami untuk menjangkau ribuan mahasiswa, pelajar, dan talenta IT muda terbaik se-Indonesia. Jadilah bagian dari kesuksesan SwitchFest 2026!"
          categoryLabel="SPONSORSHIP OPPORTUNITY"
          backPath="/"
        />
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto -mt-16 pb-6 relative z-20">
          <button
            onClick={handleDownloadDeck}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold uppercase tracking-wider hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-300 font-jakarta text-xs"
          >
            <Download className="w-4 h-4" />
            Unduh Proposal
          </button>
          <a
            href="https://wa.me/6281215836206?text=Halo%20Panitia%20SwitchFest%202026%2C%20saya%20tertarik%20untuk%20menjadi%20sponsor%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#f97540] text-black font-bold uppercase tracking-wider hover:bg-[#ff8b53] hover:scale-105 active:scale-95 transition-all duration-300 font-jakarta text-xs shadow-[0_0_25px_rgba(249,117,64,0.35)]"
          >
            <Phone className="w-4 h-4" />
            Hubungi Panitia
          </a>
        </div>

        {/* Why Sponsor Us (Statistics) */}
        <div className="space-y-12">
          <SectionTitle
            mainText="WHY"
            accentText="SPONSOR US?"
            size="text-3xl md:text-5xl font-black tracking-tight"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div
                  key={idx}
                  className="glass-navy border border-[#5cb3ff]/10 p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between hover:border-[#f97540]/30 transition-all duration-500 group stat-card-gradient"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#f97540]/10 flex items-center justify-center border border-[#f97540]/25 transition-transform duration-300 group-hover:scale-110">
                      <StatIcon className="w-6 h-6 text-[#f97540]" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-black text-4xl md:text-5xl text-white tracking-tight font-jakarta">
                        {stat.value}
                      </div>
                      <div className="text-white/80 font-bold text-sm tracking-wide font-jakarta">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed mt-4">
                    {stat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* What You'll Get (Benefits) */}
        <div className="space-y-12">
          <SectionTitle
            mainText="WHAT"
            accentText="YOU'LL GET"
            size="text-3xl md:text-5xl font-black tracking-tight"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {benefitsData.map((benefit, idx) => {
              const BenefitIcon = benefit.icon;
              return (
                <div
                  key={idx}
                  className={`group relative p-8 md:p-10 rounded-[2.5rem] overflow-hidden bg-black/40 border border-white/5 md:backdrop-blur-xl transition-all duration-500 ease-out h-full ${benefit.cardClass}`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 0%, ${benefit.color} 0%, transparent 70%)` }} />
                  <div className="relative z-10 flex flex-col h-full space-y-6">
                    <div className="w-16 h-16 rounded-3xl flex items-center justify-center relative transition-transform duration-500 group-hover:scale-110 border border-[#f97540]/30" style={{ background: 'rgba(249, 117, 64, 0.1)' }}>
                      <BenefitIcon className="w-8 h-8 text-[#f97540]" />
                      <div className="absolute inset-0 rounded-3xl blur-xl opacity-35 bg-[#f97540]" />
                    </div>
                    <h3 className="font-black text-2xl md:text-3xl text-white font-jakarta tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed font-light font-jakarta">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sponsorship Tiers Comparison */}
        <div className="space-y-12">
          <SectionTitle
            mainText="SPONSORSHIP"
            accentText="TIERS"
            size="text-3xl md:text-5xl font-black tracking-tight"
          />


          {/* Desktop Table View */}
          <div className="hidden md:block">
            <div className="sponsorship-table-container">
              <table className="sponsorship-table" role="grid">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="sticky-col">
                      <span className="text-xs font-bold text-[#f97540] tracking-widest font-mono">Benefit</span>
                    </th>
                    {mainTiers.map((tier) => (
                      <th key={tier.name} className="p-6 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <h3 className={`text-xl font-black font-jakarta tracking-tighter ${getTierColorClass(tier.name)}`}>
                            {tier.name}
                          </h3>
                          <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">
                            {tier.sub}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.05]">
                  {matrixRows.map((row, rIdx) => (
                    <tr key={rIdx}>
                      <td className="sticky-col py-4 px-6 text-white/80 font-medium">
                        {row.benefit}
                      </td>
                      <td className="py-4 px-6">
                        {row.diamond === '✓' ? (
                          <Check className="w-5 h-5 mx-auto value-check-yes" />
                        ) : row.diamond === '✗' ? (
                          <X className="w-5 h-5 mx-auto value-check-no" />
                        ) : (
                          <span className="value-text-highlight">{row.diamond}</span>
                        )}
                      </td>
                      <td className="py-4 px-6">
                        {row.gold === '✓' ? (
                          <Check className="w-5 h-5 mx-auto value-check-yes" />
                        ) : row.gold === '✗' ? (
                          <X className="w-5 h-5 mx-auto value-check-no" />
                        ) : (
                          <span className="value-text-highlight">{row.gold}</span>
                        )}
                      </td>
                      <td className="py-4 px-6">
                        {row.silver === '✓' ? (
                          <Check className="w-5 h-5 mx-auto value-check-yes" />
                        ) : row.silver === '✗' ? (
                          <X className="w-5 h-5 mx-auto value-check-no" />
                        ) : (
                          <span className="value-text-highlight">{row.silver}</span>
                        )}
                      </td>
                      <td className="py-4 px-6">
                        {row.bronze === '✓' ? (
                          <Check className="w-5 h-5 mx-auto value-check-yes" />
                        ) : row.bronze === '✗' ? (
                          <X className="w-5 h-5 mx-auto value-check-no" />
                        ) : (
                          <span className="value-text-highlight">{row.bronze}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                  {/* Prices Row */}
                  <tr className="bg-white/[0.01]">
                    <td className="sticky-col py-6 px-6 font-bold text-white uppercase tracking-wider font-mono">
                      Nilai Kontribusi
                    </td>
                    {mainTiers.map((tier) => (
                      <td key={tier.name} className="py-6 px-6">
                        <div className="flex flex-col items-center gap-2">
                          <span className="text-lg font-black font-mono tracking-tight text-white">
                            {tier.price}
                          </span>
                          <a
                            href={`https://wa.me/6281215836206?text=Halo%20Panitia%20SwitchFest%202026%2C%20kami%20tertarik%20untuk%20bekerjasama%20sebagai%20Sponsor%20${tier.name}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-full border border-[#f97540]/30 hover:border-[#f97540] bg-[#f97540]/5 hover:bg-[#f97540] hover:text-black transition-all text-[10px] font-bold uppercase tracking-wider"
                          >
                            Pilih Paket
                          </a>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Accordion View */}
          <div className="md:hidden space-y-6">
            <div className="flex justify-between items-center bg-white/5 p-1.5 rounded-2xl border border-white/5 overflow-x-auto gap-2">
              {mainTiers.map((tier) => (
                <button
                  key={tier.name}
                  onClick={() => setActiveMobileTier(tier.name)}
                  className={`flex-1 py-3 px-2 rounded-xl text-xs font-black tracking-tight transition-all duration-300 shrink-0 ${
                    activeMobileTier === tier.name
                      ? 'bg-[#f97540] text-black shadow-lg scale-105'
                      : 'text-white/40 hover:text-white hover:bg-white/5'
                  }`}
                  style={{ minWidth: '85px' }}
                >
                  {tier.name}
                </button>
              ))}
            </div>

            {/* Selected Package Details */}
            {activeMobileTierData && (
              <div className="glass-navy border border-[#5cb3ff]/10 p-8 md:p-10 rounded-[2.5rem] space-y-6 relative overflow-hidden animate-fade-in">
                {/* Glowing corner indicator */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-15 blur-2xl"
                  style={{ backgroundColor: activeMobileTierData.color }}
                />

                <div className="border-b border-white/5 pb-4 space-y-2">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase" style={{ color: activeMobileTierData.color }}>
                        {activeMobileTierData.sub}
                      </span>
                      <h3 className="text-2xl font-black font-jakarta flex items-center gap-2">
                        {React.createElement(getTierIcon(activeMobileTierData.name), {
                          className: 'w-6 h-6',
                          style: { color: activeMobileTierData.color }
                        })}
                        {activeMobileTierData.name}
                      </h3>
                    </div>
                    {activeMobileTierData.badge && (
                      <span className="text-[8px] font-bold font-mono bg-white text-black px-2 py-0.5 rounded tracking-widest uppercase">
                        {activeMobileTierData.badge}
                      </span>
                    )}
                  </div>
                  <div className="pt-2 flex flex-col">
                    <span className="text-2xl font-black font-mono tracking-tight text-white">
                      {activeMobileTierData.price}
                    </span>
                    <span className="text-[9px] font-mono text-white/30 uppercase tracking-wider">Nilai Kontribusi</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[11px] font-black tracking-widest uppercase text-white/50 font-mono">Daftar Benefit</h4>
                  <ul className="space-y-3">
                    {activeMobileTierData.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                        <p className="text-xs text-white/70 leading-relaxed font-jakarta">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <a
                    href={`https://wa.me/6281215836206?text=Halo%20Panitia%20SwitchFest%202026%2C%20kami%20tertarik%20untuk%20bekerjasama%20sebagai%20Sponsor%20${activeMobileTierData.name}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-4 rounded-2xl bg-white text-black font-black uppercase tracking-wider text-xs font-jakarta block"
                  >
                    Pilih Paket {activeMobileTierData.name}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Alternate Sponsorship Options */}
        <div className="space-y-12">
          <SectionTitle
            mainText="SPONSOR ALTERNATIF"
            accentText="& DIGITAL ADS"
            size="text-3xl md:text-5xl font-black tracking-tight"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {alternateSponsors.map((alt, idx) => {
              const AltIcon = alt.icon;
              return (
                <div
                  key={idx}
                  className="glass-navy border border-[#5cb3ff]/10 p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between hover:border-[#f97540]/30 transition-all duration-500 relative group"
                >
                  <div className="space-y-6">
                    <div className="flex justify-between items-start border-b border-white/5 pb-4">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold tracking-widest font-mono uppercase text-white/30">
                          Sponsor Alternatif
                        </span>
                        <h3 className="text-xl font-black font-jakarta flex items-center gap-2 text-white group-hover:text-[#f97540] transition-colors">
                          <AltIcon className="w-5 h-5 text-[#f97540]" />
                          {alt.title}
                        </h3>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-black font-mono text-[#f97540]">
                          {alt.price}
                        </span>
                        <div className="text-[8px] text-white/30 uppercase tracking-widest font-mono">Format Kontribusi</div>
                      </div>
                    </div>

                    <p className="text-xs text-white/50 leading-relaxed font-jakarta">
                      {alt.desc}
                    </p>

                    <ul className="space-y-3">
                      {alt.benefits.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs text-white/70">
                          <Check className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                          <span className="font-jakarta">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5">
                    <a
                      href={`https://wa.me/6281215836206?text=Halo%20Panitia%20SwitchFest%202026%2C%20kami%20tertarik%20untuk%20bekerjasama%20dalam%20kategori%20${encodeURIComponent(alt.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 font-bold rounded-2xl border text-center transition-all duration-300 font-jakarta text-xs uppercase tracking-wider block border-white/5 hover:border-[#f97540] hover:bg-[#f97540]/5 text-white/80 hover:text-white"
                    >
                      Ajukan Kerjasama Alternatif
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Paid Content Ads Panel */}
          <div className="glass-navy border border-[#5cb3ff]/10 p-8 md:p-10 rounded-[2.5rem] max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f97540]/5 rounded-full blur-[40px] pointer-events-none" />
            
            <div className="flex flex-col md:flex-row items-stretch gap-8 justify-between relative z-10">
              <div className="space-y-4 max-w-md flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#f97540]/30 bg-[#f97540]/10 w-fit">
                  <paidContentAds.icon className="w-4 h-4 text-[#f97540]" />
                  <span className="text-[#f97540] font-bold text-[9px] tracking-wider uppercase font-jakarta">Digital Placement</span>
                </div>
                <h3 className="text-2xl font-black font-jakarta text-white">
                  {paidContentAds.title}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed font-jakarta">
                  {paidContentAds.desc} Targetkan audiens festival kami secara instan melalui Instagram Stories dan TikTok resmi SwitchFest 2026.
                </p>
              </div>
              
              <div className="w-full md:w-64 shrink-0 flex flex-col justify-center gap-3">
                {paidContentAds.tiers.map((t, tIdx) => (
                  <div
                    key={tIdx}
                    className="bg-white/5 border border-white/5 p-4 rounded-xl space-y-1 hover:border-[#f97540]/40 transition-colors"
                  >
                    <div className="text-sm font-black font-mono text-[#f97540]">{t.price}</div>
                    <div className="text-[9px] text-white/60 leading-snug font-jakarta">{t.text}</div>
                  </div>
                ))}
                <a
                  href="https://wa.me/6281215836206?text=Halo%20Panitia%20SwitchFest%202026%2C%20saya%20tertarik%20memesan%20Paid%20Content%20Ads."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-xl bg-white text-black font-bold uppercase tracking-wider hover:bg-white/90 transition-all font-jakarta text-[10px]"
                >
                  Pesan Iklan Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* READY TO PARTNER? (Contact Tiers) */}
        <div className="space-y-12">
          <div className="text-center">
            <span className="text-[#f97540] font-mono text-xs uppercase tracking-[0.3em] font-bold block mb-2">
              "Innovation dies in isolation. Great leaps are made through Meaningful Partnerships."
            </span>
            <SectionTitle
              mainText="READY TO"
              accentText="PARTNER?"
              size="text-3xl md:text-5xl font-black tracking-tight"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Coordinator 1 */}
            <ContactCard
              role="Ketua Pelaksana"
              name="Bagus Dwi Adi Nugroho"
              phone="+62 851-1736-9252"
              accentColor="#f97540"
            />

            {/* Coordinator 2 */}
            <ContactCard
              role="Ketua Sponsorship"
              name="Bima"
              phone="+62 812-1583-6206"
              accentColor="#f97540"
            />
          </div>
        </div>

        {/* Partnership Warning/Note */}
        <div className="glass-navy border border-[#5cb3ff]/10 p-8 md:p-10 rounded-[2.5rem] max-w-2xl mx-auto flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-[#f97540]/10 border border-[#f97540]/30 flex items-center justify-center shrink-0 mt-1">
            <ShieldCheck className="w-4 h-4 text-[#f97540]" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold font-jakarta text-white uppercase tracking-wider">Catatan Tambahan</h4>
            <p className="text-[10px] text-white/40 leading-relaxed font-jakarta">
              Penempatan logo, urutan ad-libs, serta detail teknis promosi digital lainnya akan disesuaikan secara proporsional sesuai jumlah sponsor yang berpartisipasi. Hubungi penanggung jawab sponsorship kami untuk diskusi kontrak kemitraan lebih lanjut.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default PartnershipPage;
