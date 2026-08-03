import { readFileSync } from "fs";
import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import { join } from "path";

import { siteConfig } from "@/data/config";
import { legalProseClassName, markdownMdxOptions } from "@/lib/mdx-options";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms and conditions governing your use of ${siteConfig.name}.`,
};

export default async function TermsOfService() {
  const filePath = join(process.cwd(), "./src/app/terms-and-conditions/index.mdx");
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
