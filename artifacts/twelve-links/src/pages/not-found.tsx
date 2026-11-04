import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center bg-background px-4 py-16 transition-colors">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8 sm:p-10 text-center shadow-lg">
        <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2 font-mono">
          Error 404 // Routing Fault
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Page Not Found</h1>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-normal">
          The requested endpoint could not be located on the platform. It may have been relocated or updated.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-5 py-2.5 rounded-xl text-sm transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Homepage
        </Link>
      </div>
    </div>
  );
}
