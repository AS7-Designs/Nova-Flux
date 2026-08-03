"use client";

import Link from "next/link";

import { Eyebrow } from "@/components/elements/eyebrow";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const companies = [
  {
    name: "Anthropic",
    logo: "/images/partners/anthropic.svg",
    className: "dark:invert",
    url: "#",
  },
  {
    name: "Claude",
    logo: "/images/partners/claude.svg",
    className: "",
    url: "#",
  },
  {
    name: "Grok",
    logo: "/images/partners/grok.svg",
    className: "dark:invert",
    url: "#",
  },
  {
    name: "Linear",
    logo: "/images/partners/linear.svg",
    className: "dark:invert",
    url: "#",
  },
  {
    name: "Meta",
    logo: "/images/partners/meta.svg",
    className: "",
    url: "#",
  },
  {
    name: "PostHog",
    logo: "/images/partners/posthog.svg",
    className: "",
    url: "#",
  },
  {
    name: "Vercel",
    logo: "/images/partners/vercel.svg",
    className: "dark:invert",
    url: "#",
  },
];

export function LogosMarquee({ className }: { className?: string }) {
  return (
    <Marquee
      pauseOnHover
      className={cn(
        "mask-r-from-60% mask-r-to-100% mask-l-from-60% mask-l-to-100% [--duration:20s] [--gap:4rem]",
        className,
      )}
    >
      {companies.map((company) => (
        <Link
          key={company.name}
          href={company.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-8 w-24 transition-transform duration-200 hover:scale-105"
        >
          <img
            src={company.logo}
            alt={`${company.name} logo`}
            loading="lazy"
            className={cn("size-full object-contain", company.className)}
          />
        </Link>
      ))}
    </Marquee>
  );
}

export default function Logos({ className, containerClass }: { className?: string; containerClass?: string }) {
  return (
    <section className={cn("section-padding relative", className)}>
      <div className={cn("container", containerClass)}>
        <div>
          <div className="mx-auto max-w-3xl space-y-2 text-center">
            <Eyebrow className="justify-center">Partners</Eyebrow>
            <h2 className="text-xl font-medium tracking-tight">Trusted by modern teams</h2>
          </div>

          <div className="relative mt-8">
            {/* Top hairline rule */}
            <div aria-hidden className="absolute top-0 right-0 left-0 flex items-center">
              <div className="bg-foreground/8 dark:bg-foreground/5 h-px flex-1" />
              <svg className="text-foreground/15 dark:text-foreground/10 mx-0 size-2.5 shrink-0" viewBox="0 0 10 10">
                <line x1="5" y1="0" x2="5" y2="10" stroke="currentColor" strokeWidth="1" />
                <line x1="0" y1="5" x2="10" y2="5" stroke="currentColor" strokeWidth="1" />
              </svg>
              <div className="bg-foreground/8 dark:bg-foreground/5 h-px flex-1" />
            </div>

            <LogosMarquee className="py-6" />

            {/* Bottom hairline rule */}
            <div aria-hidden className="absolute right-0 bottom-0 left-0 flex items-center">
              <div className="bg-foreground/8 dark:bg-foreground/5 h-px flex-1" />
              <svg className="text-foreground/15 dark:text-foreground/10 mx-0 size-2.5 shrink-0" viewBox="0 0 10 10">
                <line x1="5" y1="0" x2="5" y2="10" stroke="currentColor" strokeWidth="1" />
                <line x1="0" y1="5" x2="10" y2="5" stroke="currentColor" strokeWidth="1" />
              </svg>
              <div className="bg-foreground/8 dark:bg-foreground/5 h-px flex-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
