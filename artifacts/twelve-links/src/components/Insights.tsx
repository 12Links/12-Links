import { useState } from "react";
import { Link } from "wouter";
import { 
  ArrowRight, 
  ChevronDown 
} from "lucide-react";

interface Note {
  id: string;
  title: string;
  authors: string;
  date: string;
  category: string;
  summary: string;
  content: {
    overview: string;
    sections: { heading: string; body: string; codeSnippet?: string }[];
    summaryPoint: string;
  };
}

export default function Insights() {
  const [expandedNote, setExpandedNote] = useState<string | null>("offline-sync");

  const notes: Note[] = [
    {
      id: "offline-sync",
      title: "Designing Offline-First Mobile Sync with SQLite for Low-Connectivity Field Operations",
      authors: "Jacky Mpoka & Lwandiso George",
      date: "October 2026",
      category: "Distributed Systems & Mobile",
      summary: "Architectural patterns for reliable field data collection using embedded SQLite, monotonic delta queues, and deterministic conflict resolution over intermittent cellular networks.",
      content: {
        overview: "In many field and rural environments across South Africa, reliable LTE or fiber connectivity cannot be assumed. Building software that fails or freezes when offline leads to abandoned workflows and lost data. An offline-first architecture treats local storage as the primary source of truth, treating the network as an asynchronous transport layer.",
        sections: [
          {
            heading: "Local Storage and Monotonic Operation Queues",
            body: "Instead of caching API responses ephemerally in application memory, all user inputs and field measurements are written directly to an embedded SQLite database. Each mutation produces a deterministic delta queue record containing the target table, operation type, and payload timestamp.",
            codeSnippet: `-- Operation queue schema for local write capture
CREATE TABLE local_mutation_queue (
  id TEXT PRIMARY KEY,
  table_name TEXT NOT NULL,
  entity_id TEXT NOT NULL,
  operation TEXT CHECK (operation IN ('INSERT', 'UPDATE', 'DELETE')),
  payload_json TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  synced_at INTEGER NULL
);`
          },
          {
            heading: "Delta Compression and State Synchronization",
            body: "When the client device detects network availability, a background synchronization daemon batches outstanding records. Rather than resending entire entities, the engine transmits compact diffs to reduce cellular bandwidth on constrained networks."
          }
        ],
        summaryPoint: "Designing for zero connectivity ensures that field operators never lose data, regardless of local network interruptions."
      }
    },
    {
      id: "pgvector-residency",
      title: "Running PostgreSQL and pgvector Workloads Within South African Cloud Regions",
      authors: "Nkosinathi Ngwenya & Tebello Mohohoma",
      date: "September 2026",
      category: "Data Systems & Machine Learning",
      summary: "Evaluating latency, query throughput, and data residency compliance when operating high-dimensional vector embeddings on in-country database infrastructure.",
      content: {
        overview: "Deploying retrieval-augmented generation (RAG) and embedding search often tempts teams to route proprietary data to third-party vector APIs hosted abroad. Hosting dense vector stores in-country avoids cross-border transfer compliance friction while keeping network transit latencies low for local users.",
        sections: [
          {
            heading: "Index Architecture with pgvector",
            body: "Using PostgreSQL with the pgvector extension allows organizations to maintain transactional relational tables alongside vector embeddings within a single database instance, eliminating the operational complexity of syncing separate databases.",
            codeSnippet: `-- Vector similarity search within in-country PostgreSQL instance
SELECT 
  document_id,
  content_snippet,
  1 - (embedding <=> $1) AS similarity_score
FROM document_embeddings
WHERE tenant_id = $2
ORDER BY embedding <=> $1
LIMIT 5;`
          },
          {
            heading: "Operational Trade-offs: HNSW vs IVFFlat",
            body: "For datasets under 500,000 vectors, IVFFlat provides rapid index build times and minimal memory consumption. For larger collections requiring sub-10ms query responses, HNSW indices deliver superior recall and throughput at the expense of higher memory allocation."
          }
        ],
        summaryPoint: "In-country database hosting keeps application latency low while ensuring full compliance with local data protection requirements."
      }
    },
    {
      id: "payment-anomaly",
      title: "Feature Engineering for Real-Time Payment Anomaly Detection",
      authors: "Lesego Mageza & Savuzwa Mpayipheli",
      date: "August 2026",
      category: "Fintech & Data Engineering",
      summary: "Designing low-latency feature pipelines and streaming counters to identify fraudulent payment patterns before transaction settlement.",
      content: {
        overview: "Payment switches and financial applications process thousands of transactions per second. Identifying unauthorized transactions or SIM-swap account takeovers requires evaluating behavioural features within a strict time budget before dispatching confirmation.",
        sections: [
          {
            heading: "Streaming Velocity Counters",
            body: "Static rules struggle against evolving fraud patterns. Computing real-time velocity features, such as transaction counts within 10-minute, 1-hour, and 24-hour rolling windows, enables machine learning models to identify sudden deviations in account velocity.",
            codeSnippet: `# Sliding-window velocity accumulator in memory
def compute_velocity_features(account_id: str, current_time: int) -> dict:
    recent_transactions = redis_client.zrangebyscore(
        f"account_txns:{account_id}",
        min=current_time - 3600,
        max=current_time
    )
    return {
        "txn_count_1h": len(recent_transactions),
        "txn_sum_1h": sum(float(tx['amount']) for tx in recent_transactions)
    }`
          },
          {
            heading: "Stateless Scoring Microservices",
            body: "To meet strict latency targets, inference services should remain stateless. Feature aggregation is separated into an in-memory cache, allowing the model scoring container to execute inference in single-digit milliseconds."
          }
        ],
        summaryPoint: "Separating fast feature lookup from stateless model scoring yields consistent decisioning without slowing down transaction flow."
      }
    }
  ];

  return (
    <div className="bg-[#FAF9F6] dark:bg-[#090D16] text-slate-900 dark:text-slate-50 min-h-screen py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Page Header ── */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider text-slate-600 dark:text-slate-400 uppercase mb-3">
            TECHNICAL NOTES
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight mb-5">
            Engineering writeups and technical notes.
          </h1>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed font-normal">
            Practical insights on distributed systems, data infrastructure, and machine learning architectures written by our engineers in Pretoria.
          </p>
        </div>

        {/* ── Technical Notes List ── */}
        <div className="space-y-8 mb-20">
          {notes.map((note) => {
            const isExpanded = expandedNote === note.id;
            return (
              <article 
                key={note.id}
                className="p-8 sm:p-10 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-medium">
                    {note.category}
                  </span>
                  <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
                    <span>{note.authors}</span>
                    <span>·</span>
                    <span>{note.date}</span>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  {note.title}
                </h2>

                <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-6 font-normal">
                  {note.summary}
                </p>

                <button
                  type="button"
                  onClick={() => setExpandedNote(isExpanded ? null : note.id)}
                  className="inline-flex items-center gap-2 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                >
                  <span>{isExpanded ? "Collapse Note" : "Read Full Technical Note"}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                </button>

                {/* Expanded Full Article View */}
                {isExpanded && (
                  <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 space-y-6">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                      {note.content.overview}
                    </p>

                    {note.content.sections.map((sec, idx) => (
                      <div key={idx} className="space-y-3">
                        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                          {sec.heading}
                        </h3>
                        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                          {sec.body}
                        </p>

                        {sec.codeSnippet && (
                          <div className="mt-3 p-4 rounded-md bg-slate-100 text-slate-900 border border-slate-300 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800 overflow-x-auto">
                            <pre className="text-xs font-mono leading-relaxed">
                              <code>{sec.codeSnippet}</code>
                            </pre>
                          </div>
                        )}
                      </div>
                    ))}

                    <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                      <p className="text-xs font-mono text-slate-600 dark:text-slate-400">
                        Summary: {note.content.summaryPoint}
                      </p>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* ── Bottom Section ── */}
        <div className="p-10 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-center max-w-3xl mx-auto shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
            Discussing an architecture challenge?
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm mb-6 max-w-xl mx-auto leading-relaxed">
            Our engineers are open to technical discussions regarding data infrastructure, offline synchronization, and machine learning architectures.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md text-sm transition-colors shadow-sm cursor-pointer"
          >
            Contact Engineering
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
