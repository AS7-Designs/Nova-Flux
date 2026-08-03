import { Metadata } from "next";

import Pricing from "@/components/sections/pricing";
import PricingTable from "@/components/sections/pricing-table";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Pricing",
  description: `Compare ${siteConfig.name} plans and pricing. Find the right plan for individuals, teams, and enterprises to close more deals with AI.`,
  openGraph: {
    title: `${siteConfig.name} Pricing`,
    description: `Compare plans and pricing for individuals, teams, and enterprises.`,
    url: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <Pricing className="page-top-padding" containerClass="container-large" titleAs="h1" />
      <PricingTable containerClass="container-large" />
    </>
  );
}
