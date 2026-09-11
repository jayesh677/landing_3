import React, { useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#060f1c]/95 backdrop-blur-md border-t border-[#00c8ff]/15 px-6 2xl:px-8 py-4 2xl:py-5 transition-all">
      <div className="max-w-[1280px] 2xl:max-w-[1400px] 3xl:max-w-[1680px] 4k:max-w-[2000px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 2xl:gap-6 font-body text-xs 2xl:text-sm text-[#94afc8]">
        <p className="max-w-[850px] 2xl:max-w-[1100px] leading-relaxed">
          This website uses cookies, pixel tags, and local storage for performance, personalization, and marketing purposes. We use our own cookies and some from third parties. Only essential cookies are turned on by default.{' '}
          <a href="#" className="underline hover:text-[#00c8ff] text-[#d8eaf8] transition-colors">
            Cookies settings
          </a>
        </p>
        <div className="flex items-center gap-3 2xl:gap-4 shrink-0">
          <button
            onClick={() => setVisible(false)}
            className="px-4 2xl:px-5 py-2 2xl:py-2.5 font-mono text-[11px] 2xl:text-[13px] 3xl:text-[14px] font-medium text-[#d8eaf8] bg-[#03080f] hover:bg-[#091522] border border-[#00c8ff]/20 transition-colors cursor-pointer rounded-[6px] 2xl:rounded-[8px]"
          >
            Do not allow cookies
          </button>
          <button
            onClick={() => setVisible(false)}
            className="px-4 2xl:px-5 py-2 2xl:py-2.5 font-mono text-[11px] 2xl:text-[13px] 3xl:text-[14px] font-semibold text-[#03080f] bg-[#00c8ff] hover:bg-[#33d4ff] transition-colors cursor-pointer rounded-[6px] 2xl:rounded-[8px]"
          >
            Allow all cookies
          </button>
          <button
            onClick={() => setVisible(false)}
            className="text-[#4a6580] hover:text-[#00c8ff] p-1 font-mono text-sm 2xl:text-base"
            aria-label="Close banner"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
