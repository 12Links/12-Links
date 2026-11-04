import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sun, Moon, Sparkles } from "lucide-react";
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
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Insights", href: "/insights" },
    { name: "Trust & Security", href: "/trust" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] bg-emerald-500 text-white px-4 py-2 rounded font-medium text-xs"
      >
        Skip to main content
      </a>

      <nav
        aria-label="Main Navigation"
        className={`w-full transition-all duration-200 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm py-3"
            : "bg-transparent border-b border-transparent py-4 sm:py-5"
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
                <span className="text-xl font-bold tracking-tight text-foreground">
                  12<span className="text-emerald-400">Links</span>
                </span>
              </Link>
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
              {links.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-colors ${
                      isActive
                        ? "text-foreground bg-muted font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
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
                className="p-2 rounded-lg bg-card border border-border text-muted-foreground hover:text-foreground transition-all cursor-pointer"
                title={resolvedTheme === "dark" ? "Switch to High-Contrast Light Mode" : "Switch to Deep Dark Mode"}
                aria-label="Toggle Theme"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-emerald-600" />
                )}
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-4 py-2 rounded-lg text-xs xl:text-sm transition-colors shadow-sm cursor-pointer"
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
                className="p-2 rounded-lg bg-card border border-border text-muted-foreground hover:text-foreground transition-all cursor-pointer"
                aria-label="Toggle Theme"
              >
                {resolvedTheme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-emerald-600" />}
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="text-muted-foreground hover:text-foreground p-2 rounded-lg focus:outline-none cursor-pointer"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6" />}
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
              className="lg:hidden border-b border-border bg-background/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2"
            >
              <div className="flex flex-col space-y-1">
                <Link
                  href="/"
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${
                    location === "/" ? "text-foreground bg-muted font-semibold" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
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
                      className={`px-3 py-2 rounded-lg text-sm font-medium ${
                        isActive
                          ? "text-foreground bg-muted font-semibold"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-border">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-4 py-2.5 rounded-lg text-sm transition-colors cursor-pointer"
                >
                  Schedule a Technical Call
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
