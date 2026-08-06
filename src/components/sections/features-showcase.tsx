"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  ShoppingBag,
  TrendingUp,
  CreditCard,
  Settings,
  CheckCircle2,
  Network,
  Layers,
  Zap,
  Wallet,
  ShieldCheck,
} from "lucide-react";

import { Eyebrow } from "@/components/elements/eyebrow";
import { FluxDotGrid } from "@/components/elements/flux-dot-grid";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const layers = [
  {
    id: "layer-people",
    number: "01",
    eyebrow: "01 — YOUR PEOPLE",
    title: "Build, Manage and Grow Your Network",
    description:
      "Your network is the engine of your business. NovaDirect gives you complete visibility and control over everyone in it, from the moment they join to the moment they become your top performer.",
    bullets: [
      "Member and Distributor Management",
      "Referral Link and Sponsor Tracking",
      "Team Structures and Network Visibility",
      "Rank and Performance Management",
    ],
    icon: Users,
    subIcon: Network,
    badgeText: "DISTRIBUTOR NETWORK",
    stat: "100% Hierarchy Visibility",
  },
  {
    id: "layer-products",
    number: "02",
    eyebrow: "02 — YOUR PRODUCTS",
    title: "Sell What You Offer. However You Offer It.",
    description:
      "Whether you sell physical products, digital services, memberships, or subscriptions, NovaDirect connects your offering directly to your network.",
    bullets: [
      "Physical and Digital Product Catalog",
      "Membership and Subscription Billing",
      "Bundles and Advanced Offerings",
      "Member Pricing vs Retail Tier Pricing",
    ],
    icon: ShoppingBag,
    subIcon: Layers,
    badgeText: "MULTI-PRODUCT CATALOG",
    stat: "Subscriptions & Digital Bundles",
  },
  {
    id: "layer-compensation",
    number: "03",
    eyebrow: "03 — YOUR COMPENSATION",
    title: "Your Commission Logic. Built Exactly as Designed.",
    description:
      "No two direct selling businesses reward their people the same way. NovaDirect is built to handle the full complexity of your compensation plan, accurately and automatically.",
    bullets: [
      "Custom Commission Logic Engine",
      "Multi-level and Referral Commissions",
      "Matching and Generation Bonuses",
      "Rank Advancement and Qualifications",
    ],
    icon: TrendingUp,
    subIcon: Zap,
    badgeText: "COMMISSION ENGINE",
    stat: "Real-Time Calculation & Audits",
  },
  {
    id: "layer-payments",
    number: "04",
    eyebrow: "04 — YOUR PAYMENTS",
    title: "From First Transaction to Final Payout. Handled.",
    description:
      "NovaDirect manages the full payment cycle, from customer transactions and gateway integrations to wallet management, payouts, and tax compliance.",
    bullets: [
      "Multi-Gateway Integrations",
      "eWallet and Earnings Ledger",
      "Payout Request and Approval Workflows",
      "Tax Documentation and Compliance",
    ],
    icon: CreditCard,
    subIcon: Wallet,
    badgeText: "GLOBAL PAYOUT ENGINE",
    stat: "eWallets & Gateway Integrations",
  },
  {
    id: "layer-control",
    number: "05",
    eyebrow: "05 — YOUR CONTROL",
    title: "One Admin Layer. Complete Visibility Across Everything.",
    description:
      "Every part of your operation lives inside one unified admin experience. Role-based access means the right people see exactly what they need to.",
    bullets: [
      "Unified Admin Dashboard",
      "Role-Based Access Control",
      "Real-Time Network Analytics",
      "Commission Adjustments and Audits",
    ],
    icon: Settings,
    subIcon: ShieldCheck,
    badgeText: "UNIFIED ADMIN CONTROL",
    stat: "Granular Role-Based Permissions",
  },
];

/* ─── Individual Stacking Card ─── */

interface StackCardProps {
  layer: (typeof layers)[0];
  index: number;
  totalCards: number;
}

function StackCard({ layer, index, totalCards }: StackCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const Icon = layer.icon;
  const SubIcon = layer.subIcon;

  useEffect(() => {
    const card = cardRef.current;
    const container = containerRef.current;
    if (!card || !container) return;

    const targetScale = 1 - (totalCards - index) * 0.05;

    gsap.set(card, {
      scale: 1,
      transformOrigin: "center top",
    });

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const scale = gsap.utils.interpolate(1, targetScale, progress);
        gsap.set(card, {
          scale: Math.max(scale, targetScale),
          transformOrigin: "center top",
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [index, totalCards]);

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "sticky",
        top: 0,
      }}
    >
      <div
        ref={cardRef}
        className="w-[90%] md:w-[80%] lg:w-[70%]"
        style={{
          position: "relative",
          top: `calc(-5vh + ${index * 25}px)`,
          transformOrigin: "top",
        }}
      >
        <Card className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/70 bg-card text-card-foreground shadow-xl dark:shadow-2xl p-5 md:p-7 lg:p-8">
          <FluxDotGrid className="opacity-[0.03] dark:opacity-[0.05]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
            {/* Content Column */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="flex items-center justify-between">
                <Eyebrow>{layer.eyebrow}</Eyebrow>
                <span className="text-[11px] font-mono font-semibold tracking-wider text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full">
                  LAYER {layer.number}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-foreground leading-tight">
                {layer.title}
              </h3>

              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                {layer.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {layer.bullets.map((bullet, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded-lg bg-muted/40 border border-border/50 text-xs font-medium text-foreground transition-colors hover:bg-muted/70"
                  >
                    <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Feature Graphic */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-xl border border-border/60 bg-muted/20 p-5 md:p-6 flex flex-col justify-between min-h-[170px] md:min-h-[200px]">
                <div className="flex items-center justify-between mb-3">
                  <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-[9px] font-mono font-semibold tracking-widest uppercase text-muted-foreground bg-background px-2 py-0.5 rounded border border-border">
                    {layer.badgeText}
                  </span>
                </div>

                <div className="space-y-1.5 mt-auto">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-primary">
                    <SubIcon className="size-3.5" />
                    <span>{layer.stat}</span>
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-foreground leading-snug">
                    {layer.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

/* ─── Main Section ─── */

export default function FeaturesShowcase({
  className,
  containerClass,
}: {
  className?: string;
  containerClass?: string;
}) {
  return (
    <section id="platform" className={cn("relative overflow-hidden", className)}>
      {/* Section Header */}
      <div
        style={{
          height: "60vh",
          width: "100%",
          display: "grid",
          placeContent: "center",
          position: "relative",
        }}
      >
        <div className={cn("container container-large text-center", containerClass)}>
          <div className="max-w-3xl mx-auto space-y-2.5">
            <Eyebrow className="justify-center">The Platform</Eyebrow>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-foreground tracking-tight">
              Every Layer of Your Business. One Platform.
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              NovaDirect covers every layer of your direct selling operation, from member management and product sales to commission automation and global payouts, all configured around your business and all under your brand.
            </p>
          </div>
        </div>
      </div>

      {/* Stacking Cards */}
      <div>
        {layers.map((layer, index) => (
          <StackCard
            key={layer.id}
            layer={layer}
            index={index}
            totalCards={layers.length}
          />
        ))}
      </div>
    </section>
  );
}
