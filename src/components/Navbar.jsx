import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenDemo, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Platform', href: '#platform' },
    { name: 'Solutions', href: '#threat-response' },
    { name: 'Resources', href: '#intelligence' },
    { name: 'Company', href: '#advantage' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(3, 8, 15, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 200, 255, 0.12)' : '1px solid transparent',
        padding: scrolled ? '14px 0' : '20px 0',
      }}
    >
      <div className="max-w-[1280px] 2xl:max-w-[1400px] 3xl:max-w-[1680px] 4k:max-w-[2000px] mx-auto px-6 sm:px-8 2xl:px-12 3xl:px-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 2xl:gap-3 3xl:gap-3.5 cursor-pointer group">
          <img
            src="/logo.png"
            alt="XSAV Endpoint Security Logo"
            className="w-7 h-7 2xl:w-8 2xl:h-8 3xl:w-9 3xl:h-9 4k:w-10 4k:h-10 object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-mono text-[15px] 2xl:text-[17px] 3xl:text-[20px] 4k:text-[22px] font-extrabold tracking-[0.06em] text-[#d8eaf8] leading-[1.1]">
              XSAV
            </span>
            <span className="font-mono text-[7.5px] 2xl:text-[8.5px] 3xl:text-[10px] 4k:text-[11px] font-semibold tracking-[0.16em] text-[#00c8ff] leading-none">
              ENDPOINT SECURITY
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 2xl:gap-10 3xl:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group py-1 text-[12px] 2xl:text-[13px] 3xl:text-[15px] 4k:text-[17px] font-mono font-medium tracking-[0.08em] text-[#94afc8] hover:text-[#d8eaf8] transition-colors"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00c8ff] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3 2xl:gap-4 3xl:gap-5">
          <button
            onClick={onOpenContact}
            className="font-mono text-[11px] 2xl:text-[12px] 3xl:text-[14px] 4k:text-[16px] font-medium tracking-[0.1em] text-[#94afc8] hover:text-[#d8eaf8] uppercase px-3 py-2 2xl:px-4 2xl:py-2.5 3xl:px-5 3xl:py-3 transition-colors cursor-pointer rounded-[6px]"
          >
            Login
          </button>
          <button
            onClick={onOpenContact}
            className="font-mono text-[11px] 2xl:text-[12px] 3xl:text-[14px] 4k:text-[16px] font-medium tracking-[0.1em] text-[#00c8ff] hover:text-[#33d4ff] hover:border-[#00c8ff] uppercase px-4 py-2 2xl:px-5 2xl:py-2.5 3xl:px-6 3xl:py-3 border border-[#00c8ff]/30 transition-all cursor-pointer hover:bg-[#00c8ff]/5 rounded-[8px]"
          >
            Contact Sales
          </button>
          <button
            onClick={onOpenDemo}
            className="cyber-btn-primary text-[11px] 2xl:text-[12px] 3xl:text-[14px] 4k:text-[16px] !py-[9px] !px-5 2xl:!py-[11px] 2xl:!px-6 3xl:!py-[13px] 3xl:!px-7"
          >
            Get a Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#00c8ff] cursor-pointer rounded-[6px]"
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {mobileMenuOpen ? (
              <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M3 6h16 M3 11h16 M3 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#03080f]/95 backdrop-blur-xl border-b border-[#00c8ff]/20 px-8 py-6 flex flex-col gap-4 animate-fade-up rounded-b-[14px]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono text-sm tracking-wider text-[#94afc8] hover:text-[#00c8ff] py-2 border-b border-[#00c8ff]/10"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-4">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="w-full font-mono text-xs uppercase py-3 border border-[#00c8ff]/30 text-[#00c8ff] rounded-[8px]"
            >
              Contact Sales
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
              className="cyber-btn-primary w-full justify-center text-xs py-3"
            >
              Get a Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
