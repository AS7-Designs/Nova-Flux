"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Users, ShoppingBag, TrendingUp, CreditCard, Settings, CheckCircle2 } from "lucide-react";

import { Eyebrow } from "@/components/elements/eyebrow";
import { FluxDotGrid } from "@/components/elements/flux-dot-grid";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

const layers = [
  {
    id: "layer-people",
    number: "01",
    eyebrow: "YOUR PEOPLE",
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
    cardBg: "bg-gradient-to-br from-[#0D1B3E] via-[#152B68] to-[#0A132E] text-white border-blue-500/40",
    accentColor: "text-[#5EEBFC]",
    badgeBg: "bg-[#5EEBFC]/15 border-[#5EEBFC]/30 text-[#5EEBFC]",
    pillBg: "bg-white/10 border-white/15 text-white",
  },
  {
    id: "layer-products",
    number: "02",
    eyebrow: "YOUR PRODUCTS",
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
    cardBg: "bg-gradient-to-br from-[#082A42] via-[#0C456E] to-[#061C2C] text-white border-cyan-500/40",
    accentColor: "text-[#0090FF]",
    badgeBg: "bg-[#0090FF]/15 border-[#0090FF]/30 text-[#0090FF]",
    pillBg: "bg-white/10 border-white/15 text-white",
  },
  {
    id: "layer-compensation",
    number: "03",
    eyebrow: "YOUR COMPENSATION",
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
    cardBg: "bg-gradient-to-br from-[#211042] via-[#351A68] to-[#160B2B] text-white border-purple-500/40",
    accentColor: "text-purple-300",
    badgeBg: "bg-purple-500/15 border-purple-500/30 text-purple-300",
    pillBg: "bg-white/10 border-white/15 text-white",
  },
  {
    id: "layer-payments",
    number: "04",
    eyebrow: "YOUR PAYMENTS",
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
    cardBg: "bg-gradient-to-br from-[#083327] via-[#0E5440] to-[#052219] text-white border-emerald-500/40",
    accentColor: "text-emerald-300",
    badgeBg: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
    pillBg: "bg-white/10 border-white/15 text-white",
  },
  {
    id: "layer-control",
    number: "05",
    eyebrow: "YOUR CONTROL",
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
    cardBg: "bg-gradient-to-br from-[#182232] via-[#26354D] to-[#0E1520] text-white border-slate-400/40",
    accentColor: "text-blue-300",
    badgeBg: "bg-blue-500/15 border-blue-500/30 text-blue-300",
    pillBg: "bg-white/10 border-white/15 text-white",
  },
];

interface IndividualCardProps {
  layer: (typeof layers)[0];
  index: number;
  total: number;
  progress: any;
}

