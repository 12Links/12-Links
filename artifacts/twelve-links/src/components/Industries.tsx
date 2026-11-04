import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ChevronRight, Layers, Cpu, ShieldCheck, Server, Database, Activity } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      id: "fintech",
      title: "Fintech & Payment Infrastructure",
      subtitle: "High-throughput fraud prevention and mobile money credit engines",
      localContext: "South African Instant EFT switches, SASSA grant distribution points, and Pan-African mobile money gateways.",
      problem: "Payment switches face sophisticated SIM-swap fraud, credential stuffing, and loan approval bottlenecks when evaluating thin-file consumers.",
      architecture: [
        { step: "01", label: "Intake Gateway", detail: "Transaction stream ingestion via mTLS (< 15ms socket connection)", tech: "FastAPI + Envoy" },
        { step: "02", label: "Feature Store", detail: "Real-time velocity counters, device fingerprints, and SIM-state lookups", tech: "Redis In-Memory" },
        { step: "03", label: "Model Inference", detail: "XGBoost & Isolation Forest ensemble scoring risk in < 35ms", tech: "Scikit / Triton" },
        { step: "04", label: "POPIA Ledger", detail: "Cryptographically signed audit receipts stored in AWS Cape Town", tech: "PostgreSQL (af-south-1)" },
      ],
      deliverable: "Custom microservice deployed directly in the client's AWS Cape Town or private data center, with full telemetry logging and POPIA compliance.",
      stack: ["Python", "FastAPI", "Redis", "Scikit-Learn", "PostgreSQL", "Kafka"],
      referenceLink: "/work"
    },
    {
      id: "agritech",
      title: "Agriculture & AgriTech",
      subtitle: "Satellite crop intelligence and offline-first soil telemetry",
      localContext: "Free State grain farms, Mpumalanga macadamia estates, and Limpopo agricultural co-operatives.",
      problem: "Farmers struggle with climate variability, late drought detection, and lack of cellular connectivity across vast rural hectares.",
      architecture: [
        { step: "01", label: "Satellite Ingestion", detail: "Automated Sentinel-2 10m multispectral imagery fetching and band extraction", tech: "OpenEO + GDAL" },
        { step: "02", label: "NDVI Pipeline", detail: "Computation of NDVI, NDWI (canopy moisture), and thermal stress indices", tech: "Python + NumPy" },
        { step: "03", label: "Local Edge Store", detail: "Ground sensor moisture probe telemetry buffered locally on device", tech: "SQLite + CRDT" },
        { step: "04", label: "Offline Mobile Sync", detail: "Field scout mapping app working 100% offline; syncs upon GSM reconnection", tech: "Background Sync API" },
      ],
      deliverable: "End-to-end crop analytics suite with web command center and offline-ready mobile applications for field scouts and co-op managers.",
      stack: ["PyTorch", "OpenEO", "React", "DuckDB", "SQLite Offline-Sync", "Expo"],
      referenceLink: "/work"
    },
    {
      id: "healthcare",
      title: "Healthcare & MedTech",
      subtitle: "Decentralized clinic triage and chronic medication inventory monitors",
      localContext: "Public and private community clinics and primary healthcare centers across Gauteng.",
      problem: "Overburdened nursing staff face manual triage paperwork, long patient queues, and sudden stockouts of chronic medication.",
      architecture: [
        { step: "01", label: "Zero-Knowledge Intake", detail: "Digital intake kiosk recording vitals and encrypting PII under POPIA", tech: "Argon2id + AES-256" },
        { step: "02", label: "Priority Triage", detail: "South African Triage Scale (SATS) algorithmic scoring and routing", tech: "FastAPI + Rules" },
        { step: "03", label: "Stockout Buffer", detail: "Predictive consumption tracking for antiretroviral and chronic drug inventories", tech: "Prophet + PostgreSQL" },
        { step: "04", label: "Multi-lingual Alert", detail: "Automated SMS notifications in English, isiZulu, and Sesotho", tech: "Africa's Talking API" },
      ],
      deliverable: "HIPAA & POPIA compliant clinic operational software deployed on local clinic servers with secure cloud sync.",
      stack: ["React Native", "Node.js", "Express", "Supabase", "Africa's Talking SMS"],
      referenceLink: "/work"
    },
    {
      id: "manufacturing",
      title: "Manufacturing & Industrial Automation",
      subtitle: "Computer vision quality assurance and predictive machine maintenance",
      localContext: "Automotive component suppliers, food packaging lines, and industrial plants in Tshwane and Ekurhuleni.",
      problem: "Manual visual inspection misses micro-defects, while unexpected machine downtime costs millions in lost operational throughput.",
      architecture: [
        { step: "01", label: "Optical Stream", detail: "High-speed industrial GigE cameras capturing 4K line components at 60 FPS", tech: "GigE Vision" },
        { step: "02", label: "Defect Classification", detail: "TensorRT deep learning model detecting surface cracks and dimensional errors", tech: "PyTorch + TensorRT" },
        { step: "03", label: "PLC Hardware Trigger", detail: "Sub-20ms digital signal dispatched to pneumatic rejection arms", tech: "Industrial Modbus" },
        { step: "04", label: "Plant Floor Dash", detail: "Batch yield analytics and error heatmaps visible on floor tablet cockpits", tech: "Grafana + InfluxDB" },
      ],
      deliverable: "Edge-based computer vision container linked directly to factory PLC controllers and supervisory SCADA systems.",
      stack: ["OpenCV", "PyTorch", "TensorRT", "FastAPI", "WebSockets", "NVIDIA Jetson"],
      referenceLink: "/work"
    }
  ];

  return (
    <div className="bg-background text-foreground min-h-screen py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Page Header ── */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Target Verticals // African Operating Context</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Custom engineering for African industrial sectors.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed font-normal">
            We don't build generic SaaS templates. Every system we design is built around the specific regulatory environments, data infrastructure, and operational bottlenecks of African industry.
          </p>
        </div>

        {/* ── Industry Rows with Visual System Architecture Flows ── */}
        <div className="space-y-16 mb-24">
          {industries.map((ind) => (
            <div 
              key={ind.id}
              className="p-8 sm:p-10 rounded-2xl bg-card border border-border hover:border-emerald-500/30 transition-all space-y-8"
            >
              {/* Header Info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-border">
                <div className="space-y-1.5">
                  <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                    Sector Architecture // {ind.id}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {ind.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {ind.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href={ind.referenceLink}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-background border border-border hover:border-emerald-500/50 text-xs font-semibold text-foreground transition-all cursor-pointer"
                  >
                    View Reference Build <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                  </Link>
                </div>
              </div>

              {/* Operating Context & Challenge */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-background border border-border space-y-1.5">
                  <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">Local South African Context:</span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {ind.localContext}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-background border border-border space-y-1.5">
                  <span className="text-xs font-mono text-rose-400 font-semibold uppercase">Operational Bottleneck:</span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {ind.problem}
                  </p>
                </div>
              </div>

              {/* Visual System Architecture Diagram (4 Flow Steps) */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block">
                  System Architecture & End-to-End Data Pipeline:
                </span>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {ind.architecture.map((node, nIdx) => (
                    <div 
                      key={nIdx}
                      className="p-4 rounded-xl bg-background border border-border flex flex-col justify-between space-y-3"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-emerald-400 font-bold">{node.step}</span>
                          <span className="text-[9px] font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                            {node.tech}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-foreground">{node.label}</h4>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                          {node.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack & Final CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border">
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="text-xs text-muted-foreground font-mono mr-2">Stack:</span>
                  {ind.stack.map((stk, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-background border border-border text-foreground font-medium"
                    >
                      {stk}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/contact?industry=${encodeURIComponent(ind.title)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-foreground transition-colors cursor-pointer"
                >
                  Discuss {ind.title} Scope <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* ── Call to Action ── */}
        <div className="p-10 rounded-2xl bg-card border border-border text-center max-w-3xl mx-auto shadow-sm">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Operating in a specialized or regulated African vertical?
          </h3>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Schedule a 20-minute architecture review to discuss your custom regulatory, telemetry, or integration requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-xl text-xs transition-colors cursor-pointer"
            >
              Schedule a Technical Call
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 border border-border hover:bg-muted text-foreground font-medium px-6 py-3 rounded-xl text-xs transition-colors cursor-pointer"
            >
              Explore Reference Architectures
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
