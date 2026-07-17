import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Globe, Award, Briefcase, ShieldCheck, CheckCircle2 } from 'lucide-react';
import '../App.css';

const metrics = [
  {
    icon: Users,
    value: '5.000+',
    label: 'Target Pengunjung',
    desc: 'Estimasi total pengunjung offline & online untuk seluruh rangkaian kompetisi, seminar, dan konser penutup.',
    color: 'var(--color-highlight-lime)', // Blue
  },
  {
    icon: Globe,
    value: '100.000+',
    label: 'Digital Impressions',
    desc: 'Target paparan publik melalui promosi media sosial resmi, publikasi media partner, dan kampanye digital.',
    color: 'var(--color-highlight-lime)', // Orange
  },
  {
    icon: Award,
    value: '50+',
    label: 'Sponsor & Mitra Media',
    desc: 'Kolaborasi aktif bersama berbagai instansi, perusahaan teknologi nasional, dan media partner terpercaya.',
    color: 'var(--color-highlight-lime)', // Purple
  },
  {
    icon: Briefcase,
    value: '30+',
    label: 'Institusi Terlibat',
    desc: 'Partisipasi delegasi dari berbagai SMA/SMK, Universitas, serta komunitas IT terkemuka di Indonesia.',
    color: 'var(--color-highlight-lime)', // Tivo Magenta
  },
];

const benefits = [
  {
    title: 'Massive Brand Exposure',
    desc: 'Logo, nama, dan identitas brand akan hadir di semua lini publikasi (media sosial, outdoor campaign, media partner, tiket, merchandise, dan panggung utama).',
  },
  {
    title: 'Direct Engagement dengan Ribuan Audience',
    desc: 'Sponsor bisa berinteraksi langsung dengan pengunjung festival melalui booth, product sampling, games, atau experience area.',
  },
  {
    title: 'Exclusive Brand Positioning',
    desc: 'Kesempatan menjadi Official Partner atau Title Sponsor, dengan penempatan branding yang lebih dominan dan eksklusif.',
  },
  {
    title: 'Viral & Digital Buzz',
    desc: 'Publikasi masif di platform digital dan potensi viral di media sosial dari ribuan konten yang dibuat audiens, otomatis membawa exposure organik bagi brand.',
  },
  {
    title: 'Positive Brand Association',
    desc: 'Brand sponsor akan selalu dikaitkan dengan semangat muda, kreativitas, kebebasan berekspresi, dan pengalaman festival yang unforgettable.',
  },
  {
    title: 'PR & Media Value',
    desc: 'Liputan media lokal dan nasional akan memperluas reputasi brand di luar venue, dengan nilai publisitas yang jauh lebih besar dari investasi sponsorship.',
  },
  {
    title: 'Customer Loyalty & Sales Opportunity',
    desc: 'Dengan aktivasi yang tepat, sponsor berkesempatan meningkatkan penjualan produk sekaligus memperkuat loyalitas konsumen.',
  },
];

const ImpactProjectionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="text-white relative pt-28 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10 space-y-16">
        
        {/* Back Button */}
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider font-jakarta"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </div>

        {/* Title / Hero */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-7xl font-black font-jakarta tracking-tight">
            {/* IMPACT <span className="text-[var(--color-highlight-lime)]">PROJECTION</span> */}
            IMPACT PROJECTION
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg">
            Rencana dampak SwitchFest 2026 dalam melahirkan paparan publik yang luas dan memperluas ekosistem teknologi nasional.
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-navy border border-[var(--color-highlight-lime)]/10 p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between hover:border-[var(--color-highlight-lime)]/30 transition-all duration-300 relative group"
              >
                {/* Accent glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none rounded-[24px]"
                  style={{
                    background: `radial-gradient(circle at 100% 0%, ${item.color} 0%, transparent 70%)`,
                  }}
                />
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}35` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black font-jakarta text-white tracking-tight mb-2">
                    {item.value}
                  </h3>
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: item.color }}>
                    {item.label}
                  </h4>
                  <p className="text-xs text-white/50 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 7 Core Benefits of Partnership */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-4xl font-bold font-jakarta text-center">
            {/* Keuntungan Utama <span className="text-[var(--color-highlight-lime)]">Kemitraan</span> */}
            Keuntungan Utama Kemitraan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="glass-navy border border-[var(--color-highlight-lime)]/10 p-8 md:p-10 rounded-[2.5rem] flex gap-4 hover:border-[var(--color-highlight-lime)]/30 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-[var(--color-highlight-lime)]/10 border border-[var(--color-highlight-lime)]/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-highlight-lime)]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold font-jakarta text-white">{benefit.title}</h4>
                  <p className="text-xs text-white/50 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Keselarasan Kesiapan Publikasi */}
        <div className="glass-navy border border-[var(--color-highlight-lime)]/10 p-8 md:p-10 rounded-[2.5rem] max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-highlight-lime)]/15 rounded-full blur-[40px] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between relative z-10">
            <div className="space-y-3 max-w-lg">
              <h3 className="text-lg md:text-xl font-bold font-jakarta text-white uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[var(--color-highlight-lime)]" />
                Rencana Kesiapan Publikasi
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Panitia pelaksana SwitchFest 2026 (HMJ TI UIN Walisongo) terus berkoordinasi secara aktif bersama puluhan jaringan media, komunitas teknologi, dan instansi pendidikan guna memastikan jangkauan audiens dan dampak tercapai secara maksimal.
              </p>
            </div>
            
            <div className="w-full md:w-auto shrink-0 flex flex-col items-center gap-2">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="56"
                    cy="56"
                    r="48"
                    className="stroke-white/5"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="56"
                    cy="56"
                    r="48"
                    className="stroke-[var(--color-highlight-lime)]"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 48}
                    strokeDashoffset={2 * Math.PI * 48 * (1 - 0.85)}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-2xl font-black font-jakarta text-white">85%</span>
                  <span className="text-[10px] font-mono tracking-wider text-white/40 uppercase">Aligned</span>
                </div>
              </div>
              <span className="text-xs font-semibold text-[var(--color-highlight-lime)] uppercase tracking-widest font-mono">
                Publication Pipeline
              </span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default ImpactProjectionPage;
