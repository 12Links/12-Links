import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Code2, 
  MessageSquare, 
  BarChart3, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Sparkles,
  Layers,
  ChevronRight,
  Clock,
  Users
} from "lucide-react";
import { Link } from "wouter";
import AfricanFlags from "./AfricanFlags";
import DigitalRain from "./DigitalRain";

export default function Hero() {
  // Interactive Blueprint Estimator State
  const [selectedIndustry, setSelectedIndustry] = useState("fintech");
  const [selectedSolution, setSelectedSolution] = useState("ai");
  const [selectedTimeline, setSelectedTimeline] = useState("standard");

  const industriesConfig: Record<string, { name: string; focus: string }> = {
    fintech: { name: "Fintech & Banking", focus: "Fraud prevention, credit scoring & high-throughput payment gateways" },
    agritech: { name: "Agriculture & AgriTech", focus: "Satellite crop intelligence, IoT irrigation & farmer marketplaces" },
    healthtech: { name: "Healthcare & MedTech", focus: "Telemedicine, diagnostic AI assistance & medical inventory control" },
    manufacturing: { name: "Manufacturing & Supply", focus: "Predictive maintenance, computer vision QA & supply forecasting" },
    education: { name: "Education & E-Learning", focus: "Adaptive curriculum delivery, automated grading & student analytics" },
  };

  const solutionsConfig: Record<string, { name: string; pod: string; weeks: string; stack: string[] }> = {
    ai: {
      name: "Custom AI & Machine Learning",
      pod: "1 Lead Architect + 2 AI/ML Engineers + 1 Fullstack Dev + 1 QA Specialist",
      weeks: "6–10 Weeks",
      stack: ["Python", "PyTorch", "FastAPI", "Docker", "PostgreSQL", "AWS / Azure"],
    },
    app: {
      name: "Fullstack Web & Mobile Platform",
      pod: "1 Lead Engineer + 2 Frontend Devs + 1 Backend Specialist + 1 UI/UX Designer",
      weeks: "8–12 Weeks",
      stack: ["React / Next.js", "React Native", "TypeScript", "Node.js", "PostgreSQL", "TailwindCSS"],
    },
    data: {
      name: "Data Intelligence & Analytics Pipeline",
      pod: "1 Data Architect + 1 Pipeline Engineer + 1 BI/Dashboard Engineer",
      weeks: "4–8 Weeks",
      stack: ["Python", "Apache Airflow", "DuckDB", "BigQuery", "Recharts", "Grafana"],
    },
    transformation: {
      name: "Digital Transformation & Custom Core",
      pod: "1 Strategic CTO Lead + 2 Senior Engineers + 1 Security Architect",
      weeks: "10–14 Weeks",
      stack: ["Go / Python", "Microservices", "Redis", "Kafka", "Docker", "POPIA Security Hardening"],
    },
  };

  const activeInd = industriesConfig[selectedIndustry];
  const activeSol = solutionsConfig[selectedSolution];

  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex flex-col overflow-hidden bg-[#0A0A0F]">
      {/* ── AMBIENT CYBERNETIC BACKDROP ── */}
      <DigitalRain />
      
      {/* Radial lighting flares */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#00FF88]/10 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-900/15 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Grid line overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "4rem 4rem"
        }}
      />

      {/* ── HERO SECTION ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT COLUMN: Narrative & Call to Action */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF88] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF88]" />
              </span>
              <span className="text-xs font-mono font-medium tracking-wide text-gray-300">
                Pan-African Engineering Pods • Built in South Africa
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6">
              Engineering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#00FF88] to-teal-300" style={{ textShadow: "0 0 35px rgba(0,255,136,0.3)" }}>
                Africa's
              </span>
              <br />
              Digital Frontier.
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 font-light">
              12 Links architects production-grade artificial intelligence models, full-stack software, and high-throughput data infrastructure for ambitious African enterprises. Student-led velocity, verified enterprise discipline, and 100% milestone-governed delivery.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#00FF88] text-black font-bold px-7 py-3.5 rounded-lg hover:bg-[#00FF88]/90 transition-all text-sm uppercase tracking-wider group shadow-lg shadow-[#00FF88]/20 hover:shadow-[#00FF88]/40"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#blueprint-estimator"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-7 py-3.5 rounded-lg hover:border-[#00FF88]/50 hover:bg-white/5 transition-all text-sm uppercase tracking-wider"
              >
                <Sparkles className="w-4 h-4 text-[#00FF88]" />
                Interactive Blueprint
              </a>
            </div>

            {/* Key Metric Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { value: "7", label: "Student Co-Founders", sub: "Gauteng Hub" },
                { value: "5+", label: "Key Industries", sub: "Fintech to Agri" },
                { value: "100%", label: "Milestone Gates", sub: "Pay on Approval" },
                { value: "24h", label: "Proposal SLA", sub: "Scoped Blueprints" },
              ].map((m) => (
                <div key={m.label} className="bg-card/40 border border-white/8 rounded-xl p-3 backdrop-blur-sm hover:border-[#00FF88]/30 transition-colors">
                  <div className="text-[#00FF88] font-black text-xl leading-none mb-1">{m.value}</div>
                  <div className="text-white text-xs font-semibold">{m.label}</div>
                  <div className="text-gray-500 text-[10px] font-mono">{m.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Flag Constellation */}
          <motion.div
            className="lg:col-span-5 flex items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="w-full max-w-[540px]">
              <div className="text-center lg:text-right mb-2">
                <span className="text-[11px] font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                  Interactive Node Network • Hover to Inspect
                </span>
              </div>
              <AfricanFlags />
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── CAPABILITY TICKER ── */}
      <div className="relative z-10 w-full border-y border-white/10 bg-black/40 py-3 backdrop-blur-md overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-6 text-xs font-mono text-gray-400">
          <span className="text-[#00FF88] font-bold shrink-0 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5" /> CORE STACK:
          </span>
          <div className="overflow-hidden whitespace-nowrap flex gap-8">
            <motion.div
              className="flex gap-8 items-center"
              animate={{ x: [0, -600] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            >
              {[
                "PyTorch", "TensorFlow", "FastAPI", "Next.js", "React Native", 
                "PostgreSQL", "Docker", "Apache Airflow", "POPIA & GDPR Compliant",
                "AWS & Azure", "Microservices Architecture", "Automated CI/CD"
              ].concat([
                "PyTorch", "TensorFlow", "FastAPI", "Next.js", "React Native", 
                "PostgreSQL", "Docker", "Apache Airflow", "POPIA & GDPR Compliant",
                "AWS & Azure", "Microservices Architecture", "Automated CI/CD"
              ]).map((tech, i) => (
                <span key={i} className="text-gray-300 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#00FF88]" />
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── INTERACTIVE PROJECT SCOPE & BLUEPRINT ESTIMATOR ── */}
      <section id="blueprint-estimator" className="relative z-10 w-full bg-[#0B0D14] py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#00FF88] mb-3">
              <Cpu className="w-4 h-4" /> Interactive Scoping Engine
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Design Your Solution Blueprint
            </h2>
            <p className="text-gray-400 text-base sm:text-lg font-light">
              Select your sector and target requirements below. Our engine instantly structures an enterprise architecture blueprint, engineering pod composition, and delivery roadmap.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Scoping Inputs */}
            <div className="lg:col-span-5 space-y-6 bg-card/60 border border-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur-md">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
                  1. Select Target Industry
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {Object.entries(industriesConfig).map(([id, info]) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setSelectedIndustry(id)}
                      className={`text-left px-3.5 py-2.5 rounded-lg text-xs font-medium border transition-all ${
                        selectedIndustry === id
                          ? "bg-[#00FF88]/15 border-[#00FF88] text-white shadow-sm"
                          : "bg-white/[0.02] border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                      }`}
                    >
                      {info.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
                  2. Select Capability Required
                </label>
                <div className="space-y-2">
                  {Object.entries(solutionsConfig).map(([id, info]) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setSelectedSolution(id)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-xs font-medium border flex items-center justify-between transition-all ${
                        selectedSolution === id
                          ? "bg-[#00FF88]/15 border-[#00FF88] text-white"
                          : "bg-white/[0.02] border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                      }`}
                    >
                      <span>{info.name}</span>
                      <span className="text-[10px] font-mono text-[#00FF88]">{info.weeks}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
                  3. Delivery Velocity
                </label>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  {[
                    { id: "urgent", label: "Fast-Track", time: "< 6 Weeks" },
                    { id: "standard", label: "Standard", time: "8–10 Weeks" },
                    { id: "strategic", label: "Enterprise", time: "12+ Weeks" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTimeline(t.id)}
                      className={`py-2 px-1 rounded-lg border transition-all ${
                        selectedTimeline === t.id
                          ? "bg-white/15 border-white text-white font-bold"
                          : "bg-white/[0.02] border-white/10 text-gray-400 hover:border-white/20"
                      }`}
                    >
                      <div className="font-semibold">{t.label}</div>
                      <div className="text-[10px] text-gray-400 font-mono">{t.time}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Generated Architecture Blueprint Display */}
            <div className="lg:col-span-7 bg-[#101420] border border-[#00FF88]/30 rounded-2xl p-6 sm:p-8 relative shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00FF88]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-[#00FF88]/15 text-[#00FF88] font-bold">
                    Generated Blueprint
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                    {activeInd.name} • {activeSol.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-400 block font-mono">Estimated Sprint Duration</span>
                  <span className="text-lg font-black text-[#FFB800]">{activeSol.weeks}</span>
                </div>
              </div>

              <div className="space-y-6">
                {/* Sector Solution Blueprint */}
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#00FF88] tracking-wider mb-2 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5" /> Solution Focus & Outcomes
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed bg-white/5 p-3.5 rounded-lg border border-white/5">
                    {activeInd.focus}. Engineered to comply with national regulatory frameworks and optimized for African infrastructure conditions (including offline-first sync and efficient edge latency).
                  </p>
                </div>

                {/* Assigned Engineering Pod */}
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#00FF88] tracking-wider mb-2 flex items-center gap-2">
                    <Users className="w-3.5 h-3.5" /> Dedicated Engineering Pod
                  </h4>
                  <p className="text-gray-300 text-sm font-mono bg-white/5 p-3.5 rounded-lg border border-white/5">
                    {activeSol.pod}
                  </p>
                </div>

                {/* Technology Stack Matrix */}
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#00FF88] tracking-wider mb-2 flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5" /> Technology Blueprint
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeSol.stack.map((item, idx) => (
                      <span key={idx} className="text-xs font-mono px-3 py-1 bg-black/40 border border-white/10 rounded-md text-gray-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4-Stage Delivery Blueprint */}
                <div className="border-t border-white/10 pt-4">
                  <h4 className="text-xs font-mono uppercase text-gray-400 tracking-wider mb-3 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" /> Delivery Gates & Approval Milestones
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                    {[
                      { step: "Gate 1", label: "Architecture Spec" },
                      { step: "Gate 2", label: "Alpha Sprint Pod" },
                      { step: "Gate 3", label: "Security & UAT" },
                      { step: "Gate 4", label: "Prod & Handover" },
                    ].map((g, i) => (
                      <div key={i} className="bg-white/[0.03] p-2.5 rounded border border-white/5">
                        <div className="text-[10px] font-mono text-[#00FF88] font-bold">{g.step}</div>
                        <div className="text-gray-300 font-medium text-[11px] mt-0.5">{g.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link to Contact Form */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <p className="text-xs text-gray-400">
                  Ready to lock in this blueprint? Request a formal Statement of Work.
                </p>
                <Link
                  href={`/contact?industry=${selectedIndustry}&solution=${selectedSolution}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00FF88] text-black font-bold px-6 py-3 rounded-lg hover:bg-[#00FF88]/90 transition-all text-xs uppercase tracking-wider shrink-0"
                >
                  Request Proposal for this Scope
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── 3-STEP CLIENT DELIVERY PROCESS ── */}
      <div className="relative z-10 w-full bg-[#0A0A0F] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              How We Turn Business Vision into Production Reality.
            </h2>
            <p className="text-gray-400 text-lg font-light">
              We operate with milestone-governed clarity. Every sprint is scoped, rigorously tested, and signed off before release.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: MessageSquare,
                title: "1. Scope & Blueprint",
                desc: "We extract your business requirements, define data schemas, and draft a verified architecture blueprint with exact deliverable gates before writing code."
              },
              {
                icon: Code2,
                title: "2. Sprint & Validate",
                desc: "Our verified engineering pod builds in bi-weekly agile milestones. You test, approve, and sign off at each gate with complete codebase visibility."
              },
              {
                icon: BarChart3,
                title: "3. Deploy & Audit Impact",
                desc: "We deploy to your production cloud, hand over full IP and source code, and monitor real-world KPIs and ROI through an included live dashboard."
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card/40 border border-white/8 p-8 rounded-2xl relative overflow-hidden group hover:border-[#00FF88]/40 transition-colors backdrop-blur-sm"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FF88]/5 rounded-full blur-3xl group-hover:bg-[#00FF88]/10 transition-colors" />
                <div className="w-12 h-12 rounded-xl bg-[#00FF88]/10 border border-[#00FF88]/20 flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-[#00FF88]" />
                </div>
                <div className="text-[#00FF88] font-mono text-xs font-bold tracking-widest mb-3">STAGE 0{i + 1}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* TWO COMMITMENT TIERS */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-[#00FF88]/30 bg-card/40 p-8 sm:p-10 rounded-2xl hover:border-[#00FF88]/60 transition-colors backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#00FF88]/5 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-2xl font-bold text-white mb-1">Client-First Governance</h3>
              <p className="text-[#00FF88] uppercase tracking-wider text-xs font-mono font-bold mb-5">Milestone Protection Model</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                Traditional agencies charge retainers with unpredictable timelines. 12 Links operates on milestone approval: you review functional software before approving subsequent phases.
              </p>
              <ul className="space-y-3 font-mono text-xs text-gray-300">
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#00FF88] shrink-0" /> Single dedicated engineering director assigned to your account</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#00FF88] shrink-0" /> Formal milestone sign-off gates with transparent acceptance criteria</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#00FF88] shrink-0" /> 100% intellectual property & source code ownership upon delivery</li>
              </ul>
            </div>

            <div className="border border-white/10 hover:border-[#FFB800]/50 transition-colors bg-card/40 p-8 sm:p-10 rounded-2xl backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFB800]/5 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-2xl font-bold text-white mb-1">Enterprise Ready Architecture</h3>
              <p className="text-[#FFB800] uppercase tracking-wider text-xs font-mono font-bold mb-5">Hardened for Production</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                Built from the ground up to operate within South African and continental data realities — including POPIA compliance, regional cloud latencies, and high data security.
              </p>
              <ul className="space-y-3 font-mono text-xs text-gray-300">
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" /> Full POPIA (Act 4 of 2013) & data residency compliance reviews</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" /> Automated CI/CD pipelines, containerization, and unit test suites</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" /> 30-day post-launch warranty and live telemetry dashboard</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
