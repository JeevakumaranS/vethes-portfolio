"use client";

import React from "react";
import Link from "next/link";

interface NavigationOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavigationOverlay: React.FC<NavigationOverlayProps> = ({
  isOpen,
  onClose,
}) => {
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
      <div className="flex flex-col gap-6 mt-6 max-w-xl mx-auto w-full">
        <span className="text-[10px] tracking-[0.3em] uppercase text-silver-500 font-medium">
          INDEX
        </span>
        <nav className="flex flex-col gap-5">
          <Link
            href="/cinematography"
            onClick={onClose}
            className="text-2xl font-light tracking-[0.16em] uppercase text-white hover:text-silver-400 transition-colors flex items-center justify-between group"
          >
            <span>CINEMATOGRAPHY</span>
            <span className="text-xs text-silver-600 group-hover:text-white transition-colors">
              01
            </span>
          </Link>
          <Link
            href="/color"
            onClick={onClose}
            className="text-2xl font-light tracking-[0.16em] uppercase text-silver-300 hover:text-white transition-colors flex items-center justify-between group"
          >
            <span>COLOR</span>
            <span className="text-xs text-silver-600 group-hover:text-white transition-colors">
              02
            </span>
          </Link>
          <Link
            href="/about"
            onClick={onClose}
            className="text-2xl font-light tracking-[0.16em] uppercase text-silver-300 hover:text-white transition-colors flex items-center justify-between group"
          >
            <span>ABOUT</span>
            <span className="text-xs text-silver-600 group-hover:text-white transition-colors">
              03
            </span>
          </Link>
        </nav>
      </div>

      <div className="border-t border-white/10 pt-5 flex items-center justify-between text-silver-400 text-xs max-w-xl mx-auto w-full">
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
        <span className="text-[9px] tracking-[0.2em] text-silver-500 uppercase">
          PARIS / LA
        </span>
      </div>
    </div>
  );
};
