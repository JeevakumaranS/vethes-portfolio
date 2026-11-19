"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { SignatureLogo } from "@/components/SignatureLogo";

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
        {/* Minimalist Top Tag */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-8 sm:mb-12 flex items-center gap-4"
        >
          <span className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.3em] text-red-500 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            Selected Works
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
        </motion.div>

        {/* Bento / Modular Mixed Editorial Grid matching Reference */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="flex flex-col gap-4 sm:gap-5 lg:gap-6"
        >
          {/* BLOCK 1: Left 2 Stacked Cards (cols 1-5), Right 1 Large Hero Card (cols 6-12) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 items-stretch">
            {/* Left Column: 2 Stacked Cards */}
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5 lg:gap-6">
              {/* Card 1: Sierra EV */}
              <motion.div variants={itemVariants} className="w-full">
                <SelectedWorkCard
                  title="A LEGEND RETURNS"
                  subtitle="Insta Reel"
                  aspectRatio="16 / 10"
                  href="/project/sierra-ev"
                >
                  <Image
                    src="https://vumbnail.com/1247723283.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    unoptimized
                    className="object-cover"
                  />
                </SelectedWorkCard>
              </motion.div>

              {/* Card 2: Sierra Testimonial */}
              <motion.div variants={itemVariants} className="w-full">
                <SelectedWorkCard
                  title="SIERRA TESTIMONIAL"
                  subtitle="Customer Testimonial"
                  aspectRatio="16 / 10"
                  href="/project/sierra-testimonial"
                >
                  <Image
                    src="https://vumbnail.com/1247726394.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    unoptimized
                    className="object-cover"
                  />
                </SelectedWorkCard>
              </motion.div>
            </div>

            {/* Right Column: 1 Large Hero Card spanning full height */}
            <motion.div variants={itemVariants} className="lg:col-span-7 flex w-full">
              <SelectedWorkCard
                title="A SPACE OF POSSIBILITIES"
                subtitle="WorkEZ Walkthrough"
                href="/project/workez-walkthrough"
                className="h-full min-h-[340px] sm:min-h-[440px] lg:min-h-0"
              >
                <Image
                  src="https://vumbnail.com/1247960038.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  unoptimized
                  className="object-cover"
                />
              </SelectedWorkCard>
            </motion.div>
          </div>

          {/* BLOCK 2: Left 1 Large Hero Card (cols 1-7), Right 2 Stacked Cards (cols 8-12) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 items-stretch">
            {/* Left Column: 1 Large Hero Card spanning full height */}
            <motion.div variants={itemVariants} className="lg:col-span-7 flex w-full order-2 lg:order-1">
              <SelectedWorkCard
                title="CRAFTED TO PERFECTION."
                subtitle="Papa Johns • Spec Commercial"
                href="/project/papa-johns"
                className="h-full min-h-[340px] sm:min-h-[440px] lg:min-h-0"
              >
                <Image
                  src="https://vumbnail.com/1247729292.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  unoptimized
                  className="object-cover"
                />
              </SelectedWorkCard>
            </motion.div>

            {/* Right Column: 2 Stacked Cards */}
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5 lg:gap-6 order-1 lg:order-2">
              {/* Card 4: SLAM Fitness */}
              <motion.div variants={itemVariants} className="w-full">
                <SelectedWorkCard
                  title="Rifle hype"
                  subtitle="SLAM Fitness Studio • Launch Teaser"
                  aspectRatio="16 / 10"
                  href="/project/slam-fitness"
                >
                  <Image
                    src="https://vumbnail.com/1247979901.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    unoptimized
                    className="object-cover"
                  />
                </SelectedWorkCard>
              </motion.div>

              {/* Card 5: Pothys Swarna Mahal */}
              <motion.div variants={itemVariants} className="w-full">
                <SelectedWorkCard
                  title="A REASON TO SHINE."
                  subtitle="Pothys Swarna Mahal • Promotional Film"
                  aspectRatio="16 / 10"
                  href="/project/pothys-swarnamahal"
                >
                  <Image
                    src="https://vumbnail.com/1247735250.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    unoptimized
                    className="object-cover"
                  />
                </SelectedWorkCard>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
