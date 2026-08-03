import fs from "fs";
import matter from "gray-matter";
import path from "path";

const CAREERS_PATH = path.join(process.cwd(), "src/content/careers");

export type Career = {
  slug: string;
  title: string;
  description: string;
  department: string;
  location: string;
  type: string;
  content: string;
};

export function getCareerSlugs(): string[] {
  return fs.readdirSync(CAREERS_PATH).filter((file) => /\.mdx?$/.test(file));
}

export function getCareerBySlug(slug: string): Career {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(CAREERS_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title,
    description: data.description,
    department: data.department,
    location: data.location,
    type: data.type,
    content,
  };
}

export function getAllCareers(): Career[] {
  return getCareerSlugs().map((slug) => getCareerBySlug(slug));
}
