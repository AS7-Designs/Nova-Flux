import type { Metadata } from "next";

import CtaBand from "@/components/sections/cta-band";
import FeaturesReveal from "@/components/sections/features-reveal";
import FeaturesShowcase from "@/components/sections/features-showcase";
import HomeHero from "@/components/sections/home-hero";
import HowItWorks from "@/components/sections/how-it-works";
import ProblemSection from "@/components/sections/problem-section";
import WhosItFor from "@/components/sections/whos-it-for";
import WhyChoose from "@/components/sections/why-choose";

export const metadata: Metadata = {
  title: {
    absolute: "NovaDirect — Direct Selling & Network Management Platform",
  },
};

export default function Home() {
  return (
    <>
      <HomeHero className="page-top-padding !pb-12 md:!pb-16" containerClass="container-large" heroImage={null} />
      <ProblemSection containerClass="container-large" />
      <FeaturesReveal containerClass="container-large" />
      <WhosItFor containerClass="container-large" />
      <HowItWorks containerClass="container-large" />
      <FeaturesShowcase containerClass="container-large" />
      <WhyChoose containerClass="container-large" />
      <CtaBand containerClass="container-large" />
    </>
  );
}

