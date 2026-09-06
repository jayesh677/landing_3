import React from 'react';
import HeroRadar from './HeroRadar';

export default function HeroSection({ onOpenDemo, onExplorePlatform }) {
  return (
    <section className="min-h-screen bg-[var(--bg)] flex items-center relative overflow-hidden pt-20">
      {/* Background Tactical Grid */}
      <div className="absolute inset-0 pointer-events-none tactical-grid" />

      {/* Bottom Gradient Fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none z-[2]"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--bg))'
        }}
      />

      <div className="max-w-[1280px] mx-auto px-8 py-[120px] md:py-[80px] grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full z-[1] relative">
        {/* Left Column: Headlines & CTAs */}
        <div className="opacity-100 transition-all duration-700">
          <div className="eyebrow mb-6 flex items-center gap-2">
            <span className="text-[#00c8ff]">—</span> AUTONOMOUS CYBERSECURITY
          </div>

          <h1 className="text-[clamp(36px,4.8vw,66px)] font-extrabold leading-[1] tracking-[-0.03em] text-[#e8f2ff] mb-7 font-mono">
            STOP THREATS<br />
            <span className="text-[#00c8ff]">BEFORE</span> THEY<br />
            BECOME BREACHES.
          </h1>

          <p className="font-body text-[17px] leading-[1.7] text-[#6a8caa] max-w-[460px] mb-10">
            Protect endpoints, identities, cloud environments, and critical infrastructure with intelligent security built for modern threats.
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-12">
            <button
              onClick={onOpenDemo}
              className="cyber-btn-primary group"
            >
              <span>Get a Demo</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <a
              href="#platform"
              onClick={onExplorePlatform}
              className="cyber-btn-ghost"
            >
              Explore the Platform
            </a>
          </div>

          {/* Stats Row */}
          <div className="flex gap-8 pt-8 border-t border-[#00c8ff]/10">
            <div>
              <div className="font-mono text-[22px] font-bold text-[#00c8ff] tracking-[-0.02em]">
                99.9%
              </div>
              <div className="font-body text-[12px] text-[#4a6580] mt-1">
                Prevention Rate
              </div>
            </div>
            <div>
              <div className="font-mono text-[22px] font-bold text-[#00c8ff] tracking-[-0.02em]">
                &lt;1min
              </div>
              <div className="font-body text-[12px] text-[#4a6580] mt-1">
                Response Time
              </div>
            </div>
            <div>
              <div className="font-mono text-[22px] font-bold text-[#00c8ff] tracking-[-0.02em]">
                24/7
              </div>
              <div className="font-body text-[12px] text-[#4a6580] mt-1">
                Coverage
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Interactive Radar Display */}
        <div className="relative w-full flex items-center justify-center">
          <HeroRadar />
        </div>
      </div>
    </section>
  );
}
