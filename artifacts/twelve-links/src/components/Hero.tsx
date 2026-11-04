import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Code2, 
  Brain, 
  Smartphone, 
  Cloud, 
  Layers, 
  Cpu, 
  Server, 
  Key, 
  Check, 
  Terminal,
  Activity,
  Database,
  Lock
} from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  const capabilities = [
    {
      icon: Brain,
      title: "Applied AI & Machine Learning",
      description: "Custom language model workflows, document retrieval pipelines, computer vision inspection, and predictive analytics tailored to your operational data.",
      stack: ["Python", "PyTorch", "FastAPI", "PostgreSQL", "pgvector", "Docker"]
    },
    {
      icon: Code2,
      title: "Web Platforms & Internal Tools",
      description: "High-throughput web applications, client portals, and operational dashboards engineered for speed, reliability, and clean user experience.",
      stack: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"]
    },
    {
      icon: Smartphone,
      title: "Mobile & Offline-Ready Applications",
      description: "Cross-platform iOS and Android applications built for reliable field performance, with local data caching and background synchronization when connectivity drops.",
      stack: ["React Native", "Flutter", "SQLite", "REST & WebSockets"]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure & Systems Engineering",
      description: "Containerized backends, automated CI/CD pipelines, custom systems development, and secure cloud deployments across AWS, Azure, and Linux environments.",
      stack: ["Linux", "Rust", "C/C++", "Docker", "Kubernetes", "Terraform", "GitHub Actions"]
    }
  ];

  const commitments = [
    {
      title: "Fixed-Scope Milestones",
      desc: "Structured delivery with clear approval gates before payment."
    },
    {
      title: "Full IP Ownership",
      desc: "Complete handover of repositories, model weights, and documentation."
    },
    {
      title: "In-Country Deployment",
      desc: "Configured for South African cloud regions or on-premise infrastructure."
    },
    {
      title: "30-Day Production Warranty",
      desc: "Active post-deployment engineering support and bug resolution."
    }
  ];

  const steps = [
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

  return (
    <div className="bg-background text-foreground transition-colors">
      
      {/* ── 1. HERO SECTION ── */}
      <section className="pt-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Positioning & CTAs */}
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-4">
              SOFTWARE & AI ENGINEERING STUDIO · PRETORIA, SOUTH AFRICA
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
              Custom software and applied AI built for South African enterprise.
            </h1>

            <p className="text-lg text-secondary leading-relaxed mb-8 max-w-2xl font-normal">
              12 Links designs, builds, and deploys production web platforms, mobile applications, and machine learning systems. Every engagement runs on fixed-scope milestones with complete source code handover.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3.5 rounded-md text-sm transition-colors shadow-sm cursor-pointer"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-border hover:border-foreground/30 hover:bg-muted text-foreground font-medium px-6 py-3.5 rounded-md text-sm transition-colors cursor-pointer"
              >
                View Capabilities
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Systems Visualizer (Clean, high-tech, 0% neon) */}
          <div className="lg:col-span-5">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-border text-xs text-muted-foreground">
                <div className="flex items-center gap-2 font-mono">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span className="ml-1 text-foreground font-medium">systems-topology.svg</span>
                </div>
                <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400">Pretoria Core</span>
              </div>

              {/* Architectural Topology Nodes */}
              <div className="py-6 space-y-4">
                
                {/* Node 1: Client Edge / Ingestion */}
                <div className="p-3.5 rounded-md bg-muted/40 border border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-card border border-border text-blue-600 dark:text-blue-400">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground">Client Applications & Edge</div>
                      <div className="text-[11px] text-muted-foreground">Offline-first sync · Local SQLite · Web & Mobile</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-card border border-border text-muted-foreground">
                    Layer 01
                  </span>
                </div>

                {/* Flow Connector */}
                <div className="flex justify-center items-center py-0.5">
                  <div className="w-px h-4 bg-border" />
                </div>

                {/* Node 2: Core Processing & Machine Learning */}
                <div className="p-3.5 rounded-md bg-muted/40 border border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-card border border-border text-blue-600 dark:text-blue-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground">Inference & Application Core</div>
                      <div className="text-[11px] text-muted-foreground">FastAPI · PyTorch · Custom business logic</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-card border border-border text-muted-foreground">
                    Layer 02
                  </span>
                </div>

                {/* Flow Connector */}
                <div className="flex justify-center items-center py-0.5">
                  <div className="w-px h-4 bg-border" />
                </div>

                {/* Node 3: Data Tier & Governance */}
                <div className="p-3.5 rounded-md bg-muted/40 border border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-card border border-border text-blue-600 dark:text-blue-400">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground">Data Layer & Security</div>
                      <div className="text-[11px] text-muted-foreground">PostgreSQL · pgvector · AES-256 encryption</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-card border border-border text-muted-foreground">
                    Layer 03
                  </span>
                </div>

              </div>

              {/* Status bar */}
              <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-mono text-[11px]">Architecture Spec // v2026.4</span>
                <span className="text-[11px] text-foreground font-medium">100% Client-Owned</span>
              </div>
            </div>
          </div>

        </div>

        {/* Key Commitments Bar (4-Column Hairline Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 mt-12 border-t border-border">
          {commitments.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <h3 className="text-sm font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-xs text-secondary leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2. CORE CAPABILITIES SECTION (2x2 ARCHITECTURAL GRID) ── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight mb-4">
            Engineering capabilities
          </h2>
          <p className="text-secondary leading-relaxed font-normal text-base">
            We build end-to-end systems from backend data infrastructure to customer-facing applications.
          </p>
        </div>

        {/* 2x2 Architectural Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-lg bg-card border border-border hover:border-slate-400 dark:hover:border-slate-600 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-md bg-muted border border-border flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed mb-6 font-normal">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="text-[11px] text-muted-foreground font-mono mb-2 uppercase tracking-wider">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cap.stack.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted/60 text-secondary border border-border font-medium"
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
      </section>

      {/* ── 3. DELIVERY MODEL SECTION (3-COLUMN STEP GRID) ── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            DELIVERY MODEL
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight mb-4">
            How we deliver
          </h2>
          <p className="text-secondary leading-relaxed font-normal text-base">
            We work alongside your team in transparent two-week sprints without open-ended retainers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="p-8 rounded-lg bg-card border border-border flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 block mb-3">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. BOTTOM CTA SECTION ── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-14 rounded-lg bg-card border border-border text-center max-w-3xl mx-auto shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Ready to scope your next system?
          </h2>
          <p className="text-secondary text-base mb-8 font-normal leading-relaxed">
            Speak directly with our engineering leads in Pretoria. We review your requirements and return a clear technical scope within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-7 py-3.5 rounded-md text-sm transition-colors cursor-pointer"
            >
              Book a Technical Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:info@12links.co.za"
              className="inline-flex items-center justify-center gap-2 border border-border hover:border-foreground/30 text-foreground font-medium px-6 py-3.5 rounded-md text-sm transition-colors cursor-pointer"
            >
              info@12links.co.za
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
