import React, { useState, useEffect, useRef } from 'react';
import dashboardImg from '../assets/executive-dashboard.png';

export default function LiveConsoleSection({ onOpenDemo }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeHighlight, setActiveHighlight] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  // Scroll reveal with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Subtle 3D tilt tracking on mouse move
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  const capabilities = [
    {
      id: 'kpis',
      num: '01',
      title: 'Unified Executive Visibility',
      desc: 'Single pane of glass tracking protected endpoints, active incidents, and threat severity across your entire enterprise perimeter in real time.',
      stat: '25 Protected Endpoints // 2 Critical Alerts',
    },
    {
      id: 'trends',
      num: '02',
      title: 'Autonomous Threat Trend Analysis',
      desc: 'Continuous behavioral telemetry modeling weekly trajectory vectors and anomalous patterns before adversary footholds can solidify.',
      stat: 'Continuous 7-Day Vector Mapping',
    },
    {
      id: 'severity',
      num: '03',
      title: 'Surgical Severity Distribution',
      desc: 'Automated multi-tier categorization separating critical zero-days from low-priority noise to prioritize immediate automated isolation.',
      stat: 'Multi-Tier Automated Triage',
    },
  ];

  return (
    <section
      id="intelligence-layer"
      ref={sectionRef}
      className="bg-[var(--bg)] py-[120px] lg:py-[140px] border-t border-[#00c8ff]/[0.06] relative overflow-hidden"
    >
      {/* Ambient background tactical grid & lighting */}
      <div className="absolute inset-0 tactical-grid pointer-events-none opacity-40" />
      <div
        className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[600px] h-[600px] pointer-events-none rounded-full blur-[140px]"
        style={{
          background: 'radial-gradient(circle, rgba(0, 200, 255, 0.07) 0%, rgba(0, 229, 160, 0.03) 50%, transparent 70%)',
        }}
      />

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: Uploaded Cybersecurity Executive Dashboard      */}
          {/* Desktop: Order 1 (Left 58% / 7 cols) | Mobile: Order 2       */}
          {/* ============================================================ */}
          <div
            className={`lg:col-span-7 flex justify-center lg:justify-start items-center order-2 lg:order-1 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'
            }`}
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[760px] group transition-transform duration-300 ease-out"
              style={{
                perspective: '1200px',
                transform: isHovered
                  ? `perspective(1200px) rotateY(${mousePos.x * 4}deg) rotateX(${-mousePos.y * 4}deg) scale3d(1.01, 1.01, 1.01)`
                  : 'perspective(1200px) rotateY(1.5deg) rotateX(1deg)',
              }}
            >
              {/* Soft Ambient Cyan/Emerald Glow Aura */}
              <div
                className="absolute -inset-1 rounded-[16px] opacity-40 group-hover:opacity-75 transition-opacity duration-700 blur-[20px] pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(0, 200, 255, 0.25) 0%, rgba(0, 229, 160, 0.15) 50%, rgba(4, 11, 20, 0) 100%)',
                }}
              />

              {/* Main Premium Showcase Bezel Frame */}
              <div className="relative bg-[#030812] border border-[#00c8ff]/25 rounded-[14px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(0,200,255,0.08)] transition-all duration-500 group-hover:border-[#00c8ff]/45">
                
                {/* Dashboard Window Header Bar */}
                <div className="bg-[#040b14] border-b border-[#00c8ff]/15 px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between select-none gap-2">
                  {/* Window Control Dots */}
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#ff3b5c]/70 hover:opacity-100 transition-opacity" />
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#ffd700]/70 hover:opacity-100 transition-opacity" />
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#00e5a0]/70 hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Window Title */}
                  <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[9px] sm:text-[11px] text-[#6a8caa] tracking-[0.1em] sm:tracking-[0.15em] font-medium truncate">
                    <span className="text-[#00c8ff] font-bold">XSAV</span>
                    <span className="text-[#2a4060]">/</span>
                    <span className="text-[#d8eaf8] truncate">ENDPOINT SECURITY DASHBOARD</span>
                  </div>

                  {/* Live Telemetry Status Pill */}
                  <div className="flex items-center gap-1.5 bg-[#00e5a0]/10 border border-[#00e5a0]/30 px-2 py-0.5 rounded-[4px] shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00e5a0] animate-pulse-dot" />
                    <span className="font-mono text-[8px] sm:text-[9px] text-[#00e5a0] tracking-widest font-bold">
                      LIVE
                    </span>
                  </div>
                </div>

                {/* Primary Visual: Uploaded Executive Dashboard Screenshot */}
                <div className="relative overflow-hidden bg-[#030812]">
                  <img
                    src={dashboardImg}
                    alt="XSAV Endpoint Security Dashboard"
                    className="w-full h-auto block object-cover select-none transition-transform duration-700 group-hover:scale-[1.008]"
                    loading="lazy"
                  />

                  {/* Subtle Interactive Highlight Overlays */}
                  {/* 1. KPI Top Bar Highlight */}
                  <div
                    className={`absolute top-[18%] left-[2%] right-[2%] h-[18%] rounded-[8px] border transition-all duration-500 pointer-events-none ${
                      activeHighlight === 'kpis'
                        ? 'border-[#00c8ff] bg-[#00c8ff]/10 shadow-[0_0_25px_rgba(0,200,255,0.25)] opacity-100'
                        : 'border-transparent opacity-0'
                    }`}
                  />

                  {/* 2. Threat Trend Analysis Chart Highlight */}
                  <div
                    className={`absolute top-[38%] left-[2%] w-[48%] h-[58%] rounded-[8px] border transition-all duration-500 pointer-events-none ${
                      activeHighlight === 'trends'
                        ? 'border-[#00c8ff] bg-[#00c8ff]/10 shadow-[0_0_25px_rgba(0,200,255,0.25)] opacity-100'
                        : 'border-transparent opacity-0'
                    }`}
                  />

                  {/* 3. Threat Severity Distribution Chart Highlight */}
                  <div
                    className={`absolute top-[38%] right-[2%] w-[48%] h-[58%] rounded-[8px] border transition-all duration-500 pointer-events-none ${
                      activeHighlight === 'severity'
                        ? 'border-[#00e5a0] bg-[#00e5a0]/10 shadow-[0_0_25px_rgba(0,229,160,0.25)] opacity-100'
                        : 'border-transparent opacity-0'
                    }`}
                  />

                  {/* Glass Sheen Gradient Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 50%, rgba(0, 200, 255, 0.02) 100%)',
                    }}
                  />

                  {/* Subtle Scanning Telemetry Line */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#00c8ff]/50 to-transparent scan-line pointer-events-none opacity-60" />
                </div>

                {/* Subtle Bottom Technical Data Footer Bar */}
                <div className="bg-[#02060c] border-t border-[#00c8ff]/10 px-3.5 sm:px-4 py-2 flex items-center justify-between font-mono text-[8px] sm:text-[9px] text-[#4a6580] tracking-wider select-none">
                  <span className="flex items-center gap-1.5 truncate">
                    <span className="text-[#00c8ff]">FEED:</span> TELEMETRY_ACTIVE
                  </span>
                  <span className="text-[#2a4060] hidden xs:inline">|</span>
                  <span className="truncate hidden xs:inline">PIPELINE: 100% OPERATIONAL</span>
                  <span className="text-[#2a4060] hidden md:inline">|</span>
                  <span className="text-[#00e5a0] hidden md:inline">24/7 AUTONOMOUS PROTECTION</span>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: Section Title, Value Copy, Capabilities & CTA  */}
          {/* Desktop: Order 2 (Right 42% / 5 cols) | Mobile: Order 1      */}
          {/* ============================================================ */}
          <div
            className={`lg:col-span-5 flex flex-col justify-center order-1 lg:order-2 transition-all duration-1000 delay-150 ease-out text-left ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Eyebrow */}
            <div className="eyebrow mb-4 flex items-center gap-2 text-left">
              <span className="text-[#00c8ff]">—</span> Platform Intelligence
            </div>

            {/* Dominant Headline (Left-aligned typography) */}
            <h2 className="text-[clamp(28px,3.2vw,48px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#e8f2ff] font-mono mb-6 text-left">
              INTELLIGENCE<br />
              <span className="text-[#4a6580] font-light">AT EVERY</span><br />
              LAYER.
            </h2>

            {/* Supporting Copy */}
            <p className="font-body text-[15px] leading-[1.75] text-[#8daac5] mb-8 max-w-[480px] text-left">
              Bring endpoint, identity, cloud, threat detection, and security operations intelligence together in one unified security experience.
            </p>

            {/* Key Capability Pillars */}
            <div className="space-y-5 mb-10 text-left">
              {capabilities.map((cap) => {
                const isItemActive = activeHighlight === cap.id;

                return (
                  <div
                    key={cap.id}
                    onMouseEnter={() => setActiveHighlight(cap.id)}
                    onMouseLeave={() => setActiveHighlight(null)}
                    className={`p-4 rounded-[10px] border transition-all duration-300 cursor-pointer text-left ${
                      isItemActive
                        ? 'bg-[#061220] border-[#00c8ff]/40 shadow-[0_0_20px_rgba(0,200,255,0.08)]'
                        : 'bg-[#040b14]/60 border-[#00c8ff]/10 hover:border-[#00c8ff]/25'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5 text-left">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-[11px] font-bold text-[#00c8ff]">
                          {cap.num}
                        </span>
                        <h4 className="font-mono text-[13px] font-bold text-[#e8f2ff] tracking-tight">
                          {cap.title}
                        </h4>
                      </div>
                      <span className="font-mono text-[9px] text-[#4a6580] uppercase tracking-wider hidden sm:inline">
                        {cap.stat}
                      </span>
                    </div>
                    <p className="font-body text-[13px] leading-[1.6] text-[#6a8caa] text-left">
                      {cap.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Button & Live Badge */}
            <div className="flex items-center gap-4 text-left">
              <button
                onClick={onOpenDemo}
                className="cyber-btn-primary group"
              >
                <span>Request Platform Demo</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M3 7h8M8 4l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="flex items-center gap-2 font-mono text-[11px] text-[#00e5a0] tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#00e5a0] animate-pulse-dot" />
                <span>EXECUTIVE READY</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
