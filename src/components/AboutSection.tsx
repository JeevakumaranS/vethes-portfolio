"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { Mail, Phone, Video } from "lucide-react";

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
      className="w-full px-8 sm:px-12 lg:px-20 xl:px-30 pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 scroll-mt-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        className="mx-auto w-full max-w-[1440px]"
      >
        {/* 2-Column Grid */}
        <div className="grid items-start gap-10 sm:gap-12 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-16 xl:gap-20">
          {/* Left Column: Portrait Photo with Double Frame */}
          <motion.div
            variants={itemVariants}
            className="relative mx-auto w-full max-w-[320px] sm:max-w-[350px] lg:mx-0"
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
            </div>
          </motion.div>

          {/* Right Column: Statement & Story */}
          <div className="flex flex-col justify-start pt-1 lg:pt-2">
            <h2
              id="about-title"
              className="text-2xl font-bold leading-tight tracking-wide text-white sm:text-3xl lg:text-4xl"
            >
              I&apos;m Vethesnan
            </h2>

            <div className="space-y-6 pt-4 text-base font-light leading-relaxed text-silver-200 sm:pt-6 sm:text-lg sm:leading-8 lg:pt-8 lg:text-xl lg:leading-9">
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

            {/* Contact Details (Email, Phone, Vimeo) */}
            <motion.div
              variants={itemVariants}
              className="mt-10 sm:mt-12 grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-[1.3fr_1fr_1fr] border-t border-white/10 pt-8"
            >
              {/* Email */}
              <a
                href="mailto:vethesapoxi@gmail.com"
                className="group relative isolate overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 before:pointer-events-none before:absolute before:inset-0 before:translate-x-[-100%] before:bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.04)_40%,rgba(255,255,255,0.24)_50%,rgba(255,255,255,0.04)_60%,transparent_100%)] before:transition-transform before:duration-700 before:ease-[cubic-bezier(0.16,1,0.3,1)] before:content-[''] hover:border-white/30 hover:bg-white/[0.05] hover:before:translate-x-[100%] focus-visible:before:translate-x-[100%]"
              >
                <div className="flex items-center gap-2 text-[#A100FF]">
                  <Mail className="h-4 w-4" />
                  <span className="text-[10px] font-mono tracking-widest uppercase">
                    Email
                  </span>
                </div>
                <p className="mt-2 text-xs sm:text-[13px] md:text-sm font-medium tracking-tight sm:tracking-normal text-white group-hover:text-[#A100FF] transition-colors whitespace-nowrap">
                  vethesapoxi@gmail.com
                </p>
              </a>

              {/* Phone */}
              <a
                href="tel:7339566984"
                className="group relative isolate overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 before:pointer-events-none before:absolute before:inset-0 before:translate-x-[-100%] before:bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.04)_40%,rgba(255,255,255,0.24)_50%,rgba(255,255,255,0.04)_60%,transparent_100%)] before:transition-transform before:duration-700 before:ease-[cubic-bezier(0.16,1,0.3,1)] before:content-[''] hover:border-white/30 hover:bg-white/[0.05] hover:before:translate-x-[100%] focus-visible:before:translate-x-[100%]"
              >
                <div className="flex items-center gap-2 text-[#A100FF]">
                  <Phone className="h-4 w-4" />
                  <span className="text-[10px] font-mono tracking-widest uppercase">
                    Phone
                  </span>
                </div>
                <p className="mt-2 text-xs sm:text-[13px] md:text-sm font-medium tracking-tight sm:tracking-normal text-white group-hover:text-[#A100FF] transition-colors whitespace-nowrap">
                  7339566984
                </p>
              </a>

              {/* Vimeo */}
              <a
                href="https://vimeo.com/vethesnan?fl=pp&fe=sh"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative isolate overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 before:pointer-events-none before:absolute before:inset-0 before:translate-x-[-100%] before:bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.04)_40%,rgba(255,255,255,0.24)_50%,rgba(255,255,255,0.04)_60%,transparent_100%)] before:transition-transform before:duration-700 before:ease-[cubic-bezier(0.16,1,0.3,1)] before:content-[''] hover:border-white/30 hover:bg-white/[0.05] hover:before:translate-x-[100%] focus-visible:before:translate-x-[100%]"
              >
                <div className="flex items-center gap-2 text-[#A100FF]">
                  <Video className="h-4 w-4" />
                  <span className="text-[10px] font-mono tracking-widest uppercase">
                    Vimeo
                  </span>
                </div>
                <p className="mt-2 text-xs sm:text-[13px] md:text-sm font-medium tracking-tight sm:tracking-normal text-white group-hover:text-[#A100FF] transition-colors whitespace-nowrap">
                  vimeo.com/vethesnan
                </p>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
