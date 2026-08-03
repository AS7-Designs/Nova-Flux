"use client";

import AltArrowRightLinear from "@iconify-react/solar/alt-arrow-right-linear";
import BoltLinear from "@iconify-react/solar/bolt-linear";
import ChartSquareLinear from "@iconify-react/solar/chart-square-linear";
import CodeSquareLinear from "@iconify-react/solar/code-square-linear";
import HeadphonesRoundLinear from "@iconify-react/solar/headphones-round-linear";
import LetterLinear from "@iconify-react/solar/letter-linear";
import PlugCircleLinear from "@iconify-react/solar/plug-circle-linear";
import RankingLinear from "@iconify-react/solar/ranking-linear";
import SettingsLinear from "@iconify-react/solar/settings-linear";
import ShieldCheckLinear from "@iconify-react/solar/shield-check-linear";
import UsersGroupRoundedLinear from "@iconify-react/solar/users-group-rounded-linear";
import UsersGroupTwoRoundedLinear from "@iconify-react/solar/users-group-two-rounded-linear";
import { motion } from "motion/react";
import { useState } from "react";

import { Eyebrow } from "@/components/elements/eyebrow";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const pricingPlans = {
  pro: {
    title: "Pro Plan",
    subtitle: "Best for individuals",
    description: "Solo founders & reps",
    monthlyPrice: 25,
    annualPrice: 19,
    popular: true,
    features: [
      {
        name: "Contact & lead management",
        included: true,
        icon: UsersGroupRoundedLinear,
      },
      { name: "AI deal scoring", included: true, icon: RankingLinear },
      { name: "Email & calendar sync", included: true, icon: LetterLinear },
      { name: "Pipeline automation", included: true, icon: BoltLinear },
      {
        name: "Team collaboration & roles",
        included: false,
        icon: UsersGroupTwoRoundedLinear,
      },
      {
        name: "Advanced analytics & forecasting",
        included: false,
        icon: ChartSquareLinear,
      },
      {
        name: "Full API access & webhooks",
        included: false,
        icon: CodeSquareLinear,
      },
      {
        name: "Dedicated success manager",
        included: false,
        icon: HeadphonesRoundLinear,
      },
    ],
  },
  team: {
    title: "Team Plan",
    subtitle: "Best for growing teams",
    description: "Sales & success teams",
    monthlyPrice: 59,
    annualPrice: 44,
    popular: false,
    features: [
      {
        name: "Unlimited team members & roles",
        included: true,
        icon: UsersGroupTwoRoundedLinear,
      },
      {
        name: "AI deal scoring & forecasting",
        included: true,
        icon: RankingLinear,
      },
      {
        name: "Advanced analytics & reporting",
        included: true,
        icon: ChartSquareLinear,
      },
      {
        name: "Custom workflows & automations",
        included: true,
        icon: SettingsLinear,
      },
      {
        name: "Full API access & webhooks",
        included: true,
        icon: CodeSquareLinear,
      },
      {
        name: "Native CRM integrations",
        included: true,
        icon: PlugCircleLinear,
      },
      {
        name: "Role-based permissions & SSO",
        included: true,
        icon: ShieldCheckLinear,
      },
      {
        name: "Priority 24/7 support",
        included: true,
        icon: HeadphonesRoundLinear,
      },
    ],
  },
};

export default function Pricing({
  className,
  containerClass,
  titleAs: TitleTag = "h2",
}: {
  className?: string;
  containerClass?: string;
  titleAs?: "h1" | "h2";
}) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className={cn("section-padding bg-background relative overflow-hidden", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_100%_80%_at_50%_38%,black_15%,transparent_72%)] [-webkit-mask-image:radial-gradient(ellipse_100%_80%_at_50%_38%,black_15%,transparent_72%)] lg:[mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black_20%,transparent_75%)] lg:[-webkit-mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black_20%,transparent_75%)]"
      >
        <img
          src="/images/backgrounds/ethereal-light-play.webp"
          alt=""
          loading="lazy"
          className="h-full w-full object-cover object-[50%_32%] opacity-90 lg:object-center lg:opacity-80"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="from-background/30 to-background/30 pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b"
      />

      <div className={cn("relative z-10 container", containerClass)}>
        {/* Section Header */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
          {/* Left side - Title and subtitle */}
          <div className="max-w-3xl space-y-3 text-center md:text-start lg:space-y-4">
            <Eyebrow>Pricing</Eyebrow>
            <TitleTag className="text-4xl font-medium tracking-tighter md:text-6xl md:leading-none lg:text-7xl">
              Pricing that scales <br className="hidden md:block" />
              with your pipeline
            </TitleTag>
            <p className="text-muted-foreground hidden text-lg leading-relaxed md:block">
              No hidden fees, no per-seat surprises. Every plan includes the AI CRM core, with more power as your team
              scales.
            </p>
          </div>

          {/* Right side - Billing Switch */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "text-lg font-semibold transition-colors",
                  !isAnnual ? "text-foreground" : "text-muted-foreground",
                )}
              >
                Monthly
              </span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                aria-label="Toggle annual billing"
                className="bg-card data-[state=checked]:bg-card data-[state=unchecked]:bg-card [&_[data-slot=switch-thumb]]:bg-primary"
              />
              <span
                className={cn(
                  "text-lg font-semibold transition-colors",
                  isAnnual ? "text-foreground" : "text-muted-foreground",
                )}
              >
                Annual
              </span>
            </div>
            <p className="text-center text-sm font-medium">Save 25% on annual plan</p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-8 grid gap-5 lg:mt-12 lg:grid-cols-2 lg:gap-6">
          {Object.entries(pricingPlans).map(([key, plan]) => (
            <Card
              key={key}
              className="bg-card text-card-foreground border-border relative h-full gap-0 overflow-hidden rounded-md border py-0 shadow-none"
            >
              <CardHeader className="gap-0 p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-semibold tracking-tight">{plan.title}</h3>
                  {plan.popular && (
                    <Badge variant="outline" className="rounded-full">
                      Popular Plan
                    </Badge>
                  )}
                </div>

                <div className="mt-6 space-y-1 md:mt-8">
                  <p className="text-muted-foreground text-sm md:text-base">{plan.subtitle}</p>
                  <p className="text-lg font-medium tracking-tight md:text-2xl">{plan.description}</p>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 md:mt-10 md:gap-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-medium">$</span>
                    <span className="text-5xl font-medium tracking-tight md:text-6xl">
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground text-xl">/mo</span>
                  </div>
                  <Button className="h-10 !pl-5.5 before:rounded-full">
                    Purchase {plan.title.replace(" Plan", "")}
                    <div className="bg-background/15 border-background/10 grid size-5.5 place-items-center rounded-full border">
                      <AltArrowRightLinear className="size-4" />
                    </div>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="border-border grid gap-4 border-t p-6 md:grid-cols-2 md:p-8">
                {plan.features.map((feature, fIdx) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={fIdx}
                      className={cn(
                        "flex items-center gap-3 pb-3",
                        fIdx < plan.features.length - 2 && "border-foreground/[0.06] border-b border-dotted",
                      )}
                    >
                      <Icon
                        className={cn("size-4 shrink-0", feature.included ? "text-primary" : "text-muted-foreground")}
                      />
                      <span
                        className={cn(
                          "text-sm leading-snug",
                          feature.included ? "text-muted-foreground" : "text-muted-foreground line-through",
                        )}
                      >
                        {feature.name}
                      </span>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
