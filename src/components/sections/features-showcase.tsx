"use client";

import { useEffect, useRef, useCallback } from "react";
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

/* ─── Card Content Component ─── */

function LayerCard({ layer }: { layer: (typeof layers)[0] }) {
  const Icon = layer.icon;
  const SubIcon = layer.subIcon;

  return (
    <Card className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/70 bg-card text-card-foreground p-6 md:p-8 lg:p-12 lg:py-16">
      <FluxDotGrid className="opacity-[0.03] dark:opacity-[0.05]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
        {/* Content Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between">
            <Eyebrow>{layer.eyebrow}</Eyebrow>
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
          <div className="relative overflow-hidden rounded-xl border border-border/60 bg-muted/20 p-6 md:p-8 flex flex-col justify-between min-h-[240px] md:min-h-[280px]">
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
  const headerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setCardRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      cardRefs.current[index] = el;
    },
    []
  );

  useEffect(() => {
    const header = headerRef.current;
    const stage = stageRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!header || !stage || cards.length === 0) return;

    // Initial state: all cards except first are pushed off-screen below
    cards.forEach((card, i) => {
      if (i === 0) {
        gsap.set(card, { y: 0, scale: 1, zIndex: 1 });
      } else {
        gsap.set(card, { y: window.innerHeight, scale: 1, zIndex: i + 1 });
      }
    });

    const scrollPerCard = window.innerHeight * 0.8;
    const totalScroll = cards.length * scrollPerCard;

    // Main pinned timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stage,
        start: "top 12%",
        end: `+=${totalScroll}`,
        pin: true,
        scrub: 1,
        pinSpacing: true,
      },
    });

    // Fade out the header during the first segment
    tl.to(
      header,
      {
        opacity: 0,
        y: -60,
        duration: 0.12,
        ease: "power2.in",
      },
      0
    );

    // Card transitions: each card slides up from below
    const segmentDuration = 1 / cards.length;

    for (let i = 1; i < cards.length; i++) {
      const startTime = i * segmentDuration;

      // Slide new card in from below, landing on top
      tl.to(
        cards[i],
        {
          y: 0,
          duration: segmentDuration * 0.8,
          ease: "power2.out",
        },
        startTime
      );

      // Scale down and shift all previously visible cards to create "peeking" depth
      for (let j = i - 1; j >= 0; j--) {
        const depth = i - j; // how many layers back this card is
        tl.to(
          cards[j],
          {
            scale: 1 - depth * 0.035,
            y: -depth * 14,
            duration: segmentDuration * 0.8,
            ease: "power2.out",
          },
          startTime
        );
      }
    }

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section id="platform" className={cn("relative", className)}>
      {/* Section Header */}
      <div ref={headerRef} className="pt-20 md:pt-28">
        <div
          className={cn(
            "container container-large text-center",
            containerClass
          )}
        >
          <div className="max-w-3xl mx-auto space-y-2.5">
            <Eyebrow className="justify-center">The Platform</Eyebrow>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-foreground tracking-tight">
              Every Layer of Your Business. One Platform.
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              NovaDirect covers every layer of your direct selling operation,
              from member management and product sales to commission automation
              and global payouts, all configured around your business and all
              under your brand.
            </p>
          </div>
        </div>
      </div>

      {/* 16px spacer between header and first card */}
      <div style={{ height: "16px" }} />

      {/* Pinned Cards Stage */}
      <div
        ref={stageRef}
        className="relative overflow-hidden"
        style={{ height: "88vh" }}
      >
        {layers.map((layer, index) => (
          <div
            key={layer.id}
            ref={setCardRef(index)}
            className="absolute inset-0 flex items-start justify-center pt-2 px-4"
          >
            <div className="w-full max-w-6xl mx-auto">
              <LayerCard layer={layer} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
