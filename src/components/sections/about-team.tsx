"use client";

import AltArrowRightLinear from "@iconify-react/solar/alt-arrow-right-linear";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import type { ComponentType, ReactNode } from "react";
import { memo, useState } from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import { Eyebrow } from "@/components/elements/eyebrow";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TeamMemberSocial {
  linkedin?: string;
  twitter?: string;
  github?: string;
}

interface TeamMember {
  image: string;
  name: string;
  role: string;
  description: string;
  social?: TeamMemberSocial;
}

interface SocialLinkConfig {
  key: keyof TeamMemberSocial;
  icon: ComponentType<{ className?: string }>;
  label: string;
}

const SOCIAL_LINKS: SocialLinkConfig[] = [
  { key: "linkedin", icon: FaLinkedin, label: "LinkedIn" },
  { key: "twitter", icon: FaXTwitter, label: "X (Twitter)" },
  { key: "github", icon: FaGithub, label: "GitHub" },
];

const DEFAULT_MEMBER_SOCIAL: TeamMemberSocial = {
  linkedin: "#",
  twitter: "#",
  github: "#",
};

const TeamMemberCard = memo(
  ({
    member,
    isImageHovered = false,
    onImageMouseEnter,
    onImageMouseLeave,
    popover,
  }: {
    member: TeamMember;
    isImageHovered?: boolean;
    onImageMouseEnter?: () => void;
    onImageMouseLeave?: () => void;
    popover?: ReactNode;
  }) => {
    return (
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
        <div className="relative shrink-0" onMouseEnter={onImageMouseEnter} onMouseLeave={onImageMouseLeave}>
          <img
            src={member.image}
            alt={`${member.name} Profile Picture`}
            className={cn(
              "size-full shrink-0 cursor-pointer rounded-md border object-cover transition-opacity duration-200 md:size-24",
              isImageHovered && "opacity-80",
            )}
          />
          {popover}
        </div>

        <div className="flex min-w-0 flex-col gap-1 tracking-tight">
          <p className="line-clamp-1">{member.name}</p>
          <p className="text-muted-foreground line-clamp-1 text-sm">{member.role}</p>
        </div>
      </div>
    );
  },
);
TeamMemberCard.displayName = "TeamMemberCard";

