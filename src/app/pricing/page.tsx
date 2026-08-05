import { Metadata } from "next";
import { siteConfig } from "@/data/config";
import { Eyebrow } from "@/components/elements/eyebrow";
import { FluxWavePattern } from "@/components/elements/flux-wave-pattern";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CtaBand from "@/components/sections/cta-band";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description: "NovaDirect provides transparent, project-based pricing tailored to your specific business requirements.",
};

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden page-top-padding pb-16 md:pb-24">
        <FluxWavePattern className="opacity-10 dark:opacity-5 text-brand-blue" />
        <div className="container container-large relative z-10">
          <div className="max-w-3xl mb-12">
            <Eyebrow>Transparent & Fair</Eyebrow>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
              Project-Based Pricing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              We do not publish fixed pricing because no two NovaDirect implementations are the same. A straightforward referral commission platform for a SaaS business looks very different from a multi-level direct selling platform with ecommerce, subscriptions, and global payouts.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              What we can tell you is that our engagements are scoped fairly, transparently, and around what your business actually needs. Nothing more, nothing less.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Project Investment</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                Scoped individually based on the complexity, scale, and specific feature requirements of your platform.
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Ongoing Support</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                We offer tailored Annual Maintenance Contracts (AMC) and hourly support options to keep your platform running smoothly.
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/30 p-8 rounded-2xl border border-border/50">
            <h3 className="text-xl md:text-2xl font-medium mb-4">
              Ready to learn more?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl text-lg">
              The best way to understand what a NovaDirect engagement looks like for your business is to book a discovery call.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">Book a Discovery Call</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
