"use client";

import { X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Banner = ({ url = "https://cruip.com/flux/" }: { url?: string }) => {
  const searchParams = useSearchParams();
  const bannerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);

  const isBannerDisabled = searchParams.get("banner") === "false";

  // Check URL param and localStorage to see if banner should be hidden
  useEffect(() => {
    const syncFromStorage = () => {
      setIsClient(true);
      if (isBannerDisabled) {
        setIsVisible(false);
        localStorage.setItem("banner-dismissed", "true");
        return;
      }
      const bannerDismissed = localStorage.getItem("banner-dismissed");
      if (bannerDismissed === "true") {
        setIsVisible(false);
      }
    };
    syncFromStorage();
  }, [isBannerDisabled]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("banner-dismissed", "true");
  };

  useLayoutEffect(() => {
    const root = document.documentElement;

    if (!isClient || !isVisible) {
      root.style.setProperty("--banner-height", "0px");
      return;
    }

    const banner = bannerRef.current;
    if (!banner) return;

    const updateHeight = () => {
      root.style.setProperty("--banner-height", `${banner.offsetHeight}px`);
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(banner);

    return () => observer.disconnect();
  }, [isClient, isVisible]);

  useEffect(() => {
    return () => {
      document.documentElement.style.setProperty("--banner-height", "0px");
    };
  }, []);

  // Don't render anything until client-side hydration is complete
  if (!isClient || !isVisible) {
    return null;
  }

  return (
    <div ref={bannerRef} className="bg-primary relative z-[60]">
      <div className="container flex items-center justify-between gap-4 py-3 pr-12">
        <div className="flex flex-1 items-center justify-center gap-3 sm:gap-4">
          <span className="text-primary-foreground text-center text-sm font-medium">
            Purchase this template on Cruip.com
          </span>
          <Button size="sm" variant="secondary" asChild>
            <a href={url} target="_blank" rel="noopener noreferrer">
              Buy template
            </a>
          </Button>
        </div>
        <button
          onClick={handleDismiss}
          className={cn(
            "absolute top-1/2 right-4 -translate-y-1/2 rounded-sm p-1.5",
            "text-primary-foreground/70 hover:text-primary-foreground",
            "hover:bg-primary-foreground/10 transition-all duration-200 hover:scale-110",
            "focus:ring-primary-foreground/30 focus:ring-2 focus:outline-none",
          )}
          aria-label="Close banner"
        >
          <X className="size-3.5" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
