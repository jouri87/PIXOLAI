import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedTools } from "@/lib/tools";

export function FeaturedTools() {
  const tools = getFeaturedTools();

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">
              Featured Tools
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              Most-used Developer Tools
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl">
              Hand-picked tools that developers reach for every day. Fast, free,
              and always available in your browser.
            </p>
          </div>
          <Link
            href="/tools"
            className="hidden md:flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            View all tools <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="tool-card group bg-white rounded-2xl p-6 flex flex-col gap-4 hover:no-underline"
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl">{tool.icon}</div>
                <div>
                  <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {tool.name}
                  </h3>
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                    {tool.category}
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                {tool.description}
              </p>
              <div className="mt-auto flex items-center text-sm font-medium text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Open tool <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/tools"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600"
          >
            View all tools <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
