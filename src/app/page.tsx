'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { NavigationOverlay } from '@/components/NavigationOverlay';
import { ContactSection } from '@/components/ContactSection';
import { AboutSection } from '@/components/AboutSection';
import { SelectedWorksSection } from '@/components/SelectedWorksSection';

export default function Home() {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const handleScrollToSelectedWorks = () => {
    const target = document.querySelector('#selected-works');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-black w-full min-h-screen">
      {/* MINIMALIST HEADER WITH SIGNATURE LOGO & DESKTOP NAV */}
      <Header
        navOpen={navOpen}
        onToggleNav={() => setNavOpen((prev) => !prev)}
      />

      {/* FULLSCREEN / DROPDOWN NAVIGATION OVERLAY (MOBILE) */}
      <NavigationOverlay
        isOpen={navOpen}
        onClose={() => setNavOpen(false)}
      />

      {/* FOREGROUND CURTAIN WRAPPER */}
      <div className="relative z-10 bg-black shadow-2xl mb-0 pb-12">
        {/* HERO SECTION */}
        <HeroSection onExploreClick={handleScrollToSelectedWorks} />

        <main className="w-full bg-black">
          <SelectedWorksSection />
          <AboutSection />
        </main>
      </div>

      {/* STICKY CURTAIN REVEAL FOOTER WITH KINETIC TYPOGRAPHY */}
      <div className="sticky bottom-0 z-0 bg-black min-h-[50vh] flex flex-col justify-end">
        <ContactSection />
      </div>
    </div>
  );
}
