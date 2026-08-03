import remarkGfm from "remark-gfm";

export const markdownMdxOptions = {
  parseFrontmatter: true,
  mdxOptions: {
    remarkPlugins: [remarkGfm],
  },
};

export const blogProseClassName =
  "prose lg:prose-lg prose-headings:font-display dark:prose-invert prose-headings:tracking-tight prose-p:leading-relaxed prose-li:leading-relaxed prose-img:rounded-md prose-img:shadow-sm prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-table:my-6 prose-table:w-full prose-table:border-collapse prose-th:border prose-th:border-border prose-th:bg-muted prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-medium prose-td:border prose-td:border-border prose-td:px-4 prose-td:py-2 mx-auto max-w-none";

export const legalProseClassName =
  "prose lg:prose-lg dark:prose-invert prose-headings:font-display prose-headings:text-center prose-headings:tracking-tight prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline mx-auto max-w-none";
