import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Github, ShieldCheck, FileText, ArrowUp, Copy, Check, Mail } from "lucide-react";
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
    <footer className="bg-[#0B0D12] border-t border-white/10 pt-16 pb-12 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          
          {/* Brand & Mission (Cols 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <img 
                src="/12links_logo.svg" 
                alt="12 Links Logo" 
                className="w-9 h-9 object-contain" 
              />
              <span className="text-2xl font-bold tracking-tight text-white">
                12<span className="text-emerald-400">Links</span>
              </span>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Custom AI models, software systems, and data pipelines built for African businesses by 7 university engineers in Pretoria & Johannesburg.
            </p>

            <div className="text-xs text-gray-400 pt-1">
              <span>Operating from Gauteng, South Africa • Delivering Pan-African Solutions</span>
            </div>
            
            {/* Social & Verified Links */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.linkedin.com/company/12-links/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"
                aria-label="12 Links on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/12Links/12-Links" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"
                aria-label="12 Links on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="mailto:info@12links.co.za" 
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"
                aria-label="Email 12 Links"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Navigation (Cols 6-8) */}
          <div className="md:col-span-3">
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About the Team</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services & Capabilities</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact & Scoping</Link></li>
            </ul>
          </div>

          {/* Contact & Direct Channel (Cols 9-12) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Email:</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-400 font-medium">info@12links.co.za</span>
                  <button 
                    type="button" 
                    onClick={copyEmail}
                    className="p-1 hover:text-white text-gray-400"
                    title="Copy Email Address"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between text-gray-400">
                <span>Location:</span>
                <span className="text-gray-300">Pretoria & Johannesburg</span>
              </div>
              <div className="flex items-center justify-between text-gray-400">
                <span>Data Privacy:</span>
                <span className="text-gray-300">POPIA Act No. 4 Compliant</span>
              </div>
            </div>
            
            <button
              type="button"
              onClick={scrollToTop}
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" /> Back to top
            </button>
          </div>
        </div>

        {/* ── Bottom Legal Bar ── */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2026 12 Links (Pty) Ltd. Built in South Africa.</p>
          
          <div className="flex items-center gap-6">
            <button 
              type="button"
              onClick={() => setActiveDoc("terms")}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span className="text-gray-600">•</span>
            <button 
              type="button"
              onClick={() => setActiveDoc("privacy")}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      {/* ── LEGAL MODAL OVERLAY (VERIFIED CORRECT MAPPING) ── */}
      <AnimatePresence mode="wait">
        {activeDoc && (
          <div 
            className="fixed inset-0 z-[99999] flex justify-end overflow-hidden h-screen"
            role="dialog"
            aria-modal="true"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDoc(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm cursor-pointer"
            />

            {/* Content Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-[#12151D] border-l border-white/10 shadow-2xl h-screen flex flex-col z-10 overflow-hidden"
            >
              {/* Header */}
              <div className="flex justify-between items-center px-6 sm:px-8 py-5 border-b border-white/10 bg-[#12151D] shrink-0">
                <div className="flex items-center gap-3">
                  {activeDoc === "terms" ? (
                    <>
                      <FileText className="w-5 h-5 text-emerald-400 shrink-0" />
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">Terms of Service</h3>
                        <p className="text-xs text-gray-400">Engagement & Delivery Governance • 2026</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">Privacy Policy</h3>
                        <p className="text-xs text-gray-400">POPIA Act No. 4 Compliance • 2026</p>
                      </div>
                    </>
                  )}
                </div>
                
                <button 
                  type="button"
                  onClick={() => setActiveDoc(null)}
                  className="p-2 text-gray-400 hover:text-white bg-white/5 rounded-lg transition-colors cursor-pointer"
                  aria-label="Close document"
                >
                  ✕
                </button>
              </div>

              {/* Scrollable Legal Copy */}
              <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 text-gray-300 space-y-5 text-sm leading-relaxed">
                {activeDoc === "terms" ? (
                  <>
                    <p className="text-gray-400 bg-white/5 p-4 rounded-xl border border-white/5">
                      Welcome to 12 Links. By engaging our engineering services, accessing this platform, or signing a project statement of work, you accept these operational delivery terms.
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-xs uppercase tracking-wider text-emerald-400">1. Scope of Engagement</h4>
                      <p>12 Links provides custom software engineering, machine learning modeling, and data architecture services. Final deliverable specifications, sprint schedules, and milestone payment schedules are governed by customized Statements of Work (SOW) executed between 12 Links (Pty) Ltd and the client.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-xs uppercase tracking-wider text-emerald-400">2. Intellectual Property Rights</h4>
                      <p>Upon delivery and final milestone sign-off, all custom software code, machine learning model architectures, and project artifacts created specifically for the client are 100% owned by the client. 12 Links retains no proprietary claim to client IP.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-xs uppercase tracking-wider text-emerald-400">3. Milestone Acceptance & Warranty</h4>
                      <p>Work is delivered in transparent, pre-agreed milestone phases. Clients review and test functional deliverables at each gate. Every deployment includes an initial 30-day post-launch warranty period to resolve any system defects.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-xs uppercase tracking-wider text-emerald-400">4. Governing Law</h4>
                      <p>These terms and all bilateral service agreements are interpreted and governed under the laws of the Republic of South Africa, subject to the jurisdiction of South African courts.</p>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-gray-400 bg-white/5 p-4 rounded-xl border border-white/5">
                      12 Links is committed to protecting corporate and personal data in strict compliance with South Africa's Protection of Personal Information Act (POPIA), Act No. 4 of 2013.
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-xs uppercase tracking-wider text-emerald-400">1. Information We Collect</h4>
                      <p>We collect only the business contact details, organizational identifiers, and project descriptions provided voluntarily through our project intake forms or direct email communications.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-xs uppercase tracking-wider text-emerald-400">2. Purpose of Data Processing</h4>
                      <p>Your details are processed strictly to prepare project proposals, scope technical architectures, schedule consultations, and maintain project delivery communications. We never sell or lease client information to third-party marketing entities.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-xs uppercase tracking-wider text-emerald-400">3. Data Security</h4>
                      <p>All data submitted through our intake forms is encrypted in transit via modern TLS protocols and stored securely. We apply strict access controls across all internal engineering communication channels.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-xs uppercase tracking-wider text-emerald-400">4. Your Rights Under POPIA</h4>
                      <p>You have the right to request access to your personal information, request corrections, or request complete deletion of your data from our systems at any time by emailing <span className="text-emerald-400">info@12links.co.za</span>.</p>
                    </div>
                  </>
                )}
              </div>

              {/* Close Footer */}
              <div className="p-4 sm:px-8 border-t border-white/10 bg-[#12151D] flex justify-end shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveDoc(null)}
                  className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
