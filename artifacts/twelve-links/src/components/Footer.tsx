import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Twitter, X, Github, ShieldCheck, FileText, ArrowUp, Copy, Check, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [activeDoc, setActiveDoc] = useState<"privacy" | "terms" | null>(null);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveDoc(null);
    };
    if (activeDoc) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeDoc]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("info@12links.co.za");
    setCopied(true);
    toast({
      title: "Email Copied",
      description: "info@12links.co.za copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-[#07090F] border-t border-white/10 pt-16 pb-8 relative z-10 text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          
          {/* Brand Info (Cols 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <img 
                src="/12links_logo.svg" 
                alt="12 Links Logo" 
                className="w-10 h-10 object-contain" 
              />
              <span className="text-2xl sm:text-3xl font-black tracking-tighter text-white">
                12<span className="text-[#00FF88]">Links</span>
              </span>
            </div>
            
            <p className="text-gray-400 text-sm font-light max-w-sm leading-relaxed">
              Engineering Africa's digital frontier. Custom enterprise AI, full-stack software systems, and data pipelines built with student-led agility and enterprise discipline.
            </p>

            {/* Operational Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300">
              <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
              <span>Pods Operational • Pretoria & Johannesburg Hubs</span>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a 
                href="https://www.linkedin.com/company/12-links/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00FF88] hover:border-[#00FF88]/50 transition-all hover:scale-105"
                aria-label="12 Links LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00FF88] hover:border-[#00FF88]/50 transition-all hover:scale-105"
                aria-label="12 Links X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/12Links/12-Links" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00FF88] hover:border-[#00FF88]/50 transition-all hover:scale-105"
                aria-label="12 Links GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Navigation Links (Cols 6-8) */}
          <div className="md:col-span-3">
            <h4 className="text-white font-mono text-xs font-bold uppercase tracking-wider mb-5 text-[#00FF88]">
              Platform Navigation
            </h4>
            <ul className="space-y-3 text-gray-400 text-xs font-mono">
              <li><Link href="/" className="hover:text-[#00FF88] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#00FF88] transition-colors">About & Team</Link></li>
              <li><Link href="/services" className="hover:text-[#00FF88] transition-colors">Services & Pods</Link></li>
              <li><Link href="/industries" className="hover:text-[#00FF88] transition-colors">Industries Served</Link></li>
              <li><Link href="/contact" className="hover:text-[#00FF88] transition-colors">Project Intake</Link></li>
            </ul>
          </div>

          {/* Quick Inquiry / Contact Details (Cols 9-12) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-mono text-xs font-bold uppercase tracking-wider mb-5 text-[#FFB800]">
              Direct Inquiries
            </h4>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2.5 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Email:</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#00FF88]">info@12links.co.za</span>
                  <button 
                    type="button" 
                    onClick={copyEmail}
                    className="p-1 hover:text-white text-gray-400"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-3 h-3 text-[#00FF88]" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between text-gray-400">
                <span>Location:</span>
                <span className="text-gray-300">Gauteng, South Africa</span>
              </div>
              <div className="flex items-center justify-between text-gray-400">
                <span>Compliance:</span>
                <span className="text-[#00FF88]">POPIA Act Compliant</span>
              </div>
            </div>
            
            <button
              type="button"
              onClick={scrollToTop}
              className="mt-3 inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#00FF88]" /> Back to Top
            </button>
          </div>
        </div>

        {/* ── Bottom Info Bar ── */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-mono">
          <p>© 2026 12 Links (Pty) Ltd. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="text-[#FFB800] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Built in South Africa
            </span>
            <span className="text-gray-700">|</span>
            <span>Pretoria & Johannesburg</span>
          </div>
          
          <div className="flex gap-4">
            <button 
              type="button"
              onClick={() => setActiveDoc("privacy")}
              className="text-gray-400 hover:text-[#00FF88] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-gray-700">•</span>
            <button 
              type="button"
              onClick={() => setActiveDoc("terms")}
              className="text-gray-400 hover:text-[#00FF88] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* ── FULL-SCREEN MODAL OVERLAY (PRIVACY & TERMS) ── */}
      <AnimatePresence mode="wait">
        {activeDoc && (
          <div 
            className="fixed inset-0 z-[99999] flex justify-end overflow-hidden h-screen"
            role="dialog"
            aria-modal="true"
          >
            {/* Backdrop Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDoc(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Sliding Content Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="relative w-full max-w-2xl bg-[#0B0F19] border-l border-white/10 shadow-2xl h-screen flex flex-col z-10 overflow-hidden"
            >
              {/* Header */}
              <div className="flex justify-between items-center px-6 sm:px-10 py-6 border-b border-white/10 bg-[#0B0F19] shrink-0">
                <div className="flex items-center gap-3">
                  {activeDoc === "privacy" ? (
                    <>
                      <ShieldCheck className="w-6 h-6 text-[#00FF88] shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight">Privacy Policy</h3>
                        <p className="text-xs text-gray-500 font-mono">POPIA Compliant • 2026 Edition</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <FileText className="w-6 h-6 text-[#FFB800] shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight">Terms of Service</h3>
                        <p className="text-xs text-gray-500 font-mono">Service Delivery Governance • 2026</p>
                      </div>
                    </>
                  )}
                </div>
                
                <button 
                  type="button"
                  onClick={() => setActiveDoc(null)}
                  className="p-2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-full transition-colors cursor-pointer"
                  aria-label="Close document"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-6 text-gray-300 space-y-6 text-sm font-light leading-relaxed">
                {activeDoc === "privacy" ? (
                  <>
                    <p className="italic text-gray-400 bg-white/5 p-4 rounded-xl border border-white/5">
                      At 12 Links, safeguarding your corporate and personal records is foundational. This policy explains how we process information in full accordance with the South African Protection of Personal Information Act (POPIA), No. 4 of 2013.
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-white font-bold font-mono text-xs uppercase tracking-wider text-[#00FF88]">1. Information We Collect</h4>
                      <p>We only collect data strictly necessary to scope, architect, and execute software delivery projects. This includes corporate identifiers and stakeholder contact details provided through our project intake channels.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-bold font-mono text-xs uppercase tracking-wider text-[#00FF88]">2. Purpose of Processing</h4>
                      <p>Records are processed solely to prepare architectural blueprints, establish project milestones, assign engineering pods, and provide production delivery updates.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-bold font-mono text-xs uppercase tracking-wider text-[#00FF88]">3. Data Security & Storage</h4>
                      <p>Our infrastructure applies industry-standard TLS encryption in transit and secure cloud repositories at rest. We never sell, distribute, or expose client records to third-party marketing brokers.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-bold font-mono text-xs uppercase tracking-wider text-[#00FF88]">4. Your POPIA Rights</h4>
                      <p>Under POPIA regulations, you retain full rights to inspect, update, or request the immediate deletion of your active records by contacting <span className="text-[#00FF88] underline">info@12links.co.za</span>.</p>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="italic text-gray-400 bg-white/5 p-4 rounded-xl border border-white/5">
                      Welcome to 12 Links. By engaging our platform or submitting project scopes, you accept our standard service and engagement guidelines.
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-white font-bold font-mono text-xs uppercase tracking-wider text-[#FFB800]">1. Scope of Engagement</h4>
                      <p>Information on this website serves an architectural and capability-demonstration purpose. Formal engineering engagements are governed solely by customized, bilateral Statements of Work (SOW) with milestone acceptance criteria.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-bold font-mono text-xs uppercase tracking-wider text-[#FFB800]">2. Intellectual Property Rights</h4>
                      <p>Upon final milestone sign-off and settlement, 100% of custom software, models, and codebases developed for your engagement belong exclusively to you. Platform branding and proprietary tooling remain property of 12 Links (Pty) Ltd.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-bold font-mono text-xs uppercase tracking-wider text-[#FFB800]">3. Governing Law</h4>
                      <p>These terms are governed and interpreted under the sovereign laws of the Republic of South Africa. Any legal disputes are subject to the exclusive jurisdiction of South African courts.</p>
                    </div>
                  </>
                )}
              </div>

              {/* Sticky Bottom Close Action */}
              <div className="p-6 sm:px-10 border-t border-white/10 bg-[#0B0F19] flex justify-end shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveDoc(null)}
                  className="px-6 py-2.5 bg-[#00FF88] hover:bg-[#00FF88]/90 text-black font-mono font-bold tracking-wider rounded-lg text-xs uppercase transition-all cursor-pointer"
                >
                  Understood & Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
