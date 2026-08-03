"use client";

import { animate, motion, type MotionValue, useInView, useMotionTemplate, useMotionValue } from "motion/react";
import { useEffect, useRef } from "react";

import { BorderBeam } from "@/components/magicui/border-beam";
import { siteConfig } from "@/data/config";
import { useChartColors } from "@/hooks/use-chart-colors";
import { chartConicGradient } from "@/lib/chart-colors";
import { cn } from "@/lib/utils";

const logoSrc = siteConfig.logo.src;

const LOGO_MASK = {
  WebkitMaskImage: `url(${logoSrc})`,
  maskImage: `url(${logoSrc})`,
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
  WebkitMaskSize: "contain",
  maskSize: "contain",
} as const;

interface AnimatedFluxLogoProps {
  className?: string;
  borderRadius?: number;
  beamSize?: number;
  /** Use white base mark (for dark backgrounds). */
  inverted?: boolean;
  /** Animate the conic fill when the logo enters the viewport. */
  animateOnView?: boolean;
  fillAngle?: MotionValue<number>;
  fillOpacity?: MotionValue<number>;
}

export function AnimatedFluxLogo({
  className,
  borderRadius = 6,
  beamSize = 80,
  inverted = false,
  animateOnView = false,
  fillAngle: fillAngleProp,
  fillOpacity: fillOpacityProp,
}: AnimatedFluxLogoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const chartColors = useChartColors();
  const localFillAngle = useMotionValue(0);
  const localFillOpacity = useMotionValue(animateOnView ? 0 : 1);
  const fillAngle = fillAngleProp ?? localFillAngle;
  const fillOpacity = fillOpacityProp ?? localFillOpacity;
  const fillMask = useMotionTemplate`url(${logoSrc}), conic-gradient(from 0deg, #000 0deg, #000 ${fillAngle}deg, transparent ${fillAngle}deg)`;

  useEffect(() => {
    if (!animateOnView || !inView) return;

    animate(localFillOpacity, 1, { duration: 0.25 });
    animate(localFillAngle, 360.1, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    });
  }, [animateOnView, inView, localFillAngle, localFillOpacity]);

  useEffect(() => {
    if (animateOnView || fillAngleProp) return;
    localFillAngle.set(360.1);
  }, [animateOnView, fillAngleProp, localFillAngle]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative shrink-0 overflow-hidden rounded-md shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_10px_-2px_rgba(0,0,0,0.35)]",
        className,
      )}
    >
      <BorderBeam duration={8} size={beamSize} thickness={2} borderRadius={borderRadius} fromChart={1} toChart={2} />
      <BorderBeam
        duration={8}
        delay={4}
        size={beamSize}
        thickness={2}
        borderRadius={borderRadius}
        fromChart={3}
        toChart={1}
      />
      <div
        className={cn(
          "relative flex size-full items-center justify-center rounded-[inherit] p-3 md:p-3.5",
          inverted ? "bg-white" : "bg-background",
        )}
      >
        <div className="relative size-full">
          <div
            aria-hidden
            className={cn("absolute inset-0", inverted ? "bg-black" : "bg-black dark:bg-white")}
            style={LOGO_MASK}
          />
          <motion.div
            aria-hidden
            className="absolute inset-0"
            style={{
              opacity: fillOpacity,
              background: chartConicGradient(chartColors),
              WebkitMaskImage: fillMask,
              maskImage: fillMask,
              WebkitMaskRepeat: "no-repeat, no-repeat",
              maskRepeat: "no-repeat, no-repeat",
              WebkitMaskPosition: "center, center",
              maskPosition: "center, center",
              WebkitMaskSize: "contain, 100% 100%",
              maskSize: "contain, 100% 100%",
              WebkitMaskComposite: "source-in",
              maskComposite: "intersect",
            }}
          />
        </div>
      </div>
    </div>
  );
}
