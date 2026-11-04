import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  Activity, 
  Radio, 
  Cpu, 
  Play, 
  Pause,
  Database,
  ShieldCheck,
  Send,
  Workflow,
  Sparkles,
  Server,
  Layers,
  CheckCircle2,
  AlertCircle,
  ExternalLink
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

type ViewMode = "rag" | "architecture" | "telemetry" | "neural";

interface RAGSample {
  title: string;
  query: string;
  category: string;
  response: string;
  latencyMs: number;
  confidence: string;
  chunks: { id: string; source: string; score: number }[];
}

const RAG_SAMPLES: RAGSample[] = [
  {
    title: "Fintech Fraud Scoring",
    query: "Assess anomaly risk for TXN_9823: High-frequency EFT withdraw from unverified SIM switch in Johannesburg.",
    category: "Payment Telemetry",
    response: "Risk Decision: HELD (Confidence: 0.984). Anomalous velocity detected (3 attempts / 45s) combined with SIM-swap state change within 4 hours. Automated hold applied prior to clearing switch; biometric re-verification challenge triggered.",
    latencyMs: 31.8,
    confidence: "98.4%",
    chunks: [
      { id: "CK-101", source: "af-south-1 // FraudFeatureStore:SIM_STATE", score: 0.962 },
      { id: "CK-102", source: "af-south-1 // SASSA_EFT_RiskWeights.bin", score: 0.941 },
      { id: "CK-103", source: "af-south-1 // VelocityRulesEngine_v2", score: 0.915 }
    ]
  },
  {
    title: "POPIA Compliance Check",
    query: "Verify data residency and encryption status for incoming medical patient telemetry batch.",
    category: "Regulatory Governance",
    response: "Verification PASSED. All data stored exclusively within South African borders (AWS Cape Town af-south-1). In-transit encryption verified at TLS 1.3; at-rest storage encrypted via customer-managed AES-256 keys in strict accordance with POPIA Act No. 4 Section 19.",
    latencyMs: 24.6,
    confidence: "100%",
    chunks: [
      { id: "CK-201", source: "ComplianceDB // POPIA_Act4_Sec19_Audit", score: 0.998 },
      { id: "CK-202", source: "AWS_IAM // af-south-1-residency-lock.json", score: 0.985 },
      { id: "CK-203", source: "KMS // za-central-key-rotation-policy", score: 0.971 }
    ]
  },
  {
    title: "AgriTech Field Telemetry",
    query: "Calculate NDVI vegetative water stress on Sentinel-2 tile for Free State maize cluster.",
    category: "Satellite & Edge ML",
    response: "NDVI Index: 0.74 (Adequate). Subsurface moisture deficit detected in Quadrant 4B. Offline SQLite sync packet compiled for local GSM mesh broadcast with 0% data drop.",
    latencyMs: 38.4,
    confidence: "96.7%",
    chunks: [
      { id: "CK-301", source: "Sentinel2 // B8_B4_SpectralArray_FreeState", score: 0.974 },
      { id: "CK-302", source: "IoT_Edge // FreeState_SoilMoistureCluster", score: 0.923 }
    ]
  }
];

