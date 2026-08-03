"use client";

import { motion } from "motion/react";
import { Users, RefreshCw, ShoppingBag, Award, Laptop } from "lucide-react";

import { Eyebrow } from "@/components/elements/eyebrow";
import { FluxDotGrid } from "@/components/elements/flux-dot-grid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const AUDIENCES = [
  {
    icon: Users,
    title: "Direct Selling Companies",
    description: "Building and managing a network of distributors or consultants with commission-based rewards.",
    badge: "MLM & Direct Sales",
    span: "lg:col-span-3",
  },
  {
    icon: RefreshCw,
    title: "Membership & Subscription Businesses",
    description: "Running a member program where referrals, renewals, and rewards need to work together seamlessly.",
    badge: "Subscriptions",
    span: "lg:col-span-3",
  },
  {
    icon: ShoppingBag,
    title: "Product & Retail Brands",
    description: "Selling through a network of representatives or brand partners with tiered commissions, member pricing, and structured rewards.",
    badge: "Commerce",
    span: "lg:col-span-2",
  },
  {
    icon: Award,
    title: "Ambassador & Referral Programs",
    description: "Rewarding customers, partners, or advocates who bring in new business through structured commission models.",
    badge: "Advocacy",
    span: "lg:col-span-2",
  },
  {
    icon: Laptop,
    title: "SaaS & Digital Product Companies",
    description: "Growing through partner programs, affiliate networks, or commission-based sales teams.",
    badge: "Digital & Tech",
    span: "lg:col-span-2",
  },
];

export default function WhosItFor({
  className,
  containerClass,
}: {
  className?: string;
  containerClass?: string;
}) {
  return (
    <section className={cn("section-padding relative overflow-hidden", className)}>
      <FluxDotGrid className="opacity-[0.03]" />
      <div className={cn("relative z-10 container", containerClass)}>
        <div className="mx-auto max-w-3xl space-y-3 lg:space-y-4 lg:text-center">
          <Eyebrow className="justify-center">Who It's For</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight lg:text-5xl">
            Built for Any Business That Grows Through Its People.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            If your business grows through a network of distributors, members, consultants, affiliates, ambassadors, or partners — NovaDirect was built for you.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-6 lg:gap-6">
          {AUDIENCES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card
                key={idx}
                className={cn(
                  "group relative overflow-hidden border-border/60 hover:border-primary/40 transition-all duration-300 hover:shadow-md bg-card",
                  item.span
                )}
              >
                <div aria-hidden className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-primary/30 via-chart-2/20 to-transparent" />
                <CardHeader className="p-6 md:p-8">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="size-6" />
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent text-muted-foreground">
                      {item.badge}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-semibold tracking-tight">{item.title}</CardTitle>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-2">
                    {item.description}
                  </p>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
