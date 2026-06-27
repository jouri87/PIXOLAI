"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function JsonMinifierTool() {
  const [input, setInput] = useState('{\n  "name": "PixolAI",\n  "version": "1.0"\n}');
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const minify = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Invalid JSON");
      setOutput("");
    }
  };

  const copy = async () => { await navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  const savings = output && input ? Math.round((1 - output.length / input.length) * 100) : 0;

  return (
    <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[300px]">
        <div className="flex flex-col border-b md:border-b-0 md:border-r border-slate-100">
          <div className="px-4 py-2 border-b border-slate-100 bg-slate-50 text-xs font-semibold text-slate-500 uppercase tracking-wider">Input (Formatted)</div>
          <textarea value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 p-4 font-mono text-sm text-slate-700 resize-none focus:outline-none" />
        </div>
        <div className="flex flex-col">
          <div className="px-4 py-2 border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase tracking-wider flex items-center justify-between">
            <span className={output ? "text-emerald-600" : "text-slate-500"}>Minified Output</span>
            {output && <span className="text-emerald-600 font-bold">{savings}% smaller</span>}
          </div>
          {error ? <div className="p-4 text-sm text-red-600 bg-red-50 flex-1">{error}</div> :
            <div className="flex-1 p-4 font-mono text-sm text-slate-700 break-all">{output || <span className="text-slate-400">Minified JSON will appear here...</span>}</div>
          }
          {output && <div className="p-3 border-t border-slate-100 flex justify-end">
            <button onClick={copy} className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-slate-200 rounded-lg hover:border-indigo-300 transition-colors">
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />} {copied ? "Copied!" : "Copy"}
            </button>
          </div>}
        </div>
      </div>
      <div className="px-5 py-3 border-t border-slate-100 bg-slate-50 flex justify-center">
        <button onClick={minify} className="px-8 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors">Minify JSON</button>
      </div>
    </div>
  );
}
