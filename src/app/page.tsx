'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { NavigationOverlay } from '@/components/NavigationOverlay';
import { AsymmetricWorksGrid } from '@/components/AsymmetricWorksGrid';
import { ContactSection } from '@/components/ContactSection';
import { ReelModal } from '@/components/ReelModal';
import { PROJECTS, DEFAULT_MODAL_REEL } from '@/data/projects';
import { Project, ModalReelItem } from '@/types/portfolio';

export default function Home() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [activeReel, setActiveReel] = useState<ModalReelItem | null>(null);

  const handleOpenProjectModal = (project: Project) => {
    setActiveReel({
      title: project.title,
      subtitle: project.subtitle,
      duration: project.duration,
      poster: project.poster,
      videoSrc: project.videoSrc,
    });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleScrollToWorks = () => {
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
        <HeroSection onExploreClick={handleScrollToWorks} />

        {/* ASYMMETRIC WORKS GRID */}
        <main className="w-full bg-black">
          <AsymmetricWorksGrid
            projects={PROJECTS}
            onOpenModal={handleOpenProjectModal}
          />
        </main>
      </div>

      {/* STICKY CURTAIN REVEAL FOOTER WITH KINETIC TYPOGRAPHY */}
      <div className="sticky bottom-0 z-0 bg-black min-h-[50vh] flex flex-col justify-end">
        <ContactSection />
      </div>

      {/* SCREENING LIGHTBOX / REEL MODAL */}
      <ReelModal
        isOpen={modalOpen}
        reel={activeReel || DEFAULT_MODAL_REEL}
        onClose={handleCloseModal}
      />
    </div>
  );
}
