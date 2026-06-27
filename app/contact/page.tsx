"use client";
import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle"|"loading"|"success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise(r => setTimeout(r, 1200));
    setStatus("success");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-slate-100 bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-lg text-slate-500">Have a question, found a bug, or want to suggest a tool? We'd love to hear from you.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-6">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-800 text-sm">Email</div>
                <a href="mailto:hello@pixolai.dev" className="text-sm text-indigo-600 hover:underline">hello@pixolai.dev</a>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-800 text-sm">Response Time</div>
                <div className="text-sm text-slate-500">Within 1–2 business days</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            {status === "success" ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center">
                <div className="text-3xl mb-3">✅</div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h2>
                <p className="text-slate-500 text-sm">We'll get back to you within 1–2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: "name", label: "Your Name", type: "text", placeholder: "Jane Doe" },
                  { name: "email", label: "Email Address", type: "email", placeholder: "jane@example.com" },
                  { name: "subject", label: "Subject", type: "text", placeholder: "Bug report, tool suggestion, etc." },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">{f.label}</label>
                    <input
                      type={f.type}
                      required
                      placeholder={f.placeholder}
                      value={form[f.name as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-indigo-400"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us more..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-indigo-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors disabled:opacity-70"
                >
                  <Send className="h-4 w-4" />
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
