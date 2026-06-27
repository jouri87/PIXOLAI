"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function CssMinifierTool() {
  const [input, setInput] = useState(`.container {\n  display: flex;\n  /* center items */\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  margin: 0 auto;\n  max-width: 1200px;\n}`);
  const [copied, setCopied] = useState(false);
  const output = input.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\s+/g," ").replace(/\s*{\s*/g,"{").replace(/\s*}\s*/g,"}").replace(/\s*:\s*/g,":").replace(/\s*;\s*/g,";").replace(/\s*,\s*/g,",").trim();
  const savings = input.length ? Math.round((1-output.length/input.length)*100) : 0;
  const copy = async () => { await navigator.clipboard.writeText(output); setCopied(true); setTimeout(()=>setCopied(false),2000); };
  return (
    <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[280px]">
        <div className="flex flex-col border-b md:border-b-0 md:border-r border-slate-100">
          <div className="px-4 py-2 border-b border-slate-100 bg-slate-50 text-xs font-semibold text-slate-500 uppercase tracking-wider">Input CSS</div>
          <textarea value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 p-4 font-mono text-sm text-slate-700 resize-none focus:outline-none" />
        </div>
        <div className="flex flex-col">
          <div className="px-4 py-2 border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase tracking-wider flex justify-between items-center">
            <span className="text-emerald-600">Minified Output</span>
            <div className="flex items-center gap-3">
              <span className="text-emerald-600 font-bold">{savings}% smaller</span>
              <button onClick={copy} className="flex items-center gap-1 text-slate-400 hover:text-indigo-600 transition-colors">
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>
          <div className="flex-1 p-4 font-mono text-sm text-slate-700 break-all">{output}</div>
        </div>
      </div>
    </div>
  );
}
