'use client';

import React, { useState, useEffect, useRef } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { NavigationOverlay } from '@/components/NavigationOverlay';
import { ContactSection } from '@/components/ContactSection';
import { PROJECTS } from '@/data/projects';

interface ProjectDetailClientProps {
  id: string;
}

export function ProjectDetailClient({ id }: ProjectDetailClientProps) {
  const [navOpen, setNavOpen] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Find next project for continuation
  const currentIndex = PROJECTS.findIndex((p) => p.id === id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  // Set the viewport view directly on the video player when opening the page
  useEffect(() => {
    const scrollToVideo = () => {
      if (videoContainerRef.current) {
        videoContainerRef.current.scrollIntoView({
          behavior: 'instant',
          block: 'center',
        });
      }
    };

    scrollToVideo();
    // Re-check after paint/hydration to ensure view stays centered on the video
    const frameId = requestAnimationFrame(() => {
      scrollToVideo();
    });
    const timer = setTimeout(scrollToVideo, 80);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timer);
    };
  }, [id]);

  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-red-500 selection:text-white">
      {/* Top Navigation Bar */}
      <Header
        navOpen={navOpen}
        onToggleNav={() => setNavOpen((prev) => !prev)}
      />
      <NavigationOverlay isOpen={navOpen} onClose={() => setNavOpen(false)} />

      <main className="w-full bg-black pb-28 pt-20 sm:pt-24">
        {/* Center Top Heading (Matching User's Reference Screenshot) */}
        <div className="pt-4 sm:pt-6 pb-4 sm:pb-6 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-base sm:text-xl md:text-2xl font-normal tracking-wide text-red-500 uppercase leading-snug">
            {project.title} - {project.subtitle} {project.year ? `(${project.year})` : ''}
          </h1>

          {/* Minimal Center Divider Line / Dash (Matching Screenshot) */}
          <div className="w-6 h-[1.5px] bg-red-500 mx-auto mt-2" />

          {project.camera && (
            <p className="mt-2.5 text-[11px] sm:text-xs tracking-widest text-silver-400 uppercase font-mono">
              {project.camera}
            </p>
          )}
        </div>

        {/* Center Featured Video Player (Focal Point on Page Open) */}
        <div
          ref={videoContainerRef}
          id="project-video"
          className="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24"
        >
          <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden bg-charcoal-900 shadow-2xl border border-white/5">
            <video
              controls
              playsInline
              preload="metadata"
              poster={project.poster}
              className="w-full h-full object-cover"
            >
              <source src={project.videoSrc} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </div>
        </div>

        {/* Curated Film Stills Grid (Matching 3-Column Screenshot) */}
        {project.stills && project.stills.length > 0 && (
          <div className="mt-10 sm:mt-16 lg:mt-20 max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3.5">
              {project.stills.map((stillUrl, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[16/10] overflow-hidden rounded-sm bg-charcoal-900 group"
                >
                  <img
                    src={stillUrl}
                    alt={`${project.title} film frame ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next Project Footer Link */}
        {nextProject && (
          <div className="mt-24 sm:mt-32 text-center px-4 max-w-md mx-auto">
            <span className="text-[10px] tracking-widest text-silver-500 uppercase block mb-2 font-mono">
              Next Project
            </span>
            <Link
              href={`/project/${nextProject.id}`}
              className="group inline-flex flex-col items-center gap-1"
            >
              <span className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white group-hover:text-red-500 transition-colors">
                {nextProject.title}
              </span>
              <span className="text-xs text-silver-400 font-light">
                {nextProject.subtitle}
              </span>
            </Link>
          </div>
        )}
      </main>

      {/* Sticky Curtain Footer */}
      <ContactSection />
    </div>
  );
}
