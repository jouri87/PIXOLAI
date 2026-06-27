"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Are all PixolAI tools completely free?",
    a: "Yes, every tool on PixolAI is 100% free with no usage limits. There is no premium tier, no pay-per-use, and no hidden costs. We're committed to keeping all tools free forever.",
  },
  {
    q: "Do I need to create an account?",
    a: "No account is ever required. Open any tool and start using it immediately. We believe the best developer tools get out of your way.",
  },
  {
    q: "Is my data private? Do you store what I paste?",
    a: "Your data stays entirely in your browser. All processing happens locally via JavaScript — nothing is transmitted to our servers. We don't log, store, or analyze your input data.",
  },
  {
    q: "How often are new tools added?",
    a: "We regularly ship new tools based on developer requests and common workflows. Follow us on Twitter @pixolai to stay updated, or subscribe to our newsletter.",
  },
  {
    q: "Can I use PixolAI on mobile?",
    a: "Absolutely. PixolAI is fully responsive and optimized for mobile, tablet, and desktop. The tools work great on any screen size.",
  },
  {
    q: "How can I suggest a new tool?",
    a: "We love hearing from the community. Use the Contact page to suggest a tool or feature. If it solves a real developer problem, we'll build it.",
  },
  {
    q: "Are the tutorials suitable for beginners?",
    a: "We cover a range from beginner-friendly introductions to advanced patterns. Each article is clearly tagged with its difficulty level and target audience.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="py-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">FAQ</p>
          <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-sm font-semibold text-slate-800 pr-4">{faq.q}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-slate-400 flex-shrink-0 transition-transform",
                    open === i && "rotate-180"
                  )}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4 bg-slate-50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
