"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import type { Project } from "@/types/portfolio";

interface VideoCardProps {
  project: Project;
  index: number;
}

interface RollingTextProps {
  text: string;
  className?: string;
  delayClass?: string;
}

const RollingText: React.FC<RollingTextProps> = ({
  text,
  className = "",
  delayClass = "",
}) => {
  return (
    <span className="overflow-hidden relative inline-flex flex-col h-[1.35em] leading-[1.35em] align-middle">
      <span
        className={`flex flex-col transition-transform duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1/2 ${delayClass}`}
      >
        <span className={`block leading-[1.35em] ${className}`}>{text}</span>
        <span
          className={`block leading-[1.35em] ${className}`}
          aria-hidden="true"
        >
          {text}
        </span>
      </span>
    </span>
  );
};

export const VideoCard: React.FC<VideoCardProps> = ({
  project,
  index,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
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
    <motion.article
      initial={{ opacity: 0, y: 35, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.85,
        delay: Math.min((index % 4) * 0.15, 0.45),
        ease: "easeOut",
      }}
      className="project-card video-card flex flex-col group cursor-pointer transition-all duration-300 w-full"
    >
      <Link
        href={`/project/${project.id}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="block w-full focus:outline-none"
        aria-label={`View ${project.title}`}
      >
        {/* Media Frame (No Zoom on hover) */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-charcoal-900 border-0 outline-none">
          <div className="media-preview-container w-full h-full relative">
            {project.videoSrc && (
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
            )}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${project.poster}')` }}
            />
          </div>

          {/* Subtle Vignette on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />

          {/* Minimalist Play Icon Overlay on Hover */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:bg-white">
              <Play className="w-5 h-5 ml-0.5 fill-current" />
            </div>
          </div>
        </div>

        {/* Text Placed Apart From Image with Smooth Rolling Text Transition on Hover */}
        <div className="mt-3.5 flex flex-col gap-0.5 px-0.5 select-none">
          {/* Title and Duration Row (Rolling transition matching user reference video) */}
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-silver-100 group-hover:text-white transition-colors duration-300">
              <RollingText text={project.title} className="text-white" />
            </h3>
            {project.duration && (
              <span className="text-[10px] sm:text-[11px] tracking-wider text-silver-500 font-mono uppercase">
                <RollingText
                  text={project.duration}
                  className="text-silver-400"
                  delayClass="delay-100"
                />
              </span>
            )}
          </div>

          {/* Subtitle and Year Row (Staggered rolling transition) */}
          <div className="flex items-center justify-between text-[11px] sm:text-xs text-silver-400 font-light">
            <p className="line-clamp-1">
              <RollingText
                text={project.subtitle}
                className="text-silver-400 group-hover:text-silver-300"
                delayClass="delay-100"
              />
            </p>
            {project.year && (
              <span className="text-[10px] tracking-widest text-silver-500 font-mono uppercase ml-2">
                <RollingText
                  text={project.year}
                  className="text-silver-500"
                  delayClass="delay-150"
                />
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
};
