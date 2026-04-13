'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import FormModal from './components/FormModal';
import SocialProofToast from './components/SocialProofToast';
import HeroSection from './components/sections/HeroSection';
import ValueSection from './components/sections/ValueSection';
import DifferentiatorSection from './components/sections/DifferentiatorSection';
import BenefitsSection from './components/sections/BenefitsSection';
import PowerSection from './components/sections/PowerSection';
import CredibilitySection from './components/sections/CredibilitySection';
import SpeakersSection from './components/sections/SpeakersSection';
import AudienceSection from './components/sections/AudienceSection';
import FinalCTASection from './components/sections/FinalCTASection';

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);
  const openForm = () => setFormOpen(true);

  return (
    <>
      <Navbar onOpenForm={openForm} />
      <FormModal isOpen={formOpen} onClose={() => setFormOpen(false)} />
      <SocialProofToast />

      <main>
        <HeroSection onOpenForm={openForm} />
        <ValueSection />
        <DifferentiatorSection />
        <BenefitsSection onOpenForm={openForm} />
        <PowerSection onOpenForm={openForm} />
        <CredibilitySection />
        <SpeakersSection onOpenForm={openForm} />
        <AudienceSection />
        <FinalCTASection onOpenForm={openForm} />
      </main>

      <footer className="bg-[#f5f0eb] py-10 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-2">
              <img src="/images/logo_elevated.png" alt="Elevate AI" className="h-6 w-6" />
              <span className="text-[#2d2d2d] font-bold text-base">
                Elevate AI<span className="font-light">&apos;</span> Masterclass
              </span>
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-[#2d2d2d]/60">
              <a href="#" className="hover:text-[#2d2d2d] transition">Terms &amp; Conditions</a>
              <span>|</span>
              <a href="#" className="hover:text-[#2d2d2d] transition">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-[#2d2d2d] transition">Code of Ethics</a>
              <span>|</span>
              <a href="#" className="hover:text-[#2d2d2d] transition">Contact</a>
              <span>|</span>
              <a href="#" className="hover:text-[#2d2d2d] transition">About Us</a>
            </div>
          </div>
          <p className="text-[10px] text-[#2d2d2d]/40 leading-relaxed mb-3">
            &copy; 2026 Elevate AI. All rights reserved.
          </p>
          <p className="text-[10px] text-[#2d2d2d]/40 leading-relaxed">
            <strong>EARNINGS DISCLAIMER:</strong> We don&apos;t believe in &quot;get rich&quot; programs - only in hard work, adding value, building a real and professional career, and serving others with excellence and consistency.
          </p>
        </div>
      </footer>
    </>
  );
}
