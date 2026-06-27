import type { Metadata } from "next";
import Link from "next/link";
import { tools, toolCategories } from "@/lib/tools";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Free Developer Tools",
  description:
    "Browse 16+ free developer tools: JSON formatter, Base64 encoder, Regex tester, UUID generator, and more. No login required.",
  alternates: { canonical: `${siteConfig.url}/tools` },
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-slate-100 bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            Free Developer Tools
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            16+ browser-based tools. No account, no installs, no limits.
            Everything runs locally for maximum privacy and speed.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {toolCategories.map((category) => {
          const categoryTools = tools.filter((t) => t.category === category);
          if (!categoryTools.length) return null;

          return (
            <div key={category} className="mb-14">
              <h2 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-3">
                <span className="inline-flex h-7 px-3 items-center rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold">
                  {category}
                </span>
                <span className="text-sm font-normal text-slate-400">
                  {categoryTools.length} tool{categoryTools.length !== 1 ? "s" : ""}
                </span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {categoryTools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/tools/${tool.slug}`}
                    className="tool-card group flex items-start gap-4 p-5 rounded-xl bg-white"
                  >
                    <span className="text-2xl flex-shrink-0 mt-0.5">{tool.icon}</span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                          {tool.name}
                        </h3>
                        {tool.new && (
                          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                            New
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "PixolAI Developer Tools",
            numberOfItems: tools.length,
            itemListElement: tools.map((t, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: t.name,
              url: `${siteConfig.url}/tools/${t.slug}`,
              description: t.description,
            })),
          }),
        }}
      />
    </div>
  );
}
