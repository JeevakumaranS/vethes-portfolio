'use client';

import { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { NavigationOverlay } from '@/components/NavigationOverlay';
import { ContactSection } from '@/components/ContactSection';
import { AboutSection } from '@/components/AboutSection';
import { SelectedWorksSection } from '@/components/SelectedWorksSection';

export default function Home() {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  useEffect(() => {
    const scrollToHash = () => {
      const sectionId = window.location.hash.slice(1);
      if (!sectionId) return;

      let retries = 10;
      const attemptScroll = () => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        } else if (retries > 0) {
          retries -= 1;
          setTimeout(attemptScroll, 60);
        }
      };

      attemptScroll();
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

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
      <div className="relative z-10 bg-black shadow-2xl mb-0">
        <main className="w-full bg-black">
          <SelectedWorksSection />
          <AboutSection />
        </main>
      </div>

      {/* STICKY CURTAIN REVEAL FOOTER WITH KINETIC TYPOGRAPHY */}
      <div className="sticky bottom-0 z-0 bg-black min-h-[50vh] flex flex-col justify-end">
        <ContactSection showHeading={false} compact />
      </div>
    </div>
  );
}
