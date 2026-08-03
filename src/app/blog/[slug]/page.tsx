import type { Metadata } from "next";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";

import { BlogCard, type EnhancedBlogPost } from "@/app/blog/blog-card";
import { getAllBlogs, getBlogBySlug, getBlogSlugs } from "@/lib/blog";
import { blogProseClassName, markdownMdxOptions } from "@/lib/mdx-options";
import { calculateReadTime } from "@/lib/read-time";

import { AnimatedHeroImage } from "./animated-hero-image";
import { BackToBlog } from "./blog-post-ui";

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: post.author?.name ? [post.author.name] : undefined,
      images: post.coverImage ? [{ url: post.coverImage, alt: post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

// Get category from the first tag (most relevant)
const getCategoryFromTags = (tags: string[]): string => {
  return tags[0] || "General";
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  const { content } = await compileMDX({
    source: post.content,
    options: markdownMdxOptions,
  });

  // Get related posts
  const allPosts = getAllBlogs();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3);

  const readTime = calculateReadTime(post.content);

  return (
    <div className="section-padding page-top-padding container-large container">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-8">
          <BackToBlog />

          {/* Title and Description */}
          <h1 className="mb-4 text-4xl tracking-tight md:text-5xl lg:text-6xl">{post.title}</h1>
          <p className="text-muted-foreground mb-8 text-base md:text-lg">{post.description}</p>
        </header>

        {/* Hero Image */}
        <div className="">
          <AnimatedHeroImage src={post.coverImage} alt={post.title} slug={post.slug} />
        </div>

        {/* Author Information */}
        <div className="mt-8 mb-12 flex items-center gap-4">
          <img
            src={post.author.image}
            alt={post.author.name}
            loading="lazy"
            className="size-14 rounded-full object-cover"
          />
          <div>
            <div className="text-foreground text-2xl font-semibold">{post.author.name}</div>
            <div className="">
              {new Date(post.date).toLocaleDateString("en-GB", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}{" "}
              · {readTime}
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className={blogProseClassName}>{content}</article>
      </div>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="mt-20 lg:mt-24">
          <h2 className="text-4xl tracking-tight lg:text-5xl">Related Articles</h2>
          <p className="text-muted-foreground mt-3 text-lg leading-snug lg:mt-4">
            More guides, CRM playbooks, and industry news to help your sales team move faster with AI-powered workflows.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => {
              const enhancedPost: EnhancedBlogPost = {
                ...relatedPost,
                category: getCategoryFromTags(relatedPost.tags),
                readTime: calculateReadTime(relatedPost.content),
              };

              return (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group block h-full">
                  <BlogCard post={enhancedPost} />
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
