"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { SignatureLogo } from "@/components/SignatureLogo";
import workezThumbnail from "@/assets/thumbnails/workez.jpg.jpeg";
import rifleThumbnail from "@/assets/thumbnails/Rifle pic.jpg.jpeg";
import pothysThumbnail from "@/assets/thumbnails/Pothys pic.jpg.jpeg";
import sierraEvThumbnail from "@/assets/thumbnails/sierra ev1_00109731.jpg.jpeg";
import testimonialThumbnail from "@/assets/thumbnails/testimonial00086400.jpg.jpeg";

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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const DURATION_APPROACH = "1100ms";
const DURATION_SETTLE = "1500ms";

const updateProximityScale = (
  card: HTMLElement | null,
  clientX: number,
  clientY: number,
  zoomAmount: number = 0.08,
) => {
  if (!card) {
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    card.style.setProperty("--proximity-scale", "1");
    return;
  }

  const bounds = card.getBoundingClientRect();
  const isInside =
    clientX >= bounds.left &&
    clientX <= bounds.right &&
    clientY >= bounds.top &&
    clientY <= bounds.bottom;

  if (isInside) {
    card.style.setProperty("--proximity-duration", DURATION_APPROACH);
    card.style.setProperty("--proximity-scale", (1 + zoomAmount).toString());
    return;
  }

  const nearestX = Math.max(bounds.left, Math.min(clientX, bounds.right));
  const nearestY = Math.max(bounds.top, Math.min(clientY, bounds.bottom));
  const distance = Math.hypot(clientX - nearestX, clientY - nearestY);
  const proximity = Math.max(0, 1 - distance / 140);
  const nextScale = 1 + proximity * zoomAmount;
  const currentScale =
    Number.parseFloat(card.style.getPropertyValue("--proximity-scale")) || 1;

  card.style.setProperty(
    "--proximity-duration",
    nextScale < currentScale ? DURATION_SETTLE : DURATION_APPROACH,
  );
  card.style.setProperty("--proximity-scale", nextScale.toString());
};

interface SelectedWorkCardProps {
  title: string;
  subtitle: string;
  aspectRatio?: string;
  className?: string;
  href?: string;
  zoomAmount?: number;
  children: React.ReactNode;
}

const SelectedWorkCard: React.FC<SelectedWorkCardProps> = ({
  title,
  subtitle,
  aspectRatio,
  className = "",
  href,
  zoomAmount = 0.08,
  children,
}) => {
  const cardRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleWindowPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "mouse") {
        updateProximityScale(
          cardRef.current,
          event.clientX,
          event.clientY,
          zoomAmount,
        );
      }
    };

    const resetProximityScale = () => {
      cardRef.current?.style.setProperty(
        "--proximity-duration",
        DURATION_SETTLE,
      );
      cardRef.current?.style.setProperty("--proximity-scale", "1");
    };

    window.addEventListener("pointermove", handleWindowPointerMove);
    window.addEventListener("blur", resetProximityScale);
    window.addEventListener("mouseleave", resetProximityScale);

    return () => {
      window.removeEventListener("pointermove", handleWindowPointerMove);
      window.removeEventListener("blur", resetProximityScale);
      window.removeEventListener("mouseleave", resetProximityScale);
    };
  }, []);

  const media = (
    <div
      className="absolute inset-0 transition-transform ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
      style={{
        transform: "scale(var(--proximity-scale, 1))",
        transitionDuration: "var(--proximity-duration, 1100ms)",
      }}
    >
      {children}
    </div>
  );

  const captionContent = (
    <>
      <span className="block overflow-hidden">
        <span className="block font-sans text-base font-bold leading-5 tracking-normal uppercase transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none [@media(hover:hover)]:translate-y-full [@media(hover:hover)]:group-hover:translate-y-0 group-focus-within:translate-y-0">
          {title}
        </span>
      </span>
      <span className="mt-1 block overflow-hidden">
        <span className="block font-sans text-sm leading-5 text-silver-400 transition-transform delay-75 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-focus-within:translate-y-0 motion-reduce:transition-none [@media(hover:hover)]:translate-y-full">
          {subtitle}
        </span>
      </span>
    </>
  );

  const caption = (
    <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 pt-12 text-left text-white">
      {captionContent}
    </span>
  );

  return (
    <div
      ref={cardRef}
      style={aspectRatio ? { aspectRatio } : undefined}
      className={`group relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-charcoal-900 shadow-2xl transition-all duration-500 hover:border-white/30 ${className}`}
    >
      {href ? (
        <Link
          href={href}
          aria-label={`View ${title}`}
          className="absolute inset-0 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          {media}
          {caption}
        </Link>
      ) : (
        <>
          {media}
          {caption}
        </>
      )}
    </div>
  );
};

