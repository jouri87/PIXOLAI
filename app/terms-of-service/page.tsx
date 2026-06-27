import type { Metadata } from "next";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "PixolAI Terms of Service — the rules governing your use of our developer tools and resources.",
  alternates: { canonical: `${siteConfig.url}/terms-of-service` },
};

const sections = [
  { title: "Acceptance of Terms", content: "By accessing and using PixolAI, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or tools." },
  { title: "Use of Services", content: "PixolAI provides free developer tools and educational resources. You may use these tools for personal, educational, and commercial purposes. You may not use PixolAI to process illegal content, attempt to exploit or harm our infrastructure, or violate any applicable laws." },
  { title: "Intellectual Property", content: "The content, design, and code of PixolAI are owned by PixolAI and protected by copyright laws. You may not reproduce or redistribute our content without written permission. Tool outputs generated from your own data belong to you." },
  { title: "Disclaimer of Warranties", content: "PixolAI tools are provided 'as is' without warranty of any kind. We make no guarantees about the accuracy, reliability, or availability of our tools. Use them at your own discretion, especially for production-critical work." },
  { title: "Limitation of Liability", content: "PixolAI shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use or inability to use our services." },
  { title: "Privacy", content: "Your use of PixolAI is also governed by our Privacy Policy, which is incorporated into these Terms by reference." },
  { title: "Modifications", content: "We reserve the right to modify these terms at any time. Continued use of PixolAI after changes constitutes acceptance of the new terms." },
  { title: "Governing Law", content: "These terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved through binding arbitration." },
  { title: "Contact", content: "Questions about these terms? Contact us at legal@pixolai.dev." },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-slate-100 bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Terms of Service</h1>
          <p className="text-slate-500 text-sm">Last updated: June 2025</p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 space-y-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h2>
            <p className="text-slate-600 leading-relaxed">{s.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
