import Link from "next/link";
import { Code2, X, ExternalLink, Mail } from "lucide-react";

const footerLinks = {
  Tools: [
    { label: "JSON Formatter", href: "/tools/json-formatter" },
    { label: "Base64 Encoder", href: "/tools/base64-encoder" },
    { label: "Regex Tester", href: "/tools/regex-tester" },
    { label: "Password Generator", href: "/tools/password-generator" },
    { label: "UUID Generator", href: "/tools/uuid-generator" },
    { label: "All Tools", href: "/tools" },
  ],
  Blog: [
    { label: "JavaScript", href: "/blog?category=JavaScript" },
    { label: "TypeScript", href: "/blog?category=TypeScript" },
    { label: "React", href: "/blog?category=React" },
    { label: "Next.js", href: "/blog?category=Next.js" },
    { label: "Python", href: "/blog?category=Python" },
    { label: "All Tutorials", href: "/blog" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600">
                <Code2 className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-slate-900">
                Pixol<span className="text-indigo-600">AI</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Free developer tools, coding resources, and programming tutorials
              for developers worldwide. Build faster, code smarter.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://twitter.com/pixolai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                aria-label="Twitter"
              >
                <X className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/pixolai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                aria-label="GitHub"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@pixolai.dev"
                className="p-2 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-indigo-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} PixolAI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
