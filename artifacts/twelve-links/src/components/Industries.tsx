import { Link } from "wouter";
import { 
  ArrowRight, 
  CreditCard, 
  Sprout, 
  Activity, 
  Factory 
} from "lucide-react";

export default function Industries() {
  const sectors = [
    {
      id: "finance",
      icon: CreditCard,
      title: "Financial Services & Payments",
      subtitle: "Transaction integrity, settlement automation, and payment gateways",
      challengeLabel: "The Transaction & Risk Bottleneck",
      challenge: "Financial service providers, fintechs, and lenders must handle high-volume transaction rails like Instant EFT and mobile transfers while maintaining low latency, mitigating fraud, and adhering to strict POPIA data governance.",
      approachLabel: "Stateless Verification & Cloud Rails",
      approach: "We engineer resilient ingestion pipelines, stateless verification microservices, and auditable accounting ledgers deployed in South African cloud regions with automated reconciliation and real-time anomaly detection.",
      systemsLabel: "Deployed Architecture Patterns",
      systemsBuilt: [
        "Real-time transaction monitoring and risk scoring services",
        "Automated multi-bank reconciliation and settlement engines",
        "Digital KYC onboarding workflows with document verification",
        "Direct integrations for local payment switches and instant EFT"
      ],
      tech: ["FastAPI", "Python", "PostgreSQL", "Redis", "Docker", "TLS 1.3"]
    },
    {
      id: "agriculture",
      icon: Sprout,
      title: "Agriculture & Supply Chain",
      subtitle: "Offline field data collection, satellite monitoring, and logistics tracking",
      challengeLabel: "Operating Across Zero-Coverage Corridors",
      challenge: "Farming operations, co-operatives, and regional logistics networks operate across expansive rural corridors where cellular connectivity is intermittent or completely absent during field scouting and harvest tracking.",
      approachLabel: "Local-First Caching & Monotonic Merge",
      approach: "We build offline-first mobile applications with local SQLite databases that queue records securely on device, merging state automatically via conflict-resolution algorithms whenever connectivity is re-established.",
      systemsLabel: "Field Software & Telemetry Tools",
      systemsBuilt: [
        "Offline-capable mobile apps for field scouts and agronomy logs",
        "GIS mapping and satellite-assisted vegetation health dashboards",
        "Traceability ledgers for agricultural supply chain and cold storage",
        "Consolidated yield forecasting and inventory reporting systems"
      ],
      tech: ["React Native", "SQLite", "Python", "DuckDB", "OpenEO", "Background Sync"]
    },
    {
      id: "healthcare",
      icon: Activity,
      title: "Healthcare & Operations",
      subtitle: "Secure patient triage, clinic inventory, and encrypted record management",
      challengeLabel: "Paper Triage & Medication Shortages",
      challenge: "Primary healthcare clinics and private practices often balance overburdened administrative staff, manual paper intake, and volatile inventory levels of critical medications without compromising patient confidentiality.",
      approachLabel: "Encrypted Data Stores & Structured Queues",
      approach: "We design streamlined digital triage workflows, role-based patient record management, and predictive inventory tracking built on encrypted data stores that fully comply with South African healthcare privacy regulations.",
      systemsLabel: "Clinical Workflow Implementations",
      systemsBuilt: [
        "Patient intake portals and digital triage queue management",
        "Clinic pharmaceutical inventory tracking and stockout alerts",
        "Automated multi-lingual patient appointment reminders via SMS",
        "Encrypted electronic health record management systems"
      ],
      tech: ["React", "Node.js", "PostgreSQL", "AES-256", "Africa's Talking SMS", "Docker"]
    },
    {
      id: "manufacturing",
      icon: Factory,
      title: "Manufacturing & Industrial Systems",
      subtitle: "Automated optical inspection, PLC hardware integration, and plant telemetry",
      challengeLabel: "Inspection Latency & Machine Downtime",
      challenge: "Industrial assembly lines and packaging operations face downtime costs and defect leakage from manual quality inspections, requiring low-latency edge computing that integrates with plant floor equipment.",
      approachLabel: "Edge Inference with Industrial PLC Controls",
      approach: "We deploy edge computer vision models directly to on-premise industrial PCs and edge devices, connecting to programmable logic controllers (PLCs) to automate defect classification in real time.",
      systemsLabel: "Plant-Floor Automation Systems",
      systemsBuilt: [
        "Edge-based computer vision for automated surface defect detection",
        "Sensor telemetry dashboards for machine temperature and vibration",
        "PLC hardware trigger integration for automated pneumatic sorting",
        "Supervisory operational cockpits and yield efficiency reporting"
      ],
      tech: ["Python", "PyTorch", "OpenCV", "TensorRT", "FastAPI", "InfluxDB", "Grafana"]
    }
  ];

  return (
    <div className="bg-[#FAF9F6] dark:bg-[#090D16] text-slate-900 dark:text-slate-50 min-h-screen py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Page Header ── */}
        <div className="max-w-3xl mb-20">
          <div className="text-xs font-semibold tracking-wider text-slate-600 dark:text-slate-400 uppercase mb-3">
            INDUSTRIES
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight mb-5">
            Engineered for South African operating conditions.
          </h1>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed font-normal">
            We design software around real local constraints, including intermittent rural connectivity, high-volume payment rails, regulatory compliance, and industrial hardware integration.
          </p>
        </div>

        {/* ── Natural Editorial Cards for Sectors ── */}
        <div className="space-y-16 mb-24">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div 
                key={sector.id}
                className="p-8 sm:p-10 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                {/* Sector Title Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
                        {sector.title}
                      </h2>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {sector.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {sector.tech.map((t, idx) => (
                      <span 
                        key={idx}
                        className="text-xs font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 border border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3-Column Natural Editorial Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                  
                  {/* Column 1: Challenge */}
                  <div className="space-y-2.5">
                    <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                      {sector.challengeLabel}
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                      {sector.challenge}
                    </p>
                  </div>

                  {/* Column 2: Approach */}
                  <div className="space-y-2.5 md:border-l md:border-slate-200 md:dark:border-slate-800 md:pl-8">
                    <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                      {sector.approachLabel}
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                      {sector.approach}
                    </p>
                  </div>

                  {/* Column 3: Typical Systems Built */}
                  <div className="space-y-2.5 md:border-l md:border-slate-200 md:dark:border-slate-800 md:pl-8">
                    <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                      {sector.systemsLabel}
                    </h3>
                    <ul className="space-y-2">
                      {sector.systemsBuilt.map((sys, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                          <span>{sys}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom Section ── */}
        <div className="p-10 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-center max-w-3xl mx-auto shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
            Have a domain-specific engineering challenge?
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm mb-6 max-w-xl mx-auto leading-relaxed">
            Our systems architects review existing technical constraints and design actionable, milestone-based implementations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md text-sm transition-colors shadow-sm cursor-pointer"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
