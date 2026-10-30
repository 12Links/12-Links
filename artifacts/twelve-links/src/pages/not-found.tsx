import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center bg-[#0F1117] px-4 py-16">
      <div className="w-full max-w-md bg-[#141721] border border-white/10 rounded-2xl p-8 sm:p-10 text-center">
        <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
          Error 404
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 font-normal">
          The requested page could not be located. It may have been moved or updated.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Homepage
        </Link>
      </div>
    </div>
  );
}
