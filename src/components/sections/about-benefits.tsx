import { Eyebrow } from "@/components/elements/eyebrow";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/data/config";
import { cn } from "@/lib/utils";

const COLUMNS_DATA = [
  {
    image: "/images/about/pipeline-analytics.webp",
    imageAlt: "Sales leader reviewing pipeline analytics",
    cardTitle: "34%",
    cardSubtitle: "Avg. pipeline lift",
    cardContent:
      "Teams on Flux report faster deal velocity, fewer stalled opportunities, and clearer forecast accuracy within the first quarter.",
    cardPosition: "bottom" as const,
  },
  {
    image: "/images/about/sarah-mitchell-portrait.webp",
    imageAlt: "Sarah Mitchell, Head of Sales",
    logoSrc: "/images/partners/anthropic.svg",
    logoAlt: "Anthropic",
    logoClassName: "h-4 w-auto md:h-5 dark:invert",
    name: "Sarah Mitchell",
    title: "Head of Sales at Anthropic",
    cardContent: "Flux cut our follow-up admin in half. Reps finally spend time selling — the CRM handles the rest.",
    cardPosition: "inside" as const,
  },
];

export default function AboutBenefits({ className, containerClass }: { className?: string; containerClass?: string }) {
  return (
    <section className={cn("section-padding relative", className)}>
      <div className={cn("container", containerClass)}>
        <div className="max-w-3xl space-y-3 lg:space-y-4">
          <Eyebrow>Impact</Eyebrow>
          <h2 className="text-4xl tracking-tight lg:text-5xl">Why teams switch to Flux</h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-sm gap-6 lg:mx-0 lg:mt-16 lg:max-w-none lg:grid-cols-2 lg:gap-8">
          {COLUMNS_DATA.map((column, index) => {
            if (column.cardPosition === "inside") {
              return <InsideCardColumn key={index} {...column} />;
            }

            return <TopBottomCardColumn key={index} {...column} />;
          })}
        </div>
      </div>
    </section>
  );
}

// Column Components
interface ColumnProps {
  image: string;
  imageAlt: string;
  cardTitle?: string;
  cardSubtitle?: string;
  cardContent: string;
  cardFooter?: string;
  cardPosition: "top" | "inside" | "bottom";
  name?: string;
  title?: string;
  logoSrc?: string;
  logoAlt?: string;
  logoClassName?: string;
}

function TopBottomCardColumn({ image, imageAlt, cardTitle, cardSubtitle, cardContent, cardPosition }: ColumnProps) {
  return (
    <div className="flex flex-col gap-6">
      {cardPosition === "bottom" && (
        <div className="aspect-[389/384] w-full overflow-hidden rounded-md border">
          <img src={image} alt={imageAlt} loading="lazy" className="size-full object-cover" />
        </div>
      )}
      <Card className="">
        <CardHeader>
          <CardTitle className="text-4xl font-medium">{cardTitle}</CardTitle>
          <p className="text-base font-semibold">{cardSubtitle}</p>
        </CardHeader>
        <CardContent>
          <CardDescription className="">{cardContent}</CardDescription>
        </CardContent>
      </Card>
      {cardPosition === "top" && (
        <div className="aspect-[389/384] w-full overflow-hidden rounded-md border">
          <img src={image} alt={imageAlt} loading="lazy" className="size-full object-cover" />
        </div>
      )}
    </div>
  );
}

function InsideCardColumn({
  image,
  imageAlt,
  cardTitle,
  logoSrc = siteConfig.logo.src,
  logoAlt = "",
  logoClassName = "size-6 dark:invert",
  name,
  title,
  cardContent,
}: ColumnProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="relative aspect-[326/576] w-full flex-1 overflow-hidden rounded-md border lg:aspect-auto">
        <img src={image} alt={imageAlt} loading="lazy" className="size-full rounded-md object-cover" />
        {/* Overlay card */}
        <Card className="absolute right-6 bottom-6 left-6 gap-4">
          <CardHeader className="gap-0">
            <CardTitle className="flex items-center gap-2 text-sm font-medium">
              <img src={logoSrc} alt={logoAlt} className={logoClassName} />
              {cardTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="">{cardContent}</CardDescription>
          </CardContent>
          <CardFooter className="mt-2 block">
            <span className="font-medium">{name}</span> <span className="text-sm">{title}</span>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
