'use client';

import React from 'react';
import { motion, type Variants } from 'motion/react';

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
  hidden: { opacity: 0, y: 35, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.85,
      ease: 'easeOut',
    },
  },
};

interface ContactSectionProps {
  showHeading?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  showHeading = true,
}) => {
  return (
    <footer
      id="about-inquiry"
      className="w-full bg-black text-white px-6 sm:px-10 lg:px-16 pt-24 pb-12 flex flex-col justify-between select-none"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto w-full flex flex-col items-end"
      >
        {/* Kinetic Slide-Up Typography with Hero Section Blur & Slide Transition */}
        <div className="flex flex-col items-end w-full">
          {showHeading && (
            <div className="w-full text-right py-1">
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight text-white leading-none inline-block"
              >
                GOT A PROJECT IN MIND?
              </motion.h2>
            </div>
          )}

          {/* Line 2: ~ Let's talk. */}
          <div className="w-full text-right py-1 mt-1 sm:mt-2">
            <motion.div
              variants={itemVariants}
              className="inline-block"
            >
              <a
                href="mailto:vethesapoxi@gmail.com"
                className="group font-serif italic text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white hover:text-silver-300 transition-colors inline-flex items-baseline gap-2 cursor-pointer"
              >
                <span className="not-italic font-light text-silver-400 group-hover:text-white transition-colors">
                  ~
                </span>
                <span className="underline decoration-1 underline-offset-8 decoration-white/30 group-hover:decoration-white transition-all">
                  Let&apos;s talk.
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Footer Bottom Border & Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.85,
          delay: 0.36,
          ease: 'easeOut',
        }}
        className="max-w-7xl mx-auto w-full mt-24 pt-6 border-t border-white/10 flex items-center justify-center text-center"
      >
        <p className="text-xs sm:text-sm text-silver-500 font-light tracking-wider">
          &copy; 2026 VETHESNAN. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
};
