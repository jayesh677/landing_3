import React from 'react';

export default function TestimonialSection() {
  const impacts = [
    { label: 'MTTD REDUCTION', value: '98%' },
    { label: 'GARTNER PEER RATING', value: '4.9/5' },
    { label: 'SUCCESSFUL BREACHES', value: '0' },
  ];

  return (
    <section className="bg-[var(--bg2)] py-[120px] border-t border-[#00c8ff]/[0.06]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Quote Column */}
          <div>
            <div className="eyebrow mb-8">
              <span>—</span> Customer Impact
            </div>

            <blockquote className="font-mono text-[clamp(20px,2.5vw,32px)] font-bold leading-[1.3] text-[#e8f2ff] tracking-[-0.02em] mb-10 border-l-2 border-[#00c8ff] pl-8">
              "XSAV stopped a sophisticated nation-state attack in under 30 seconds — completely autonomously. It was running before our SOC team got the alert."
            </blockquote>

            <div className="flex items-center gap-5">
              <div className="w-11 h-11 rounded-full bg-[#00c8ff]/10 border border-[#00c8ff]/20 flex items-center justify-center font-mono text-base font-bold text-[#00c8ff]">
                M
              </div>
              <div>
                <div className="font-mono text-[13px] font-bold text-[#d8eaf8] tracking-[0.05em]">
                  MARCUS CHEN
                </div>
                <div className="font-body text-[12px] text-[#4a6580]">
                  CISO, Meridian Financial Group
                </div>
              </div>
            </div>
          </div>

          {/* Right Metrics Cards */}
          <div className="flex flex-col gap-4">
            {impacts.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#03080f] border border-[#00c8ff]/[0.08] hover:border-[#00c8ff]/30 p-6 flex items-center justify-between transition-colors duration-300 rounded-[10px]"
              >
                <div className="font-mono text-[11px] tracking-[0.15em] text-[#4a6580]">
                  {item.label}
                </div>
                <div className="font-mono text-2xl font-extrabold text-[#00c8ff]">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
