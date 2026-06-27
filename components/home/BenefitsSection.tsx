import { Zap, Shield, Globe, Code2, Infinity, Lock } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Blazing Fast",
    description:
      "All tools run entirely in your browser. No server round-trips, no waiting — instant results as you type.",
    color: "text-amber-500 bg-amber-50",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Your data never leaves your device. We don't log, store, or transmit anything you paste or type.",
    color: "text-emerald-500 bg-emerald-50",
  },
  {
    icon: Infinity,
    title: "Free Forever",
    description:
      "Every tool on PixolAI is free with no usage limits. No account, no credit card, no catch.",
    color: "text-indigo-500 bg-indigo-50",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description:
      "Fully responsive on mobile, tablet, and desktop. Use PixolAI tools wherever you work.",
    color: "text-violet-500 bg-violet-50",
  },
  {
    icon: Code2,
    title: "Developer-Focused",
    description:
      "Built by developers, for developers. Every tool solves a real problem you face daily.",
    color: "text-sky-500 bg-sky-50",
  },
  {
    icon: Lock,
    title: "No Login Required",
    description:
      "Just open a tool and use it. No sign-up friction, no email verification, no OAuth dance.",
    color: "text-rose-500 bg-rose-50",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">
            Why PixolAI
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            Tools that respect your time
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            We built PixolAI because we were tired of bloated tools with ads,
            sign-up walls, and privacy nightmares. Here's what we did differently.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="flex gap-5">
              <div className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${b.color}`}>
                <b.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
