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
    <section className="relative min-h-screen w-full flex flex-col justify-between items-center text-center px-6 pt-32 pb-12 bg-black select-none overflow-hidden">
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
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] font-bold tracking-tight text-white leading-[1.05]"
        >
          Directed by &amp; EDITOR
        </motion.h1>

        {/* Location line in serif italic with separator */}
        <motion.div
          variants={itemVariants}
          className="mt-3 sm:mt-4 md:mt-5 flex items-center justify-center font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-silver-100 tracking-wide"
        >
          <span className="italic">LA</span>
          <span className="mx-3 sm:mx-4 md:mx-5 font-sans font-extralight text-silver-500 text-2xl sm:text-4xl md:text-5xl not-italic select-none opacity-80">
            |
          </span>
          <span className="italic">UT</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="mt-8 sm:mt-11 md:mt-14 text-xs sm:text-sm md:text-base font-light text-silver-300 tracking-[0.03em] max-w-xl mx-auto leading-relaxed px-4"
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
          className="group flex flex-col items-center gap-2 text-silver-500 hover:text-white transition-colors cursor-pointer"
        >
          <span className="text-[9px] tracking-[0.28em] uppercase font-medium group-hover:text-silver-300 transition-colors">
            SCROLL
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce opacity-70 group-hover:opacity-100 transition-opacity" />
        </button>
      </motion.div>
    </section>
  );
};
