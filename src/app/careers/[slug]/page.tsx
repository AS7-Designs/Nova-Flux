import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";

import { getAllCareers, getCareerBySlug, getCareerSlugs } from "@/lib/careers";

export async function generateStaticParams() {
  const slugs = getCareerSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const career = getCareerBySlug(slug);

  return {
    title: career.title,
    description: career.description,
    openGraph: {
      title: career.title,
      description: career.description,
      url: `/careers/${career.slug}`,
    },
  };
}

export default async function CareerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const career = getCareerBySlug(slug);
  const { content } = await compileMDX({
    source: career.content,
    options: { parseFrontmatter: false },
  });

  const otherRoles = getAllCareers().filter((role) => role.slug !== slug);

  return (
    <div className="section-padding page-top-padding container-large container">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/careers"
          className="group text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm transition-colors"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          Back to Careers
        </Link>

        <header className="mb-10 space-y-4 lg:mb-12">
          <div className="text-muted-foreground flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <span>{career.department}</span>
            <span>{career.location}</span>
            <span>{career.type}</span>
          </div>
          <h1 className="text-4xl tracking-tight md:text-5xl lg:text-6xl">{career.title}</h1>
          <p className="text-muted-foreground text-base md:text-lg">{career.description}</p>
        </header>

        <article className="prose lg:prose-lg prose-headings:font-weight-display dark:prose-invert prose-headings:tracking-tight prose-p:leading-relaxed prose-li:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none">
          {content}
        </article>

        {otherRoles.length > 0 ? (
          <section className="mt-16 border-t pt-12 lg:mt-20">
            <h2 className="text-2xl font-medium tracking-tight lg:text-3xl">Other open roles</h2>
            <ul className="mt-6 space-y-4">
              {otherRoles.map((role) => (
                <li key={role.slug}>
                  <Link
                    href={`/careers/${role.slug}`}
                    className="group inline-flex items-center gap-2 font-medium hover:underline"
                  >
                    {role.title}
                    <span className="text-muted-foreground text-sm font-normal">· {role.department}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </div>
  );
}
