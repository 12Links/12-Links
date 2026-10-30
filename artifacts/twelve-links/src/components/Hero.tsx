import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  Code2,
  Brain,
  Smartphone,
  Cloud,
  Layers,
  Cpu,
  MapPin,
  Sparkles
} from "lucide-react";
import { Link } from "wouter";
import TechVisualizer from "./TechVisualizer";

export default function Hero() {
  const founders = [
    { name: "Tebello Mohohoma", role: "CEO & Data Science", image: "/team/tebello.jpg" },
    { name: "Nkosinathi Ngwenya", role: "CTO & AI Systems", image: "/team/nkosinathi-ngwenya.jpeg" },
    { name: "Jacky Mpoka", role: "Project Lead & Fullstack", image: "/team/jackyn.png" },
    { name: "Lesego Mageza", role: "CFO & Security", image: "/team/lesego-mageza.jpeg" },
    { name: "Luke George", role: "COO & Cloud Ops", image: "/team/ghost.jpeg" },
    { name: "Savuzwa Mpayipheli", role: "Partnerships & Dev", image: "/team/Savuzwa.png" },
    { name: "Zila Aphane", role: "CMO & Analytics", image: "/team/zila.jpg" },
  ];

  const capabilities = [
    {
      icon: Brain,
      title: "Applied AI & Custom Intelligent Systems",
      description: "Fine-tuned language models, retrieval-augmented generation (RAG) pipelines, computer vision inspection, and domain-specific AI agents built on your private enterprise data.",
      stack: ["Python", "PyTorch", "FastAPI", "LangChain", "Hugging Face", "Ollama"]
    },
    {
      icon: Code2,
      title: "Full-Stack Web & Enterprise SaaS",
      description: "High-performance web applications, customer portals, and internal operations dashboards designed for rapid responsiveness, clean UX, and high concurrent load.",
      stack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "TailwindCSS"]
    },
    {
      icon: Smartphone,
      title: "Mobile & Offline-First Applications",
      description: "Cross-platform iOS and Android apps engineered for African connectivity realities — featuring local SQLite caching, graceful degradation, and seamless background sync.",
      stack: ["React Native", "Flutter", "SQLite", "Firebase", "WebSockets"]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure, APIs & DevOps",
      description: "Automated CI/CD pipelines, containerized microservices, and secure cloud environments configured on AWS Cape Town (af-south-1) and Azure with POPIA data governance.",
      stack: ["Docker", "Kubernetes", "AWS Cape Town", "GitHub Actions", "Terraform"]
    }
  ];

  return (
    <div className="bg-[#0F1117] text-gray-200">
      
      {/* ── 1. HERO SECTION (LEFT-ALIGNED, EDITORIAL, TECH VISUALIZER) ── */}
      <section className="pt-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bold Typography & Clear Mission */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Student Builders • Pretoria & Johannesburg Innovation Corridor</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Software engineering and AI systems, built by South Africa's top student builders.
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl font-normal">
              We are 7 university engineers based in Pretoria and Johannesburg. We design, build, and deploy production web platforms, mobile apps, and machine learning models for African businesses — with milestone-based pricing and full source code handover.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3.5 rounded-lg text-sm transition-colors shadow-sm cursor-pointer"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 text-gray-200 font-medium px-6 py-3.5 rounded-lg text-sm transition-colors cursor-pointer"
              >
                Explore Capabilities
              </a>
            </div>

            {/* Direct Trust Highlights */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-400 pt-2 border-t border-white/10">
              <span className="flex items-center gap-1.5 text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Milestone-based pricing
              </span>
              <span className="flex items-center gap-1.5 text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% source code ownership
              </span>
              <span className="flex items-center gap-1.5 text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> POPIA compliant architectures
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Tech Visualizer with High-Tech Vibes */}
          <div className="lg:col-span-5">
            <TechVisualizer />
          </div>

        </div>
      </section>

      {/* ── 2. FOUNDERS DIRECTLY ON THE HOMEPAGE ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-3xl mb-12">
          <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2">
            The Team
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Meet the 7 university builders behind 12 Links.
          </h2>
          <p className="text-gray-300 leading-relaxed font-normal">
            We started 12 Links to prove that world-class software delivery belongs right here in South Africa. When you work with us, there are no account management layers or outsourced contractors — you collaborate directly with the engineers designing and shipping your code.
          </p>
        </div>

        {/* Founder Photos Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {founders.map((founder, i) => (
            <div 
              key={i} 
              className="p-3.5 rounded-xl bg-[#141721] border border-white/10 hover:border-white/20 transition-all text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border border-white/10">
                <img 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
              <h3 className="text-xs font-semibold text-white leading-tight mb-1">{founder.name}</h3>
              <p className="text-[11px] text-emerald-400 leading-tight">{founder.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2 text-xs text-gray-400">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span>Engineering Hubs: University of Pretoria & Johannesburg ecosystem</span>
        </div>
      </section>

      {/* ── 3. CORE CAPABILITIES (HONEST WHAT-WE-BUILD ARCHITECTURE) ── */}
      <section id="capabilities" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-3xl mb-16">
          <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2">
            What We Build
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Full-stack engineering and custom AI systems.
          </h2>
          <p className="text-gray-300 leading-relaxed font-normal">
            We partner with businesses to build modern software from scratch or unblock existing engineering bottlenecks. Here is what we specialize in delivering:
          </p>
        </div>

        {/* 4 Core Capability Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-[#141721] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 font-normal">
                    {cap.description}
                  </p>
                </div>

                <div>
                  <div className="text-[11px] text-gray-400 font-mono mb-2 uppercase tracking-wider">
                    Core Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cap.stack.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 text-gray-300 border border-white/5"
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

        {/* Transparent Founding Partner Advantage Callout */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#141721] to-[#181B26] border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Founding Cohort • Pioneer Client Terms</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Launch your product with our founding engineering team.
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed font-normal">
              We are actively building our portfolio of long-term commercial partners. Early clients work directly with our top 7 builders with prioritized sprint turnaround, dedicated founder attention, and preferential pilot rates.
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3.5 rounded-lg text-sm transition-colors cursor-pointer"
          >
            Discuss a Pioneer Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── 4. HOW WE WORK (HONEST, TRANSPARENT 3 STAGES) ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-3xl mb-14">
          <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2">
            Delivery Model
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            How we partner with your team.
          </h2>
          <p className="text-gray-300 leading-relaxed font-normal">
            No endless retainers or ambiguous progress reports. We operate on structured milestones where you review real, working software at each gate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-[#141721] border border-white/10">
            <div className="text-xs font-semibold text-emerald-400 mb-2">Stage 01</div>
            <h3 className="text-lg font-bold text-white mb-2">Scoping & Architecture Spec</h3>
            <p className="text-gray-300 text-sm leading-relaxed font-normal">
              We sit down with your team to audit requirements, map system architecture, and agree on a fixed milestone scope before any code is committed.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#141721] border border-white/10">
            <div className="text-xs font-semibold text-emerald-400 mb-2">Stage 02</div>
            <h3 className="text-lg font-bold text-white mb-2">Milestone Sprints</h3>
            <p className="text-gray-300 text-sm leading-relaxed font-normal">
              We build in focused, bi-weekly sprints. You get access to the staging environments and Git repositories, testing functional features at each approval gate before signing off.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#141721] border border-white/10">
            <div className="text-xs font-semibold text-emerald-400 mb-2">Stage 03</div>
            <h3 className="text-lg font-bold text-white mb-2">Handover & 30-Day Warranty</h3>
            <p className="text-gray-300 text-sm leading-relaxed font-normal">
              We deploy the solution directly to your cloud accounts (AWS Cape Town, Azure, or private server), transfer complete IP ownership, and provide 30 days of active defect support.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. FINAL DIRECT CALL TO ACTION ── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-14 rounded-2xl bg-[#141721] border border-white/10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Have a project in mind or an engineering bottleneck?
          </h2>
          <p className="text-gray-300 text-base mb-8 font-normal leading-relaxed">
            Tell us what you're building or what's slowing your team down. We'll evaluate your requirements and send a clear, honest architecture proposal within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-7 py-3.5 rounded-lg text-sm transition-colors cursor-pointer"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:info@12links.co.za"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-gray-200 font-medium px-6 py-3.5 rounded-lg text-sm transition-colors cursor-pointer"
            >
              Email info@12links.co.za
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
