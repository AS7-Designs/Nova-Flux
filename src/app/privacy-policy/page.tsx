import { readFileSync } from "fs";
import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import { join } from "path";

import { siteConfig } from "@/data/config";
import { legalProseClassName, markdownMdxOptions } from "@/lib/mdx-options";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Learn how ${siteConfig.name} collects, uses, and protects your personal information.`,
};

export default async function PrivacyPolicy() {
  const filePath = join(process.cwd(), "./src/app/privacy-policy/index.mdx");
  const source = readFileSync(filePath, "utf8");

  const { content } = await compileMDX({
    source,
    options: markdownMdxOptions,
  });

  return (
    <section className="section-padding page-top-padding bg-background">
      <div className="container-small container">
        <article className={cn("mx-auto max-w-3xl", legalProseClassName)}>{content}</article>
      </div>
    </section>
  );
}
