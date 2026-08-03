import type { Metadata } from "next";

import AboutBenefits from "@/components/sections/about-benefits";
import AboutHero from "@/components/sections/about-hero";
import AboutTeam from "@/components/sections/about-team";
import AboutVideo from "@/components/sections/about-video";
import AboutVision from "@/components/sections/about-vision";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "About",
  description: `Meet the team building ${siteConfig.name} — the AI CRM sales teams actually want to use. Learn about our mission, our vision, and the people behind the product.`,
  openGraph: {
    title: `About ${siteConfig.name}`,
    description: `Meet the team building ${siteConfig.name}, the AI CRM sales teams actually want to use.`,
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero className="page-top-padding" />
      <AboutVision containerClass="container-large" />
      <AboutBenefits containerClass="container-large" />
      <AboutVideo containerClass="container-large" />
      <AboutTeam containerClass="container-large" />
    </>
  );
}
