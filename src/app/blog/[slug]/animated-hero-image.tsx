"use client";

import { motion } from "motion/react";

interface AnimatedHeroImageProps {
  src: string;
  alt: string;
  slug: string;
}

export function AnimatedHeroImage({ src, alt, slug }: AnimatedHeroImageProps) {
  return (
    <motion.div layoutId={`cover-image-${slug}`} className="aspect-[16/9] overflow-hidden rounded-md">
      <img src={src} alt={alt} loading="eager" className="size-full object-cover" />
    </motion.div>
  );
}
