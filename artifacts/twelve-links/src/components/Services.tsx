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
  Terminal,
  Layers,
  Server,
  Lock,
  Workflow
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
        "Real-time fraud and risk scoring models with sub-40ms decisioning",
        "Domain-specific RAG vector search pipelines within POPIA boundaries",
        "Computer vision quality inspection on edge devices (NVIDIA Jetson)",
        "Predictive churn, yield, and demand forecasting algorithms"
      ],
      deliverables: "Trained model weights, containerized FastAPI inference endpoint, automated retraining scripts, and telemetry dashboard.",
      tech: ["Python", "PyTorch", "FastAPI", "PGvector", "Docker", "Hugging Face"],
      pipeline: [
        { name: "Ingestion", tech: "FastAPI / TLS 1.3", latency: "< 5ms" },
        { name: "Feature Store", tech: "Redis In-Memory", latency: "< 3ms" },
        { name: "Model Inference", tech: "Triton / PyTorch", latency: "18ms" },
        { name: "Audit Vault", tech: "Postgres (af-south-1)", latency: "2ms" }
      ],
      uiPreview: {
        title: "FastAPI Inference Endpoint",
        code: `@app.post("/v1/predict/risk")
async def score_transaction(payload: TransactionData):
    features = feature_pipeline.transform(payload)
    risk_score = risk_model.predict_proba(features)[0][1]
    
    return {
        "transaction_id": payload.txn_id,
        "risk_score": float(risk_score),
        "decision": "HOLD" if risk_score > 0.75 else "APPROVE",
        "inference_latency_ms": 31.8
    }`
      }
    },
    {
      id: "web-mobile",
      title: "Full-Stack Web & Mobile Platforms",
      tag: "Product Engineering",
      description: "High-performance web applications and native mobile apps built for the African digital ecosystem. We prioritize clean responsive design, low-bandwidth optimization, and offline-first data sync so your users can transact even in remote areas.",
      features: [
        "Cross-platform iOS and Android apps with React Native & Flutter",
        "Modern Next.js & React enterprise web platforms with sub-second page loads",
        "Offline-first SQLite local caching with automatic background synchronization",
        "Integrated payment gateways (Stripe, Paystack, Peach Payments, OZOW, EFT)"
      ],
      deliverables: "Full TypeScript source code, published App Store / Play Store builds, responsive web deployment, and documented REST/GraphQL APIs.",
      tech: ["React Native", "Next.js", "TypeScript", "TailwindCSS", "PostgreSQL", "Node.js"],
      pipeline: [
        { name: "Client UI", tech: "Next.js / React Native", latency: "60 FPS" },
        { name: "Local Store", tech: "SQLite + CRDT", latency: "0ms (Offline)" },
        { name: "API Gateway", tech: "Node / TypeScript", latency: "< 12ms" },
        { name: "Cloud Sync", tech: "PostgreSQL (Cape Town)", latency: "24ms" }
      ],
      uiPreview: {
        title: "Offline Sync Queue Buffer",
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
        "Automated ETL pipelines extracting data from internal and external banking sources",
        "High-performance analytical databases with DuckDB and PostgreSQL",
        "POPIA-compliant data anonymization, pseudonymization, and secure storage at rest",
        "Executive business intelligence dashboards with live KPI tracking and alerts"
      ],
      deliverables: "Automated pipeline DAGs, SQL migration scripts, role-based access control, and executive reporting views.",
      tech: ["Apache Airflow", "DuckDB", "PostgreSQL", "BigQuery", "Supabase", "Grafana"],
      pipeline: [
        { name: "Source Extract", tech: "SFTP / Banking APIs", latency: "Scheduled" },
        { name: "PII Anonymizer", tech: "POPIA Tokenizer", latency: "< 10ms" },
        { name: "Analytical DB", tech: "DuckDB / Parquet", latency: "< 5ms" },
        { name: "Executive Dash", tech: "Grafana / React", latency: "Real-Time" }
      ],
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
        "Bi-weekly sprint demos with working software deployments and test gates",
        "Daily asynchronous standups and direct Slack/Discord integration",
        "Seamless Git workflow with branch protection and automated testing"
      ],
      deliverables: "Bi-weekly milestone handovers, clean PRs with code reviews, and direct developer communication.",
      tech: ["GitHub Actions", "Docker", "Agile Sprints", "Milestone Approvals", "Code Reviews"],
      pipeline: [
        { name: "Sprint Spec", tech: "Architecture Audit", latency: "Week 1" },
        { name: "Code Sprint", tech: "PRs + CI Pipeline", latency: "Week 2" },
        { name: "Testing Gate", tech: "Staging Demo", latency: "Gate Review" },
        { name: "Handover", tech: "100% IP Assignment", latency: "Day 30 SLA" }
      ],
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
      q: "Are your cloud deployments compliant with South African POPIA laws?",
      a: "Yes. All data storage, user authentication, and data pipelines comply with POPIA Act No. 4 of 2013, including in-country data residency on AWS Cape Town (af-south-1) with AES-256 encryption."
    },
    {
      q: "What support do we receive after our platform goes live?",
      a: "Every engagement includes an automatic 30-day post-launch warranty window where our team resolves any functional bugs at zero extra cost. We also provide ongoing maintenance and retainer partnerships if needed."
    }
  ];

  return (
    <div className="bg-background text-foreground min-h-screen py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Page Header ── */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Engineering Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Production engineering services.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed font-normal">
            We assemble dedicated systems engineering pods to build production software from scratch or eliminate critical bottlenecks in your existing infrastructure.
          </p>
        </div>

        {/* ── Asymmetric 2-Column Capability Showcase ── */}
        <div className="space-y-20 mb-24">
          {capabilities.map((item) => (
            <div 
              key={item.id}
              className="grid lg:grid-cols-12 gap-10 items-start p-8 sm:p-10 rounded-2xl bg-card border border-border hover:border-emerald-500/30 transition-all shadow-sm"
            >
              {/* Left Column: Scope & Features (Cols 1-7) */}
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                  {item.tag}
                </span>

                <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-snug">
                  {item.title}
                </h2>

                <p className="text-muted-foreground text-sm leading-relaxed font-normal">
                  {item.description}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Key Deliverables:
                  </div>
                  <ul className="space-y-2">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-muted-foreground font-normal">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 bg-background border border-border rounded-xl text-xs text-muted-foreground">
                  <strong className="text-foreground">What You Receive: </strong>
                  {item.deliverables}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tech.map((t, tIdx) => (
                    <span key={tIdx} className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-background text-foreground border border-border font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <Link
                    href={`/contact?service=${encodeURIComponent(item.title)}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-foreground transition-colors cursor-pointer"
                  >
                    Scope a {item.title} Project <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/work"
                    className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1 font-mono"
                  >
                    View Reference Blueprint →
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Architecture Flow & Production Code Frame (Cols 8-12) */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* Visual Pipeline Flow Diagram */}
                <div className="p-4 rounded-xl bg-background border border-border space-y-3">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Workflow className="w-3.5 h-3.5" />
                    System Architecture Data Flow:
                  </span>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    {item.pipeline.map((p, pIdx) => (
                      <div key={pIdx} className="p-2.5 rounded-lg bg-card border border-border">
                        <span className="text-[9px] text-muted-foreground block uppercase">Node 0{pIdx + 1}: {p.name}</span>
                        <span className="text-[11px] font-bold text-foreground truncate block">{p.tech}</span>
                        <span className="text-[9px] text-emerald-400 mt-1 block font-semibold">{p.latency}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code Editor Window */}
                <div className="rounded-xl border border-border bg-background overflow-hidden shadow-lg">
                  <div className="px-4 py-2.5 bg-muted/30 border-b border-border flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="text-muted-foreground text-[11px] ml-1">{item.uiPreview.title}</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">af-south-1</span>
                  </div>

                  <pre className="p-4 font-mono text-[11px] leading-relaxed text-foreground overflow-x-auto">
                    {item.uiPreview.code}
                  </pre>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* ── Honest Engineering FAQs ── */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-muted-foreground font-normal">
              Direct, transparent answers regarding contracts, code ownership, and our delivery model.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className="rounded-xl border border-border bg-card overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex justify-between items-center text-sm font-semibold text-foreground hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-emerald-400 transition-transform duration-200 shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-muted-foreground leading-relaxed border-t border-border pt-3 font-normal">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Final CTA ── */}
        <div className="p-10 rounded-2xl bg-card border border-border text-center max-w-3xl mx-auto shadow-sm">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Ready to design your system architecture?
          </h3>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Schedule a 20-minute consultation with our lead engineers to map your data contracts and receive a milestone proposal within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-xl text-xs transition-colors cursor-pointer"
            >
              Schedule a Technical Call
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/trust"
              className="inline-flex items-center justify-center gap-2 border border-border hover:bg-muted text-foreground font-medium px-6 py-3 rounded-xl text-xs transition-colors cursor-pointer"
            >
              Review Trust & Governance Center
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
