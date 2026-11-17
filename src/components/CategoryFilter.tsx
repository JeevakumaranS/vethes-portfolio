'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ProjectCategory } from '@/types/portfolio';
import { CATEGORIES } from '@/data/projects';

interface CategoryFilterProps {
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="px-5 pb-5 max-w-5xl mx-auto w-full"
    >
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar" id="filter-bar">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.value;
          return (
            <button
              key={cat.value}
              type="button"
              onClick={() => onSelectCategory(cat.value)}
              className={`filter-btn px-3.5 py-1.5 rounded-full text-[10px] font-medium tracking-[0.16em] uppercase whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-white text-black font-semibold'
                  : 'bg-charcoal-800 text-silver-400 border border-white/5 hover:text-white hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </motion.section>
  );
};
