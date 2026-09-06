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
    <section id="intelligence" className="bg-[var(--bg)] py-[120px] border-t border-[#00c8ff]/[0.06]">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="flex justify-between items-end mb-[60px] flex-wrap gap-6">
          <div>
            <div className="eyebrow mb-5">
              <span>—</span> Intelligence
            </div>
            <h2 className="text-[clamp(24px,2.6vw,42px)] font-extrabold tracking-[-0.03em] text-[#e8f2ff] font-mono">
              STAY AHEAD<br />
              OF THE THREAT.
            </h2>
          </div>
          <button className="cyber-btn-ghost">
            View All Resources
          </button>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-[#00c8ff]/[0.04] rounded-[14px] overflow-hidden border border-[#00c8ff]/[0.08]">
          {articles.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onSelectArticle && onSelectArticle(item)}
              className="bg-[var(--bg)] p-9 cursor-pointer hover:bg-[#060f1c] transition-all duration-300 relative overflow-hidden group border-b-2 border-transparent hover:border-[#00c8ff]"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#00c8ff]/[0.06] group-hover:bg-[#00c8ff]/30 transition-colors" />

              <div className="flex justify-between items-center mb-7">
                <div
                  className="font-mono text-[9px] font-semibold tracking-[0.25em] opacity-70 group-hover:opacity-100 transition-opacity"
                  style={{ color: item.color }}
                >
                  {item.tag}
                </div>
                <div className="font-body text-[11px] text-[#2a4060]">
                  {item.date}
                </div>
              </div>

              {/* Graphic Waveform Box */}
              <div
                className="h-[100px] border mb-6 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-[1.02] rounded-[8px]"
                style={{ backgroundColor: item.bgColor, borderColor: item.borderColor }}
              >
                <div className="flex gap-1 items-end h-[60px] px-4 w-full">
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

              <div className="font-mono text-[9px] tracking-[0.15em] text-[#2a4060] mb-2.5">
                {item.category}
              </div>

              <h4 className="font-mono text-[15px] font-bold text-[#6a8caa] group-hover:text-[#e8f2ff] leading-[1.4] tracking-[-0.01em] mb-5 transition-colors duration-300">
                {item.title}
              </h4>

              <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.1em] text-[#2a4060] group-hover:text-[#00c8ff] transition-colors duration-300">
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
