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
    gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
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
    gradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
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
    gradient: "from-purple-500/10 via-indigo-500/5 to-transparent",
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
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
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
    gradient: "from-sky-500/10 via-blue-500/5 to-transparent",
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
  const isLast = index === total - 1;

  // Sequential exit threshold for cards 0..3
  const stepSize = 0.85 / (total - 1);
  const exitStart = 0.08 + index * stepSize;
  const exitEnd = exitStart + stepSize * 0.75;

  // Exit transforms when card flips & slides up off the deck
  const exitY = useTransform(progress, [exitStart, exitEnd], ["0%", "-120%"]);
  const exitRotateX = useTransform(progress, [exitStart, exitEnd], [0, 12]);
  const exitOpacity = useTransform(progress, [exitStart, exitEnd], [1, 0]);

  // Base values when card is sitting stacked underneath
  const baseScale = 1 - index * 0.035;
  const baseTranslateY = index * 14;

  // Interpolation arrays for stepping forward as previous cards exit
  const breakpoints: number[] = [0];
  const scaleValues: number[] = [baseScale];
  const yValues: number[] = [baseTranslateY];

  for (let k = 0; k < index; k++) {
    const kExitStart = 0.08 + k * stepSize;
    const kExitEnd = kExitStart + stepSize * 0.75;
    const cardsAhead = index - (k + 1);

    breakpoints.push(kExitStart, kExitEnd);
    scaleValues.push(1 - (index - k) * 0.035, 1 - cardsAhead * 0.035);
    yValues.push((index - k) * 14, cardsAhead * 14);
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
      <Card
        className={cn(
          "relative overflow-hidden rounded-3xl border border-border/80 bg-card text-card-foreground shadow-2xl dark:shadow-none p-6 md:p-10 lg:p-12 transition-all duration-300"
        )}
      >
        <FluxDotGrid className="opacity-[0.03] dark:opacity-[0.05]" />

        {/* Top brand gradient hairline */}
        <div
          aria-hidden
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5EEBFC] via-[#0090FF] to-[#1164F0]"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center justify-between">
              <Eyebrow>{layer.eyebrow}</Eyebrow>
              <span className="text-xs font-mono font-bold tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                LAYER {layer.number}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
              {layer.title}
            </h3>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              {layer.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {layer.bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border/60 text-sm font-medium text-foreground transition-colors hover:bg-muted/80"
                >
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Box */}
          <div className="lg:col-span-5">
            <div
              className={cn(
                "relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br p-8 md:p-10 flex flex-col items-center justify-center text-center min-h-[250px] lg:min-h-[280px] shadow-inner",
                layer.gradient
              )}
            >
              <div className="relative z-10 size-20 rounded-2xl bg-background/90 border border-border/80 shadow-md flex items-center justify-center text-primary mb-5 transition-transform duration-300 hover:scale-105">
                <Icon className="size-10" />
              </div>
              <h4 className="relative z-10 text-lg font-bold text-foreground mb-1">
                {layer.title}
              </h4>
              <span className="relative z-10 text-xs font-semibold tracking-wider uppercase text-primary">
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

  return (
    <section id="platform" className={cn("section-padding relative overflow-hidden", className)}>
      <div className={cn("container container-large", containerClass)}>
        {/* Section Header - Part of document scroll, moves off screen naturally */}
        <motion.div
          className="max-w-4xl space-y-3 lg:space-y-4 mx-auto text-center mb-12 lg:mb-16"
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 100, damping: 25 },
            },
          }}
        >
          <Eyebrow className="justify-center">The Platform</Eyebrow>
          <h2 className="text-3xl tracking-tight lg:text-5xl font-semibold text-foreground">
            Every Layer of Your Business. One Platform.
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
            NovaDirect covers every layer of your direct selling operation, from member management and product sales to commission automation and global payouts, all configured around your business and all under your brand.
          </p>
        </motion.div>

        {/* Scroll Track for Card Stack */}
        <div ref={containerRef} className="relative h-[320vh]">
          <div className="sticky top-24 md:top-28 h-[calc(100vh-8rem)] flex items-center justify-center overflow-hidden">
            <div className="relative w-full max-w-5xl mx-auto min-h-[460px] md:min-h-[500px]">
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
