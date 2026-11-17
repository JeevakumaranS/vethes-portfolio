'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { FeaturedReelItem } from '@/types/portfolio';

interface FeaturedReelProps {
  reel: FeaturedReelItem;
  onOpenModal: () => void;
}

export const FeaturedReel: React.FC<FeaturedReelProps> = ({
  reel,
  onOpenModal,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Gracefully ignore browser auto-play policy rejections
        });
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
    <motion.section
      initial={{ opacity: 0, y: 50, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="px-5 pb-8 max-w-5xl mx-auto w-full"
    >
      <div
        className="video-card relative w-full rounded-lg overflow-hidden bg-charcoal-900 border border-white/10 group cursor-pointer transition-all duration-300"
        onClick={onOpenModal}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenModal();
          }
        }}
        aria-label={`Play ${reel.title}`}
      >
        <div className="aspect-[2.39/1] w-full relative overflow-hidden">
          {/* Video Player + Poster Image */}
          <div className="media-preview-container w-full h-full relative">
            <video
              ref={videoRef}
              className="hover-video absolute inset-0 w-full h-full object-cover"
              loop
              muted
              playsInline
              preload="metadata"
              poster={reel.poster}
            >
              <source src={reel.videoSrc} type="video/mp4" />
            </video>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${reel.poster}')` }}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent pointer-events-none" />

          {/* Center Minimalist Play Button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
              <Play className="w-5 h-5 ml-0.5 fill-current" />
            </div>
          </div>

          {/* Bottom Overlay Info */}
          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between pointer-events-none">
            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-silver-400 font-medium">
                {reel.tag}
              </p>
              <h2 className="text-sm font-medium uppercase tracking-wider text-white mt-0.5">
                {reel.title}
              </h2>
            </div>
            <span className="text-[9px] tracking-wider text-white/80 font-mono uppercase bg-black/60 px-2 py-0.5 rounded border border-white/10">
              {reel.badge}
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

