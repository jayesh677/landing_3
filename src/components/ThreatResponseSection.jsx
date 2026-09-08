import React, { useState, useEffect, useRef } from 'react';
import ThreatVisualizer from './ThreatVisualizer';

export default function ThreatResponseSection({ onOpenDemo }) {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  const steps = [
    {
      num: '01',
      tag: 'DETECT',
      title: 'See threats before they spread.',
      desc: 'AI-powered behavioral analysis monitors every endpoint, process, and connection in real time — flagging anomalies before patterns emerge.',
    },
    {
      num: '02',
      tag: 'UNDERSTAND',
      title: 'Full attack context, instantly.',
      desc: 'Automated storyline reconstruction maps the entire attack chain — from initial access to lateral movement — in seconds, not hours.',
    },
    {
      num: '03',
      tag: 'RESPOND',
      title: 'Autonomous countermeasures.',
      desc: 'Without human intervention, the platform isolates affected systems, terminates malicious processes, and rolls back unauthorized changes.',
    },
    {
      num: '04',
      tag: 'CONTAIN',
      title: 'Stop the attack before it becomes a breach.',
      desc: 'Blast radius is surgically reduced. Operations continue uninterrupted as the threat is quarantined and eliminated.',
    },
  ];

  const isManualScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || isManualScrolling.current) return;

      const viewportHeight = window.innerHeight;
      const focalPoint = viewportHeight * 0.45;

      // If last item is scrolled into focal zone, activate the final containment step
      const lastItem = itemRefs.current[itemRefs.current.length - 1];
      if (lastItem) {
        const lastRect = lastItem.getBoundingClientRect();
        if (lastRect.top <= viewportHeight * 0.52) {
          setActiveStep(itemRefs.current.length - 1);
          return;
        }
      }

      let closestIndex = 0;
      let minDistance = Infinity;

      itemRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - focalPoint);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = idx;
        }
      });

      setActiveStep(closestIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const handleItemClick = (idx) => {
    setActiveStep(idx);
    isManualScrolling.current = true;
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isManualScrolling.current = false;
    }, 900);

    if (itemRefs.current[idx]) {
      const rect = itemRefs.current[idx].getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetY = scrollTop + rect.top - (window.innerHeight * 0.45 - rect.height / 2);
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="threat-response"
      ref={sectionRef}
      className="bg-[var(--bg)] py-[120px] border-t border-[#00c8ff]/[0.06] relative"
    >
      <div className="max-w-[1280px] mx-auto px-8">
        {/* ============================================================= */}
        {/* MIRRORED TWO-COLUMN LAYOUT: ANIMATION (LEFT) | TEXT (RIGHT)   */}
        {/* ============================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE (55% / 6-7 cols): Pinned Threat Visualizer */}
          <div className="lg:col-span-6 lg:sticky lg:top-[18vh] flex flex-col items-center justify-center order-2 lg:order-1">
            <div className="w-full bg-[#040b14]/50 border border-[#00c8ff]/10 rounded-[14px] p-4 lg:p-6 backdrop-blur-sm relative overflow-hidden">
              {/* Direction Indicator Banner */}
              <div className="flex items-center justify-between font-sans text-[11px] sm:text-[11.5px] font-semibold tracking-[0.08em] uppercase text-[#4a6580] border-b border-[#00c8ff]/10 pb-3 mb-2.5">
                <span className="text-[#00c8ff] font-bold tracking-[0.1em]">AUTONOMOUS DEFENSE ENGINE</span>
                <span className="flex items-center gap-1.5 text-[rgb(242,12,51)] font-bold">
                  <span className="text-[13px] leading-none">←</span> INBOUND VECTOR [RIGHT TO LEFT]
                </span>
              </div>

              {/* Threat Visualizer SVG with Right-to-Left Vector Progression */}
              <ThreatVisualizer activeStep={activeStep} />

              {/* Interactive Step Dwell / Stage Indicators */}
              <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-[#00c8ff]/10">
                <div className="flex items-center gap-1.5">
                  {steps.map((s, idx) => (
                    <button
                      key={s.num}
                      onClick={() => handleItemClick(idx)}
                      className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold transition-all ${
                        activeStep === idx
                          ? 'bg-[#00c8ff]/20 text-[#00c8ff] border border-[#00c8ff]/40 shadow-[0_0_10px_rgba(0,200,255,0.25)]'
                          : 'text-[#4a6580] hover:text-[#8daac5] border border-transparent'
                      }`}
                    >
                      {s.num}
                    </button>
                  ))}
                </div>
                <div className="text-[10px] font-mono text-[#4a6580]">
                  STAGE <span className="text-[#00c8ff] font-bold">0{activeStep + 1}</span> / 04
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (45% / 6 cols): Header + Vertical Narrative Timeline */}
          <div className="lg:col-span-6 flex flex-col order-1 lg:order-2">
            {/* Section Header */}
            <div className="mb-4 lg:mb-6">
              <div className="eyebrow mb-2 flex items-center gap-2">
                <span className="text-[#00c8ff]">—</span> Threat Response
              </div>
              <h2 className="text-[clamp(28px,3.2vw,48px)] font-extrabold leading-[1.05] tracking-[-0.035em] text-[#e8f2ff] font-display">
                THE THREAT MOVES FAST.<br />
                <span className="text-[#4a6580] font-light">YOUR DEFENSE HAS TO</span><br />
                MOVE FASTER.
              </h2>
              <p className="font-body text-[15px] leading-[1.6] text-[#6a8caa] max-w-[480px] mt-2.5">
                Detect, investigate, and contain attacks with intelligent automated response before attackers can pivot.
              </p>
            </div>

            {/* 4 Sequential Scroll Storytelling Items with Compact Spacing */}
            <div className="flex flex-col space-y-3 pb-8">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;

                return (
                  <div
                    key={step.num}
                    ref={(el) => (itemRefs.current[idx] = el)}
                    onClick={() => handleItemClick(idx)}
                    style={{ scrollSnapAlign: 'center', scrollMarginTop: '20vh' }}
                    className={`group cursor-pointer transition-all duration-500 ease-in-out text-left max-w-[500px] min-h-[28vh] sm:min-h-[32vh] lg:min-h-[36vh] flex flex-col justify-center py-2 ${
                      isActive
                        ? 'opacity-100 translate-y-0 filter-none'
                        : 'opacity-30 translate-y-1 blur-[0.3px] hover:opacity-50'
                    }`}
                  >
                    {/* Step Number & Category */}
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span
                        className={`font-mono text-[13px] font-bold tracking-[0.2em] transition-colors duration-500 ease-in-out ${
                          isActive ? 'text-[#00c8ff]' : 'text-[#2a4060]'
                        }`}
                      >
                        {step.num}
                      </span>
                      <span className="w-3 h-[1px] bg-[#00c8ff]/20" />
                      <span
                        className={`font-mono text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 ease-in-out ${
                          isActive ? 'text-[#00c8ff]' : 'text-[#4a6580]'
                        }`}
                      >
                        {step.tag}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3
                      className={`font-mono text-[clamp(18px,2vw,22px)] font-bold leading-[1.25] tracking-[-0.02em] mb-2 transition-colors duration-500 ease-in-out ${
                        isActive ? 'text-[#e8f2ff]' : 'text-[#3a526b]'
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`font-body text-[14px] leading-[1.65] mb-3.5 transition-colors duration-500 ease-in-out ${
                        isActive ? 'text-[#8daac5]' : 'text-[#223344]'
                      }`}
                    >
                      {step.desc}
                    </p>

                    {/* Subtle Divider with Horizontal Animated Active Indicator */}
                    <div className="h-[2px] w-full bg-[#00c8ff]/[0.08] relative overflow-hidden rounded-full">
                      <div
                        className={`h-full bg-[#00c8ff] transition-all duration-500 ease-in-out ${
                          isActive
                            ? 'w-full opacity-100 shadow-[0_0_12px_#00c8ff]'
                            : 'w-0 opacity-0'
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="mt-6 pt-5 border-t border-[#00c8ff]/10">
              <button
                onClick={onOpenDemo}
                className="cyber-btn-primary group"
              >
                <span>Explore Threat Response</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
