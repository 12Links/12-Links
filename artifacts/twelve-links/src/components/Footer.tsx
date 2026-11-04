import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Github, ShieldCheck, FileText, ArrowUp, Copy, Check, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const { toast } = useToast();
  const [activeDoc, setActiveDoc] = useState<"terms" | "privacy" | null>(null);
  const [copied, setCopied] = useState(false);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDoc(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("info@12links.co.za");
    setCopied(true);
    toast({
      title: "Email Copied",
      description: "info@12links.co.za has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-[#111827] border-t border-slate-200 dark:border-slate-800 pt-16 pb-12 text-slate-600 dark:text-slate-400 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          
          {/* Brand & Mission (Cols 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 mb-2">
              <img 
                src="/12links_logo.svg" 
                alt="12 Links Logo" 
                className="w-8 h-8 object-contain" 
              />
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                12<span className="text-blue-600 dark:text-blue-400">Links</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-sm font-normal">
              Custom software, systems engineering, and applied AI. Based in Pretoria, South Africa.
            </p>

            <div className="text-xs text-slate-600 dark:text-slate-400 pt-1 space-y-1">
              <div>Headquarters: Pretoria, Gauteng, South Africa</div>
              <div className="text-slate-800 dark:text-slate-200 font-mono text-[11px]">Milestone-Gated · 100% IP Handover · POPIA Compliant</div>
            </div>
            
            {/* Social & Verified Links */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.linkedin.com/company/12-links/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                aria-label="12 Links on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/12Links" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                aria-label="12 Links on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="mailto:info@12links.co.za" 
                className="w-9 h-9 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                aria-label="Email 12 Links"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Navigation (Cols 6-8) */}
          <div className="md:col-span-3">
            <h4 className="text-slate-900 dark:text-slate-50 text-xs font-semibold uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Capabilities & Services</Link></li>
              <li><Link href="/work" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Projects & Architecture</Link></li>
              <li><Link href="/industries" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Industries</Link></li>
              <li><Link href="/trust" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Governance & Security</Link></li>
              <li><Link href="/insights" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Technical Notes</Link></li>
              <li><Link href="/about" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">About 12 Links</Link></li>
              <li><Link href="/contact" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Contact Engineering</Link></li>
            </ul>
          </div>

          {/* Contact & Direct Channel (Cols 9-12) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-slate-900 dark:text-slate-50 text-xs font-semibold uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <div className="p-4 rounded-md bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">Email:</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-900 dark:text-slate-50 font-medium font-mono">info@12links.co.za</span>
                  <button 
                    type="button" 
                    onClick={copyEmail}
                    className="p-1 hover:text-slate-900 dark:hover:text-slate-100 text-slate-500 transition-colors cursor-pointer"
                    title="Copy Email Address"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-blue-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">Response Window:</span>
                <span className="text-slate-900 dark:text-slate-50 font-mono">1 Business Day</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">Location:</span>
                <span className="text-slate-900 dark:text-slate-50 font-medium">Pretoria, South Africa</span>
              </div>
            </div>
            
            <button
              type="button"
              onClick={scrollToTop}
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" /> Back to top
            </button>
          </div>
        </div>

        {/* ── Bottom Legal Bar ── */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 12 Links. All rights reserved. Pretoria, South Africa.</p>
          
          <div className="flex items-center gap-5">
            <Link href="/trust" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Trust Center
            </Link>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <button 
              type="button"
              onClick={() => setActiveDoc("terms")}
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <button 
              type="button"
              onClick={() => setActiveDoc("privacy")}
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors cursor-pointer"
            >
              Privacy Policy & POPIA
            </button>
          </div>
        </div>
      </div>

      {/* ── Legal Disclosures Modal Drawer ── */}
      <AnimatePresence>
        {activeDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 w-full max-w-2xl rounded-lg shadow-xl flex flex-col max-h-[85vh] overflow-hidden text-slate-900 dark:text-slate-50"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    {activeDoc === "terms" ? <FileText className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4" />}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                      {activeDoc === "terms" ? "Terms of Service Agreement" : "Privacy Policy & POPIA Statement"}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">12 Links · Pretoria, Republic of South Africa</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveDoc(null)}
                  className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors cursor-pointer text-xs font-mono"
                  aria-label="Close modal"
                >
                  ESC
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {activeDoc === "terms" ? (
                  <>
                    <p className="bg-slate-50 dark:bg-slate-900/60 p-3.5 rounded-md border border-slate-200 dark:border-slate-800">
                      These standard terms govern engineering statements of work executed between 12 Links and client organizations.
                    </p>
                    <div className="space-y-1.5">
                      <h4 className="text-slate-900 dark:text-slate-50 font-semibold text-xs uppercase tracking-wider">1. Scope of Engagement</h4>
                      <p>All commercial engineering projects are governed exclusively by customized Statements of Work (SOW) defining sprint deliverables, architecture criteria, and milestone gates.</p>
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-slate-900 dark:text-slate-50 font-semibold text-xs uppercase tracking-wider">2. Intellectual Property & Code Ownership</h4>
                      <p>Upon final settlement of milestone invoices, 100% of custom software, model weights, database schemas, and codebase assets developed for your engagement belong exclusively to you with zero royalty or recurring license fees.</p>
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-slate-900 dark:text-slate-50 font-semibold text-xs uppercase tracking-wider">3. Milestone Delivery & Warranty</h4>
                      <p>Work is delivered in transparent, pre-agreed milestone phases. Clients review and test functional deliverables at each gate. Every deployment includes an initial 30-day post-launch warranty period to resolve any system defects.</p>
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-slate-900 dark:text-slate-50 font-semibold text-xs uppercase tracking-wider">4. Governing Law</h4>
                      <p>These terms and all bilateral service agreements are interpreted and governed under the laws of the Republic of South Africa, subject to the jurisdiction of South African courts.</p>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="bg-slate-50 dark:bg-slate-900/60 p-3.5 rounded-md border border-slate-200 dark:border-slate-800">
                      12 Links is committed to protecting corporate and personal data in strict compliance with South Africa's Protection of Personal Information Act (POPIA), Act No. 4 of 2013.
                    </p>
                    <div className="space-y-1.5">
                      <h4 className="text-slate-900 dark:text-slate-50 font-semibold text-xs uppercase tracking-wider">1. Information We Collect</h4>
                      <p>We collect only the business contact details, organizational identifiers, and project descriptions provided voluntarily through our project intake forms or direct email communications.</p>
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-slate-900 dark:text-slate-50 font-semibold text-xs uppercase tracking-wider">2. Purpose of Data Processing</h4>
                      <p>Your details are processed strictly to prepare project proposals, scope technical architectures, schedule consultations, and maintain project delivery communications. We never sell or lease client information to third-party marketing entities.</p>
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-slate-900 dark:text-slate-50 font-semibold text-xs uppercase tracking-wider">3. Data Security & In-Country Residency</h4>
                      <p>All data submitted through our intake forms is encrypted in transit via modern TLS 1.3 protocols and stored in South Africa. We apply strict access controls across all internal channels.</p>
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-slate-900 dark:text-slate-50 font-semibold text-xs uppercase tracking-wider">4. Your Rights Under POPIA</h4>
                      <p>You have the right to request access to your personal information, request corrections, or request complete deletion of your data from our systems at any time by emailing info@12links.co.za.</p>
                    </div>
                  </>
                )}
              </div>

              {/* Close Footer */}
              <div className="p-4 sm:px-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex justify-between items-center shrink-0">
                <Link
                  href="/trust"
                  onClick={() => setActiveDoc(null)}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Visit Trust & Security Center
                </Link>
                <button
                  type="button"
                  onClick={() => setActiveDoc(null)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md text-xs transition-colors cursor-pointer"
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
