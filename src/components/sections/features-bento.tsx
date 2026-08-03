"use client";

import { motion } from "motion/react";
import type { ComponentType, ReactNode } from "react";

import { Eyebrow } from "@/components/elements/eyebrow";
import { FluxDotGrid } from "@/components/elements/flux-dot-grid";
import { FluxLinesPattern } from "@/components/elements/flux-lines-pattern";
import { FluxWavePattern } from "@/components/elements/flux-wave-pattern";
import {
  AnalyticsIllustration,
  SmartTaskIllustration,
  TeamCollabIllustration,
} from "@/components/sections/feature-illustrations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function DotPattern() {
  return (
    <FluxDotGrid className="inset-4 opacity-[0.05] transition-opacity duration-300 group-hover:opacity-[0.09] dark:opacity-[0.08] dark:group-hover:opacity-[0.12]" />
  );
}
function WavePatternBg() {
  return (
    <FluxWavePattern
      masked={false}
      scale={16}
      strokeWidth={0.5}
      className="inset-4 opacity-[0.05] transition-opacity duration-300 group-hover:opacity-[0.09] dark:opacity-[0.06] dark:group-hover:opacity-[0.1]"
    />
  );
}
function LinesPatternBg() {
  return (
    <FluxLinesPattern className="inset-4 opacity-[0.04] transition-opacity duration-300 group-hover:opacity-[0.08] dark:opacity-[0.06] dark:group-hover:opacity-[0.1]" />
  );
}

interface FeatureItem {
  id: number;
  illustration: ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
  pattern: () => ReactNode;
}

const FEATURES_DATA: FeatureItem[] = [
  {
    id: 1,
    illustration: AnalyticsIllustration,
    eyebrow: "Analytics",
    title: "AI Sales Dashboard",
    description: "Pipeline health, hot deals, and risks — surfaced by AI, at a glance.",
    className: "lg:col-span-4",
    pattern: DotPattern,
  },
  {
    id: 2,
    illustration: TeamCollabIllustration,
    eyebrow: "Enrichment",
    title: "Contact Management",
    description: "Auto-enriched contacts and smart segments. One source of truth.",
    className: "lg:col-span-2",
    pattern: WavePatternBg,
  },
  {
    id: 3,
    illustration: SmartTaskIllustration,
    eyebrow: "Workflows",
    title: "Sales Pipeline Automation",
    description: "Trigger emails, tasks, and handoffs from any signal in Flux — no code, no waiting.",
    className: "lg:col-span-6",
    pattern: LinesPatternBg,
  },
];

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 20,
      mass: 1,
    },
  },
};

export default function FeaturesBento({ className, containerClass }: { className?: string; containerClass?: string }) {
  return (
    <section id="features-bento" className={cn("section-padding relative", className)}>
      <div className={cn("container", containerClass)}>
        <div>
          <div className="mx-auto max-w-3xl space-y-3 lg:space-y-4 lg:text-center">
            <Eyebrow className="justify-center lg:justify-center">Platform</Eyebrow>
            <h2 className="text-4xl tracking-tight lg:text-5xl">
              Every part of your sales workflow, supercharged by AI.
            </h2>
            <p className="text-muted-foreground text-lg leading-snug">
              From first touch to closed-won, Flux turns every signal into the next best move.
            </p>
          </div>

          <motion.div
            className="mt-8 grid grid-cols-1 gap-5 lg:mt-12 lg:grid-cols-6 lg:gap-6"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {FEATURES_DATA.map((feature) => (
              <motion.div key={feature.id} variants={cardVariants} className={feature.className}>
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  illustration: ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  description: string;
  pattern: () => ReactNode;
}

function FeatureCard({ illustration: Illustration, eyebrow, title, description, pattern: Pattern }: FeatureCardProps) {
  return (
    <Card className="group hover:border-foreground/15 relative h-full gap-0 overflow-hidden py-0 shadow-none transition-[border-color,box-shadow] duration-300 hover:shadow-md">
      {/* Gradient accent hairline along top */}
      <div
        aria-hidden
        className="from-chart-1/40 via-chart-2/20 pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r to-transparent"
      />

      <CardContent className="relative p-8">
        <Pattern />
        <div className="relative">
          <Illustration />
        </div>
      </CardContent>

      <CardHeader className="mt-auto flex flex-col gap-1.5 px-8 pt-0 pb-8">
        <Eyebrow>{eyebrow}</Eyebrow>
        <CardTitle className="text-base leading-tight font-semibold tracking-tight">{title}</CardTitle>
        <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">{description}</p>
      </CardHeader>
    </Card>
  );
}
