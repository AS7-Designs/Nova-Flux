import type { Metadata } from "next";

import CtaBand from "@/components/sections/cta-band";
import { Eyebrow } from "@/components/elements/eyebrow";
import { FluxWavePattern } from "@/components/elements/flux-wave-pattern";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Reward Models",
  description:
    "Reward your network the way your business was designed to. Custom commission logic, multi-level structures, matching bonuses, recurring rewards, and leadership pools.",
};

const REWARD_MODELS = [
  {
    title: "Reward People for Bringing Others In",
    tagline: "The most fundamental part of any network.",
    description: "When someone refers a new member, customer, or partner, they should be rewarded for it immediately and accurately.",
    items: [
      "Direct Referral Commissions",
      "Fast Start Bonuses",
      "First Purchase Commissions",
      "Enroller Based Rewards",
    ],
  },
  {
    title: "Reward People for Network Performance",
    tagline: "Drive growth as members build teams.",
    description: "As your members build their own teams, their rewards should reflect the growth happening beneath them, not just their own direct activity.",
    items: [
      "Multi-level Commission Structures",
      "Matching Bonuses",
      "Generation Based Commissions",
      "Differential Commissions",
    ],
  },
  {
    title: "Reward Consistency & Long Term Loyalty",
    tagline: "Sustained revenue from subscriptions.",
    description: "Businesses built on memberships and subscriptions need a commission model that rewards recurring activity, not just one-time transactions.",
    items: [
      "Recurring Subscription Commissions",
      "Monthly and Annual Reward Cycles",
      "Loyalty Based Incentives",
      "Renewal Bonuses",
    ],
  },
  {
    title: "Reward Your Top Performers Differently",
    tagline: "Keep leadership motivated.",
    description: "Your highest performing members deserve recognition beyond standard commissions. Structured rank and achievement systems keep your best people moving forward.",
    items: [
      "Rank Advancement Bonuses",
      "Leadership Pool Rewards",
      "Achievement Awards",
      "Performance Based Incentives",
    ],
  },
  {
    title: "Reward Team Growth & Collective Volume",
    tagline: "Structure-wide team incentives.",
    description: "Reflect the collective performance of a team or network structure, not just individual referrals, through team-based reward models.",
    items: [
      "Team Volume Commissions",
      "Network Performance Rewards",
      "Structured Plan Based Commissions",
      "Pool and Shared Bonus Models",
    ],
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

      {/* Reward Models Grid */}
      <section className="section-padding relative">
        <div className="container container-large">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {REWARD_MODELS.map((model, idx) => (
              <Card key={idx} className="border-border/60 bg-card p-6 md:p-8 flex flex-col justify-between hover:shadow-md transition-all">
                <CardHeader className="p-0 space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Model 0{idx + 1}
                  </span>
                  <CardTitle className="text-2xl font-semibold tracking-tight">{model.title}</CardTitle>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {model.description}
                  </p>
                </CardHeader>
                <CardContent className="p-0 mt-6 pt-6 border-t border-border/40">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-3">
                    What this looks like in NovaDirect:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {model.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="size-1.5 rounded-full bg-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}

            {/* Callout Card */}
            <Card className="border-primary/40 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 md:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Consultation
                </span>
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                  Not Sure Which Model Fits Your Business?
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  That is exactly what our discovery call is for. We have worked with businesses across direct selling, memberships, subscriptions, ambassador programs, and partner networks. We will help you design a compensation model that works for your people and your growth goals.
                </p>
              </div>
              <div className="mt-6 pt-4">
                <Button size="lg" className="rounded-full" asChild>
                  <a href="/contact">Schedule a Discovery Call</a>
                </Button>
              </div>
            </Card>
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
                COMMISSION ENGINE: Built to Handle Whatever You Design
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

      <CtaBand containerClass="container-large" />
    </>
  );
}
