"use client";

import { motion } from "motion/react";
import UsersGroupRoundedLinear from "@iconify-react/solar/users-group-rounded-linear";
import BagCheckLinear from "@iconify-react/solar/bag-check-linear";
import ChartSquareLinear from "@iconify-react/solar/chart-square-linear";
import CardLinear from "@iconify-react/solar/card-linear";
import SettingsLinear from "@iconify-react/solar/settings-linear";

import { Eyebrow } from "@/components/elements/eyebrow";
import { FluxDotGrid } from "@/components/elements/flux-dot-grid";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const layers = [
  {
    id: "layer-people",
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
    icon: UsersGroupRoundedLinear,
    color: "from-blue-500/10 to-indigo-500/5",
  },
  {
    id: "layer-products",
    eyebrow: "02 — Your Products",
    title: "Sell What You Offer. However You Offer It.",
    description:
      "Whether you sell physical products, digital services, memberships, or subscriptions, NovaDirect connects your offering directly to your network. Your members can browse, buy, and refer, all within your branded platform.",
    bullets: [
      "Physical and Digital Product Management",
      "Membership and Subscription Management",
      "Bundles and Advanced Bundle Configuration",
      "Member Pricing and Retail Pricing",
    ],
    icon: BagCheckLinear,
    color: "from-cyan-500/10 to-blue-500/5",
  },
  {
    id: "layer-compensation",
    eyebrow: "03 — Your Compensation",
    title: "Your Commission Logic. Built Exactly the Way You Designed It.",
    description:
      "No two direct selling businesses reward their people the same way. NovaDirect is built to handle the full complexity of your compensation plan, whatever that looks like, accurately and automatically.",
    bullets: [
      "Custom Commission Plan Configuration",
      "Multi-level and Referral Commission Support",
      "Bonus and Incentive Management",
      "Rank Advancement and Qualification Rules",
    ],
    icon: ChartSquareLinear,
    color: "from-indigo-500/10 to-purple-500/5",
  },
  {
    id: "layer-payments",
    eyebrow: "04 — Your Payments",
    title: "From the First Transaction to the Final Payout. Handled.",
    description:
      "Getting paid and paying out your network should never be a source of stress. NovaDirect manages the full payment cycle, from customer transactions and gateway integrations to wallet management, payouts, and tax compliance.",
    bullets: [
      "Payment Gateway Integrations",
      "eWallet and Earnings Management",
      "Payout Request and Approval Workflows",
      "Tax Documentation and Compliance",
    ],
    icon: CardLinear,
    color: "from-emerald-500/10 to-teal-500/5",
  },
  {
    id: "layer-control",
    eyebrow: "05 — Your Control",
    title: "One Admin Layer. Complete Visibility Across Everything.",
    description:
      "Every part of your operation — your members, your products, your commissions, your payouts — lives inside one unified admin experience. Role-based access means the right people see exactly what they need to.",
    bullets: [
      "Unified Admin Panel",
      "Role-Based Access and Permissions",
      "Real-Time Reporting and Analytics",
      "Commission Management and Adjustments",
    ],
    icon: SettingsLinear,
    color: "from-blue-600/10 to-sky-500/5",
  },
];

export default function FeaturesShowcase({
  className,
  containerClass,
}: {
  className?: string;
  containerClass?: string;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="platform" className={cn("section-padding relative overflow-hidden", className)}>
      <div className={cn("container", containerClass)}>
        <div>
          {/* Section Header */}
          <motion.div
            className="max-w-4xl space-y-3 lg:space-y-4 mx-auto text-center"
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

          {/* Layers List */}
          <div className="mt-12 space-y-12 lg:space-y-16">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={layer.id}
                  id={layer.id}
                  className={cn(
                    "grid items-center gap-8 lg:grid-cols-12 lg:gap-12 scroll-mt-24"
                  )}
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  {/* Decorative Card / Icon Block */}
                  <div className={cn("lg:col-span-5", isEven ? "lg:order-1" : "lg:order-2")}>
                    <Card className={cn("relative overflow-hidden border-border/60 bg-gradient-to-br shadow-sm p-8 flex flex-col items-center justify-center text-center min-h-[260px]", layer.color)}>
                      <FluxDotGrid className="opacity-[0.04]" />
                      <div className="size-16 rounded-2xl bg-background/80 shadow-sm flex items-center justify-center text-primary mb-4">
                        <Icon className="size-8" />
                      </div>
                      <span className="text-sm font-semibold tracking-wider uppercase text-primary">
                        {layer.eyebrow}
                      </span>
                    </Card>
                  </div>

                  {/* Content Block */}
                  <div className={cn("lg:col-span-7 space-y-4", isEven ? "lg:order-2" : "lg:order-1")}>
                    <Eyebrow>{layer.eyebrow}</Eyebrow>
                    <h3 className="text-2xl font-semibold tracking-tight lg:text-3xl text-foreground">
                      {layer.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {layer.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {layer.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm font-medium text-foreground">
                          <span className="size-1.5 rounded-full bg-primary shrink-0" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
