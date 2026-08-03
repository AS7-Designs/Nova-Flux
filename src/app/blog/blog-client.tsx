"use client";

import ArrowRightUpLinear from "@iconify-react/solar/arrow-right-up-linear";
import ClockCircleLinear from "@iconify-react/solar/clock-circle-linear";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

import { BlogCard, type EnhancedBlogPost } from "@/app/blog/blog-card";
import { Eyebrow } from "@/components/elements/eyebrow";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

const categories = ["View all", "Guides", "Industry News", "AI", "CRM", "Sales Operations"];

interface BlogClientProps {
  posts: EnhancedBlogPost[];
  containerClass?: string;
}

export default function BlogClient({ posts, containerClass }: BlogClientProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState("View all");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const filteredPosts = posts
    .filter((post) => selectedCategory === "View all" || post.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

  const featuredPost = selectedCategory === "View all" ? posts[0] : filteredPosts[0];

  const regularPosts = filteredPosts.filter((post) => post.slug !== featuredPost?.slug);

  const totalPages = Math.ceil(regularPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = regularPosts.slice(startIndex, startIndex + postsPerPage);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 22,
      },
    },
  };

  return (
    <section className="section-padding page-top-padding relative">
      <div className={cn("container", containerClass)}>
        <div className="flex flex-col">
          {/* Hero — matches about page */}
          <div className="max-w-4xl space-y-3 lg:space-y-4">
            <Eyebrow>Blog</Eyebrow>
            <h1 className="text-3xl leading-[1.1] font-medium tracking-tighter md:text-5xl lg:text-6xl">Blog</h1>
            <p className="text-muted-foreground text-base md:text-lg">
              Guides, industry news, and CRM strategies for sales teams and revenue operations.
            </p>
          </div>

          {/* Featured post — about hero grid ratio (2/3 image, 1/3 content) */}
          {featuredPost && (
            <Link href={`/blog/${featuredPost.slug}`} className="group mt-14 block">
              <motion.article
                className="grid gap-7 lg:grid-cols-3 lg:items-stretch"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative overflow-hidden rounded-md lg:col-span-2">
                  <img
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    width={1200}
                    height={1600}
                    loading="eager"
                    className="size-full max-h-[620px] rounded-md object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="bg-muted flex max-h-[620px] flex-col justify-between gap-6 rounded-md p-7">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <Badge variant="secondary">{featuredPost.category}</Badge>
                      <span className="text-muted-foreground flex items-center gap-1.5">
                        <ClockCircleLinear className="size-3.5" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <div className="flex items-start gap-2">
                      <h2 className="text-lg leading-snug font-semibold md:text-xl">{featuredPost.title}</h2>
                      <ArrowRightUpLinear className="mt-0.5 size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                    <p className="text-muted-foreground text-base md:text-lg">{featuredPost.description}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={featuredPost.author.image}
                        alt={featuredPost.author.name}
                        width={32}
                        height={32}
                        loading="lazy"
                        className="size-8 rounded-full object-cover"
                      />
                      <div className="text-sm">
                        <div className="font-medium">{featuredPost.author.name}</div>
                        <div className="text-muted-foreground">
                          {new Date(featuredPost.date).toLocaleDateString("en-GB", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {featuredPost.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="capitalize">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            </Link>
          )}

          {/* Filters */}
          <div className="mt-14 flex flex-col justify-between gap-4 md:mt-16 lg:mt-20 lg:flex-row lg:items-center">
            <div className="min-w-0 flex-1 overflow-x-auto">
              <Tabs value={selectedCategory} onValueChange={handleCategoryChange}>
                <ScrollArea className="pb-2" orientation="horizontal">
                  <TabsList>
                    {categories.map((category) => (
                      <TabsTrigger key={category} value={category} className="whitespace-nowrap">
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </ScrollArea>
              </Tabs>
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="bg-card w-full sm:w-[200px]">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest first</SelectItem>
                <SelectItem value="oldest">Oldest first</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Grid */}
          <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
            {currentPosts.map((post) => (
              <motion.div
                key={`${selectedCategory}-${sortBy}-${currentPage}-${post.slug}`}
                variants={cardVariants}
                initial={prefersReducedMotion ? "visible" : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="h-full"
              >
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <BlogCard post={post} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <AnimatePresence>
            {totalPages > 1 && (
              <motion.div
                className="border-input/50 mt-12 flex justify-center border-t pt-4 md:mt-20"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) setCurrentPage(currentPage - 1);
                        }}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(page);
                          }}
                          isActive={currentPage === page}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                        }}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
