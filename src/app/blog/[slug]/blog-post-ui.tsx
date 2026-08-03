"use client";

import AltArrowLeftLinear from "@iconify-react/solar/alt-arrow-left-linear";
import Link from "next/link";

export function BackToBlog() {
  return (
    <Link
      href="/blog"
      className="group text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm transition-colors"
    >
      <AltArrowLeftLinear className="size-4 transition-transform group-hover:-translate-x-0.5" />
      Back to Blog
    </Link>
  );
}
