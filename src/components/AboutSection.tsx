"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { Mail, Phone } from "lucide-react";

const InstagramIcon: React.FC<{ className?: string }> = ({
  className = "h-4 w-4",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.1,
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

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-24 sm:py-32 lg:py-40 scroll-mt-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        className="mx-auto w-full max-w-[1440px]"
      >
        {/* 2-Column Grid */}
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16 xl:gap-24">
          {/* Left Column: Portrait Photo with Double Frame */}
          <motion.div
            variants={itemVariants}
            className="relative mx-auto w-full max-w-[520px] lg:mx-0"
          >
            {/* Architectural Offset Border */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 hidden h-full w-full rounded-2xl border border-white/15 sm:block"
            />

            {/* Main Portrait Card */}
            <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 bg-charcoal-900 shadow-2xl">
              <Image
                src="/photo.jpeg"
                alt="Vethesnan — Filmmaker & Cinematographer"
                fill
                sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 45vw, 520px"
                className="object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />

              {/* Gradient Vignette & Caption */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent p-6 pt-24 sm:p-8 flex flex-col justify-end">
                <p className="text-xl sm:text-2xl font-bold tracking-wider text-white uppercase">
                  Vethesnan
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Statement & Story */}
          <div className="flex flex-col justify-center lg:pt-2">
            <motion.h2
              id="about-title"
              variants={itemVariants}
              className="text-[clamp(2.5rem,5.2vw,4.8rem)] font-bold leading-[0.98] tracking-[-0.04em] text-silver-100 uppercase"
            ></motion.h2>

            <div className="mt-8 space-y-6 text-base font-light leading-relaxed text-silver-200 sm:mt-10 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
              <motion.p variants={itemVariants}>
                A filmmaker driven by curiosity and a passion for visual
                storytelling. Working across cinematography, editing and colour
                grading, I bring ideas to life through thoughtfully crafted
                visuals.
              </motion.p>

              <motion.p variants={itemVariants} className="text-silver-400">
                From commercial projects to independent creative work, I enjoy
                exploring different ways to tell stories through the camera.
              </motion.p>
            </div>

            {/* Contact Details (Email, Phone, Instagram) */}
            <motion.div
              variants={itemVariants}
              className="mt-12 grid grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3 sm:gap-5"
            >
              {/* Email */}
              <a
                href="mailto:vethesapoxi@gmail.com"
                className="group rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05] sm:p-5"
              >
                <div className="flex items-center gap-2 text-[#A100FF]">
                  <Mail className="h-4 w-4" />
                  <span className="text-[10px] font-mono tracking-widest uppercase">
                    Email
                  </span>
                </div>
                <p className="mt-2 text-xs sm:text-sm font-medium tracking-wide text-white group-hover:text-[#A100FF] transition-colors break-all">
                  vethesapoxi@gmail.com
                </p>
              </a>

              {/* Phone */}
              <a
                href="tel:7339566984"
                className="group rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05] sm:p-5"
              >
                <div className="flex items-center gap-2 text-[#A100FF]">
                  <Phone className="h-4 w-4" />
                  <span className="text-[10px] font-mono tracking-widest uppercase">
                    Phone
                  </span>
                </div>
                <p className="mt-2 text-xs sm:text-sm font-medium tracking-wide text-white group-hover:text-[#A100FF] transition-colors">
                  7339566984
                </p>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/_vethes"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05] sm:p-5"
              >
                <div className="flex items-center gap-2 text-[#A100FF]">
                  <InstagramIcon className="h-4 w-4" />
                  <span className="text-[10px] font-mono tracking-widest uppercase">
                    Instagram
                  </span>
                </div>
                <p className="mt-2 text-xs sm:text-sm font-medium tracking-wide text-white group-hover:text-[#A100FF] transition-colors">
                  _vethes
                </p>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
