import React, { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import { ArrowRight, ChevronDown, Calendar, MapPin } from 'lucide-react';
import '../App.css';

/* ═══════════════════════════════════════════
   INTERACTIVE PARTICLE CANVAS
   Mouse-reactive floating dots with connections
   ═══════════════════════════════════════════ */
const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const particlesRef = useRef([]);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    // Initialize particles
    const count = window.innerWidth < 768 ? 35 : 70;
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * W(),
      y: Math.random() * H(),
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.8 + 0.4,
      baseAlpha: Math.random() * 0.25 + 0.08,
      alpha: 0,
      hue: Math.random() > 0.5 ? 210 : 25, // blue or orange
    }));

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    const section = canvas.closest('section');
    section?.addEventListener('mousemove', onMouseMove);
    section?.addEventListener('mouseleave', onMouseLeave);

    const draw = () => {
      const w = W();
      const h = H();
      ctx.clearRect(0, 0, w, h);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      particlesRef.current.forEach((p) => {
        // Mouse repel
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150 && dist > 0) {
          const force = ((150 - dist) / 150) * 0.6;
          p.vx += (dx / dist) * force * 0.08;
          p.vy += (dy / dist) * force * 0.08;
          p.alpha = Math.min(p.baseAlpha + 0.3 * (1 - dist / 150), 0.6);
        } else {
          p.alpha += (p.baseAlpha - p.alpha) * 0.05;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.985;
        p.vy *= 0.985;

        // Wrap
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        const color = p.hue === 210 ? `rgba(92,179,255,${p.alpha})` : `rgba(249,117,64,${p.alpha * 0.7})`;
        ctx.fillStyle = color;
        ctx.fill();
      });

      // Connect nearby particles
      const pts = particlesRef.current;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(92,179,255,${0.05 * (1 - d / 90)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      section?.removeEventListener('mousemove', onMouseMove);
      section?.removeEventListener('mouseleave', onMouseLeave);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-particles-canvas" style={{ width: '100%', height: '100%' }} />;
};

/* ═══════════════════════════════════════════
   ANIMATED LETTER TITLE
   Each letter animates in sequentially
   ═══════════════════════════════════════════ */
const AnimatedTitle = ({ text, className, baseDelay = 0, shimmer = false }) => (
  <span className={className} style={{ perspective: '600px' }}>
    {text.split('').map((char, i) => (
      <span
        key={i}
        className={`hero-letter ${shimmer ? 'hero-text-shimmer' : ''}`}
        style={{ animationDelay: `${baseDelay + i * 0.06}s` }}
      >
        {char}
      </span>
    ))}
  </span>
);

/* ═══════════════════════════════════════════
   TYPING TAGLINE
   Cycles through mystery/branding phrases
   ═══════════════════════════════════════════ */
const TypingTagline = ({ phrases }) => {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [del, setDel] = useState(false);

  useEffect(() => {
    const phrase = phrases[idx];
    const speed = del ? 20 : 50;

    if (!del && text === phrase) {
      const t = setTimeout(() => setDel(true), 2800);
      return () => clearTimeout(t);
    }
    if (del && text === '') {
      setDel(false);
      setIdx((i) => (i + 1) % phrases.length);
      return;
    }

    const t = setTimeout(() => {
      setText(del ? phrase.slice(0, text.length - 1) : phrase.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx, phrases]);

  return (
    <span className="text-white/60">
      {text}
      <span className="hero-cursor">|</span>
    </span>
  );
};

/* ═══════════════════════════════════════════
   COUNTDOWN TIMER
   ═══════════════════════════════════════════ */
const CountdownTimer = () => {
  const target = '2026-09-24T00:00:00+07:00';
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = new Date(target) - new Date();
      if (diff <= 0) return setTime({ d: 0, h: 0, m: 0, s: 0 });
      setTime({
        d: Math.floor(diff / 864e5),
        h: Math.floor((diff % 864e5) / 36e5),
        m: Math.floor((diff % 36e5) / 6e4),
        s: Math.floor((diff % 6e4) / 1e3),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { l: 'Hari', v: time.d },
    { l: 'Jam', v: time.h },
    { l: 'Menit', v: time.m },
    { l: 'Detik', v: time.s },
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {units.map((u) => (
        <div key={u.l} className="flex flex-col items-center">
          <div className="w-full py-3 rounded-lg bg-white/[0.04] border border-white/[0.05] flex items-center justify-center">
            <span className="font-black text-lg sm:text-xl md:text-2xl text-white tracking-tight font-jakarta tabular-nums">
              {u.v.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.12em] mt-1.5 font-bold text-white/25 font-jakarta">
            {u.l}
          </span>
        </div>
      ))}
    </div>
  );
};



/* ═══════════════════════════════════════════
   FLOATING ORBS (background)
   ═══════════════════════════════════════════ */
const FloatingOrbs = () => {
  const orbs = useMemo(
    () => [
      { id: 0, size: 400, x: -8, y: -12, speed: 24, color: 'color-mix(in srgb, var(--color-primary-dark) 45%, transparent)' },
      { id: 1, size: 300, x: 80, y: 65, speed: 28, color: 'color-mix(in srgb, var(--color-primary-light) 6%, transparent)' },
      { id: 2, size: 220, x: 45, y: -20, speed: 20, color: 'color-mix(in srgb, var(--color-highlight-orange) 5%, transparent)' },
      { id: 3, size: 350, x: 88, y: -8, speed: 26, color: 'color-mix(in srgb, var(--color-highlight-lime) 5%, transparent)' },
      { id: 4, size: 250, x: 15, y: 75, speed: 22, color: 'color-mix(in srgb, var(--color-primary-light) 4%, transparent)' },
    ],
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {orbs.map((o) => (
        <div
          key={o.id}
          className="absolute rounded-full hero-orb"
          style={{
            width: o.size,
            height: o.size,
            left: `${o.x}%`,
            top: `${o.y}%`,
            background: `radial-gradient(circle, ${o.color} 0%, transparent 70%)`,
            '--orb-speed': `${o.speed}s`,
            filter: 'blur(50px)',
            animationDelay: `${-o.id * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

/* ╔═════════════════════════════════════════════╗
   ║         MAIN HERO COMPONENT                ║
   ╚═════════════════════════════════════════════╝ */
const Hero = () => {
  const [visible, setVisible] = useState(false);
  const mascotRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  // 3D parallax for mascot on desktop
  useEffect(() => {
    if (window.innerWidth < 768) return;
    const handleMouseMove = (e) => {
      if (!mascotRef.current) return;
      const rect = mascotRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
      const rx = clamp(-dy * 10, -12, 12);
      const ry = clamp(dx * 10, -12, 12);
      mascotRef.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(20px)`;
    };
    const handleMouseLeave = () => {
      if (mascotRef.current) {
        mascotRef.current.style.transform = 'rotateX(0) rotateY(0) translateZ(0)';
      }
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const scrollToAbout = useCallback(() => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToCategory = useCallback(() => {
    const el = document.getElementById('category');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const taglines = useMemo(
    () => [
      'Are You Ready to Switch?',
      'The Biggest Tech Festival is Coming.',
      'Code the Stars, Beyond the Horizons.',
      'Where Innovation Meets Inspiration.',
    ],
    []
  );



  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* ── AURORA BACKGROUND ── */}
      <div className="absolute inset-0 bg-transparent" />

      {/* ── FLOATING ORBS ── */}
      <FloatingOrbs />

      {/* ── PARTICLE CANVAS ── */}
      <ParticleCanvas />

      {/* ── LIGHT BEAMS ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2] hidden md:block" aria-hidden="true">
        <div className="hero-beam" style={{ left: '20%' }} />
        <div className="hero-beam hero-beam-2" style={{ left: '65%' }} />
      </div>

      {/* ── ACCENT LINES ── */}
      <div className="absolute inset-0 pointer-events-none z-[3] overflow-hidden hidden md:block" aria-hidden="true">
        <div className="hero-accent-line hero-accent-line-1" />
        <div className="hero-accent-line hero-accent-line-2" />
        <div className="hero-accent-line hero-accent-line-3" />
      </div>

      {/* ── RADIAL ACCENTS ── */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 5% 15%, color-mix(in srgb, var(--color-primary-light) 10%, transparent) 0%, transparent 60%),
              radial-gradient(ellipse 40% 40% at 95% 85%, color-mix(in srgb, var(--color-highlight-lime) 8%, transparent) 0%, transparent 55%),
              radial-gradient(ellipse 30% 30% at 85% 10%, color-mix(in srgb, var(--color-highlight-orange) 6%, transparent) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* ═══════ MAIN CONTENT ═══════ */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-28 sm:pt-32 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">

          {/* ── LEFT COLUMN — Branding ── */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Badge */}
            <div
              className={`transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[var(--color-primary-light)]/15 bg-[var(--color-primary-light)]/[0.04] backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[var(--color-highlight-lime)] animate-pulse shadow-[0_0_10px_rgba(92,179,255,0.6)]" />
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-primary-light)]/70 font-jakarta">
                  Festival Teknologi & Kreativitas
                </span>
              </div>
            </div>

            {/* Main title — letter by letter */}
            <div
              className={`transition-opacity duration-300 ${
                visible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <h1 className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8.5rem] tracking-tighter leading-[0.82] font-jakarta">
                {visible && (
                  <>
                    <AnimatedTitle
                      text="SWITCH"
                      className="block text-white drop-shadow-[0_0_40px_rgba(92,179,255,0.12)]"
                      baseDelay={0.1}
                    />
                    <AnimatedTitle
                      text="FEST"
                      className="block text-[var(--color-highlight-orange)] drop-shadow-[0_0_40px_rgba(92,179,255,0.2)]"
                      baseDelay={0.55}
                    />
                  </>
                )}
              </h1>
            </div>

            {/* Typing tagline */}
            <div
              className={`min-h-[2.5em] transition-all duration-700 delay-[800ms] ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-jakarta font-medium">
                {visible && <TypingTagline phrases={taglines} />}
              </p>
            </div>

            {/* Info pills */}
            <div
              className={`flex flex-wrap gap-2.5 sm:gap-3 transition-all duration-700 delay-[1000ms] ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <div className="hero-info-pill">
                <Calendar className="w-3.5 h-3.5 text-[var(--color-highlight-lime)]" />
                <span>24 Sep – 13 Nov 2026</span>
              </div>
              <div className="hero-info-pill">
                <MapPin className="w-3.5 h-3.5 text-[var(--color-highlight-lime)]" />
                <span>UIN Walisongo Semarang</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-start gap-3 sm:gap-4 pt-2 transition-all duration-700 delay-[1200ms] ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <button onClick={scrollToCategory} className="btn-primary-io group">
                <div className="btn-gradient-overlay" />
                <span className="relative z-10 flex items-center gap-3 font-jakarta">
                  Daftar Sekarang
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button onClick={scrollToAbout} className="btn-outline-hero">
                <span className="font-jakarta">Explore Event</span>
              </button>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Mascot + Countdown ── */}
          <div
            className={`lg:col-span-5 flex flex-col items-center gap-4 sm:gap-6 transition-all duration-700 delay-500 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Mascot with 3D parallax */}
            <div className="hero-mascot-wrap relative">
              {/* Glow ring */}
              <div
                className="hero-glow-ring absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, color-mix(in srgb, var(--color-primary-light) 15%, transparent) 0%, color-mix(in srgb, var(--color-highlight-lime) 8%, transparent) 40%, transparent 65%)',
                  transform: 'scale(1.4)',
                  filter: 'blur(30px)',
                }}
              />
              <img
                ref={mascotRef}
                src="/images/mass.png"
                alt="SwitchFest Mascot"
                className="hero-mascot relative z-10 w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain transition-transform duration-200 ease-out cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
                draggable={false}
              />
            </div>

            {/* Countdown */}
            <div className="w-full max-w-xs sm:max-w-sm">
              <div className="relative">
                <div
                  className="absolute -inset-1 rounded-2xl opacity-15 blur-xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(92,179,255,0.4), rgba(249,117,64,0.2))',
                  }}
                />
                <div
                  className="glass-navy relative rounded-xl p-4 sm:p-5 overflow-hidden"
                >
                  <div className="absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[var(--color-primary-light)]/15 to-transparent" />
                  <div className="text-center mb-3">
                    <p className="text-[9px] sm:text-[10px] tracking-[0.2em] font-bold uppercase text-white/35 font-jakarta flex items-center justify-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-neon-orange shadow-[0_0_8px_rgba(249,115,22,0.7)]" />
                      Registrasi Dibuka Dalam
                    </p>
                  </div>
                  <CountdownTimer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ── SCROLL INDICATOR ── */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20">
        <span className="text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-white/15 font-jakarta font-bold">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-white/15" aria-hidden="true" />
      </div>
    </section>
  );
};

export default Hero;
