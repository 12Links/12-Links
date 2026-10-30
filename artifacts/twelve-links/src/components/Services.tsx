import { useState } from "react";
import { Link } from "wouter";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  Code2, 
  Brain, 
  Database, 
  Smartphone,
  ShieldCheck,
  HelpCircle,
  Terminal
} from "lucide-react";

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const capabilities = [
    {
      id: "ai-systems",
      title: "Applied AI & Custom Machine Learning",
      tag: "Intelligent Systems",
      description: "We design, train, and deploy production machine learning models tailored to your proprietary data. From real-time transaction anomaly detection to computer vision on factory lines, our models run with low latency and measurable business impact.",
      features: [
        "Real-time fraud and risk scoring models",
        "Document parsing and natural language information extraction",
        "Computer vision quality inspection on edge devices",
        "Predictive churn, yield, and demand forecasting"
      ],
      deliverables: "Trained model weights, containerized FastAPI inference endpoint, automated retraining scripts, and telemetry dashboard.",
      tech: ["Python", "PyTorch", "FastAPI", "Scikit-Learn", "Docker", "Hugging Face"],
      uiPreview: {
        title: "Model Inference Endpoint",
        code: `@app.post("/v1/predict/risk")
async def score_transaction(payload: TransactionData):
    features = feature_pipeline.transform(payload)
    risk_score = risk_model.predict_proba(features)[0][1]
    
    return {
        "transaction_id": payload.txn_id,
        "risk_score": float(risk_score),
        "decision": "HOLD" if risk_score > 0.75 else "APPROVE",
        "inference_latency_ms": 34.2
    }`
      }
    },
    {
      id: "web-mobile",
      title: "Full-Stack Web & Mobile Platforms",
      tag: "Product Engineering",
      description: "High-performance web applications and native mobile apps built for the African digital ecosystem. We prioritize clean responsive design, low-bandwidth optimization, and offline-first data sync so your users can transact even in remote areas.",
      features: [
        "Cross-platform iOS and Android apps with React Native",
        "Modern Next.js & React enterprise web platforms",
        "Offline-first SQLite local caching with automatic cloud sync",
        "Integrated payment gateways (Stripe, Paystack, Peach Payments, OZOW)"
      ],
      deliverables: "Full TypeScript source code, published App Store / Play Store builds, responsive web deployment, and documented REST/GraphQL APIs.",
      tech: ["React Native", "Next.js", "TypeScript", "TailwindCSS", "PostgreSQL", "Node.js"],
      uiPreview: {
        title: "Offline Sync Architecture",
        code: `// Offline-first local transaction buffer
export async function queueLocalAction(action: ClientAction) {
  await localDb.insert(actionQueue).values({
    id: generateId(),
    payload: JSON.stringify(action),
    synced: false,
    timestamp: Date.now()
  });

  if (navigator.onLine) {
    await triggerBackgroundSync();
  }
}`
      }
    },
    {
      id: "data-infrastructure",
      title: "Data Pipelines & Business Intelligence",
      tag: "Data Architecture",
      description: "We help organizations organize scattered spreadsheets and legacy SQL databases into clean, automated data pipelines. Get real-time dashboards that your leadership team can trust for daily operational decisions.",
      features: [
        "Automated ETL pipelines extracting data from internal and external sources",
        "High-performance analytical databases with DuckDB and BigQuery",
        "POPIA-compliant data anonymization and secure storage at rest",
        "Executive business intelligence dashboards with live KPI tracking"
      ],
      deliverables: "Automated pipeline DAGs, SQL migration scripts, role-based access control, and executive reporting views.",
      tech: ["Apache Airflow", "DuckDB", "PostgreSQL", "BigQuery", "Supabase", "Grafana"],
      uiPreview: {
        title: "ETL Pipeline DAG Spec",
        code: `with DAG('daily_financial_reconciliation', schedule='@daily') as dag:
    extract_banking_logs = PythonOperator(task_id='extract')
    anonymize_pii_popia = PythonOperator(task_id='anonymize')
    compute_daily_reconcile = PostgresOperator(task_id='reconcile')
    notify_finance_lead = SlackOperator(task_id='notify')

    extract_banking_logs >> anonymize_pii_popia >> compute_daily_reconcile >> notify_finance_lead`
      }
    },
    {
      id: "embedded-pods",
      title: "Dedicated Engineering Pods",
      tag: "Team Augmentation",
      description: "Need an accountable development team without the overhead of lengthy agency retainers? We assemble dedicated student builder pods led by a senior tech lead to accelerate your feature backlog or build an MVP sprint.",
      features: [
        "Dedicated lead engineer as your single accountable point of contact",
        "Bi-weekly sprint demos with working software deployments",
        "Daily asynchronous standups and direct Slack/Discord integration",
        "Seamless Git workflow with branch protection and automated testing"
      ],
      deliverables: "Bi-weekly milestone handovers, clean PRs with code reviews, and direct developer communication.",
      tech: ["GitHub Actions", "Docker", "Agile Sprints", "Milestone Approvals", "Code Reviews"],
      uiPreview: {
        title: "Sprint Delivery Framework",
        code: `[Sprint Cadence]
Week 1: Architecture review -> Data contracts -> Sprint kickoff
Week 2: Core feature development -> Unit testing -> CI validation
Milestone Gate: Client staging demo -> Acceptance sign-off
Production: Automated blue/green deploy -> 30-day warranty window`
      }
    }
  ];

  const faqs = [
    {
      q: "Who owns the intellectual property and source code?",
      a: "You do. 100%. Upon completion and milestone approval, all custom software repositories, model weights, deployment scripts, and architectural documentation belong exclusively to your organization."
    },
    {
      q: "How does your milestone-based pricing work?",
      a: "We break every project into clear, functional milestones (e.g., Gate 1: Architecture, Gate 2: Core Backend, Gate 3: UI & Integration, Gate 4: Production Handover). You review, test, and approve each deliverable before paying for that milestone."
    },
    {
      q: "How does working with a student-led team benefit our business?",
      a: "You get exceptionally motivated, cutting-edge engineers working directly on your code without the bloated overhead, layers of account managers, or marked-up hourly rates of traditional consultancies. Every team member has verified real-world code output."
    },
    {
      q: "Are your cloud deployments compliant with South African POPIA laws?",
      a: "Yes. All data storage, user authentication, and data pipelines comply with POPIA Act No. 4 of 2013, including hosting options in South African cloud regions (e.g. AWS Cape Town af-south-1) for localized data residency."
    },
    {
      q: "What support do we receive after our platform goes live?",
      a: "Every engagement includes an automatic 30-day post-launch warranty window where our team resolves any functional bugs at zero extra cost. We also provide ongoing maintenance and retainer partnerships if needed."
    }
  ];

  return (
    <div className="bg-[#0F1117] text-gray-200 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2">
            Capabilities
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Production engineering services.
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed font-normal">
            We assemble dedicated student engineering pods to build production systems from scratch or eliminate critical bottlenecks in your existing stack.
          </p>
        </div>

        {/* Asymmetric 2-Column Capability Showcase */}
        <div className="space-y-20 mb-24">
          {capabilities.map((item) => (
            <div 
              key={item.id}
              className="grid lg:grid-cols-12 gap-10 items-start p-8 sm:p-10 rounded-2xl bg-[#141721] border border-white/10"
            >
              {/* Left Column: Scope & Features (7 Cols) */}
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded">
                  {item.tag}
                </span>

                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                  {item.title}
                </h2>

                <p className="text-gray-300 text-sm leading-relaxed font-normal">
                  {item.description}
                </p>

                <div className="pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    Key Deliverables:
                  </div>
                  <ul className="space-y-2">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-gray-300 font-normal">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg text-xs text-gray-300 pt-3">
                  <span className="font-semibold text-white">What You Receive: </span>
                  {item.deliverables}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tech.map((t, tIdx) => (
                    <span key={tIdx} className="font-mono text-[11px] px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href={`/contact?service=${encodeURIComponent(item.title)}`}
                    className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-white transition-colors"
                  >
                    Scope a {item.title} Project <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Real Architecture / Code Snippet Frame (5 Cols) */}
              <div className="lg:col-span-5">
                <div className="rounded-xl border border-white/10 bg-[#0E1017] overflow-hidden">
                  <div className="px-4 py-2.5 bg-[#12151F] border-b border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-400">{item.uiPreview.title}</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40 font-mono">
                      Production Spec
                    </span>
                  </div>
                  <div className="p-4 overflow-x-auto text-xs font-mono text-gray-300 bg-[#0A0C12] leading-relaxed">
                    <pre>
                      <code>{item.uiPreview.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clear FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-sm font-normal">
              Direct, honest answers about our pricing, intellectual property, and pod velocity.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-xl bg-[#141721] border border-white/10 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between text-white font-medium text-sm gap-4"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed font-normal border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#141721] border border-white/10 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to scope your engineering requirements?
          </h2>
          <p className="text-gray-300 text-sm mb-6 font-normal leading-relaxed">
            Tell us what you need built. An engineering lead will review your scope and provide a milestone proposal within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg text-sm transition-colors"
          >
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
