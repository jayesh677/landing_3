import React from 'react';

export default function IntelligenceSection({ onSelectArticle }) {
  const articles = [
    {
      tag: 'RESEARCH',
      date: 'Sep 2026',
      category: 'THREAT REPORT',
      title: 'APT-2847: Anatomy of a State-Sponsored Attack',
      color: '#00c8ff',
      bgColor: 'rgba(0, 200, 255, 0.04)',
      borderColor: 'rgba(0, 200, 255, 0.1)',
      bars: [30, 45, 60, 80, 55, 40, 70, 95, 85, 65, 45, 30, 50, 75, 90, 80, 60, 35, 20],
    },
    {
      tag: 'SECURITY INSIGHTS',
      date: 'Sep 2026',
      category: 'WHITE PAPER',
      title: 'Why Legacy EDR Cannot Stop Modern Ransomware',
      color: '#a78bfa',
      bgColor: 'rgba(167, 139, 250, 0.04)',
      borderColor: 'rgba(167, 139, 250, 0.1)',
      bars: [65, 42, 23, 21, 36, 59, 76, 78, 62, 39, 22, 22, 39, 62, 78, 76, 59, 35, 20],
    },
    {
      tag: 'EXPERT GUIDES',
      date: 'Aug 2026',
      category: 'PLAYBOOK',
      title: 'Zero Trust Architecture: Implementation Playbook',
      color: '#00e5a0',
      bgColor: 'rgba(0, 229, 160, 0.04)',
      borderColor: 'rgba(0, 229, 160, 0.1)',
      bars: [77, 60, 36, 21, 23, 41, 64, 79, 75, 56, 33, 20, 25, 45, 67, 79, 73, 53, 30],
    },
  ];

  return (
    <section id="intelligence" className="bg-[var(--bg)] py-[120px] 2xl:py-[150px] 3xl:py-[180px] border-t border-[#00c8ff]/[0.06]">
      <div className="max-w-[1280px] 2xl:max-w-[1400px] 3xl:max-w-[1680px] 4k:max-w-[2000px] mx-auto px-6 sm:px-8 2xl:px-12 3xl:px-16">
        {/* Header */}
        <div className="flex justify-between items-end mb-[60px] 2xl:mb-[76px] flex-wrap gap-6">
          <div>
            <div className="eyebrow mb-5 2xl:mb-6">
              <span>—</span> Intelligence
            </div>
            <h2 className="text-[clamp(24px,2.6vw,42px)] 2xl:text-[46px] 3xl:text-[54px] 4k:text-[64px] font-extrabold tracking-[-0.035em] text-[#e8f2ff] font-display">
              STAY AHEAD<br />
              OF THE THREAT.
            </h2>
          </div>
          <button className="cyber-btn-ghost">
            View All Resources
          </button>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-[#00c8ff]/[0.04] rounded-[14px] 2xl:rounded-[18px] overflow-hidden border border-[#00c8ff]/[0.08]">
          {articles.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onSelectArticle && onSelectArticle(item)}
              className="bg-[var(--bg)] p-9 2xl:p-11 3xl:p-14 cursor-pointer hover:bg-[#060f1c] transition-all duration-300 relative overflow-hidden group border-b-2 border-transparent hover:border-[#00c8ff]"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#00c8ff]/[0.06] group-hover:bg-[#00c8ff]/30 transition-colors" />

              <div className="flex justify-between items-center mb-7 2xl:mb-9">
                <div
                  className="font-mono text-[9px] 2xl:text-[11px] 3xl:text-[12px] font-semibold tracking-[0.25em] opacity-70 group-hover:opacity-100 transition-opacity"
                  style={{ color: item.color }}
                >
                  {item.tag}
                </div>
                <div className="font-body text-[11px] 2xl:text-[13px] 3xl:text-[14px] text-[#2a4060]">
                  {item.date}
                </div>
              </div>

              {/* Graphic Waveform Box */}
              <div
                className="h-[100px] 2xl:h-[125px] 3xl:h-[150px] border mb-6 2xl:mb-8 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-[1.02] rounded-[8px] 2xl:rounded-[12px]"
                style={{ backgroundColor: item.bgColor, borderColor: item.borderColor }}
              >
                <div className="flex gap-1 items-end h-[60px] 2xl:h-[75px] 3xl:h-[90px] px-4 2xl:px-6 w-full">
                  {item.bars.map((barHeight, bIdx) => (
                    <div
                      key={bIdx}
                      className="flex-1 rounded-[1px] opacity-40 group-hover:opacity-90 transition-all duration-300"
                      style={{
                        height: `${barHeight}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="font-mono text-[9px] 2xl:text-[11px] 3xl:text-[12px] tracking-[0.15em] text-[#2a4060] mb-2.5 2xl:mb-3">
                {item.category}
              </div>

              <h4 className="font-mono text-[15px] 2xl:text-[18px] 3xl:text-[21px] 4k:text-[24px] font-bold text-[#6a8caa] group-hover:text-[#e8f2ff] leading-[1.4] tracking-[-0.01em] mb-5 2xl:mb-7 transition-colors duration-300">
                {item.title}
              </h4>

              <div className="flex items-center gap-1.5 2xl:gap-2 font-mono text-[10px] 2xl:text-[12px] 3xl:text-[13px] tracking-[0.1em] text-[#2a4060] group-hover:text-[#00c8ff] transition-colors duration-300">
                <span>READ MORE</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
