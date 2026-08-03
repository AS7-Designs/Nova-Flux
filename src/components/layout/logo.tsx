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
      <Link href="/" className="flex items-center gap-2.5">
        <img
          src="/images/nova-logo-mark.png"
          alt={siteConfig.logo.alt}
          className="h-9 w-auto shrink-0 object-contain"
        />
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline font-display text-xl font-bold tracking-tight">
            <span className="text-foreground">Nova</span>
            <span className="bg-gradient-to-r from-[#5EEBFC] via-[#0090FF] to-[#1164F0] bg-clip-text text-transparent">
              Direct
            </span>
            <span className="text-[9px] font-semibold text-muted-foreground ml-0.5 select-none">TM</span>
          </div>
          <span className="text-[9.5px] font-medium tracking-wide text-foreground opacity-90 -mt-0.5">
            Software
          </span>
        </div>
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
          className="h-9 w-auto shrink-0 object-contain"
        />
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline font-display text-xl md:text-2xl font-bold tracking-tight">
            <span className="text-foreground">Nova</span>
            <span className="bg-gradient-to-r from-[#5EEBFC] via-[#0090FF] to-[#1164F0] bg-clip-text text-transparent">
              Direct
            </span>
            <span className="text-[9px] font-semibold text-muted-foreground ml-0.5 select-none">TM</span>
          </div>
          <span className="text-[10px] font-medium tracking-wide text-foreground opacity-90 -mt-0.5">
            Software
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;

