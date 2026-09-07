import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenDemo, onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Platform', href: '#platform' },
    { label: 'Solutions', href: '#threat-response' },
    { label: 'Services', href: '#advantage' },
    { label: 'Partners', href: '#metrics' },
    { label: 'Pricing', href: '#intelligence' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050510]/85 backdrop-blur-md border-b border-white/[0.06] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo (XSAV Endpoint Security) */}
          <a href="#" className="flex items-center space-x-3 group cursor-pointer focus:outline-none">
            <div className="relative flex h-8 w-8 items-center justify-center transition-transform group-hover:scale-105">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 drop-shadow-[0_0_12px_rgba(0,212,255,0.4)]"
              >
                <defs>
                  <linearGradient id="xsav-nav-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#00d4ff" />
                  </linearGradient>
                </defs>
                <polygon points="0,0 50,0 50,50" fill="url(#xsav-nav-grad)" />
                <polygon points="50,0 100,0 100,50" fill="url(#xsav-nav-grad)" />
                <polygon points="0,50 50,50 50,100" fill="url(#xsav-nav-grad)" />
                <polygon points="50,50 100,50 100,100" fill="url(#xsav-nav-grad)" />
              </svg>
            </div>
            
            <div className="flex items-center space-x-1.5">
              <span className="text-[16.5px] sm:text-[17.5px] font-bold tracking-tight text-white font-body">
                XSAV Endpoint Security
              </span>
            </div>
          </a>

          {/* Desktop Center Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13.5px] font-medium text-[#94A3B8] hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="hidden md:flex items-center space-x-5">
            <button
              onClick={onOpenContact}
              className="text-[13.5px] font-medium text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
            >
              Sign In
            </button>

            <button
              onClick={onOpenDemo}
              className="relative inline-flex items-center justify-center rounded-lg bg-[#667eea] hover:bg-[#5a6fd6] px-5 py-2 text-[13.5px] font-semibold text-white shadow-[0_0_18px_rgba(102,126,234,0.3)] hover:shadow-[0_0_24px_rgba(102,126,234,0.5)] transition-all duration-200 cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={onOpenDemo}
              className="rounded-lg bg-[#667eea] hover:bg-[#5a6fd6] px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm cursor-pointer"
            >
              Get Started
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#94A3B8] hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#050510]/98 backdrop-blur-2xl overflow-hidden animate-fade-up">
          <div className="px-5 py-6 space-y-4">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-[#CBD5E1] hover:text-white py-1.5"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-4 border-t border-white/[0.08] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full text-center text-sm font-medium text-[#CBD5E1] py-2 cursor-pointer hover:text-white"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full rounded-lg bg-[#667eea] hover:bg-[#5a6fd6] py-2.5 text-sm font-semibold text-white shadow-sm cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

