import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center bg-[#FAF9F6] dark:bg-[#090D16] px-4 py-16 transition-colors">
      <div className="w-full max-w-md bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-lg p-8 sm:p-10 text-center shadow-sm">
        <div className="text-xs font-mono font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
          Error 404 · Page Not Found
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
          Page Not Found
        </h1>
        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6 font-normal">
          The requested page could not be located. It may have been relocated or updated.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-md text-sm transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Homepage
        </Link>
      </div>
    </div>
  );
}
