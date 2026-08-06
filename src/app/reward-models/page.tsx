import type { Metadata } from "next";
import { Award, CheckCircle2, Layers, Repeat, ShieldCheck, TrendingUp, UserPlus } from "lucide-react";

import { Eyebrow } from "@/components/elements/eyebrow";
import { FluxDotGrid } from "@/components/elements/flux-dot-grid";
import { FluxWavePattern } from "@/components/elements/flux-wave-pattern";
import CtaBand from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Reward Models",
  description:
    "Reward your network the way your business was designed to. Custom commission logic, multi-level structures, matching bonuses, recurring rewards, and leadership pools.",
};

const REWARD_MODELS = [
  {
    icon: UserPlus,
    eyebrow: "01 — DIRECT REVENUE",
    title: "Reward People for Bringing Others In",
    description: "When someone refers a new member, customer, or partner, they should be rewarded for it immediately and accurately.",
    items: [
      "Direct Referral Commissions",
      "Fast Start Bonuses",
      "First Purchase Commissions",
      "Enroller Based Rewards",
    ],
    spanClass: "lg:col-span-7",
    isWide: true,
  },
  {
    icon: TrendingUp,
    eyebrow: "02 — TEAM PERFORMANCE",
    title: "Reward People for Network Performance",
    description: "As your members build their own teams, their rewards should reflect the growth happening beneath them, not just their own direct activity.",
    items: [
      "Multi-level Commission Structures",
      "Matching Bonuses",
      "Generation Based Commissions",
      "Differential Commissions",
    ],
    spanClass: "lg:col-span-5",
    isWide: false,
  },
  {
    icon: Repeat,
    eyebrow: "03 — RECURRING LOYALTY",
    title: "Reward Consistency & Long Term Loyalty",
    description: "Businesses built on memberships and subscriptions need a commission model that rewards recurring activity, not just one-time transactions.",
    items: [
      "Recurring Subscription Commissions",
      "Monthly & Annual Reward Cycles",
      "Loyalty Based Incentives",
      "Renewal Bonuses",
    ],
    spanClass: "lg:col-span-5",
    isWide: false,
  },
  {
    icon: Award,
    eyebrow: "04 — EXECUTIVE RANKS",
    title: "Reward Your Top Performers Differently",
    description: "Your highest performing members deserve recognition beyond standard commissions. Structured rank and achievement systems keep your best people moving forward.",
    items: [
      "Rank Advancement Bonuses",
      "Leadership Pool Rewards",
      "Achievement Awards",
      "Performance Based Incentives",
    ],
    spanClass: "lg:col-span-7",
    isWide: true,
  },
];

