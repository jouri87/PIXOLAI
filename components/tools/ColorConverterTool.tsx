"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

function hexToRgb(hex: string) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? { r: parseInt(r[1], 16), g: parseInt(r[2], 16), b: parseInt(r[3], 16) } : null;
}

function rgbToHsl(r: number, g: number, b: number) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

export function ColorConverterTool() {
  const [hex, setHex] = useState("#6366f1");
  const [copied, setCopied] = useState<string | null>(null);

  const rgb = hexToRgb(hex);
  const hsl = rgb ? rgbToHsl(rgb.r, rgb.g, rgb.b) : null;

  const copy = async (val: string, key: string) => {
    await navigator.clipboard.writeText(val);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const formats = rgb && hsl ? [
    { label: "HEX", value: hex.toUpperCase() },
    { label: "RGB", value: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` },
    { label: "RGBA", value: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)` },
    { label: "HSL", value: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` },
    { label: "HSLA", value: `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, 1)` },
    { label: "CSS var", value: `--color: ${hex.toUpperCase()};` },
  ] : [];

  return (
    <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
      {/* Color picker */}
      <div className="px-5 py-5 border-b border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center gap-5">
        <div className="w-24 h-24 rounded-2xl shadow-lg border border-slate-200 flex-shrink-0" style={{ background: hex }} />
        <div className="flex-1 space-y-3">
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Pick a Color</label>
            <input type="color" value={hex} onChange={(e) => setHex(e.target.value)} className="h-10 w-20 rounded-lg cursor-pointer border-0" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Or Enter HEX</label>
            <input
              value={hex}
              onChange={(e) => setHex(e.target.value)}
              className="px-4 py-2 border border-slate-200 rounded-xl font-mono text-sm text-slate-800 focus:outline-none focus:border-indigo-400 w-40"
              placeholder="#6366f1"
            />
          </div>
        </div>
      </div>

      {/* Conversions */}
      <div className="p-5">
        <div className="divide-y divide-slate-100 rounded-xl border border-slate-200 overflow-hidden">
          {formats.map((f) => (
            <div key={f.label} className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 group transition-colors">
              <span className="text-xs font-bold text-slate-500 w-16 flex-shrink-0">{f.label}</span>
              <code className="font-mono text-sm text-slate-800 flex-1">{f.value}</code>
              <button onClick={() => copy(f.value, f.label)} className="opacity-0 group-hover:opacity-100 p-1.5 rounded hover:bg-white transition-all">
                {copied === f.label ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5 text-slate-400" />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
