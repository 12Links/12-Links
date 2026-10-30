import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ChevronRight, Layers, Cpu, ShieldCheck } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      id: "fintech",
      title: "Fintech & Payment Infrastructure",
      subtitle: "High-throughput fraud prevention and mobile money credit engines",
      localContext: "South African Instant EFT switches, SASSA card distribution points, and Pan-African mobile money gateways.",
      problem: "Payment switches face sophisticated SIM-swap fraud, credential stuffing, and loan approval bottlenecks when evaluating thin-file consumers.",
      architecture: [
        { label: "01. Intake", detail: "Transaction stream ingestion (< 15ms socket connection)" },
        { label: "02. Feature Store", detail: "Behavioral history, velocity counters, and device fingerprint matching" },
        { label: "03. Model Inference", detail: "XGBoost & Isolation Forest ensemble scoring risk in < 35ms" },
        { label: "04. Action Gate", detail: "Automated approve, biometric challenge, or hard block signal" },
      ],
      deliverable: "Custom microservice deployed directly in the client's AWS Cape Town or private data center, with full telemetry logging and POPIA compliance.",
      stack: ["Python", "FastAPI", "Redis", "Scikit-Learn", "PostgreSQL", "Kafka"]
    },
    {
      id: "agritech",
      title: "Agriculture & AgriTech",
      subtitle: "Satellite crop intelligence and offline-first soil telemetry",
      localContext: "Free State grain farms, Mpumalanga macadamia estates, and Limpopo agricultural co-operatives.",
      problem: "Farmers struggle with climate variability, late drought detection, and lack of cellular connectivity across vast rural hectares.",
      architecture: [
        { label: "01. Satellite Tile Ingestion", detail: "Automated Sentinel-2 10m multispectral imagery fetching" },
        { label: "02. Index Pipeline", detail: "Computation of NDVI, NDWI (canopy moisture), and thermal stress" },
        { label: "03. Edge Synchronization", detail: "Ground sensor moisture probe telemetry buffered locally" },
        { label: "04. Offline Mobile App", detail: "Field scout mapping app working 100% offline; syncs upon GSM reconnection" },
      ],
      deliverable: "End-to-end crop analytics suite with web command center and offline-ready mobile applications for field scouts and co-op managers.",
      stack: ["PyTorch", "OpenEO", "React", "DuckDB", "SQLite Offline-Sync", "Expo"]
    },
    {
      id: "healthcare",
      title: "Healthcare & MedTech",
      subtitle: "Decentralized clinic triage and chronic medication inventory monitors",
      localContext: "Public and private community clinics and primary healthcare centers across Gauteng.",
      problem: "Overburdened nursing staff face manual triage paperwork, long patient queues, and sudden stockouts of chronic medication.",
      architecture: [
        { label: "01. Patient Check-In", detail: "Digital intake kiosk recording vitals and chief complaint" },
        { label: "02. Priority Triage", detail: "South African Triage Scale (SATS) algorithmic scoring" },
        { label: "03. Pharmacy Buffer", detail: "Real-time stock deduction tracking antiretroviral and insulin stock levels" },
        { label: "04. Multi-lingual Alert", detail: "Automated SMS queue notifications in English, isiZulu, and Sesotho" },
      ],
      deliverable: "HIPAA & POPIA compliant clinic operational software deployed on local clinic servers with secure cloud sync.",
      stack: ["React Native", "Node.js", "Express", "Supabase", "Africa's Talking SMS"]
    },
    {
      id: "manufacturing",
      title: "Manufacturing & Industrial Automation",
      subtitle: "Computer vision quality assurance and predictive machine maintenance",
      localContext: "Automotive component suppliers, food packaging lines, and industrial plants in Tshwane and Ekurhuleni.",
      problem: "Manual visual inspection misses micro-defects, while unexpected machine downtime costs millions in lost operational throughput.",
      architecture: [
        { label: "01. Optical Stream", detail: "High-frame-rate industrial cameras capturing line components" },
        { label: "02. Defect Classification", detail: "YOLOv8 & OpenCV model detecting surface cracks, misprints, and misalignment" },
        { label: "03. PLC Integration", detail: "Sub-50ms relay trigger to pneumatic rejection arms" },
        { label: "04. Shift Analytics", detail: "Batch yield and component error heatmaps visible on floor tablet dashboards" },
      ],
      deliverable: "Edge-based computer vision container linked directly to factory PLC controllers and supervisory SCADA systems.",
      stack: ["OpenCV", "PyTorch", "Docker Edge", "FastAPI", "WebSockets", "InfluxDB"]
    },
    {
      id: "education",
      title: "Education & E-Learning",
      subtitle: "Adaptive STEM mastery engines and automated student diagnostics",
      localContext: "Secondary schools, technical colleges, and university bridging programs across South Africa.",
      problem: "One-size-fits-all curricula fail to identify foundational math and science learning gaps before high-stakes examinations.",
      architecture: [
        { label: "01. Diagnostic Assessment", detail: "Knowledge state evaluation measuring prerequisite concepts" },
        { label: "02. Item Response Theory", detail: "Real-time question difficulty calibration based on student answers" },
        { label: "03. Targeted Remediation", detail: "Automatic sequencing of micro-lessons targeting identified concept deficits" },
        { label: "04. Educator Cockpit", detail: "Class-level mastery dashboards alerting teachers to at-risk students" },
      ],
      deliverable: "Custom adaptive learning platform optimized for low-bandwidth mobile browsers with zero-rated data support.",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Python", "TailwindCSS"]
    }
  ];

  return (
    <div className="bg-[#0F1117] text-gray-200 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2">
            Industry Focus
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Custom engineering for African industrial sectors.
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed font-normal">
            We don't build generic SaaS templates. Every system we design is built around the specific regulatory environments, data infrastructure, and operational bottlenecks of African industry.
          </p>
        </div>

        {/* Full-width Editorial Rows (Varying Layout Rhythm) */}
        <div className="space-y-16">
          {industries.map((ind) => (
            <div 
              key={ind.id}
              className="p-8 sm:p-10 rounded-2xl bg-[#141721] border border-white/10 space-y-6"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    {ind.title}
                  </h2>
                  <p className="text-emerald-400 text-sm font-medium">
                    {ind.subtitle}
                  </p>
                </div>
                <Link
                  href={`/contact?industry=${encodeURIComponent(ind.title)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-white/10 hover:bg-white/15 px-4 py-2 rounded-lg transition-colors shrink-0 w-fit"
                >
                  Discuss {ind.title.split(" ")[0]} Project <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Problem & Local Context */}
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                    Local Operating Context
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-normal">
                    {ind.localContext}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                    The Technical Friction
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-normal">
                    {ind.problem}
                  </p>
                </div>
              </div>

              {/* Concrete Architecture Workflow */}
              <div className="pt-4 border-t border-white/10">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                  12 Links Architecture Workflow
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {ind.architecture.map((step, sIdx) => (
                    <div key={sIdx} className="p-3.5 rounded-xl bg-[#0E1017] border border-white/5 space-y-1">
                      <span className="text-xs font-semibold text-emerald-400 block">{step.label}</span>
                      <p className="text-xs text-gray-300 font-normal leading-relaxed">{step.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverable & Tech Stack */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs">
                <div className="text-gray-300">
                  <span className="font-semibold text-white">Deliverable: </span>
                  {ind.deliverable}
                </div>
                <div className="flex flex-wrap gap-1.5 shrink-0">
                  {ind.stack.map((t, tIdx) => (
                    <span key={tIdx} className="font-mono text-[11px] px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Direct Closing Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-[#141721] border border-white/10 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Operating in a different sector?
          </h2>
          <p className="text-gray-300 text-sm mb-6 font-normal leading-relaxed">
            We build custom software and machine learning systems for logistics, mining, legal, and public sector organizations. Tell us about your technical challenges.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg text-sm transition-colors"
          >
            Start a Custom Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
