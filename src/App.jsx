import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import ThreatResponseSection from './components/ThreatResponseSection';
import PlatformSection from './components/PlatformSection';
import LiveConsoleSection from './components/LiveConsoleSection';
import AdvantageSection from './components/AdvantageSection';
import MetricsSection from './components/MetricsSection';
import TestimonialSection from './components/TestimonialSection';
import IntelligenceSection from './components/IntelligenceSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import CookieBanner from './components/CookieBanner';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('demo');

  const handleOpenDemo = () => {
    setModalType('demo');
    setModalOpen(true);
  };

  const handleOpenContact = () => {
    setModalType('contact');
    setModalOpen(true);
  };

  const handleExplorePlatform = (e) => {
    e?.preventDefault();
    const el = document.getElementById('platform');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[var(--bg)] min-h-screen text-[#d8eaf8] selection:bg-[#00c8ff]/30 selection:text-[#00c8ff]">
      {/* Navigation */}
      <Navbar
        onOpenDemo={handleOpenDemo}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content */}
      <main>
        {/* Section 1: Hero */}
        <HeroSection
          onOpenDemo={handleOpenDemo}
          onExplorePlatform={handleExplorePlatform}
        />

        {/* Section 2: Marquee Partners */}
        <MarqueeSection />

        {/* Section 3: Threat Response (Interactive 4-Step Stepper) */}
        <ThreatResponseSection />

        {/* Section 4: Platform Modules */}
        <PlatformSection onSelectModule={() => handleOpenDemo()} />

        {/* Section 5: Live Operations Security Console */}
        <LiveConsoleSection />

        {/* Section 6: Our Advantage */}
        <AdvantageSection />

        {/* Section 7: By The Numbers */}
        <MetricsSection />

        {/* Section 8: Customer Testimonial */}
        <TestimonialSection />

        {/* Section 9: Threat Intelligence & Playbooks */}
        <IntelligenceSection onSelectArticle={() => handleOpenDemo()} />

        {/* Section 10: Final CTA */}
        <CtaSection
          onOpenDemo={handleOpenDemo}
          onOpenContact={handleOpenContact}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modal */}
      <DemoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={modalType}
      />

      {/* Cookie Banner */}
      <CookieBanner />
    </div>
  );
}
