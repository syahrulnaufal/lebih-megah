import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import '../App.css';

const faqData = [
  {
    question: 'Apa itu SwitchFest?',
    answer: 'SwitchFest (Super Walisongo Information Technology Festival) adalah festival teknologi tingkat nasional yang diselenggarakan oleh mahasiswa UIN Walisongo Semarang. Rangkaian acaranya meliputi Lomba IT (Web Programming, UI/UX Design, Infografis), Turnamen E-Sport, Turnamen Futsal, Talkshow Nasional, dan Konser Penutup.',
  },
  {
    question: 'Siapa itu Tivo?',
    answer: 'Tivo adalah maskot resmi SwitchFest 2026. Tivo digambarkan sebagai robot/karakter futuristik ramah yang melambangkan inovasi teknologi, kreativitas tanpa batas, serta semangat sportivitas tinggi yang menyatukan seluruh rangkaian acara SwitchFest.',
  },
  {
    question: 'Siapa saja yang bisa ikut SwitchFest?',
    answer: 'SwitchFest terbuka untuk pelajar SMA/SMK/sederajat, mahasiswa dari seluruh perguruan tinggi di Indonesia, serta masyarakat umum yang tertarik berpartisipasi (tergantung cabang kegiatan yang dipilih).',
  },
  {
    question: 'Apakah pendaftaran SwitchFest gratis?',
    answer: 'Informasi mengenai biaya pendaftaran, kelayakan, serta benefit yang didapatkan untuk masing-masing cabang acara akan diumumkan secara detail pada panduan lomba (juklak). Pantau terus website dan sosial media resmi kami.',
  },
  {
    question: 'Bagaimana cara mendaftar?',
    answer: 'Pendaftaran dilakukan secara online melalui website resmi SwitchFest. Cukup pilih kategori acara yang ingin diikuti, lalu isi formulir registrasi yang disediakan.',
  },
  {
    question: 'Apakah kompetisi dilakukan secara online atau offline?',
    answer: 'Untuk Lomba IT, babak penyisihan berlangsung secara online dan babak final diadakan secara offline/hybrid di kampus UIN Walisongo Semarang. Turnamen olahraga dan talkshow diadakan secara luring (offline).',
  },
  {
    question: 'Apa saja hadiah yang ditawarkan?',
    answer: 'Pemenang kompetisi berhak mendapatkan total hadiah puluhan juta rupiah, piala penghargaan, sertifikat berstandar nasional, merchandise eksklusif, serta relasi dengan juri profesional dan praktisi industri.',
  },
];

const FaqItem = ({ question, answer, isOpen, onClick, index }) => (
  <div className="faq-item">
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between py-6 md:py-8 text-left group transition-colors duration-300"
      aria-expanded={isOpen}
    >
      <div className="flex items-center gap-4 md:gap-6">
        <span className="text-sm md:text-base text-white/20 font-mono font-bold w-8 shrink-0">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3
          className={`text-base md:text-xl font-bold transition-colors duration-300 font-jakarta ${
            isOpen ? 'text-white' : 'text-white/70 group-hover:text-white'
          }`}
        >
          {question}
        </h3>
      </div>
      <div
        className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
          isOpen
            ? 'bg-white/10 border-white/20 rotate-180'
            : 'bg-white/5 border-white/10 group-hover:border-white/20'
        }`}
      >
        <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-white/60" />
      </div>
    </button>
    <div
      className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen ? 'max-h-[500px] pb-6 md:pb-8' : 'max-h-0'
      }`}
    >
      <p className="text-sm md:text-base text-white/50 leading-relaxed pl-12 md:pl-14 pr-12">
        {answer}
      </p>
    </div>
  </div>
);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-16 md:py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-20 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <span className="text-neon-blue text-xs md:text-sm uppercase tracking-[0.4em] font-bold mb-4 block">
            FAQ
          </span>
          <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl text-white font-jakarta">
            Pertanyaan yang{' '}
            <span className="text-gradient-section">Sering Ditanyakan</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div
          className={`transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {faqData.map((item, idx) => (
            <FaqItem
              key={idx}
              index={idx}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
