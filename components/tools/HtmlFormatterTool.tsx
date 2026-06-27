"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

function formatHtml(html: string, indent = 2): string {
  let formatted = "";
  let indentLevel = 0;
  const pad = () => " ".repeat(indent * indentLevel);
  html.replace(/(>)(<)(\/?)([^<]*)/g, (_, g1, g2, g3, g4) => {
    formatted += g1 + "\n" + pad() + g2 + g3 + g4;
    indentLevel += g3 ? -1 : 1;
    return "";
  });
  return formatted.trim();
}

export function HtmlFormatterTool() {
  const [input, setInput] = useState('<div class="container"><h1>Hello World</h1><p>This is a <strong>formatted</strong> HTML example.</p><ul><li>Item 1</li><li>Item 2</li></ul></div>');
  const [indent, setIndent] = useState(2);
  const [copied, setCopied] = useState(false);
  const output = formatHtml(input, indent);
  const copy = async () => { await navigator.clipboard.writeText(output); setCopied(true); setTimeout(()=>setCopied(false),2000); };
  return (
    <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
      <div className="flex items-center gap-3 px-5 py-3 border-b border-slate-100 bg-slate-50">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 uppercase">Indent:</span>
          {[2,4].map(n => <button key={n} onClick={()=>setIndent(n)} className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors ${indent===n?"bg-indigo-600 text-white":"bg-white border border-slate-200 text-slate-600"}`}>{n}sp</button>)}
        </div>
        <button onClick={copy} className="ml-auto flex items-center gap-1.5 px-3 py-1.5 text-xs border border-slate-200 rounded-lg hover:border-indigo-300 transition-colors">
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-500"/> : <Copy className="h-3.5 w-3.5"/>}{copied?"Copied!":"Copy"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[280px]">
        <div className="flex flex-col border-b md:border-b-0 md:border-r border-slate-100">
          <div className="px-4 py-2 border-b border-slate-100 bg-slate-50 text-xs font-semibold text-slate-500 uppercase tracking-wider">Input HTML</div>
          <textarea value={input} onChange={(e)=>setInput(e.target.value)} className="flex-1 p-4 font-mono text-sm text-slate-700 resize-none focus:outline-none"/>
        </div>
        <div className="flex flex-col">
          <div className="px-4 py-2 border-b border-slate-100 bg-slate-50 text-xs font-semibold text-emerald-600 uppercase tracking-wider">Formatted Output</div>
          <pre className="flex-1 p-4 font-mono text-sm text-slate-700 overflow-auto whitespace-pre">{output}</pre>
        </div>
      </div>
    </div>
  );
}
