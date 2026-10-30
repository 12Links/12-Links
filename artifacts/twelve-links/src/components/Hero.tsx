import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Code2, 
  Brain, 
  Database, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight,
  TrendingUp,
  Layers
} from "lucide-react";
import { Link } from "wouter";
import AfricanFlags from "./AfricanFlags";

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex flex-col bg-[#0A0A0F] text-foreground overflow-hidden">
      
      {/* ── SUBTLE ELEGANT LIGHTING (CLEAN & NON-INTRUSIVE) ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#00FF88]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      {/* ── HERO SECTION ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT: Core Narrative & Action */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Minimalist Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
              <span className="text-xs font-mono tracking-wider uppercase text-gray-300">
                Gauteng Engineering Hub • Pan-African Scale
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6">
              Delivering<br />
              <span className="text-[#00FF88]" style={{ textShadow: "0 0 35px rgba(0,255,136,0.3)" }}>
                Africa's
              </span>
              <br />
              Tech Future.
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 font-light">
              12 Links builds custom AI models, mobile applications, and software solutions for African businesses — student-led velocity, production-grade architecture, and milestone-governed delivery.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#00FF88] text-black font-bold px-7 py-3.5 rounded-lg hover:bg-[#00FF88]/90 transition-all text-xs font-mono uppercase tracking-wider shadow-lg shadow-[#00FF88]/20 group"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-7 py-3.5 rounded-lg hover:border-white/50 hover:bg-white/5 transition-all text-xs font-mono uppercase tracking-wider"
              >
                Explore Services
              </Link>
            </div>

            {/* Clean Metric Stats */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-6 border-t border-white/10 text-xs font-mono">
              <div>
                <div className="text-2xl font-black text-white font-sans">7</div>
                <div className="text-gray-400 mt-0.5">Founding Engineers</div>
              </div>
              <div className="w-px h-8 bg-white/10 hidden sm:block" />
              <div>
                <div className="text-2xl font-black text-[#00FF88] font-sans">5+</div>
                <div className="text-gray-400 mt-0.5">Core Sectors</div>
              </div>
              <div className="w-px h-8 bg-white/10 hidden sm:block" />
              <div>
                <div className="text-2xl font-black text-white font-sans">100%</div>
                <div className="text-gray-400 mt-0.5">Milestone Governed</div>
              </div>
              <div className="w-px h-8 bg-white/10 hidden sm:block" />
              <div>
                <div className="text-2xl font-black text-[#FFB800] font-sans">24h</div>
                <div className="text-gray-400 mt-0.5">Proposal Turnaround</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Responsive Flag Constellation */}
          <motion.div
            className="lg:col-span-5 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="w-full max-w-[500px]">
              <AfricanFlags />
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── CLEAN INDUSTRY FOCUS BAR ── */}
      <div className="w-full border-y border-white/5 bg-[#0D0F17]/60 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <span className="text-[#00FF88] font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Sector Solutions:
          </span>
          <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-gray-300">
            <span>Fintech & Banking</span>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <span>Agriculture & AgriTech</span>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <span>Healthcare & MedTech</span>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <span>Manufacturing & Supply</span>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <span>Education & E-Learning</span>
          </div>
        </div>
      </div>

      {/* ── CORE CAPABILITIES SECTION ── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#00FF88] font-bold block mb-2">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Engineered for Real Business Outcomes
            </h2>
          </div>
          <Link
            href="/services"
            className="text-xs font-mono uppercase tracking-wider text-[#00FF88] hover:text-white flex items-center gap-1 transition-colors"
          >
            View all services <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Brain,
              title: "Custom AI & Machine Learning",
              desc: "Predictive modeling, natural language interfaces, fraud scoring, and intelligent automation built around your specific data reality.",
              tags: ["Predictive Scoring", "NLP & Vision", "Automation Pipelines"]
            },
            {
              icon: Code2,
              title: "Full-Stack Web & Mobile",
              desc: "High-performance web platforms and native mobile apps engineered for speed, clean UX, and seamless African edge connectivity.",
              tags: ["iOS & Android", "React / Next.js", "API Systems"]
            },
            {
              icon: Database,
              title: "Data Pipelines & Infrastructure",
              desc: "Scalable data ingestion, business intelligence reporting, and cloud infrastructure hardened for security and POPIA compliance.",
              tags: ["Real-Time Analytics", "POPIA Security", "Cloud Architectures"]
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card/40 border border-white/10 rounded-2xl p-8 hover:border-[#00FF88]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00FF88] mb-6 group-hover:border-[#00FF88]/30 transition-colors">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">{card.desc}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {card.tags.map((t, idx) => (
                  <span key={idx} className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── HOW WE DELIVER (CLEAN 3 STAGES) ── */}
      <section className="py-20 border-t border-white/5 bg-[#07090F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#00FF88] font-bold block mb-2">
              Delivery Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Structured. Accountable. Transparent.
            </h2>
            <p className="text-gray-400 text-sm sm:text-base font-light">
              We eliminate ambiguity with clear milestone gates from technical discovery to production deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Scope & Blueprint",
                desc: "We analyze your technical requirements and define explicit milestone deliverables, acceptance tests, and architecture specs before coding begins."
              },
              {
                step: "02",
                title: "Agile Pod Sprints",
                desc: "Our verified engineering pod builds in bi-weekly milestones. You inspect and approve deliverables at each gate with full codebase transparency."
              },
              {
                step: "03",
                title: "Deployment & Audit",
                desc: "We deploy to your cloud, hand over 100% IP and source code, and verify operational telemetry during an included 30-day support window."
              },
            ].map((s, i) => (
              <div key={i} className="p-8 rounded-2xl bg-card/30 border border-white/10 hover:border-white/20 transition-colors">
                <div className="text-xs font-mono font-bold text-[#00FF88] mb-3">STAGE {s.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CLIENT COMMITMENTS (2 CLEAN COLUMNS) ── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-card/40 border border-white/10">
            <div className="text-xs font-mono uppercase tracking-wider text-[#00FF88] font-bold mb-2">
              Milestone Governance
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">No Retainer Traps. Pay on Approval.</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">
              Unlike traditional agencies that bill for hours without guaranteed delivery, 12 Links operates on functional milestone gates. You only approve work that satisfies agreed criteria.
            </p>
            <ul className="space-y-3 font-mono text-xs text-gray-300">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00FF88] shrink-0" /> Dedicated engineering lead assigned from day one
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00FF88] shrink-0" /> Clear acceptance criteria for every sprint milestone
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00FF88] shrink-0" /> 100% intellectual property & code ownership transferred to you
              </li>
            </ul>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-card/40 border border-white/10">
            <div className="text-xs font-mono uppercase tracking-wider text-[#FFB800] font-bold mb-2">
              Enterprise Readiness
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Hardened for African Data Realities.</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">
              Our architectures are engineered specifically for regional network latency, offline-first client sync, and full compliance with South Africa's POPIA legislation.
            </p>
            <ul className="space-y-3 font-mono text-xs text-gray-300">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" /> POPIA (Act No. 4 of 2013) compliance and data privacy
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" /> Automated CI/CD pipelines and production containerization
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" /> 30-day post-launch warranty and live telemetry dashboard
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── CLEAN FINAL CTA ── */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-[#0F121C] to-[#0A0A0F] border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00FF88]/5 rounded-full blur-3xl pointer-events-none" />
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 relative z-10">
            Ready to solve your most critical technology challenge?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light relative z-10">
            Share your project scope with our engineering team and receive a milestone proposal within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#00FF88] text-black font-bold px-8 py-3.5 rounded-lg hover:bg-[#00FF88]/90 transition-all text-xs font-mono uppercase tracking-wider shadow-lg shadow-[#00FF88]/20"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/industries"
              className="border border-white/20 text-white hover:border-white/50 hover:bg-white/5 px-8 py-3.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all"
            >
              View Industries
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
