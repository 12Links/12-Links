import { ArrowLeft, Compass } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center bg-[#0A0A0F] px-4 py-16">
      <div className="w-full max-w-lg bg-card/50 border border-white/10 rounded-3xl p-8 sm:p-12 text-center backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 bg-[#00FF88]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="w-16 h-16 rounded-2xl bg-[#00FF88]/10 border border-[#00FF88]/20 flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8 text-[#00FF88] animate-spin" style={{ animationDuration: "12s" }} />
        </div>

        <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#00FF88] px-3 py-1 rounded bg-[#00FF88]/10 border border-[#00FF88]/20 inline-block mb-3">
          Error 404 • Node Not Located
        </span>

        <h1 className="text-3xl font-black text-white mb-3">Endpoint Not Found</h1>
        
        <p className="text-gray-400 text-sm leading-relaxed font-light mb-8 max-w-sm mx-auto">
          The requested system route does not exist or has been shifted in active sprints. Let's redirect you to the main interface.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#00FF88] text-black font-bold px-6 py-3 rounded-xl hover:bg-[#00FF88]/90 transition-all text-xs font-mono uppercase tracking-wider shadow-lg shadow-[#00FF88]/20"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Homepage
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-6 py-3 rounded-xl hover:border-white/40 hover:bg-white/5 transition-all text-xs font-mono uppercase tracking-wider"
          >
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}
