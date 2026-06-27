"use client";
import { useState } from "react";

const SAMPLE = `# Welcome to PixolAI Markdown Previewer

Write **Markdown** on the left and see a live preview on the right.

## Features

- **Bold** and *italic* text
- [Links](https://pixolai.dev) and images
- \`inline code\` and code blocks
- > Blockquotes

## Code Example

\`\`\`javascript
const greet = (name) => {
  return \`Hello, \${name}!\`;
};
console.log(greet("PixolAI"));
\`\`\`

## Table

| Tool | Category | Free |
|------|----------|------|
| JSON Formatter | JSON | ✅ |
| Base64 Encoder | Encoding | ✅ |
| Regex Tester | Text | ✅ |
`;

function simpleMarkdown(md: string): string {
  return md
    .replace(/^### (.*$)/gm, "<h3 class='text-lg font-bold mt-5 mb-2 text-slate-800'>$1</h3>")
    .replace(/^## (.*$)/gm, "<h2 class='text-xl font-bold mt-6 mb-3 text-slate-900'>$1</h2>")
    .replace(/^# (.*$)/gm, "<h1 class='text-2xl font-bold mt-4 mb-4 text-slate-900'>$1</h1>")
    .replace(/\*\*(.*?)\*\*/g, "<strong class='font-semibold text-slate-900'>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em class='italic'>$1</em>")
    .replace(/`([^`]+)`/g, "<code class='bg-slate-100 text-indigo-600 px-1.5 py-0.5 rounded text-sm font-mono'>$1</code>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href='$2' class='text-indigo-600 hover:underline' target='_blank'>$1</a>")
    .replace(/^> (.*$)/gm, "<blockquote class='border-l-4 border-indigo-300 pl-4 text-slate-500 italic my-3'>$1</blockquote>")
    .replace(/^- (.*$)/gm, "<li class='flex items-start gap-2 my-1'><span class='mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0'></span><span>$1</span></li>")
    .replace(/```[\w]*\n([\s\S]*?)```/g, "<pre class='bg-slate-900 text-emerald-300 p-4 rounded-xl my-4 overflow-x-auto text-sm font-mono leading-relaxed'><code>$1</code></pre>")
    .replace(/\|(.+)\|/g, (match) => {
      if (match.includes("---")) return "";
      const cells = match.split("|").filter(Boolean).map((c) => c.trim());
      const isHeader = match.includes("---") || false;
      const tag = "td";
      return "<tr>" + cells.map((c) => `<${tag} class='border border-slate-200 px-3 py-2 text-sm'>${c}</${tag}>`).join("") + "</tr>";
    })
    .replace(/\n\n/g, "<br/><br/>");
}

export function MarkdownPreviewerTool() {
  const [md, setMd] = useState(SAMPLE);

  return (
    <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
      <div className="flex border-b border-slate-100 bg-slate-50">
        <div className="px-4 py-2.5 text-xs font-semibold text-slate-500 uppercase tracking-wider border-r border-slate-100 w-1/2">Markdown</div>
        <div className="px-4 py-2.5 text-xs font-semibold text-slate-500 uppercase tracking-wider w-1/2">Preview</div>
      </div>
      <div className="grid grid-cols-2 min-h-[400px]">
        <textarea
          value={md}
          onChange={(e) => setMd(e.target.value)}
          className="p-4 font-mono text-sm text-slate-700 resize-none focus:outline-none border-r border-slate-100"
        />
        <div
          className="p-4 text-sm text-slate-700 overflow-y-auto leading-relaxed"
          dangerouslySetInnerHTML={{ __html: simpleMarkdown(md) }}
        />
      </div>
    </div>
  );
}
