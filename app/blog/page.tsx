import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { getAllPosts, blogCategories } from "@/lib/blog";
import { formatDate, siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Developer Blog — Tutorials & Guides",
  description: "In-depth JavaScript, TypeScript, React, Next.js, Python, and web development tutorials written for working developers.",
  alternates: { canonical: `${siteConfig.url}/blog` },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts.filter((p) => p.featured).slice(0, 1)[0];
  const rest = posts.filter((p) => !featured || p.slug !== featured.slug);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-slate-100 bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            Developer Tutorials & Guides
          </h1>
          <p className="text-lg text-slate-500 max-w-xl">
            Practical articles on JavaScript, TypeScript, React, Next.js, Python,
            and web development — written by developers, for developers.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-10">
          <Link
            href="/blog"
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-600 text-white"
          >
            All
          </Link>
          {blogCategories.map((cat) => (
            <Link
              key={cat}
              href={`/blog?category=${cat}`}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              {cat}
            </Link>
          ))}
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <p className="text-lg font-medium mb-2">No articles yet</p>
            <p className="text-sm">Check back soon — new tutorials are being published regularly.</p>
          </div>
        ) : (
          <>
            {/* Featured post */}
            {featured && (
              <div className="mb-10">
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group flex flex-col md:flex-row rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-indigo-200 hover:shadow-lg transition-all"
                >
                  <div className="md:w-96 h-52 md:h-auto bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-7xl">📖</span>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold">
                        Featured
                      </span>
                      <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                        {featured.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-3">
                      {featured.title}
                    </h2>
                    <p className="text-slate-500 mb-4 line-clamp-2">{featured.description}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <span>{featured.author}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{featured.readingTime}</span>
                      <span>·</span>
                      <span>{formatDate(featured.date)}</span>
                    </div>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-indigo-600">
                      Read article <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Post grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-indigo-200 hover:shadow-md transition-all"
                >
                  <div className="h-40 bg-gradient-to-br from-slate-50 to-indigo-50 flex items-center justify-center">
                    <span className="text-5xl">📝</span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock className="h-3 w-3" /> {post.readingTime}
                      </span>
                    </div>
                    <h2 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-slate-500 line-clamp-2 flex-1">{post.description}</p>
                    <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                      <span>{post.author}</span>
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
