import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import type { ContactDetailItem } from "@/data/config";
import { cn } from "@/lib/utils";

const CONTACT_ICONS = {
  mail: Mail,
  phone: Phone,
  "map-pin": MapPin,
  chat: MessageCircle,
} as const;

interface ContactDetailsProps {
  className?: string;
  containerClass?: string;
  items: ContactDetailItem[];
}

export default function ContactDetails({ className, containerClass, items }: ContactDetailsProps) {
  return (
    <section className={cn("section-padding relative", className)}>
      <div className={cn("container", containerClass)}>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((item, i) => {
                const Icon = CONTACT_ICONS[item.icon];

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "group flex items-center gap-3",
                      i > 0 && "lg:border-foreground/[0.06] lg:border-l lg:pl-6",
                    )}
                  >
                    <div className="bg-card text-muted-foreground flex size-10 shrink-0 items-center justify-center rounded-lg border">
                      <Icon className="size-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-muted-foreground text-xs font-medium tracking-[0.15em] uppercase">
                        {item.label}
                      </p>
                      <p className="mt-0.5 truncate font-medium tracking-tight group-hover:underline">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
