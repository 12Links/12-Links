import { 
  ArrowRight, 
  Code2, 
  Brain, 
  Smartphone, 
  Cloud 
} from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  const capabilities = [
    {
      icon: Brain,
      title: "Applied AI & Machine Learning",
      description: "Custom language model workflows, document retrieval pipelines, computer vision inspection, and predictive analytics tailored to your operational data.",
      stack: ["Python", "PyTorch", "FastAPI", "PostgreSQL", "pgvector", "Docker"]
    },
    {
      icon: Code2,
      title: "Web Platforms & Internal Tools",
      description: "High-throughput web applications, client portals, and operational dashboards engineered for speed, reliability, and clean user experience.",
      stack: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"]
    },
    {
      icon: Smartphone,
      title: "Mobile & Offline-Ready Applications",
      description: "Cross-platform iOS and Android applications built for reliable field performance, with local data caching and background synchronization when connectivity drops.",
      stack: ["React Native", "Flutter", "SQLite", "REST & WebSockets"]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure & Systems Engineering",
      description: "Containerized backends, automated CI/CD pipelines, custom systems development, and secure cloud deployments across AWS, Azure, and Linux environments.",
      stack: ["Linux", "Rust", "C/C++", "Docker", "Kubernetes", "Terraform", "GitHub Actions"]
    }
  ];

  const commitments = [
    {
      title: "Fixed-Scope Milestones",
      desc: "Structured delivery with clear approval gates before payment."
    },
    {
      title: "Full IP Ownership",
      desc: "Complete handover of repositories, model weights, and documentation."
    },
    {
      title: "In-Country Deployment",
      desc: "Configured for South African cloud regions or on-premise infrastructure."
    },
    {
      title: "30-Day Production Warranty",
      desc: "Active post-deployment engineering support and bug resolution."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Architecture & Scope",
      description: "We review your technical requirements, define data models and system boundaries, and agree on a fixed milestone schedule before writing code."
    },
    {
      number: "02",
      title: "Iterative Engineering",
      description: "We ship working software to staging every two weeks. Your team has direct access to Git repositories and reviews every milestone before sign-off."
    },
    {
      number: "03",
      title: "Deployment & Handover",
      description: "We deploy directly to your environment, transfer all source code and documentation, and provide 30 days of post-launch warranty support."
    }
  ];

  return (
    <div className="bg-[#FAF9F6] dark:bg-[#090D16] text-slate-900 dark:text-slate-50 transition-colors">
      
      {/* ── 1. HERO SECTION (CLEAN SINGLE-COLUMN ARCHITECTURAL HERO) ── */}
      <section className="pt-20 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl text-left">
          <div className="text-xs font-semibold tracking-wider text-slate-600 dark:text-slate-400 uppercase mb-4">
            SOFTWARE & AI ENGINEERING STUDIO · PRETORIA, SOUTH AFRICA
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.1] mb-6">
            Custom software and applied AI built for South African enterprise.
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8 max-w-3xl font-normal">
            12 Links designs, builds, and deploys production web platforms, mobile applications, and machine learning systems. Every engagement runs on fixed-scope milestones with complete source code handover.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3.5 rounded-md text-sm transition-colors shadow-sm cursor-pointer"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-50 font-medium px-6 py-3.5 rounded-md text-sm transition-colors cursor-pointer"
            >
              View Capabilities
            </Link>
          </div>
        </div>

        {/* Key Commitments Bar (4-Column Hairline Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-slate-200 dark:border-slate-800">
          {commitments.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                {item.title}
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2. CORE CAPABILITIES SECTION (2x2 ARCHITECTURAL GRID) ── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
            CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight mb-4">
            Engineering capabilities
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-normal text-base">
            We build end-to-end systems from backend data infrastructure to customer-facing applications.
          </p>
        </div>

        {/* 2x2 Architectural Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-colors flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 font-mono mb-2 uppercase tracking-wider">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cap.stack.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 3. DELIVERY MODEL SECTION (3-COLUMN STEP GRID) ── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
            DELIVERY MODEL
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight mb-4">
            How we deliver
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-normal text-base">
            We work alongside your team in transparent two-week sprints without open-ended retainers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="p-8 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 block mb-3">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. BOTTOM CTA SECTION ── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-14 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-center max-w-3xl mx-auto shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-50 mb-4">
            Ready to scope your next system?
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-base mb-8 font-normal leading-relaxed">
            Speak directly with our engineering leads in Pretoria. We review your requirements and return a clear technical scope within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-7 py-3.5 rounded-md text-sm transition-colors shadow-sm cursor-pointer"
            >
              Book a Technical Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:info@12links.co.za"
              className="inline-flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-50 font-medium px-6 py-3.5 rounded-md text-sm transition-colors cursor-pointer"
            >
              info@12links.co.za
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
