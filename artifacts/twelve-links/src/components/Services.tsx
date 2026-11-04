import { useState } from "react";
import { Link } from "wouter";
import { 
  ArrowRight, 
  Check, 
  ChevronDown, 
  Brain, 
  Code2, 
  Database, 
  Users 
} from "lucide-react";

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const serviceBlocks = [
    {
      id: "applied-ai",
      icon: Brain,
      title: "Applied AI & Intelligent Automation",
      overview: "We design, evaluate, and deploy domain-specific machine learning systems tailored to operational workflows. Every model is integrated into production backends with clear telemetry and latency bounds.",
      useCases: [
        "Automated document processing and structured information extraction",
        "Internal knowledge search and retrieval-augmented generation (RAG)",
        "Real-time transaction risk and anomaly scoring",
        "Industrial computer vision for automated defect detection"
      ],
      deliverables: [
        "Trained model weights and evaluation benchmarks",
        "Containerized FastAPI inference microservices",
        "Automated retraining pipelines and data validation scripts",
        "Production deployment manifests and telemetry instrumentation"
      ],
      stack: ["Python", "PyTorch", "FastAPI", "PostgreSQL", "pgvector", "Docker", "Triton"]
    },
    {
      id: "web-mobile",
      icon: Code2,
      title: "Web & Mobile Product Engineering",
      overview: "We architect resilient consumer platforms and internal operational applications. Systems are engineered for speed, low-bandwidth environments, and high-frequency transaction volumes.",
      useCases: [
        "Customer-facing SaaS platforms and transactional web portals",
        "Field-service mobile apps with offline data capture and sync",
        "South African payment gateway integrations (Paystack, Peach Payments, Ozow, Instant EFT)",
        "High-performance operational portals and administrative consoles"
      ],
      deliverables: [
        "Full TypeScript web and native mobile source code",
        "Automated end-to-end and unit test suites",
        "Comprehensive OpenAPI specifications and API documentation",
        "Production deployment across App Store, Google Play, and cloud hosts"
      ],
      stack: ["TypeScript", "Next.js", "React", "React Native", "Node.js", "PostgreSQL", "TailwindCSS"]
    },
    {
      id: "data-engineering",
      icon: Database,
      title: "Data Engineering & Analytics",
      overview: "We transform fragmented spreadsheets, legacy databases, and transactional logs into reliable, automated data pipelines and real-time analytical dashboards.",
      useCases: [
        "Consolidating fragmented spreadsheets and legacy SQL databases",
        "Building automated ETL and ELT data pipelines with robust validation",
        "Implementing structured analytical data warehouses with audit trails",
        "Executive business intelligence dashboards with live metrics"
      ],
      deliverables: [
        "Automated ingestion pipelines and orchestration DAGs",
        "Structured PostgreSQL and DuckDB analytical warehouses",
        "Data schema documentation and automated integrity checks",
        "Executive reporting dashboards and automated alerts"
      ],
      stack: ["Python", "PostgreSQL", "DuckDB", "Apache Airflow", "SQL", "Grafana", "Docker"]
    },
    {
      id: "dedicated-teams",
      icon: Users,
      title: "Dedicated Engineering Teams",
      overview: "Augment your existing organization with an accountable, highly skilled engineering squad. Led by an experienced technical lead, our teams integrate directly into your sprint cycles.",
      useCases: [
        "Accelerating engineering roadmaps without hiring delays",
        "Shipping minimum viable products (MVPs) on fixed milestone deadlines",
        "Augmenting internal teams with specialized systems and AI developers",
        "Clearing complex architectural and technical debt backlogs"
      ],
      deliverables: [
        "Dedicated project lead as single accountable contact",
        "Bi-weekly sprint demos with functional staging deployments",
        "Shared Git workflow with branch protection and code reviews",
        "Complete automated CI/CD pipeline and test coverage"
      ],
      stack: ["Git", "GitHub Actions", "Docker", "Agile Sprints", "Code Reviews", "Milestone Tracking"]
    }
  ];

  const faqs = [
    {
      q: "Who owns the intellectual property and source code?",
      a: "Your organization retains 100% ownership. Upon milestone approval and payment, all custom code repositories, trained model weights, deployment manifests, and architectural documentation are fully transferred to you."
    },
    {
      q: "How does your milestone-based delivery work?",
      a: "Every engagement is divided into functional milestones with clear acceptance criteria. Your technical team reviews and tests the software in staging before signing off on milestone completion."
    },
    {
      q: "Can you deploy directly into our existing cloud environment?",
      a: "Yes. We configure and deploy systems directly into your organization's AWS, Azure, Google Cloud, or on-premise Linux environments so you maintain complete administrative sovereignty."
    },
    {
      q: "What support is provided after deployment?",
      a: "Each project includes a 30-day production warranty period during which our team actively monitors the deployment and resolves any defects at no additional cost."
    }
  ];

  return (
    <div className="bg-[#090D16] text-slate-50 min-h-screen py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Page Header ── */}
        <div className="max-w-3xl mb-20">
          <div className="text-xs font-semibold tracking-wider text-slate-600 dark:text-slate-400 uppercase mb-3">
            SERVICES & CAPABILITIES
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight mb-5">
            Full-lifecycle software and systems engineering.
          </h1>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed font-normal">
            Whether you need a custom platform built from the ground up or a dedicated engineering team to clear critical technical bottlenecks, we deliver production-ready code.
          </p>
        </div>

        {/* ── 2-Column Specification Layout For Service Blocks ── */}
        <div className="space-y-12 mb-24">
          {serviceBlocks.map((block) => {
            const Icon = block.icon;
            return (
              <div 
                key={block.id}
                className="p-8 sm:p-10 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                {/* Header within block */}
                <div className="flex items-center gap-3.5 pb-6 mb-8 border-b border-slate-200 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
                      {block.title}
                    </h2>
                  </div>
                </div>

                {/* 2-Column Grid */}
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                  
                  {/* Left Column: Overview & Use Cases */}
                  <div className="lg:col-span-6 space-y-6">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                      {block.overview}
                    </p>

                    <div>
                      <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-3">
                        Operational Use Cases
                      </h3>
                      <ul className="space-y-2.5">
                        {block.useCases.map((uc, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                            <span>{uc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Deliverables & Tech Stack */}
                  <div className="lg:col-span-6 space-y-6 lg:pl-6 lg:border-l lg:border-slate-200 lg:dark:border-slate-800">
                    <div>
                      <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-3">
                        Concrete Deliverables
                      </h3>
                      <ul className="space-y-2.5">
                        {block.deliverables.map((deliv, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                            <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                      <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-3">
                        Core Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {block.stack.map((item, idx) => (
                          <span 
                            key={idx}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* ── FAQ Section ── */}
        <div className="max-w-3xl mx-auto pt-12 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
              Frequently asked questions
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              Straight answers on commercial terms, IP ownership, and project governance.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-slate-900 dark:text-slate-50 font-medium text-base hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-800/60">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3.5 rounded-md text-sm transition-colors shadow-sm cursor-pointer"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
