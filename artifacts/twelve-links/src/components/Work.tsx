import { useState } from "react";
import { Link } from "wouter";
import { 
  ArrowRight, 
  ExternalLink, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  CheckCircle2, 
  Layers, 
  Terminal, 
  Play, 
  RotateCcw,
  Sparkles,
  Server,
  Zap,
  Lock
} from "lucide-react";

interface ReferenceBuild {
  id: string;
  vertical: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  benchmarks: { label: string; value: string; detail: string }[];
  architectureSteps: { step: string; title: string; desc: string; tech: string }[];
  techStack: string[];
  simulationData: {
    inputLabel: string;
    sampleInput: string;
    outputLabel: string;
    sampleOutput: string;
    status: string;
    latency: string;
  };
}

const REFERENCE_BUILDS: ReferenceBuild[] = [
  {
    id: "aegispay",
    vertical: "Fintech & Banking",
    name: "AegisPay // Real-Time Anomaly Scoring Engine",
    tagline: "Sub-40ms fraud classification tuned for African payment switches and SIM-swap attack vectors.",
    problem: "High volumes of unauthorized Instant EFT and mobile money switch transactions caused by rapid SIM-swap account takeovers before batch clearing.",
    solution: "Engineered a low-latency streaming pipeline deploying XGBoost and Scikit-Learn inference containers adjacent to payment switches on AWS Cape Town, returning millisecond risk scores.",
    benchmarks: [
      { label: "P99 Inference Latency", value: "31.8 ms", detail: "AWS Cape Town (af-south-1)" },
      { label: "Anomaly Precision", value: "99.4%", detail: "Zero false negatives on SIM-swap" },
      { label: "Throughput Capacity", value: "1,500 req/s", detail: "Auto-scaling Kubernetes pods" }
    ],
    architectureSteps: [
      { step: "01", title: "Switch Ingestion", desc: "Incoming ISO-8583 and JSON transaction payloads terminate via mTLS at the API Gateway.", tech: "FastAPI + Envoy" },
      { step: "02", title: "Feature Aggregation", desc: "Real-time velocity counts and historical SIM-state fetched in under 5ms from in-memory cache.", tech: "Redis Feature Store" },
      { step: "03", title: "Model Inference", desc: "Trained classifier evaluates payload against temporal variance thresholds and anomaly vectors.", tech: "Scikit-Learn / Triton" },
      { step: "04", title: "Signed Audit Log", desc: "Cryptographic decision receipt stored in POPIA-compliant ledger for regulatory audit.", tech: "PostgreSQL (af-south-1)" }
    ],
    techStack: ["Python", "FastAPI", "Scikit-Learn", "Redis", "PostgreSQL", "Docker", "AWS Cape Town"],
    simulationData: {
      inputLabel: "INCOMING PAYMENT SWITCH PAYLOAD",
      sampleInput: `{\n  "txn_id": "TXN_7821_ZAR",\n  "amount": 4500.00,\n  "channel": "Instant EFT",\n  "sim_age_hours": 2.4,\n  "velocity_1h": 4\n}`,
      outputLabel: "REAL-TIME SCORING DECISION",
      sampleOutput: `{\n  "decision": "HELD_FOR_VERIFICATION",\n  "risk_score": 0.942,\n  "reason": "SIM_SWAP_VELOCITY_TRIGGER",\n  "latency_ms": 31.8\n}`,
      status: "HELD (0.942)",
      latency: "31.8 ms"
    }
  },
  {
    id: "terravanguard",
    vertical: "Agriculture & AgriTech",
    name: "TerraVanguard // Offline-First Multispectral Telemetry",
    tagline: "Sentinel-2 satellite NDVI vegetation analytics paired with local SQLite edge synchronization.",
    problem: "Commercial grain farmers across the Free State and Limpopo face severe crop moisture stress while operating in deep rural zones with intermittent GSM/LTE coverage.",
    solution: "Built an offline-first progressive web and mobile application that ingests satellite multispectral bands, stores high-resolution crop stress maps locally, and queues telemetry for automatic background sync upon reconnection.",
    benchmarks: [
      { label: "Offline Resilience", value: "100%", detail: "Zero connectivity required for field scans" },
      { label: "Stress Detection", value: "40% Earlier", detail: "Multispectral B8/B4 vegetative index" },
      { label: "Data Compression", value: "85% Saved", detail: "Vector tile diff syncing over 2G/EDGE" }
    ],
    architectureSteps: [
      { step: "01", title: "Sentinel-2 Ingestion", desc: "Automated ingestion pipeline pulls European Space Agency multispectral bands for registered parcel polygons.", tech: "OpenEO + GDAL" },
      { step: "02", title: "NDVI Calculation", desc: "Normalized Difference Vegetation Index computed and converted into compressed geo-vector tiles.", tech: "Python + NumPy" },
      { step: "03", title: "Local Edge Store", desc: "Field device stores all parcel telemetry and sensor logs in a local SQLite database.", tech: "SQLite + CRDT Sync" },
      { step: "04", title: "Resilient Mesh Sync", desc: "Telemetry automatically synchronizes over low-bandwidth GSM when rural connectivity is restored.", tech: "Background Sync API" }
    ],
    techStack: ["React Native", "TypeScript", "SQLite", "Python", "GDAL", "FastAPI", "DuckDB"],
    simulationData: {
      inputLabel: "OFFLINE FIELD PARCEL TELEMETRY",
      sampleInput: `{\n  "parcel_id": "FS_MAIZE_SECTOR_4B",\n  "sensor_moisture_pct": 14.2,\n  "spectral_b8_nir": 0.62,\n  "spectral_b4_red": 0.12\n}`,
      outputLabel: "OFFLINE INFERENCE & SYNC PACKET",
      sampleOutput: `{\n  "ndvi_index": 0.676,\n  "stress_classification": "MODERATE_WATER_DEFICIT",\n  "sync_queue_status": "QUEUED_LOCAL_SQLITE",\n  "bytes_compacted": 348\n}`,
      status: "SYNC_QUEUED",
      latency: "12.4 ms (Local)"
    }
  },
  {
    id: "aurahealth",
    vertical: "MedTech & Public Health",
    name: "AuraHealth // Decentralized Triage & POPIA EMR",
    tagline: "Cryptographically protected patient triage and chronic stockout alert network for Gauteng health hubs.",
    problem: "High clinic overcrowding in urban Gauteng and sudden chronic medication stockouts, complicated by stringent patient privacy mandates under POPIA Act No. 4.",
    solution: "Designed a zero-knowledge patient routing engine with end-to-end encrypted medical queues, automated stockout reorder triggers, and tri-lingual SMS notifications in English, isiZulu, and Sesotho.",
    benchmarks: [
      { label: "Intake Wait Reduction", value: "52%", detail: "Dynamic automated triage routing" },
      { label: "Stockout Incidents", value: "0 Unnotified", detail: "Predictive consumption modeling" },
      { label: "Security & POPIA", value: "AES-256", detail: "Zero-knowledge tokenization" }
    ],
    architectureSteps: [
      { step: "01", title: "Patient Tokenization", desc: "Personally identifiable identifiers hashed and detached from medical triage telemetry.", tech: "Argon2id + AES-256" },
      { step: "02", title: "Triage Classifier", desc: "Algorithmic acuity scoring directs urgent cases to specialized consultation tracks.", tech: "FastAPI + Rules Engine" },
      { step: "03", title: "Stockout Alerting", desc: "Dispensary run-rate predictive models notify district pharmaceutical depots before zero-stock events.", tech: "Prophet + PostgreSQL" },
      { step: "04", title: "SMS Gateway", desc: "Dispatches localized queue updates via telecommunications APIs in the patient's preferred language.", tech: "Africa's Talking API" }
    ],
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Docker", "Africa's Talking SMS", "AWS Cape Town"],
    simulationData: {
      inputLabel: "ANONYMIZED TRIAGE CONSULTATION DATA",
      sampleInput: `{\n  "token": "0x8F9A...B31D",\n  "vitals": { "bp_sys": 168, "bp_dia": 105, "pulse": 112 },\n  "symptom_tags": ["CHEST_TIGHTNESS", "DIZZINESS"]\n}`,
      outputLabel: "TRIAGE PROTOCOL & ROUTING",
      sampleOutput: `{\n  "triage_category": "RED_PRIORITY_URGENT",\n  "assigned_queue": "ACUTE_CARE_BAY_2",\n  "popia_audit_hash": "e3b0c44298fc1c149afbf4c8996fb924",\n  "sms_dispatched": true\n}`,
      status: "PRIORITY_RED (14ms)",
      latency: "14.2 ms"
    }
  },
  {
    id: "opticline",
    vertical: "Manufacturing & Automotive",
    name: "OpticLine // High-Speed Edge Computer Vision",
    tagline: "Sub-20ms visual defect inspection on automotive component assembly lines running on local edge hardware.",
    problem: "Automotive assembly lines in Tshwane (Pretoria) require 100% component surface inspection at line speeds exceeding 45 parts per minute with zero cloud bandwidth latency.",
    solution: "Deployed localized TensorRT computer vision models on NVIDIA Jetson edge compute units, triggering pneumatic robotic rejectors within 18ms of frame capture.",
    benchmarks: [
      { label: "Frame Inference", value: "18.2 ms", detail: "NVIDIA Jetson AGX Orin Edge" },
      { label: "Defect Detection", value: "99.8%", detail: "Sub-millimeter micro-crack precision" },
      { label: "Cloud Bandwidth", value: "0 GB Required", detail: "100% on-premise edge processing" }
    ],
    architectureSteps: [
      { step: "01", title: "GigE Frame Capture", desc: "Industrial high-speed camera captures 4K uncompressed component imagery over GigE Vision.", tech: "GigE + OpenCV" },
      { step: "02", title: "TensorRT Inference", desc: "Quantized deep learning model scans frame for weld pits, burrs, and dimensional tolerances.", tech: "PyTorch + TensorRT" },
      { step: "03", title: "PLC Trigger", desc: "Sends immediate digital signal to PLC pneumatic rejector if defect threshold is breached.", tech: "Modbus / Industrial I/O" },
      { step: "04", title: "Central Telemetry", desc: "Aggregates hourly defect yield counts to local plant dashboard over isolated LAN.", tech: "Grafana + InfluxDB" }
    ],
    techStack: ["PyTorch", "TensorRT", "C++", "Python", "OpenCV", "NVIDIA Jetson", "Docker"],
    simulationData: {
      inputLabel: "INDUSTRIAL CAMERA FRAME TELEMETRY",
      sampleInput: `{\n  "part_serial": "ZF_GEAR_HOUSING_9918",\n  "line_speed_m_s": 0.85,\n  "camera_fps": 60,\n  "resolution": "3840x2160"\n}`,
      outputLabel: "EDGE TENSORRT INFERENCE RESULT",
      sampleOutput: `{\n  "inspection_status": "DEFECT_DETECTED",\n  "defect_type": "SURFACE_MICRO_CRACK",\n  "dimensions_mm": 0.42,\n  "plc_signal_sent": "REJECT_PNEUMATIC_VALVE_01"\n}`,
      status: "REJECTED (18.2ms)",
      latency: "18.2 ms"
    }
  }
];

