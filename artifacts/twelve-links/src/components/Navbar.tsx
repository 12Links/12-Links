import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] bg-[#00FF88] text-black px-4 py-2 rounded font-bold text-xs uppercase"
      >
        Skip to main content
      </a>

      <nav
        aria-label="Main Navigation"
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0A0F]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40 py-3"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* ── Navbar Brand Block ── */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-3 group" aria-label="12 Links Homepage">
                <img 
                  src="/12links_logo.svg" 
                  alt="12 Links Logo" 
                  className="w-10 h-10 object-contain transition-transform group-hover:scale-105" 
                />
                <span className="text-2xl font-bold tracking-tighter text-white">
                  12<span className="text-[#00FF88] transition-colors group-hover:text-[#00FF88]/80">Links</span>
                </span>
              </Link>
            </div>
            
            {/* ── Navigation Links (Desktop) ── */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {links.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-2 rounded-lg text-xs font-mono font-medium tracking-wider uppercase transition-colors ${
                      isActive
                        ? "text-[#00FF88]"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-[#00FF88]/10 border border-[#00FF88]/30 rounded-lg -z-10"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* ── Right CTA Button (Desktop) ── */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#00FF88] text-black font-bold px-4 py-2 rounded-lg hover:bg-[#00FF88]/90 transition-all text-xs font-mono tracking-wider uppercase shadow-md shadow-[#00FF88]/20 group"
              >
                Start a Project
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
            
            {/* ── Mobile Hamburger Toggle ── */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#00FF88]"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-6 w-6 text-[#00FF88]" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* ── Mobile Drawer ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-[#0A0A0F]/98 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                {links.map((link) => {
                  const isActive = location === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-sm font-mono tracking-wider uppercase transition-colors ${
                        isActive 
                          ? "text-[#00FF88] bg-[#00FF88]/10 border border-[#00FF88]/30 font-bold" 
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                <div className="pt-4 border-t border-white/10">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full flex items-center justify-center gap-2 bg-[#00FF88] text-black font-bold px-4 py-3.5 rounded-lg text-xs font-mono uppercase tracking-wider"
                  >
                    Start a Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
