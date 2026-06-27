import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  readingTime: string;
  featured?: boolean;
  coverImage?: string;
  content: string;
}

export interface BlogPostMeta extends Omit<BlogPost, "content"> {}

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data, content } = matter(raw);
      const rt = readingTime(content);
      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date || new Date().toISOString(),
        author: data.author || "PixolAI Team",
        category: data.category || "Web Development",
        tags: data.tags || [],
        readingTime: rt.text,
        featured: data.featured || false,
        coverImage: data.coverImage,
      } as BlogPostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const rt = readingTime(content);

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date || new Date().toISOString(),
    author: data.author || "PixolAI Team",
    category: data.category || "Web Development",
    tags: data.tags || [],
    readingTime: rt.text,
    featured: data.featured || false,
    coverImage: data.coverImage,
    content,
  };
}

export function getFeaturedPosts(limit = 3): BlogPostMeta[] {
  return getAllPosts()
    .filter((p) => p.featured)
    .slice(0, limit);
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
  return getAllPosts().filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

export function getRelatedPosts(
  current: string,
  category: string,
  limit = 3
): BlogPostMeta[] {
  return getAllPosts()
    .filter((p) => p.slug !== current && p.category === category)
    .slice(0, limit);
}

export const blogCategories = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "CSS",
  "HTML",
  "Python",
  "Node.js",
  "Web Development",
  "DevOps",
  "Programming Tutorials",
];
