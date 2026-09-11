import React from 'react';

export default function AdvantageSection() {
  return (
    <section id="advantage" className="bg-[var(--bg2)] py-[120px] 2xl:py-[150px] 3xl:py-[180px] border-t border-[#00c8ff]/[0.06]">
      <div className="max-w-[1280px] 2xl:max-w-[1400px] 3xl:max-w-[1680px] 4k:max-w-[2000px] mx-auto px-6 sm:px-8 2xl:px-12 3xl:px-16">
        {/* Section Header */}
        <div className="text-center mb-20 2xl:mb-24">
          <div className="eyebrow mb-5 2xl:mb-6">
            <span>—</span> Our Advantage
          </div>
          <h2 className="text-[clamp(26px,3vw,46px)] 2xl:text-[48px] 3xl:text-[58px] 4k:text-[68px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[#e8f2ff] font-display">
            SECURITY THAT THINKS.<br />
            <span className="text-[#00c8ff]">SECURITY THAT ACTS.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-[#00c8ff]/[0.04] rounded-[14px] 2xl:rounded-[18px] overflow-hidden border border-[#00c8ff]/[0.08]">
          {/* Bento Card 1 (Large 1.4fr) */}
          <div className="bg-[var(--bg2)] p-12 md:p-14 2xl:p-16 3xl:p-20 relative border-r border-[#00c8ff]/[0.06] overflow-hidden group">
            <div 
              className="absolute top-0 left-0 right-0 h-[200px] 2xl:h-[260px] pointer-events-none"
              style={{
                background: 'radial-gradient(at 30% 0%, rgba(0, 200, 255, 0.06) 0%, transparent 70%)'
              }}
            />

            <div className="eyebrow mb-8 2xl:mb-10 text-[#00c8ff]">01</div>

            <h3 className="font-mono text-[28px] 2xl:text-[34px] 3xl:text-[40px] 4k:text-[48px] font-extrabold tracking-[-0.02em] text-[#e8f2ff] leading-[1.1] mb-5 2xl:mb-6">
              AUTONOMOUS<br />
              RESPONSE
            </h3>

            <p className="font-body text-[15px] 2xl:text-[17px] 3xl:text-[20px] 4k:text-[22px] leading-[1.8] text-[#4a6580] max-w-[340px] 2xl:max-w-[420px] 3xl:max-w-[500px] mb-10 2xl:mb-12">
              Threats are detected, analyzed, and contained in milliseconds — without waiting for human approval. Our AI acts before the attacker can pivot.
            </p>

            <div className="flex gap-8 2xl:gap-12 pt-8 2xl:pt-10 border-t border-[#00c8ff]/[0.08]">
              <div>
                <div className="font-mono text-[28px] 2xl:text-[34px] 3xl:text-[40px] 4k:text-[48px] font-extrabold text-[#00c8ff]">
                  18ms
                </div>
                <div className="font-body text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-[#2a4060]">
                  Avg response
                </div>
              </div>
              <div>
                <div className="font-mono text-[28px] 2xl:text-[34px] 3xl:text-[40px] 4k:text-[48px] font-extrabold text-[#00c8ff]">
                  100%
                </div>
                <div className="font-body text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-[#2a4060]">
                  Automated
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 2 */}
          <div className="bg-[#030810] p-10 2xl:p-12 3xl:p-16 relative border-r border-[#00c8ff]/[0.06] flex flex-col justify-between">
            <div>
              <div className="eyebrow mb-7 2xl:mb-9 text-[#a78bfa]">02</div>

              <h3 className="font-mono text-[22px] 2xl:text-[26px] 3xl:text-[32px] 4k:text-[38px] font-extrabold tracking-[-0.02em] text-[#e8f2ff] leading-[1.1] mb-4 2xl:mb-5">
                REAL-TIME<br />
                VISIBILITY
              </h3>

              <p className="font-body text-[14px] 2xl:text-[16px] 3xl:text-[19px] 4k:text-[21px] leading-[1.75] text-[#4a6580] mb-9 2xl:mb-11">
                Every process, network connection, and file operation is captured, correlated, and surfaced with full context — nothing hidden.
              </p>
            </div>

            <div>
              {/* Animated Live Equalizer Bars */}
              <div className="h-20 2xl:h-28 3xl:h-36 flex gap-[3px] 2xl:gap-1 items-end mb-5 2xl:mb-6">
                {[40, 55, 30, 70, 45, 80, 60, 90, 65, 75, 85, 72].map((height, idx) => (
                  <div
                    key={idx}
                    className="flex-1 rounded-[1px] transition-all duration-300"
                    style={{
                      height: `${height}%`,
                      backgroundColor: `rgba(167, 139, 250, ${0.2 + (idx * 0.05)})`
                    }}
                  />
                ))}
              </div>
              <div className="font-mono text-[10px] 2xl:text-[12px] 3xl:text-[13px] text-[#2a4060] tracking-[0.15em]">
                LIVE EVENT STREAM
              </div>
            </div>
          </div>

          {/* Bento Card 3 */}
          <div className="bg-[var(--bg2)] p-10 2xl:p-12 3xl:p-16 relative flex flex-col justify-between">
            <div>
              <div className="eyebrow mb-7 2xl:mb-9 text-[#00e5a0]">03</div>

              <h3 className="font-mono text-[22px] 2xl:text-[26px] 3xl:text-[32px] 4k:text-[38px] font-extrabold tracking-[-0.02em] text-[#e8f2ff] leading-[1.1] mb-4 2xl:mb-5">
                ONE UNIFIED<br />
                DEFENSE
              </h3>

              <p className="font-body text-[14px] 2xl:text-[16px] 3xl:text-[19px] 4k:text-[21px] leading-[1.75] text-[#4a6580] mb-9 2xl:mb-11">
                No tool sprawl. One agent, one console, one data lake. Intelligence flows across every layer without integration overhead.
              </p>
            </div>

            <div className="flex justify-center py-4 2xl:py-6">
              <svg className="w-[100px] h-[100px] 2xl:w-[130px] 2xl:h-[130px] 3xl:w-[160px] 3xl:h-[160px]" viewBox="0 0 100 100" fill="none">
                <path d="M50 8 L82 22 L82 52 Q82 74 50 88 Q18 74 18 52 L18 22 Z" fill="none" stroke="#00e5a0" strokeWidth="1.5" strokeOpacity="0.6" />
                <path d="M50 20 L72 31 L72 51 Q72 67 50 78 Q28 67 28 51 L28 31 Z" fill="rgba(0,229,160,0.05)" stroke="#00e5a0" strokeWidth="1" strokeOpacity="0.3" />
                <path d="M38 50 L46 59 L63 42" stroke="#00e5a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="50" cy="50" r="35" stroke="#00e5a0" strokeWidth="0.5" strokeOpacity="0.2" fill="none" className="ring-anim" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
