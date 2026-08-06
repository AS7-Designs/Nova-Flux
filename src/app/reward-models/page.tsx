import type { Metadata } from "next";

import { Eyebrow } from "@/components/elements/eyebrow";
import { FluxWavePattern } from "@/components/elements/flux-wave-pattern";
import CtaBand from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Reward Models",
  description:
    "Reward your network the way your business was designed to. Custom commission logic, multi-level structures, matching bonuses, recurring rewards, and leadership pools.",
};

import { Award, CheckCircle2, Layers, Repeat, TrendingUp, UserPlus } from "lucide-react";

const REWARD_MODELS = [
  {
    icon: UserPlus,
    badge: "MODEL 01",
    title: "Reward People for Bringing Others In",
    description: "When someone refers a new member, customer, or partner, they should be rewarded for it immediately and accurately.",
    items: [
      "Direct Referral Commissions",
      "Fast Start Bonuses",
      "First Purchase Commissions",
      "Enroller Based Rewards",
    ],
    spanClass: "lg:col-span-7",
  },
  {
    icon: TrendingUp,
    badge: "MODEL 02",
    title: "Reward People for Network Performance",
    description: "As your members build their own teams, their rewards should reflect the growth happening beneath them, not just their own direct activity.",
    items: [
      "Multi-level Commission Structures",
      "Matching Bonuses",
      "Generation Based Commissions",
      "Differential Commissions",
    ],
    spanClass: "lg:col-span-5",
  },
  {
    icon: Repeat,
    badge: "MODEL 03",
    title: "Reward Consistency & Long Term Loyalty",
    description: "Businesses built on memberships and subscriptions need a commission model that rewards recurring activity, not just one-time transactions.",
    items: [
      "Recurring Subscription Commissions",
      "Monthly & Annual Reward Cycles",
      "Loyalty Based Incentives",
      "Renewal Bonuses",
    ],
    spanClass: "lg:col-span-5",
  },
  {
    icon: Award,
    badge: "MODEL 04",
    title: "Reward Your Top Performers Differently",
    description: "Your highest performing members deserve recognition beyond standard commissions. Structured rank and achievement systems keep your best people moving forward.",
    items: [
      "Rank Advancement Bonuses",
      "Leadership Pool Rewards",
      "Achievement Awards",
      "Performance Based Incentives",
    ],
    spanClass: "lg:col-span-7",
  },
  {
    icon: Layers,
    badge: "MODEL 05",
    title: "Reward Team Growth & Collective Volume",
    description: "Reflect the collective performance of a team or network structure, not just individual referrals, through team-based reward models.",
    items: [
      "Team Volume Commissions",
      "Network Performance Rewards",
      "Structured Plan Based Commissions",
      "Pool and Shared Bonus Models",
    ],
    spanClass: "lg:col-span-12",
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
        <div className="container container-large">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
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
              return (
                <div
                  key={idx}
                  className={cn(
                    "relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/70 bg-card text-card-foreground p-6 md:p-8 lg:p-9 flex flex-col justify-between transition-colors hover:border-primary/40",
                    model.spanClass
                  )}
                >
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <Icon className="size-5" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                        {model.badge}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                        {model.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {model.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 mt-6 pt-6 border-t border-border/50 space-y-3">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-foreground/80">
                      What this looks like in NovaDirect:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {model.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-muted/40 border border-border/50 text-xs font-medium text-foreground">
                          <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation Section (Not a card) */}
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

      {/* Commission Engine Section */}
      <section className="section-padding bg-card/30 border-t border-border/50">
        <div className="container container-large">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <Eyebrow className="justify-center">Engine</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-tight lg:text-4xl">
                Commission Engine: Built to Handle Whatever You Design
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Behind every compensation model on NovaDirect is a commission engine built for accuracy, speed, and flexibility. Whether your plan is straightforward or highly complex, the engine handles the calculation, the timing, and the payout automatically.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Custom commission logic for any business model",
                "Accurate calculations across multiple levels and structures",
                "Automated payout triggers and approval workflows",
                "Full audit trail and commission history",
              ].map((feat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-card border border-border/60 flex items-center gap-3">
                  <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    ✓
                  </div>
                  <span className="text-sm font-medium text-foreground">{feat}</span>
                </div>
              ))}
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
