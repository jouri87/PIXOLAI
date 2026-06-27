import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length).trim() + "…";
}

export const siteConfig = {
  name: "PixolAI",
  description: "Free developer tools, coding resources, and programming tutorials for developers worldwide.",
  url: "https://pixolai.dev",
  ogImage: "https://pixolai.dev/og.png",
  links: {
    twitter: "https://twitter.com/pixolai",
    github: "https://github.com/pixolai",
  },
  author: {
    name: "PixolAI Team",
    url: "https://pixolai.dev/about",
  },
};
