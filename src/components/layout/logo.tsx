import Link from "next/link";
import React from "react";

import { siteConfig } from "@/data/config";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  wrapperClassName?: string;
  onlyLogo?: boolean;
  inverted?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", wrapperClassName = "", onlyLogo = false, inverted = false }) => {
  const markSrc = inverted ? "/images/nova-mark-white.png" : "/images/nova-mark-blue.png";
  const textColor = inverted ? "text-white" : "text-foreground";
  const subtextColor = inverted ? "text-white/80" : "text-foreground/80";

  if (onlyLogo) {
    return (
      <Link href="/" className={cn("inline-flex items-center gap-2.5", className)}>
        <img
          src={markSrc}
          alt={siteConfig.logo.alt}
          className="h-8 md:h-9 w-auto shrink-0 object-contain"
        />
      </Link>
    );
  }

  return (
    <div className={cn("inline-flex items-center", wrapperClassName)}>
      <Link href="/" className={cn("inline-flex items-center gap-2.5 md:gap-3", className)}>
        <img
          src={markSrc}
          alt={siteConfig.logo.alt}
          loading="eager"
          className="h-9 md:h-10 w-auto shrink-0 object-contain my-auto"
        />
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-baseline font-display text-xl md:text-2xl font-bold tracking-tight">
            <span className={textColor}>Nova</span>
            <span className="bg-gradient-to-r from-[#5EEBFC] via-[#0090FF] to-[#1164F0] bg-clip-text text-transparent">
              Direct
            </span>
          </div>
          <span className={cn("text-[10px] font-semibold tracking-wider uppercase mt-0.5", subtextColor)}>
            Software
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;

