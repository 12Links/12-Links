import { useState } from "react";
import { Link } from "wouter";
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  Server, 
  Check, 
  ArrowRight, 
  Key, 
  Scale
} from "lucide-react";

export default function Trust() {
  const [activeTab, setActiveTab] = useState<"popia" | "ip" | "infosec" | "warranty">("popia");

  const pillars = [
    {
      icon: Key,
      title: "100% Source Code & IP Transfer",
      description: "Upon milestone completion, all repositories, custom model weights, and infrastructure scripts belong exclusively to your organization."
    },
    {
      icon: Scale,
      title: "POPIA-Aligned Data Handling",
      description: "Systems are architected around South African data protection principles, including role-based access control, encryption at rest (AES-256) and in transit (TLS 1.3), and audit logging."
    },
    {
      icon: Server,
      title: "Flexible Deployment Targets",
      description: "We deploy directly into your organization's own AWS, Azure, Google Cloud, or on-premise Linux environments so you retain full administrative control."
    },
    {
      icon: ShieldCheck,
      title: "Milestone-Gated Governance",
      description: "Every project is scoped with clear acceptance criteria, staging environment reviews, and a 30-day post-deployment defect warranty."
    }
  ];

  return (
    <div className="bg-[#FAF9F6] dark:bg-[#090D16] text-slate-900 dark:text-slate-50 min-h-screen py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Page Header ── */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider text-slate-600 dark:text-slate-400 uppercase mb-3">
            GOVERNANCE & SECURITY
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight mb-5">
            Security, data residency, and IP ownership.
          </h1>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed font-normal">
            Clear contractual and technical safeguards for organizations deploying custom software and AI systems.
          </p>
        </div>

        {/* ── 4 Core Pillars Grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Detailed Technical Specifications ── */}
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
            DETAILED SPECIFICATIONS
          </div>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
            Contractual and engineering schedules
          </h2>
        </div>

        {/* Interactive Specification Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-200 dark:border-slate-800">
          <button
            type="button"
            onClick={() => setActiveTab("popia")}
            className={`px-4 py-2 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === "popia"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>POPIA & Data Protection</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("ip")}
            className={`px-4 py-2 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === "ip"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
            }`}
          >
            <Key className="w-3.5 h-3.5" />
            <span>IP & Repository Transfer</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("infosec")}
            className={`px-4 py-2 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === "infosec"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Infrastructure Hardening</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("warranty")}
            className={`px-4 py-2 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === "warranty"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Milestone Gates & Warranty</span>
          </button>
        </div>

        {/* Tab Detail Viewport */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-24">
          
          <div className="lg:col-span-8 p-8 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
            
            {/* TAB 1: POPIA COMPLIANCE */}
            {activeTab === "popia" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                    Protection of Personal Information Act (POPIA) Alignment
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-2 leading-relaxed">
                    All software architectures designed for South African deployment adhere to the statutory conditions for lawful data processing under Act No. 4 of 2013.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-md bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      Section 19 Security Safeguards
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      Databases and data pipelines are encrypted using industry standard AES-256 at rest and TLS 1.3 in transit. Sensitive fields are tokenized so private records are never logged in cleartext.
                    </p>
                  </div>

                  <div className="p-4 rounded-md bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      In-Country Hosting & Section 72 Compliance
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      We configure deployments within South African cloud data centers or on-premise infrastructure. Client information remains within local jurisdiction unless cross-border transfers are explicitly authorized.
                    </p>
                  </div>

                  <div className="p-4 rounded-md bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      Data Subject Rights & Audit Logging
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      Applications are designed with administrative functions supporting data subject access, rectification, and erasure workflows, alongside immutable audit trails.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: IP OWNERSHIP */}
            {activeTab === "ip" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                    Complete Intellectual Property Assignment
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-2 leading-relaxed">
                    12 Links operates on a transparent handover model. We build software specifically for your organization without recurring software license dependencies.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-md bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      Complete Source Code Transfer
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      Upon milestone sign-off, full repository ownership across frontend, backend, and documentation is irrevocably assigned to your organization with complete Git history.
                    </p>
                  </div>

                  <div className="p-4 rounded-md bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      Model Weights & Pipeline Artifacts
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      All custom machine learning models, feature engineering pipelines, and fine-tuned weights trained on your data belong entirely to you.
                    </p>
                  </div>

                  <div className="p-4 rounded-md bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      Infrastructure as Code
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      We provide container manifests, automated setup scripts, and environment documentation so your internal team can operate the system independently.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: INFOSEC */}
            {activeTab === "infosec" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                    Infrastructure Security & Access Control
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-2 leading-relaxed">
                    We incorporate automated vulnerability testing, secret management, and principle-of-least-privilege access across all application layers.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-md bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      Transport Security & Encryption
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      Inter-service microservice communications use mutual TLS where applicable. Public web endpoints enforce TLS 1.3 with modern cipher suites and automated certificate rotation.
                    </p>
                  </div>

                  <div className="p-4 rounded-md bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      Continuous Automated Testing
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      Continuous integration pipelines run automated static analysis, dependency vulnerability scans, and unit tests before any pull request is merged into staging.
                    </p>
                  </div>

                  <div className="p-4 rounded-md bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      Secret and Key Management
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      Credentials and API keys are managed using secure secrets management vaults with scoped IAM policies, preventing any exposure in code repositories.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: WARRANTY */}
            {activeTab === "warranty" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                    Milestone Delivery & 30-Day Defect Warranty
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-2 leading-relaxed">
                    Projects proceed through distinct phases where deliverables are reviewed and verified on staging before milestone completion.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-md bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      Clear Milestone Criteria
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      Before work commences, we establish measurable acceptance criteria for each development milestone. Milestone payments are tied directly to tested deliverables.
                    </p>
                  </div>

                  <div className="p-4 rounded-md bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      30-Day Active Defect Warranty
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      Following production deployment, 12 Links provides 30 calendar days of active defect resolution support at no additional cost to ensure seamless adoption.
                    </p>
                  </div>

                  <div className="p-4 rounded-md bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      Governing Law
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      All engagement agreements are executed under the laws of the Republic of South Africa and subject to the jurisdiction of South African courts.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Legal / Contact Side Box */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
              <h4 className="text-xs font-mono font-semibold text-slate-900 dark:text-slate-50 uppercase tracking-wider">
                Procurement & Inquiries
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                Need security documentation, data processing schedules, or standard statement of work templates for legal review?
              </p>
              
              <div className="space-y-2 pt-2">
                <a
                  href="mailto:info@12links.co.za?subject=Procurement%20Documentation%20Inquiry"
                  className="w-full inline-flex items-center justify-between p-3 rounded-md bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium text-slate-900 dark:text-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    Request Documentation
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </a>

                <a
                  href="mailto:info@12links.co.za?subject=Security%20Inquiry"
                  className="w-full inline-flex items-center justify-between p-3 rounded-md bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium text-slate-900 dark:text-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    Security Contact
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                Technical Scoping Call
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                Schedule a consultation to discuss system requirements, compliance, and deployment targets.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2.5 rounded-md text-xs transition-colors"
                >
                  Schedule a Call
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