export default function TechVisualizer() {
  const { reducedMotion } = useTheme();
  const [mode, setMode] = useState<ViewMode>("rag");
  const [selectedRag, setSelectedRag] = useState<number>(0);
  const [isQuerying, setIsQuerying] = useState(false);
  const [queryProgress, setQueryProgress] = useState(100);
  const [customInput, setCustomInput] = useState("");
  const [activeArchNode, setActiveArchNode] = useState<number>(0);

  // Canvas State for Neural Mode
  const [isRunning, setIsRunning] = useState(true);
  const [fps, setFps] = useState(60);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, isHovering: false });

  // Handle RAG Execution Simulation
  const handleExecuteRag = (index: number) => {
    setSelectedRag(index);
    setIsQuerying(true);
    setQueryProgress(0);

    const startTime = performance.now();
    const duration = 650;

    const timer = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(100, Math.round((elapsed / duration) * 100));
      setQueryProgress(progress);

      if (progress >= 100) {
        clearInterval(timer);
        setIsQuerying(false);
      }
    }, 40);
  };

  // ── NEURAL CANVAS RENDERING (FOR THE NEURAL TAB) ──
  useEffect(() => {
    if (mode !== "neural") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let frameCount = 0;
    let fpsTimer = performance.now();

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const rect = canvas.getBoundingClientRect();
    const w = rect.width || 480;
    const h = rect.height || 360;

    const nodes: { x: number; y: number; vx: number; vy: number; radius: number; color: string }[] = [];
    for (let i = 0; i < 36; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 2,
        color: i % 3 === 0 ? "#10B981" : i % 2 === 0 ? "#06B6D4" : "#34D399"
      });
    }

    const render = (time: number) => {
      frameCount++;
      if (time - fpsTimer >= 1000) {
        setFps(Math.round((frameCount * 1000) / (time - fpsTimer)));
        frameCount = 0;
        fpsTimer = time;
      }

      const rectNow = canvas.getBoundingClientRect();
      const width = rectNow.width;
      const height = rectNow.height;

      ctx.clearRect(0, 0, width, height);

      // Grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 28) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 28) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Nodes & Connections
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (isRunning && !reducedMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x <= 10 || n.x >= width - 10) n.vx *= -1;
          if (n.y <= 10 || n.y >= height - 10) n.vy *= -1;
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const o = nodes[j];
          const dist = Math.hypot(n.x - o.x, n.y - o.y);
          if (dist < 85) {
            ctx.strokeStyle = `rgba(16, 185, 129, ${(1 - dist / 85) * 0.4})`;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(o.x, o.y);
            ctx.stroke();
          }
        }

        ctx.fillStyle = n.color;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (isRunning && !reducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    animationFrameId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [mode, isRunning, reducedMotion]);

  // Architecture Nodes Definition
  const archNodes = [
    {
      id: "ingestion",
      label: "Ingestion Gateway",
      protocol: "HTTPS / TLS 1.3",
      latency: "4.2 ms",
      security: "mTLS + HMAC-SHA256",
      desc: "Rate-limited API gateway terminating African payment and mobile client traffic on AWS Cape Town edge."
    },
    {
      id: "vector",
      label: "RAG & Feature Store",
      protocol: "gRPC / Redis + PGvector",
      latency: "8.6 ms",
      security: "VPC Peering • Encrypted",
      desc: "Ultra-low latency vector similarity retrieval and real-time streaming feature aggregation."
    },
    {
      id: "inference",
      label: "Model Inference Pod",
      protocol: "FastAPI / Triton / PyTorch",
      latency: "18.4 ms",
      security: "Zero-Knowledge Sandbox",
      desc: "Containerized scikit / neural models executing batch and streaming inference under SLA thresholds."
    },
    {
      id: "popia",
      label: "POPIA Data Vault",
      protocol: "PostgreSQL (af-south-1)",
      latency: "1.2 ms",
      security: "AES-256 • Act No. 4 Strict",
      desc: "Isolated in-country relational database with cryptographic audit logging and role-based access controls."
    }
  ];

  const currentSample = RAG_SAMPLES[selectedRag];

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-2xl relative select-none transition-colors">
      
      {/* ── 1. Top Enterprise Control Bar ── */}
      <div className="px-4 py-3 bg-muted/40 border-b border-border flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="text-xs text-foreground font-mono ml-2 font-semibold flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            12links-enterprise // production-console
          </span>
        </div>

        {/* Live Region & Status */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AWS Cape Town (af-south-1) • Sub-40ms
          </span>
        </div>
      </div>

      {/* ── 2. Interactive Navigation Tabs (Enterprise Workflows) ── */}
      <div className="px-4 py-2 bg-background border-b border-border flex items-center justify-between gap-1 text-xs overflow-x-auto">
        <div className="flex items-center gap-1.5 min-w-max">
          <button
            type="button"
            onClick={() => setMode("rag")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              mode === "rag"
                ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Live RAG Sandbox
          </button>

          <button
            type="button"
            onClick={() => setMode("architecture")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              mode === "architecture"
                ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <Workflow className="w-3.5 h-3.5" />
            System Topology
          </button>

          <button
            type="button"
            onClick={() => setMode("telemetry")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              mode === "telemetry"
                ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            SLA Telemetry
          </button>

          <button
            type="button"
            onClick={() => setMode("neural")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              mode === "neural"
                ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            60 FPS Canvas
          </button>
        </div>

        {mode === "neural" && (
          <button
            type="button"
            onClick={() => setIsRunning(!isRunning)}
            className="text-muted-foreground hover:text-emerald-400 p-1 rounded cursor-pointer"
            title={isRunning ? "Pause" : "Play"}
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        )}
      </div>

      {/* ── 3. Content Viewport ── */}
      <div className="relative min-h-[360px] bg-card p-5">
        
        {/* ── VIEW 1: LIVE RAG & MODEL SANDBOX ── */}
        {mode === "rag" && (
          <div className="space-y-4">
            {/* Sample Query Selectors */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider">
                Select Model Query:
              </span>
              {RAG_SAMPLES.map((sample, sIdx) => (
                <button
                  key={sIdx}
                  type="button"
                  onClick={() => handleExecuteRag(sIdx)}
                  className={`text-xs px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                    selectedRag === sIdx
                      ? "bg-emerald-500 text-white font-medium"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {sample.title}
                </button>
              ))}
            </div>

            {/* Input / Query Display */}
            <div className="p-3.5 rounded-xl bg-background border border-border space-y-2">
              <div className="flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                <span>INCOMING ENTERPRISE PAYLOAD</span>
                <span className="text-emerald-400 font-semibold">{currentSample.category}</span>
              </div>
              <p className="text-xs text-foreground font-mono leading-relaxed">
                {currentSample.query}
              </p>
            </div>

            {/* Simulated Execution Progress */}
            {isQuerying ? (
              <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-emerald-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Querying In-Country Vector Store (af-south-1)...
                  </span>
                  <span className="text-muted-foreground">{queryProgress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-emerald-500 h-full transition-all duration-75"
                    style={{ width: `${queryProgress}%` }}
                  />
                </div>
              </div>
            ) : (
              /* Model Output Response */
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Inference Result (HTTP 200 OK)</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground text-[11px]">
                    <span>Latency: <strong className="text-foreground">{currentSample.latencyMs} ms</strong></span>
                    <span>Confidence: <strong className="text-emerald-400">{currentSample.confidence}</strong></span>
                  </div>
                </div>

                <p className="text-xs text-foreground leading-relaxed font-sans">
                  {currentSample.response}
                </p>

                {/* Retrieved Context Chunks */}
                <div className="pt-2 border-t border-border/50">
                  <span className="text-[10px] text-muted-foreground font-mono block mb-1.5 uppercase">
                    Retrieved RAG Context Chunks (Vector Cosine Similarity):
                  </span>
                  <div className="grid sm:grid-cols-3 gap-2">
                    {currentSample.chunks.map((ck, cIdx) => (
                      <div 
                        key={cIdx} 
                        className="p-2 rounded bg-background border border-border text-[10px] font-mono text-muted-foreground flex flex-col justify-between"
                      >
                        <span className="text-foreground font-semibold truncate">{ck.id}</span>
                        <span className="text-[9px] text-muted-foreground truncate">{ck.source}</span>
                        <span className="text-emerald-400 mt-1">Score: {ck.score}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── VIEW 2: INTERACTIVE SYSTEM TOPOLOGY ── */}
        {mode === "architecture" && (
          <div className="space-y-5">
            <div className="text-xs text-muted-foreground font-normal">
              Click any architecture node to inspect telemetry, protocols, and security guardrails deployed on AWS Cape Town:
            </div>

            {/* Topology Flow Graph */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {archNodes.map((node, nIdx) => (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setActiveArchNode(nIdx)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    activeArchNode === nIdx
                      ? "border-emerald-500 bg-emerald-500/10 shadow-sm"
                      : "border-border bg-background hover:border-muted-foreground/40"
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-emerald-400">Node 0{nIdx + 1}</span>
                    <h4 className="text-xs font-bold text-foreground leading-tight">{node.label}</h4>
                  </div>
                  <div className="mt-3 pt-2 border-t border-border/60 text-[10px] font-mono text-muted-foreground">
                    <span>{node.latency}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Active Node Detail Inspector */}
            <div className="p-4 rounded-xl bg-background border border-border space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-foreground">
                  Node Inspector: {archNodes[activeArchNode].label}
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  {archNodes[activeArchNode].security}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {archNodes[activeArchNode].desc}
              </p>
              <div className="flex items-center gap-4 pt-2 text-[11px] font-mono text-muted-foreground border-t border-border">
                <span>Protocol: <strong className="text-foreground">{archNodes[activeArchNode].protocol}</strong></span>
                <span>Measured Latency: <strong className="text-emerald-400">{archNodes[activeArchNode].latency}</strong></span>
                <span>Region: <strong className="text-foreground">af-south-1</strong></span>
              </div>
            </div>
          </div>
        )}

        {/* ── VIEW 3: LIVE SLA & PRODUCTION TELEMETRY ── */}
        {mode === "telemetry" && (
          <div className="space-y-4 font-mono text-xs">
            {/* Metric Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-background border border-border">
                <span className="text-[10px] text-muted-foreground block uppercase">P99 National Latency</span>
                <span className="text-lg font-bold text-emerald-400">32.4 ms</span>
                <span className="text-[9px] text-muted-foreground block">AWS af-south-1</span>
              </div>
              <div className="p-3 rounded-xl bg-background border border-border">
                <span className="text-[10px] text-muted-foreground block uppercase">Model Throughput</span>
                <span className="text-lg font-bold text-foreground">1,280 /s</span>
                <span className="text-[9px] text-muted-foreground block">Peak Capacity</span>
              </div>
              <div className="p-3 rounded-xl bg-background border border-border">
                <span className="text-[10px] text-muted-foreground block uppercase">POPIA Compliance</span>
                <span className="text-lg font-bold text-emerald-400">100%</span>
                <span className="text-[9px] text-muted-foreground block">Act 4 of 2013</span>
              </div>
              <div className="p-3 rounded-xl bg-background border border-border">
                <span className="text-[10px] text-muted-foreground block uppercase">IP Transfer SLA</span>
                <span className="text-lg font-bold text-foreground">Complete</span>
                <span className="text-[9px] text-muted-foreground block">100% Ownership</span>
              </div>
            </div>

            {/* Live Scored Events Feed */}
            <div className="space-y-2">
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">
                Live Production Transaction Telemetry
              </span>
              <div className="p-2.5 rounded-lg bg-background border border-border flex items-center justify-between text-[11px]">
                <div>
                  <span className="text-foreground font-semibold">TXN_7821_ZAR</span>
                  <span className="text-muted-foreground block text-[10px]">Instant EFT • Merchant Gateway Cape Town</span>
                </div>
                <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded text-[10px]">
                  CLEARED (31.2ms)
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-background border border-border flex items-center justify-between text-[11px]">
                <div>
                  <span className="text-foreground font-semibold">TELEMETRY_AGRI_LIMPOPO</span>
                  <span className="text-muted-foreground block text-[10px]">SQLite Edge Sync • 1,420 field coordinates</span>
                </div>
                <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded text-[10px]">
                  SYNCHRONIZED (28.4ms)
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-background border border-border flex items-center justify-between text-[11px]">
                <div>
                  <span className="text-foreground font-semibold">TRIAGE_CLINIC_GAUTENG</span>
                  <span className="text-muted-foreground block text-[10px]">Zero-Knowledge Token Batch • Queue Optimization</span>
                </div>
                <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded text-[10px]">
                  PROCESSED (19.8ms)
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ── VIEW 4: GAUTENG 60 FPS NEURAL CANVAS ── */}
        {mode === "neural" && (
          <div className="relative w-full h-[320px] rounded-xl overflow-hidden cursor-crosshair">
            <canvas
              ref={canvasRef}
              className="w-full h-full block"
            />
            <div className="absolute bottom-2.5 right-3 font-mono text-[9px] text-muted-foreground bg-background/80 px-2 py-1 rounded border border-border">
              {fps} FPS • Interactive Neural Matrix
            </div>
          </div>
        )}

      </div>

      {/* ── 4. Console Telemetry Footer ── */}
      <div className="px-4 py-2.5 bg-muted/30 border-t border-border flex flex-wrap items-center justify-between text-[11px] font-mono text-muted-foreground gap-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-foreground">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Strict In-Country Data Residency</span>
          </span>
          <span className="hidden sm:inline text-muted-foreground/50">•</span>
          <span className="hidden sm:inline">POPIA Act No. 4 (2013)</span>
        </div>
        <span className="text-emerald-400 font-medium">
          Pretoria & Johannesburg Hubs
        </span>
      </div>

    </div>
  );
}
