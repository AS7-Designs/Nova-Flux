"use client";

import type { MotionValue } from "motion/react";
import { motion, useScroll, useTransform } from "motion/react";
import type { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import { useRef } from "react";

import { AnimatedFluxLogo } from "@/components/elements/animated-flux-logo";
import { FluxWavePattern } from "@/components/elements/flux-wave-pattern";
import { cn } from "@/lib/utils";

interface ScrollAnimatedFluxLogoProps {
  fillAngle: MotionValue<number>;
  fillOpacity: MotionValue<number>;
}

function ScrollAnimatedFluxLogo({ fillAngle, fillOpacity }: ScrollAnimatedFluxLogoProps) {
  return (
    <AnimatedFluxLogo
      className="mx-auto mb-6 size-20 rounded-full md:mb-8 md:size-24"
      fillAngle={fillAngle}
      fillOpacity={fillOpacity}
    />
  );
}

export default function FeaturesReveal({ className, containerClass }: { className?: string; containerClass?: string }) {
  return (
    <section className={cn("section-padding relative overflow-hidden", className)}>
      <FluxWavePattern />
      <div className={cn("relative z-10 container", containerClass)}>
        <div className="flex flex-col items-center justify-center">
          <div className="flex w-full">
            <TextReveal className="items-center justify-center text-center text-pretty">
              Built for Businesses That Grow Through People. Every layer of your direct selling operation in one modern platform.
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
  maxWidth?: string;
}

const TextReveal: FC<TextRevealProps> = ({ children, className, maxWidth }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.92", "end 0.55"],
  });
  const revealProgress = useTransform(scrollYProgress, [0.05, 0.72], [0, 1], {
    clamp: true,
  });
  const logoFillAngle = useTransform(scrollYProgress, [0.24, 0.54], [0, 360.1], { clamp: true });
  const logoFillOpacity = useTransform(scrollYProgress, [0.24, 0.26], [0, 1], {
    clamp: true,
  });

  const words = children.split(" ");

  return (
    <div
      ref={targetRef}
      className={cn("relative z-0 h-[min(200vh,72rem)] portrait:h-[min(175vh,60rem)]", className)}
      style={{ maxWidth: maxWidth || "72rem" }}
    >
      <div className="sticky top-1/2 mx-auto flex -translate-y-1/2 flex-col items-center justify-center px-4 py-10 md:py-14">
        <div className="flex flex-col justify-center">
          <ScrollAnimatedFluxLogo fillAngle={logoFillAngle} fillOpacity={logoFillOpacity} />
          <span
            className={cn(
              "font-display flex flex-wrap px-5 text-4xl leading-none font-medium tracking-tighter text-black/20 md:px-8 md:text-6xl lg:px-10 lg:text-7xl dark:text-white/20",
              className,
            )}
          >
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} progress={revealProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity: opacity }} className="text-foreground">
        {children}
      </motion.span>
    </span>
  );
};
