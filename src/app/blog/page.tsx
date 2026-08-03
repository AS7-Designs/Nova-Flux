import type { Metadata } from "next";

import { siteConfig } from "@/data/config";
import { getAllBlogs } from "@/lib/blog";
import { calculateReadTime } from "@/lib/read-time";

import BlogClient from "./blog-client";

export const metadata: Metadata = {
  title: "Blog",
  description: `Guides, CRM playbooks, and product news from ${siteConfig.name} on AI-powered sales workflows, pipeline automation, and closing more deals.`,
  openGraph: {
    title: `${siteConfig.name} Blog`,
    description: `Guides, CRM playbooks, and product news on AI-powered sales workflows.`,
    url: "/blog",
  },
};

export default function BlogPage() {
  // Get all blog posts on the server side
  const allBlogPosts = getAllBlogs();

  // Add category and readTime to posts
  const enhancedBlogPosts = allBlogPosts.map((post) => ({
    ...post,
    category: post.tags[0] || "Resource",
    readTime: calculateReadTime(post.content),
  }));

  return <BlogClient posts={enhancedBlogPosts} containerClass="container-large" />;
}
