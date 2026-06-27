"use client";
import { useState } from "react";
import { Copy, Check, RefreshCw, Trash2 } from "lucide-react";

function generateUUID(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function UuidGeneratorTool() {
  const [count, setCount] = useState(5);
  const [uuids, setUuids] = useState<string[]>([]);
  const [copied, setCopied] = useState<number | "all" | null>(null);

  const generate = () => setUuids(Array.from({ length: count }, generateUUID));

  const copy = async (uuid: string, i: number) => {
    await navigator.clipboard.writeText(uuid);
    setCopied(i);
    setTimeout(() => setCopied(null), 2000);
  };

  const copyAll = async () => {
    await navigator.clipboard.writeText(uuids.join("\n"));
    setCopied("all");
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
      <div className="flex flex-wrap items-center gap-4 px-5 py-4 border-b border-slate-100 bg-slate-50">
        <div className="flex items-center gap-3">
          <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Count:</label>
          {[1, 5, 10, 20].map((n) => (
            <button
              key={n}
              onClick={() => setCount(n)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                count === n ? "bg-indigo-600 text-white" : "bg-white border border-slate-200 text-slate-600 hover:border-indigo-300"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
        {uuids.length > 1 && (
          <div className="ml-auto flex gap-2">
            <button onClick={copyAll} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-slate-200 rounded-lg hover:border-indigo-300 transition-colors">
              {copied === "all" ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              {copied === "all" ? "Copied!" : "Copy All"}
            </button>
            <button onClick={() => setUuids([])} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-slate-200 rounded-lg hover:border-red-300 transition-colors">
              <Trash2 className="h-3.5 w-3.5" /> Clear
            </button>
          </div>
        )}
      </div>

      <div className="p-5 min-h-[240px]">
        {uuids.length === 0 ? (
          <div className="flex items-center justify-center h-40 text-sm text-slate-400 bg-slate-50 rounded-xl border border-dashed border-slate-200">
            Click &quot;Generate&quot; to create UUIDs
          </div>
        ) : (
          <div className="space-y-2">
            {uuids.map((uuid, i) => (
              <div key={i} className="flex items-center justify-between gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors group">
                <code className="font-mono text-sm text-slate-700 flex-1">{uuid}</code>
                <button onClick={() => copy(uuid, i)} className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded hover:bg-white">
                  {copied === i ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4 text-slate-400" />}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="px-5 pb-5 flex justify-center">
        <button
          onClick={generate}
          className="flex items-center gap-2 px-8 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors shadow-sm"
        >
          <RefreshCw className="h-4 w-4" /> Generate {count} UUID{count !== 1 ? "s" : ""}
        </button>
      </div>
    </div>
  );
}
