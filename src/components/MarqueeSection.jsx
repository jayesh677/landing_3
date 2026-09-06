import React from 'react';

export default function MarqueeSection() {
  const partners = [
    'MERIDIAN CORP',
    'NEXUS GLOBAL',
    'ATLAS SYSTEMS',
    'VELOX FINANCE',
    'KRONOS HEALTH',
    'STRATUM ENERGY',
    'PINNACLE TECH',
  ];

  return (
    <section className="py-[60px] bg-[var(--bg)] border-t border-[#00c8ff]/[0.06] overflow-hidden">
      <div className="max-w-[1280px] mx-auto mb-9 px-8">
        <p className="section-label text-center text-[#4a6580]">
          Trusted by security-focused organizations worldwide
        </p>
      </div>

      <div className="relative overflow-hidden w-full select-none py-2">
        {/* Left & Right gradient masks for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-16">
          {/* Double list for seamless 100% loop */}
          {[...partners, ...partners].map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 font-mono text-[12px] font-semibold tracking-[0.15em] text-[#2a4060] hover:text-[#00c8ff] whitespace-nowrap transition-colors cursor-default"
            >
              <span className="w-1 h-1 rounded-full bg-[#1a3048]" />
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
