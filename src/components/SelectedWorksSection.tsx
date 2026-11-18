"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";

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
  aspectRatio: string;
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
      style={{ aspectRatio }}
      className={`group relative w-full overflow-hidden rounded-xl bg-charcoal-900 ${className}`}
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
      className="w-full px-5 pb-20 pt-16 scroll-mt-20 sm:px-8 md:px-10 lg:px-14 xl:px-16 sm:pt-24"
    >
      <div className="mx-auto w-full max-w-[1460px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start"
        >
          {/* Left Column (5 of 12 columns) */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 md:col-span-5">
            {/* 1. Vertical Reel (Sierra EV) */}
            <motion.div variants={itemVariants} className="w-full">
              <SelectedWorkCard
                title="A LEGEND RETURNS"
                subtitle="Insta Reel"
                aspectRatio="9 / 16"
                href="/project/sierra-ev"
                zoomAmount={0.08}
                className="w-full max-w-[380px] sm:max-w-[420px] md:ml-8 lg:ml-20"
              >
                <Image
                  src="https://vumbnail.com/1247723283.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  unoptimized
                  className="object-cover"
                />
              </SelectedWorkCard>
            </motion.div>

            {/* 2. Sierra Testimonial */}
            <motion.div variants={itemVariants} className="w-full">
              <SelectedWorkCard
                title="SIERRA TESTIMONIAL"
                subtitle="Customer Testimonial"
                aspectRatio="16 / 9"
                href="/project/sierra-testimonial"
                zoomAmount={0.08}
                className="w-full"
              >
                <Image
                  src="https://vumbnail.com/1247726394.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 42vw, 600px"
                  unoptimized
                  className="object-cover"
                />
              </SelectedWorkCard>
            </motion.div>

            {/* 3. Vertical Reel (Pothys Swarna Mahal) */}
            <motion.div variants={itemVariants} className="w-full">
              <SelectedWorkCard
                title="A REASON TO SHINE."
                subtitle="Pothys Swarna Mahal • Promotional Film"
                aspectRatio="9 / 16"
                href="/project/pothys-swarnamahal"
                zoomAmount={0.08}
                className="w-full max-w-[380px] sm:max-w-[420px] md:ml-8 lg:ml-40"
              >
                <Image
                  src="https://vumbnail.com/1247735250.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  unoptimized
                  className="object-cover"
                />
              </SelectedWorkCard>
            </motion.div>
          </div>

          {/* Right Column (7 of 12 columns) */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 md:col-span-7">
            {/* 1. Hero Landscape (WorkEZ) */}
            <motion.div
              variants={itemVariants}
              className="
  w-full
  md:-mx-4 md:w-[calc(100%+2rem)]
  lg:-mx-8 lg:w-[calc(100%+4rem)]
  xl:-mx-12 xl:w-[calc(100%+6rem)]
"
            >
              <SelectedWorkCard
                title="A SPACE OF POSSIBILITIES"
                subtitle="WorkEZ Walkthrough"
                aspectRatio="16 / 9"
                href="/project/workez-walkthrough"
                zoomAmount={0.08}
                className="w-full"
              >
                <Image
                  src="https://vumbnail.com/1247960038.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 58vw, 850px"
                  unoptimized
                  className="object-cover"
                />
              </SelectedWorkCard>
            </motion.div>

            {/* 2. Floating Landscape (Papa Johns) */}
            <motion.div variants={itemVariants} className="w-full">
              <SelectedWorkCard
                title="CRAFTED TO PERFECTION."
                subtitle="Papa Johns • Spec Commercial"
                aspectRatio="16 / 9"
                href="/project/papa-johns"
                zoomAmount={0.08}
                className="w-full"
              >
                <Image
                  src="https://vumbnail.com/1247729292.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 58vw, 850px"
                  unoptimized
                  className="object-cover"
                />
              </SelectedWorkCard>
            </motion.div>

            {/* 3. Vertical Reel (SLAM Fitness - At the bottom of Papa Johns) */}
            <motion.div
              variants={itemVariants}
              className="flex w-full justify-end md:-translate-x-4 lg:-translate-x-9 xl:-translate-x-50"
            >
              <SelectedWorkCard
                title="Rifle hype"
                subtitle="SLAM Fitness Studio • Launch Teaser"
                aspectRatio="9 / 16"
                href="/project/slam-fitness"
                zoomAmount={0.08}
                className="w-full max-w-[380px] sm:max-w-[420px]"
              >
                <Image
                  src="https://vumbnail.com/1247979901.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  unoptimized
                  className="object-cover"
                />
              </SelectedWorkCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