function IndividualCard({ layer, index, total, progress }: IndividualCardProps) {
  const Icon = layer.icon;
  const isLast = index === total - 1;

  // Calculate exit range for this card (when it slides up off the stack)
  // Total scroll range split: Header uses [0, 0.12], cards exit sequentially between [0.15, 0.85]
  const stepSize = 0.70 / (total - 1);
  const exitStart = 0.15 + index * stepSize;
  const exitEnd = exitStart + stepSize * 0.7;

  // Transforms for exiting card
  const exitY = useTransform(progress, [exitStart, exitEnd], ["0%", "-115%"]);
  const exitRotateX = useTransform(progress, [exitStart, exitEnd], [0, 14]);
  const exitOpacity = useTransform(progress, [exitStart, exitEnd], [1, 0]);

  // Base stack values (when card sits behind in initial deck state)
  const baseScale = 1 - index * 0.04;
  const baseTranslateY = index * 14;

  // Build interpolation arrays for promotion (cards moving forward as previous cards exit)
  const breakpoints: number[] = [0];
  const scaleValues: number[] = [baseScale];
  const yValues: number[] = [baseTranslateY];

  for (let k = 0; k < index; k++) {
    const kExitStart = 0.15 + k * stepSize;
    const kExitEnd = kExitStart + stepSize * 0.7;
    const cardsAhead = index - (k + 1);

    breakpoints.push(kExitStart, kExitEnd);
    scaleValues.push(1 - (index - k) * 0.04, 1 - cardsAhead * 0.04);
    yValues.push((index - k) * 14, cardsAhead * 14);
  }

  breakpoints.push(1.0);
  scaleValues.push(scaleValues[scaleValues.length - 1]);
  yValues.push(yValues[yValues.length - 1]);

  const currentScale = useTransform(progress, breakpoints, scaleValues);
  const currentStackY = useTransform(progress, breakpoints, yValues);

  // Combine stack positioning with exit animation
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
      style={{
        y: cardY,
        scale: currentScale,
        rotateX: cardRotateX,
        opacity: cardOpacity,
        zIndex,
        perspective: 1000,
      }}
      className="absolute inset-x-0 top-0 origin-top transition-shadow duration-300"
    >
      <Card
        className={cn(
          "relative overflow-hidden rounded-3xl border shadow-2xl p-6 md:p-8 lg:p-10 transition-all duration-300",
          layer.cardBg
        )}
      >
        <FluxDotGrid className="opacity-[0.06]" />

        {/* Top hairline accent line */}
        <div
          aria-hidden
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5EEBFC] via-[#0090FF] to-[#1164F0]"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-4 md:space-y-5">
            <div className="flex items-center justify-between">
              <span className={cn("text-xs font-bold tracking-widest uppercase", layer.accentColor)}>
                {layer.eyebrow}
              </span>
              <span
                className={cn(
                  "text-xs font-mono font-bold tracking-widest px-3 py-1 rounded-full border",
                  layer.badgeBg
                )}
              >
                LAYER {layer.number}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              {layer.title}
            </h3>

            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              {layer.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {layer.bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "flex items-center gap-2.5 p-2.5 rounded-xl border text-xs md:text-sm font-medium transition-colors",
                    layer.pillBg
                  )}
                >
                  <CheckCircle2 className={cn("size-4 shrink-0", layer.accentColor)} />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Card Box */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-6 md:p-8 flex flex-col items-center justify-center text-center min-h-[220px] lg:min-h-[260px]">
              <div className="relative z-10 size-16 rounded-2xl bg-white/10 border border-white/20 shadow-inner flex items-center justify-center text-white mb-4">
                <Icon className="size-8" />
              </div>
              <h4 className="relative z-10 text-base font-bold text-white mb-1">
                {layer.title}
              </h4>
              <span className={cn("relative z-10 text-xs font-semibold tracking-wider uppercase", layer.accentColor)}>
                {layer.eyebrow}
              </span>
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

  // Header fades and moves up as user starts scrolling through section
  const headerOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.12], [0, -30]);

  return (
    <section id="platform" className={cn("relative", className)}>
      <div ref={containerRef} className="relative h-[360vh]">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center py-6 md:py-10">
          <div className={cn("container container-large", containerClass)}>
            {/* Section Header */}
            <motion.div
              style={prefersReducedMotion ? undefined : { opacity: headerOpacity, y: headerY }}
              className="max-w-4xl space-y-3 lg:space-y-4 mx-auto text-center mb-6 md:mb-8 shrink-0"
            >
              <Eyebrow className="justify-center">The Platform</Eyebrow>
              <h2 className="text-3xl tracking-tight lg:text-5xl font-semibold">
                Every Layer of Your Business. One Platform.
              </h2>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
                NovaDirect covers every layer of your direct selling operation, from member management and product sales to commission automation and global payouts.
              </p>
            </motion.div>

            {/* Deck Area */}
            <div className="relative max-w-5xl mx-auto min-h-[460px] md:min-h-[500px]">
              {layers.map((layer, index) => (
                <IndividualCard
                  key={layer.id}
                  layer={layer}
                  index={index}
                  total={layers.length}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
