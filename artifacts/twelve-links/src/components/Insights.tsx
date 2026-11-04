import { useState } from "react";
import { Link } from "wouter";
import { 
  ArrowRight, 
  BookOpen, 
  Calendar, 
  Clock, 
  ExternalLink, 
  Github, 
  Tag, 
  User, 
  ChevronRight,
  Sparkles,
  Terminal,
  Share2
} from "lucide-react";

interface ResearchArticle {
  id: string;
  title: string;
  summary: string;
  author: string;
  role: string;
  date: string;
  readTime: string;
  category: string;
  githubUrl?: string;
  content: {
    intro: string;
    sections: { heading: string; body: string; codeSnippet?: string }[];
    conclusion: string;
  };
}

const ARTICLES: ResearchArticle[] = [
  {
    id: "popia-vector-search",
    title: "Deploying Low-Latency Vector Search within South African POPIA Residency Boundaries",
    summary: "A technical benchmark of PGvector vs Qdrant running in-country on AWS Cape Town (af-south-1), evaluating cosine similarity latency and POPIA Section 19 cryptographic audit logs.",
    author: "Nkosinathi Ngwenya & Tebello Mohohoma",
    role: "CTO // AI Systems & CEO // Data Science",
    date: "October 2026",
    readTime: "12 min read",
    category: "AI/ML",
    githubUrl: "https://github.com/12Links/12-Links",
    content: {
      intro: "Under Section 72 of South Africa's Protection of Personal Information Act (POPIA), transferring personal identifying information outside South Africa requires explicit justification or equivalent cross-border data protection laws. For enterprise teams deploying LLMs and RAG pipelines, routing proprietary embedding queries to foreign hyperscalers introduces acute compliance liabilities.",
      sections: [
        {
          heading: "1. The In-Country Latency Equation: Johannesburg to Cape Town",
          body: "When serving enterprises in Gauteng, round-trip network transit to European or US vector endpoints adds 160ms–220ms of pure transmission overhead. By hosting dense vector indices natively in AWS Cape Town (af-south-1), national backbone latency over Teraco Peering drops to 24ms–34ms.",
          codeSnippet: `# PostgreSQL PGvector in-country query with IVFFlat indexing\nSELECT chunk_id, content, 1 - (embedding <=> query_vector) AS cosine_similarity\nFROM enterprise_knowledge_vectors\nWHERE tenant_id = 'za_fintech_tenant_01'\n  AND popia_clearance_level >= 2\nORDER BY embedding <=> query_vector\nLIMIT 5;`
        },
        {
          heading: "2. Performance Benchmarks: PGvector vs. Qdrant",
          body: "We evaluated 1,000,000 1536-dimensional vectors on an r6i.xlarge instance in af-south-1. PGvector achieved 14.2ms p95 latency under moderate load, while Qdrant maintained 8.4ms with memory-mapped storage. Both setups satisfied Section 19 at-rest encryption without measurable penalty."
        }
      ],
      conclusion: "In-country vector storage is not only a regulatory imperative under POPIA—it yields a 4x latency advantage for South African users over international API routing."
    }
  },
  {
    id: "offline-sqlite-sync",
    title: "Architecting Offline-First SQLite Synchronization for Low-Bandwidth Agricultural IoT Networks",
    summary: "How to deploy Conflict-Free Replicated Data Types (CRDTs) and compact vector tile diffs over 2G/EDGE rural GSM networks in Free State and Limpopo farming clusters.",
    author: "Jacky Mpoka & Luke George",
    role: "Project Lead // Fullstack & COO // Operations",
    date: "October 2026",
    readTime: "10 min read",
    category: "Distributed Systems",
    githubUrl: "https://github.com/12Links/12-Links",
    content: {
      intro: "Rural South African agricultural cooperatives face severe infrastructure constraints: unpredictable power shedding and patchy 2G/EDGE connectivity that cause traditional REST and WebSocket clients to drop transactions. Systems must be architected as offline-first by default.",
      sections: [
        {
          heading: "1. The Local Edge Store: Embedded SQLite with Delta Buffers",
          body: "Instead of treating local memory as a temporary cache, all moisture telemetry, field scans, and satellite parcel polygons are written directly to an embedded SQLite instance on the device. All mutations generate monotonic operation logs.",
          codeSnippet: `-- Delta queue schema for offline synchronization\nCREATE TABLE offline_sync_queue (\n  mutation_id TEXT PRIMARY KEY,\n  table_name TEXT NOT NULL,\n  row_id TEXT NOT NULL,\n  operation TEXT CHECK(operation IN ('INSERT', 'UPDATE', 'DELETE')),\n  payload_json TEXT NOT NULL,\n  created_at_epoch INTEGER NOT NULL,\n  synced_at INTEGER NULL\n);`
        },
        {
          heading: "2. Differential Mesh Sync over Intermittent GSM",
          body: "When the GSM modem detects connectivity, the client batches pending deltas using Brotli compression, achieving an 85% bandwidth reduction. Conflicts are resolved via deterministic state timestamps."
        }
      ],
      conclusion: "Designing for zero connectivity ensures that field operators never lose telemetry, regardless of rural network outages."
    }
  },
  {
    id: "payment-switch-fraud",
    title: "Mitigating SIM-Swap & Payment Spoofing on High-Volume African Switches",
    summary: "Real-time temporal variance feature engineering and sub-40ms decisioning on FastAPI to halt account takeover fraud before Instant EFT settlement.",
    author: "Lesego Mageza & Savuzwa Mpayipheli",
    role: "CFO // InfoSec & Head of Partnerships",
    date: "September 2026",
    readTime: "14 min read",
    category: "Fintech",
    githubUrl: "https://github.com/12Links/12-Links",
    content: {
      intro: "SIM-swap fraud accounts for hundreds of millions of Rands in annual losses across Southern African financial ecosystems. Fraud syndicates intercept OTPs and initiate high-velocity transactions across instant EFT switches in minutes. Stopping these requires sub-40ms inline classification.",
      sections: [
        {
          heading: "1. Feature Engineering: The Temporal SIM-State Vector",
          body: "Standard rules engines look at transaction amount and location. Our pipeline incorporates SIM IMSI change timestamps provided by telecommunication APIs, calculating a temporal risk decay score.",
          codeSnippet: `@app.post("/v1/score/switch")\nasync def score_transaction(payload: PaymentPayload):\n    sim_delta_hours = (current_epoch - payload.sim_activated_epoch) / 3600.0\n    velocity_10m = await redis_client.get(f"vel:{payload.account_hash}")\n    \n    risk_score = model.predict_proba([[sim_delta_hours, velocity_10m, payload.amount]])[0][1]\n    \n    if risk_score > 0.85 and sim_delta_hours < 24.0:\n        return {"decision": "HOLD_BIOMETRIC_CHALLENGE", "risk": risk_score}\n    return {"decision": "APPROVE", "risk": risk_score}`
        },
        {
          heading: "2. Production Decision SLAs",
          body: "By running model scoring adjacent to the transaction switch with in-memory Redis feature lookups, total decision latency averages 31.8ms, allowing inline holds before clearing."
        }
      ],
      conclusion: "Low-latency ML pipelines can halt SIM-swap attacks in real time without deteriorating user transaction experience."
    }
  }
];

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [readingArticle, setReadingArticle] = useState<ResearchArticle | null>(null);

  const categories = ["All", "AI/ML", "Distributed Systems", "Fintech"];

  const filteredArticles = selectedCategory === "All"
    ? ARTICLES
    : ARTICLES.filter(a => a.category === selectedCategory);

  return (
    <div className="bg-background text-foreground min-h-screen py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Research Blog Hero ── */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>12 Links Engineering & Research</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Technical deep dives on African systems engineering.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed font-normal">
            Our engineers and data scientists publish findings, architecture benchmarks, and open-source methodologies addressing real-world operational challenges across Southern Africa.
          </p>
        </div>

        {/* ── Category Filters ── */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-border">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? "bg-emerald-500 text-white"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Articles Grid ── */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {filteredArticles.map((article) => (
            <div 
              key={article.id}
              className="p-6 rounded-2xl bg-card border border-border hover:border-emerald-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded text-[11px]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground leading-snug hover:text-emerald-400 transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border space-y-4">
                <div className="text-xs text-muted-foreground">
                  <div className="font-semibold text-foreground">{article.author}</div>
                  <div className="text-[11px] text-muted-foreground/80">{article.role}</div>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setReadingArticle(article)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-foreground transition-colors cursor-pointer"
                  >
                    Read Paper <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {article.githubUrl && (
                    <a
                      href={article.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                      title="View GitHub Reference"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Full Article Reading Drawer / Modal ── */}
        {readingArticle && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <div className="bg-card border border-border rounded-2xl max-w-3xl w-full p-6 sm:p-10 space-y-6 my-auto shadow-2xl relative text-foreground">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <span className="text-xs font-mono text-emerald-400 uppercase">
                  {readingArticle.category} // Technical Deep Dive
                </span>
                <button
                  type="button"
                  onClick={() => setReadingArticle(null)}
                  className="px-3 py-1 rounded bg-muted hover:bg-muted/80 text-xs font-mono text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  Close [ESC]
                </button>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                  {readingArticle.title}
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span>By <strong>{readingArticle.author}</strong></span>
                  <span>•</span>
                  <span>{readingArticle.date}</span>
                  <span>•</span>
                  <span>{readingArticle.readTime}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-background border border-border text-xs text-muted-foreground leading-relaxed italic">
                {readingArticle.content.intro}
              </div>

              <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
                {readingArticle.content.sections.map((sec, sIdx) => (
                  <div key={sIdx} className="space-y-2.5">
                    <h3 className="text-base font-bold text-foreground">{sec.heading}</h3>
                    <p className="text-xs leading-relaxed">{sec.body}</p>
                    {sec.codeSnippet && (
                      <pre className="p-3.5 rounded-lg bg-background border border-border text-emerald-400 font-mono text-[11px] overflow-x-auto leading-relaxed mt-2">
                        {sec.codeSnippet}
                      </pre>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-foreground leading-relaxed">
                <strong className="text-emerald-400 block mb-1">Conclusion:</strong>
                {readingArticle.content.conclusion}
              </div>

              <div className="pt-4 border-t border-border flex justify-end">
                <button
                  type="button"
                  onClick={() => setReadingArticle(null)}
                  className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg text-xs cursor-pointer"
                >
                  Finished Reading
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
