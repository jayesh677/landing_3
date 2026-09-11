import React, { useState } from 'react';
import HeroRadar from './HeroRadar';

export default function HeroSection({ onOpenDemo, onExplorePlatform }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientWidth, clientHeight } = e.currentTarget;
    const x = (e.clientX / clientWidth - 0.5) * 2;
    const y = (e.clientY / clientHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  const purpleTransform = `translate3d(${mousePos.x * -14}px, ${mousePos.y * -12}px, 0)`;
  const cyanTransform = `translate3d(${mousePos.x * 12}px, ${mousePos.y * 10}px, 0)`;
  const gridTransform = `translate3d(${mousePos.x * -5}px, ${mousePos.y * -5}px, 0)`;

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-[#050510] flex items-center relative overflow-hidden pt-20"
    >
      {/* ========================================================================= */}
      {/* ATMOSPHERIC MULTI-LAYER GRADIENT BACKGROUND (XSAV Normalized Aesthetic)  */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-[#050510]">
        
        {/* Dynamic Multi-Layer Gradient Canvas (#667eea, #764ba2, #00d4ff) */}
        <div className="absolute -inset-[10%] w-[120%] h-[120%]">
          
          {/* Layer 1: Primary Purple/Indigo Aurora Atmosphere (Upper-Left / Left-Center) */}
          <div
            className="absolute inset-0 animate-atmospheric-1 transition-transform duration-700 ease-out"
            style={{
              transform: purpleTransform,
              background: `
                radial-gradient(ellipse 80% 70% at 24% 20%, rgba(102, 126, 234, 0.28) 0%, rgba(118, 75, 162, 0.18) 35%, rgba(123, 97, 255, 0.08) 60%, transparent 75%)
              `,
            }}
          />

          {/* Layer 2: Secondary Electric Cyan & Blue Aurora Atmosphere (Right / Lower-Right) */}
          <div
            className="absolute inset-0 animate-atmospheric-2 transition-transform duration-700 ease-out"
            style={{
              transform: cyanTransform,
              background: `
                radial-gradient(ellipse 75% 70% at 85% 78%, rgba(0, 212, 255, 0.22) 0%, rgba(59, 130, 246, 0.15) 35%, rgba(37, 99, 235, 0.06) 60%, transparent 78%)
              `,
            }}
          />

          {/* Layer 3: Central Connecting Subtle Diagonal Accent */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(125deg, rgba(118, 75, 162, 0.12) 0%, rgba(5, 5, 16, 0) 50%, rgba(0, 212, 255, 0.10) 100%)
              `,
            }}
          />
        </div>

        {/* Layer 4: Soft Non-Destructive Dark Outer Edge Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 95% 85% at 50% 50%, transparent 65%, rgba(5, 5, 16, 0.25) 85%, rgba(5, 5, 16, 0.45) 100%)
            `,
          }}
        />

        {/* Layer 5: Technical Infrastructure Grid */}
        <div
          className="absolute inset-0 opacity-[0.05] animate-grid-float transition-transform duration-500 ease-out"
          style={{
            transform: gridTransform,
            backgroundImage: `
              linear-gradient(to right, rgba(0, 212, 255, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '54px 54px',
          }}
        />

        {/* Layer 6: Bottom Seamless Transition into Next Section */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-[2]"
          style={{
            background: 'linear-gradient(to bottom, transparent, var(--bg))'
          }}
        />
      </div>

      <div className="max-w-[1280px] 2xl:max-w-[1400px] 3xl:max-w-[1680px] 4k:max-w-[2000px] mx-auto px-6 sm:px-8 2xl:px-12 3xl:px-16 py-[120px] md:py-[90px] 2xl:py-[110px] 3xl:py-[130px] 4k:py-[160px] grid grid-cols-1 md:grid-cols-2 gap-12 2xl:gap-16 3xl:gap-24 items-center w-full z-[1] relative">
        {/* Left Column: Headlines & CTAs */}
        <div className="opacity-100 transition-all duration-700">
          <div className="eyebrow mb-6 2xl:mb-7 flex items-center gap-2">
            <span className="text-[#00c8ff]">—</span> AUTONOMOUS CYBERSECURITY
          </div>

          <h1 className="text-[clamp(36px,4.8vw,66px)] 2xl:text-[66px] 3xl:text-[78px] 4k:text-[92px] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#e8f2ff] mb-7 2xl:mb-8 font-display">
            STOP THREATS<br />
            <span className="text-[#00c8ff]">BEFORE</span> THEY<br />
            BECOME BREACHES.
          </h1>

          <p className="font-body text-[17px] 2xl:text-[19px] 3xl:text-[22px] 4k:text-[25px] leading-[1.7] text-[#6a8caa] max-w-[460px] 2xl:max-w-[560px] 3xl:max-w-[660px] 4k:max-w-[780px] mb-10 2xl:mb-12">
            Protect endpoints, identities, cloud environments, and critical infrastructure with intelligent security built for modern threats.
          </p>

          <div className="flex flex-wrap gap-4 2xl:gap-5 items-center mb-12 2xl:mb-14">
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
          <div className="flex gap-8 2xl:gap-12 3xl:gap-16 pt-8 2xl:pt-10 border-t border-[#00c8ff]/10">
            <div>
              <div className="font-mono text-[22px] 2xl:text-[28px] 3xl:text-[34px] 4k:text-[42px] font-bold text-[#00c8ff] tracking-[-0.02em]">
                99.9%
              </div>
              <div className="font-body text-[12px] 2xl:text-[14px] 3xl:text-[16px] 4k:text-[18px] text-[#4a6580] mt-1">
                Prevention Rate
              </div>
            </div>
            <div>
              <div className="font-mono text-[22px] 2xl:text-[28px] 3xl:text-[34px] 4k:text-[42px] font-bold text-[#00c8ff] tracking-[-0.02em]">
                &lt;1min
              </div>
              <div className="font-body text-[12px] 2xl:text-[14px] 3xl:text-[16px] 4k:text-[18px] text-[#4a6580] mt-1">
                Response Time
              </div>
            </div>
            <div>
              <div className="font-mono text-[22px] 2xl:text-[28px] 3xl:text-[34px] 4k:text-[42px] font-bold text-[#00c8ff] tracking-[-0.02em]">
                24/7
              </div>
              <div className="font-body text-[12px] 2xl:text-[14px] 3xl:text-[16px] 4k:text-[18px] text-[#4a6580] mt-1">
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
