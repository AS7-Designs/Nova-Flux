"use client";

import AltArrowRightLinear from "@iconify-react/solar/alt-arrow-right-linear";
import { motion } from "motion/react";

import { FluxWavePattern } from "@/components/elements/flux-wave-pattern";
import { Button } from "@/components/ui/button";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

export default function CtaBand({ className, containerClass }: { className?: string; containerClass?: string }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className={cn("section-padding relative overflow-hidden", className)}>
      <FluxWavePattern scale={22} angle={-45} masked="band" className="opacity-[0.07] dark:opacity-[0.05]" />

      {/* Soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 50% 50%, oklch(0.648 0.181 22.12 / 0.06), transparent)",
        }}
      />

      <motion.div
        className={cn("relative z-10 container", containerClass)}
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ type: "spring", stiffness: 100, damping: 25, duration: 0.6 }}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight lg:text-5xl">Let's Talk About Your Business.</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-base md:text-lg leading-relaxed">
              Every business that runs on NovaDirect starts with a conversation. Not a sales pitch. A real discussion about your network, your model, and what you are trying to build. If you are ready to explore what NovaDirect can do for your business, book a discovery call and let's figure it out together.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="rounded-full !pl-5.5 before:rounded-full" asChild>
              <a href="/contact">
                Schedule a Discovery Call
                <div className="bg-background/15 border-background/10 grid size-5.5 place-items-center rounded-full border">
                  <AltArrowRightLinear className="size-4" />
                </div>
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full" asChild>
              <a href="/contact">Send Us a Message &rarr;</a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
