import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40 animate-pulse-glow" />
      <div className="absolute top-20 right-1/4 w-64 h-64 bg-violet-100 rounded-full blur-3xl opacity-30 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 text-sm font-medium mb-8">
            <Sparkles className="h-3.5 w-3.5" />
            16+ Free Developer Tools — No account required
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            The Developer Toolbox{" "}
            <span className="gradient-text">Built for Speed</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Free, fast, and privacy-first tools for developers. Format JSON,
            encode Base64, test regex, generate UUIDs, and much more — all
            without leaving your browser.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/tools"
              className="flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5"
            >
              Explore All Tools
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/blog"
              className="flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 transition-all hover:-translate-y-0.5"
            >
              Read Tutorials
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber-500" />
              Instant results
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-500" />
              Privacy-first — nothing leaves your browser
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-indigo-500" />
              100% free forever
            </div>
          </div>
        </div>

        {/* Hero illustration — browser mockup */}
        <div className="mt-16 relative mx-auto max-w-4xl">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200 overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="flex-1 mx-4">
                <div className="rounded-md bg-white border border-slate-200 px-3 py-1 text-xs text-slate-400 font-mono">
                  pixolai.dev/tools/json-formatter
                </div>
              </div>
            </div>

            {/* Simulated tool UI */}
            <div className="grid grid-cols-2 gap-0 min-h-[280px]">
              <div className="border-r border-slate-100 p-4">
                <div className="text-xs font-medium text-slate-400 mb-2">INPUT</div>
                <pre className="font-mono text-xs text-slate-600 leading-relaxed">{`{
  "name": "PixolAI",
  "version": "1.0.0",
  "tools": [
    "json-formatter",
    "base64-encoder",
    "regex-tester"
  ],
  "free": true,
  "users": 50000
}`}</pre>
              </div>
              <div className="p-4 bg-slate-50">
                <div className="text-xs font-medium text-emerald-600 mb-2 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                  VALID JSON
                </div>
                <pre className="font-mono text-xs text-slate-700 leading-relaxed">{`{
  "name": "PixolAI",
  "version": "1.0.0",
  "tools": [
    "json-formatter",
    "base64-encoder",
    "regex-tester"
  ],
  "free": true,
  "users": 50000
}`}</pre>
              </div>
            </div>

            {/* Tool bar */}
            <div className="border-t border-slate-100 px-4 py-3 bg-slate-50 flex items-center gap-3">
              <button className="px-3 py-1.5 text-xs font-medium text-white bg-indigo-600 rounded-lg">Format</button>
              <button className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-lg">Minify</button>
              <button className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-lg">Copy</button>
              <button className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-lg">Clear</button>
            </div>
          </div>

          {/* Floating tool badges */}
          <div className="absolute -left-6 top-1/4 hidden lg:flex items-center gap-2 bg-white rounded-xl shadow-lg border border-slate-100 px-3 py-2 text-xs font-medium text-slate-700">
            🔐 Password Generator
          </div>
          <div className="absolute -right-6 top-1/3 hidden lg:flex items-center gap-2 bg-white rounded-xl shadow-lg border border-slate-100 px-3 py-2 text-xs font-medium text-slate-700">
            🔍 Regex Tester
          </div>
          <div className="absolute -right-4 bottom-1/4 hidden lg:flex items-center gap-2 bg-white rounded-xl shadow-lg border border-slate-100 px-3 py-2 text-xs font-medium text-slate-700">
            🕐 Timestamp Converter
          </div>
        </div>
      </div>
    </section>
  );
}
