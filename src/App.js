import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlowingOrb from "./components/common/GlowingOrb";
import About from './components/About';
import Mascot from './components/Mascot';
import Category from "./components/Category";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Sponsor from "./components/Sponsor";
import Timeline from "./components/Timeline";
import './App.css';

// Lazy-loaded components for code-splitting and better initial load performance
const RegistrationModal = lazy(() => import("./components/RegistrationModal"));
const LombaItPage = lazy(() => import("./components/LombaItPage"));
const EsportPage = lazy(() => import("./components/EsportPage"));
const FutsalPage = lazy(() => import("./components/FutsalPage"));
const TalkshowPage = lazy(() => import("./components/TalkshowPage"));
const ConcertPage = lazy(() => import("./components/ConcertPage"));
const ImpactProjectionPage = lazy(() => import("./components/ImpactProjectionPage"));
const PartnershipPage = lazy(() => import("./components/PartnershipPage"));
const SponsorPage = lazy(() => import("./components/SponsorPage"));

// Scroll to Hash behavior helper
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        const timer = setTimeout(() => {
          const delayedElement = document.getElementById(id);
          if (delayedElement) {
            delayedElement.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname, hash]);

  return null;
};

// Shared layout wrapper for subpages to eliminate DRY violations
const SubpageLayout = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;

  // Define page-specific background glows matching the event themes
  let orbs = [];
  if (path === '/lomba-it') {
    orbs = [
      { color: 'blue', size: 'w-[700px] h-[700px]', position: 'top-[-10%] left-[-10%]', opacity: 'opacity-15' },
      { color: 'blue', size: 'w-[600px] h-[600px]', position: 'bottom-[-10%] right-[-10%]', opacity: 'opacity-15' },
      { color: 'blue', size: 'w-[500px] h-[500px]', position: 'top-[25%] left-[25%]', opacity: 'opacity-10' }
    ];
  } else if (path === '/esport') {
    orbs = [
      { color: 'orange', size: 'w-[700px] h-[700px]', position: 'top-[-10%] left-[-10%]', opacity: 'opacity-15' },
      { color: 'orange', size: 'w-[600px] h-[600px]', position: 'bottom-[-10%] right-[-10%]', opacity: 'opacity-15' },
      { color: 'orange', size: 'w-[500px] h-[500px]', position: 'top-[25%] left-[25%]', opacity: 'opacity-10' }
    ];
  } else if (path === '/futsal') {
    orbs = [
      { color: 'blue', size: 'w-[700px] h-[700px]', position: 'top-[-10%] left-[-10%]', opacity: 'opacity-15' },
      { color: 'purple', size: 'w-[600px] h-[600px]', position: 'bottom-[-10%] right-[-10%]', opacity: 'opacity-15' },
      { color: 'blue', size: 'w-[500px] h-[500px]', position: 'top-[25%] left-[25%]', opacity: 'opacity-10' }
    ];
  } else if (path === '/talkshow') {
    orbs = [
      { color: 'blue', size: 'w-[700px] h-[700px]', position: 'top-[-10%] left-[-10%]', opacity: 'opacity-15' },
      { color: 'purple', size: 'w-[600px] h-[600px]', position: 'bottom-[-10%] right-[-10%]', opacity: 'opacity-15' },
      { color: 'blue', size: 'w-[500px] h-[500px]', position: 'top-[25%] left-[25%]', opacity: 'opacity-10' }
    ];
  } else if (path === '/concert') {
    orbs = [
      { color: 'orange', size: 'w-[700px] h-[700px]', position: 'top-[-10%] left-[-10%]', opacity: 'opacity-15' },
      { color: 'orange', size: 'w-[600px] h-[600px]', position: 'bottom-[-10%] right-[-10%]', opacity: 'opacity-15' },
      { color: 'orange', size: 'w-[500px] h-[500px]', position: 'top-[25%] left-[25%]', opacity: 'opacity-10' }
    ];
  } else {
    // Default orbs for /sponsor, /partnership, /impact-projection
    orbs = [
      { color: 'blue', size: 'w-[600px] h-[600px]', position: 'top-[-10%] left-[-10%]', opacity: 'opacity-10' },
      { color: 'purple', size: 'w-[600px] h-[600px]', position: 'bottom-[-10%] right-[-10%]', opacity: 'opacity-10' }
    ];
  }

  return (
    <div className="min-h-screen hero-aurora-bg relative overflow-hidden flex flex-col justify-between">
      {/* Dynamic Cosmic glowing orbs matching page theme */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ isolation: 'isolate' }}>
        {orbs.map((orb, idx) => (
          <GlowingOrb
            key={idx}
            color={orb.color}
            size={orb.size}
            position={orb.position}
            opacity={orb.opacity}
            animationDelay={`${idx * 1.5}s`}
          />
        ))}
        
        {/* Moving glass beam sweep (Restore the moving glass effect!) */}
        <div className="hero-beam" style={{ left: '15%', opacity: 0.05 }} />
        <div className="hero-beam hero-beam-2" style={{ left: '70%', opacity: 0.04 }} />

        {/* Noise overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="flex-grow relative z-10">
        {children}
      </div>
      <div className="relative z-10">
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

// Premium custom loading spinner with neon theme matching SwitchFest design
const PageLoading = () => (
  <div className="min-h-screen bg-black flex flex-col items-center justify-center relative">
    <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
      background: 'radial-gradient(circle at center, rgba(249,117,64,0.15) 0%, transparent 60%)'
    }} />
    <div className="flex flex-col items-center gap-4 relative z-10">
      <div className="relative w-16 h-16">
        {/* Outer glowing ring */}
        <div className="absolute inset-0 rounded-full border-4 border-[#f97540]/10 border-t-[#f97540] animate-spin shadow-[0_0_15px_rgba(249,117,64,0.5)]" />
        {/* Inner purple ring */}
        <div className="absolute inset-2 rounded-full border-4 border-[#7e5dc1]/10 border-b-[#7e5dc1] animate-spin [animation-direction:reverse] [animation-duration:1s]" />
      </div>
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50 animate-pulse">
        Memuat Halaman...
      </span>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <ScrollToHash />
      <div className="bg-black text-white min-h-screen font-jakarta relative overflow-hidden">
        {/* Grid overlay like iofest.com */}
        <div className="grid-overlay" aria-hidden="true" />

        <Navbar />
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={
              <main className="min-h-screen hero-aurora-bg relative overflow-hidden">
                {/* Cosmic glowing orbs with Blue accents */}
                <GlowingOrb color="blue" size="w-[500px] h-[500px]" position="top-[15%] left-[-10%]" opacity="opacity-5" animationDelay="0s" />
                <GlowingOrb color="purple" size="w-[600px] h-[600px]" position="top-[35%] right-[-10%]" opacity="opacity-5" animationDelay="2s" />
                <GlowingOrb color="blue" size="w-[500px] h-[500px]" position="top-[55%] left-[20%]" opacity="opacity-4" animationDelay="1s" />
                <GlowingOrb color="blue" size="w-[550px] h-[550px]" position="top-[75%] right-[10%]" opacity="opacity-5" animationDelay="3s" />
                <GlowingOrb color="blue" size="w-[450px] h-[450px]" position="top-[90%] left-[-5%]" opacity="opacity-3" animationDelay="0.5s" />

                <Hero />
                <div className="relative -mt-20 z-10">
                  <About />
                </div>
                <Mascot />
                <Timeline />
                <Category />
                <Sponsor />
                <Contact />
                <Footer />
              </main>
            } />

            {/* Dedicated Info Pages */}
            <Route path="/impact-projection" element={<SubpageLayout><ImpactProjectionPage /></SubpageLayout>} />
            <Route path="/partnership" element={<SubpageLayout><PartnershipPage /></SubpageLayout>} />
            <Route path="/sponsor" element={<SubpageLayout><SponsorPage /></SubpageLayout>} />

            {/* Event Subpages */}
            <Route path="/lomba-it" element={<SubpageLayout><LombaItPage /></SubpageLayout>} />
            <Route path="/esport" element={<SubpageLayout><EsportPage /></SubpageLayout>} />
            <Route path="/futsal" element={<SubpageLayout><FutsalPage /></SubpageLayout>} />
            <Route path="/talkshow" element={<SubpageLayout><TalkshowPage /></SubpageLayout>} />
            <Route path="/concert" element={<SubpageLayout><ConcertPage /></SubpageLayout>} />

            {/* Registration */}
            <Route path="/register" element={<RegistrationModal />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
