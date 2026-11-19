"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

interface NavigationOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavigationOverlay: React.FC<NavigationOverlayProps> = ({
  isOpen,
  onClose,
}) => {
  const handleSelectedWorksClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    onClose();
    const target = document.getElementById("selected-works");
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      try {
        window.history.pushState(null, "", "/#selected-works");
      } catch (_) {}
    } else {
      event.preventDefault();
      window.location.assign("/#selected-works");
    }
  };

  const handleAboutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClose();
    const target = document.getElementById("about");
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      try {
        window.history.pushState(null, "", "/#about");
      } catch (_) {}
    } else {
      event.preventDefault();
      window.location.assign("/#about");
    }
  };

  return (
    <div
      id="nav-overlay"
      className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl transition-all duration-300 ease-out flex flex-col justify-between p-7 pt-24 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <motion.div
        initial={{ opacity: 0, y: 35, filter: "blur(6px)" }}
        animate={
          isOpen
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: 35, filter: "blur(6px)" }
        }
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="flex flex-col gap-6 mt-6 max-w-xl mx-auto w-full"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-silver-500 font-medium">
          INDEX
        </span>
        <nav className="flex flex-col gap-5">
          <Link
            href="/#selected-works"
            onClick={handleSelectedWorksClick}
            className="text-2xl font-light tracking-[0.16em] uppercase text-white hover:text-silver-400 transition-colors flex items-center justify-between group"
          >
            <span>SELECTED WORKS</span>
            <span className="text-xs text-silver-600 group-hover:text-white transition-colors">
              01
            </span>
          </Link>
          <Link
            href="/#about"
            onClick={handleAboutClick}
            className="text-2xl font-light tracking-[0.16em] uppercase text-silver-300 hover:text-white transition-colors flex items-center justify-between group"
          >
            <span>ABOUT</span>
            <span className="text-xs text-silver-600 group-hover:text-white transition-colors">
              02
            </span>
          </Link>
        </nav>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
        animate={
          isOpen
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: 25, filter: "blur(6px)" }
        }
        transition={{ duration: 0.85, delay: 0.18, ease: "easeOut" }}
        className="border-t border-white/10 pt-5 flex items-center justify-between text-silver-400 text-xs max-w-xl mx-auto w-full"
      >
        <div className="flex gap-4 tracking-widest uppercase text-[10px]">
          <a
            href="https://vimeo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            VIMEO
          </a>
          <a
            href="https://imdb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            IMDB
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            INSTAGRAM
          </a>
        </div>
        <span className="text-[10px] tracking-widest text-silver-600 uppercase font-mono">
          DIRECTOR &amp; DP
        </span>
      </motion.div>
    </div>
  );
};
