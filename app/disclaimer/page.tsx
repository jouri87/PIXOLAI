import type { Metadata } from "next";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "PixolAI Disclaimer — important information about the use of our developer tools and content.",
  alternates: { canonical: `${siteConfig.url}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-slate-100 bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Disclaimer</h1>
          <p className="text-slate-500 text-sm">Last updated: June 2025</p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 space-y-8 text-slate-600 leading-relaxed">
        <p>The information and tools provided on PixolAI are for general informational and educational purposes only. While we strive for accuracy, we make no representations or warranties about the completeness, reliability, or accuracy of any tool output or article content.</p>
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">Tool Output</h2>
          <p>Results from our developer tools (JSON formatting, encoding, password generation, etc.) are generated locally in your browser. While we test our tools thoroughly, we recommend validating critical outputs independently, especially in production environments.</p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">Security Tools</h2>
          <p>Our password generator uses the browser's built-in cryptographic random number generator (crypto.getRandomValues). While this is considered cryptographically secure for most use cases, critical security implementations should be evaluated by a qualified security professional.</p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">External Links</h2>
          <p>PixolAI may contain links to external websites. These links are provided for convenience and informational purposes only. We have no control over the content of those sites and accept no responsibility for them.</p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">Affiliate Disclosure</h2>
          <p>Some content on PixolAI may include affiliate links. If you click on an affiliate link and make a purchase, we may earn a small commission at no additional cost to you. This helps us keep PixolAI free.</p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">Contact</h2>
          <p>If you have questions about this disclaimer, please contact us at <a href="mailto:hello@pixolai.dev" className="text-indigo-600 hover:underline">hello@pixolai.dev</a>.</p>
        </div>
      </div>
    </div>
  );
}
