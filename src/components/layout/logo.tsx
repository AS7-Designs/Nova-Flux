import Link from "next/link";
import React from "react";

import { siteConfig } from "@/data/config";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  wrapperClassName?: string;
  onlyLogo?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", wrapperClassName = "", onlyLogo = false }) => {
  if (onlyLogo) {
    return (
      <Link href="/" className="flex items-center gap-2">
        <img
          src="/images/nova-logo-mark.png"
          alt={siteConfig.logo.alt}
          className="h-8 w-auto shrink-0 object-contain"
        />
        <span className="font-display text-foreground text-xl leading-none font-bold tracking-tight">
          {siteConfig.name}
        </span>
      </Link>
    );
  }
  return (
    <div className={cn(``, wrapperClassName)}>
      <Link href="/" className={cn("flex items-center gap-2.5", className)}>
        <img
          src="/images/nova-logo-mark.png"
          alt={siteConfig.logo.alt}
          loading="eager"
          className="h-8 w-auto shrink-0 object-contain"
        />
        <span className="font-display text-foreground text-xl leading-none font-bold tracking-tight">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  );
};

export default Logo;