export default function Work() {
  const [activeBuild, setActiveBuild] = useState<number>(0);
  const current = REFERENCE_BUILDS[activeBuild];

  return (
    <div className="bg-background text-foreground min-h-screen py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Page Header (Enterprise Standard) ── */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Reference Architectures & Technical Blueprints</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Production-grade systems engineered for African operating realities.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed font-normal">
            We architect and validate high-throughput systems around real African infrastructure constraints: low-bandwidth environments, payment switch latency, strict POPIA data residency, and industrial edge reliability.
          </p>
        </div>

        {/* ── Vertical Selector Tabs ── */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-border">
          {REFERENCE_BUILDS.map((build, idx) => (
            <button
              key={build.id}
              type="button"
              onClick={() => setActiveBuild(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                activeBuild === idx
                  ? "bg-emerald-500 text-white shadow-sm"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <span>{build.vertical}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${activeBuild === idx ? "bg-white/20" : "bg-muted"}`}>
                0{idx + 1}
              </span>
            </button>
          ))}
        </div>

        {/* ── Active Architecture Showcase ── */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left Column: Problem, Solution & Architecture Flow (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                {current.vertical} // Reference Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                {current.name}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {current.tagline}
              </p>
            </div>

            {/* Problem & Solution Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-card border border-border space-y-2">
                <span className="text-xs font-mono text-rose-400 font-semibold uppercase">The Operational Challenge</span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {current.problem}
                </p>
              </div>
              <div className="p-5 rounded-xl bg-card border border-border space-y-2">
                <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">Our Engineering Approach</span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {current.solution}
                </p>
              </div>
            </div>

            {/* 4-Step Technical Architecture Diagram */}
            <div className="p-6 rounded-2xl bg-card border border-border space-y-5">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                End-to-End System Pipeline
              </h3>
              
              <div className="space-y-3">
                {current.architectureSteps.map((step, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="p-3.5 rounded-xl bg-background border border-border flex items-start gap-3.5"
                  >
                    <span className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {step.step}
                    </span>
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-foreground">{step.title}</h4>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                          {step.tech}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Tags */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block">
                Production Stack & Dependencies:
              </span>
              <div className="flex flex-wrap gap-2">
                {current.techStack.map((tech, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-card border border-border text-foreground font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Telemetry & Playable Sandbox (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quantified Production Benchmarks */}
            <div className="p-6 rounded-2xl bg-card border border-border space-y-4">
              <h3 className="text-xs font-mono font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                Production Benchmarks
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {current.benchmarks.map((bm, bIdx) => (
                  <div key={bIdx} className="p-3.5 rounded-xl bg-background border border-border flex items-center justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground block">{bm.label}</span>
                      <span className="text-[10px] text-muted-foreground/80 font-mono">{bm.detail}</span>
                    </div>
                    <span className="text-lg font-bold text-emerald-400 font-mono">{bm.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Live Sandbox Simulation */}
            <div className="rounded-2xl bg-card border border-border overflow-hidden shadow-xl">
              <div className="px-4 py-3 bg-muted/40 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-xs font-mono text-foreground font-bold">Interactive Sandbox Execution</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  {current.simulationData.latency}
                </span>
              </div>

              <div className="p-5 space-y-4 text-xs font-mono">
                {/* Input Payload */}
                <div className="space-y-1.5">
                  <span className="text-[10px] text-muted-foreground uppercase">{current.simulationData.inputLabel}</span>
                  <pre className="p-3 rounded-lg bg-background border border-border text-foreground text-[11px] overflow-x-auto leading-relaxed">
                    {current.simulationData.sampleInput}
                  </pre>
                </div>

                {/* Output Payload */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground uppercase">{current.simulationData.outputLabel}</span>
                    <span className="text-[10px] text-emerald-400 font-bold">{current.simulationData.status}</span>
                  </div>
                  <pre className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/30 text-emerald-400 text-[11px] overflow-x-auto leading-relaxed">
                    {current.simulationData.sampleOutput}
                  </pre>
                </div>

                <div className="pt-2 border-t border-border flex items-center justify-between text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-emerald-400" />
                    <span>In-Country af-south-1 Encryption</span>
                  </span>
                  <Link 
                    href="/contact"
                    className="text-emerald-400 hover:text-foreground font-semibold inline-flex items-center gap-1"
                  >
                    Deploy Similar Architecture <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Direct Consultation Link */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-500/30 space-y-2">
              <h4 className="text-sm font-bold text-foreground">Need a custom architecture spec for your product?</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We design and validate data flows tailored to your specific cloud environment and regulatory constraints before billing a single milestone.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition-colors"
                >
                  Schedule an Architecture Review
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
