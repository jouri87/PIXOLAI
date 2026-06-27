"use client";
import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 to-violet-700">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 mb-6">
          <Mail className="h-6 w-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">
          Get developer tips in your inbox
        </h2>
        <p className="text-indigo-200 mb-8 leading-relaxed">
          Weekly tutorials, tool updates, and programming insights. No spam, no
          marketing fluff — just useful content for developers.
        </p>

        {status === "success" ? (
          <div className="flex items-center justify-center gap-2 text-white font-semibold text-lg">
            <span>🎉</span> You're subscribed — check your inbox!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-white/40 text-sm"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-50 transition-colors text-sm disabled:opacity-70"
            >
              {status === "loading" ? "Subscribing..." : (
                <>Subscribe <ArrowRight className="h-4 w-4" /></>
              )}
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-indigo-300">
          Unsubscribe any time. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
