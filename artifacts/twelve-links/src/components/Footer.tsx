import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Twitter, Github, X, ShieldCheck, FileText } from "lucide-react";

export default function Footer() {
  const [activeDoc, setActiveDoc] = useState<"privacy" | "terms" | null>(null);

  // Prevent background scrolling when a legal document is open
  useEffect(() => {
    if (activeDoc) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeDoc]);

  return (
    <footer className="bg-card border-t border-white/10 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            
            {/* ── Logo Block ── */}
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/12links_logo.svg" 
                alt="12 Links Logo" 
                className="w-9 h-9 object-contain" 
              />
              <span className="text-3xl font-bold tracking-tighter text-white block">
                12<span className="text-[#00FF88]">Links</span>
              </span>
            </div>
            
            <p className="text-gray-400 max-w-sm mb-6">
              Connecting Africa's tech talent with global opportunities. The future of technology delivery.
            </p>
            
            {/* ── Real Social Icons ── */}
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00FF88] hover:border-[#00FF88]/50 transition-all hover:scale-105"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00FF88] hover:border-[#00FF88]/50 transition-all hover:scale-105"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00FF88] hover:border-[#00FF88]/50 transition-all hover:scale-105"
              >
                <span className="sr-only">GitHub</span>
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* ── Navigation Links ── */}
          <div>
            <h4 className="text-white font-bold mb-6">Navigation</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-[#00FF88] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#00FF88] transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-[#00FF88] transition-colors">Services</Link></li>
              <li><Link href="/industries" className="hover:text-[#00FF88] transition-colors">Interdustries</Link></li>
              <li><Link href="/contact" className="hover:text-[#00FF88] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* ── Subscription Form ── */}
          <div>
            <h4 className="text-white font-bold mb-6">Subscribe</h4>
            <p className="text-gray-400 text-sm mb-4">Get updates on our platform and opportunities.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-background border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00FF88]/50 w-full" 
              />
              <button 
                type="button" 
                className="bg-[#00FF88] text-black px-4 py-2 rounded-md text-sm font-bold uppercase hover:bg-[#00FF88]/80 transition-colors shrink-0"
              >
                Join
              </button>
            </div>
          </div>
        </div>
        
        {/* ── Bottom Info Bar ── */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono">
          <p>© 2026 12 Links. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[#FFB800]">Proudly South African</span>
            <span className="hidden sm:inline">|</span>
            <span>Johannesburg, ZA</span>
          </div>
          
          {/* ── SEPARATED BUTTONS WITH HIGHER LAYERING ── */}
          <div className="flex gap-4 relative z-20">
            <button 
              type="button"
              onClick={() => { console.log("Privacy clicked"); setActiveDoc("privacy"); }}
              className="text-gray-400 hover:text-[#00FF88] transition-colors cursor-pointer text-left focus:outline-none py-1 px-2"
            >
              Privacy Policy
            </button>
            <button 
              type="button"
              onClick={() => { console.log("Terms clicked"); setActiveDoc("terms"); }}
              className="text-gray-400 hover:text-[#00FF88] transition-colors cursor-pointer text-left focus:outline-none py-1 px-2"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* ── FIXED FORCE-ISOLATED FULL-SCREEN OVERLAY VIA HIGHEST Z-INDEX LAYER ── */}
      <AnimatePresence mode="wait">
        {activeDoc && (
          <div className="fixed inset-0 z-[99999] flex justify-end overflow-hidden">
            
            {/* Backdrop Blur Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDoc(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />

            {/* Sliding Content Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="relative w-full max-w-2xl bg-[#0B0F19] border-l border-white/10 p-6 md:p-10 shadow-2xl overflow-y-auto h-full flex flex-col z-10"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center pb-6 border-b border-white/5 mb-8">
                <div className="flex items-center gap-3">
                  {activeDoc === "privacy" ? (
                    <>
                      <ShieldCheck className="w-6 h-6 text-[#00FF88]" />
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Privacy Policy</h3>
                        <p className="text-xs text-gray-500 font-mono">POPIA Compliant • June 2026</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <FileText className="w-6 h-6 text-[#FFB800]" />
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Terms of Service</h3>
                        <p className="text-xs text-gray-500 font-mono">Service Terms • June 2026</p>
                      </div>
                    </>
                  )}
                </div>
                
                <button 
                  type="button"
                  onClick={() => setActiveDoc(null)}
                  className="p-2.5 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-full transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Legal Document Content */}
              <div className="flex-1 text-gray-300 space-y-6 text-sm font-light leading-relaxed pr-2 overflow-y-auto">
                {activeDoc === "privacy" ? (
                  <>
                    <p className="italic text-gray-400 bg-white/5 p-4 rounded-lg border border-white/5">
                      At 12 Links, safeguarding your information is foundational to how we build infrastructure. This policy details how we handle information in total lockstep with the Protection of Personal Information Act (POPIA), No. 4 of 2013.
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-white font-bold font-mono text-xs tracking-wider text-[#00FF88] uppercase">1. Information We Collect</h4>
                      <p>We only collect data necessary to evaluate, scope, and execute software delivery projects. This includes personal and corporate identifiers provided directly by you via our contact forms.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-bold font-mono text-xs tracking-wider text-[#00FF88] uppercase">2. Purpose of Processing</h4>
                      <p>Your records are processed strictly to establish operational partnerships, prepare technical proposals, schedule deep-dive consulting sessions, deploy engineering pods, and deliver platform notification loops.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-bold font-mono text-xs tracking-wider text-[#00FF88] uppercase">3. Data Integrity & Security</h4>
                      <p>Our infrastructure applies enterprise-grade cloud architecture security protocols. Data parameters entered via our contact framework are securely encrypted in transit and protected within isolated cloud repositories.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-bold font-mono text-xs tracking-wider text-[#00FF88] uppercase">4. Third-Party Sharing</h4>
                      <p>12 Links does not sell, lease, or distribute data parameters to marketing conglomerates. Information may only be routed to vital sub-processors strictly to fulfill processing requests initialized directly by you.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-bold font-mono text-xs tracking-wider text-[#00FF88] uppercase">5. Your Data Rights</h4>
                      <p>Under POPIA regulations, you retain explicit rights to inspect your active records, request architectural updates to inaccurate listings, or demand total deletion from our active repositories. Direct all compliance parameters to <span className="text-[#00FF88] underline">info@twelvelinks.co.za</span>.</p>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="italic text-gray-400 bg-white/5 p-4 rounded-lg border border-white/5">
                      Welcome to 12 Links. By interacting with our digital interfaces or initializing digital requests, you automatically accept our functional delivery governance frameworks.
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-white font-bold font-mono text-xs tracking-wider text-[#FFB800] uppercase">1. Scope of Engagement</h4>
                      <p>12 Links operates as a formal technology delivery agency. Information rendered on this site provides functional context on capabilities and architecture but does not automatically form an absolute delivery contract. Final service frameworks are governed solely by customized Statements of Work (SOW).</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-bold font-mono text-xs tracking-wider text-[#FFB800] uppercase">2. Intellectual Property Rights</h4>
                      <p>The layout mechanics, interactive components, imagery configurations, code blocks, copy, and structural branding systems visible across this platform belong strictly to 12 Links (Pty) Ltd and are protected under global intellectual property statutes.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-bold font-mono text-xs tracking-wider text-[#FFB800] uppercase">3. Submission Integrity</h4>
                      <p>By engaging our intake forms (AI, Talent, or Enterprise), you affirm that all submitted scopes, profiles, identifiers, and corporate context inputs are truthful, authentic, and free from malicious digital payloads.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-bold font-mono text-xs tracking-wider text-[#FFB800] uppercase">4. Liability Bound</h4>
                      <p>While we apply rigorous standard testing matrices, 12 Links is not liable for structural performance offsets, operational downtimes, or indirect financial variance linked to exploratory content browsed directly on this platform interface.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-bold font-mono text-xs tracking-wider text-[#FFB800] uppercase">5. Governing Law</h4>
                      <p>These architectural conditions are interpreted, structured, and regulated under the sovereign legal jurisdictions of the Republic of South Africa. Any transactional arbitration loops fall strictly under the authority of local South African courts.</p>
                    </div>
                  </>
                )}
              </div>

              {/* Drawer Bottom Action */}
              <div className="pt-6 border-t border-white/5 mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveDoc(null)}
                  className="px-6 py-3 bg-[#00FF88] hover:bg-[#00FF88]/90 text-black font-mono font-bold tracking-wider rounded text-xs uppercase transition-all cursor-pointer"
                >
                  Accept Terms
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
