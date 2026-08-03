"use client";

import AltArrowRightLinear from "@iconify-react/solar/alt-arrow-right-linear";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

import { FluxDotGrid } from "@/components/elements/flux-dot-grid";
import { FluxShader } from "@/components/elements/flux-shader";
import { Button } from "@/components/ui/button";
import { useChartColors } from "@/hooks/use-chart-colors";
import { useMounted } from "@/hooks/use-mounted";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

export default function HomeHero({
  className,
  containerClass,
  heroImage,
}: {
  className?: string;
  containerClass?: string;
  heroImage: React.ReactNode;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { resolvedTheme } = useTheme();
  const chartColors = useChartColors();
  const mounted = useMounted();

  const isDark = mounted && resolvedTheme === "dark";
  const shaderBackgroundColor = isDark ? "#0a0a0d" : "#ffffff";
  const shaderObjectColor = isDark ? "#ffffff" : "#0a0a0d";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(2px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 25,
        mass: 1,
        duration: 0.6,
      },
    },
  };

  const overlayVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
      filter: "blur(3px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 20,
        delay: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section className={cn("section-padding bg-background relative overflow-hidden", className)}>
      <FluxShader
        key={isDark ? "dark" : "light"}
        backgroundColor={shaderBackgroundColor}
        objectColor={shaderObjectColor}
        accentColors={[chartColors.chart1, chartColors.chart2, chartColors.chart3]}
        accentStrength={0.14}
        className="pointer-events-none absolute inset-0 h-full max-h-none min-h-0 opacity-60 dark:opacity-50"
      />
      <FluxDotGrid className="[mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)] opacity-[0.03] dark:opacity-[0.04]" />
      <motion.div
        variants={overlayVariants}
        initial={prefersReducedMotion ? "visible" : "hidden"}
        animate="visible"
        className="from-background/30 pointer-events-none absolute inset-0 bg-gradient-to-b to-transparent"
      />
      <motion.div
        className={cn("relative z-10 container", containerClass)}
        variants={containerVariants}
        initial={prefersReducedMotion ? "visible" : "hidden"}
        animate="visible"
      >
        <div className="flex flex-col items-center text-center">
          <motion.div
            variants={itemVariants}
            className="border-border/60 bg-card/60 mb-5 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium backdrop-blur-sm md:mb-6"
          >
            <span className="relative flex size-1.5">
              <span className="bg-chart-1 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
              <span className="bg-chart-1 relative inline-flex size-1.5 rounded-full" />
            </span>
            <span className="text-muted-foreground">NovaDirect &mdash; Enterprise Direct Selling Platform</span>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <motion.h1
              variants={itemVariants}
              className="text-4xl leading-[1.15] font-semibold tracking-tighter md:text-5xl lg:text-6xl"
            >
              Built for Businesses That Grow
              <br className="hidden md:block" /> Through People.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground my-3 text-base md:my-5 md:text-lg lg:my-6 max-w-3xl mx-auto leading-relaxed"
            >
              Running a direct selling business means managing people, products, commissions, and growth, all at once.
              NovaDirect brings every part of that operation together into one modern platform, built specifically around the way your network works, all under your brand.
            </motion.p>
          </div>

          <motion.div variants={itemVariants}>
            <Button size="lg" className="mt-2 rounded-full !pl-5.5 before:rounded-full" asChild>
              <a href="/contact">
                Schedule a Demo
                <div className="bg-background/15 border-background/10 grid size-5.5 place-items-center rounded-full border">
                  <AltArrowRightLinear className="size-4" />
                </div>
              </a>
            </Button>
          </motion.div>

          <motion.div variants={imageVariants} className="relative mx-auto mt-8 w-full md:mt-14 lg:mt-20">
            <div className="relative w-full overflow-hidden rounded-t-md shadow-[0_28px_56px_-12px_rgba(0,0,0,0.45)] dark:shadow-[0_28px_56px_-12px_rgba(0,0,0,0.75)]">
              {heroImage}
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="from-background pointer-events-none absolute inset-0 z-20 bg-gradient-to-t via-transparent via-25% to-transparent" />
    </section>
  );
}
