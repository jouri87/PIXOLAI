export interface Tool {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  category: ToolCategory;
  icon: string;
  keywords: string[];
  featured?: boolean;
  popular?: boolean;
  new?: boolean;
}

export type ToolCategory =
  | "JSON"
  | "Encoding"
  | "Text"
  | "Web"
  | "Security"
  | "CSS"
  | "JavaScript"
  | "Generators"
  | "Converters";

export const tools: Tool[] = [
  {
    slug: "json-formatter",
    name: "JSON Formatter",
    description: "Format, validate, and beautify JSON data instantly.",
    longDescription:
      "Format and beautify your JSON data with proper indentation, validate syntax errors, and get a clean, readable output. Essential for API debugging and data inspection.",
    category: "JSON",
    icon: "🗂️",
    keywords: ["json", "format", "beautify", "validate", "pretty print"],
    featured: true,
    popular: true,
  },
  {
    slug: "json-validator",
    name: "JSON Validator",
    description: "Validate JSON syntax and check for errors.",
    longDescription:
      "Instantly validate your JSON data structure. Get detailed error messages with line numbers to quickly fix syntax issues.",
    category: "JSON",
    icon: "✅",
    keywords: ["json", "validate", "check", "syntax", "error"],
    popular: true,
  },
  {
    slug: "json-minifier",
    name: "JSON Minifier",
    description: "Minify JSON by removing whitespace and comments.",
    longDescription:
      "Compress your JSON data by removing unnecessary whitespace, newlines, and comments to reduce file size for production use.",
    category: "JSON",
    icon: "⚡",
    keywords: ["json", "minify", "compress", "whitespace"],
    featured: true,
  },
  {
    slug: "base64-encoder",
    name: "Base64 Encoder/Decoder",
    description: "Encode and decode text or files to/from Base64.",
    longDescription:
      "Convert text, images, or any file to Base64 encoding or decode Base64 strings back to their original form. Useful for embedding data in web pages or APIs.",
    category: "Encoding",
    icon: "🔡",
    keywords: ["base64", "encode", "decode", "convert"],
    featured: true,
    popular: true,
  },
  {
    slug: "url-encoder",
    name: "URL Encoder",
    description: "Encode special characters in URLs for safe transmission.",
    longDescription:
      "Encode special characters in your URLs to ensure they are transmitted safely. Perfect for query strings, form data, and API parameters.",
    category: "Web",
    icon: "🔗",
    keywords: ["url", "encode", "percent", "query string"],
    popular: true,
  },
  {
    slug: "url-decoder",
    name: "URL Decoder",
    description: "Decode URL-encoded strings back to readable text.",
    longDescription:
      "Decode percent-encoded URL strings back to their human-readable form. Quickly decode query parameters and URI components.",
    category: "Web",
    icon: "🔓",
    keywords: ["url", "decode", "percent", "query string"],
  },
  {
    slug: "regex-tester",
    name: "Regex Tester",
    description: "Test and debug regular expressions with live matching.",
    longDescription:
      "Test your regular expressions against sample text in real-time. See all matches highlighted, test capture groups, and explore different flags (g, i, m, s).",
    category: "Text",
    icon: "🔍",
    keywords: ["regex", "regular expression", "pattern", "match", "test"],
    featured: true,
    popular: true,
  },
  {
    slug: "timestamp-converter",
    name: "Timestamp Converter",
    description: "Convert Unix timestamps to human-readable dates.",
    longDescription:
      "Convert Unix/Epoch timestamps to human-readable date formats and vice versa. Supports all major date formats and timezones.",
    category: "Converters",
    icon: "🕐",
    keywords: ["timestamp", "unix", "epoch", "date", "time", "convert"],
    popular: true,
  },
  {
    slug: "password-generator",
    name: "Password Generator",
    description: "Generate strong, secure passwords instantly.",
    longDescription:
      "Create cryptographically secure passwords with customizable length, character sets, and complexity requirements. No data is sent to any server.",
    category: "Security",
    icon: "🔐",
    keywords: ["password", "generate", "secure", "random", "crypto"],
    featured: true,
    popular: true,
  },
  {
    slug: "uuid-generator",
    name: "UUID Generator",
    description: "Generate RFC 4122 compliant UUIDs (v4).",
    longDescription:
      "Generate one or multiple RFC 4122 compliant UUIDs (Universally Unique Identifiers) instantly. Useful for database IDs, session tokens, and more.",
    category: "Generators",
    icon: "🆔",
    keywords: ["uuid", "guid", "generate", "unique", "id"],
    popular: true,
  },
  {
    slug: "markdown-previewer",
    name: "Markdown Previewer",
    description: "Write and preview Markdown with live rendering.",
    longDescription:
      "Write Markdown in the editor and see a live rendered preview side-by-side. Supports GFM (GitHub Flavored Markdown) with tables, code blocks, and more.",
    category: "Text",
    icon: "📝",
    keywords: ["markdown", "preview", "render", "md", "gfm"],
    featured: true,
  },
  {
    slug: "color-converter",
    name: "Color Converter",
    description: "Convert colors between HEX, RGB, HSL, and more.",
    longDescription:
      "Convert colors between HEX, RGB, RGBA, HSL, HSLA formats instantly. Includes a color picker and palette generator for design work.",
    category: "CSS",
    icon: "🎨",
    keywords: ["color", "hex", "rgb", "hsl", "convert", "picker"],
    featured: true,
    popular: true,
  },
  {
    slug: "html-formatter",
    name: "HTML Formatter",
    description: "Format and beautify HTML code with proper indentation.",
    longDescription:
      "Clean up and format messy HTML with proper indentation and syntax highlighting. Supports HTML5 and handles embedded CSS/JS.",
    category: "Web",
    icon: "🌐",
    keywords: ["html", "format", "beautify", "indent", "code"],
  },
  {
    slug: "css-minifier",
    name: "CSS Minifier",
    description: "Minify CSS to reduce file size and improve load times.",
    longDescription:
      "Remove unnecessary whitespace, comments, and optimize your CSS code for production. Reduce file size and improve website loading speed.",
    category: "CSS",
    icon: "🎯",
    keywords: ["css", "minify", "compress", "optimize", "style"],
    popular: true,
  },
  {
    slug: "javascript-minifier",
    name: "JavaScript Minifier",
    description: "Minify JavaScript code to reduce bundle size.",
    longDescription:
      "Compress your JavaScript code by removing whitespace, comments, and shortening variable names to reduce bundle size for production deployment.",
    category: "JavaScript",
    icon: "⚙️",
    keywords: ["javascript", "js", "minify", "compress", "bundle"],
    popular: true,
  },
  {
    slug: "sql-formatter",
    name: "SQL Formatter",
    description: "Format and beautify SQL queries for readability.",
    longDescription:
      "Format messy SQL queries with proper indentation and keyword casing. Supports MySQL, PostgreSQL, SQLite, and standard SQL syntax.",
    category: "Text",
    icon: "🗃️",
    keywords: ["sql", "format", "query", "database", "mysql", "postgresql"],
    featured: true,
  },
];

export const toolCategories: ToolCategory[] = [
  "JSON",
  "Encoding",
  "Text",
  "Web",
  "Security",
  "CSS",
  "JavaScript",
  "Generators",
  "Converters",
];

export function getToolsByCategory(category: ToolCategory): Tool[] {
  return tools.filter((t) => t.category === category);
}

export function getFeaturedTools(): Tool[] {
  return tools.filter((t) => t.featured);
}

export function getPopularTools(): Tool[] {
  return tools.filter((t) => t.popular);
}

export function getRelatedTools(current: string, limit = 4): Tool[] {
  const tool = tools.find((t) => t.slug === current);
  if (!tool) return tools.slice(0, limit);
  return tools
    .filter((t) => t.slug !== current && t.category === tool.category)
    .slice(0, limit);
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}
