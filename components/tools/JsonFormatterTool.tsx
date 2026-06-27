"use client";
import { useState } from "react";
import { Copy, Check, Trash2, Download } from "lucide-react";

export function JsonFormatterTool() {
  const [input, setInput] = useState('{"name":"PixolAI","tools":["json","base64","regex"],"free":true}');
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [indent, setIndent] = useState(2);
  const [copied, setCopied] = useState(false);

  const format = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, indent));
      setError("");
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Invalid JSON");
      setOutput("");
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const download = () => {
    const blob = new Blob([output], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "formatted.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3 px-5 py-3 border-b border-slate-100 bg-slate-50">
        <div className="flex items-center gap-2">
          <label className="text-xs font-medium text-slate-600">Indent:</label>
          {[2, 4].map((n) => (
            <button
              key={n}
              onClick={() => setIndent(n)}
              className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors ${
                indent === n
                  ? "bg-indigo-600 text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-indigo-300"
              }`}
            >
              {n} spaces
            </button>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-2">
          {output && (
            <>
              <button
                onClick={copy}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:border-indigo-300 transition-colors"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied!" : "Copy"}
              </button>
              <button
                onClick={download}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:border-indigo-300 transition-colors"
              >
                <Download className="h-3.5 w-3.5" /> Download
              </button>
            </>
          )}
          <button
            onClick={() => { setInput(""); setOutput(""); setError(""); }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:border-red-300 transition-colors"
          >
            <Trash2 className="h-3.5 w-3.5" /> Clear
          </button>
        </div>
      </div>

      {/* Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[340px]">
        <div className="flex flex-col border-b md:border-b-0 md:border-r border-slate-100">
          <div className="px-4 py-2 border-b border-slate-100 bg-slate-50 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Input JSON
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Paste your JSON here...'
            className="flex-1 w-full p-4 font-mono text-sm text-slate-700 resize-none focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <div className="px-4 py-2 border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
            {error ? (
              <span className="text-red-500">Error</span>
            ) : output ? (
              <span className="text-emerald-600 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                Formatted Output
              </span>
            ) : (
              <span className="text-slate-500">Output</span>
            )}
          </div>
          {error ? (
            <div className="p-4 text-sm text-red-600 bg-red-50 font-mono flex-1">
              {error}
            </div>
          ) : (
            <pre className="flex-1 p-4 font-mono text-sm text-slate-700 overflow-auto whitespace-pre-wrap">
              {output || <span className="text-slate-400">Formatted JSON will appear here...</span>}
            </pre>
          )}
        </div>
      </div>

      {/* Action bar */}
      <div className="px-5 py-3 border-t border-slate-100 bg-slate-50 flex justify-center">
        <button
          onClick={format}
          className="px-8 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors shadow-sm"
        >
          Format JSON
        </button>
      </div>
    </div>
  );
}
