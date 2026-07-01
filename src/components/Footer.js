import React from 'react';
import { Mail } from 'lucide-react';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="relative text-white border-t border-[var(--color-primary-light)]/10">
      {/* Background */}
      <div className="absolute inset-0 bg-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0 mb-12">
          {/* Left Section */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/images/logo-sf.png"
                alt="Logo SwitchFest"
                className="h-8 w-auto object-contain"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-highlight-orange)] font-jakarta tracking-tight">
              SWITCHFEST 2026
            </h2>
            <p className="mt-2 text-white/40 text-sm leading-relaxed max-w-xs">
              Code the Stars, Beyond the Horizons.
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-white/30 font-bold mb-1">Hubungi Kami</span>
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&to=switchfest.tiuinws@gmail.com&tf=cm"
              className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-4 h-4 text-[var(--color-primary-light)]" />
              <span>switchfest.tiuinws@gmail.com</span>
            </a>
            <a
              href="https://instagram.com/switchfest_"
              className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram className="w-4 h-4 text-[var(--color-highlight-orange)]" />
              <span>@switchfest_</span>
            </a>
            <a
              href="https://wa.me/6285117369252"
              className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp className="w-4 h-4 text-[var(--color-highlight-lime)]" />
              <span>+62 851-1736-9252 (Bagus)</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 mb-6" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-white/50">
            © 2026 SWITCHFEST — Made with <span className="text-[var(--color-highlight-orange)]">♥</span> for innovation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;