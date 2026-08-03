import type { Metadata } from "next";
import AltArrowRightLinear from "@iconify-react/solar/alt-arrow-right-linear";

import CtaBand from "@/components/sections/cta-band";
import { Eyebrow } from "@/components/elements/eyebrow";
import { FluxWavePattern } from "@/components/elements/flux-wave-pattern";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Work With Us",
  description:
    "Learn how NovaDirect engages with businesses. From discovery and scoping to build, launch, AMC support, and long-term partnership.",
};

const WHAT_YOU_BRING = [
  {
    step: "01",
    title: "Your Business Idea",
    description: "A clear understanding of how your network operates — who your members or distributors are, what they sell or promote, and how your business model works.",
  },
  {
    step: "02",
    title: "Your Compensation Plan",
    description: "How you reward your people. Whether it is a straightforward referral commission or a multi-level structure with bonuses and ranks, this is the foundation we build from.",
  },
  {
    step: "03",
    title: "Your Brand",
    description: "Your logo, your colours, and the identity you want your platform to carry. That is it. We handle the rest.",
  },
];

const ENGAGEMENT_STEPS = [
  {
    step: "Step 1",
    title: "Discovery",
    description: "We start with a conversation. We listen to your business model, your compensation structure, and your goals. We ask the right questions and make sure we understand exactly what you need before anything is built.",
  },
  {
    step: "Step 2",
    title: "Scoping",
    description: "Based on the discovery conversation, we define the scope of your platform: what modules are needed, how your commission logic will be configured, what integrations are required, and what the delivery timeline looks like.",
  },
  {
    step: "Step 3",
    title: "Build",
    description: "We build your platform configured specifically around your business. Your brand, your commission rules, your member journey. Not a template. Not a generic setup.",
  },
  {
    step: "Step 4",
    title: "Review and Launch",
    description: "Before going live, we walk you through the platform together. You review, we refine, and we launch when you are ready.",
  },
  {
    step: "Step 5",
    title: "We Stay With You",
    description: "Going live is not the end. We stay involved to make sure the platform performs, grows with your business, and adapts as your needs evolve.",
  },
];

export default function WorkWithUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding page-top-padding relative overflow-hidden bg-background">
        <FluxWavePattern className="opacity-[0.05]" />
        <div className="container container-large relative z-10">
          <div className="mx-auto max-w-4xl space-y-4 text-center">
            <Eyebrow className="justify-center">Engagement Model</Eyebrow>
            <h1 className="text-4xl font-bold tracking-tight lg:text-6xl text-foreground">
              A Platform Built Around You. A Partner Invested in Your Growth.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              NovaDirect is not an off-the-shelf product you activate with a credit card. Every implementation is built specifically around your business, your compensation model, and your brand.
            </p>
          </div>
        </div>
      </section>

      {/* What You Bring */}
      <section className="section-padding bg-card/40 border-y border-border/50">
        <div className="container container-large">
          <div className="mx-auto max-w-3xl space-y-3 text-center mb-12">
            <Eyebrow className="justify-center">Getting Started</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight lg:text-4xl">What You Bring to the Table</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Starting a NovaDirect engagement is straightforward. You do not need a technical specification or a detailed project brief.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHAT_YOU_BRING.map((item, idx) => (
              <Card key={idx} className="border-border/60 bg-card p-6 md:p-8 space-y-4">
                <span className="text-3xl font-extrabold text-primary/40">{item.step}</span>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How the Engagement Works */}
      <section className="section-padding relative">
        <div className="container container-large">
          <div className="mx-auto max-w-3xl space-y-3 text-center mb-12">
            <Eyebrow className="justify-center">Process</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight lg:text-4xl">How the Engagement Works</h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {ENGAGEMENT_STEPS.map((step, idx) => (
              <Card key={idx} className="border-border/60 bg-card p-6 md:p-8 flex flex-col md:flex-row items-start gap-6 hover:shadow-md transition-all">
                <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold shrink-0">
                  {step.step}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Model */}
      <section className="section-padding bg-card/30 border-t border-border/50">
        <div className="container container-large">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <Eyebrow className="justify-center">Commercial Model</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-tight lg:text-4xl">Project-Based Pricing & Support</h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                NovaDirect engagements are project based. The investment for each project is scoped and agreed before build begins. There are no hidden costs and no surprises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border/60 bg-card p-6 md:p-8 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Project Investment</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Every engagement is scoped individually based on the complexity of your compensation model, required modules, integrations, and scale of operation. We discuss this transparently during the scoping conversation.
                </p>
              </Card>

              <Card className="border-border/60 bg-card p-6 md:p-8 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Ongoing Support Options</h3>
                <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-foreground">● Annual Maintenance Contract (AMC):</span> For businesses wanting consistent, planned support coverage.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-foreground">● Hourly Support:</span> For businesses preferring support as and when needed.
                  </li>
                </ul>
              </Card>
            </div>

            {/* Multidisciplinary Team Note */}
            <Card className="border-primary/30 bg-primary/5 p-6 md:p-8 text-center space-y-3">
              <h3 className="text-xl font-semibold text-foreground">What is Behind NovaDirect</h3>
              <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
                Every NovaDirect client benefits from more than a software team. Behind the platform sits a multidisciplinary organisation with capabilities across software development, branding, design, marketing, and AI transformation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CtaBand containerClass="container-large" />
    </>
  );
}
