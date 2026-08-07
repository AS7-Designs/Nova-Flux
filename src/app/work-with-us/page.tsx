import type { Metadata } from "next";

import CtaBand from "@/components/sections/cta-band";
import { Eyebrow } from "@/components/elements/eyebrow";
import { FluxDotGrid } from "@/components/elements/flux-dot-grid";
import { FluxWavePattern } from "@/components/elements/flux-wave-pattern";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/data/config";
import { CheckCircle2, Clock, Code2, Compass, Headphones, HeartHandshake, Layers, MessageSquare, Rocket, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Work With Us",
  description:
    "Learn how NovaDirect engages with businesses. From discovery and scoping to build, launch, AMC support, and long-term partnership.",
};

const WHAT_YOU_BRING = [
  {
    step: "01",
    title: "Your Business Idea",
    description: "A clear understanding of how your network operates — who your members or distributors are, what they sell or promote, and how your business model works.",
  },
  {
    step: "02",
    title: "Your Compensation Plan",
    description: "How you reward your people. Whether it is a straightforward referral commission or a multi-level structure with bonuses and ranks, this is the foundation we build from.",
  },
  {
    step: "03",
    title: "Your Brand",
    description: "Your logo, your colours, and the identity you want your platform to carry. That is it. We handle the rest.",
  },
];

const ENGAGEMENT_STEPS = [
  {
    step: "01",
    eyebrow: "01 — DISCOVERY",
    icon: MessageSquare,
    title: "Discovery",
    description: "We start with a conversation. We listen to your business model, your compensation structure, and your goals. We ask the right questions before anything is built.",
  },
  {
    step: "02",
    eyebrow: "02 — SCOPING",
    icon: Compass,
    title: "Scoping",
    description: "Based on discovery, we define the exact scope of your platform: required modules, commission logic configuration, integrations, and delivery timeline.",
  },
  {
    step: "03",
    eyebrow: "03 — BUILD",
    icon: Code2,
    title: "Custom Build",
    description: "We build your platform configured specifically around your business. Your brand, your commission rules, and your member journey — never a generic template.",
  },
  {
    step: "04",
    eyebrow: "04 — LAUNCH",
    icon: Rocket,
    title: "Review & Launch",
    description: "Before going live, we walk through the platform together. You review, we refine, and we launch seamlessly when your team is 100% ready.",
  },
  {
    step: "05",
    eyebrow: "05 — PARTNERSHIP",
    icon: HeartHandshake,
    title: "We Stay With You",
    description: "Launch is just the beginning. We stay involved to ensure the platform performs, scales with your business, and adapts as your needs evolve over time.",
  },
];

