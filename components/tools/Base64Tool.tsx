"use client";
import { useState } from "react";
import { Copy, Check, ArrowLeftRight } from "lucide-react";

export function Base64Tool() {
  const [input, setInput] = useState("Hello, PixolAI! 🚀");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const process = () => {
    setError("");
    try {
      if (mode === "encode") {
        setOutput(btoa(unescape(encodeURIComponent(input))));
      } else {
        setOutput(decodeURIComponent(escape(atob(input))));
      }
    } catch {
      setError(mode === "decode" ? "Invalid Base64 string" : "Encoding failed");
      setOutput("");
    }
  };

  const swap = () => {
    setInput(output);
    setOutput("");
    setMode(mode === "encode" ? "decode" : "encode");
    setError("");
  };

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
      {/* Mode toggle */}
      <div className="flex items-center gap-3 px-5 py-3 border-b border-slate-100 bg-slate-50">
        <div className="flex rounded-xl bg-white border border-slate-200 p-1 gap-1">
          {(["encode", "decode"] as const).map((m) => (
            <button
              key={m}
              onClick={() => { setMode(m); setOutput(""); setError(""); }}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg capitalize transition-colors ${
                mode === m ? "bg-indigo-600 text-white" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
        {output && (
          <div className="ml-auto flex gap-2">
            <button onClick={swap} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-slate-200 rounded-lg hover:border-indigo-300 transition-colors">
              <ArrowLeftRight className="h-3.5 w-3.5" /> Swap
            </button>
            <button onClick={copy} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-slate-200 rounded-lg hover:border-indigo-300 transition-colors">
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[280px]">
        <div className="flex flex-col border-b md:border-b-0 md:border-r border-slate-100">
          <div className="px-4 py-2 border-b border-slate-100 bg-slate-50 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {mode === "encode" ? "Plain Text" : "Base64 String"}
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode === "encode" ? "Enter text to encode..." : "Enter Base64 to decode..."}
            className="flex-1 w-full p-4 font-mono text-sm text-slate-700 resize-none focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <div className="px-4 py-2 border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase tracking-wider">
            {error ? <span className="text-red-500">Error</span> : (
              <span className={output ? "text-emerald-600" : "text-slate-500"}>
                {mode === "encode" ? "Base64 Output" : "Decoded Text"}
              </span>
            )}
          </div>
          {error ? (
            <div className="p-4 text-sm text-red-600 bg-red-50 flex-1">{error}</div>
          ) : (
            <pre className="flex-1 p-4 font-mono text-sm text-slate-700 overflow-auto whitespace-pre-wrap">
              {output || <span className="text-slate-400">Output appears here...</span>}
            </pre>
          )}
        </div>
      </div>

      <div className="px-5 py-3 border-t border-slate-100 bg-slate-50 flex justify-center">
        <button
          onClick={process}
          className="px-8 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors shadow-sm capitalize"
        >
          {mode} →
        </button>
      </div>
    </div>
  );
}
