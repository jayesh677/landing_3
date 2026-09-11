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
    <section className="py-[60px] 2xl:py-[75px] 3xl:py-[90px] bg-[var(--bg)] border-t border-[#00c8ff]/[0.06] overflow-hidden">
      <div className="max-w-[1280px] 2xl:max-w-[1400px] 3xl:max-w-[1680px] 4k:max-w-[2000px] mx-auto mb-9 2xl:mb-12 px-6 sm:px-8 2xl:px-12 3xl:px-16">
        <p className="section-label text-center !text-white">
          Trusted by security-focused organizations worldwide
        </p>
      </div>

      <div className="relative overflow-hidden w-full select-none py-2">
        {/* Left & Right gradient masks for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 2xl:w-36 3xl:w-48 4k:w-64 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 2xl:w-36 3xl:w-48 4k:w-64 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-16 2xl:gap-20 3xl:gap-24 4k:gap-28">
          {/* Double list for seamless 100% loop */}
          {[...partners, ...partners].map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 2xl:gap-3.5 3xl:gap-4 font-mono text-[12px] 2xl:text-[14px] 3xl:text-[16px] 4k:text-[19px] font-semibold tracking-[0.15em] text-white/70 hover:text-[#00c8ff] whitespace-nowrap transition-colors duration-200 cursor-default group"
            >
              <span className="w-1 h-1 2xl:w-1.5 2xl:h-1.5 rounded-full bg-white/30 group-hover:bg-[#00c8ff] transition-colors" />
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
