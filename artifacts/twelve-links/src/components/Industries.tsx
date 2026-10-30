import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { TrendingUp, Leaf, HeartPulse, Factory, BookOpen, X, ArrowRight, ShieldAlert, CheckCircle, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState<number | null>(null);

  const industries = [
    {
      id: "fintech",
      title: "Fintech & Financial Services",
      gradient: "from-blue-800 via-blue-900 to-slate-900",
      icon: TrendingUp,
      bullets: ["Fraud detection", "Cashflow forecasting", "Credit scoring"],
      problem: "Low financial inclusion, high fraud rates, and fragmented payment systems across Africa limit economic participation for millions.",
      solutions: [
        "AI credit scoring using mobile money data",
        "Real-time fraud detection for digital payments",
        "Unified payment gateways combining multiple payment methods",
        "Automated cashflow forecasting for SMEs"
      ],
      impact: "Reduce fraud losses by up to 35% using ML-powered transaction scoring. Increase loan approval accuracy by 28% with alternative credit data."
    },
    {
      id: "agritech",
      title: "Agriculture & AgriTech",
      gradient: "from-green-800 via-green-900 to-slate-900",
      icon: Leaf,
      bullets: ["Satellite monitoring", "Smart irrigation", "Crop intelligence"],
      problem: "African farmers face climate volatility, limited market access, and lack of real-time data tools — reducing crop yields and food security.",
      solutions: [
        "Satellite crop monitoring and yield forecasting",
        "IoT-based smart irrigation systems",
        "Agricultural marketplace platforms",
        "Soil health AI diagnostics"
      ],
      impact: "Increase crop yield prediction accuracy by 40%. Reduce water usage by up to 30% through precision irrigation algorithms."
    },
    {
      id: "healthtech",
      title: "Healthcare & MedTech",
      gradient: "from-red-800 via-red-900 to-slate-900",
      icon: HeartPulse,
      bullets: ["Workflow automation", "Equipment monitoring", "Diagnostics support"],
      problem: "Healthcare systems in Africa are overburdened with limited diagnostic capacity, poor inventory management, and inadequate telemedicine infrastructure.",
      solutions: [
        "Telemedicine platform development",
        "AI-powered diagnostic support tools",
        "Drug and medical supply inventory management",
        "Patient workflow automation"
      ],
      impact: "Reduce diagnostic wait times by 50%. Improve drug stockout prevention by 60% with predictive inventory management."
    },
    {
      id: "manufacturing",
      title: "Manufacturing & Automation",
      gradient: "from-orange-800 via-orange-900 to-slate-900",
      icon: Factory,
      bullets: ["Predictive maintenance", "Quality inspection", "Process optimisation"],
      problem: "African manufacturers struggle with unplanned downtime, manual quality control, and inefficient supply chain visibility — costing millions in lost productivity.",
      solutions: [
        "Predictive maintenance using sensor data and ML",
        "Automated visual quality inspection",
        "Supply chain tracking and optimization",
        "Production line digital twin modeling"
      ],
      impact: "Reduce unplanned downtime by 45%. Improve quality inspection accuracy by 38% with computer vision systems."
    },
    {
      id: "education",
      title: "Education & E-Learning",
      gradient: "from-purple-800 via-purple-900 to-slate-900",
      icon: BookOpen,
      bullets: ["Adaptive learning", "Assessment automation", "Content recommendation"],
      problem: "Africa's education sector faces quality gaps, teacher shortages, and lack of personalized learning tools — limiting student outcomes at scale.",
      solutions: [
        "Adaptive learning platforms tailored to individual needs",
        "Automated assessment and grading systems",
        "AI-driven content recommendation",
        "School management systems"
      ],
      impact: "Improve student engagement by 55% through personalized content delivery. Reduce teacher administrative burden by 40%."
    }
  ];

  // Esc key closes modal & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndustry(null);
    };
    if (selectedIndustry !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndustry]);

  const activeInd = selectedIndustry !== null ? industries[selectedIndustry] : null;
  const accentColors = ["bg-blue-400", "bg-green-400", "bg-red-400", "bg-orange-400", "bg-purple-400"];

  return (
    <div className="pb-24 bg-[#0A0A0F] text-foreground min-h-screen">
      {/* ── TICKER ── */}
      <div className="w-full bg-[#00FF88]/10 border-y border-[#00FF88]/20 overflow-hidden py-2 flex whitespace-nowrap">
        <motion.div
          className="flex gap-4 font-mono text-xs uppercase tracking-[0.2em] text-[#00FF88]"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        >
          {Array(4).fill("FINTECH · AGRITECH · HEALTHTECH · EDUCATION · MANUFACTURING · AUTOMATION SYSTEMS · DATA INTELLIGENCE · AI ENGINEERING · ").map((txt, i) => (
            <span key={i}>{txt}</span>
          ))}
        </motion.div>
      </div>

      {/* ── PAGE HERO ── */}
      <section className="pt-20 pb-16 text-center px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[#00FF88]/5 rounded-full blur-[130px] pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#00FF88] px-3.5 py-1 rounded-full bg-[#00FF88]/10 border border-[#00FF88]/20 inline-block mb-4">
            Domain Specialization
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Industries We Transform
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Select any sector tile to inspect proven problem vectors, algorithmic solutions, and verified ROI metrics.
          </p>
        </motion.div>
      </section>

      {/* ── CARDS GRID ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedIndustry(idx)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#12141D] border border-white/10 hover:border-[#00FF88]/50 transition-all shadow-xl hover:shadow-[#00FF88]/10"
            >
              <div className={`h-[200px] bg-gradient-to-b ${ind.gradient} relative overflow-hidden flex items-center justify-center`}>
                <ind.icon className="w-20 h-20 text-white/80 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141D] to-transparent" />
              </div>
              <div className="p-6 relative z-10 -mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">{ind.title}</h3>
                <ul className="space-y-2 mb-4">
                  {ind.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2 text-xs text-gray-300 font-mono bg-white/5 rounded-full px-3 py-1 w-fit">
                      <span className={`w-1.5 h-1.5 rounded-full ${accentColors[idx]}`} />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-1.5 text-xs text-[#00FF88] font-mono uppercase tracking-wider group-hover:underline">
                  Inspect Problem & Solutions <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── MODAL DIALOG ── */}
      <AnimatePresence>
        {selectedIndustry !== null && activeInd && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-industry-title"
          >
            <motion.div
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndustry(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0F111A] rounded-2xl border border-white/10 shadow-2xl shadow-black/80 overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#00FF88] px-2 py-0.5 rounded bg-[#00FF88]/10 border border-[#00FF88]/20">
                      Sector Intelligence
                    </span>
                    <h2 id="modal-industry-title" className="text-2xl sm:text-3xl font-bold text-white mt-1">
                      {activeInd.title}
                    </h2>
                  </div>
                  <button 
                    type="button"
                    onClick={() => setSelectedIndustry(null)} 
                    className="p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors focus:outline-none"
                    aria-label="Close dialog"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl">
                    <h4 className="text-red-400 font-bold uppercase tracking-wider text-xs font-mono mb-1.5 flex items-center gap-1.5">
                      <ShieldAlert className="w-4 h-4" /> Market Friction & Problem
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-sm font-light">{activeInd.problem}</p>
                  </div>

                  <div>
                    <h4 className="text-[#00FF88] font-bold uppercase tracking-wider text-xs font-mono mb-3 flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4" /> 12 Links Deployed Solutions
                    </h4>
                    <ul className="space-y-2">
                      {activeInd.solutions.map((sol, s) => (
                        <li key={s} className="flex items-start gap-2.5 text-gray-300 text-sm font-light bg-white/[0.03] p-2.5 rounded-lg border border-white/5">
                          <span className="text-[#00FF88] mt-0.5 shrink-0">•</span> {sol}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#FFB800]/10 p-4 rounded-xl border border-[#FFB800]/20">
                    <h4 className="text-[#FFB800] font-bold uppercase tracking-wider text-xs font-mono mb-1.5 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" /> Measured Impact Benchmark
                    </h4>
                    <p className="text-white font-medium italic text-sm leading-relaxed">{activeInd.impact}</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                  <Link 
                    href={`/contact?industry=${encodeURIComponent(activeInd.title)}`} 
                    className="bg-[#00FF88] text-black text-center px-6 py-3 rounded-lg font-bold uppercase tracking-wider text-xs font-mono hover:bg-[#00FF88]/90 transition-colors w-full sm:w-auto shadow-md shadow-[#00FF88]/20 flex items-center justify-center gap-2"
                  >
                    Request Blueprint for this Sector
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button 
                    type="button"
                    onClick={() => setSelectedIndustry(null)} 
                    className="border border-white/20 text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wider text-xs font-mono hover:bg-white/5 transition-colors w-full sm:w-auto"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── METRICS & APPROACH ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28">
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { number: "5+", label: "Industries Served", color: "#00FF88" },
            { number: "15+", label: "Solution Blueprints", color: "#FFB800" },
            { number: "100%", label: "African-Built", color: "#00FF88" },
            { number: "24h", label: "Proposal Turnaround", color: "#FFB800" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card/40 border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-colors backdrop-blur-sm"
            >
              <div className="text-3xl sm:text-4xl font-black mb-2 font-mono" style={{ color: stat.color }}>
                {stat.number}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Custom Sector Request Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#00FF88]/10 via-[#0A0A0F] to-[#FFB800]/10 border border-white/10 rounded-3xl p-10 md:p-14 text-center mb-24"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#00FF88] mb-2 inline-block">
            Tailored Engineering
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Don't see your industry listed?</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-light">
            We architect custom solutions across logistics, insurance, mining, government, and retail. Share your requirements and receive a scoped deployment proposal.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#00FF88] text-black font-bold px-8 py-3.5 rounded-lg hover:bg-[#00FF88]/90 transition-all text-xs font-mono uppercase tracking-wider shadow-lg shadow-[#00FF88]/20"
          >
            Request a Custom Industry Proposal
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* 3-Step Methodology */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#00FF88] mb-2 inline-block">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Sector Blueprint Process</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Sector Discovery",
                desc: "We analyze regulatory constraints, local data infrastructure, and system interfaces unique to your sector before architecture design."
              },
              {
                step: "02",
                title: "Blueprint Design",
                desc: "We design data flow diagrams, API schemas, and deployment topologies with explicit milestone approval gates."
              },
              {
                step: "03",
                title: "Measured Delivery",
                desc: "We track industry metrics during rollouts — fraud decrease %, latency reduction, or diagnostic accuracy — delivering dashboards alongside code."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-card/40 border border-white/10 p-8 rounded-2xl hover:border-[#00FF88]/30 transition-colors overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute top-4 right-4 text-5xl font-black text-white/[0.04] font-mono select-none">{item.step}</div>
                <div className="text-[#00FF88] font-mono text-xs font-bold mb-3">{item.step}</div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
