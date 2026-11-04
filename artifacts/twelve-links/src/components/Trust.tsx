import { useState } from "react";
import { Link } from "wouter";
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  Server, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Download, 
  ExternalLink,
  Cpu,
  Key,
  Database,
  Terminal,
  Scale
} from "lucide-react";

export default function Trust() {
  const [activeTab, setActiveTab] = useState<"popia" | "ip" | "infosec" | "warranty">("popia");

  return (
    <div className="bg-background text-foreground min-h-screen py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Enterprise Trust Hero ── */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>12 Links Trust & Security Center</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Enterprise governance, POPIA compliance, and verified IP protection.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed font-normal">
            We hold our engineering to the highest regulatory and security standards. Enterprise legal and procurement teams can review our data protection posture, code ownership guarantees, and infrastructure controls below.
          </p>
        </div>

        {/* ── 4 Quick Trust Badges ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-4 rounded-xl bg-card border border-border space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold">
              <Scale className="w-4 h-4" />
              <span>POPIA Act No. 4</span>
            </div>
            <h4 className="text-sm font-bold text-foreground">100% In-Country Storage</h4>
            <p className="text-[11px] text-muted-foreground leading-tight">Data never leaves South African jurisdiction without explicit bilateral consent.</p>
          </div>

          <div className="p-4 rounded-xl bg-card border border-border space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold">
              <Key className="w-4 h-4" />
              <span>IP Ownership</span>
            </div>
            <h4 className="text-sm font-bold text-foreground">100% Code Handover</h4>
            <p className="text-[11px] text-muted-foreground leading-tight">All model weights, source code, and infra configs belong exclusively to you.</p>
          </div>

          <div className="p-4 rounded-xl bg-card border border-border space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold">
              <Server className="w-4 h-4" />
              <span>AWS Cape Town</span>
            </div>
            <h4 className="text-sm font-bold text-foreground">Sub-40ms af-south-1</h4>
            <p className="text-[11px] text-muted-foreground leading-tight">Hardened Kubernetes microservices deployed locally in Cape Town.</p>
          </div>

          <div className="p-4 rounded-xl bg-card border border-border space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Milestone Billing</span>
            </div>
            <h4 className="text-sm font-bold text-foreground">30-Day Defect Warranty</h4>
            <p className="text-[11px] text-muted-foreground leading-tight">Funds released only upon testing and approving functional milestone gates.</p>
          </div>
        </div>

        {/* ── Interactive Governance Navigation Tabs ── */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-border">
          <button
            type="button"
            onClick={() => setActiveTab("popia")}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "popia"
                ? "bg-emerald-500 text-white shadow-sm"
                : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>POPIA & Regulatory Compliance</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("ip")}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "ip"
                ? "bg-emerald-500 text-white shadow-sm"
                : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <Key className="w-4 h-4" />
            <span>100% IP & Code Ownership</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("infosec")}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "infosec"
                ? "bg-emerald-500 text-white shadow-sm"
                : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>InfoSec & Cryptography</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("warranty")}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "warranty"
                ? "bg-emerald-500 text-white shadow-sm"
                : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Milestone SLA & Warranty</span>
          </button>
        </div>

        {/* ── Detailed Tab Viewport ── */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Main Detail Container (Cols 1-8) */}
          <div className="lg:col-span-8 p-8 rounded-2xl bg-card border border-border space-y-6">
            
            {/* TAB 1: POPIA COMPLIANCE */}
            {activeTab === "popia" && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                    Regulatory Mandate // Act No. 4 of 2013
                  </span>
                  <h3 className="text-2xl font-bold text-foreground">
                    Protection of Personal Information Act (POPIA) Governance
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    12 Links operates as both an Information Officer and Operator under South African law. All data architectures engineered for clients strictly adhere to the 8 statutory conditions for lawful processing.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-xl bg-background border border-border space-y-2">
                    <h4 className="text-xs font-bold text-foreground flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Condition 7: Section 19 Security Safeguards
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      All client databases and feature stores are encrypted using industry-standard AES-256 at rest and TLS 1.3 in transit. We implement strict pseudonymization and tokenization so sensitive records are never stored in cleartext.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-background border border-border space-y-2">
                    <h4 className="text-xs font-bold text-foreground flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Section 72: Strict Transborder Data Transfer Controls
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      We prioritize in-country data residency on AWS Cape Town (af-south-1) and local South African data centers. Client data is never transmitted to foreign jurisdictions or third-party AI models without explicit bilateral SOW authorization.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-background border border-border space-y-2">
                    <h4 className="text-xs font-bold text-foreground flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Condition 8: Data Subject Participation & Erasure
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Every consumer platform we build includes native API endpoints for data subject access requests, automated right-to-erasure workflows, and cryptographic consent logging.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: 100% IP OWNERSHIP */}
            {activeTab === "ip" && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                    Contractual Guarantee // Full Source Handover
                  </span>
                  <h3 className="text-2xl font-bold text-foreground">
                    100% Intellectual Property & Codebase Ownership
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Unlike traditional consultancies that trap clients in proprietary platforms or recurring per-seat licensing fees, 12 Links operates on a complete handover model.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-xl bg-background border border-border space-y-2">
                    <h4 className="text-xs font-bold text-foreground flex items-center gap-2">
                      <Key className="w-4 h-4 text-emerald-400" />
                      All Source Code & Git Repositories
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Upon final milestone settlement, complete ownership of all TypeScript, Python, frontend, and backend code is irrevocably assigned to your organization with full commit history.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-background border border-border space-y-2">
                    <h4 className="text-xs font-bold text-foreground flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-emerald-400" />
                      Trained Model Weights & Fine-Tuning Checkpoints
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      All custom ML weights, vector index checkpoints, and feature engineering pipelines developed for your product belong 100% to you. We never train public or third-party models on your proprietary data.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-background border border-border space-y-2">
                    <h4 className="text-xs font-bold text-foreground flex items-center gap-2">
                      <Server className="w-4 h-4 text-emerald-400" />
                      Infrastructure-as-Code & Deployment Manifests
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      We deliver complete Dockerfiles, Terraform scripts, and CI/CD pipelines configured directly to your internal cloud accounts (AWS Cape Town, Azure, or private VPS) with zero vendor lock-in.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: INFOSEC & CRYPTOGRAPHY */}
            {activeTab === "infosec" && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                    Defense-in-Depth // Zero-Trust Architecture
                  </span>
                  <h3 className="text-2xl font-bold text-foreground">
                    Information Security & Hardened Infrastructure
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Our security leads design every application with defense-in-depth principles, automated secret scanning, and least-privilege cloud IAM roles.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-xl bg-background border border-border space-y-2">
                    <h4 className="text-xs font-bold text-foreground flex items-center gap-2">
                      <Lock className="w-4 h-4 text-emerald-400" />
                      Cryptographic Protocols
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      mTLS is enforced on all inter-service microservice communications. Public endpoints terminate on TLS 1.3 with strict HSTS, CSP headers, and automated certificate rotations.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-background border border-border space-y-2">
                    <h4 className="text-xs font-bold text-foreground flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-emerald-400" />
                      CI/CD Pipeline Security & SAST Scanning
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Every sprint commit undergoes automated static application security testing (SAST), secret entropy scanning (TruffleHog), and container vulnerability audits before merge.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-background border border-border space-y-2">
                    <h4 className="text-xs font-bold text-foreground flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      Zero-Trust Access Control
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      No hardcoded API credentials. All database and API keys are stored in AWS Secrets Manager or HashiCorp Vault with short-lived session tokens and full audit trail logging.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: MILESTONE SLA & WARRANTY */}
            {activeTab === "warranty" && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                    Delivery Integrity // Risk-Free Engagement
                  </span>
                  <h3 className="text-2xl font-bold text-foreground">
                    Milestone-Gated Billing & 30-Day Defect Warranty
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    We eliminate enterprise financial risk by anchoring all invoices to verified, demonstrable technical milestones.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-xl bg-background border border-border space-y-2">
                    <h4 className="text-xs font-bold text-foreground flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Sprint Acceptance Gates
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Every project is divided into 2-to-3 week milestone sprints with pre-agreed acceptance criteria. Funds are released only after your engineering leads review and test the staging build.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-background border border-border space-y-2">
                    <h4 className="text-xs font-bold text-foreground flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      30-Day Active Defect Warranty
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Following production deployment and handover, 12 Links provides 30 calendar days of active defect resolution support at zero additional charge to guarantee operational stability.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-background border border-border space-y-2">
                    <h4 className="text-xs font-bold text-foreground flex items-center gap-2">
                      <Scale className="w-4 h-4 text-emerald-400" />
                      Governing South African Law
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      All bilateral Statements of Work (SOW) are legally binding agreements executed under the laws of the Republic of South Africa, subject to the jurisdiction of South African courts.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Side Legal & Security Inquiries Column (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="p-6 rounded-2xl bg-card border border-border space-y-4">
              <h4 className="text-xs font-mono font-bold text-foreground uppercase tracking-wider">
                Enterprise Procurement Pack
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Need our formal security schedules, POPIA operator agreements, or standard bilateral Statement of Work (SOW) template for legal review?
              </p>
              
              <div className="space-y-2 pt-2">
                <a
                  href="mailto:legal@12links.co.za?subject=Request%20for%2012%20Links%20Procurement%20%26%20Security%20Pack"
                  className="w-full inline-flex items-center justify-between p-3 rounded-lg bg-background border border-border hover:border-emerald-500/50 text-xs font-medium text-foreground transition-all"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-400" />
                    Request Procurement Pack
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
                </a>

                <a
                  href="mailto:security@12links.co.za?subject=Responsible%20Disclosure%20%2F%20Security%20Inquiry"
                  className="w-full inline-flex items-center justify-between p-3 rounded-lg bg-background border border-border hover:border-emerald-500/50 text-xs font-medium text-foreground transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-emerald-400" />
                    Responsible Disclosure
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
                </a>
              </div>
            </div>

            {/* Direct Consultation Link */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/30 space-y-3">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase">
                Direct Technical Scoping
              </span>
              <h4 className="text-sm font-bold text-foreground">
                Discuss compliance & architecture directly with our engineers.
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Schedule a 20-minute consultation to review your technical requirements and data residency needs.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-4 py-2.5 rounded-lg text-xs transition-colors"
                >
                  Schedule a Technical Call
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
