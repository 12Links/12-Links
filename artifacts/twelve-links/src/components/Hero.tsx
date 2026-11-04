import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  Code2,
  Brain,
  Smartphone,
  Cloud,
  Layers,
  Cpu,
  MapPin,
  Sparkles,
  Server,
  Key,
  Scale
} from "lucide-react";
import { Link } from "wouter";
import TechVisualizer from "./TechVisualizer";

export default function Hero() {
  const capabilities = [
    {
      icon: Brain,
      title: "Applied AI & Custom Intelligent Systems",
      description: "Fine-tuned language models, retrieval-augmented generation (RAG) pipelines, computer vision inspection, and domain-specific AI agents built strictly within POPIA data residency boundaries.",
      stack: ["Python", "PyTorch", "FastAPI", "PGvector", "Hugging Face", "Triton"]
    },
    {
      icon: Code2,
      title: "Full-Stack Web & Enterprise Platforms",
      description: "High-performance web applications, customer portals, and internal operations dashboards designed for rapid responsiveness, clean UX, and high concurrent transaction throughput.",
      stack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "TailwindCSS"]
    },
    {
      icon: Smartphone,
      title: "Mobile & Offline-First Architectures",
      description: "Cross-platform iOS and Android apps engineered for African connectivity realities — featuring local SQLite caching, graceful degradation, and resilient background synchronization.",
      stack: ["React Native", "Flutter", "SQLite", "Firebase", "WebSockets"]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure, APIs & DevOps",
      description: "Automated CI/CD pipelines, containerized microservices, and secure cloud environments configured on AWS Cape Town (af-south-1) and Azure with POPIA data governance.",
      stack: ["Docker", "Kubernetes", "AWS Cape Town", "GitHub Actions", "Terraform"]
    }
  ];

  return (
    <div className="bg-background text-foreground transition-colors">
      
      {/* ── 1. HERO SECTION (ENTERPRISE OUTCOMES & TECH VISUALIZER) ── */}
      <section className="pt-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Enterprise Positioning & Hard Metrics */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Production AI & Distributed Software Systems // South Africa</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              Production AI systems and high-throughput software architectures built for African enterprise.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl font-normal">
              We engineer custom machine learning models, resilient web platforms, and data pipelines with sub-40ms latency on AWS Cape Town—backed by milestone-gated billing, complete source code handover, and strict POPIA compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3.5 rounded-xl text-sm transition-colors shadow-sm cursor-pointer"
              >
                Schedule an Architecture Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 border border-border hover:border-foreground/30 hover:bg-muted text-foreground font-medium px-6 py-3.5 rounded-xl text-sm transition-colors cursor-pointer"
              >
                Explore Reference Architectures
              </Link>
            </div>

            {/* Direct Commercial Differentiators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border">
              <div>
                <span className="text-lg sm:text-xl font-bold font-mono text-emerald-400 block">&lt; 40ms</span>
                <span className="text-xs text-muted-foreground">AWS Cape Town (af-south-1)</span>
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold font-mono text-foreground block">100%</span>
                <span className="text-xs text-muted-foreground">Source Code IP Handover</span>
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold font-mono text-emerald-400 block">POPIA</span>
                <span className="text-xs text-muted-foreground">Act No. 4 Strict Compliance</span>
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold font-mono text-foreground block">Milestone</span>
                <span className="text-xs text-muted-foreground">Risk-Free Staged Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enterprise Engineering Console */}
          <div className="lg:col-span-5">
            <TechVisualizer />
          </div>

        </div>
      </section>

      {/* ── 2. TRUST & GOVERNANCE HIGHLIGHT STRIP ── */}
      <section className="py-12 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                Enterprise Trust & Verification
              </span>
              <h3 className="text-lg font-bold text-foreground">
                Built for corporate procurement and rigorous regulatory audits.
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs">
              <Link 
                href="/trust" 
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-background border border-border text-foreground hover:border-emerald-500/50 transition-colors font-medium"
              >
                <Scale className="w-3.5 h-3.5 text-emerald-400" />
                POPIA Compliance Matrix
              </Link>
              <Link 
                href="/trust" 
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-background border border-border text-foreground hover:border-emerald-500/50 transition-colors font-medium"
              >
                <Key className="w-3.5 h-3.5 text-emerald-400" />
                100% IP Handover Guarantee
              </Link>
              <Link 
                href="/work" 
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium"
              >
                View Production Blueprints <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. CORE TECHNICAL CAPABILITIES ── */}
      <section id="capabilities" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-3xl mb-16">
          <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2">
            Engineering Disciplines
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Production software and custom machine learning.
          </h2>
          <p className="text-muted-foreground leading-relaxed font-normal">
            Whether you are deploying an intelligent automation pipeline or re-architecting a mission-critical backend, we deliver tested, documented systems tailored to your technical requirements.
          </p>
        </div>

        {/* 4 Core Capability Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-card border border-border hover:border-emerald-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-normal">
                    {cap.description}
                  </p>
                </div>

                <div>
                  <div className="text-[11px] text-muted-foreground font-mono mb-2 uppercase tracking-wider">
                    Core Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cap.stack.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-xs font-mono px-2.5 py-1 rounded bg-background text-muted-foreground border border-border font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reference Build Callout Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-card border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Production Blueprints Available</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              Explore our validated reference architectures.
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-normal">
              Review full data flows, benchmark metrics, and playable live sandboxes across Fintech, AgriTech, MedTech, and Manufacturing.
            </p>
          </div>

          <Link
            href="/work"
            className="shrink-0 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3.5 rounded-xl text-sm transition-colors cursor-pointer"
          >
            Inspect Technical Blueprints
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── 4. HOW WE WORK (STRUCTURED MILESTONE DELIVERY) ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-3xl mb-14">
          <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2">
            Delivery Model
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            How we partner with your engineering team.
          </h2>
          <p className="text-muted-foreground leading-relaxed font-normal">
            No ambiguous retainers or vendor lock-in. We operate on structured milestones where your engineering leads review and test functional software at each approval gate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="text-xs font-semibold text-emerald-400 mb-2 font-mono">Stage 01</div>
            <h3 className="text-lg font-bold text-foreground mb-2">Scoping & Architecture Spec</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-normal">
              We audit your requirements, define data contracts, and establish a fixed milestone budget and SLA schedule before any production code is committed.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="text-xs font-semibold text-emerald-400 mb-2 font-mono">Stage 02</div>
            <h3 className="text-lg font-bold text-foreground mb-2">Milestone Sprints</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-normal">
              We build in focused, bi-weekly sprints. Your team receives direct access to staging builds and Git repositories, testing functional features at each gate before sign-off.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="text-xs font-semibold text-emerald-400 mb-2 font-mono">Stage 03</div>
            <h3 className="text-lg font-bold text-foreground mb-2">Handover & 30-Day Warranty</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-normal">
              We deploy the solution directly to your cloud accounts (AWS Cape Town, Azure, or private server), execute 100% IP transfer, and provide 30 days of active defect warranty.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. FINAL DIRECT CALL TO ACTION ── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-14 rounded-2xl bg-card border border-border text-center max-w-3xl mx-auto shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Have a project scope or engineering bottleneck?
          </h2>
          <p className="text-muted-foreground text-base mb-8 font-normal leading-relaxed">
            Schedule a 20-minute technical consultation with our engineering leads. We evaluate your requirements and deliver a clear architecture specification within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-7 py-3.5 rounded-xl text-sm transition-colors cursor-pointer"
            >
              Schedule a Technical Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:info@12links.co.za"
              className="inline-flex items-center justify-center gap-2 border border-border hover:border-foreground/30 text-foreground font-medium px-6 py-3.5 rounded-xl text-sm transition-colors cursor-pointer"
            >
              Email info@12links.co.za
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
