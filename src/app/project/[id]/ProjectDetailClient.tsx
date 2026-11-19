'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Header } from '@/components/Header';
import { NavigationOverlay } from '@/components/NavigationOverlay';
import { ContactSection } from '@/components/ContactSection';
import { PROJECTS } from '@/data/projects';

interface ProjectDetailClientProps {
  id: string;
}

export function ProjectDetailClient({ id }: ProjectDetailClientProps) {
  const [navOpen, setNavOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Find next project for continuation
  const currentIndex = PROJECTS.findIndex((p) => p.id === id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

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
        <motion.div
          initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="pt-4 sm:pt-6 pb-4 sm:pb-6 text-center px-4 max-w-4xl mx-auto"
        >
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

          {!project.description && (
            <>
              <button
                type="button"
                aria-expanded={detailsOpen}
                aria-controls="project-details"
                onClick={() => setDetailsOpen((previous) => !previous)}
                className="mt-4 rounded-full border border-white/30 px-4 py-2 text-[10px] tracking-[0.2em] text-silver-300 uppercase transition-colors hover:border-white hover:text-white"
              >
                {detailsOpen ? 'Hide Details' : 'Details'}
              </button>

              {detailsOpen && (
                <div
                  id="project-details"
                  className="mx-auto mt-4 max-w-xl rounded border border-white/10 bg-white/[0.03] p-4 text-left"
                >
                  <dl className="grid grid-cols-2 gap-x-8 gap-y-3 text-xs sm:text-sm">
                    <div>
                      <dt className="text-[9px] tracking-[0.2em] text-silver-500 uppercase">
                        Category
                      </dt>
                      <dd className="mt-1 text-silver-200 capitalize">
                        {project.category.replace('-', ' ')}
                      </dd>
                    </div>
                    {project.subtitle && (
                      <div>
                        <dt className="text-[9px] tracking-[0.2em] text-silver-500 uppercase">
                          Type
                        </dt>
                        <dd className="mt-1 text-silver-200">
                          {project.subtitle}
                        </dd>
                      </div>
                    )}
                    {project.year && (
                      <div>
                        <dt className="text-[9px] tracking-[0.2em] text-silver-500 uppercase">
                          Year
                        </dt>
                        <dd className="mt-1 text-silver-200">{project.year}</dd>
                      </div>
                    )}
                    {project.role && (
                      <div>
                        <dt className="text-[9px] tracking-[0.2em] text-silver-500 uppercase">
                          Role
                        </dt>
                        <dd className="mt-1 text-silver-200">{project.role}</dd>
                      </div>
                    )}
                    {project.camera && (
                      <div className="col-span-2">
                        <dt className="text-[9px] tracking-[0.2em] text-silver-500 uppercase">
                          Camera
                        </dt>
                        <dd className="mt-1 text-silver-200">
                          {project.camera}
                        </dd>
                      </div>
                    )}
                    {project.description && (
                      <div className="col-span-2">
                        <dt className="text-[9px] tracking-[0.2em] text-silver-500 uppercase">
                          About
                        </dt>
                        <dd className="mt-1 leading-relaxed text-silver-200">
                          {project.description}
                        </dd>
                      </div>
                    )}
                    {project.client && (
                      <div>
                        <dt className="text-[9px] tracking-[0.2em] text-silver-500 uppercase">
                          Client
                        </dt>
                        <dd className="mt-1 text-silver-200">
                          {project.client}
                        </dd>
                      </div>
                    )}
                    {project.brand && (
                      <div>
                        <dt className="text-[9px] tracking-[0.2em] text-silver-500 uppercase">
                          Brand
                        </dt>
                        <dd className="mt-1 text-silver-200">
                          {project.brand}
                        </dd>
                      </div>
                    )}
                    {project.project && (
                      <div>
                        <dt className="text-[9px] tracking-[0.2em] text-silver-500 uppercase">
                          Project
                        </dt>
                        <dd className="mt-1 text-silver-200">
                          {project.project}
                        </dd>
                      </div>
                    )}
                    {project.production && (
                      <div>
                        <dt className="text-[9px] tracking-[0.2em] text-silver-500 uppercase">
                          Production
                        </dt>
                        <dd className="mt-1 text-silver-200">
                          {project.production}
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              )}
            </>
          )}
        </motion.div>

        {/* Featured Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.85, delay: 0.18, ease: 'easeOut' }}
          id="project-video"
          className="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24"
        >
          <div
            style={
              project.videoOrientation === 'landscape'
                ? {
                    width:
                      'min(100%, calc(177.78svh - 355.56px))',
                  }
                : undefined
            }
            className={`relative w-full overflow-hidden rounded-sm bg-charcoal-900 shadow-2xl border border-white/5 ${
              project.embedUrl && project.videoOrientation !== 'landscape'
                ? 'mx-auto aspect-[9/16] max-w-[500px]'
                : 'mx-auto aspect-[16/9]'
            }`}
          >
            {project.embedUrl ? (
              <iframe
                src={project.embedUrl}
                title={project.title}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="h-full w-full border-0"
              />
            ) : project.videoSrc ? (
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
            ) : (
              <p role="alert" className="p-6 text-center text-silver-300">
                This project does not have a playable video source.
              </p>
            )}
          </div>
        </motion.div>

        {/* Curated Film Stills Grid (Matching 3-Column Screenshot) */}
        {project.stills && project.stills.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className={`${
              project.description
                ? 'mt-16 sm:mt-24 lg:mt-28'
                : 'mt-10 sm:mt-16 lg:mt-20'
            } mx-auto max-w-5xl px-4 sm:px-6 lg:max-w-6xl lg:px-8`}
          >
            <div
              className={`grid grid-cols-2 ${
                project.description ? 'gap-4 sm:gap-6' : 'gap-0'
              }`}
            >
              {project.stills.map((stillUrl, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[4/3] overflow-hidden bg-charcoal-900"
                >
                  <img
                    src={stillUrl}
                    alt={`${project.title} film frame ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {project.description && (
          <motion.section
            initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="mx-auto mt-12 max-w-5xl px-4 sm:mt-16 sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-3xl">
              {project.descriptionHeading && (
                <h2 className="mb-4 text-lg font-bold tracking-wide text-white sm:text-xl">
                  {project.descriptionHeading}
                </h2>
              )}
              {project.description && (
                <p className="text-sm leading-7 text-silver-300 sm:text-base sm:leading-8">
                  {project.description}
                </p>
              )}
              <dl className="mt-8 grid gap-5 border-t border-white/10 pt-6 text-sm sm:grid-cols-3">
                {project.client && (
                  <div>
                    <dt className="text-[10px] tracking-[0.2em] text-silver-500 uppercase">
                      Client
                    </dt>
                    <dd className="mt-2 text-silver-200">{project.client}</dd>
                  </div>
                )}
                {project.brand && (
                  <div>
                    <dt className="text-[10px] tracking-[0.2em] text-silver-500 uppercase">
                      Brand
                    </dt>
                    <dd className="mt-2 text-silver-200">{project.brand}</dd>
                  </div>
                )}
                {project.project && (
                  <div>
                    <dt className="text-[10px] tracking-[0.2em] text-silver-500 uppercase">
                      Project
                    </dt>
                    <dd className="mt-2 text-silver-200">{project.project}</dd>
                  </div>
                )}
                {project.production && (
                  <div>
                    <dt className="text-[10px] tracking-[0.2em] text-silver-500 uppercase">
                      Production
                    </dt>
                    <dd className="mt-2 text-silver-200">{project.production}</dd>
                  </div>
                )}
                {project.role && (
                  <div>
                    <dt className="text-[10px] tracking-[0.2em] text-silver-500 uppercase">
                      My Role
                    </dt>
                    <dd className="mt-2 text-silver-200">{project.role}</dd>
                  </div>
                )}
              </dl>
            </div>
          </motion.section>
        )}

        {/* Next Project */}
        {nextProject && (
          <section className="mx-auto mt-24 max-w-5xl px-4 sm:mt-32 sm:px-6 lg:px-8">
            <Link
              href={`/project/${nextProject.id}`}
              className="group relative flex min-h-64 items-end overflow-hidden border border-white/15 bg-charcoal-900 p-6 sm:min-h-80 sm:p-10"
            >
              <div
                aria-hidden="true"
                style={{ backgroundImage: `url("${nextProject.poster}")` }}
                className="absolute inset-0 bg-cover bg-center opacity-55 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/20" />
              <div className="relative z-10">
                <span className="mb-3 block text-xs font-mono tracking-[0.25em] text-red-400 uppercase">
                  Next Project
                </span>
                <span className="block text-3xl font-bold tracking-wide text-white uppercase transition-colors group-hover:text-red-400 sm:text-5xl">
                  {nextProject.title}
                </span>
                <span className="mt-2 block text-base text-silver-200 sm:text-lg">
                  {nextProject.subtitle}
                </span>
                <span className="mt-6 inline-block border-b border-white/50 pb-1 text-xs tracking-[0.2em] text-white uppercase">
                  View Project
                </span>
              </div>
            </Link>
          </section>
        )}
      </main>

      {/* Sticky Curtain Footer */}
      <ContactSection showHeading={false} />
    </div>
  );
}
