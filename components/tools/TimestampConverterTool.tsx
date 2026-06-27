"use client";
import { useState } from "react";
import { Copy, Check, Clock } from "lucide-react";

export function TimestampConverterTool() {
  const [ts, setTs] = useState(Math.floor(Date.now() / 1000).toString());
  const [dateStr, setDateStr] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const tsNum = parseInt(ts);
  const date = !isNaN(tsNum) ? new Date(tsNum * 1000) : null;

  const copy = async (val: string, key: string) => {
    await navigator.clipboard.writeText(val);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const fromDate = () => {
    if (!dateStr) return;
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) setTs(Math.floor(d.getTime() / 1000).toString());
  };

  const now = () => setTs(Math.floor(Date.now() / 1000).toString());

  const rows = date ? [
    { label: "UTC", value: date.toUTCString() },
    { label: "ISO 8601", value: date.toISOString() },
    { label: "Local Time", value: date.toLocaleString() },
    { label: "Date only", value: date.toLocaleDateString() },
    { label: "Time only", value: date.toLocaleTimeString() },
    { label: "Milliseconds", value: (tsNum * 1000).toString() },
    { label: "Relative", value: (() => {
      const diff = (Date.now() / 1000) - tsNum;
      if (Math.abs(diff) < 60) return `${Math.round(diff)}s ago`;
      if (Math.abs(diff) < 3600) return `${Math.round(diff/60)}m ago`;
      if (Math.abs(diff) < 86400) return `${Math.round(diff/3600)}h ago`;
      return `${Math.round(diff/86400)}d ago`;
    })() },
  ] : [];

  return (
    <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
      <div className="px-5 py-4 border-b border-slate-100 bg-slate-50 space-y-4">
        {/* Timestamp input */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Unix Timestamp (seconds)</label>
          <div className="flex gap-2">
            <input
              value={ts}
              onChange={(e) => setTs(e.target.value)}
              placeholder="e.g. 1700000000"
              className="flex-1 px-4 py-2.5 border border-slate-200 rounded-xl font-mono text-sm text-slate-800 focus:outline-none focus:border-indigo-400"
            />
            <button
              onClick={now}
              className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium bg-white border border-slate-200 text-slate-600 rounded-xl hover:border-indigo-300 transition-colors"
            >
              <Clock className="h-4 w-4" /> Now
            </button>
          </div>
        </div>

        {/* Date to timestamp */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Or Convert Date → Timestamp</label>
          <div className="flex gap-2">
            <input
              type="datetime-local"
              value={dateStr}
              onChange={(e) => setDateStr(e.target.value)}
              className="flex-1 px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-indigo-400"
            />
            <button
              onClick={fromDate}
              className="px-4 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors"
            >
              Convert
            </button>
          </div>
        </div>
      </div>

      <div className="p-5">
        {!date ? (
          <p className="text-sm text-red-500 text-center py-6">Invalid timestamp</p>
        ) : (
          <div className="divide-y divide-slate-100 rounded-xl border border-slate-200 overflow-hidden">
            {rows.map((row) => (
              <div key={row.label} className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 group transition-colors">
                <span className="text-xs font-semibold text-slate-500 w-28 flex-shrink-0">{row.label}</span>
                <span className="font-mono text-sm text-slate-800 flex-1 truncate">{row.value}</span>
                <button
                  onClick={() => copy(row.value, row.label)}
                  className="opacity-0 group-hover:opacity-100 ml-2 p-1.5 rounded hover:bg-white transition-all"
                >
                  {copied === row.label ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5 text-slate-400" />}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
