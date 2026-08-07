"use client";

import { motion } from "motion/react";
import { Eyebrow } from "@/components/elements/eyebrow";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    step: "01",
    title: "We Start With Your Plan",
    description:
      "Every business we work with comes with a vision for how their network should operate and how their people should be rewarded. We listen, ask the right questions, and understand your model completely before anything is built.",
  },
  {
    step: "02",
    title: "We Build Around You",
    description:
      "Your commission structure, your member journey, your brand. NovaDirect is configured specifically around your business model, not the other way around.",
  },
  {
    step: "03",
    title: "We Launch and Stay With You",
    description:
      "Going live is not the end of our involvement. We stay close, clear roadblocks, and make sure your platform grows as your business grows.",
  },
];

export default function HowItWorks({
  className,
  containerClass,
}: {
  className?: string;
  containerClass?: string;
}) {
  return (
    <section className={cn("section-padding relative overflow-hidden bg-card/40 border-y border-border/50", className)}>
      <div className={cn("relative z-10 container", containerClass)}>
        <div className="mx-auto max-w-3xl space-y-3 lg:space-y-4 lg:text-center">
          <Eyebrow className="justify-center">How We Work</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight lg:text-5xl">
            From First Conversation to Full Platform
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Whether you are launching your network for the first time or moving away from a platform that is holding you back, this is how we work with you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {STEPS.map((s, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/70 bg-card text-card-foreground p-6 md:p-8 flex flex-col justify-between transition-colors hover:border-primary/40"
            >
              <div className="space-y-4">
                <div className="text-4xl font-extrabold text-primary/30 tracking-tight">
                  {s.step}
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
