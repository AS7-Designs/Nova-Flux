import { FluxContourPattern } from "@/components/elements/flux-contour-pattern";
import { cn } from "@/lib/utils";

interface VisionSection {
  title: string;
  label: string;
  content: string;
  accent: "warm" | "cool";
}

interface AboutVisionProps {
  className?: string;
  containerClass?: string;
  sections?: Array<{
    title: string;
    content: string;
  }>;
}

const ACCENT_GRADIENT = {
  warm: "from-chart-1 via-chart-2 to-chart-3",
  cool: "from-chart-3 via-chart-4 to-chart-2",
} as const;

const DEFAULT_SECTIONS: VisionSection[] = [
  {
    title: "Our vision",
    label: "Vision",
    accent: "warm",
    content:
      "Sales should not feel like data entry. For years, CRMs have been where deals go to stall — reps update fields, managers chase reports, and the real work of selling gets buried.\n\nWe believe AI changes that equation. When every email, call, and meeting is understood automatically, your team spends time on relationships — not spreadsheets.\n\nFlux is built for that future: a CRM that reads the room, drafts the next move, and keeps your pipeline moving without the manual grind.",
  },
  {
    title: "Who we are",
    label: "Origin",
    accent: "cool",
    content:
      "Flux started inside a revenue team that was tired of fighting its own tools. We built what we wished existed — pipeline intelligence, AI-drafted outreach, and automations that actually match how deals move.\n\nToday, Flux powers high-velocity sales and success teams who want clarity without complexity. We are designers, engineers, and operators who have lived the pipeline pain — and we are obsessed with making it disappear.",
  },
];

function VisionBlock({ section, className }: { section: VisionSection; className?: string }) {
  const paragraphs = section.content.split("\n\n");
  const lead = paragraphs[0] ?? "";
  const body = paragraphs.slice(1).join("\n\n");

  return (
    <article className={cn("bg-card border-border relative rounded-md border p-8 shadow-none lg:p-10", className)}>
      <div className="space-y-6">
        <div className="space-y-4">
          <div className={cn("h-1 w-10 rounded-full bg-gradient-to-r", ACCENT_GRADIENT[section.accent])} />
          <p className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase">{section.label}</p>
          <h2 className="text-3xl font-medium tracking-tight lg:text-4xl">{section.title}</h2>
        </div>

        <p className="text-lg leading-snug font-medium text-pretty">{lead}</p>

        {body ? <p className="text-muted-foreground leading-7 whitespace-pre-line">{body}</p> : null}
      </div>
    </article>
  );
}

export default function AboutVision({ className, containerClass, sections = DEFAULT_SECTIONS }: AboutVisionProps) {
  if (!sections.length) return null;

  const [first, second] = sections.map((section, idx) => ({
    ...DEFAULT_SECTIONS[idx],
    ...section,
  }));

  return (
    <section className={cn("section-padding relative overflow-hidden", className)}>
      <FluxContourPattern className="opacity-[0.12] dark:opacity-[0.09]" />
      <div className={cn("relative z-10 container", containerClass)}>
        <div className="flex flex-col items-center justify-center">
          <div className="grid w-full gap-6 lg:grid-cols-2 lg:gap-8">
            {first ? <VisionBlock section={first} /> : null}
            {second ? <VisionBlock section={second} /> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
