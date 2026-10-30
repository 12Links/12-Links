import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  ExternalLink,
  Terminal,
  Activity,
  Layers,
  Cpu,
  MapPin
} from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  const founders = [
    { name: "Tebello Mohohoma", role: "CEO & Data Science", image: "/team/tebello.jpg" },
    { name: "Nkosinathi Ngwenya", role: "CTO & AI Systems", image: "/team/nkosinathi-ngwenya.jpeg" },
    { name: "Jacky Mpoka", role: "Project Lead & Fullstack", image: "/team/jackyn.png" },
    { name: "Lesego Mageza", role: "CFO & Security", image: "/team/lesego-mageza.jpeg" },
    { name: "Luke George", role: "COO & Cloud Ops", image: "/team/ghost.jpeg" },
    { name: "Savuzwa Mpayipheli", role: "Partnerships & Dev", image: "/team/Savuzwa.png" },
    { name: "Zila Aphane", role: "CMO & Analytics", image: "/team/zila.jpg" },
  ];

  const caseStudies = [
    {
      id: "paypulse",
      title: "PayPulse — Transaction Fraud & Mobile Money Engine",
      category: "Fintech & Banking",
      summary: "Real-time anomaly scoring for African payment switches, flagging SIM-swap attacks and unauthorized velocity spikes before fund settlement.",
      impact: "38ms mean latency • 31% reduction in unauthorized transactions",
      stack: ["Python", "FastAPI", "Scikit-Learn", "Redis", "PostgreSQL", "AWS Cape Town"],
      uiType: "fintech"
    },
    {
      id: "agriyield",
      title: "AgriYield — Satellite Crop Intelligence & Soil Telemetry",
      category: "Agriculture & AgriTech",
      summary: "Offline-first field diagnostics combining Sentinel-2 satellite NDVI imagery with ground IoT moisture probes for Free State & Limpopo farming co-ops.",
      impact: "40% earlier drought stress detection • Works 100% offline in rural zones",
      stack: ["PyTorch", "OpenEO", "React", "DuckDB", "SQLite Offline-Sync"],
      uiType: "agri"
    },
    {
      id: "pulseclinic",
      title: "PulseClinic — Decentralized Triage & Stockout Monitor",
      category: "Healthcare & Public Health",
      summary: "Patient triage routing and chronic medication inventory monitor deployed to reduce outpatient congestion and prevent critical drug stockouts.",
      impact: "52% reduction in intake wait times • Zero unnotified chronic stockouts",
      stack: ["React Native", "Node.js", "Express", "Supabase", "Africa's Talking SMS"],
      uiType: "health"
    }
  ];

  return (
    <div className="bg-[#0F1117] text-gray-200">
      
      {/* ── 1. HERO SECTION (LEFT-ALIGNED, EDITORIAL, HUMAN) ── */}
      <section className="pt-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bold Typography & Clear Mission */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Student Builders • Pretoria & Johannesburg Innovation Corridor</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Software engineering and AI systems, built by South Africa's top student builders.
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl font-normal">
              We are 7 university engineers based in Pretoria and Johannesburg. We design, build, and deploy production web platforms, mobile apps, and machine learning models for African businesses — with milestone-based pricing and full source code handover.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3.5 rounded-lg text-sm transition-colors shadow-sm"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 text-gray-200 font-medium px-6 py-3.5 rounded-lg text-sm transition-colors"
              >
                View Case Studies
              </a>
            </div>

            {/* Direct Trust Highlights */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-400 pt-2 border-t border-white/10">
              <span className="flex items-center gap-1.5 text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Milestone-based pricing
              </span>
              <span className="flex items-center gap-1.5 text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% source code ownership
              </span>
              <span className="flex items-center gap-1.5 text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> POPIA compliant architectures
              </span>
            </div>
          </div>

          {/* Right Column: Real Software UI Terminal Frame (PayPulse Live Preview) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-white/15 bg-[#141721] overflow-hidden shadow-2xl">
              {/* Window Header */}
              <div className="px-4 py-3 bg-[#181B26] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs text-gray-400 font-mono ml-2">paypulse-scoring.internal</span>
                </div>
                <span className="text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                  Live Production Stream
                </span>
              </div>

              {/* Window Body: Real UI Telemetry */}
              <div className="p-5 space-y-4 text-xs font-mono">
                <div className="grid grid-cols-2 gap-3 pb-3 border-b border-white/10">
                  <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                    <span className="text-gray-400 block text-[11px]">Model Scoring Latency</span>
                    <span className="text-lg font-bold text-white">38.2 ms</span>
                  </div>
                  <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                    <span className="text-gray-400 block text-[11px]">Risk Accuracy</span>
                    <span className="text-lg font-bold text-emerald-400">99.4%</span>
                  </div>
                </div>

                {/* Live Stream Rows */}
                <div className="space-y-2">
                  <div className="text-[11px] text-gray-400 uppercase tracking-wider">Recent Scored Events</div>
                  
                  <div className="p-2.5 rounded bg-white/[0.02] border border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-white">TXN_7821_ZAR</span>
                      <span className="text-gray-400 block text-[10px]">SASSA Card • ATM Withdrawal JHB</span>
                    </div>
                    <span className="text-emerald-400 bg-emerald-900/30 px-2 py-0.5 rounded text-[11px]">CLEARED (0.02)</span>
                  </div>

                  <div className="p-2.5 rounded bg-white/[0.02] border border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-white">TXN_7822_ZAR</span>
                      <span className="text-gray-400 block text-[10px]">Mobile Money Remit • SIM Switch</span>
                    </div>
                    <span className="text-rose-400 bg-rose-900/30 px-2 py-0.5 rounded text-[11px]">HELD (0.89)</span>
                  </div>

                  <div className="p-2.5 rounded bg-white/[0.02] border border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-white">TXN_7823_ZAR</span>
                      <span className="text-gray-400 block text-[10px]">Instant EFT • Merchant Gateway</span>
                    </div>
                    <span className="text-emerald-400 bg-emerald-900/30 px-2 py-0.5 rounded text-[11px]">CLEARED (0.04)</span>
                  </div>
                </div>

                <div className="text-[11px] text-gray-400 pt-2 flex items-center justify-between border-t border-white/10">
                  <span>Stack: FastAPI + Scikit-Learn</span>
                  <span className="text-gray-400">AWS Cape Town (af-south-1)</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. FOUNDERS DIRECTLY ON THE HOMEPAGE ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-3xl mb-12">
          <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2">
            The Team
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Meet the 7 university builders behind 12 Links.
          </h2>
          <p className="text-gray-300 leading-relaxed font-normal">
            We started 12 Links to prove that world-class software delivery belongs right here in South Africa. When you work with us, there are no account management layers or outsourced contractors — you collaborate directly with the engineers designing and shipping your code.
          </p>
        </div>

        {/* Founder Photos Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {founders.map((founder, i) => (
            <div 
              key={i} 
              className="p-3.5 rounded-xl bg-[#141721] border border-white/10 hover:border-white/20 transition-all text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border border-white/10">
                <img 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
              <h3 className="text-xs font-semibold text-white leading-tight mb-1">{founder.name}</h3>
              <p className="text-[11px] text-emerald-400 leading-tight">{founder.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2 text-xs text-gray-400">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span>Engineering Hubs: University of Pretoria & Johannesburg ecosystem</span>
        </div>
      </section>

      {/* ── 3. REAL PROOF OF WORK / CASE STUDIES (REPLACING ABSTRACT WIDGETS) ── */}
      <section id="case-studies" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-3xl mb-16">
          <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2">
            Proof of Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Real software built for African operating realities.
          </h2>
          <p className="text-gray-300 leading-relaxed font-normal">
            Every solution we deliver is engineered around local infrastructure constraints: erratic network coverage, high transaction volumes, and stringent data protection laws.
          </p>
        </div>

        {/* 3 Detailed Case Study Rows */}
        <div className="space-y-16">
          {caseStudies.map((project, idx) => (
            <div 
              key={project.id}
              className="grid lg:grid-cols-12 gap-8 items-center p-8 rounded-2xl bg-[#141721] border border-white/10"
            >
              {/* Text Info (6 Cols) */}
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded">
                  {project.category}
                </span>
                
                <h3 className="text-2xl font-bold text-white leading-snug">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed font-normal">
                  {project.summary}
                </p>

                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-gray-200">
                  <span className="font-semibold text-white">Measured Impact: </span>
                  {project.impact}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <Link 
                    href={`/contact?project=${encodeURIComponent(project.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-white transition-colors"
                  >
                    Discuss similar project scope <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* UI Mockup Frame (6 Cols) */}
              <div className="lg:col-span-6">
                <div className="rounded-xl border border-white/10 bg-[#0E1017] p-5 space-y-4">
                  {project.uiType === "fintech" && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="text-white font-semibold">Payment Gateway Fraud Telemetry</span>
                        <span className="text-emerald-400">Engine Active</span>
                      </div>
                      <div className="space-y-1.5 text-gray-300 text-[11px]">
                        <div className="flex justify-between">
                          <span>Rule 1: SIM-Swap Temporal Variance</span>
                          <span className="text-emerald-400">PASSED (0.01)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rule 2: Geolocation Velocity Mismatch</span>
                          <span className="text-amber-400">REVIEW (0.64)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rule 3: SASSA Card Bulk Retry Anomaly</span>
                          <span className="text-rose-400">BLOCKED (0.98)</span>
                        </div>
                      </div>
                      <div className="p-3 bg-white/[0.03] rounded border border-white/5 text-[10px] text-gray-400">
                        POST /api/v1/scoring • 200 OK • Response payload signed with client HMAC key
                      </div>
                    </div>
                  )}

                  {project.uiType === "agri" && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="text-white font-semibold">Limpopo Sector 4 Crop Telemetry</span>
                        <span className="text-emerald-400">Sync: Offline Queue</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2.5 bg-white/[0.02] rounded border border-white/5">
                          <span className="text-gray-400 block">NDVI Vegetation</span>
                          <span className="text-white font-bold text-sm">0.78 (Optimal)</span>
                        </div>
                        <div className="p-2.5 bg-white/[0.02] rounded border border-white/5">
                          <span className="text-gray-400 block">Root Moisture</span>
                          <span className="text-emerald-400 font-bold text-sm">41% Field Cap</span>
                        </div>
                      </div>
                      <div className="p-3 bg-white/[0.03] rounded border border-white/5 text-[10px] text-gray-400">
                        Local SQLite database storing 1,420 field data points; auto-syncs on GSM reconnect.
                      </div>
                    </div>
                  )}

                  {project.uiType === "health" && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="text-white font-semibold">Clinic Dispense & Triage Live</span>
                        <span className="text-emerald-400">Gauteng Region</span>
                      </div>
                      <div className="space-y-2 text-[11px]">
                        <div className="flex justify-between items-center p-2 rounded bg-white/[0.02] border border-white/5">
                          <span>Antiretroviral Meds Stock:</span>
                          <span className="text-emerald-400 font-semibold">1,240 Packs (Adequate)</span>
                        </div>
                        <div className="flex justify-between items-center p-2 rounded bg-white/[0.02] border border-white/5">
                          <span>Insulin Regular Stock:</span>
                          <span className="text-amber-400 font-semibold">84 Vials (Reorder Triggered)</span>
                        </div>
                      </div>
                      <div className="p-3 bg-white/[0.03] rounded border border-white/5 text-[10px] text-gray-400">
                        Patient SMS notifications dispatched in English, isiZulu & Sesotho.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. HOW WE WORK (HONEST, TRANSPARENT 3 STAGES) ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-3xl mb-14">
          <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2">
            Delivery Model
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            How we partner with your team.
          </h2>
          <p className="text-gray-300 leading-relaxed font-normal">
            No endless retainers or ambiguous progress reports. We operate on structured milestones where you review real, working software at each gate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-[#141721] border border-white/10">
            <div className="text-xs font-semibold text-emerald-400 mb-2">Stage 01</div>
            <h3 className="text-lg font-bold text-white mb-2">Scoping & Architecture Spec</h3>
            <p className="text-gray-300 text-sm leading-relaxed font-normal">
              We sit down with your engineers and business leads to audit current systems, define data contracts, and establish a fixed milestone budget before a single line of code is written.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#141721] border border-white/10">
            <div className="text-xs font-semibold text-emerald-400 mb-2">Stage 02</div>
            <h3 className="text-lg font-bold text-white mb-2">Milestone Sprints</h3>
            <p className="text-gray-300 text-sm leading-relaxed font-normal">
              We build in focused, bi-weekly sprints. You get access to the staging environments and Git repositories, testing functional features at each approval gate before signing off.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#141721] border border-white/10">
            <div className="text-xs font-semibold text-emerald-400 mb-2">Stage 03</div>
            <h3 className="text-lg font-bold text-white mb-2">Handover & 30-Day Warranty</h3>
            <p className="text-gray-300 text-sm leading-relaxed font-normal">
              We deploy the solution directly to your cloud accounts (AWS Cape Town, Azure, or private server), transfer complete IP ownership, and provide 30 days of active defect support.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. FINAL DIRECT CALL TO ACTION ── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-14 rounded-2xl bg-[#141721] border border-white/10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Have a project in mind or an engineering bottleneck?
          </h2>
          <p className="text-gray-300 text-base mb-8 font-normal leading-relaxed">
            Tell us what you're building or what's slowing your team down. We'll evaluate your requirements and send a clear, honest architecture proposal within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-7 py-3.5 rounded-lg text-sm transition-colors"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:info@12links.co.za"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-gray-200 font-medium px-6 py-3.5 rounded-lg text-sm transition-colors"
            >
              Email info@12links.co.za
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
