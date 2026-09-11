import React from 'react';

export default function MetricsSection() {
  const metrics = [
    {
      value: '99.9%',
      title: 'Threat Prevention',
      subtitle: 'Independent testing 2024',
    },
    {
      value: '<30s',
      title: 'Mean Response Time',
      subtitle: 'From detection to containment',
    },
    {
      value: '10M+',
      title: 'Protected Endpoints',
      subtitle: 'Across 40+ countries',
    },
    {
      value: '0',
      title: 'Human Delay',
      subtitle: 'For standard attack vectors',
    },
    {
      value: '500+',
      title: 'Enterprise Customers',
      subtitle: 'Global 2000 leaders',
    },
    {
      value: '300%',
      title: 'SOC Efficiency Gain',
      subtitle: 'Average reported by clients',
    },
  ];

  return (
    <section className="bg-[var(--bg)] py-[120px] 2xl:py-[150px] 3xl:py-[180px] border-t border-[#00c8ff]/[0.06]">
      <div className="max-w-[1280px] 2xl:max-w-[1400px] 3xl:max-w-[1680px] 4k:max-w-[2000px] mx-auto px-6 sm:px-8 2xl:px-12 3xl:px-16">
        {/* Section Header */}
        <div className="mb-[72px] 2xl:mb-[88px]">
          <div className="eyebrow mb-5 2xl:mb-6">
            <span>—</span> By the Numbers
          </div>
          <h2 className="text-[clamp(24px,2.6vw,42px)] 2xl:text-[46px] 3xl:text-[54px] 4k:text-[64px] font-extrabold tracking-[-0.035em] text-[#e8f2ff] font-display">
            PROVEN IN THE REAL WORLD.
          </h2>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1px] bg-[#00c8ff]/[0.06] border border-[#00c8ff]/[0.06] rounded-[14px] 2xl:rounded-[18px] overflow-hidden">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="bg-[var(--bg)] p-10 md:p-12 2xl:p-14 3xl:p-16 border-r border-b border-[#00c8ff]/[0.06] hover:bg-[#060f1c] transition-colors duration-300 group"
            >
              <div className="font-mono text-[clamp(32px,3.5vw,52px)] 2xl:text-[56px] 3xl:text-[68px] 4k:text-[80px] font-extrabold text-[#00c8ff] tracking-[-0.03em] leading-none mb-3 2xl:mb-4 group-hover:scale-105 transition-transform duration-300 origin-left">
                {item.value}
              </div>
              <div className="font-mono text-[12px] 2xl:text-[14px] 3xl:text-[16px] 4k:text-[18px] font-bold tracking-[0.1em] text-[#d8eaf8] mb-1.5 2xl:mb-2">
                {item.title}
              </div>
              <div className="font-body text-[12px] 2xl:text-[13px] 3xl:text-[15px] 4k:text-[17px] text-[#4a6580]">
                {item.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
