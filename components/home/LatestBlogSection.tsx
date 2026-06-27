import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

export function LatestBlogSection() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">
              Tutorials & Guides
            </p>
            <h2 className="text-3xl font-bold text-slate-900">Latest Articles</h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-indigo-200 hover:shadow-md transition-all"
            >
              <div className="h-40 bg-gradient-to-br from-indigo-50 to-violet-50 flex items-center justify-center">
                <span className="text-5xl">📖</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock className="h-3 w-3" /> {post.readingTime}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-500 line-clamp-2 flex-1">
                  {post.description}
                </p>
                <div className="mt-4 text-xs text-slate-400">{formatDate(post.date)}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
