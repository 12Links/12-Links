import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { resolvedTheme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

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
    { name: "Capabilities", href: "/services" },
    { name: "Projects & Architecture", href: "/work" },
    { name: "Industries", href: "/industries" },
    { name: "Governance & Trust", href: "/trust" },
    { name: "Technical Notes", href: "/insights" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] bg-blue-600 text-white px-4 py-2 rounded-md font-medium text-xs"
      >
        Skip to main content
      </a>

      <nav
        aria-label="Main Navigation"
        className={`w-full transition-all duration-200 ${
          scrolled
            ? "bg-white/95 dark:bg-[#090D16]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm py-3"
            : "bg-transparent border-b border-slate-200/50 dark:border-slate-800/50 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2.5 group" aria-label="12 Links Homepage">
                <img 
                  src="/12links_logo.svg" 
                  alt="12 Links Logo" 
                  className="w-8 h-8 sm:w-9 sm:h-9 object-contain transition-transform group-hover:scale-105" 
                />
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                  12<span className="text-blue-600 dark:text-blue-400">Links</span>
                </span>
              </Link>
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {links.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-md text-xs xl:text-sm font-medium transition-colors ${
                      isActive
                        ? "text-slate-900 dark:text-slate-50 bg-slate-100 dark:bg-slate-800 font-semibold"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Right Controls (Theme Toggle + CTA) */}
            <div className="hidden md:flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-md bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all cursor-pointer"
                title={resolvedTheme === "dark" ? "Switch to Architectural Light Mode" : "Switch to Matte Carbon Dark Mode"}
                aria-label="Toggle Theme"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md text-xs xl:text-sm transition-colors shadow-sm cursor-pointer"
              >
                Start a Project
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            
            {/* Mobile Header Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-md bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all cursor-pointer"
                aria-label="Toggle Theme"
              >
                {resolvedTheme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 p-2 rounded-md border border-slate-200 dark:border-slate-800 focus:outline-none cursor-pointer"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-5 w-5 text-slate-900 dark:text-slate-50" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-[#090D16]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2"
            >
              <div className="flex flex-col space-y-1">
                <Link
                  href="/"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location === "/" ? "text-slate-900 dark:text-slate-50 bg-slate-100 dark:bg-slate-800 font-semibold" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                  }`}
                >
                  Home
                </Link>
                {links.map((link) => {
                  const isActive = location === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        isActive
                          ? "text-slate-900 dark:text-slate-50 bg-slate-100 dark:bg-slate-800 font-semibold"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2.5 rounded-md text-sm transition-colors cursor-pointer"
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
