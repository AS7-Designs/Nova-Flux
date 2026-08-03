import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Eyebrow } from "@/components/elements/eyebrow";
import { siteConfig } from "@/data/config";
import { getAllCareers } from "@/lib/careers";

export const metadata: Metadata = {
  title: "Careers",
  description: `Join ${siteConfig.name} and help build the AI CRM sales teams love. Explore open roles across engineering, design, and revenue — remote-first across the US and Europe.`,
  openGraph: {
    title: `Careers at ${siteConfig.name}`,
    description: `Help build the AI CRM sales teams love. Explore our open roles.`,
    url: "/careers",
  },
};

export default function CareersPage() {
  const careers = getAllCareers();

  return (
    <section className="section-padding page-top-padding relative">
      <div className="container-large container">
        <div className="mx-auto max-w-3xl space-y-3 text-center lg:space-y-4">
          <Eyebrow className="justify-center">Careers</Eyebrow>
          <h1 className="text-5xl font-semibold tracking-tighter lg:text-6xl">Careers at Flux</h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Join the team building the AI CRM sales teams actually want to use. We&apos;re a small, senior group of
            revenue operators, engineers, and designers obsessed with making pipeline pain disappear.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl lg:mt-16">
          <p className="text-muted-foreground text-center text-base leading-relaxed md:text-lg">
            Flux is remote-first across the US and Europe. We move fast, ship often, and care deeply about craft —
            whether you&apos;re writing code, closing deals, or designing the next workflow reps will love.
          </p>
        </div>

        <div className="mt-14 lg:mt-20">
          <h2 className="text-2xl font-medium tracking-tight lg:text-3xl">Open roles</h2>
          <ul className="mt-8 divide-y border-y">
            {careers.map((career) => (
              <li key={career.slug}>
                <Link
                  href={`/careers/${career.slug}`}
                  className="group flex flex-col gap-3 py-6 transition-colors sm:flex-row sm:items-center sm:justify-between lg:py-8"
                >
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium tracking-tight group-hover:underline lg:text-2xl">
                      {career.title}
                    </h3>
                    <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed md:text-base">
                      {career.description}
                    </p>
                    <div className="text-muted-foreground flex flex-wrap gap-x-4 gap-y-1 text-xs md:text-sm">
                      <span>{career.department}</span>
                      <span>{career.location}</span>
                      <span>{career.type}</span>
                    </div>
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground inline-flex shrink-0 items-center gap-1 text-sm font-medium">
                    View role
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
