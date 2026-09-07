import React, { useState, useEffect, useRef } from 'react';

export default function PlatformSection({ onSelectModule }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const capabilities = [
    {
      num: '01',
      tag: 'ENDPOINT',
      headline: 'Protect every endpoint.',
      description: 'Detect and stop malicious activity before attackers can move deeper into the environment.',
      cta: 'EXPLORE ENDPOINT',
      visualType: 'endpoint',
    },
    {
      num: '02',
      tag: 'IDENTITY',
      headline: 'Secure every identity.',
      description: 'Detect identity-based threats and protect users, credentials, and privileged access.',
      cta: 'EXPLORE IDENTITY',
      visualType: 'identity',
    },
    {
      num: '03',
      tag: 'CLOUD',
      headline: "See what's happening in the cloud.",
      description: 'Protect workloads, applications, and cloud infrastructure with continuous visibility.',
      cta: 'EXPLORE CLOUD',
      visualType: 'cloud',
    },
    {
      num: '04',
      tag: 'SECURITY OPERATIONS',
      headline: 'Turn signals into action.',
      description: 'Unify detection, investigation, and automated response in one security operation.',
      cta: 'EXPLORE SECURITY OPERATIONS',
      visualType: 'secops',
    },
    {
      num: '05',
      tag: 'THREAT INTELLIGENCE',
      headline: 'Know what attackers know.',
      description: 'Turn global threat intelligence into actionable security decisions.',
      cta: 'EXPLORE THREAT INTELLIGENCE',
      visualType: 'intel',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const viewportHeight = window.innerHeight;
      const focalLine = viewportHeight * 0.45;

      let closestIdx = 0;
      let minDistance = Infinity;

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const dist = Math.abs(cardCenter - focalLine);

        if (dist < minDistance) {
          minDistance = dist;
          closestIdx = i;
        }
      });

      setActiveIdx(closestIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCard = (index) => {
    setActiveIdx(index);
    if (cardRefs.current[index]) {
      const rect = cardRefs.current[index].getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetY = scrollTop + rect.top - window.innerHeight * 0.2;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="platform"
      ref={sectionRef}
      className="bg-[var(--bg2)] py-28 md:py-36 border-t border-[#00c8ff]/[0.06] relative"
    >
      <div className="max-w-[1280px] mx-auto px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ========================================================= */}
          {/* LEFT SIDE: STICKY EDITORIAL ANCHOR (5 Cols)               */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-[18vh] flex flex-col justify-between self-start">
            <div>
              {/* Eyebrow */}
              <div className="eyebrow mb-5 flex items-center gap-2">
                <span className="text-[#00c8ff]">—</span> The Platform
              </div>

              {/* Large Headline */}
              <h2 className="text-[clamp(30px,3.5vw,52px)] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#e8f2ff] font-display mb-6">
                ONE PLATFORM.<br />
                <span className="text-[#00c8ff]">COMPLETE</span><br />
                VISIBILITY.
              </h2>

              {/* Supporting Copy */}
              <p className="font-body text-[16px] leading-[1.75] text-[#8daac5] max-w-[420px] mb-8">
                Protect every layer of your environment from a single intelligent security platform.
              </p>

              {/* Editorial Narrative Stepper */}
              <div className="space-y-3 mb-10 pl-3 border-l border-[#00c8ff]/20 font-mono text-[13px]">
                <div
                  className={`transition-all duration-500 flex items-center gap-2.5 ${
                    activeIdx <= 1 ? 'text-[#e8f2ff] font-semibold translate-x-1' : 'text-[#3a526b]'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${activeIdx <= 1 ? 'bg-[#00c8ff] shadow-[0_0_8px_#00c8ff]' : 'bg-[#1a3048]'}`} />
                  See every threat.
                </div>
                <div
                  className={`transition-all duration-500 flex items-center gap-2.5 ${
                    activeIdx === 2 || activeIdx === 3 ? 'text-[#e8f2ff] font-semibold translate-x-1' : 'text-[#3a526b]'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${activeIdx === 2 || activeIdx === 3 ? 'bg-[#00c8ff] shadow-[0_0_8px_#00c8ff]' : 'bg-[#1a3048]'}`} />
                  Understand every signal.
                </div>
                <div
                  className={`transition-all duration-500 flex items-center gap-2.5 ${
                    activeIdx === 4 ? 'text-[#e8f2ff] font-semibold translate-x-1' : 'text-[#3a526b]'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${activeIdx === 4 ? 'bg-[#00c8ff] shadow-[0_0_8px_#00c8ff]' : 'bg-[#1a3048]'}`} />
                  Respond from one unified platform.
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => onSelectModule && onSelectModule(capabilities[activeIdx])}
                className="cyber-btn-primary group"
              >
                <span>Explore Platform</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Quick Interactive Selector Dots on Desktop */}
            <div className="hidden lg:flex items-center gap-3 mt-16 pt-6 border-t border-[#00c8ff]/10">
              <span className="font-mono text-[10px] text-[#4a6580] tracking-widest uppercase">Layer:</span>
              <div className="flex gap-2">
                {capabilities.map((c, i) => (
                  <button
                    key={c.num}
                    onClick={() => scrollToCard(i)}
                    className={`font-mono text-[11px] px-2.5 py-1 border transition-all duration-300 cursor-pointer rounded-[6px] ${
                      activeIdx === i
                        ? 'bg-[#00c8ff]/10 border-[#00c8ff] text-[#00c8ff] shadow-[0_0_10px_rgba(0,200,255,0.2)]'
                        : 'border-[#00c8ff]/15 text-[#3a526b] hover:text-[#8daac5] hover:border-[#00c8ff]/40'
                    }`}
                  >
                    {c.num}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* VERTICAL PROGRESS CONNECTOR (1 Col)                        */}
          {/* ========================================================= */}
          <div className="hidden lg:flex lg:col-span-1 justify-center relative self-stretch">
            <div className="sticky top-[20vh] h-[340px] flex flex-col items-center justify-between">
              {/* Connecting vertical background line */}
              <div className="absolute top-2 bottom-2 w-[1px] bg-[#00c8ff]/10 z-0" />
              {/* Dynamic progress highlight bar */}
              <div
                className="absolute top-2 w-[1.5px] bg-[#00c8ff] shadow-[0_0_8px_#00c8ff] z-0 transition-all duration-500"
                style={{
                  height: `${(activeIdx / (capabilities.length - 1)) * 100}%`,
                }}
              />

              {capabilities.map((c, i) => {
                const isActive = activeIdx === i;
                const isPassed = activeIdx >= i;
                return (
                  <button
                    key={c.num}
                    onClick={() => scrollToCard(i)}
                    className={`relative z-10 w-3 h-3 rounded-full transition-all duration-500 cursor-pointer flex items-center justify-center ${
                      isActive
                        ? 'bg-[#00c8ff] scale-125 shadow-[0_0_12px_#00c8ff]'
                        : isPassed
                        ? 'bg-[#00c8ff]/60 border border-[#00c8ff]'
                        : 'bg-[#040b14] border border-[#00c8ff]/30'
                    }`}
                    aria-label={`Go to ${c.tag}`}
                  >
                    {isActive && <span className="w-1 h-1 bg-[#03080f] rounded-full" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT SIDE: VERTICAL SCROLL STORY PANELS (6 Cols)          */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col space-y-24 md:space-y-32">
            {capabilities.map((cap, idx) => {
              const isActive = activeIdx === idx;

              return (
                <div
                  key={cap.num}
                  ref={(el) => (cardRefs.current[idx] = el)}
                  onClick={() => setActiveIdx(idx)}
                  className={`bg-[#040b14] border rounded-[14px] p-8 md:p-10 transition-all duration-700 ease-out relative overflow-hidden group cursor-pointer ${
                    isActive
                      ? 'opacity-100 scale-100 border-[#00c8ff]/40 shadow-[0_0_60px_rgba(0,200,255,0.08)]'
                      : 'opacity-35 scale-[0.96] border-[#00c8ff]/[0.08] hover:opacity-60'
                  }`}
                >
                  {/* Subtle Top Radial Lighting */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-40 pointer-events-none transition-opacity duration-700 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      background: 'radial-gradient(ellipse at 50% 0%, rgba(0, 200, 255, 0.12) 0%, transparent 70%)',
                    }}
                  />

                  {/* Header: Number + Category Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-[13px] font-extrabold tracking-[0.2em] transition-colors duration-500 ${
                          isActive ? 'text-[#00c8ff]' : 'text-[#2a4060]'
                        }`}
                      >
                        {cap.num}
                      </span>
                      <span className="w-4 h-[1px] bg-[#00c8ff]/30" />
                      <span
                        className={`font-mono text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${
                          isActive ? 'text-[#00c8ff]' : 'text-[#4a6580]'
                        }`}
                      >
                        {cap.tag}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#00c8ff]/60 tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00c8ff] animate-pulse-dot" />
                      ACTIVE_LAYER
                    </div>
                  </div>

                  {/* Headline */}
                  <h3
                    className={`font-mono text-[clamp(22px,2.4vw,28px)] font-bold leading-[1.2] tracking-[-0.02em] mb-4 transition-colors duration-500 ${
                      isActive ? 'text-[#e8f2ff]' : 'text-[#4a6580]'
                    }`}
                  >
                    {cap.headline}
                  </h3>

                  {/* Description */}
                  <p
                    className={`font-body text-[15px] leading-[1.75] mb-8 transition-colors duration-500 ${
                      isActive ? 'text-[#8daac5]' : 'text-[#3a526b]'
                    }`}
                  >
                    {cap.description}
                  </p>

                  {/* Custom Capability Cybersecurity Visual Component */}
                  <div className="mb-8 rounded-[10px] bg-[#03080f] border border-[#00c8ff]/15 p-5 relative overflow-hidden">
                    <CapabilityVisual type={cap.visualType} isActive={isActive} />
                  </div>

                  {/* Footer CTA */}
                  <div className="flex items-center justify-between pt-5 border-t border-[#00c8ff]/10">
                    <div
                      className={`flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.12em] transition-colors duration-500 ${
                        isActive ? 'text-[#00c8ff]' : 'text-[#2a4060] group-hover:text-[#4a6580]'
                      }`}
                    >
                      <span>{cap.cta}</span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1.5">
                        <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <span className="font-mono text-[10px] text-[#2a4060] tracking-widest">
                      XSAV_SEC_v4.2
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

// =========================================================================
// CUSTOM VISUAL COMPONENTS FOR EACH OF THE 5 CAPABILITIES
// =========================================================================

function CapabilityVisual({ type, isActive }) {
  if (type === 'endpoint') {
    return (
      <div className="relative h-[180px] w-full flex items-center justify-center select-none">
        <svg viewBox="0 0 400 160" className="w-full h-full" fill="none">
          {/* Workstation Silhouette Wireframe */}
          <rect x="130" y="25" width="140" height="90" rx="3" stroke="#00c8ff" strokeWidth="1.2" strokeOpacity={isActive ? '0.8' : '0.2'} fill="#040b14" />
          <line x1="130" y1="95" x2="270" y2="95" stroke="#00c8ff" strokeWidth="0.8" strokeOpacity="0.3" />
          <path d="M190 115 L210 115 L215 135 L185 135 Z" fill="#00c8ff" fillOpacity="0.2" stroke="#00c8ff" strokeWidth="1" strokeOpacity={isActive ? '0.6' : '0.2'} />
          <line x1="170" y1="135" x2="230" y2="135" stroke="#00c8ff" strokeWidth="1.5" strokeOpacity={isActive ? '0.8' : '0.2'} />

          {/* Internal Host Shield */}
          <path d="M200 45 L220 54 L220 75 Q220 90 200 98 Q180 90 180 75 L180 54 Z" fill="rgba(0, 200, 255, 0.08)" stroke="#00c8ff" strokeWidth="1.5" strokeOpacity={isActive ? '1' : '0.3'} />
          <path d="M194 72 L198 76 L207 67" stroke="#00c8ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity={isActive ? '1' : '0.3'} />

          {/* Blocked Threat Signal from left */}
          <path d="M30 70 L140 70" stroke="#ff3b5c" strokeWidth="1.5" strokeDasharray="4 3" strokeOpacity={isActive ? '0.8' : '0.2'} />
          <circle cx="140" cy="70" r="8" fill="none" stroke="#ff3b5c" strokeWidth="1.5" strokeOpacity={isActive ? '0.9' : '0.2'} className={isActive ? 'ring-anim' : ''} />
          <circle cx="140" cy="70" r="3" fill="#ff3b5c" />
          <text x="35" y="60" fill="#ff3b5c" fontSize="8" fontFamily="JetBrains Mono, monospace" letterSpacing="1">
            EXPLOIT_BLOCKED
          </text>

          {/* Protected Outward Nodes */}
          <circle cx="330" cy="50" r="4" fill="#00e5a0" />
          <line x1="270" y1="60" x2="330" y2="50" stroke="#00e5a0" strokeOpacity="0.3" strokeWidth="1" />
          <circle cx="340" cy="95" r="4" fill="#00e5a0" />
          <line x1="270" y1="80" x2="340" y2="95" stroke="#00e5a0" strokeOpacity="0.3" strokeWidth="1" />

          <text x="200" y="152" fill="#00c8ff" textAnchor="middle" fontSize="8" fontFamily="JetBrains Mono, monospace" letterSpacing="1.5" fillOpacity="0.7">
            KERNEL_LEVEL_PROTECTION // NOMINAL
          </text>
        </svg>
      </div>
    );
  }

  if (type === 'identity') {
    return (
      <div className="relative h-[180px] w-full flex items-center justify-center select-none">
        <svg viewBox="0 0 400 160" className="w-full h-full" fill="none">
          {/* Identity Central Node */}
          <circle cx="200" cy="80" r="24" fill="rgba(0, 200, 255, 0.08)" stroke="#00c8ff" strokeWidth="1.5" strokeOpacity={isActive ? '1' : '0.3'} />
          <circle cx="200" cy="72" r="6" fill="#00c8ff" fillOpacity={isActive ? '0.9' : '0.3'} />
          <path d="M188 92 Q200 84 212 92" stroke="#00c8ff" strokeWidth="1.5" fill="none" strokeOpacity={isActive ? '0.9' : '0.3'} />

          {/* Connected IAM & Device Nodes */}
          <g>
            <circle cx="80" cy="45" r="14" fill="#040b14" stroke="#00c8ff" strokeWidth="1" strokeOpacity="0.5" />
            <text x="80" y="48" fill="#00c8ff" fontSize="7" textAnchor="middle" fontFamily="JetBrains Mono, monospace">IAM</text>
            <line x1="94" y1="52" x2="176" y2="72" stroke="#00c8ff" strokeOpacity={isActive ? '0.4' : '0.1'} strokeWidth="1" />
          </g>

          <g>
            <circle cx="80" cy="115" r="14" fill="#040b14" stroke="#00e5a0" strokeWidth="1" strokeOpacity="0.6" />
            <text x="80" y="118" fill="#00e5a0" fontSize="7" textAnchor="middle" fontFamily="JetBrains Mono, monospace">MFA</text>
            <line x1="94" y1="110" x2="176" y2="88" stroke="#00e5a0" strokeOpacity={isActive ? '0.4' : '0.1'} strokeWidth="1" />
          </g>

          <g>
            <circle cx="320" cy="45" r="14" fill="#040b14" stroke="#00c8ff" strokeWidth="1" strokeOpacity="0.5" />
            <text x="320" y="48" fill="#00c8ff" fontSize="7" textAnchor="middle" fontFamily="JetBrains Mono, monospace">TOKEN</text>
            <line x1="306" y1="52" x2="224" y2="72" stroke="#00c8ff" strokeOpacity={isActive ? '0.4' : '0.1'} strokeWidth="1" />
          </g>

          {/* Rogue Anomaly Attempt Blocked */}
          <g>
            <circle cx="320" cy="115" r="14" fill="#040b14" stroke="#ff3b5c" strokeWidth="1.2" strokeOpacity={isActive ? '0.9' : '0.3'} />
            <text x="320" y="118" fill="#ff3b5c" fontSize="7" textAnchor="middle" fontFamily="JetBrains Mono, monospace">PRIV_ESC</text>
            <line x1="306" y1="110" x2="224" y2="88" stroke="#ff3b5c" strokeOpacity={isActive ? '0.7' : '0.2'} strokeWidth="1.5" strokeDasharray="3 2" />
            <circle cx="260" cy="98" r="4" fill="#ff3b5c" />
          </g>

          <text x="200" y="152" fill="#00c8ff" textAnchor="middle" fontSize="8" fontFamily="JetBrains Mono, monospace" letterSpacing="1.5" fillOpacity="0.7">
            ZERO_TRUST_AUTHENTICATION // ENFORCED
          </text>
        </svg>
      </div>
    );
  }

  if (type === 'cloud') {
    return (
      <div className="relative h-[180px] w-full flex items-center justify-center select-none">
        <svg viewBox="0 0 400 160" className="w-full h-full" fill="none">
          {/* Cloud Hex Mesh Grid */}
          <polygon points="120,40 150,25 180,40 180,75 150,90 120,75" fill="rgba(0, 200, 255, 0.05)" stroke="#00c8ff" strokeWidth="1" strokeOpacity={isActive ? '0.8' : '0.2'} />
          <text x="150" y="60" fill="#00c8ff" fontSize="7" textAnchor="middle" fontFamily="JetBrains Mono, monospace">K8S_POD</text>

          <polygon points="180,40 210,25 240,40 240,75 210,90 180,75" fill="rgba(0, 200, 255, 0.08)" stroke="#00c8ff" strokeWidth="1.2" strokeOpacity={isActive ? '0.9' : '0.3'} />
          <text x="210" y="60" fill="#00c8ff" fontSize="7" textAnchor="middle" fontFamily="JetBrains Mono, monospace">CONTAINER</text>

          <polygon points="240,40 270,25 300,40 300,75 270,90 240,75" fill="rgba(0, 200, 255, 0.05)" stroke="#00c8ff" strokeWidth="1" strokeOpacity={isActive ? '0.8' : '0.2'} />
          <text x="270" y="60" fill="#00c8ff" fontSize="7" textAnchor="middle" fontFamily="JetBrains Mono, monospace">LAMBDA</text>

          <polygon points="150,90 180,75 210,90 210,125 180,140 150,125" fill="rgba(0, 229, 160, 0.06)" stroke="#00e5a0" strokeWidth="1" strokeOpacity={isActive ? '0.8' : '0.2'} />
          <text x="180" y="110" fill="#00e5a0" fontSize="7" textAnchor="middle" fontFamily="JetBrains Mono, monospace">API_GW</text>

          <polygon points="210,90 240,75 270,90 270,125 240,140 210,125" fill="rgba(0, 200, 255, 0.05)" stroke="#00c8ff" strokeWidth="1" strokeOpacity={isActive ? '0.8' : '0.2'} />
          <text x="240" y="110" fill="#00c8ff" fontSize="7" textAnchor="middle" fontFamily="JetBrains Mono, monospace">S3_VAULT</text>

          {/* Continuous Cloud Compliance Scan Arc */}
          <path d="M80 80 Q200 10 320 80" stroke="#00c8ff" strokeWidth="1" strokeDasharray="4 2" strokeOpacity={isActive ? '0.5' : '0.1'} />
          <circle cx="200" cy="45" r="3" fill="#00c8ff" className="animate-pulse-dot" />

          <text x="200" y="152" fill="#00c8ff" textAnchor="middle" fontSize="8" fontFamily="JetBrains Mono, monospace" letterSpacing="1.5" fillOpacity="0.7">
            RUNTIME_WORKLOAD_TELEMETRY // CONTINUOUS
          </text>
        </svg>
      </div>
    );
  }

  if (type === 'secops') {
    return (
      <div className="relative h-[180px] w-full flex items-center justify-center select-none">
        <svg viewBox="0 0 400 160" className="w-full h-full" fill="none">
          {/* Signal Ingestion Funnel */}
          <path d="M40 30 L160 70 L160 90 L40 130 Z" fill="rgba(0, 200, 255, 0.03)" stroke="#00c8ff" strokeWidth="1" strokeOpacity={isActive ? '0.5' : '0.2'} />
          <line x1="50" y1="50" x2="150" y2="73" stroke="#00c8ff" strokeOpacity="0.2" />
          <line x1="50" y1="80" x2="150" y2="80" stroke="#00c8ff" strokeOpacity="0.2" />
          <line x1="50" y1="110" x2="150" y2="87" stroke="#00c8ff" strokeOpacity="0.2" />

          <text x="60" y="45" fill="#4a6580" fontSize="7" fontFamily="JetBrains Mono, monospace">100K_LOGS/S</text>
          <text x="60" y="125" fill="#4a6580" fontSize="7" fontFamily="JetBrains Mono, monospace">NET_FLOWS</text>

          {/* Correlation Engine Matrix */}
          <rect x="175" y="55" width="70" height="50" rx="2" fill="#040b14" stroke="#00c8ff" strokeWidth="1.5" strokeOpacity={isActive ? '1' : '0.3'} />
          <text x="210" y="76" fill="#00c8ff" fontSize="8" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontWeight="bold">AI_CORRELATE</text>
          <text x="210" y="90" fill="#00e5a0" fontSize="7" textAnchor="middle" fontFamily="JetBrains Mono, monospace">1 INCIDENT</text>

          {/* Automated Playbook Execution */}
          <path d="M245 80 L310 80" stroke="#00e5a0" strokeWidth="2" strokeDasharray="3 2" />
          <rect x="310" y="60" width="60" height="40" rx="2" fill="rgba(0, 229, 160, 0.08)" stroke="#00e5a0" strokeWidth="1" strokeOpacity={isActive ? '0.9' : '0.3'} />
          <text x="340" y="78" fill="#00e5a0" fontSize="7" textAnchor="middle" fontFamily="JetBrains Mono, monospace">AUTO_ACTION</text>
          <text x="340" y="90" fill="#00e5a0" fontSize="6" textAnchor="middle" fontFamily="JetBrains Mono, monospace">CONTAINED</text>

          <text x="200" y="152" fill="#00c8ff" textAnchor="middle" fontSize="8" fontFamily="JetBrains Mono, monospace" letterSpacing="1.5" fillOpacity="0.7">
            AUTONOMOUS_SOC_TRIAGE // 0ms HUMAN LATENCY
          </text>
        </svg>
      </div>
    );
  }

  // Threat Intelligence
  return (
    <div className="relative h-[180px] w-full flex items-center justify-center select-none">
      <svg viewBox="0 0 400 160" className="w-full h-full" fill="none">
        {/* Global Coordinate Globe Arcs */}
        <ellipse cx="200" cy="80" rx="140" ry="50" stroke="#00c8ff" strokeWidth="0.8" strokeOpacity={isActive ? '0.4' : '0.1'} strokeDasharray="4 2" />
        <ellipse cx="200" cy="80" rx="90" ry="50" stroke="#00c8ff" strokeWidth="0.8" strokeOpacity={isActive ? '0.3' : '0.1'} />
        <line x1="60" y1="80" x2="340" y2="80" stroke="#00c8ff" strokeWidth="0.8" strokeOpacity={isActive ? '0.3' : '0.1'} />
        <line x1="200" y1="30" x2="200" y2="130" stroke="#00c8ff" strokeWidth="0.8" strokeOpacity={isActive ? '0.3' : '0.1'} />

        {/* Global Threat Hubs */}
        <g>
          <circle cx="120" cy="65" r="4" fill="#ff3b5c" className="animate-pulse-dot" />
          <circle cx="120" cy="65" r="10" stroke="#ff3b5c" strokeWidth="1" strokeOpacity="0.5" className={isActive ? 'ring-anim' : ''} />
          <text x="120" y="55" fill="#ff3b5c" fontSize="7" textAnchor="middle" fontFamily="JetBrains Mono, monospace">APT-2847</text>
        </g>

        <g>
          <circle cx="280" cy="70" r="4" fill="#ff8c42" className="animate-pulse-dot" />
          <text x="280" y="60" fill="#ff8c42" fontSize="7" textAnchor="middle" fontFamily="JetBrains Mono, monospace">ZERO_DAY_FEED</text>
        </g>

        <g>
          <circle cx="200" cy="95" r="5" fill="#00c8ff" />
          <text x="200" y="112" fill="#00c8ff" fontSize="7" textAnchor="middle" fontFamily="JetBrains Mono, monospace">XSAV_INTEL_CORE</text>
        </g>

        <path d="M120 65 Q160 90 200 95" stroke="#ff3b5c" strokeWidth="1.2" strokeOpacity="0.6" strokeDasharray="3 2" />
        <path d="M280 70 Q240 90 200 95" stroke="#ff8c42" strokeWidth="1.2" strokeOpacity="0.6" strokeDasharray="3 2" />

        <text x="200" y="152" fill="#00c8ff" textAnchor="middle" fontSize="8" fontFamily="JetBrains Mono, monospace" letterSpacing="1.5" fillOpacity="0.7">
          GLOBAL_ADVERSARY_TRACKING // 12M+ INDICATORS/SEC
        </text>
      </svg>
    </div>
  );
}