export const SelectedWorksSection: React.FC = () => {
  return (
    <section
      id="selected-works"
      aria-label="Selected Works"
      className="relative overflow-hidden w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-20 sm:py-28 lg:py-36 scroll-mt-20"
    >
      {/* Background Signature Watermark Overlays for Subtle Branding */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 overflow-hidden select-none"
      >
        <div className="absolute -right-20 sm:-right-32 top-[24%] w-[680px] sm:w-[900px] md:w-[1150px] text-white/[0.03] -rotate-6 transform-gpu">
          <SignatureLogo className="h-auto w-full" />
        </div>
        <div className="absolute -left-20 sm:-left-28 bottom-[10%] w-[440px] sm:w-[620px] md:w-[780px] text-white/[0.02] rotate-12 transform-gpu">
          <SignatureLogo className="h-auto w-full" />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        {/* Bento / Modular Mixed Editorial Grid matching Reference */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="flex flex-col gap-4 sm:gap-5 lg:gap-6"
        >
          {/* FIRST HALF: Asymmetric Layout matching user photo */}
          {/* Left: 1 (2:3 Sierra EV) | Right: 2 (3:2 Papa Johns) + 3 (3:2 WorkEZ) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 items-start">
            {/* 1. Sierra EV (2:3) */}
            <motion.div variants={itemVariants} className="w-full">
              <SelectedWorkCard
                title="new arrival new era "
                subtitle="Sierra EV • Launch Film"
                aspectRatio="18 / 25"
                href="/project/sierra-ev"
              >
                <Image
                  src={sierraEvThumbnail}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                  className="object-cover"
                />
              </SelectedWorkCard>
            </motion.div>

            {/* Right Column: 2. Papa Johns (3:2) & 3. WorkEZ (3:2) */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full">
              {/* 2. Papa Johns (3:2) */}
              <motion.div variants={itemVariants} className="w-full">
                <SelectedWorkCard
                  title="CRAFTED TO PERFECTION"
                  subtitle="Papa Johns • Spec Commercial"
                  aspectRatio="3 / 2"
                  href="/project/papa-johns"
                >
                  <Image
                    src="https://vumbnail.com/1247729292.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                    className="object-cover"
                  />
                </SelectedWorkCard>
              </motion.div>

              {/* 3. WorkEZ (3:2) */}
              <motion.div
                variants={itemVariants}
                className="w-full translate-y-3"
              >
                <SelectedWorkCard
                  title="A SPACE OF POSSIBILITIES"
                  subtitle="WorkEZ • Walkthrough Flim"
                  aspectRatio="3 / 2"
                  href="/project/workez-walkthrough"
                >
                  <Image
                    src={workezThumbnail}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                    className="object-cover"
                  />
                </SelectedWorkCard>
              </motion.div>
            </div>
          </div>

          {/* SECOND HALF: Remaining Three Projects (Pending User Layout Decision) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {/* 4. Sierra Testimonial */}
            <motion.div variants={itemVariants} className="w-full">
              <SelectedWorkCard
                title="A Legacy reborn"
                subtitle="Tata Sierra • Testimonial Film"
                aspectRatio="16 / 10"
                href="/project/sierra-testimonial"
              >
                <Image
                  src={testimonialThumbnail}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={90}
                  className="object-cover"
                />
              </SelectedWorkCard>
            </motion.div>

            {/* 5. SLAM Fitness */}
            <motion.div variants={itemVariants} className="w-full">
              <SelectedWorkCard
                title="Lock on Level UP"
                subtitle="SLAM Fitness Studio • Opening Promo"
                aspectRatio="16 / 10"
                href="/project/slam-fitness"
              >
                <Image
                  src={rifleThumbnail}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={90}
                  className="object-cover"
                />
              </SelectedWorkCard>
            </motion.div>

            {/* 6. Pothys Swarna Mahal */}
            <motion.div variants={itemVariants} className="w-full">
              <SelectedWorkCard
                title="A REASON TO SHINE"
                subtitle="Pothys Swarna Mahal • Promotional Film"
                aspectRatio="16 / 10"
                href="/project/pothys-swarnamahal"
              >
                <Image
                  src={pothysThumbnail}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={90}
                  className="object-cover object-[50%_36%]"
                />
              </SelectedWorkCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