const TeamMemberPopover = memo(({ member }: { member: TeamMember }) => {
  const social = { ...DEFAULT_MEMBER_SOCIAL, ...member.social };

  return (
    <div className="bg-background overflow-hidden rounded-2xl shadow-lg dark:border">
      <img src={member.image} alt={`${member.name} Profile Picture`} className="aspect-[4/5] w-full object-cover" />
      <div className="from-chart-1 via-chart-2 to-chart-3 h-1 w-full bg-gradient-to-r" />
      <div className="flex flex-col gap-3 p-5">
        <div className="space-y-1 tracking-tight">
          <p className="font-medium">{member.name}</p>
          <p className="text-muted-foreground text-sm">{member.role}</p>
        </div>
        <p className="text-muted-foreground text-xs leading-relaxed">{member.description}</p>
        <div className="flex gap-3 pt-1">
          {SOCIAL_LINKS.map(({ key, icon: Icon, label }) => {
            const url = social[key];
            if (!url) return null;

            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on ${label}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="size-4" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
});
TeamMemberPopover.displayName = "TeamMemberPopover";

interface AboutTeamProps {
  heading?: string;
  description?: string;
  members?: TeamMember[];
  className?: string;
  containerClass?: string;
}

export default function AboutTeam({
  className,
  containerClass,
  heading = "Meet the Flux team",
  description = "Revenue operators, engineers, and AI researchers building the CRM sales teams actually want to use.",
  members = [
    {
      image: "/images/people/sarah-mitchell.webp",
      name: "Sarah Mitchell",
      role: "CEO & Co-founder",
      description: "Former VP Sales who got tired of CRMs that slowed reps down more than they helped.",
    },
    {
      image: "/images/people/alex-chen.webp",
      name: "Alex Chen",
      role: "CTO & Co-founder",
      description: "Built pipeline infrastructure at scale before co-founding Flux.",
    },
    {
      image: "/images/people/emily-davis.webp",
      name: "Emily Davis",
      role: "Head of Product",
      description: "Ex-enterprise PM obsessed with making complex sales workflows feel simple.",
    },
    {
      image: "/images/people/marcus-johnson.webp",
      name: "Marcus Johnson",
      role: "Head of AI",
      description: "ML engineer focused on deal scoring, sentiment analysis, and smart automations.",
    },
    {
      image: "/images/people/rachel-park.webp",
      name: "Rachel Park",
      role: "Lead Engineer",
      description: "Full-stack engineer shipping pipeline automations and real-time sync.",
    },
    {
      image: "/images/people/david-kim.webp",
      name: "David Kim",
      role: "Head of Revenue",
      description: "Scaled GTM at two B2B startups before joining Flux to lead revenue.",
    },
    {
      image: "/images/people/lisa-thompson.webp",
      name: "Lisa Thompson",
      role: "Head of Design",
      description: "Designs sales tools reps actually enjoy opening every morning.",
    },
    {
      image: "/images/people/michelle-dam.webp",
      name: "Michelle Dam",
      role: "Head of Customer Success",
      description: "Helps Flux customers get to closed-won faster with hands-on onboarding.",
    },
    {
      image: "/images/people/sophie-anderson.webp",
      name: "Sophie Anderson",
      role: "Head of Marketing",
      description: "B2B demand gen specialist bringing Flux to high-velocity sales teams.",
    },
    {
      image: "/images/people/ryan-foster.webp",
      name: "Ryan Foster",
      role: "Sales Engineer",
      description: "Runs technical demos and helps enterprise teams evaluate Flux integrations.",
    },
    {
      image: "/images/people/maria-garcia.webp",
      name: "Maria Garcia",
      role: "Integrations Engineer",
      description: "Builds native CRM, email, and calendar connections that just work.",
    },
    {
      image: "/images/people/kevin-obrien.webp",
      name: "Kevin O'Brien",
      role: "RevOps Lead",
      description: "Owns forecasting models, reporting, and the data layer behind Flux AI.",
    },
  ],
}: AboutTeamProps) {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section className={cn("section-padding relative", className)}>
      <div className={cn("container", containerClass)}>
        <div className="flex flex-col gap-8">
          <div className="mx-auto max-w-3xl space-y-3 text-center lg:space-y-4">
            <Eyebrow className="justify-center">Team</Eyebrow>
            <h2 className="text-3xl font-light tracking-tight lg:text-6xl">{heading}</h2>
            <p className="text-muted-foreground text-sm tracking-tight lg:text-lg">{description}</p>
          </div>
          <ul
            onMouseLeave={() => setHoveredMember(null)}
            className="grid grid-cols-2 gap-x-6 gap-y-10 overflow-visible md:grid-cols-3 md:gap-x-8 md:gap-y-12 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-14"
          >
            {members.map((member, index) => {
              return (
                <li key={`team-member-${index}`} className="relative overflow-visible">
                  <TeamMemberCard
                    member={member}
                    isImageHovered={hoveredMember === index}
                    onImageMouseEnter={() => setHoveredMember(index)}
                    onImageMouseLeave={() => setHoveredMember(null)}
                    popover={
                      <AnimatePresence>
                        {hoveredMember === index && (
                          <motion.div
                            key="popover"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="pointer-events-auto absolute bottom-full left-1/2 z-30 hidden w-72 max-w-[calc(100vw-2rem)] -translate-x-1/2 pb-3 md:block"
                          >
                            <TeamMemberPopover member={member} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    }
                  />
                </li>
              );
            })}
          </ul>

          <div className="mx-auto mt-16 max-w-3xl space-y-6 text-center lg:mt-24">
            <h3 className="text-3xl font-light tracking-tight lg:text-4xl">Want to join the team?</h3>
            <p className="text-muted-foreground text-sm lg:text-base">
              We&apos;re always looking for people who care about revenue teams and great product craft.
            </p>
            <Button size="lg" className="rounded-full !pl-5.5 before:rounded-full" asChild>
              <Link href="/careers">
                View careers
                <div className="bg-background/15 border-background/10 grid size-5.5 place-items-center rounded-full border">
                  <AltArrowRightLinear className="size-4" />
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
