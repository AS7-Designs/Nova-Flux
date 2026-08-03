"use client";

import CloseCircleLinear from "@iconify-react/solar/close-circle-linear";
import SortVerticalLinear from "@iconify-react/solar/sort-vertical-linear";
import { Check } from "lucide-react";
import { useState } from "react";

import { Eyebrow } from "@/components/elements/eyebrow";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

interface Feature {
  name: string;
  isNew?: boolean;
  pro: string | boolean | null;
  team: string | boolean | null;
}

interface FeatureSection {
  category: string;
  isNew?: boolean;
  features: Feature[];
}

const pricingPlans = [
  {
    name: "Pro",
    price: "$25/mo",
    yearlyPrice: "$19/mo",
  },
  {
    name: "Team",
    price: "$59/mo",
    yearlyPrice: "$44/mo",
  },
];

const comparisonFeatures: FeatureSection[] = [
  {
    category: "Pricing",
    features: [
      {
        name: "Price/mo (monthly billing)",
        pro: "$25/mo",
        team: "$59/mo",
      },
      {
        name: "Price/mo (annual billing)",
        pro: "$19/mo",
        team: "$44/mo",
      },
    ],
  },
  {
    category: "CRM Core",
    features: [
      {
        name: "Contact & lead management",
        pro: true,
        team: true,
      },
      {
        name: "Email & calendar sync",
        pro: true,
        team: true,
      },
      {
        name: "Pipeline views & deal tracking",
        pro: true,
        team: true,
      },
      {
        name: "Team members",
        pro: "1 seat",
        team: "Unlimited",
      },
    ],
  },
  {
    category: "AI & Automation",
    features: [
      {
        name: "AI deal scoring",
        pro: true,
        team: true,
      },
      {
        name: "AI-drafted follow-ups",
        pro: true,
        team: true,
      },
      {
        name: "Pipeline automation",
        pro: true,
        team: true,
      },
      {
        name: "Custom workflows & automations",
        pro: false,
        team: true,
      },
      {
        name: "AI forecasting & reporting",
        pro: false,
        team: true,
      },
    ],
  },
  {
    category: "Integrations & Security",
    features: [
      {
        name: "Native CRM integrations",
        pro: false,
        team: true,
      },
      {
        name: "Full API access & webhooks",
        pro: false,
        team: true,
      },
      {
        name: "Role-based permissions & SSO",
        pro: false,
        team: true,
      },
    ],
  },
  {
    category: "Support",
    features: [
      {
        name: "Email support",
        pro: true,
        team: true,
      },
      {
        name: "Priority 24/7 support",
        pro: false,
        team: true,
      },
      {
        name: "Dedicated success manager",
        pro: false,
        team: "Optional",
      },
    ],
  },
];

const PricingTable = ({ className, containerClass }: { className?: string; containerClass?: string }) => {
  const [selectedPlan, setSelectedPlan] = useState(0);

  return (
    <section className={cn("section-padding relative", className)}>
      <div className={cn("container", containerClass)}>
        <div className="space-y-8 lg:space-y-12">
          <div className="max-w-3xl space-y-3 lg:space-y-4">
            <Eyebrow>Comparison</Eyebrow>
            <h2 className="text-4xl tracking-tight lg:text-5xl">Compare plans</h2>
          </div>
          <div>
            <PlanHeaders selectedPlan={selectedPlan} onPlanChange={setSelectedPlan} />
            <FeatureSections selectedPlan={selectedPlan} />
          </div>
        </div>
      </div>
    </section>
  );
};

const PlanHeaders = ({
  selectedPlan,
  onPlanChange,
}: {
  selectedPlan: number;
  onPlanChange: (index: number) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <div className="md:hidden">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-center justify-between py-4">
            <CollapsibleTrigger className="flex items-center gap-2">
              <h3 className="text-2xl">{pricingPlans[selectedPlan].name}</h3>
              <SortVerticalLinear className={cn("size-5 transition-transform", isOpen && "rotate-180")} />
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="flex flex-col space-y-2 pb-4">
            {pricingPlans.map(
              (plan, index) =>
                index !== selectedPlan && (
                  <Button
                    variant="outline"
                    key={index}
                    onClick={() => {
                      onPlanChange(index);
                      setIsOpen(false);
                    }}
                  >
                    {plan.name}
                  </Button>
                ),
            )}
          </CollapsibleContent>
        </Collapsible>
      </div>

      <div className="grid grid-cols-4 gap-4 max-md:hidden">
        <div className="col-span-2" />
        {pricingPlans.map((plan) => (
          <h3 key={plan.name} className="pb-4 text-center text-2xl">
            {plan.name}
          </h3>
        ))}
      </div>
    </div>
  );
};

const FeatureSections = ({ selectedPlan }: { selectedPlan: number }) => {
  return (
    <>
      {comparisonFeatures.map((section) => (
        <div key={section.category} className="flex flex-col md:mt-4">
          <div className="relative border-b py-4">
            <div
              aria-hidden
              className="from-chart-1/30 via-chart-2/15 absolute bottom-0 left-0 h-px w-24 bg-gradient-to-r to-transparent"
            />
            <h3 className="flex items-center gap-3 text-lg font-medium">
              {section.category}
              {section.isNew && <Badge variant="outline">NEW</Badge>}
            </h3>
          </div>
          {section.features.map((feature) => (
            <div
              key={feature.name}
              className="border-border/50 grid grid-cols-2 items-center border-b border-dotted md:grid-cols-4"
            >
              <span className="inline-flex items-center gap-3 py-4 pe-8 md:col-span-2">
                {feature.name}
                {feature.isNew && (
                  <Badge variant="default" className="rounded-sm">
                    NEW
                  </Badge>
                )}
              </span>
              <div className="flex items-center justify-center py-4 md:hidden">
                {renderFeatureValue(selectedPlan === 0 ? feature.pro : feature.team)}
              </div>
              <div className="hidden items-center justify-center py-4 md:flex">{renderFeatureValue(feature.pro)}</div>
              <div className="hidden items-center justify-center py-4 md:flex">{renderFeatureValue(feature.team)}</div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

const renderFeatureValue = (value: string | boolean | null) => {
  if (value === null || value === false) {
    return <CloseCircleLinear className="text-muted-foreground/30 size-5" />;
  }

  if (typeof value === "boolean") {
    return value ? (
      <Check className="text-primary size-5" strokeWidth={2.5} />
    ) : (
      <CloseCircleLinear className="text-muted-foreground/30 size-5" />
    );
  }

  return <span className="text-muted-foreground text-sm">{value}</span>;
};

export default PricingTable;
