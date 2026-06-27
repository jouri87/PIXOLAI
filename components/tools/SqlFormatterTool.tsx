"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

const KEYWORDS = ["SELECT","FROM","WHERE","JOIN","LEFT","RIGHT","INNER","OUTER","ON","AND","OR","NOT","IN","IS","NULL","ORDER","BY","GROUP","HAVING","LIMIT","OFFSET","INSERT","INTO","VALUES","UPDATE","SET","DELETE","CREATE","TABLE","DROP","ALTER","INDEX","AS","DISTINCT","COUNT","SUM","AVG","MAX","MIN","BETWEEN","LIKE","ASC","DESC","PRIMARY","KEY","FOREIGN","REFERENCES","UNIQUE"];

function formatSql(sql: string): string {
  let formatted = sql.trim().replace(/\s+/g," ");
  KEYWORDS.forEach(kw => { formatted = formatted.replace(new RegExp(`\\b${kw}\\b`,"gi"), kw); });
  const breaks = ["SELECT","FROM","WHERE","JOIN","LEFT JOIN","RIGHT JOIN","INNER JOIN","ORDER BY","GROUP BY","HAVING","LIMIT","UNION","INSERT INTO","VALUES","UPDATE","SET"];
  breaks.forEach(kw => { formatted = formatted.replace(new RegExp(`\\b${kw}\\b`,"g"), "\n" + kw); });
  return formatted.trim().split("\n").map((l,i)=>i===0?l:"  "+l).join("\n");
}

export function SqlFormatterTool() {
  const [input, setInput] = useState("SELECT u.id, u.name, COUNT(o.id) as total_orders FROM users u LEFT JOIN orders o ON u.id = o.user_id WHERE u.active = 1 GROUP BY u.id ORDER BY total_orders DESC LIMIT 10");
  const [copied, setCopied] = useState(false);
  const output = formatSql(input);
  const copy = async () => { await navigator.clipboard.writeText(output); setCopied(true); setTimeout(()=>setCopied(false),2000); };
  return (
    <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[280px]">
        <div className="flex flex-col border-b md:border-b-0 md:border-r border-slate-100">
          <div className="px-4 py-2 border-b border-slate-100 bg-slate-50 text-xs font-semibold text-slate-500 uppercase tracking-wider">Input SQL</div>
          <textarea value={input} onChange={(e)=>setInput(e.target.value)} className="flex-1 p-4 font-mono text-sm text-slate-700 resize-none focus:outline-none"/>
        </div>
        <div className="flex flex-col">
          <div className="px-4 py-2 border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase tracking-wider flex justify-between">
            <span className="text-emerald-600">Formatted SQL</span>
            <button onClick={copy} className="flex items-center gap-1 text-slate-400 hover:text-indigo-600 transition-colors">
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-500"/> : <Copy className="h-3.5 w-3.5"/>}
            </button>
          </div>
          <pre className="flex-1 p-4 font-mono text-sm text-slate-700 overflow-auto whitespace-pre">{output}</pre>
        </div>
      </div>
    </div>
  );
}
