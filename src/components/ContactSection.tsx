'use client';

import React from 'react';
import { motion } from 'motion/react';

export const ContactSection: React.FC = () => {
  return (
    <footer
      id="about-inquiry"
      className="w-full bg-black text-white px-6 sm:px-10 lg:px-16 pt-24 pb-12 flex flex-col justify-between select-none"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-end">
        {/* Masked Kinetic Slide-Up Typography */}
        <div className="flex flex-col items-end w-full">
          {/* Line 1: GOT A PROJECT IN MIND? */}
          <div className="overflow-hidden w-full text-right py-1">
            <motion.h2
              initial={{ y: '110%', opacity: 0 }}
              whileInView={{ y: '0%', opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight text-white leading-none inline-block"
            >
              GOT A PROJECT IN MIND?
            </motion.h2>
          </div>

          {/* Line 2: ~ Let's talk. */}
          <div className="overflow-hidden w-full text-right py-1 mt-1 sm:mt-2">
            <motion.div
              initial={{ y: '110%', opacity: 0 }}
              whileInView={{ y: '0%', opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                delay: 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
            >
              <a
                href="mailto:inquiry@vethesnan.cinema"
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
      </div>

      {/* Footer Bottom Border & Copyright */}
      <div className="max-w-7xl mx-auto w-full mt-24 pt-6 border-t border-white/10 flex items-center justify-center text-center">
        <p className="text-xs sm:text-sm text-silver-500 font-light tracking-wider">
          &copy; 2026 VETHESNAN. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
