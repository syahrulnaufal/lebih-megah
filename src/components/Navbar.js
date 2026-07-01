import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import '../App.css';

const NAV_LINKS = [
  { label: 'Beranda', href: '/' },
  {
    label: 'Acara',
    href: '/#category',
    hasDropdown: true,
    children: [
      { label: 'Lomba IT', href: '/lomba-it' },
      { label: 'E-Sport', href: '/esport' },
      { label: 'Futsal', href: '/futsal' },
      { label: 'Talkshow', href: '/talkshow' },
      { label: 'Konser', href: '/concert' },
    ],
  },
  { label: 'Proyeksi', href: '/impact-projection' },
  { label: 'Kemitraan', href: '/partnership' },
  { label: 'Sponsor', href: '/sponsor' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const location = useLocation();
  const currentPath = location.pathname;
  const currentHash = location.hash;

  const handleCloseMenu = useCallback(() => setMenuOpen(false), []);

  const isLinkActive = (link) => {
    if (link.href === '/') {
      return currentPath === '/' && !currentHash;
    }
    if (link.href === '/#category') {
      return (currentPath === '/' && currentHash === '#category') || 
             ['/lomba-it', '/esport', '/futsal', '/talkshow', '/concert'].includes(currentPath);
    }
    if (link.href.startsWith('/#')) {
      const targetHash = link.href.replace('/', '');
      return currentPath === '/' && currentHash === targetHash;
    }
    return currentPath === link.href;
  };

  // Track scroll position for shrink and transparency effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 w-full z-[60] flex justify-center transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none ${
          scrolled ? 'pt-4 px-4' : 'pt-0 px-0'
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-auto ${
            scrolled
              ? 'w-full max-w-5xl py-2.5 px-6 md:px-8 bg-[#020817]/85 backdrop-blur-xl border border-[var(--color-primary-light)]/15 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.8)]'
              : 'w-full max-w-[100%] py-5 px-6 md:px-10 bg-[#020817]/40 backdrop-blur-md border-b border-[var(--color-primary-light)]/10 rounded-none'
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label="SwitchFest Home"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="/images/logo-sf.png"
              alt="Logo SwitchFest 2026"
              className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 xl:gap-9">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link);
              return link.hasDropdown ? (
                <div key={link.label} ref={dropdownRef} className="relative h-full flex items-center">
                  <button
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`font-bold transition-all duration-300 relative flex items-center gap-1 text-base font-jakarta ${
                      active ? 'text-white' : 'text-white/45 hover:text-white'
                    }`}
                  >
                    <span className="tracking-wide">{link.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        dropdownOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {/* Glow underline */}
                  {active && (
                    <span className="nav-glow-line absolute -bottom-0.5 left-0 w-full h-px overflow-hidden">
                      <span className="nav-shimmer-bar absolute inset-y-0 w-1/2 bg-[var(--color-highlight-lime)]"></span>
                    </span>
                  )}
                  {/* Dropdown */}
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-3 w-56 bg-[#020817]/95 backdrop-blur-xl border border-[var(--color-highlight-lime)]/15 rounded-xl shadow-2xl py-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          onClick={() => setDropdownOpen(false)}
                          className={`block px-5 py-3 text-sm transition-all duration-200 font-jakarta ${
                            currentPath === child.href
                              ? 'text-neon-yellow bg-white/5 font-semibold'
                              : 'text-white/70 hover:text-neon-yellow hover:bg-white/5'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-bold transition-all duration-300 relative group text-base font-jakarta ${
                    active
                      ? 'text-white'
                      : 'text-white/45 hover:text-white/80'
                  }`}
                >
                  <span className="tracking-wide">{link.label}</span>
                  {active ? (
                    <span className="nav-glow-line absolute -bottom-0.5 left-0 w-full h-px overflow-hidden">
                      <span className="nav-shimmer-bar absolute inset-y-0 w-1/2 bg-white/60"></span>
                    </span>
                  ) : (
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/40 group-hover:w-full transition-all duration-300"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/#category"
              className="hidden md:block rounded-full font-black tracking-tight transition-all duration-300 px-6 py-2.5 text-base bg-white text-black hover:bg-[var(--color-highlight-orange)] hover:text-white font-jakarta"
            >
              Daftar Sekarang
            </Link>
            <button
              className="md:hidden p-2 text-white hover:text-neon-orange transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-[calc(100%+0.5rem)] right-4 w-64 bg-[#020817]/95 backdrop-blur-2xl border border-[var(--color-primary-light)]/15 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-5 transition-all duration-300 transform origin-top-right z-[59] ${
            menuOpen
              ? 'opacity-100 scale-100 pointer-events-auto'
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link);
              return (
                <div key={link.label}>
                  {link.hasDropdown ? (
                    <div className="mb-1">
                      <span className={`block py-2 text-base font-bold font-jakarta ${
                        active ? 'text-white' : 'text-white/80'
                      }`}>
                        {link.label}
                      </span>
                      <div className="pl-3 space-y-0.5 border-l border-white/10 ml-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            onClick={handleCloseMenu}
                            className={`block py-1.5 text-sm transition-colors font-jakarta ${
                              currentPath === child.href
                                ? 'text-neon-yellow font-semibold'
                                : 'text-white/60 hover:text-neon-yellow'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={handleCloseMenu}
                      className={`block py-2.5 text-base font-bold transition-colors font-jakarta ${
                        active
                          ? 'text-neon-yellow'
                          : 'text-white/80 hover:text-neon-yellow'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              );
            })}
            
            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2">
              <Link
                to="/#category"
                onClick={handleCloseMenu}
                className="w-full text-center py-2.5 rounded-xl bg-white text-black font-bold text-sm font-jakarta transition-transform hover:scale-[1.02] active:scale-95"
              >
                Daftar Sekarang
              </Link>
              <button
                onClick={handleCloseMenu}
                className="w-full text-center py-2.5 rounded-xl border border-white/10 text-white/70 hover:text-white hover:bg-white/5 font-medium text-sm font-jakarta transition-colors"
              >
                Kembali
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;