export default function RewardModelsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding page-top-padding relative overflow-hidden bg-background">
        <FluxWavePattern className="opacity-[0.05]" />
        <div className="container container-large relative z-10">
          <div className="mx-auto max-w-4xl space-y-4 text-center">
            <Eyebrow className="justify-center">Flexible Compensation</Eyebrow>
            <h1 className="text-4xl font-bold tracking-tight lg:text-6xl text-foreground">
              Reward Your People the Way Your Business Was Designed To.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Every business rewards its network differently. NovaDirect is built to handle that complexity — whatever your compensation model looks like — accurately, automatically, and exactly the way you designed it.
            </p>
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="py-12 bg-card/40 border-y border-border/50">
        <div className="container container-large">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">Built Around Your Model</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Most platforms force you to choose from a fixed list of compensation plans and build your business around them. NovaDirect works the other way around. We start with how you want to reward your people and build the logic from there.
            </p>
          </div>
        </div>
      </section>

      {/* Reward Models Bento Grid */}
      <section className="section-padding relative">
        <div className="container container-large space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Eyebrow className="justify-center">Tailored Compensation</Eyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
              How Do You Want to Reward Your Network?
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Select from proven reward mechanics or combine them to craft a unique compensation model tailored to your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {REWARD_MODELS.map((model, idx) => {
              const Icon = model.icon;
              if (model.isWide) {
                return (
                  <div
                    key={idx}
                    className={cn(
                      "relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/70 bg-card text-card-foreground p-6 md:p-8 lg:p-9 flex flex-col justify-between transition-colors hover:border-primary/40",
                      model.spanClass
                    )}
                  >
                    <FluxDotGrid className="opacity-[0.03] dark:opacity-[0.05]" />

                    {/* Top Bar */}
                    <div className="relative z-10 flex items-center justify-between mb-4">
                      <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <Icon className="size-5" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold tracking-wider text-muted-foreground">
                        {model.eyebrow}
                      </span>
                    </div>

                    {/* Interior 2-Column Split */}
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center flex-1">
                      {/* Left Content */}
                      <div className="md:col-span-6 space-y-2">
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground leading-tight">
                          {model.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {model.description}
                        </p>
                      </div>

                      {/* Right Items */}
                      <div className="md:col-span-6 space-y-2.5">
                        <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                          What this looks like in NovaDirect:
                        </span>
                        <div className="grid grid-cols-1 gap-2">
                          {model.items.map((item, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 p-2.5 rounded-lg bg-muted/40 border border-border/50 text-xs font-medium text-foreground"
                            >
                              <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={idx}
                  className={cn(
                    "relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/70 bg-card text-card-foreground p-6 md:p-8 lg:p-9 flex flex-col justify-between transition-colors hover:border-primary/40",
                    model.spanClass
                  )}
                >
                  <FluxDotGrid className="opacity-[0.03] dark:opacity-[0.05]" />

                  {/* Top Bar */}
                  <div className="relative z-10 flex items-center justify-between mb-4">
                    <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-muted-foreground">
                      {model.eyebrow}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="relative z-10 space-y-2.5 mb-4">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground leading-tight">
                      {model.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {model.description}
                    </p>
                  </div>

                  {/* Bottom Items */}
                  <div className="relative z-10 mt-auto pt-4 border-t border-border/50 space-y-2.5">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                      What this looks like in NovaDirect:
                    </span>
                    <div className="grid grid-cols-1 gap-2">
                      {model.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 p-2.5 rounded-lg bg-muted/40 border border-border/50 text-xs font-medium text-foreground"
                        >
                          <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Model 05 - Full Width Hero Bento Card */}
            <div className="lg:col-span-12 relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/70 bg-card text-card-foreground p-6 md:p-8 lg:p-10 transition-colors hover:border-primary/40">
              <FluxDotGrid className="opacity-[0.03] dark:opacity-[0.05]" />

              <div className="relative z-10 space-y-6">
                {/* Top Header Bar across full width */}
                <div className="flex items-center justify-between">
                  <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Layers className="size-5" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold tracking-wider text-muted-foreground">
                    05 — NETWORK STRUCTURE
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Content */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-tight">
                        Reward Team Growth & Collective Volume
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                        Reflect the collective performance of a team or network structure, not just individual referrals, through team-based reward models.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border/50 space-y-3">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                        What this looks like in NovaDirect:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {[
                          "Team Volume Commissions",
                          "Network Performance Rewards",
                          "Structured Plan Based Commissions",
                          "Pool and Shared Bonus Models",
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 p-2.5 rounded-lg bg-muted/40 border border-border/50 text-xs font-medium text-foreground"
                          >
                            <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Visual Graphic - Full Height Alignment */}
                  <div className="lg:col-span-5 flex flex-col">
                    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-muted/20 p-6 md:p-7 lg:p-8 flex flex-col justify-between w-full h-full">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <ShieldCheck className="size-4 text-primary" />
                            <span className="text-xs font-bold text-foreground uppercase tracking-wider">
                              Collective Volume Engine
                            </span>
                          </div>
                          <span className="text-[9px] font-mono font-semibold tracking-widest uppercase text-muted-foreground bg-background px-2.5 py-1 rounded border border-border">
                            Automated
                          </span>
                        </div>

                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          Real-time calculation across infinite downline levels with automated capping, compression, and pool distribution.
                        </p>

                        <div className="space-y-2 pt-2">
                          <div className="flex items-center justify-between p-2 rounded-lg bg-background/60 border border-border/40 text-xs">
                            <span className="text-muted-foreground">Downline Compression</span>
                            <span className="font-semibold text-foreground">Active</span>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded-lg bg-background/60 border border-border/40 text-xs">
                            <span className="text-muted-foreground">Shared Pool Bonus</span>
                            <span className="font-semibold text-foreground">Auto-Calculated</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Volume Sync:</span>
                        <span className="font-semibold text-primary">Instant & Audit-Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-16 md:py-20 bg-card/50 border-y border-border/50 relative overflow-hidden">
        <div className="container container-large relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Eyebrow className="justify-center">Consultation</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight lg:text-4xl text-foreground">
              Not Sure Which Model Fits Your Business?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              That is exactly what our discovery call is for. We have worked with businesses across direct selling, memberships, subscriptions, ambassador programs, and partner networks. We will help you design a compensation model that works for your people and your growth goals.
            </p>
            <div className="pt-2">
              <Button size="lg" className="rounded-full px-8" asChild>
                <a href="/contact">Schedule a Discovery Call</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        containerClass="container-large"
        title="Your Compensation Model, Built Exactly the Way You Need It."
        description="No two businesses reward their people the same way. Let's talk about yours."
      />
    </>
  );
}
