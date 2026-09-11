import React, { useState } from 'react';

export default function DemoModal({ isOpen, onClose, initialType = 'demo' }) {
  const [type, setType] = useState(initialType);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    endpoints: '1,000 - 5,000',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020609]/80 backdrop-blur-md animate-fade-up">
      <div className="bg-[#040b14] border border-[#00c8ff]/30 w-full max-w-lg 2xl:max-w-xl 3xl:max-w-2xl p-8 2xl:p-10 relative shadow-[0_0_80px_rgba(0,200,255,0.15)] rounded-[14px] 2xl:rounded-[18px]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 2xl:top-7 right-6 2xl:right-7 text-[#4a6580] hover:text-[#00c8ff] font-mono text-xl 2xl:text-2xl cursor-pointer"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="eyebrow mb-3 2xl:mb-4">
          <span>—</span> {type === 'demo' ? 'Interactive Platform Demo' : 'Contact Enterprise Sales'}
        </div>

        <h3 className="font-mono text-2xl 2xl:text-3xl font-bold text-[#e8f2ff] mb-2 2xl:mb-3">
          {type === 'demo' ? 'Experience Autonomous Security' : 'Speak With Our Defense Architects'}
        </h3>

        <p className="font-body text-sm 2xl:text-base text-[#6a8caa] mb-6 2xl:mb-8">
          {type === 'demo'
            ? 'See how XSAV Endpoint Security detects and neutralizes live malware payloads in under 30 seconds.'
            : 'Custom deployment scoping, proof of concept pilots, and volume enterprise pricing.'}
        </p>

        {submitted ? (
          <div className="bg-[#03080f] border border-[#00c8ff]/30 p-8 2xl:p-10 text-center my-6 rounded-[10px] 2xl:rounded-[14px]">
            <div className="w-12 h-12 2xl:w-14 2xl:h-14 rounded-full bg-[#00e5a0]/10 border border-[#00e5a0] text-[#00e5a0] flex items-center justify-center mx-auto mb-4 font-mono text-xl 2xl:text-2xl">
              ✓
            </div>
            <h4 className="font-mono text-lg 2xl:text-xl font-bold text-[#e8f2ff] mb-2">
              Request Received
            </h4>
            <p className="font-body text-xs 2xl:text-sm text-[#6a8caa] mb-6">
              Our autonomous defense engineers will connect with you shortly at <span className="text-[#00c8ff]">{formData.email}</span>.
            </p>
            <button
              onClick={onClose}
              className="cyber-btn-primary"
            >
              Return to Platform
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 2xl:space-y-5 font-mono text-xs 2xl:text-sm">
            <div>
              <label className="block text-[#4a6580] uppercase tracking-wider mb-1.5 2xl:mb-2">
                Work Email *
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#03080f] border border-[#00c8ff]/20 px-3.5 2xl:px-4 py-2.5 2xl:py-3.5 text-[#d8eaf8] focus:border-[#00c8ff] focus:outline-none transition-colors rounded-[8px] 2xl:rounded-[10px]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 2xl:gap-4">
              <div>
                <label className="block text-[#4a6580] uppercase tracking-wider mb-1.5 2xl:mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Alex Mercer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#03080f] border border-[#00c8ff]/20 px-3.5 2xl:px-4 py-2.5 2xl:py-3.5 text-[#d8eaf8] focus:border-[#00c8ff] focus:outline-none transition-colors rounded-[8px] 2xl:rounded-[10px]"
                />
              </div>
              <div>
                <label className="block text-[#4a6580] uppercase tracking-wider mb-1.5 2xl:mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Apex Global"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-[#03080f] border border-[#00c8ff]/20 px-3.5 2xl:px-4 py-2.5 2xl:py-3.5 text-[#d8eaf8] focus:border-[#00c8ff] focus:outline-none transition-colors rounded-[8px] 2xl:rounded-[10px]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#4a6580] uppercase tracking-wider mb-1.5 2xl:mb-2">
                Protected Endpoints
              </label>
              <select
                value={formData.endpoints}
                onChange={(e) => setFormData({ ...formData, endpoints: e.target.value })}
                className="w-full bg-[#03080f] border border-[#00c8ff]/20 px-3.5 2xl:px-4 py-2.5 2xl:py-3.5 text-[#d8eaf8] focus:border-[#00c8ff] focus:outline-none transition-colors rounded-[8px] 2xl:rounded-[10px]"
              >
                <option value="100 - 1,000">100 - 1,000 Endpoints</option>
                <option value="1,000 - 5,000">1,000 - 5,000 Endpoints</option>
                <option value="5,000 - 25,000">5,000 - 25,000 Endpoints</option>
                <option value="25,000+">25,000+ Global Fleet</option>
              </select>
            </div>

            <div className="pt-2 2xl:pt-3">
              <button
                type="submit"
                className="cyber-btn-primary w-full justify-center !py-3 2xl:!py-4"
              >
                {type === 'demo' ? 'Schedule Live Demo →' : 'Request Enterprise Quote →'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
