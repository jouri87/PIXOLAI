import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { tools, getToolBySlug, getRelatedTools } from "@/lib/tools";
import { siteConfig } from "@/lib/utils";
import { JsonFormatterTool } from "@/components/tools/JsonFormatterTool";
import { Base64Tool } from "@/components/tools/Base64Tool";
import { RegexTesterTool } from "@/components/tools/RegexTesterTool";
import { PasswordGeneratorTool } from "@/components/tools/PasswordGeneratorTool";
import { UuidGeneratorTool } from "@/components/tools/UuidGeneratorTool";
import { TimestampConverterTool } from "@/components/tools/TimestampConverterTool";
import { JsonValidatorTool } from "@/components/tools/JsonValidatorTool";
import { JsonMinifierTool } from "@/components/tools/JsonMinifierTool";
import { UrlEncoderTool } from "@/components/tools/UrlEncoderTool";
import { UrlDecoderTool } from "@/components/tools/UrlDecoderTool";
import { ColorConverterTool } from "@/components/tools/ColorConverterTool";
import { MarkdownPreviewerTool } from "@/components/tools/MarkdownPreviewerTool";
import { CssMinifierTool } from "@/components/tools/CssMinifierTool";
import { JsMinifierTool } from "@/components/tools/JsMinifierTool";
import { HtmlFormatterTool } from "@/components/tools/HtmlFormatterTool";
import { SqlFormatterTool } from "@/components/tools/SqlFormatterTool";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  return {
    title: `${tool.name} — Free Online Tool`,
    description: tool.longDescription,
    keywords: tool.keywords,
    alternates: { canonical: `${siteConfig.url}/tools/${slug}` },
    openGraph: {
      title: `${tool.name} | PixolAI`,
      description: tool.longDescription,
      url: `${siteConfig.url}/tools/${slug}`,
    },
  };
}

function ToolComponent({ slug }: { slug: string }) {
  const map: Record<string, React.ReactNode> = {
    "json-formatter": <JsonFormatterTool />,
    "json-validator": <JsonValidatorTool />,
    "json-minifier": <JsonMinifierTool />,
    "base64-encoder": <Base64Tool />,
    "regex-tester": <RegexTesterTool />,
    "password-generator": <PasswordGeneratorTool />,
    "uuid-generator": <UuidGeneratorTool />,
    "timestamp-converter": <TimestampConverterTool />,
    "url-encoder": <UrlEncoderTool />,
    "url-decoder": <UrlDecoderTool />,
    "color-converter": <ColorConverterTool />,
    "markdown-previewer": <MarkdownPreviewerTool />,
    "css-minifier": <CssMinifierTool />,
    "javascript-minifier": <JsMinifierTool />,
    "html-formatter": <HtmlFormatterTool />,
    "sql-formatter": <SqlFormatterTool />,
  };
  return map[slug] ?? (
    <div className="bg-slate-50 rounded-xl p-10 text-center text-slate-400">
      Tool UI coming soon
    </div>
  );
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const related = getRelatedTools(slug, 4);

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    description: tool.longDescription,
    url: `${siteConfig.url}/tools/${slug}`,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${siteConfig.url}/tools` },
      { "@type": "ListItem", position: 3, name: tool.name, item: `${siteConfig.url}/tools/${slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50 py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-sm text-slate-500">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/tools" className="hover:text-indigo-600 transition-colors">Tools</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-slate-800 font-medium">{tool.name}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Tool header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-4xl">{tool.icon}</span>
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900">{tool.name}</h1>
              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                {tool.category}
              </span>
            </div>
          </div>
          <p className="text-slate-500 max-w-2xl">{tool.longDescription}</p>
        </div>

        {/* Tool interface */}
        <div className="mb-12">
          <ToolComponent slug={slug} />
        </div>

        {/* Description */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-14">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              About {tool.name}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              {tool.longDescription} This tool runs entirely in your browser
              — no data is ever sent to a server, keeping your content
              private and secure. It works on any device without installation.
            </p>
            <p className="text-slate-600 leading-relaxed">
              PixolAI&apos;s {tool.name.toLowerCase()} is designed for speed
              and simplicity. Whether you&apos;re debugging an API response,
              preparing data for a request, or just need a quick conversion,
              this tool gets the job done in seconds.
            </p>
          </div>

          {/* Sidebar ad slot */}
          <aside>
            <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-xs text-slate-400 h-40 flex items-center justify-center">
              Advertisement
            </div>
          </aside>
        </div>

        {/* Related tools */}
        {related.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-6">Related Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((t) => (
                <Link
                  key={t.slug}
                  href={`/tools/${t.slug}`}
                  className="tool-card flex items-center gap-3 p-4 rounded-xl bg-white"
                >
                  <span className="text-2xl">{t.icon}</span>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.category}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
