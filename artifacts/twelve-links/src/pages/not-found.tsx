import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center bg-background px-4 py-16 transition-colors">
      <div className="w-full max-w-md bg-card border border-border rounded-lg p-8 sm:p-10 text-center shadow-sm">
        <div className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Error 404 · Page Not Found
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3">
          Page Not Found
        </h1>
        <p className="text-secondary text-sm leading-relaxed mb-6 font-normal">
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
