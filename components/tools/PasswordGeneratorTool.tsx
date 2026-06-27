"use client";
import { useState, useCallback } from "react";
import { Copy, Check, RefreshCw, Shield } from "lucide-react";

const CHARS = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
};

function strength(pwd: string): { label: string; color: string; width: string } {
  let score = 0;
  if (pwd.length >= 12) score++;
  if (pwd.length >= 16) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[a-z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  if (score <= 2) return { label: "Weak", color: "bg-red-500", width: "w-1/4" };
  if (score <= 4) return { label: "Fair", color: "bg-amber-500", width: "w-2/4" };
  if (score <= 5) return { label: "Strong", color: "bg-emerald-500", width: "w-3/4" };
  return { label: "Very Strong", color: "bg-emerald-600", width: "w-full" };
}

export function PasswordGeneratorTool() {
  const [length, setLength] = useState(16);
  const [opts, setOpts] = useState({ upper: true, lower: true, numbers: true, symbols: false });
  const [count, setCount] = useState(1);
  const [passwords, setPasswords] = useState<string[]>([]);
  const [copied, setCopied] = useState<number | null>(null);

  const generate = useCallback(() => {
    const charset = Object.entries(opts)
      .filter(([, v]) => v)
      .map(([k]) => CHARS[k as keyof typeof CHARS])
      .join("");

    if (!charset) return;

    const arr = Array.from({ length: count }, () => {
      const bytes = new Uint8Array(length);
      crypto.getRandomValues(bytes);
      return Array.from(bytes).map((b) => charset[b % charset.length]).join("");
    });
    setPasswords(arr);
  }, [length, opts, count]);

  const copy = async (pwd: string, i: number) => {
    await navigator.clipboard.writeText(pwd);
    setCopied(i);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
      {/* Settings */}
      <div className="px-5 py-5 border-b border-slate-100 bg-slate-50 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Length */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Length</label>
              <span className="text-sm font-bold text-indigo-600">{length}</span>
            </div>
            <input
              type="range"
              min={6}
              max={64}
              value={length}
              onChange={(e) => setLength(+e.target.value)}
              className="w-full accent-indigo-600"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1"><span>6</span><span>64</span></div>
          </div>

          {/* Count */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Count</label>
              <span className="text-sm font-bold text-indigo-600">{count}</span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              value={count}
              onChange={(e) => setCount(+e.target.value)}
              className="w-full accent-indigo-600"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1"><span>1</span><span>10</span></div>
          </div>
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {(Object.keys(opts) as Array<keyof typeof opts>).map((key) => (
            <label key={key} className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-colors ${
              opts[key] ? "border-indigo-200 bg-indigo-50" : "border-slate-200 bg-white"
            }`}>
              <input
                type="checkbox"
                checked={opts[key]}
                onChange={(e) => setOpts({ ...opts, [key]: e.target.checked })}
                className="rounded border-slate-300 text-indigo-600"
              />
              <span className="text-xs font-medium text-slate-700 capitalize">{key}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Output */}
      <div className="p-5 space-y-3">
        {passwords.length === 0 ? (
          <div className="rounded-xl bg-slate-50 border border-dashed border-slate-200 p-8 text-center">
            <Shield className="h-8 w-8 text-slate-300 mx-auto mb-2" />
            <p className="text-sm text-slate-400">Click &quot;Generate&quot; to create secure passwords</p>
          </div>
        ) : (
          passwords.map((pwd, i) => {
            const s = strength(pwd);
            return (
              <div key={i} className="rounded-xl border border-slate-200 p-4 space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <code className="font-mono text-sm text-slate-800 break-all flex-1">{pwd}</code>
                  <button onClick={() => copy(pwd, i)} className="flex-shrink-0 p-2 rounded-lg hover:bg-slate-100 transition-colors">
                    {copied === i ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4 text-slate-400" />}
                  </button>
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all ${s.color} ${s.width}`} />
                  </div>
                  <span className={`text-xs font-medium ${s.color.replace("bg-", "text-")}`}>{s.label}</span>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="px-5 pb-5 flex justify-center">
        <button
          onClick={generate}
          className="flex items-center gap-2 px-8 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors shadow-sm"
        >
          <RefreshCw className="h-4 w-4" /> Generate Password{count > 1 ? "s" : ""}
        </button>
      </div>
    </div>
  );
}
