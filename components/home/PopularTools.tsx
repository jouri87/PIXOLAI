import Link from "next/link";
import { getPopularTools } from "@/lib/tools";

export function PopularTools() {
  const tools = getPopularTools();

  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">
            Popular Right Now
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            Tools Developers Love
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-md hover:-translate-y-1 transition-all group"
            >
              <span className="text-3xl">{tool.icon}</span>
              <span className="text-xs font-semibold text-slate-700 text-center leading-tight group-hover:text-indigo-600 transition-colors">
                {tool.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
