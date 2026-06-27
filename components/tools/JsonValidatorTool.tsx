"use client";
import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

export function JsonValidatorTool() {
  const [input, setInput] = useState('{"name":"PixolAI","version":"1.0"}');
  const [result, setResult] = useState<{ valid: boolean; message: string } | null>(null);

  const validate = () => {
    try {
      const parsed = JSON.parse(input);
      const keys = Object.keys(parsed).length;
      setResult({ valid: true, message: `Valid JSON with ${keys} top-level key${keys !== 1 ? "s" : ""}` });
    } catch (e: unknown) {
      setResult({ valid: false, message: e instanceof Error ? e.message : "Invalid JSON" });
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
      <div className="px-4 py-2 border-b border-slate-100 bg-slate-50 text-xs font-semibold text-slate-500 uppercase tracking-wider">
        Paste JSON to Validate
      </div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={10}
        className="w-full p-4 font-mono text-sm text-slate-700 focus:outline-none"
        placeholder="Paste JSON here..."
      />
      {result && (
        <div className={`mx-5 mb-4 flex items-start gap-3 p-4 rounded-xl ${result.valid ? "bg-emerald-50 border border-emerald-200" : "bg-red-50 border border-red-200"}`}>
          {result.valid ? <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" /> : <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />}
          <div>
            <div className={`text-sm font-semibold ${result.valid ? "text-emerald-700" : "text-red-700"}`}>
              {result.valid ? "Valid JSON" : "Invalid JSON"}
            </div>
            <div className={`text-sm mt-0.5 font-mono ${result.valid ? "text-emerald-600" : "text-red-600"}`}>{result.message}</div>
          </div>
        </div>
      )}
      <div className="px-5 pb-5 flex justify-center">
        <button onClick={validate} className="px-8 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors">
          Validate JSON
        </button>
      </div>
    </div>
  );
}
