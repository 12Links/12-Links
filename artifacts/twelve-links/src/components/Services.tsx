import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Code2, 
  Brain, 
  Database, 
  Smartphone, 
  BarChart3, 
  Users, 
  ChevronDown, 
  ClipboardList, 
  UserCheck, 
  GitBranch, 
  ShieldCheck, 
  Headphones, 
  ArrowRight,
  HelpCircle,
  Check
} from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const categories = [
    { id: "all", label: "All Capabilities" },
    { id: "ai", label: "AI & Machine Learning" },
    { id: "engineering", label: "Software & Mobile" },
    { id: "data", label: "Data Architecture" },
    { id: "consulting", label: "Strategy & Advisory" },
  ];

  const services = [
    {
      id: "custom-software",
      category: "ai",
      title: "Custom Software & AI Development",
      gradient: "from-blue-900 to-cyan-900",
      icon: Code2,
      detail: "We design and build custom software solutions powered by artificial intelligence. From intelligent automation to full-stack applications, our verified developers deliver production-ready software that solves real business problems. Our development process follows a blueprint-driven approach with milestone-based delivery and client approval gates.",
      features: ["AI-powered automation", "Full-stack web & mobile apps", "API development & integration", "Machine learning model deployment"],
      stack: ["Python", "PyTorch", "Next.js", "FastAPI", "PostgreSQL", "Docker"]
    },
    {
      id: "ai-consulting",
      category: "consulting",
      title: "Tech & AI Consulting",
      gradient: "from-purple-900 to-indigo-900",
      icon: Brain,
      detail: "Strategic technology consulting to help organizations navigate the AI landscape. We assess your current systems, identify automation opportunities, design AI roadmaps, and guide your team through implementation — from proof-of-concept to production deployment.",
      features: ["AI readiness assessment", "Technology roadmap design", "Proof-of-concept development", "Digital transformation strategy"],
      stack: ["Feasibility Audits", "Model Selection", "Cost Optimization", "POPIA Strategy"]
    },
    {
      id: "information-management",
      category: "data",
      title: "Information Management Solutions",
      gradient: "from-teal-900 to-green-900",
      icon: Database,
      detail: "Comprehensive data engineering, analytics infrastructure, and information management systems. We help organizations collect, store, process, and derive actionable insights from their data — building pipelines, dashboards, and reporting systems that drive informed decision-making.",
      features: ["Data pipeline architecture", "Business intelligence dashboards", "Database design & optimization", "Real-time analytics"],
      stack: ["Apache Airflow", "DuckDB", "BigQuery", "Supabase", "Grafana"]
    },
    {
      id: "mobile-development",
      category: "engineering",
      title: "Mobile App Development",
      gradient: "from-orange-900 to-red-900",
      icon: Smartphone,
      detail: "High-performance native and cross-platform mobile applications for iOS and Android. Our mobile development team builds intuitive, scalable apps with beautiful UX — from MVP to enterprise-scale solutions — delivered with full source code and documentation.",
      features: ["iOS & Android development", "React Native cross-platform", "UI/UX design included", "App Store deployment support"],
      stack: ["React Native", "Expo", "TypeScript", "TailwindCSS", "Offline Sync"]
    },
    {
      id: "ai-data-analysis",
      category: "ai",
      title: "AI Data Analysis & Modeling",
      gradient: "from-cyan-900 to-blue-900",
      icon: BarChart3,
      detail: "Advanced data analysis powered by machine learning and statistical modeling. We turn raw data into predictive models, pattern recognition systems, and automated decision engines — giving your organization a competitive intelligence advantage driven by real evidence.",
      features: ["Predictive modeling", "Natural language processing", "Computer vision", "Fraud detection systems"],
      stack: ["Scikit-Learn", "Hugging Face", "Pandas", "OpenCV", "TensorFlow"]
    },
    {
      id: "tech-partnership",
      category: "consulting",
      title: "Embedded Technology Pods",
      gradient: "from-green-900 to-emerald-900",
      icon: Users,
      detail: "Long-term technology partnerships for businesses that need an accountable, embedded engineering capability. We provide ongoing development, maintenance, and strategic technology leadership — acting as your external CTO and delivery team in one.",
      features: ["Ongoing development & support", "Strategic tech leadership", "Product roadmap planning", "Team augmentation"],
      stack: ["Dedicated Pods", "Sprint Velocity SLAs", "Daily Standups", "CI/CD DevOps"]
    }
  ];

  const filteredServices = services.filter((s) => {
    if (activeCategory === "all") return true;
    return s.category === activeCategory;
  });

  const clientBenefits = [
    {
      icon: ClipboardList,
      title: "Scoped Blueprint",
      desc: "A detailed business requirements document, milestone plan, and success metrics before any work begins."
    },
    {
      icon: UserCheck,
      title: "Dedicated Lead",
      desc: "A single accountable project lead who manages your team, communicates daily, and is your one point of contact."
    },
    {
      icon: GitBranch,
      title: "Milestone Delivery",
      desc: "Work is delivered in approved milestones. You review and sign off before the next phase begins."
    },
    {
      icon: ShieldCheck,
      title: "Compliance Review",
      desc: "Every project includes a compliance and security review pathway to ensure your solution meets regulatory standards."
    },
    {
      icon: BarChart3,
      title: "Impact Dashboard",
      desc: "ROI and KPI dashboards track delivery metrics, performance, and business outcomes in real time."
    },
    {
      icon: Headphones,
      title: "Post-Launch Support",
      desc: "A dedicated support and performance audit window after deployment — we don't disappear after go-live."
    },
  ];

  const faqs = [
    {
      q: "Who owns the intellectual property and source code?",
      a: "You do. 100%. Upon completion and milestone approval, full source code repositories, architectural documentation, CI/CD scripts, and deployment keys are transferred unconditionally to your organization."
    },
    {
      q: "How does the milestone-based payment model work?",
      a: "Every engagement is divided into functional sprint milestones (e.g., Gate 1: Architecture, Gate 2: MVP Alpha, Gate 3: Integration, Gate 4: Production). You review, test, and approve each milestone deliverable before proceeding to the next."
    },
    {
      q: "How are 12 Links engineering pods structured?",
      a: "Each pod is custom-assembled based on your blueprint: an Engineering Director / Tech Lead, dedicated Fullstack and AI/Data Engineers, and a QA Specialist. You communicate directly with your dedicated lead."
    },
    {
      q: "Are solutions compliant with South African data laws (POPIA)?",
      a: "Yes. All data pipelines, cloud deployments, and authentication modules follow POPIA (Protection of Personal Information Act No. 4 of 2013) standards, including localized data residency options."
    },
    {
      q: "What happens after our system goes live?",
      a: "Every delivery includes a standard 30-day post-launch warranty and monitoring window. We also offer continuous maintenance, model fine-tuning, and SLA-backed retainer partnerships."
    }
  ];

  return (
    <div className="pb-24 bg-[#0A0A0F] text-foreground min-h-screen">
      {/* ── PAGE HERO ── */}
      <section className="pt-24 pb-16 text-center px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[#00FF88]/5 rounded-full blur-[130px] pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#00FF88] px-3.5 py-1 rounded-full bg-[#00FF88]/10 border border-[#00FF88]/20 inline-block mb-4">
            Production-Ready Capabilities
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Our Services & Engineering Pods
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            End-to-end technology delivery, applied AI models, and custom software — engineered specifically for African enterprise realities.
          </p>
        </motion.div>
      </section>

      {/* ── CATEGORY FILTER TABS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-white/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? "bg-[#00FF88] text-black font-bold shadow-md shadow-[#00FF88]/20"
                  : "bg-card/40 border border-white/10 text-gray-400 hover:text-white hover:border-white/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-[#12141D] rounded-2xl overflow-hidden border border-white/10 flex flex-col shadow-xl shadow-black/50 hover:border-[#00FF88]/40 transition-all group"
            >
              <div className={`h-40 bg-gradient-to-br ${srv.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
                <srv.icon className="w-16 h-16 text-white opacity-90 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3">{srv.title}</h3>
                
                {/* Tech tags preview */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {srv.stack.slice(0, 4).map((tech, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded === idx ? "max-h-[500px] mb-4 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="text-xs text-gray-300 leading-relaxed mb-4 font-light">{srv.detail}</p>
                  <ul className="space-y-2 mb-4">
                    {srv.features.map((feat, fidx) => (
                      <li key={fidx} className="text-xs text-gray-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] mt-1.5 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setExpanded(expanded === idx ? null : idx)}
                    className="text-[#00FF88] text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1 hover:text-white transition-colors"
                  >
                    {expanded === idx ? "Hide Details" : "View Blueprint"} 
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded === idx ? "rotate-180" : ""}`} />
                  </button>

                  <Link
                    href={`/contact?service=${encodeURIComponent(srv.title)}`}
                    className="text-xs text-gray-400 hover:text-white font-mono flex items-center gap-1 group/btn"
                  >
                    Scope Project <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── WHAT CLIENTS GET ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#00FF88] mb-2 inline-block">
            Delivery Assurance
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">What Every Client Receives</h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light text-sm sm:text-base">
            Every engagement operates under these four foundational pillars — regardless of engagement size.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientBenefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card/40 border border-white/10 rounded-2xl p-6 hover:border-[#00FF88]/30 transition-all group backdrop-blur-sm"
            >
              <div className="w-11 h-11 rounded-xl bg-[#00FF88]/10 border border-[#00FF88]/20 flex items-center justify-center mb-5 group-hover:bg-[#00FF88]/20 transition-colors">
                <b.icon className="w-5 h-5 text-[#00FF88]" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{b.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CLIENT FAQ ACCORDION ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#00FF88] mb-2 inline-block">
            Client Clarity
          </span>
          <h2 className="text-3xl font-bold text-white mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-sm font-light">
            Clear answers about pricing, IP ownership, sprint velocity, and governance.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="bg-card/40 border border-white/10 rounded-xl overflow-hidden transition-colors hover:border-white/20 backdrop-blur-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between text-white font-medium text-sm sm:text-base gap-4"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#00FF88] shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed font-light border-t border-white/5"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="text-center px-4 max-w-5xl mx-auto">
        <div className="bg-card/50 border border-white/10 p-10 sm:p-14 rounded-3xl backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-60 h-60 bg-[#00FF88]/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to initialize your next project?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 text-sm sm:text-base font-light">
            Receive a formal architecture proposal, line-item budget, and sprint milestones within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-[#00FF88] text-black font-bold px-8 py-3.5 rounded-lg hover:bg-[#00FF88]/90 transition-all text-xs font-mono uppercase tracking-wider shadow-lg shadow-[#00FF88]/20"
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/industries" 
              className="border border-white/20 text-white hover:border-[#00FF88]/50 hover:bg-white/5 px-8 py-3.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all"
            >
              Explore Industries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
