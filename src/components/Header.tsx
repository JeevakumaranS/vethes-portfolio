"use client";

import React from "react";
import Link from "next/link";
import { SignatureLogo } from "@/components/SignatureLogo";

interface HeaderProps {
  navOpen: boolean;
  onToggleNav: () => void;
}

export const Header: React.FC<HeaderProps> = ({ navOpen, onToggleNav }) => {
  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-black/80 backdrop-blur-md transition-all">
      <div className="h-20 px-6 sm:px-10 lg:px-16 flex items-center justify-between w-full max-w-7xl mx-auto text-white">
        {/* Top Left: Signature Brand Mark (Pure White) */}
        <Link
          href="/"
          className="text-white hover:opacity-80 transition-opacity flex items-center"
          aria-label="Vethesnan Home"
        >
          <SignatureLogo className="h-9 sm:h-11 w-auto text-white" />
        </Link>

        {/* Top Right: Desktop Navigation Links (Pure White) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-normal tracking-wide text-white">
          <Link
            href="/cinematography"
            className="text-white hover:text-white/75 transition-colors"
          >
            Cinematography
          </Link>
          <Link
            href="/color"
            className="text-white hover:text-white/75 transition-colors"
          >
            Color
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-white/75 transition-colors"
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
      </div>
    </header>
  );
};
