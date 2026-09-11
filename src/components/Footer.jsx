import React from 'react';

export default function Footer() {
  const footerSections = [
    {
      title: 'PLATFORM',
      links: ['Endpoint', 'Identity', 'Cloud', 'Security Ops', 'Threat Intel', 'Integrations'],
    },
    {
      title: 'SOLUTIONS',
      links: ['Enterprise', 'Financial Services', 'Healthcare', 'Energy & Utilities', 'Public Sector', 'Mid-Market'],
    },
    {
      title: 'RESOURCES',
      links: ['Threat Intelligence', 'Documentation', 'API Reference', 'Security Research', 'Blog', 'Webinars'],
    },
    {
      title: 'COMPANY',
      links: ['About Us', 'Leadership', 'Careers', 'Press', 'Trust & Compliance', 'Contact'],
    },
  ];

  return (
    <footer className="bg-[#020609] border-t border-[#00c8ff]/[0.08] pt-20 2xl:pt-28 pb-10 2xl:pb-14">
      <div className="max-w-[1280px] 2xl:max-w-[1400px] 3xl:max-w-[1680px] 4k:max-w-[2000px] mx-auto px-6 sm:px-8 2xl:px-12 3xl:px-16">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 2xl:gap-12 mb-16 2xl:mb-20 pb-16 2xl:pb-20 border-b border-[#00c8ff]/[0.06]">
          {/* Brand Info & Socials */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2.5 2xl:gap-3 mb-5 2xl:mb-6">
              <img
                src="/logo.png"
                alt="XSAV Endpoint Security Logo"
                className="w-6 h-6 2xl:w-8 2xl:h-8 3xl:w-9 3xl:h-9 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-mono text-[14px] 2xl:text-[16px] 3xl:text-[18px] 4k:text-[20px] font-extrabold tracking-[0.06em] text-[#d8eaf8] leading-tight">
                  XSAV
                </span>
                <span className="font-mono text-[7px] 2xl:text-[8px] 3xl:text-[9px] font-semibold tracking-[0.16em] text-[#00c8ff] leading-none">
                  ENDPOINT SECURITY
                </span>
              </div>
            </div>

            <p className="font-body text-[13px] 2xl:text-[14px] 3xl:text-[16px] leading-[1.7] text-[#4a6580] max-w-[240px] 2xl:max-w-[300px] 3xl:max-w-[360px] mb-7 2xl:mb-9">
              Autonomous endpoint security and threat mitigation for modern enterprise infrastructure.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 2xl:gap-4">
              {['X', 'Li', 'Gh', 'Yt'].map((soc) => (
                <div
                  key={soc}
                  className="w-8 h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 border border-[#00c8ff]/15 hover:border-[#00c8ff] flex items-center justify-center cursor-pointer font-mono text-[10px] 2xl:text-[12px] 3xl:text-[13px] text-[#4a6580] hover:text-[#00c8ff] transition-all duration-200 rounded-[6px] 2xl:rounded-[8px]"
                >
                  {soc}
                </div>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((sec) => (
            <div key={sec.title}>
              <div className="font-mono text-[9px] 2xl:text-[11px] 3xl:text-[12px] font-bold tracking-[0.25em] text-[#4a6580] mb-5 2xl:mb-6">
                {sec.title}
              </div>
              <ul className="space-y-2.5 2xl:space-y-3.5 3xl:space-y-4">
                {sec.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-[13px] 2xl:text-[14px] 3xl:text-[16px] text-[#3a5570] hover:text-[#00c8ff] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Status & Copyright Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#2a4060] font-mono text-[11px] 2xl:text-[12px] 3xl:text-[14px]">
          <div>
            © 2026 XSAV ENDPOINT SECURITY, INC. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6 2xl:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 2xl:w-2.5 2xl:h-2.5 rounded-full bg-[#00e5a0] animate-pulse-dot" />
              <span className="text-[#00e5a0] text-[10px] 2xl:text-[11px] 3xl:text-[12px] tracking-wider">ALL SYSTEMS OPERATIONAL</span>
            </div>
            <span className="text-[#1a3048]">|</span>
            <span className="tracking-[0.1em] text-[#3a5570]">BUILT FOR AUTONOMOUS DEFENSE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
