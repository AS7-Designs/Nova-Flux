"use client";

import { Eyebrow } from "@/components/elements/eyebrow";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export interface ContactFaqItem {
  question: string;
  answer: string;
}

interface ContactFaqProps {
  className?: string;
  containerClass?: string;
  title?: string;
  description?: string;
  items: ContactFaqItem[];
}

export default function ContactFaq({
  className,
  containerClass,
  title = "Frequently asked questions",
  description,
  items,
}: ContactFaqProps) {
  return (
    <section className={cn("section-padding relative", className)}>
      <div className={cn("container", containerClass)}>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-3xl">
            <div className="mx-auto max-w-3xl space-y-3 text-center lg:space-y-4">
              <Eyebrow className="justify-center">FAQ</Eyebrow>
              <h2 className="text-4xl tracking-tight lg:text-5xl">{title}</h2>
              {description ? <p className="text-muted-foreground text-lg leading-snug">{description}</p> : null}
            </div>

            <Accordion type="single" collapsible className="mt-8 w-full lg:mt-10">
              {items.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-${index}`} className="last:border-b">
                  <AccordionTrigger className="py-4 hover:no-underline">
                    <p className="text-base font-normal lg:text-lg">{item.question}</p>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
