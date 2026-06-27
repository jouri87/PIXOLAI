"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Code2, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/tools", label: "Tools" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

const toolLinks = [
  { href: "/tools/json-formatter", label: "JSON Formatter" },
  { href: "/tools/base64-encoder", label: "Base64 Encoder" },
  { href: "/tools/regex-tester", label: "Regex Tester" },
  { href: "/tools/password-generator", label: "Password Generator" },
  { href: "/tools/uuid-generator", label: "UUID Generator" },
  { href: "/tools/timestamp-converter", label: "Timestamp Converter" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 shadow-sm group-hover:shadow-indigo-200 transition-shadow">
              <Code2 className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              Pixol<span className="text-indigo-600">AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Tools dropdown */}
            <div className="relative" onMouseLeave={() => setToolsOpen(false)}>
              <button
                onMouseEnter={() => setToolsOpen(true)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Tools
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", toolsOpen && "rotate-180")} />
              </button>
              {toolsOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="rounded-xl border border-slate-200 bg-white shadow-lg py-2">
                    {toolLinks.map((tool) => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        className="block px-4 py-2 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                        onClick={() => setToolsOpen(false)}
                      >
                        {tool.label}
                      </Link>
                    ))}
                    <div className="border-t border-slate-100 mt-2 pt-2">
                      <Link
                        href="/tools"
                        className="block px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 transition-colors"
                        onClick={() => setToolsOpen(false)}
                      >
                        View all tools →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navLinks
              .filter((l) => l.href !== "/tools")
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                    pathname.startsWith(link.href)
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/tools"
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-sm"
            >
              Explore Tools
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  pathname.startsWith(link.href)
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-slate-600 hover:bg-slate-50"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Link
                href="/tools"
                className="block text-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Explore Tools
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
