import React from 'react';

export default function CtaSection({ onOpenDemo, onOpenContact }) {
  return (
    <section className="bg-[var(--bg2)] py-[140px] border-t border-[#00c8ff]/[0.06] relative overflow-hidden text-center">
      {/* Background Cyber SVG Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <svg
          viewBox="0 0 1440 560"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full opacity-40"
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

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        <div className="eyebrow mb-6">
          <span>—</span> Get Started
        </div>

        <h2 className="text-[clamp(34px,4.8vw,68px)] font-extrabold leading-[0.95] tracking-[-0.04em] text-[#e8f2ff] mb-8 font-mono">
          SECURE<br />
          <span className="text-[#00c8ff]">WHAT'S</span><br />
          NEXT.
        </h2>

        <p className="font-body text-[17px] leading-[1.7] text-[#6a8caa] max-w-[480px] mx-auto mb-10">
          Deploy XSAV Endpoint Security in minutes. Protect your entire attack surface autonomously with enterprise-grade precision.
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center">
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
