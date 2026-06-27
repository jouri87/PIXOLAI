import type { Metadata } from "next";
import { siteConfig } from "@/lib/utils";
import { Code2, Heart, Shield, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About PixolAI",
  description: "Learn about PixolAI — our mission to provide free, fast, and privacy-first developer tools to the global developer community.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-slate-100 bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">About PixolAI</h1>
          <p className="text-lg text-slate-500">Building free tools for the developer community.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            PixolAI exists to give developers fast, reliable, and privacy-respecting tools — completely free, forever. No paywalls, no mandatory accounts, no data harvesting.
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            We built PixolAI because we were frustrated with the existing landscape: tools that require sign-ups, inject ads into the output, sell your data, or simply work too slowly. Every tool on PixolAI runs entirely in your browser — nothing you enter is ever transmitted to a server.
          </p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: Code2, title: "Built by Developers", desc: "Every tool solves a real problem we encounter in daily development work.", color: "text-indigo-500 bg-indigo-50" },
            { icon: Shield, title: "Privacy First", desc: "Your code and data stay in your browser. Always. No exceptions.", color: "text-emerald-500 bg-emerald-50" },
            { icon: Zap, title: "Speed Obsessed", desc: "Instant results matter. Our tools are optimized to give you feedback in milliseconds.", color: "text-amber-500 bg-amber-50" },
            { icon: Heart, title: "Community Driven", desc: "We build tools that the community asks for. Got a request? Contact us.", color: "text-rose-500 bg-rose-50" },
          ].map((v) => (
            <div key={v.title} className="flex gap-4 p-5 rounded-xl border border-slate-200">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${v.color}`}>
                <v.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">{v.title}</h3>
                <p className="text-sm text-slate-500">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Team</h2>
          <p className="text-slate-600 leading-relaxed">
            PixolAI is run by a small team of full-stack developers and technical writers who are passionate about developer experience and open knowledge sharing. We believe that the best tools are the ones that just work.
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            We welcome contributions, bug reports, and tool suggestions. The best way to reach us is through our <a href="/contact" className="text-indigo-600 hover:underline">Contact page</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Stay Free</h2>
          <p className="text-slate-600 leading-relaxed">
            PixolAI is supported by tasteful, non-intrusive advertising and affiliate partnerships. We are selective about our ad partners and will never show ads that harm the user experience. We do not sell user data — ever. Ad revenue allows us to keep the servers running and the team working on new tools and tutorials.
          </p>
        </section>
      </div>
    </div>
  );
}
