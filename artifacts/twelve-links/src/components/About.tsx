import { useState } from "react";
import { Link } from "wouter";
import { 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight,
  MapPin,
  Sparkles
} from "lucide-react";

export default function About() {
  const [storyExpanded, setStoryExpanded] = useState(false);

  const team = [
    { 
      name: "Tebello Mohohoma", 
      role: "CEO & Lead Data Scientist", 
      bio: "Visionary leader driving 12 Links' engineering mission, applying machine learning and predictive models to solve real operational bottlenecks.", 
      image: "/team/tebello.jpg",
      focus: "Data Science & Executive Strategy"
    },
    { 
      name: "Nkosinathi Ngwenya", 
      role: "CTO & AI Systems Architect", 
      bio: "Architect of distributed intelligent backends, designing neural models, real-time feature stores, and automated model deployment pipelines.", 
      image: "/team/nkosinathi-ngwenya.jpeg",
      focus: "Machine Learning & Distributed Systems"
    },
    { 
      name: "Jacky Mpoka", 
      role: "Project Lead & Fullstack Engineer", 
      bio: "Leading sprint cycles and crafting high-performance, responsive web applications with offline sync and clean, human-centered UI/UX.", 
      image: "/team/jackyn.png",
      focus: "Fullstack Architecture & Sprint Velocity"
    },
    { 
      name: "Lesego Mageza", 
      role: "CFO & Information Security Engineer", 
      bio: "Protecting cloud infrastructure against vulnerabilities while directing financial operations, milestone billing governance, and POPIA compliance.", 
      image: "/team/lesego-mageza.jpeg",
      focus: "Information Security & Financial Planning"
    },
    { 
      name: "Luke George", 
      role: "COO & Security Architect", 
      bio: "Designing hardened deployment frameworks and managing operations to guarantee rigorous testing and on-time sprint handovers.", 
      image: "/team/ghost.jpeg",
      focus: "Cloud Security & Quality Assurance"
    },
    { 
      name: "Savuzwa Mpayipheli", 
      role: "Head of Partnerships & Developer", 
      bio: "Developing interactive client applications while building alliances across South Africa's tech ecosystem and developer communities.", 
      image: "/team/Savuzwa.png",
      focus: "Client Experience & Strategic Alliances"
    },
    { 
      name: "Zila Aphane", 
      role: "CMO & Data Scientist", 
      bio: "Analyzing customer telemetry and predictive growth vectors to guide product positioning and market adoption across Southern Africa.", 
      image: "/team/zila.jpg",
      focus: "Market Intelligence & Predictive Growth"
    }
  ];

  return (
    <div className="bg-[#0F1117] text-gray-200 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2">
            About 12 Links
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Founded by 7 university builders in Gauteng.
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed font-normal">
            We started 12 Links with a straightforward belief: South African businesses deserve world-class software engineering built here, for here. No generic overseas templates, no bloated agency markups.
          </p>
        </div>

        {/* Narrative & Origin */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24 pb-16 border-b border-white/10">
          <div className="lg:col-span-5 space-y-4 text-sm text-gray-300 leading-relaxed font-normal">
            <h2 className="text-xl font-bold text-white mb-2">Our Origin</h2>
            <p>
              In university computer science and data science labs, we saw two extremes: multinational consultancies charging exorbitant retainers with delayed delivery, and fragmented gig freelancers with zero accountability.
            </p>
            <p>
              We built 12 Links as the middle ground: small, agile pods of South Africa's top student engineers working directly with clients under milestone-gated contracts.
            </p>
            <div className="pt-2 text-xs text-gray-400">
              <span className="font-semibold text-white">Why '12 Links'? </span>
              In software architecture, a system is only as strong as its weakest link. We ensure data engineering, security, UI, and backend integrate with equal resilience.
            </div>
          </div>

          <div className="lg:col-span-7 p-8 rounded-2xl bg-[#141721] border border-white/10 space-y-4">
            <h3 className="text-lg font-bold text-white">Our 4 Core Operating Principles</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#0E1017] border border-white/5 space-y-1.5">
                <span className="text-emerald-400 font-semibold block">1. Verified Code Output</span>
                <p className="text-gray-300">Every engineer in our pods has shipped production code and passed technical architecture reviews.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#0E1017] border border-white/5 space-y-1.5">
                <span className="text-emerald-400 font-semibold block">2. Milestone Approval Gates</span>
                <p className="text-gray-300">You test and approve working software at every stage before advancing to the next phase.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#0E1017] border border-white/5 space-y-1.5">
                <span className="text-emerald-400 font-semibold block">3. 100% IP Handover</span>
                <p className="text-gray-300">Full source code, models, and deployment configurations belong to you upon milestone completion.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#0E1017] border border-white/5 space-y-1.5">
                <span className="text-emerald-400 font-semibold block">4. Local Data Governance</span>
                <p className="text-gray-300">Every system is built to comply fully with South Africa's POPIA Act No. 4 of 2013 regulations.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── THE 7 FOUNDERS GRID ── */}
        <div className="mb-24">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">The Founders</h2>
            <p className="text-gray-400 text-sm font-normal">
              Meet the 7 student engineers leading technical delivery, data modeling, and platform security.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div 
                key={i}
                className="p-6 rounded-2xl bg-[#141721] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-20 h-20 rounded-xl overflow-hidden mb-4 border border-white/15">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-xs font-medium text-emerald-400 mb-3">{member.role}</p>
                  <p className="text-xs text-gray-300 leading-relaxed font-normal mb-4">{member.bio}</p>
                </div>
                <div className="text-[11px] text-gray-400 pt-3 border-t border-white/5">
                  <span className="font-semibold text-gray-300">Focus: </span>{member.focus}
                </div>
              </div>
            ))}

            {/* Opportunity Card */}
            <div className="p-6 rounded-2xl bg-[#141721] border border-emerald-500/20 flex flex-col justify-between text-left">
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-2">
                  Student Builder Network
                </span>
                <h3 className="text-lg font-bold text-white mb-2">Are you a university engineer?</h3>
                <p className="text-xs text-gray-300 leading-relaxed font-normal mb-4">
                  We are constantly expanding our student developer network across South African universities. If you write clean code and want to ship production software, reach out to us.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-white transition-colors"
              >
                Apply to Join a Pod <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Closing Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#141721] border border-white/10 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Want to work with our engineering team?
          </h2>
          <p className="text-gray-300 text-sm mb-6 font-normal leading-relaxed">
            Let's discuss your project scope and prepare a clear milestone-governed deployment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-gray-200 font-medium px-6 py-3 rounded-lg text-sm transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
