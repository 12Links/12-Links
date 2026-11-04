import React, { useRef, useState, useEffect } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValue, 
  useMotionTemplate 
} from "framer-motion";
import { 
  ArrowRight, 
  Brain, 
  Code2, 
  Smartphone, 
  Cloud, 
  Check, 
  ExternalLink,
  ChevronRight,
  Database,
  Layers,
  Cpu,
  RefreshCw
} from "lucide-react";
import { Link } from "wouter";

/* =========================================================================
   1. MAGNETIC BUTTON COMPONENT (Tactile ±6px Cursor Pull)
   ========================================================================= */
function MagneticButton({ 
  children, 
  className = "", 
  onClick 
}: { 
  children: React.ReactNode; 
  className?: string; 
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = Math.max(-6, Math.min(6, (e.clientX - centerX) * 0.2));
    const offsetY = Math.max(-6, Math.min(6, (e.clientY - centerY) * 0.2));
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================================
   2. INTERACTIVE BLUEPRINT GRID HERO BACKGROUND CANVAS
   ========================================================================= */
function HeroBlueprintCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 25 });

  const maskImage = useMotionTemplate`radial-gradient(380px circle at ${springX}px ${springY}px, black, transparent)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      {/* Base Grid Layer (Subtle hairline 64px x 64px) */}
      <svg className="absolute inset-0 w-full h-full stroke-slate-200/50 dark:stroke-slate-800/50">
        <defs>
          <pattern id="hero-base-grid" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 64 0 L 0 0 0 64" fill="none" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-base-grid)" />
      </svg>

      {/* Kinetic Signal Lines (Horizontal & Vertical Pulse tracks) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Signal Line 1: Horizontal Cobalt */}
        <motion.line
          x1="0"
          y1="192"
          x2="100%"
          y2="192"
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeDasharray="160 320"
          animate={{ strokeDashoffset: [0, -960] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          opacity={0.65}
        />
        {/* Signal Line 2: Horizontal Ochre */}
        <motion.line
          x1="0"
          y1="384"
          x2="100%"
          y2="384"
          stroke="#D97706"
          strokeWidth="1.5"
          strokeDasharray="120 400"
          animate={{ strokeDashoffset: [0, 1040] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          opacity={0.6}
        />
        {/* Signal Line 3: Vertical Cobalt */}
        <motion.line
          x1="384"
          y1="0"
          x2="384"
          y2="100%"
          stroke="#3B82F6"
          strokeWidth="1"
          strokeDasharray="100 280"
          animate={{ strokeDashoffset: [0, -760] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          opacity={0.5}
        />
      </svg>

      {/* Interactive Cursor Spotlight Mask Layer */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          maskImage,
          WebkitMaskImage: maskImage
        }}
      >
        <svg className="w-full h-full stroke-blue-600/40 dark:stroke-blue-400/50">
          <defs>
            <pattern id="hero-spotlight-grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" strokeWidth="1" />
              {/* Intersection Crosshair (+) */}
              <path d="M -3 0 L 3 0 M 0 -3 L 0 3" stroke="#3B82F6" strokeWidth="1.2" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-spotlight-grid)" />
        </svg>
      </motion.div>
    </div>
  );
}

/* =========================================================================
   3. 3D PERSPECTIVE TILT BENTO CARD COMPONENT
   ========================================================================= */
function TiltBentoCard({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rX = Math.max(-4, Math.min(4, ((y - rect.height / 2) / (rect.height / 2)) * -4));
    const rY = Math.max(-4, Math.min(4, ((x - rect.width / 2) / (rect.width / 2)) * 4));

    setRotateX(rX);
    setRotateY(rY);
    setSpotlightPos({ x, y });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000
      }}
      className={`relative group rounded-lg ${className}`}
    >
      <div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
        className="w-full h-full bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-lg p-8 shadow-sm flex flex-col justify-between overflow-hidden relative"
      >
        {/* Dynamic Cursor Spotlight on Card */}
        {isHovered && (
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              background: `radial-gradient(360px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(59, 130, 246, 0.12), transparent 75%)`
            }}
          />
        )}
        {children}
      </div>
    </div>
  );
}

/* =========================================================================
   MAIN HOMEPAGE COMPONENT
   ========================================================================= */
export default function Hero() {
  const headlineWords = [
    "Custom", "software", "and", "applied", "AI", "built", "for", "South", "African", "enterprise."
  ];

  const commitments = [
    {
      title: "Fixed-Scope Milestones",
      desc: "Structured delivery with clear approval gates before payment."
    },
    {
      title: "100% IP Ownership",
      desc: "Complete handover of repositories, model weights, and documentation."
    },
    {
      title: "In-Country Deployment",
      desc: "Configured for South African cloud regions or on-premise infrastructure."
    },
    {
      title: "30-Day Warranty",
      desc: "Active post-deployment engineering support and bug resolution."
    }
  ];

  const marqueeTech = [
    "PyTorch", "FastAPI", "TypeScript", "Next.js", "React Native",
    "PostgreSQL", "pgvector", "Rust", "Linux Kernel", "Docker",
    "Kubernetes", "Terraform", "SQLite", "DuckDB", "OpenCV", "Airflow"
  ];

  const deliverySteps = [
    {
      number: "01",
      title: "Architecture & Scope",
      description: "We review your technical requirements, define data models and system boundaries, and agree on a fixed milestone schedule before writing code."
    },
    {
      number: "02",
      title: "Iterative Engineering",
      description: "We ship working software to staging every two weeks. Your team has direct access to Git repositories and reviews every milestone before sign-off."
    },
    {
      number: "03",
      title: "Deployment & Handover",
      description: "We deploy directly to your environment, transfer all source code and documentation, and provide 30 days of post-launch warranty support."
    }
  ];

  // Parallax Scroll Reference for chuse. Showcase Section
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: parallaxProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });
  const parallaxY = useTransform(parallaxProgress, [0, 1], [-24, 24]);

  // Delivery Timeline Scroll Reference
  const deliveryRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: deliveryProgress } = useScroll({
    target: deliveryRef,
    offset: ["start center", "end center"]
  });
  const deliveryScaleY = useSpring(deliveryProgress, { stiffness: 100, damping: 20 });

  return (
    <div className="bg-[#090D16] text-slate-50 transition-colors relative selection:bg-blue-600 selection:text-white">
      
      {/* ─────────────────────────────────────────────────────────────────
          1. INTERACTIVE BLUEPRINT GRID & SPLIT-WORD 3D HERO SECTION
          ───────────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
        
        {/* Hardware-Accelerated Interactive Blueprint Grid Canvas */}
        <HeroBlueprintCanvas />

        {/* Foreground Content */}
        <div className="relative z-10 max-w-4xl text-left">
          
          {/* Monumental Split-Word 3D H1 Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.06] mb-6 text-slate-900 dark:text-slate-50">
            {headlineWords.map((word, idx) => (
              <span key={idx} className="inline-block overflow-hidden mr-[0.25em] align-top">
                <motion.span
                  initial={{ y: "100%", rotateX: 12, opacity: 0.01 }}
                  animate={{ y: "0%", rotateX: 0, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.04,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="inline-block transform-gpu"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0.01, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-10 max-w-2xl font-normal"
          >
            12 Links designs, builds, and deploys production web platforms, mobile applications, and machine learning systems. Every engagement runs on fixed-scope milestones with complete source code handover.
          </motion.p>

          {/* Magnetic CTA Buttons */}
          <motion.div
            initial={{ opacity: 0.01, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <MagneticButton>
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-medium px-7 py-3.5 rounded-md text-sm transition-all shadow-sm cursor-pointer w-full sm:w-auto"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 font-medium px-6 py-3.5 rounded-md text-sm transition-colors cursor-pointer w-full sm:w-auto"
              >
                <span>View Capabilities</span>
              </Link>
            </MagneticButton>
          </motion.div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          2. SCROLL-TRIGGERED COUNTER & COMMITMENTS BENTO STRIP
          ───────────────────────────────────────────────────────────────── */}
      <section className="border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-800">
            {commitments.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0.01, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-6 sm:p-8 overflow-hidden bg-[#090D16] transition-colors"
              >
                {/* Expand-on-hover Top Highlight Bar */}
                <span className="absolute top-0 left-0 h-[2px] w-0 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300" />
                
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          3. INFINITE KINETIC TECH STACK MARQUEE
          ───────────────────────────────────────────────────────────────── */}
      <section className="py-8 border-b border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50/50 dark:bg-slate-900/30">
        <div
          className="max-w-7xl mx-auto px-4"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)"
          }}
        >
          <div className="animate-marquee flex items-center gap-4">
            {[...marqueeTech, ...marqueeTech].map((tech, idx) => (
              <span
                key={idx}
                className="bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 px-3.5 py-1.5 rounded-md text-xs font-mono font-medium shadow-sm shrink-0 whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          4. INTERACTIVE 3D TILT & CURSOR-SPOTLIGHT BENTO GRID
          ───────────────────────────────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
            CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight mb-4">
            Engineering capabilities
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed font-normal">
            We build end-to-end systems from backend data infrastructure to customer-facing applications.
          </p>
        </div>

        {/* Asymmetric 12-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Applied AI & Machine Learning (7 Columns) */}
          <TiltBentoCard className="md:col-span-7">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Brain className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400">AI / ML</span>
              </div>

              {/* Custom SVG Vector Network Animation */}
              <div className="h-32 w-full rounded-md bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center justify-center relative overflow-hidden">
                <svg className="w-full h-full stroke-slate-300 dark:stroke-slate-700">
                  {/* Connecting Web Lines */}
                  <line x1="20%" y1="50%" x2="50%" y2="25%" strokeWidth="1.2" />
                  <line x1="20%" y1="50%" x2="50%" y2="75%" strokeWidth="1.2" />
                  <line x1="50%" y1="25%" x2="80%" y2="50%" strokeWidth="1.2" />
                  <line x1="50%" y1="75%" x2="80%" y2="50%" strokeWidth="1.2" />
                  <line x1="50%" y1="25%" x2="50%" y2="75%" strokeWidth="1.2" />

                  {/* Traveling Pulse Line */}
                  <motion.line
                    x1="20%"
                    y1="50%"
                    x2="80%"
                    y2="50%"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    strokeDasharray="40 120"
                    animate={{ strokeDashoffset: [0, -160] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Nodes */}
                  <circle cx="20%" cy="50%" r="5" className="fill-blue-600 dark:fill-blue-400" />
                  <circle cx="50%" cy="25%" r="4" className="fill-slate-600 dark:fill-slate-300" />
                  <circle cx="50%" cy="75%" r="4" className="fill-slate-600 dark:fill-slate-300" />
                  <circle cx="80%" cy="50%" r="5" className="fill-amber-600 dark:fill-amber-400" />
                </svg>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-2">
                  Applied AI & Machine Learning
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-normal">
                  Custom language model workflows, document retrieval pipelines, computer vision inspection, and predictive analytics tailored to your operational data.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
                {["Python", "PyTorch", "FastAPI", "PostgreSQL", "pgvector", "Docker"].map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </TiltBentoCard>

          {/* Card 2: Web Platforms & Internal Tools (5 Columns) */}
          <TiltBentoCard className="md:col-span-5">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400">Web</span>
              </div>

              {/* Layered Isometric Wireframe Panels that fan apart on hover */}
              <div className="h-32 w-full rounded-md bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center justify-center relative overflow-hidden">
                <div className="relative w-40 h-20 transition-transform duration-300 group-hover:scale-105">
                  <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded shadow-sm transform -translate-y-2 -translate-x-2 transition-transform duration-300 group-hover:-translate-y-4 group-hover:-translate-x-4 opacity-70" />
                  <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 rounded shadow-sm transform transition-transform duration-300" />
                  <div className="absolute inset-0 bg-white dark:bg-slate-800 border border-blue-500/50 dark:border-blue-400/50 rounded shadow-md transform translate-y-2 translate-x-2 transition-transform duration-300 group-hover:translate-y-4 group-hover:translate-x-4 p-2 flex flex-col justify-between">
                    <div className="h-1.5 w-12 bg-blue-600 dark:bg-blue-400 rounded-full" />
                    <div className="space-y-1">
                      <div className="h-1 w-full bg-slate-200 dark:bg-slate-700 rounded" />
                      <div className="h-1 w-2/3 bg-slate-200 dark:bg-slate-700 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-2">
                  Web Platforms & Internal Tools
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-normal">
                  High-throughput web applications, client portals, and operational dashboards engineered for speed, reliability, and clean user experience.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
                {["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"].map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </TiltBentoCard>

          {/* Card 3: Mobile & Offline-Ready Applications (5 Columns) */}
          <TiltBentoCard className="md:col-span-5">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400">Mobile</span>
              </div>

              {/* Bi-Directional Sync Packet Animation */}
              <div className="h-32 w-full rounded-md bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 relative overflow-hidden">
                <div className="flex flex-col items-center gap-1 z-10">
                  <div className="w-8 h-10 rounded-sm border-2 border-slate-400 dark:border-slate-600 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400">SQLite Edge</span>
                </div>

                {/* Curved Connection Path */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <path
                    d="M 60 64 Q 160 30 260 64"
                    fill="none"
                    stroke="currentColor"
                    className="text-slate-300 dark:text-slate-700"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <motion.circle
                    r="3.5"
                    fill="#3B82F6"
                    animate={{
                      cx: [60, 160, 260, 160, 60],
                      cy: [64, 47, 64, 47, 64]
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </svg>

                <div className="flex flex-col items-center gap-1 z-10">
                  <div className="w-8 h-10 rounded-sm border-2 border-slate-400 dark:border-slate-600 flex items-center justify-center">
                    <Database className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400">Cloud Sync</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-2">
                  Mobile & Offline-Ready Applications
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-normal">
                  Cross-platform iOS and Android applications built for reliable field performance, with local data caching and background synchronization when connectivity drops.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
                {["React Native", "Flutter", "SQLite", "REST & WebSockets"].map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </TiltBentoCard>

          {/* Card 4: Cloud Infrastructure & Systems Engineering (7 Columns) */}
          <TiltBentoCard className="md:col-span-7">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Cloud className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400">Infra</span>
              </div>

              {/* Kinetic Pipeline Container Slots */}
              <div className="h-32 w-full rounded-md bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center justify-around px-6 relative overflow-hidden">
                {[0, 1, 2, 3].map((slotIdx) => (
                  <div
                    key={slotIdx}
                    className="flex flex-col items-center gap-2"
                  >
                    <motion.div
                      whileHover={{ y: -4, scale: 1.05 }}
                      className="w-12 h-14 rounded-md bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center shadow-sm"
                    >
                      <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400 mb-1" />
                      <span className="text-[9px] font-mono font-medium text-slate-600 dark:text-slate-400">C{slotIdx + 1}</span>
                    </motion.div>
                    <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-2">
                  Cloud Infrastructure & Systems Engineering
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-normal">
                  Containerized backends, automated CI/CD pipelines, custom systems development, and secure cloud deployments across AWS, Azure, and Linux environments.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
                {["Linux", "Rust", "C/C++", "Docker", "Kubernetes", "Terraform"].map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </TiltBentoCard>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          5. FEATURED ENGINEERING SPOTLIGHT: CHUSE. (PRODUCTION PLATFORM)
          ───────────────────────────────────────────────────────────────── */}
      <section ref={parallaxRef} className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800">
        <div className="rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-sm overflow-hidden relative">
          
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>FEATURED PRODUCTION SYSTEM · LIVE APPLICATION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight leading-tight">
                chuse. — South African supermarket price comparison & basket optimizer.
              </h2>

              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed font-normal">
                Engineered and launched by 12 Links, chuse. is a production grocery intelligence engine tracking real-time prices across South Africa&apos;s leading retailers—including Checkers, Woolworths, Pick n Pay, Shoprite, SPAR, Boxer, and Food Lover&apos;s Market. The platform uses a dynamic integer programming model to optimize multi-store shopping routes, reducing household basket totals by up to 30%.
              </p>

              {/* Spec Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "7 Retailer Feeds",
                  "Multi-Store Basket Optimizer",
                  "Real-Time Rand Savings",
                  "Community Price Checks",
                  "Exportable Receipts"
                ].map((pill, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 font-medium"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://chuse-chi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-md text-sm transition-all shadow-sm cursor-pointer"
                >
                  <span>Launch Live App</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span>Read Technical Blueprint</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Abstract Geometric Parallax Basket Optimizer Card */}
            <div className="lg:col-span-5 relative">
              <motion.div
                style={{ y: parallaxY }}
                className="rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-md space-y-4"
              >
                {/* Window Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 text-xs">
                  <div className="flex items-center gap-2 font-mono text-slate-700 dark:text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>chuse-chi.vercel.app</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">Production Live</span>
                </div>

                {/* Basket Optimizer Comparison Box */}
                <div className="space-y-2.5">
                  <div className="p-3.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                    <div>
                      <div className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-mono tracking-wider">Multi-Store Basket</div>
                      <div className="text-slate-900 dark:text-slate-50 font-bold text-base font-mono">R 412.50</div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 font-mono text-xs font-semibold">
                        Save R 176.50 (30.0%)
                      </span>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">vs. R 589.00 baseline</div>
                    </div>
                  </div>

                  {/* Retailer Allocation Feed */}
                  <div className="space-y-1.5 text-xs font-mono">
                    <div className="p-2.5 rounded bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span className="text-slate-900 dark:text-slate-200 font-medium">Checkers</span>
                      </div>
                      <span className="text-slate-600 dark:text-slate-400 text-[11px]">3 items · R 148.00</span>
                    </div>

                    <div className="p-2.5 rounded bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span className="text-slate-900 dark:text-slate-200 font-medium">Woolworths</span>
                      </div>
                      <span className="text-slate-600 dark:text-slate-400 text-[11px]">2 items · R 112.50</span>
                    </div>

                    <div className="p-2.5 rounded bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        <span className="text-slate-900 dark:text-slate-200 font-medium">Shoprite</span>
                      </div>
                      <span className="text-slate-600 dark:text-slate-400 text-[11px]">4 items · R 152.00</span>
                    </div>
                  </div>
                </div>

                {/* Footer spec bar */}
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Gauteng & Western Cape Engine</span>
                  <a
                    href="https://chuse-chi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-medium"
                  >
                    <span>chuse.live</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          6. SCROLL-LINKED "HOW WE DELIVER" TIMELINE & FINALE CTA
          ───────────────────────────────────────────────────────────────── */}
      <section ref={deliveryRef} className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800">
        
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
            DELIVERY MODEL
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight mb-4">
            How we deliver
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-normal text-base">
            We work alongside your team in transparent two-week sprints without open-ended retainers.
          </p>
        </div>

        {/* 3-Stage Progress Timeline with Continuous Beam */}
        <div className="relative grid md:grid-cols-3 gap-8 mb-24">
          
          {deliverySteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0.01, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-400 transition-colors flex flex-col justify-between shadow-sm relative group"
            >
              <div>
                <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 block mb-3">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* High-Impact Finale CTA Container with Corner Brackets */}
        <div className="relative p-10 sm:p-14 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-center max-w-3xl mx-auto shadow-sm overflow-hidden group">
          
          {/* Animated Geometric Corner Brackets */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-slate-300 dark:border-slate-700 group-hover:border-blue-600 dark:group-hover:border-blue-400 transition-colors pointer-events-none" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-slate-300 dark:border-slate-700 group-hover:border-blue-600 dark:group-hover:border-blue-400 transition-colors pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-slate-300 dark:border-slate-700 group-hover:border-blue-600 dark:group-hover:border-blue-400 transition-colors pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-slate-300 dark:border-slate-700 group-hover:border-blue-600 dark:group-hover:border-blue-400 transition-colors pointer-events-none" />

          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-50 mb-4 tracking-tight">
            Ready to scope your next system?
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-base mb-8 font-normal leading-relaxed max-w-xl mx-auto">
            Speak directly with our engineering leads in Pretoria. We review your requirements and return a clear technical scope within one business day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-medium px-7 py-3.5 rounded-md text-sm transition-colors shadow-sm cursor-pointer"
              >
                <span>Book a Technical Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <a
                href="mailto:info@12links.co.za"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-50 font-medium px-6 py-3.5 rounded-md text-sm transition-colors cursor-pointer"
              >
                <span>info@12links.co.za</span>
              </a>
            </MagneticButton>
          </div>
        </div>

      </section>

    </div>
  );
}
