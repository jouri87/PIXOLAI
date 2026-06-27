import Link from "next/link";
import { Home, Wrench, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <div className="text-8xl font-black text-slate-100 mb-2 select-none">404</div>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">Page not found</h1>
        <p className="text-slate-500 mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors">
            <Home className="h-4 w-4" /> Go Home
          </Link>
          <Link href="/tools" className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:border-indigo-300 rounded-xl transition-colors">
            <Wrench className="h-4 w-4" /> Browse Tools
          </Link>
          <Link href="/blog" className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:border-indigo-300 rounded-xl transition-colors">
            <BookOpen className="h-4 w-4" /> Read Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
