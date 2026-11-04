import { Link } from "wouter";
import { 
  ArrowRight, 
  ExternalLink, 
  Cpu, 
  Terminal, 
  Layers, 
  Check, 
  HardDrive, 
  ShieldCheck, 
  Code2, 
  Smartphone, 
  Eye, 
  Radio
} from "lucide-react";

export default function Work() {
  const referenceArchitectures = [
    {
      id: "fintech-pipeline",
      category: "Fintech & Streaming Data",
      title: "Real-Time Transaction Risk Pipeline",
      type: "Reference Architecture",
      overview: "A reference implementation for scoring high-frequency EFT and mobile payment events using streaming feature stores and containerized FastAPI inference services.",
      architectureDetails: [
        "Stateless mTLS ingestion endpoint terminating incoming transaction webhooks",
        "In-memory Redis feature store computing velocity counters and device heuristics",
        "Containerized machine learning inference service evaluating anomaly indicators",
        "Cryptographically signed audit trail formatted for POPIA data residency compliance"
      ],
      stack: ["Python", "FastAPI", "Redis", "Scikit-Learn", "PostgreSQL", "Docker"]
    },
    {
      id: "offline-telemetry",
      category: "Distributed Systems & Mobile",
      title: "Offline-First Field Telemetry Engine",
      type: "Reference Architecture",
      overview: "A local-first mobile data synchronization architecture using SQLite and conflict-free state merging for field operations in low-connectivity environments.",
      architectureDetails: [
        "Local embedded SQLite storage on client mobile devices for continuous write availability",
        "Deterministic conflict resolution algorithm merging field records during GSM reconnection",
        "Delta compression minimizing cellular data usage over constrained 2G/3G networks",
        "Background synchronization daemon with exponential retry and transaction boundaries"
      ],
      stack: ["React Native", "TypeScript", "SQLite", "Python", "FastAPI", "PostgreSQL"]
    },
    {
      id: "edge-vision",
      category: "Computer Vision & Industrial IoT",
      title: "Edge Visual Inspection Pipeline",
      type: "Reference Architecture",
      overview: "A low-latency optical defect detection pipeline designed for local hardware execution and real-time plant floor alerting.",
      architectureDetails: [
        "High-throughput camera frame ingestion via industrial streaming protocols",
        "Quantized deep learning model executing on local edge accelerators",
        "Sub-millisecond digital trigger interface communicating with PLC sorting hardware",
        "Local telemetry logging with asynchronous synchronization to central monitoring"
      ],
      stack: ["Python", "PyTorch", "OpenCV", "TensorRT", "FastAPI", "Grafana"]
    }
  ];

  return (
    <div className="bg-background text-foreground min-h-screen py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Page Header ── */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-3">
            PROJECTS & ARCHITECTURE
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-foreground tracking-tight mb-5">
            Systems and reference builds.
          </h1>
          <p className="text-secondary text-lg leading-relaxed font-normal">
            Selected internal products and reference architectures developed by the 12 Links engineering team in Pretoria.
          </p>
        </div>

        {/* ── Featured Internal Product: AXIS OS ── */}
        <div className="mb-20">
          <div className="rounded-lg bg-card border border-border p-8 sm:p-12 shadow-sm">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-border">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">
                  Internal Product · 12 Links & Axis Technologies
                </span>
                <h2 className="text-3xl font-semibold text-foreground">
                  AXIS OS
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/12Links"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium px-3.5 py-2 rounded-md bg-muted text-foreground border border-border hover:bg-muted/80 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  GitHub Repository
                </a>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 items-start">
              
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Systems & Operating System Engineering
                  </h3>
                  <p className="text-secondary text-base leading-relaxed font-normal">
                    A custom Linux-based operating system engineered for developers and high-performance desktop workflows. Built with pre-configured development toolchains (Rust, Python, C/C++, Next.js), atomic kernel and package updates, a refined desktop UI, and native cross-device file sharing.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Core Engineering Focus
                  </h4>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2.5 text-sm text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                      <span>Custom Linux kernel configuration optimized for low-latency developer tasks</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                      <span>Atomic system package manager with transactional rollbacks</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                      <span>Pre-configured development runtime environments for modern systems programming</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                      <span>Native hardware driver integration and low-overhead desktop compositor</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-md bg-muted/40 border border-border space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border text-xs text-muted-foreground">
                  <span className="font-mono text-foreground font-medium">axis-system-spec.conf</span>
                  <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400">Active Build</span>
                </div>

                <div className="space-y-2 text-xs font-mono text-secondary">
                  <div className="flex justify-between py-1 border-b border-border/50">
                    <span className="text-muted-foreground">Kernel:</span>
                    <span>Custom Linux 6.x LTS</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/50">
                    <span className="text-muted-foreground">Toolchains:</span>
                    <span>Rust, C/C++, Python 3.12, Node.js</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/50">
                    <span className="text-muted-foreground">Updates:</span>
                    <span>Transactional / Atomic OStree</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/50">
                    <span className="text-muted-foreground">Display Server:</span>
                    <span>Wayland Native Compositor</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-muted-foreground">Partnership:</span>
                    <span>12 Links & Axis Technologies</span>
                  </div>
                </div>

                <div className="pt-3">
                  <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    Systems Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Linux Kernel", "Rust", "C/C++", "Wayland", "Bash", "Systemd"].map((t, idx) => (
                      <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-card border border-border text-secondary">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ── Reference Architectures Section ── */}
        <div className="mb-24">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-2">
              REFERENCE ARCHITECTURES
            </div>
            <h2 className="text-3xl font-semibold text-foreground tracking-tight mb-3">
              Production blueprints and system patterns
            </h2>
            <p className="text-secondary text-base leading-relaxed font-normal">
              These reference implementations demonstrate our architectural patterns for distributed data, edge computing, and high-frequency transactions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {referenceArchitectures.map((arch) => (
              <div 
                key={arch.id}
                className="p-8 rounded-lg bg-card border border-border flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block mb-1">
                      {arch.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">
                      {arch.title}
                    </h3>
                  </div>

                  <p className="text-secondary text-sm leading-relaxed font-normal">
                    {arch.overview}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-2">
                      Key Architectural Components
                    </h4>
                    <ul className="space-y-2">
                      {arch.architectureDetails.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-secondary">
                          <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-2">
                    Technology Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {arch.stack.map((t, idx) => (
                      <span 
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom Scoping Callout ── */}
        <div className="p-10 rounded-lg bg-card border border-border text-center max-w-3xl mx-auto shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3">
            Reviewing architecture for an upcoming build?
          </h2>
          <p className="text-secondary text-sm mb-6 max-w-xl mx-auto leading-relaxed">
            Our systems engineers can evaluate your requirements, design technical specifications, and establish a milestone schedule.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md text-sm transition-colors shadow-sm cursor-pointer"
          >
            Schedule a Technical Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
