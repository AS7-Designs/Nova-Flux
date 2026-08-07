"use client";

import { motion } from "motion/react";
import { Handshake, Settings, Rocket, Layers } from "lucide-react";

import { Eyebrow } from "@/components/elements/eyebrow";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const DIFFERENCE_ITEMS = [
  {
    icon: Handshake,
    title: "We Are Invested in Your Success",
    description:
      "We do not hand over a platform and disappear. Every business we work with is a partner. We stay involved, we clear the roadblocks, and we measure our success by yours.",
  },
  {
    icon: Settings,
    title: "Built for Your Model, Not the Other Way Around",
    description:
      "NovaDirect is not a rigid system you have to fit your business into. Your commission structure, your member journey, your product setup, everything is configured around how your business actually works.",
  },
  {
    icon: Rocket,
    title: "A Modern Platform That Keeps Moving",
    description:
      "Direct selling is evolving. The way people buy, refer, and get rewarded is changing. NovaDirect is built to move with that change, not against it.",
  },
  {
    icon: Layers,
    title: "More Than a Platform When You Need It",
    description:
      "Behind NovaDirect sits a multidisciplinary team with capabilities across branding, design, development, marketing, and AI transformation. When your business needs more than software, we are already built for it.",
  },
];

export default function WhyChoose({
  className,
  containerClass,
}: {
  className?: string;
  containerClass?: string;
}) {
  return (
    <section className={cn("section-padding relative overflow-hidden bg-card/30 border-t border-border/50", className)}>
      <div className={cn("relative z-10 container", containerClass)}>
        <div className="mx-auto max-w-3xl space-y-3 lg:space-y-4 lg:text-center">
          <Eyebrow className="justify-center">Why NovaDirect</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight lg:text-5xl">
            Why Businesses Choose NovaDirect
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            There is no shortage of software in this space. Here is what makes NovaDirect different.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {DIFFERENCE_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/70 bg-card text-card-foreground p-6 md:p-8 flex flex-col justify-between transition-colors hover:border-primary/40 space-y-4"
              >
                <div className="size-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                  <Icon className="size-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
