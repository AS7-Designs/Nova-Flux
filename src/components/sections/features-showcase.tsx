"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
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
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

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
      "Whether you sell physical products, digital services, memberships, or subscriptions, NovaDirect connects your offering directly to your network. Your members can browse, buy, and refer, all within your branded platform.",
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
      "No two direct selling businesses reward their people the same way. NovaDirect is built to handle the full complexity of your compensation plan, whatever that looks like, accurately and automatically.",
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
      "Getting paid and paying out your network should never be a source of stress. NovaDirect manages the full payment cycle, from customer transactions and gateway integrations to wallet management and payouts.",
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
      "Every part of your operation — your members, your products, your commissions, your payouts — lives inside one unified admin experience. Role-based access means the right people see exactly what they need to.",
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

interface IndividualCardProps {
  layer: (typeof layers)[0];
  index: number;
  total: number;
  progress: any;
  prefersReducedMotion: boolean;
}

function IndividualCard({ layer, index, total, progress, prefersReducedMotion }: IndividualCardProps) {
  const Icon = layer.icon;
  const SubIcon = layer.subIcon;
  const isLast = index === total - 1;

  // Scroll phase calculation
  // Total progress is [0, 1]
  // First phase is header scrolling away, then cards 0..3 exit between 0.15 and 0.85
  const stepSize = 0.70 / (total - 1);
  const exitStart = 0.15 + index * stepSize;
  const exitEnd = exitStart + stepSize * 0.75;

  // Exit transforms when card flips & slides up off the deck
  const exitY = useTransform(progress, [exitStart, exitEnd], ["0%", "-120%"]);
  const exitRotateX = useTransform(progress, [exitStart, exitEnd], [0, 10]);
  const exitOpacity = useTransform(progress, [exitStart, exitEnd], [1, 0]);

  // Base stack positioning (cards underneath at start)
  const baseScale = 1 - index * 0.035;
  const baseTranslateY = index * 10;

  // Interpolation arrays for stepping forward
  const breakpoints: number[] = [0];
  const scaleValues: number[] = [baseScale];
  const yValues: number[] = [baseTranslateY];

  for (let k = 0; k < index; k++) {
    const kExitStart = 0.15 + k * stepSize;
    const kExitEnd = kExitStart + stepSize * 0.75;
    const cardsAhead = index - (k + 1);

    breakpoints.push(kExitStart, kExitEnd);
    scaleValues.push(1 - (index - k) * 0.035, 1 - cardsAhead * 0.035);
    yValues.push((index - k) * 10, cardsAhead * 10);
  }

  breakpoints.push(1.0);
  scaleValues.push(scaleValues[scaleValues.length - 1]);
  yValues.push(yValues[yValues.length - 1]);

  const currentScale = useTransform(progress, breakpoints, scaleValues);
  const currentStackY = useTransform(progress, breakpoints, yValues);

  const cardY = useTransform(progress, (p: number) => {
    if (!isLast && p >= exitStart) {
      return exitY.get();
    }
    return `${currentStackY.get()}px`;
  });

  const cardRotateX = useTransform(progress, (p: number) => {
    if (!isLast && p >= exitStart) {
      return exitRotateX.get();
    }
    return 0;
  });

  const cardOpacity = useTransform(progress, (p: number) => {
    if (!isLast && p >= exitStart) {
      return exitOpacity.get();
    }
    return 1;
  });

  const zIndex = total - index;

  return (
    <motion.div
      id={layer.id}
      style={
        prefersReducedMotion
          ? { zIndex }
          : {
              y: cardY,
              scale: currentScale,
              rotateX: cardRotateX,
              opacity: cardOpacity,
              zIndex,
              perspective: 1000,
            }
      }
      className="absolute inset-x-0 top-0 origin-top"
    >
      <Card className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/70 bg-card text-card-foreground shadow-xl dark:shadow-2xl p-6 md:p-8 lg:p-10 transition-all duration-300">
        <FluxDotGrid className="opacity-[0.03] dark:opacity-[0.05]" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <Eyebrow>{layer.eyebrow}</Eyebrow>
              <span className="text-xs font-mono font-semibold tracking-wider text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                LAYER {layer.number}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-tight">
              {layer.title}
            </h3>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {layer.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {layer.bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-muted/40 border border-border/50 text-xs md:text-sm font-medium text-foreground transition-colors hover:bg-muted/70"
                >
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Feature Graphic */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-xl border border-border/60 bg-muted/20 p-6 md:p-8 flex flex-col justify-between min-h-[200px] md:min-h-[240px]">
              <div className="flex items-center justify-between mb-4">
                <div className="size-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Icon className="size-6" />
                </div>
                <span className="text-[10px] font-mono font-semibold tracking-widest uppercase text-muted-foreground bg-background px-2.5 py-1 rounded-md border border-border">
                  {layer.badgeText}
                </span>
              </div>

              <div className="space-y-2 mt-auto">
                <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                  <SubIcon className="size-4" />
                  <span>{layer.stat}</span>
                </div>
                <p className="text-sm font-semibold text-foreground leading-snug">
                  {layer.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function FeaturesShowcase({
  className,
  containerClass,
}: {
  className?: string;
  containerClass?: string;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="platform" className={cn("py-12 md:py-16 relative overflow-hidden", className)}>
      <div className={cn("container container-large", containerClass)}>
        {/* Section Header */}
        <motion.div
          className="max-w-3xl space-y-2.5 mx-auto text-center mb-6 md:mb-8"
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 100, damping: 25 },
            },
          }}
        >
          <Eyebrow className="justify-center">The Platform</Eyebrow>
          <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl font-semibold text-foreground">
            Every Layer of Your Business. One Platform.
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            NovaDirect covers every layer of your direct selling operation, from member management and product sales to commission automation and global payouts, all configured around your business and all under your brand.
          </p>
        </motion.div>

        {/* Scroll Track for Card Stack */}
        <div ref={containerRef} className="relative h-[320vh]">
          {/* Centered Sticky Container */}
          <div className="sticky top-20 md:top-24 h-[calc(100vh-6rem)] flex items-center justify-center overflow-hidden">
            <div className="relative w-full max-w-5xl mx-auto min-h-[420px] md:min-h-[460px]">
              {layers.map((layer, index) => (
                <IndividualCard
                  key={layer.id}
                  layer={layer}
                  index={index}
                  total={layers.length}
                  progress={scrollYProgress}
                  prefersReducedMotion={prefersReducedMotion}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
