"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function UrlDecoderTool() {
  const [input, setInput] = useState("https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dhello%20world%26lang%3Den");
  const [copied, setCopied] = useState(false);

  let output = "";
  let hasError = false;
  try {
    output = decodeURIComponent(input);
  } catch {
    hasError = true;
  }

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[240px]">
        <div className="flex flex-col border-b md:border-b-0 md:border-r border-slate-100">
          <div className="px-4 py-2 border-b border-slate-100 bg-slate-50 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Encoded URL
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-4 font-mono text-sm text-slate-700 resize-none focus:outline-none"
            placeholder="Enter encoded URL..."
          />
        </div>
        <div className="flex flex-col">
          <div className="px-4 py-2 border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase tracking-wider flex justify-between">
            {hasError ? (
              <span className="text-red-500">Invalid encoding</span>
            ) : (
              <span className="text-emerald-600">Decoded URL</span>
            )}
            {!hasError && output && (
              <button onClick={copy} className="flex items-center gap-1 text-slate-400 hover:text-indigo-600 transition-colors">
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            )}
          </div>
          <div className="flex-1 p-4 font-mono text-sm text-slate-700 break-all">
            {hasError ? <span className="text-red-500">Could not decode this string</span> : output}
          </div>
        </div>
      </div>
    </div>
  );
}
