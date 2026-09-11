import React from 'react';

export default function CtaSection({ onOpenDemo, onOpenContact }) {
  return (
    <section className="bg-[var(--bg2)] py-[140px] 2xl:py-[180px] 3xl:py-[220px] border-t border-[#00c8ff]/[0.06] relative overflow-hidden text-center">
      {/* Background Atmospheric Auroras */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Purple/Indigo Aurora Glow (Top-Left) */}
        <div 
          className="absolute -top-32 -left-32 w-[550px] 2xl:w-[750px] h-[550px] 2xl:h-[750px] rounded-full blur-[140px] 2xl:blur-[180px] opacity-35"
          style={{
            background: 'radial-gradient(circle, rgba(118, 75, 162, 0.45) 0%, rgba(102, 126, 234, 0.25) 50%, transparent 80%)'
          }}
        />
        {/* Electric Cyan/Blue Aurora Glow (Bottom-Right) */}
        <div 
          className="absolute -bottom-32 -right-32 w-[600px] 2xl:w-[850px] h-[600px] 2xl:h-[850px] rounded-full blur-[150px] 2xl:blur-[200px] opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 80%)'
          }}
        />
        {/* Central Atmospheric Diffusion */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] 2xl:w-[1200px] h-[450px] 2xl:h-[650px] rounded-full blur-[160px] 2xl:blur-[220px] opacity-25"
          style={{
            background: 'radial-gradient(ellipse, rgba(102, 126, 234, 0.3) 0%, rgba(0, 212, 255, 0.15) 50%, transparent 80%)'
          }}
        />
      </div>

      {/* Background Cyber SVG Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <svg
          viewBox="0 0 1440 560"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full opacity-35"
        >
          <defs>
            <radialGradient id="ctaGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00c8ff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#00c8ff" stopOpacity="0" />
            </radialGradient>
          </defs>

          <ellipse cx="720" cy="280" rx="400" ry="300" fill="url(#ctaGlow)" />
          <circle cx="720" cy="280" r="200" stroke="#00c8ff" strokeOpacity="0.04" strokeWidth="1" fill="none" />
          <circle cx="720" cy="280" r="280" stroke="#00c8ff" strokeOpacity="0.04" strokeWidth="1" fill="none" />
          <circle cx="720" cy="280" r="360" stroke="#00c8ff" strokeOpacity="0.04" strokeWidth="1" fill="none" />

          {/* Orbiting Points */}
          <circle cx="1020" cy="280" r="3" fill="#00c8ff" fillOpacity="0.3" className="node-dot" />
          <circle cx="980" cy="430" r="3" fill="#00c8ff" fillOpacity="0.3" className="node-dot" />
          <circle cx="870" cy="540" r="3" fill="#00c8ff" fillOpacity="0.3" className="node-dot" />
          <circle cx="570" cy="540" r="3" fill="#00c8ff" fillOpacity="0.3" className="node-dot" />
          <circle cx="460" cy="430" r="3" fill="#00c8ff" fillOpacity="0.3" className="node-dot" />
        </svg>
      </div>

      <div className="max-w-[1280px] 2xl:max-w-[1400px] 3xl:max-w-[1680px] 4k:max-w-[2000px] mx-auto px-6 sm:px-8 2xl:px-12 3xl:px-16 relative z-10">
        <div className="eyebrow mb-6 2xl:mb-8">
          <span>—</span> Get Started
        </div>

        <h2 className="text-[clamp(34px,4.8vw,68px)] 2xl:text-[72px] 3xl:text-[88px] 4k:text-[104px] font-extrabold leading-[0.95] tracking-[-0.04em] text-[#e8f2ff] mb-8 2xl:mb-10 font-display">
          SECURE<br />
          <span className="text-[#00c8ff]">WHAT'S</span><br />
          NEXT.
        </h2>

        <p className="font-body text-[17px] 2xl:text-[19px] 3xl:text-[23px] 4k:text-[26px] leading-[1.7] text-[#6a8caa] max-w-[480px] 2xl:max-w-[600px] 3xl:max-w-[740px] mx-auto mb-10 2xl:mb-14">
          Deploy XSAV Endpoint Security in minutes. Protect your entire attack surface autonomously with enterprise-grade precision.
        </p>

        <div className="flex flex-wrap gap-4 2xl:gap-6 justify-center items-center">
          <button
            onClick={onOpenDemo}
            className="cyber-btn-primary group"
          >
            <span>Get a Demo</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={onOpenContact}
            className="cyber-btn-ghost"
          >
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
}
