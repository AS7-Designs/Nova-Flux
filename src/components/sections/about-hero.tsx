import { Eyebrow } from "@/components/elements/eyebrow";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/config";
import { cn } from "@/lib/utils";

interface AboutHeroProps {
  className?: string;
  containerClass?: string;
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src?: string;
    alt?: string;
    title: string;
    description: string;
    buttonText?: string;
    buttonUrl?: string;
  };
}

export default function AboutHero({
  className,
  containerClass,
  title = `About ${siteConfig.name}`,
  description = "NovaDirect brings every part of your direct selling operation together into one modern platform, built specifically around the way your network works, all under your brand.",
  mainImage = {
    src: "/images/about/hero-team.webp",
    alt: `${siteConfig.name} team collaborating in a modern office`,
  },
  secondaryImage = {
    src: "/images/about/hero-office.webp",
    alt: "Modern office hallway with glass panel doors",
  },
  breakout = {
    src: siteConfig.logo.src,
    alt: siteConfig.name,
    title: siteConfig.tagline,
    description: "From member management and product sales to commission automation and global payouts — all configured around your business.",
    buttonText: "Explore the Platform",
    buttonUrl: "/#platform",
  },
}: AboutHeroProps) {
  return (
    <section className={cn("section-padding relative", className)}>
      <div className={cn("container", containerClass)}>
        <div className="max-w-4xl space-y-3 lg:space-y-4">
          <Eyebrow>About</Eyebrow>
          <h1 className="text-3xl leading-[1.1] font-medium tracking-tighter md:text-5xl lg:text-6xl">{title}</h1>
          <p className="text-muted-foreground text-base md:text-lg">{description}</p>
        </div>
        <div className="mt-14 grid gap-7 lg:grid-cols-3 lg:items-stretch">
          <div className="relative lg:col-span-2">
            <img src={mainImage.src} alt={mainImage.alt} className="size-full max-h-[620px] rounded-md object-cover" />
            {/* Corner crosshairs */}
            <svg
              aria-hidden
              className="text-foreground/10 pointer-events-none absolute -top-1 -left-1 hidden size-2.5 lg:block"
              viewBox="0 0 10 10"
            >
              <line x1="5" y1="0" x2="5" y2="10" stroke="currentColor" strokeWidth="1" />
              <line x1="0" y1="5" x2="10" y2="5" stroke="currentColor" strokeWidth="1" />
            </svg>
            <svg
              aria-hidden
              className="text-foreground/10 pointer-events-none absolute -top-1 -right-1 hidden size-2.5 lg:block"
              viewBox="0 0 10 10"
            >
              <line x1="5" y1="0" x2="5" y2="10" stroke="currentColor" strokeWidth="1" />
              <line x1="0" y1="5" x2="10" y2="5" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
          <div className="flex max-h-[620px] flex-col gap-7 md:flex-row lg:h-full lg:flex-col">
            <div className="bg-muted flex shrink-0 flex-col justify-between gap-6 rounded-xl p-7 md:w-1/2 lg:w-auto">
              {breakout.src ? <img src={breakout.src} alt={breakout.alt} className="mr-auto h-12 dark:invert" /> : null}
              <div>
                <p className="mb-2 text-lg font-semibold">{breakout.title}</p>
                <p className="text-muted-foreground text-base md:text-lg">{breakout.description}</p>
              </div>
              {breakout.buttonText && breakout.buttonUrl ? (
                <Button variant="outline" className="mr-auto" asChild>
                  <a href={breakout.buttonUrl}>{breakout.buttonText}</a>
                </Button>
              ) : null}
            </div>
            <div className="flex min-h-0 flex-1 flex-col justify-end md:w-1/2 lg:w-auto">
              <div className="max-h-full overflow-hidden rounded-md">
                <img src={secondaryImage.src} alt={secondaryImage.alt} className="block h-auto max-h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
