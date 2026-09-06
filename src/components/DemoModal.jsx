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
      <div className="bg-[#040b14] border border-[#00c8ff]/30 w-full max-w-lg p-8 relative shadow-[0_0_80px_rgba(0,200,255,0.15)] rounded-[14px]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#4a6580] hover:text-[#00c8ff] font-mono text-xl cursor-pointer"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="eyebrow mb-3">
          <span>—</span> {type === 'demo' ? 'Interactive Platform Demo' : 'Contact Enterprise Sales'}
        </div>

        <h3 className="font-mono text-2xl font-bold text-[#e8f2ff] mb-2">
          {type === 'demo' ? 'Experience Autonomous Security' : 'Speak With Our Defense Architects'}
        </h3>

        <p className="font-body text-sm text-[#6a8caa] mb-6">
          {type === 'demo'
            ? 'See how XSAV Endpoint Security detects and neutralizes live malware payloads in under 30 seconds.'
            : 'Custom deployment scoping, proof of concept pilots, and volume enterprise pricing.'}
        </p>

        {submitted ? (
          <div className="bg-[#03080f] border border-[#00c8ff]/30 p-8 text-center my-6 rounded-[10px]">
            <div className="w-12 h-12 rounded-full bg-[#00e5a0]/10 border border-[#00e5a0] text-[#00e5a0] flex items-center justify-center mx-auto mb-4 font-mono text-xl">
              ✓
            </div>
            <h4 className="font-mono text-lg font-bold text-[#e8f2ff] mb-2">
              Request Received
            </h4>
            <p className="font-body text-xs text-[#6a8caa] mb-6">
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
          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            <div>
              <label className="block text-[#4a6580] uppercase tracking-wider mb-1.5">
                Work Email *
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#03080f] border border-[#00c8ff]/20 px-3.5 py-2.5 text-[#d8eaf8] focus:border-[#00c8ff] focus:outline-none transition-colors rounded-[8px]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[#4a6580] uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Alex Mercer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#03080f] border border-[#00c8ff]/20 px-3.5 py-2.5 text-[#d8eaf8] focus:border-[#00c8ff] focus:outline-none transition-colors rounded-[8px]"
                />
              </div>
              <div>
                <label className="block text-[#4a6580] uppercase tracking-wider mb-1.5">
                  Company *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Apex Global"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-[#03080f] border border-[#00c8ff]/20 px-3.5 py-2.5 text-[#d8eaf8] focus:border-[#00c8ff] focus:outline-none transition-colors rounded-[8px]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#4a6580] uppercase tracking-wider mb-1.5">
                Protected Endpoints
              </label>
              <select
                value={formData.endpoints}
                onChange={(e) => setFormData({ ...formData, endpoints: e.target.value })}
                className="w-full bg-[#03080f] border border-[#00c8ff]/20 px-3.5 py-2.5 text-[#d8eaf8] focus:border-[#00c8ff] focus:outline-none transition-colors rounded-[8px]"
              >
                <option value="100 - 1,000">100 - 1,000 Endpoints</option>
                <option value="1,000 - 5,000">1,000 - 5,000 Endpoints</option>
                <option value="5,000 - 25,000">5,000 - 25,000 Endpoints</option>
                <option value="25,000+">25,000+ Global Fleet</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="cyber-btn-primary w-full justify-center !py-3"
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
