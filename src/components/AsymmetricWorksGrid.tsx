'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { Project } from '@/types/portfolio';

interface AsymmetricWorksGridProps {
  projects: Project[];
  onOpenModal: (project: Project) => void;
}

interface WorkCardProps {
  project: Project;
  isLarge?: boolean;
  index: number;
  onOpenModal: (project: Project) => void;
}

const WorkCard: React.FC<WorkCardProps> = ({
  project,
  isLarge = false,
  index,
  onOpenModal,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleTouchStart = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }, 3500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,
        delay: Math.min((index % 3) * 0.1, 0.25),
        ease: 'easeOut',
      }}
      className={`w-full ${isLarge ? 'h-full flex flex-col' : ''}`}
    >
      <Link
        href={`/project/${project.id}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-label={`View ${project.title}`}
        className={`video-card flex flex-col group cursor-pointer w-full transition-all duration-300 block focus:outline-none ${
          isLarge ? 'h-full' : ''
        }`}
      >
        {/* Media Frame with Elegant Rounded Corners - Borderless */}
        <div
          className={`relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-charcoal-900 border-0 outline-none ${
            isLarge
              ? 'aspect-[16/10] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-full'
              : 'aspect-[16/10]'
          }`}
        >
          <div className="media-preview-container w-full h-full relative">
            <video
              ref={videoRef}
              className="hover-video absolute inset-0 w-full h-full object-cover"
              loop
              muted
              playsInline
              preload="metadata"
              poster={project.poster}
            >
              <source src={project.videoSrc} type="video/mp4" />
            </video>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${project.poster}')` }}
            />
          </div>

          {/* Vignette Overlay (Fades in slowly on hover) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />

          {/* Minimalist Play Icon Overlay (Reveals on hover) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:bg-white">
              <Play className="w-5 h-5 ml-0.5 fill-current" />
            </div>
          </div>

          {/* Hidden by default, reveals on hover with smooth slow slide-up animation */}
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-4 pointer-events-none flex items-baseline justify-between opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <div>
              <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-white drop-shadow-md">
                {project.title}
              </p>
              <p className="text-[10px] sm:text-xs text-silver-300 font-light mt-0.5 drop-shadow">
                {project.subtitle}
              </p>
            </div>
            <span className="text-[9px] sm:text-[10px] tracking-wider text-silver-400 font-mono uppercase bg-black/60 px-2 py-0.5 rounded border border-white/10">
              {project.duration}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export const AsymmetricWorksGrid: React.FC<AsymmetricWorksGridProps> = ({
  projects,
  onOpenModal,
}) => {
  // Block 1: 2 stacked on left, 1 large on right
  const block1Left = projects.slice(0, 2);
  const block1Right = projects[2];

  // Block 2: 1 large on left, 2 stacked on right
  const block2Left = projects[3];
  const block2Right = projects.slice(4, 6);

  // Block 3: Additional works
  const remaining = projects.slice(6);

  return (
    <section
      id="selected-works"
      className="w-full pt-16 sm:pt-24 lg:pt-32 pb-20 sm:pb-28 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto select-none"
    >
      <div className="flex flex-col gap-8 sm:gap-12 lg:gap-14">
        {/* BLOCK 1:
            Left Column: 2 Stacked Cards
            Right Column: 1 Dominant Card spanning the combined height */}
        {block1Right && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 lg:gap-8 items-stretch">
            {/* Left 4 Columns: 2 Stacked Cards */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-5 sm:gap-7 lg:gap-8 justify-between">
              {block1Left.map((p, idx) => (
                <WorkCard
                  key={p.id}
                  project={p}
                  isLarge={false}
                  index={idx}
                  onOpenModal={onOpenModal}
                />
              ))}
            </div>

            {/* Right 8 Columns: 1 Large Hero Card */}
            <div className="lg:col-span-7 xl:col-span-8 h-full">
              <WorkCard
                project={block1Right}
                isLarge={true}
                index={2}
                onOpenModal={onOpenModal}
              />
            </div>
          </div>
        )}

        {/* BLOCK 2:
            Left Column: 1 Large Hero Card
            Right Column: 2 Stacked Cards */}
        {block2Left && block2Right.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 lg:gap-8 items-stretch">
            {/* Left 8 Columns: 1 Large Hero Card */}
            <div className="lg:col-span-7 xl:col-span-8 h-full order-2 lg:order-1">
              <WorkCard
                project={block2Left}
                isLarge={true}
                index={3}
                onOpenModal={onOpenModal}
              />
            </div>

            {/* Right 4 Columns: 2 Stacked Cards */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-5 sm:gap-7 lg:gap-8 justify-between order-1 lg:order-2">
              {block2Right.map((p, idx) => (
                <WorkCard
                  key={p.id}
                  project={p}
                  isLarge={false}
                  index={4 + idx}
                  onOpenModal={onOpenModal}
                />
              ))}
            </div>
          </div>
        )}

        {/* BLOCK 3: Remaining Works in Asymmetric Duo */}
        {remaining.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 lg:gap-8 items-stretch">
            {remaining.map((p, idx) => (
              <div
                key={p.id}
                className={
                  idx === 0
                    ? 'lg:col-span-7 xl:col-span-7'
                    : 'lg:col-span-5 xl:col-span-5'
                }
              >
                <WorkCard
                  project={p}
                  isLarge={false}
                  index={6 + idx}
                  onOpenModal={onOpenModal}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
