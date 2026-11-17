"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Header } from "@/components/Header";
import { NavigationOverlay } from "@/components/NavigationOverlay";
import { VideoCard } from "@/components/VideoCard";
import { ContactSection } from "@/components/ContactSection";
import { PROJECTS } from "@/data/projects";

interface PortfolioCategoryPageProps {
  category: "cinematography" | "color";
}

export const PortfolioCategoryPage: React.FC<PortfolioCategoryPageProps> = ({
  category,
}) => {
  const [navOpen, setNavOpen] = useState(false);

  const projects =
    category === "cinematography"
      ? PROJECTS.filter((project) => project.category === "narrative")
      : PROJECTS.filter((project) => project.category !== "narrative");

  return (
    <div className="min-h-screen w-full bg-black">
      <Header
        navOpen={navOpen}
        onToggleNav={() => setNavOpen((previous) => !previous)}
      />
      <NavigationOverlay isOpen={navOpen} onClose={() => setNavOpen(false)} />

      <main className="w-full bg-black">
        <section
          id="projects-grid"
          className="w-full px-5 sm:px-7 pt-32 sm:pt-44 lg:pt-64 pb-24"
        >
          <div className="mx-auto w-full max-w-[1680px]">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mb-12 sm:mb-20 text-[clamp(1.75rem,8.7vw,10rem)] leading-[0.9] font-bold tracking-[-0.045em] text-silver-200 uppercase whitespace-nowrap sm:text-[clamp(3.5rem,9.3vw,10rem)]"
            >
              {category === "cinematography" ? "Cinematography" : "Color"}
            </motion.h1>
            <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {projects.map((project, index) => (
                <VideoCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
    </div>
  );
};
