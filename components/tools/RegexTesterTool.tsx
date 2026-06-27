"use client";
import { useState, useMemo } from "react";

export function RegexTesterTool() {
  const [pattern, setPattern] = useState("\\b\\w{4}\\b");
  const [flags, setFlags] = useState({ g: true, i: false, m: false });
  const [testString, setTestString] = useState("The quick brown fox jumps over the lazy dogs at noon");
  const [error, setError] = useState("");

  const flagStr = Object.entries(flags).filter(([, v]) => v).map(([k]) => k).join("");

  const result = useMemo(() => {
    if (!pattern) return { matches: [], count: 0 };
    try {
      const re = new RegExp(pattern, flagStr);
      setError("");
      const matches = [...testString.matchAll(new RegExp(pattern, "g" + flagStr.replace("g", "")))];
      return { matches, count: matches.length };
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Invalid regex");
      return { matches: [], count: 0 };
    }
  }, [pattern, flagStr, testString]);

  const highlighted = useMemo(() => {
    if (!pattern || error || !result.count) return testString;
    try {
      const re = new RegExp(pattern, "g" + flagStr.replace("g", ""));
      return testString.replace(re, (m) => `__MATCH__${m}__END__`);
    } catch { return testString; }
  }, [pattern, flagStr, testString, error, result.count]);

  const renderHighlighted = (str: string) => {
    const parts = str.split(/__MATCH__|__END__/);
    const elements: React.ReactNode[] = [];
    let inMatch = false;
    parts.forEach((part, i) => {
      if (i > 0 && str.includes("__MATCH__" + part)) inMatch = !inMatch;
      if (part) {
        elements.push(
          inMatch
            ? <mark key={i} className="bg-yellow-200 text-yellow-900 rounded">{part}</mark>
            : <span key={i}>{part}</span>
        );
      }
      inMatch = str.split(/__MATCH__(.*?)__END__/g)[i * 2 + 1] !== undefined ? !inMatch : inMatch;
    });
    return elements;
  };

  return (
    <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
      {/* Pattern input */}
      <div className="px-5 py-4 border-b border-slate-100 bg-slate-50 space-y-3">
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Regex Pattern</label>
          <div className="flex items-center">
            <span className="px-3 py-2.5 bg-white border border-r-0 border-slate-200 rounded-l-lg text-slate-400 text-sm font-mono">/</span>
            <input
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              className="flex-1 px-3 py-2.5 border border-slate-200 font-mono text-sm text-slate-800 focus:outline-none focus:border-indigo-400"
              placeholder="Enter regex pattern..."
            />
            <span className="px-3 py-2.5 bg-white border border-l-0 border-slate-200 rounded-r-lg text-slate-500 text-sm font-mono">/{flagStr}</span>
          </div>
          {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>

        {/* Flags */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Flags:</span>
          {(Object.keys(flags) as Array<keyof typeof flags>).map((f) => (
            <label key={f} className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={flags[f]}
                onChange={(e) => setFlags({ ...flags, [f]: e.target.checked })}
                className="rounded border-slate-300 text-indigo-600"
              />
              <code className="text-xs font-mono text-slate-600">{f}</code>
              <span className="text-xs text-slate-400">
                {f === "g" ? "global" : f === "i" ? "case-insensitive" : "multiline"}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Test string */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[220px]">
        <div className="flex flex-col border-b md:border-b-0 md:border-r border-slate-100">
          <div className="px-4 py-2 border-b border-slate-100 bg-slate-50 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Test String
          </div>
          <textarea
            value={testString}
            onChange={(e) => setTestString(e.target.value)}
            className="flex-1 p-4 text-sm text-slate-700 resize-none focus:outline-none font-mono"
            placeholder="Enter text to test against..."
          />
        </div>

        <div className="flex flex-col">
          <div className="px-4 py-2 border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase tracking-wider flex justify-between">
            <span className={result.count ? "text-emerald-600" : "text-slate-500"}>
              Matches Highlighted
            </span>
            <span className={`font-bold ${result.count ? "text-emerald-600" : "text-slate-400"}`}>
              {result.count} match{result.count !== 1 ? "es" : ""}
            </span>
          </div>
          <div className="flex-1 p-4 text-sm text-slate-700 font-mono whitespace-pre-wrap leading-relaxed">
            {pattern && !error
              ? (() => {
                  try {
                    const re = new RegExp(pattern, "g" + flagStr.replace("g", ""));
                    const parts: React.ReactNode[] = [];
                    let last = 0;
                    let m: RegExpExecArray | null;
                    re.lastIndex = 0;
                    while ((m = re.exec(testString)) !== null) {
                      if (m.index > last) parts.push(<span key={last}>{testString.slice(last, m.index)}</span>);
                      parts.push(<mark key={m.index} className="bg-yellow-200 text-yellow-900 rounded px-0.5">{m[0]}</mark>);
                      last = m.index + m[0].length;
                      if (!flags.g) break;
                    }
                    if (last < testString.length) parts.push(<span key={last}>{testString.slice(last)}</span>);
                    return parts;
                  } catch { return testString; }
                })()
              : testString
            }
          </div>
        </div>
      </div>

      {/* Match list */}
      {result.count > 0 && (
        <div className="border-t border-slate-100 px-5 py-3 bg-slate-50">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-3">All Matches:</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {result.matches.map((m, i) => (
              <code key={i} className="px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded text-xs font-mono border border-yellow-200">
                {m[0]}
              </code>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
