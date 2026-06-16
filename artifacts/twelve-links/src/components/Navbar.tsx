import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
  ];

 return (
  <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-[#00FF88]/20" : "bg-transparent border-b border-transparent"}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        
        {/* ── Navbar Logo Block ── */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center gap-3 group">
            <img 
            src="/Logo.jpg" 
              alt="12 Links Logo" 
              className="w-12 h-12 object-contain transition-transform group-hover:scale-105" 
            />
            <span className="text-2xl font-bold tracking-tighter text-white">
              12<span className="text-[#00FF88] transition-colors group-hover:text-[#00FF88]/80">Links</span>
            </span>
          </Link>
        </div>
        
        {/* ── Navigation Links ── */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            {links.map((link) => (
              <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors px-3 py-2 rounded-md text-sm font-medium tracking-wide uppercase ${
                    location === link.href ? "text-[#00FF88]" : "text-gray-300 hover:text-[#00FF88]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-[#00FF88]/20 absolute w-full"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location === link.href ? "text-[#00FF88] bg-white/5" : "text-gray-300 hover:text-[#00FF88] hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
