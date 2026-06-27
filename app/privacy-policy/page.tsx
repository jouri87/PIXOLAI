import type { Metadata } from "next";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "PixolAI Privacy Policy — how we handle your data and protect your privacy.",
  alternates: { canonical: `${siteConfig.url}/privacy-policy` },
};

const sections = [
  { title: "Information We Collect", content: "PixolAI does not collect personally identifiable information unless you voluntarily provide it (e.g., via our contact form or newsletter subscription). Our developer tools run entirely in your browser — no input data is transmitted to our servers." },
  { title: "Tool Data", content: "All tool processing (JSON formatting, Base64 encoding, regex testing, etc.) happens locally in your browser using JavaScript. We do not receive, store, or log any data you paste or type into our tools." },
  { title: "Analytics", content: "We use privacy-respecting analytics to understand general traffic patterns (pages visited, device type, geographic region). This data is aggregated and anonymized and cannot be used to identify individual users." },
  { title: "Cookies", content: "We use essential cookies to maintain site functionality. We may also use cookies to remember your preferences (e.g., theme settings). We do not use tracking cookies or third-party advertising cookies without your consent." },
  { title: "Advertising", content: "PixolAI may display ads served by Google AdSense or similar networks. These networks may use cookies to serve relevant ads. You can opt out of personalized advertising via your Google Ad Settings." },
  { title: "Newsletter", content: "If you subscribe to our newsletter, we store your email address to send you updates. You can unsubscribe at any time using the link in any email we send." },
  { title: "Third-Party Services", content: "We may link to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies." },
  { title: "Data Security", content: "We implement appropriate security measures to protect any personal information you provide. However, no method of transmission over the Internet is 100% secure." },
  { title: "Children's Privacy", content: "PixolAI is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13." },
  { title: "Changes to This Policy", content: "We may update this privacy policy periodically. We will notify users of significant changes by updating the date at the top of this page." },
  { title: "Contact Us", content: "If you have questions about this privacy policy, please contact us at privacy@pixolai.dev or use the contact form on our website." },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-slate-100 bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Privacy Policy</h1>
          <p className="text-slate-500 text-sm">Last updated: June 2025</p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 space-y-8">
        <p className="text-slate-600 leading-relaxed">
          At PixolAI, we take your privacy seriously. This policy explains how we collect, use, and protect information when you use our website and tools.
        </p>
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
