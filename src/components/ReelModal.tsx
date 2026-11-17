'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { ModalReelItem } from '@/types/portfolio';

interface ReelModalProps {
  isOpen: boolean;
  reel: ModalReelItem | null;
  onClose: () => void;
}

export const ReelModal: React.FC<ReelModalProps> = ({ isOpen, reel, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !reel) return null;

  return (
    <div
      id="reel-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
      aria-describedby="project-subtitle"
    >
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        className="fixed right-4 top-4 z-[60] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/70 text-white transition-colors hover:bg-charcoal-800 sm:right-6 sm:top-6"
        aria-label="Close project"
      >
        <X className="h-5 w-5" />
      </button>

      <div
        className="flex min-h-full w-full flex-col"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="w-full px-5 pb-5 pt-20 sm:px-8 sm:pt-12 lg:px-12">
          <h2
            id="project-title"
            className="text-2xl font-bold uppercase tracking-tight text-white sm:text-4xl"
          >
            {reel.title}
          </h2>
          <p
            id="project-subtitle"
            className="mt-2 text-sm font-light text-silver-400 sm:text-base"
          >
            {reel.subtitle}
          </p>
        </header>

        <div className="relative aspect-video w-full bg-black">
          <video
            key={reel.videoSrc}
            className="h-full w-full object-contain"
            autoPlay
            muted
            controls
            playsInline
            poster={reel.poster}
            aria-label={reel.title}
          >
            <source src={reel.videoSrc} type="video/mp4" />
          </video>
        </div>

        <div
          className="mt-12 grid w-full grid-cols-2 gap-0 sm:mt-16"
          aria-hidden="true"
        >
          {[0, 1].map((imageIndex) => (
            <div
              key={imageIndex}
              className="relative aspect-[4/3] w-full overflow-hidden"
            >
              <Image
                src={reel.poster}
                alt=""
                fill
                sizes="50vw"
                unoptimized
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
