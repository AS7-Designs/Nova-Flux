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
    eyebrow: "01 — Your People",
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
    color: "from-blue-500/15 via-indigo-500/10 to-transparent",
  },
  {
    id: "layer-products",
    number: "02",
    eyebrow: "02 — Your Products",
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
    color: "from-cyan-500/15 via-blue-500/10 to-transparent",
  },
  {
    id: "layer-compensation",
    number: "03",
    eyebrow: "03 — Your Compensation",
    title: "Your Commission Logic. Built Exactly the Way You Designed It.",
    description:
      "No two direct selling businesses reward their people the same way. NovaDirect is built to handle the full complexity of your compensation plan, whatever that looks like, accurately and automatically.",
    bullets: [
      "Custom Commission Logic Engine",
      "Multi-level and Referral Commissions",
      "Matching and Generation Bonuses",
      "Rank Advancement and Qualifications",
    ],
    icon: TrendingUp,
    color: "from-indigo-500/15 via-purple-500/10 to-transparent",
  },
  {
    id: "layer-payments",
    number: "04",
    eyebrow: "04 — Your Payments",
    title: "From the First Transaction to the Final Payout. Handled.",
    description:
      "Getting paid and paying out your network should never be a source of stress. NovaDirect manages the full payment cycle, from customer transactions and gateway integrations to wallet management, payouts, and tax compliance.",
    bullets: [
      "Multi-Gateway Integrations",
      "eWallet and Earnings Ledger",
      "Payout Request and Approval Workflows",
      "Tax Documentation and Compliance",
    ],
    icon: CreditCard,
    color: "from-emerald-500/15 via-teal-500/10 to-transparent",
  },
  {
    id: "layer-control",
    number: "05",
    eyebrow: "05 — Your Control",
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
    color: "from-blue-600/15 via-sky-500/10 to-transparent",
  },
];

interface StackCardProps {
  layer: (typeof layers)[0];
  index: number;
  total: number;
  progress: any;
  prefersReducedMotion: boolean;
}

function StackCard({ layer, index, total, progress, prefersReducedMotion }: StackCardProps) {
  const Icon = layer.icon;
  const targetScale = 1 - (total - 1 - index) * 0.035;

  const rangeStart = index / total;
  const scale = useTransform(progress, [rangeStart, 1], [1, targetScale]);

  return (
    <div
      id={layer.id}
      className="sticky scroll-mt-28 mb-8 last:mb-0"
      style={{
        top: `calc(105px + ${index * 22}px)`,
      }}
    >
      <motion.div
        style={prefersReducedMotion ? undefined : { scale }}
        className="origin-top"
      >
        <Card className="relative overflow-hidden border-border/80 bg-card/95 backdrop-blur-xl shadow-xl dark:shadow-2xl rounded-3xl p-6 md:p-10 lg:p-12 transition-all duration-300">
          {/* Top hairline gradient line */}
          <div
            aria-hidden
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5EEBFC] via-[#0090FF] to-[#1164F0]"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <Eyebrow>{layer.eyebrow}</Eyebrow>
                <span className="text-xs font-mono font-bold tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  LAYER {layer.number}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
                {layer.title}
              </h3>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {layer.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {layer.bullets.map((bullet, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 border border-border/50 text-sm font-medium text-foreground transition-colors hover:bg-muted/70"
                  >
                    <CheckCircle2 className="size-4 text-primary shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Card Column */}
            <div className="lg:col-span-5">
              <div
                className={cn(
                  "relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br p-8 md:p-10 flex flex-col items-center justify-center text-center min-h-[260px] lg:min-h-[300px] shadow-inner",
                  layer.color
                )}
              >
                <FluxDotGrid className="opacity-[0.06]" />

                {/* Decorative background glow */}
                <div
                  aria-hidden
                  className="absolute -top-12 -right-12 size-40 rounded-full bg-primary/10 blur-3xl"
                />

                <div className="relative z-10 size-20 rounded-2xl bg-background/90 shadow-lg border border-border/60 flex items-center justify-center text-primary mb-6 transition-transform duration-300 hover:scale-105">
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
    </div>
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
      <div className={cn("container", containerClass)}>
        <div>
          {/* Section Header */}
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
            <h2 className="text-3xl tracking-tight lg:text-5xl font-semibold">
              Every Layer of Your Business. One Platform.
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
              NovaDirect covers every layer of your direct selling operation, from member management and product sales to commission automation and global payouts, all configured around your business and all under your brand.
            </p>
          </motion.div>

          {/* Stacked Cards Container */}
          <div ref={containerRef} className="relative pb-16">
            {layers.map((layer, index) => (
              <StackCard
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
    </section>
  );
}
