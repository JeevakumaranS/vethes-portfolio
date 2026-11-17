'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full px-5 py-8 flex flex-col items-center justify-center text-center border-t border-white/[0.05] bg-black">
      <div className="flex items-center justify-center gap-4 mb-2">
        <a
          href="https://vimeo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] tracking-[0.2em] uppercase text-silver-400 hover:text-white transition-colors"
        >
          Vimeo
        </a>
        <span className="text-silver-600 text-[9px]">•</span>
        <a
          href="https://imdb.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] tracking-[0.2em] uppercase text-silver-400 hover:text-white transition-colors"
        >
          IMDb
        </a>
        <span className="text-silver-600 text-[9px]">•</span>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] tracking-[0.2em] uppercase text-silver-400 hover:text-white transition-colors"
        >
          Instagram
        </a>
      </div>
      <p className="text-[9px] text-silver-500 tracking-[0.25em] uppercase">
        &copy; 2026 VETHESNAN
      </p>
    </footer>
  );
};
