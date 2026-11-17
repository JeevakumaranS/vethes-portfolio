'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Header } from '@/components/Header';
import { NavigationOverlay } from '@/components/NavigationOverlay';
import { ContactSection } from '@/components/ContactSection';

export default function AboutPage() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-black">
      <Header
        navOpen={navOpen}
        onToggleNav={() => setNavOpen((previous) => !previous)}
      />
      <NavigationOverlay
        isOpen={navOpen}
        onClose={() => setNavOpen(false)}
      />

      <main>
        <section
          aria-labelledby="about-title"
          className="w-full px-5 sm:px-7 pt-32 sm:pt-44 lg:pt-64 pb-20"
        >
          <div className="mx-auto w-full max-w-[1680px]">
            <motion.h1
              id="about-title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="text-[clamp(4rem,10vw,10rem)] leading-[0.9] font-bold tracking-[-0.045em] text-silver-200 uppercase"
            >
              About
            </motion.h1>

            <div className="mx-auto mt-24 grid w-full max-w-[1370px] grid-cols-1 items-start gap-10 md:mt-32 md:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)] md:gap-10 lg:grid-cols-[minmax(0,392px)_minmax(0,1fr)] lg:gap-[196px] lg:pl-[65px]">
              <div className="w-full max-w-[400px]">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-charcoal-900">
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&h=1250&q=85"
                    alt="Portrait of Vethesnan"
                    fill
                    sizes="(max-width: 768px) 100vw, 34vw"
                    unoptimized
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold leading-[1.08] tracking-tight text-silver-200 sm:text-3xl lg:text-4xl xl:text-[2.6rem] uppercase">
                  My goal is to evoke emotion and provoke thought with every
                  frame.
                </h2>
                <div className="mt-7 space-y-5 text-base font-light leading-relaxed text-silver-400 sm:text-lg">
                  <p>
                    I&apos;m a director and cinematographer drawn to stories that
                    explore the human experience in all its complexity and
                    depth. With each project, I strive to shed light on the
                    universal truths that connect us all, and bring to life
                    stories that often go untold.
                  </p>
                  <p>
                    Whether through powerful dramas or thought-provoking
                    documentaries, my goal is to create meaningful, impactful
                    works of art that stay with viewers long after the credits
                    have rolled.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ContactSection />
    </div>
  );
}
