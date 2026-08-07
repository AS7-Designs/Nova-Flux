"use client";

import { CheckCircle2, Layers, Users } from "lucide-react";

import { Eyebrow } from "@/components/elements/eyebrow";
import { FluxDotGrid } from "@/components/elements/flux-dot-grid";
import { cn } from "@/lib/utils";

export default function ProblemStatement({
  className,
  containerClass,
}: {
  className?: string;
  containerClass?: string;
}) {
  return (
    <section className={cn("py-16 md:py-24 relative overflow-hidden bg-card/40 border-y border-border/50", className)}>
      <FluxDotGrid className="opacity-[0.03]" />

      <div className={cn("relative z-10 container", containerClass)}>
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <Eyebrow className="justify-center">The Difference</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight">
            Most Platforms Were Built for Everyone. <span className="bg-gradient-to-r from-[#0055FE] via-[#0080FF] to-[#1164F0] dark:from-[#5EEBFC] dark:via-[#0090FF] dark:to-[#1164F0] bg-clip-text text-transparent font-bold">Not for You.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-xl leading-relaxed max-w-3xl mx-auto pt-2">
            Direct selling businesses are not generic businesses. Your growth depends on people, and the way you manage, reward, and scale those people is specific to how your business works.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/70 bg-card p-6 md:p-8 flex flex-col justify-between transition-colors hover:border-primary/40">
            <div className="space-y-4">
              <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                <Layers className="size-5" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                Not a Generic Business
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Standard platforms treat your network like basic buyers. They lack the specialized logic direct selling demands.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/70 bg-card p-6 md:p-8 flex flex-col justify-between transition-colors hover:border-primary/40">
            <div className="space-y-4">
              <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                <Users className="size-5" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                People-Centric Growth
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your growth depends entirely on people — how you manage, reward, structure, and scale your network.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-primary/30 bg-gradient-to-br from-[#1164F0]/10 via-[#0090FF]/5 to-transparent p-6 md:p-8 flex flex-col justify-between transition-colors hover:border-primary/50">
            <div className="space-y-4">
              <div className="size-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                <CheckCircle2 className="size-5" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                Built Exclusively for You
              </h3>
              <p className="text-foreground/90 font-medium text-sm md:text-base leading-relaxed">
                "A platform built for everyone cannot be built for you — but NovaDirect is."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
