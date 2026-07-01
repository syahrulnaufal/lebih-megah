import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare } from 'lucide-react';
import '../App.css';

const TIVO_QUOTES = [
  "Hai! Aku TIVO, maskot resmi SwitchFest 2026! 🚀",
  "Sudah siap menunjukkan karya terbaikmu di Lomba IT? 💻",
  "Tunjukkan kerjasama tim terbaikmu di turnamen Futsal & E-Sport! 🏆",
  "Ayo ikuti Talkshow teknologi dan rayakan di Konser penutup! 🎵",
  "Code the Stars, Beyond the Horizons! ✨"
];

const Mascot = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [bubbleVisible, setBubbleVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleNextQuote = () => {
    setBubbleVisible(false);
    setTimeout(() => {
      setQuoteIdx((prev) => (prev + 1) % TIVO_QUOTES.length);
      setBubbleVisible(true);
    }, 300);
  };

  return (
    <section
      id="mascot"
      ref={sectionRef}
      className="relative py-16 md:py-32 overflow-hidden px-4"
    >
      {/* Background Neon Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-neon-purple/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-neon-orange/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column — Visual (Video/Image) */}
          <div
            className={`lg:col-span-6 flex flex-col items-center justify-center relative transition-all duration-1000 ${
              visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {/* Ambient Circle Behind */}
            <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-white/5 rounded-full animate-spin pointer-events-none" style={{ animationDuration: '40s' }} />
            <div className="absolute w-[260px] h-[260px] md:w-[350px] md:h-[350px] border border-neon-purple/10 rounded-full animate-spin pointer-events-none" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />

            {/* Video Container */}
            <div className="relative group rounded-[2.5rem] overflow-hidden border border-[var(--color-primary-light)]/10 glass-navy shadow-[0_0_50px_rgba(92,179,255,0.15)] max-w-sm w-full aspect-square flex items-center justify-center p-2">
              <video
                src="/images/mas.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full rounded-[2.2rem] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Glass Badge for Mascot PNG */}
              <div className="absolute -bottom-6 -right-6 w-28 h-28 md:w-36 md:h-36 rounded-3xl overflow-hidden glass-navy border border-[var(--color-primary-light)]/10 p-2 shadow-2xl animate-float">
                <img
                  src="/images/mass.png"
                  alt="Tivo PNG"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column — Text Content */}
          <div
            className={`lg:col-span-6 space-y-6 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >


            <h2 className="font-bold text-4xl md:text-6xl text-white font-jakarta leading-none">
              Kenalkan, <span className="text-[var(--color-highlight-orange)]">TIVO!</span>
            </h2>

            {/* Dialogue Bubble */}
            <div className="relative glass-navy border border-[var(--color-primary-light)]/10 p-6 rounded-[2.5rem] rounded-tl-none shadow-xl max-w-xl transition-all duration-300 min-h-[100px] flex items-center">
              {/* Dialogue triangle indicator */}
              <div className="absolute top-[-1px] left-[-10px] w-0 h-0 border-t-[12px] border-t-[#5cb3ff]/10 border-r-[12px] border-r-transparent rotate-90" />
              <div className="absolute top-[0px] left-[-8px] w-0 h-0 border-t-[10px] border-t-[#081026] border-r-[10px] border-r-transparent rotate-90 z-10" />

              <p
                className={`text-white/90 text-lg md:text-xl font-medium font-jakarta leading-relaxed transition-opacity duration-300 ${
                  bubbleVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {TIVO_QUOTES[quoteIdx]}
              </p>
            </div>

            <button
              onClick={handleNextQuote}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-[var(--color-primary-light)]/15 hover:border-neon-blue/50 hover:bg-neon-blue/10 text-white font-bold text-sm transition-all duration-300 font-jakarta uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4 text-[var(--color-highlight-orange)]" />
              Sapa Tivo
            </button>

            <div className="pt-4 border-t border-white/5 space-y-4 max-w-xl">
              <p className="text-base text-white/60 leading-relaxed">
                Tivo adalah robot futuristik ramah yang menjadi maskot resmi SwitchFest 2026. Karakter Tivo melambangkan inovasi teknologi, kreativitas tanpa batas, serta sportivitas tinggi.
              </p>
              <p className="text-base text-white/60 leading-relaxed">
                Desain Tivo yang dinamis menggambarkan sinergi antara dunia sains-teknologi (Lomba IT & Talkshow) dengan kecakapan fisik serta kompetisi tim (Futsal & E-Sport). Tivo siap memandu langkahmu sepanjang festival ini berlangsung!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mascot;
