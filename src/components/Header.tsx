"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { SignatureLogo } from "@/components/SignatureLogo";

interface HeaderProps {
  navOpen: boolean;
  onToggleNav: () => void;
}

export const Header: React.FC<HeaderProps> = ({ navOpen, onToggleNav }) => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const handleSelectedWorksClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    const target = document.getElementById("selected-works");
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleAboutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById("about");
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-black/80 backdrop-blur-md transition-all">
      <motion.div
        initial={{ opacity: 0, y: -20, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="h-20 px-6 sm:px-10 lg:px-16 xl:px-20 flex items-center justify-between w-full max-w-[1440px] mx-auto text-white"
      >
        {/* Top Left: Signature Brand Mark (Pure White) */}
        <Link
          href="/"
          className="text-white hover:opacity-80 transition-opacity flex items-center"
          aria-label="Vethesnan Home"
        >
          <SignatureLogo className="h-9 sm:h-11 w-auto text-white" />
        </Link>

        {/* Top Right: Desktop Navigation Links (Pure White) */}
        <nav
          className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-normal tracking-wide text-white"
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <Link
            href="/#selected-works"
            onClick={handleSelectedWorksClick}
            onMouseEnter={() => setHoveredCategory("selected-works")}
            className={`text-white transition-opacity duration-200 ease-in-out ${
              hoveredCategory && hoveredCategory !== "selected-works"
                ? "opacity-35"
                : "opacity-100"
            }`}
          >
            Selected Works
          </Link>
          <Link
            href="/#about"
            onClick={handleAboutClick}
            onMouseEnter={() => setHoveredCategory("about")}
            className={`text-white transition-opacity duration-200 ease-in-out ${
              hoveredCategory && hoveredCategory !== "about"
                ? "opacity-35"
                : "opacity-100"
            }`}
          >
            About
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button (Pure White) */}
        <button
          id="menu-toggle-btn"
          type="button"
          aria-label={
            navOpen ? "Close Navigation Menu" : "Open Navigation Menu"
          }
          aria-expanded={navOpen}
          onClick={onToggleNav}
          className="md:hidden w-10 h-10 rounded-full border border-white/30 flex flex-col items-center justify-center gap-1.5 text-white hover:border-white transition-all bg-charcoal-900/60 active:scale-95 cursor-pointer"
        >
          <span
            className={`w-4 h-[1.5px] bg-white transition-all duration-300 ${
              navOpen ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`w-4 h-[1.5px] bg-white transition-opacity duration-300 ${
              navOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-4 h-[1.5px] bg-white transition-all duration-300 ${
              navOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </motion.div>
    </header>
  );
};
