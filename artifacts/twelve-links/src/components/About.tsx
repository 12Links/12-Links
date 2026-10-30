import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { 
  User, 
  CheckCircle2, 
  Target, 
  Layers, 
  TrendingUp, 
  ChevronDown, 
  ArrowRight,
  Shield,
  Code,
  Award,
  Sparkles,
  ExternalLink
} from "lucide-react";

export default function About() {
  const [storyExpanded, setStoryExpanded] = useState(false);

  const team = [
    { 
      name: "Tebello Mohohoma", 
      role: "CEO & Lead Data Scientist", 
      bio: "Visionary leader driving Africa's tech revolution, leveraging data science and predictive models to bridge market gaps and engineer enterprise solutions.", 
      color: "from-green-500 to-emerald-700", 
      image: "/team/tebello.jpg",
      focus: "Strategic Leadership & Data Architecture"
    },
    { 
      name: "Nkosinathi Ngwenya", 
      role: "CTO & AI Engineer", 
      bio: "Architect of scalable intelligent systems, designing production neural models and high-throughput technical backbones for client platforms.", 
      color: "from-yellow-400 to-orange-600", 
      image: "/team/nkosinathi-ngwenya.jpeg",
      focus: "Machine Learning & Distributed Systems"
    },
    { 
      name: "Jacky Mpoka", 
      role: "Project Lead & Fullstack Engineer", 
      bio: "Directing agile development lifecycles and crafting responsive, high-performance web applications that convert complex requirements into intuitive software.", 
      color: "from-blue-500 to-indigo-700", 
      image: "/team/jackyn.png",
      focus: "Fullstack Architecture & Agile Sprints"
    },
    { 
      name: "Lesego Mageza", 
      role: "CFO & Cybersecurity Engineer", 
      bio: "Fortifying infrastructure against modern attack vectors while managing capital efficiency, milestone billing structures, and regulatory compliance.", 
      color: "from-purple-500 to-violet-700", 
      image: "/team/lesego-mageza.jpeg",
      focus: "Information Security & Financial Planning"
    },
    { 
      name: "Luke George", 
      role: "COO & Security Architect", 
      bio: "Designing robust infrastructure security frameworks while orchestrating operations, milestone timelines, and client quality assurance.", 
      color: "from-pink-500 to-rose-700", 
      image: "/team/ghost.jpeg",
      focus: "Cloud Security & Operational Discipline"
    },
    { 
      name: "Savuzwa Mpayipheli", 
      role: "Head of Partnerships & Developer", 
      bio: "Engineering seamless client interfaces while spearheading strategic industry alliances and builder community networks across the continent.", 
      color: "from-red-500 to-orange-600", 
      image: "/team/Savuzwa.png",
      focus: "Client Experience & Strategic Growth"
    },
    { 
      name: "Zila Aphane", 
      role: "CMO & Data Scientist", 
      bio: "Analyzing market patterns and predictive growth vectors to drive tech positioning, customer acquisition pipelines, and strategic brand narrative.", 
      color: "from-teal-500 to-green-700", 
      image: "/team/zila.jpg",
      focus: "Market Intelligence & Growth Modeling"
    }
  ];

  const keyFacts = [
    { label: "Headquarters", value: "Pretoria & JHB, SA" },
    { label: "Founding Cohort", value: "7 University Innovators" },
    { label: "Delivery Model", value: "Agile Milestone Pods" },
    { label: "Geographic Reach", value: "Pan-African & Global" },
  ];

  const deepDive = [
    {
      title: "Our Verification Standard",
      body: "Every developer and researcher in a 12 Links delivery pod has proved capability by shipping production code. We assess by benchmarked code output and system design, never just CV keywords."
    },
    {
      title: "Our Delivery Blueprint",
      body: "We scope every engagement with clear acceptance criteria, milestone-gated approval windows, and documented OpenAPI/architectural blueprints before entering production sprints."
    },
    {
      title: "Our Economic Transparency",
      body: "We operate on a transparent milestone pricing model. You review and approve deliverables at each stage. No surprise billing, no hidden retainer traps."
    },
    {
      title: "Our Code Handover Guarantee",
      body: "Clients receive 100% intellectual property ownership, documented Git repositories, automated CI/CD configurations, and a 30-day post-launch audit window."
    },
  ];

  return (
    <div className="pb-24 bg-[#0A0A0F] text-foreground min-h-screen">
      {/* ── TOP HERO HEADER ── */}
      <section className="pt-24 pb-16 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[#00FF88]/5 rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#00FF88] px-3.5 py-1 rounded-full bg-[#00FF88]/10 border border-[#00FF88]/20 inline-block mb-4">
              Our Identity & Origin
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#00FF88] to-teal-300">
                12 Links
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Pioneering custom AI and enterprise software delivery — forged by student innovators in Gauteng, built for Africa's industrial future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="border-y border-white/10 bg-card/40 py-5 mb-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm font-mono text-[#00FF88]">
          <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4" /> 7 Co-Founders</span>
          <span className="hidden md:inline text-gray-700">|</span>
          <span>5+ Industries</span>
          <span className="hidden md:inline text-gray-700">|</span>
          <span>End-to-End Delivery</span>
          <span className="hidden md:inline text-gray-700">|</span>
          <span>Pretoria & Johannesburg, SA</span>
          <span className="hidden md:inline text-gray-700">|</span>
          <span className="text-white">POPIA Ready</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">

        {/* ── OUR STORY ── */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00FF88]" />
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#00FF88] font-bold">Genesis & Purpose</h2>
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-10">Our Story</h3>

          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Key Facts Sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {keyFacts.map((f) => (
                <div key={f.label} className="flex items-stretch gap-4 bg-card/50 border border-white/10 rounded-xl overflow-hidden hover:border-[#00FF88]/30 transition-all p-4 backdrop-blur-sm">
                  <div className="w-1 bg-[#00FF88] rounded-full shrink-0" />
                  <div>
                    <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#00FF88] mb-1">{f.label}</p>
                    <p className="text-white font-bold text-base sm:text-lg">{f.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Story Text */}
            <div className="lg:col-span-3 space-y-6 text-gray-300 leading-relaxed font-light text-base sm:text-lg">
              <p>
                12 Links was founded on a resolute conviction: Africa's technology sector should not rely indefinitely on off-the-shelf imports or fragmented freelancing. Seven student innovators from top South African universities came together with a unified goal: establishing an accountable, production-grade technology delivery house engineered for African industrial realities.
              </p>
              <p>
                The name <strong className="text-white font-semibold">'12 Links'</strong> signifies absolute cohesion. In any complex engineering architecture, a chain is only as dependable as each individual link. We treat every client initiative with that philosophy — data engineering, machine learning modeling, cybersecurity, cloud DevOps, and product design all pull together with unified accountability.
              </p>
              <p>
                Today, 12 Links deploys specialized pods to build enterprise AI models, responsive mobile solutions, and mission-critical software pipelines. We work side-by-side with clients across banking, agriculture, healthcare, and manufacturing, ensuring transparent milestones from discovery to production handover.
              </p>

              {/* Learn More Toggle */}
              <button
                type="button"
                onClick={() => setStoryExpanded(!storyExpanded)}
                className="mt-4 inline-flex items-center gap-2 border border-[#00FF88]/40 text-[#00FF88] px-6 py-2.5 rounded-lg hover:bg-[#00FF88]/10 transition-all text-xs font-mono font-bold uppercase tracking-wider cursor-pointer"
              >
                {storyExpanded ? "Show Less" : "Deep Dive into Our Delivery Philosophy"}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${storyExpanded ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {storyExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden pt-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      {deepDive.map((d, i) => (
                        <div
                          key={i}
                          className="bg-card/70 border border-white/10 rounded-xl p-5 hover:border-[#00FF88]/30 transition-colors"
                        >
                          <h4 className="text-white font-bold mb-2 text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
                            {d.title}
                          </h4>
                          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">{d.body}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ── OUR MISSION & VALUES ── */}
        <section>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Operating Pillars</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto font-light">
              We do not sell abstract roadmaps. We engineer measurable, hardened outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                Icon: Target,
                title: "Client-Driven Architecture",
                body: "Every engagement starts with your balance sheet and operational friction. We listen, architect custom systems, and tie our delivery milestones to your key KPIs."
              },
              {
                Icon: Layers,
                title: "End-to-End Accountability",
                body: "From first technical discovery to post-launch telemetry, our core team leads execution. You receive a dedicated engineering director and transparent milestone gates."
              },
              {
                Icon: TrendingUp,
                title: "Measurable Economic Impact",
                body: "We deliver functional software alongside live analytics dashboards, tracking transaction velocity, fraud reduction, or crop yield improvements from day one."
              },
            ].map(({ Icon, title, body }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card/50 p-8 rounded-2xl border border-white/10 hover:border-[#00FF88]/40 transition-colors group relative overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#00FF88]/5 rounded-full blur-2xl group-hover:bg-[#00FF88]/15 transition-colors" />
                <div className="w-12 h-12 rounded-xl bg-[#00FF88]/10 border border-[#00FF88]/20 text-[#00FF88] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── MEET THE BUILDERS ── */}
        <section>
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#00FF88] mb-2 inline-block">
              Leadership & Engineering Core
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet the Builders</h2>
            <p className="text-gray-400 max-w-xl mx-auto font-light">
              7 student innovators combining computational excellence with relentless Pan-African ambition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card/40 border border-white/10 p-6 rounded-2xl text-center hover:border-[#00FF88]/40 transition-all group backdrop-blur-sm flex flex-col"
              >
                {/* Photo container */}
                <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${member.color} mb-5 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform overflow-hidden relative ring-2 ring-white/10 group-hover:ring-[#00FF88]/50`}>
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <User className="w-10 h-10 text-white/50" />
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#00FF88] text-xs font-mono font-bold tracking-wider uppercase mb-3">{member.role}</p>
                <div className="text-[11px] text-[#FFB800] font-mono bg-white/5 rounded px-2 py-0.5 mb-3 w-fit mx-auto">
                  {member.focus}
                </div>
                <p className="text-gray-400 text-xs leading-relaxed font-light mt-auto">{member.bio}</p>
              </motion.div>
            ))}

            {/* 8th Card: Join the Builder Ecosystem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-[#00FF88]/10 to-transparent border border-[#00FF88]/30 p-6 rounded-2xl text-center flex flex-col justify-center items-center hover:border-[#00FF88]/60 transition-colors"
            >
              <Award className="w-10 h-10 text-[#00FF88] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Join the Network</h3>
              <p className="text-gray-400 text-xs leading-relaxed font-light mb-6">
                Are you a South African student engineer, data scientist, or researcher? Join our vetted engineering pod network.
              </p>
              <Link
                href="/contact?subject=talent"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#00FF88] bg-[#00FF88]/15 px-4 py-2.5 rounded-lg hover:bg-[#00FF88]/25 transition-all border border-[#00FF88]/30"
              >
                Apply as a Builder <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="text-center bg-card/60 border border-white/10 p-10 sm:p-14 rounded-3xl backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#00FF88]/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to solve your most critical technology challenge?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 font-light text-base sm:text-lg">
            Let's discuss your project requirements and prepare a milestone-governed deployment proposal within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="bg-[#00FF88] text-black hover:bg-[#00FF88]/90 px-8 py-3.5 rounded-lg font-bold uppercase tracking-wider text-xs font-mono transition-all w-full sm:w-auto flex items-center justify-center gap-2 shadow-lg shadow-[#00FF88]/20"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/services" 
              className="border border-white/20 text-white hover:border-[#00FF88]/50 hover:bg-white/5 px-8 py-3.5 rounded-lg font-bold uppercase tracking-wider text-xs font-mono transition-all w-full sm:w-auto flex items-center justify-center gap-2"
            >
              Explore Services
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
