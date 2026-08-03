"use client";

import ArrowRightUpLinear from "@iconify-react/solar/arrow-right-up-linear";
import ClockCircleLinear from "@iconify-react/solar/clock-circle-linear";

import { BlogPost } from "@/lib/blog";
import { cn } from "@/lib/utils";

export interface EnhancedBlogPost extends BlogPost {
  category: string;
  readTime: string;
}

interface BlogCardProps {
  post: EnhancedBlogPost;
  className?: string;
}

export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <article
      className={cn(
        "bg-card border-border flex h-full flex-col overflow-hidden rounded-md border shadow-none",
        className,
      )}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          loading="lazy"
          className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between gap-2 text-sm">
          <span className="font-medium">{post.category}</span>
          <span className="text-muted-foreground flex shrink-0 items-center gap-1">
            <ClockCircleLinear className="size-3.5" />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-xl leading-snug font-medium tracking-tight">{post.title}</h3>

        <p className="text-muted-foreground line-clamp-2 flex-1 text-sm leading-snug">{post.description}</p>

        <div className="mt-3 flex items-center justify-between gap-2 pt-1">
          <span className="text-muted-foreground text-sm">
            {new Date(post.date).toLocaleDateString("en-GB", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="text-foreground flex items-center gap-1 text-sm font-medium group-hover:underline">
            Read
            <ArrowRightUpLinear className="size-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
