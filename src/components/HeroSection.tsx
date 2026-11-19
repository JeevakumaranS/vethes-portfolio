"use client";

import React from "react";
import { motion, type Variants } from "motion/react";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  onExploreClick?: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 35, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: "easeOut",
    },
  },
};

const scrollIndicatorVariants: Variants = {
  hidden: { opacity: 0, y: 35, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      delay: 0.85,
      ease: "easeOut",
    },
  },
};

const VethesLogoSvg: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 11.399999618530273 149.36318969726562 36.349998474121094"
    fill="#A100FF"
    className={className}
    aria-label="Vethesnan"
    role="img"
  >
    <path d="M30.05 12.85L30.05 12.45L24.10 12.45L24.10 12.85C26.25 15.10 26 17.55 24.40 22.05L17.10 42.65L8.20 19.55C6.80 15.90 6.40 14.15 7.65 12.85L7.65 12.45L0 12.45L0 12.85C1.85 15.10 3.70 18.20 5.20 22.05C6.70 25.95 15 47.45 15 47.45L18.95 47.45L17.30 43.15L24.80 22.05C26.45 17.40 27.90 15.10 30.05 12.85ZM47.85 31.30L48.95 31.30C48.95 31.30 52.05 31.30 52.50 31.30C51.80 25.25 45.95 23.20 41.70 23.40C36.20 23.70 28.35 27.45 28.60 36.10C28.80 44.35 35.45 47.75 42.35 47.75C49.45 47.75 52.60 43.05 52.90 39.50C53.30 34.95 50.70 32.05 47.85 31.30ZM39.45 24.00C44.35 23.05 48.25 26.55 48.90 30.90L32.95 30.90C33.85 27.50 36.05 24.65 39.45 24.00ZM52.45 39.60C51.95 43.50 48.20 46.45 43.90 46.65C38.80 46.85 35.05 44.55 33.20 39.30C32.35 36.90 32.20 33.95 32.85 31.30L45.80 31.30C49.60 31.30 53.05 34.40 52.45 39.60ZM74.15 38.60C73.25 42.45 71.60 46.40 68.30 46.85C64.05 47.40 62.85 44.05 62.85 39.70L62.85 23.80L68.75 23.80L68.75 23.40L57.70 23.40C60.70 23.25 64.50 20.40 64.50 16.55L60.55 16.55C60.55 18.95 60.20 23.40 55.95 23.40L55.95 23.80L58.90 23.80L58.90 38.95C58.90 44.85 61.65 47.75 66.10 47.75C71.35 47.75 73.45 43.40 74.40 38.70ZM98.70 44.15C98.50 42.30 98.05 37.05 97.50 32.20C96.90 26.20 93.40 23.40 89.35 23.40C82.85 23.40 81.10 30.20 80.50 35.80L80.50 11.40L80.10 11.40L75.40 12.45C75.40 12.45 75.40 12.75 75.40 12.85C76.40 13.00 76.55 13.50 76.55 15.25L76.55 44.15C76.55 45.90 76.20 46.65 75.40 47.10C75.40 47.20 75.40 47.45 75.40 47.45L81.60 47.45C81.60 47.45 81.60 47.20 81.60 47.10C80.85 46.65 80.50 45.90 80.50 44.15L80.50 40.05C80.50 35.85 81.50 25.40 87.10 24.30C91.40 23.45 93.25 27.70 93.65 31.45C93.90 34.05 94.60 42.50 94.80 44.15C94.95 45.80 94.70 46.65 93.95 47.10C93.95 47.20 93.95 47.45 93.95 47.45L100.10 47.45C100.10 47.45 100.10 47.20 100.10 47.10C99.35 46.65 98.90 45.95 98.70 44.15ZM121.90 31.30L123.00 31.30C123.00 31.30 126.10 31.30 126.55 31.30C125.85 25.25 120.00 23.20 115.75 23.40C110.25 23.70 102.40 27.45 102.65 36.10C102.85 44.35 109.50 47.75 116.40 47.75C123.50 47.75 126.65 43.05 126.95 39.50C127.35 34.95 124.75 32.05 121.90 31.30ZM113.50 24.00C118.40 23.05 122.30 26.55 122.95 30.90L107.00 30.90C107.90 27.50 110.10 24.65 113.50 24.00ZM126.50 39.60C126.00 43.50 122.25 46.45 117.95 46.65C112.85 46.85 109.10 44.55 107.25 39.30C106.40 36.90 106.25 33.95 106.90 31.30L119.85 31.30C123.65 31.30 127.10 34.40 126.50 39.60ZM140.15 23.40C134.70 23.40 132.90 26.35 132.50 29.60C131.30 39.40 148.75 36.50 147.80 43.05C147.50 45.20 144.80 47.05 141.20 47.05C136.75 47.05 133 42.90 131.30 39.40L131.05 39.40L130 44.40C132.70 46.40 135.70 47.75 139.75 47.75C145.35 47.75 149.05 44.80 149.35 40.85C149.90 32.70 133.05 34.50 133.75 27.80C134 25.75 135.90 23.85 139.30 23.85C142.15 23.85 145.35 26.95 146.90 31.20L147.15 31.20L148.15 26.60C146.15 25.05 142.75 23.40 140.15 23.40Z" />
  </svg>
);

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  const handleScrollDown = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const target = document.querySelector("#selected-works");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between items-center text-center px-6 sm:px-10 lg:px-16 xl:px-20 pt-36 sm:pt-40 md:pt-44 pb-16 sm:pb-20 bg-black select-none overflow-hidden">
      {/* Spacer to balance vertical alignment */}
      <div className="hidden sm:block h-6" />

      {/* Main Hero Centerpiece with Staggered Entrance */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="my-auto max-w-5xl mx-auto flex flex-col items-center justify-center"
      >
        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="flex flex-row items-center justify-center gap-3 sm:gap-5 md:gap-7 whitespace-nowrap leading-none"
        >
          <span className="translate-y-5 translate-x-5 font-sans font-light tracking-wide text-white text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Directed by
          </span>
          <VethesLogoSvg className="h-7 sm:h-12 md:h-14 lg:h-16 xl:h-20 w-auto text-[#A100FF] shrink-0" />
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="mt-6 sm:mt-8 md:mt-10 text-xs sm:text-sm md:text-base font-light text-silver-300 tracking-[0.03em] max-w-xl mx-auto leading-relaxed px-4"
        >
          Crafting emotionally resonant stories with atmospheric storytelling.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={scrollIndicatorVariants}
        className="pt-8 flex flex-col items-center"
      >
        <button
          type="button"
          onClick={handleScrollDown}
          aria-label="Scroll to selected works"
          className="group flex flex-col items-center gap-2 text-[#A100FF] hover:opacity-80 transition-opacity cursor-pointer"
        >
          <span className="text-[9px] tracking-[0.28em] uppercase font-medium text-[#A100FF]">
            SCROLL
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#A100FF]" />
        </button>
      </motion.div>
    </section>
  );
};
