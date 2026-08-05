import type { Metadata } from "next";

import AboutBenefits from "@/components/sections/about-benefits";
import AboutHero from "@/components/sections/about-hero";
import AboutTeam from "@/components/sections/about-team";
import AboutVideo from "@/components/sections/about-video";
import AboutVision from "@/components/sections/about-vision";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "About",
  description: `${siteConfig.name} brings every part of your direct selling operation together into one modern platform, built specifically around the way your network works.`,
  openGraph: {
    title: `About ${siteConfig.name}`,
    description: `${siteConfig.name} — Built for Businesses That Grow Through People.`,
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