export default function WorkWithUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding page-top-padding relative overflow-hidden bg-background">
        <FluxWavePattern className="opacity-[0.05]" />
        <div className="container container-large relative z-10">
          <div className="mx-auto max-w-4xl space-y-4 text-center">
            <Eyebrow className="justify-center">Engagement Model</Eyebrow>
            <h1 className="text-4xl leading-[1.1] font-medium tracking-tighter md:text-5xl lg:text-6xl text-foreground">
              A Platform Built Around You.{" "}
              <span className="bg-gradient-to-r from-[#0055FE] via-[#0080FF] to-[#1164F0] dark:from-[#5EEBFC] dark:via-[#0090FF] dark:to-[#1164F0] bg-clip-text text-transparent">
                Invested in Your Growth.
              </span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              NovaDirect is not an off-the-shelf product you activate with a credit card. Every implementation is built specifically around your business, your compensation model, and your brand.
            </p>
          </div>
        </div>
      </section>

      {/* What You Bring */}
      <section className="section-padding bg-card/40 border-y border-border/50">
        <div className="container container-large">
          <div className="mx-auto max-w-3xl space-y-3 text-center mb-12">
            <Eyebrow className="justify-center">Getting Started</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight lg:text-4xl">What You Bring to the Table</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Starting a NovaDirect engagement is straightforward. You do not need a technical specification or a detailed project brief.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHAT_YOU_BRING.map((item, idx) => (
              <Card key={idx} className="border-border/60 bg-card p-6 md:p-8 space-y-4">
                <span className="text-3xl font-extrabold text-primary/40">{item.step}</span>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How the Engagement Works */}
      <section className="section-padding relative">
        <div className="container container-large space-y-12">
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <Eyebrow className="justify-center">Process</Eyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
              How the Engagement Works
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              A structured, transparent 5-step process from initial conversation to long-term operational success.
            </p>
          </div>

          <div className="space-y-6">
            {/* Top 3 Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ENGAGEMENT_STEPS.slice(0, 3).map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/70 bg-card text-card-foreground p-6 md:p-8 flex flex-col justify-between transition-colors hover:border-primary/40 space-y-6"
                  >
                    <FluxDotGrid className="opacity-[0.03] dark:opacity-[0.05]" />
                    <div className="relative z-10 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                          <Icon className="size-5" />
                        </div>
                        <span className="text-[11px] font-mono font-semibold tracking-wider text-muted-foreground uppercase">
                          {item.eyebrow}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom 2 Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ENGAGEMENT_STEPS.slice(3, 5).map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/70 bg-card text-card-foreground p-6 md:p-8 flex flex-col justify-between transition-colors hover:border-primary/40 space-y-6"
                  >
                    <FluxDotGrid className="opacity-[0.03] dark:opacity-[0.05]" />
                    <div className="relative z-10 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                          <Icon className="size-5" />
                        </div>
                        <span className="text-[11px] font-mono font-semibold tracking-wider text-muted-foreground uppercase">
                          {item.eyebrow}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Model */}
      <section className="section-padding bg-card/40 border-t border-border/50">
        <div className="container container-large">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <Eyebrow className="justify-center">Commercial Model</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Project-Based Pricing & Support
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                NovaDirect engagements are project based. The investment for each project is scoped transparently and agreed before build begins. No hidden costs, no surprises.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {/* Card 1: Project Investment */}
              <div className="rounded-2xl md:rounded-3xl border border-border/70 bg-card p-6 md:p-8 flex flex-col justify-between h-full space-y-6 transition-colors hover:border-primary/40">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <ShieldCheck className="size-5" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-muted-foreground uppercase">
                      01 — Engagement Scope
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                    Project Investment
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Every engagement is scoped individually based on the complexity of your compensation model, required modules, integrations, and scale of operation. We discuss this transparently during the initial scoping phase.
                  </p>
                </div>

                <div className="pt-4 border-t border-border/50 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-background/80 dark:bg-muted/40 border border-border/80 text-xs font-semibold text-foreground shadow-2xs">
                    <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                    <span>Scoped Before Build</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-background/80 dark:bg-muted/40 border border-border/80 text-xs font-semibold text-foreground shadow-2xs">
                    <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                    <span>Zero Hidden Fees</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Ongoing Support Options */}
              <div className="rounded-2xl md:rounded-3xl border border-border/70 bg-card p-6 md:p-8 flex flex-col justify-between h-full space-y-6 transition-colors hover:border-primary/40">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <Headphones className="size-5" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-muted-foreground uppercase">
                      02 — Post-Launch
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                    Ongoing Support Options
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-background/80 dark:bg-muted/40 border border-border/80 space-y-1 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-foreground">Annual Maintenance Contract (AMC)</span>
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                        Planned Coverage
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      For businesses wanting consistent, planned maintenance, proactive updates, and priority support coverage.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-background/80 dark:bg-muted/40 border border-border/80 space-y-1 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-foreground">Hourly Support</span>
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-foreground bg-muted px-2 py-0.5 rounded border border-border">
                        On-Demand
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      For businesses preferring flexible, pay-as-you-go technical assistance as and when needed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Multidisciplinary Team Note (Full Width) */}
              <div className="lg:col-span-2 rounded-2xl md:rounded-3xl border border-primary/30 bg-primary/5 p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                    <Sparkles className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">What is Behind NovaDirect</h3>
                    <p className="text-xs text-muted-foreground">Comprehensive multi-domain execution</p>
                  </div>
                </div>
                <p className="text-foreground/90 text-sm md:text-base leading-relaxed">
                  Every NovaDirect client benefits from more than a software team. Behind the platform sits a multidisciplinary organisation with capabilities across software development, branding, UI/UX design, digital marketing, and AI transformation.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  {["Software Development", "Branding & UI/UX", "Digital Marketing", "AI Transformation"].map((chip, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background border border-border text-xs font-medium text-foreground">
                      <CheckCircle2 className="size-3 text-primary" />
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding relative border-t border-border/50">
        <div className="container container-large">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Eyebrow className="justify-center">Pricing</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight lg:text-4xl">What Does It Cost?</h2>
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                We do not publish fixed pricing because no two NovaDirect implementations are the same. A straightforward referral commission platform for a SaaS business looks very different from a multi-level direct selling platform with ecommerce, subscriptions, and global payouts.
              </p>
              <p>
                What we can tell you is that our engagements are scoped fairly, transparently, and around what your business actually needs. Nothing more, nothing less.
              </p>
              <p>
                The best way to understand what a NovaDirect engagement looks like for your business is to book a discovery call. No commitment, no pressure. Just a real conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand containerClass="container-large" />
    </>
  );
}
