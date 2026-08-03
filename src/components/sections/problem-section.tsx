"use client";

import { motion } from "motion/react";
import { Eyebrow } from "@/components/elements/eyebrow";
import { FluxWavePattern } from "@/components/elements/flux-wave-pattern";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function ProblemSection({
  className,
  containerClass,
}: {
  className?: string;
  containerClass?: string;
}) {
  return (
    <section className={cn("section-padding relative overflow-hidden bg-card/30 border-y border-border/40", className)}>
      <FluxWavePattern className="opacity-[0.04]" />
      <div className={cn("relative z-10 container", containerClass)}>
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <Eyebrow className="justify-center">The Challenge</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight lg:text-5xl leading-tight text-foreground">
            The Hardest Part of Direct Selling Shouldn't Be Your Software.
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6 md:p-8 space-y-4">
                <div className="size-10 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center font-bold text-lg">
                  !
                </div>
                <h3 className="text-xl font-semibold">The Traditional Reality</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Direct selling businesses depend on people, and those people depend on you getting everything right — from onboarding to commissions. When software breaks down, trust breaks down. Most platforms were built to be sold, giving you a setup process and a support ticket system. What happens next is rarely their concern.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/30 bg-primary/5 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6 md:p-8 space-y-4">
                <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                  ✓
                </div>
                <h3 className="text-xl font-semibold text-primary">The NovaDirect Difference</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  NovaDirect was built differently. Every business we work with is a partner, not a transaction. We configure the platform specifically around your compensation model and business logic, then stay close to clear roadblocks so your network can do what it was built to do: grow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
