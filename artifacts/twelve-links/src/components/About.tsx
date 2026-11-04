import { useState } from "react";
import { Link } from "wouter";
import { 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight,
  MapPin,
  Sparkles,
  Github,
  Linkedin,
  ExternalLink,
  GraduationCap,
  ShieldCheck,
  Code2,
  Cpu,
  Mail,
  Copy,
  Check
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  focus: string;
  university: string;
  credentials: string;
  email: string;
  github: string;
  linkedin: string;
}

export default function About() {
  const { toast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const team: TeamMember[] = [
    { 
      name: "Tebello Mohohoma", 
      role: "CEO & Lead Data Scientist", 
      bio: "Leads technical strategy and custom machine learning development, translating complex African enterprise datasets into production predictive systems.", 
      image: "/team/tebello.jpg",
      focus: "Predictive Modeling & Executive Strategy",
      university: "University of Pretoria (UP)",
      credentials: "BSc Computer Science & Data Science",
      email: "Matmohohoma68@gmail.com",
      github: "https://github.com/Matome",
      linkedin: "https://www.linkedin.com/company/12-links/"
    },
    { 
      name: "Nkosinathi Ngwenya", 
      role: "CTO & AI Systems Architect", 
      bio: "Architects low-latency distributed backends, PGvector retrieval pipelines, and containerized Triton inference engines deployed on AWS Cape Town.", 
      image: "/team/nkosinathi-ngwenya.jpeg",
      focus: "Machine Learning & Distributed Systems",
      university: "University of Pretoria (UP)",
      credentials: "BSc Information Technology // AI Systems",
      email: "devthrivepty@gmail.com",
      github: "https://github.com/NuttyDev",
      linkedin: "https://www.linkedin.com/company/12-links/"
    },
    { 
      name: "Jacky Mpoka", 
      role: "Project Lead & Fullstack Engineer", 
      bio: "Directs agile sprint velocity, engineering high-throughput web and mobile platforms with resilient offline-first SQLite synchronization and human-centered UX.", 
      image: "/team/jackyn.png",
      focus: "Fullstack Architecture & Sprint Velocity",
      university: "University of Pretoria (UP)",
      credentials: "BSc Computer Science & Software Engineering",
      email: "jackympoka22@gmail.com",
      github: "https://github.com/Jackympoka",
      linkedin: "https://www.linkedin.com/company/12-links/"
    },
    { 
      name: "Lesego Mageza", 
      role: "CFO & Information Security Engineer", 
      bio: "Oversees capital governance, milestone billing security, and infrastructure hardening to ensure absolute POPIA Act No. 4 and Section 19 compliance.", 
      image: "/team/lesego-mageza.jpeg",
      focus: "Information Security & Financial Governance",
      university: "University of Pretoria (UP)",
      credentials: "BCom Financial Management & InfoSec Governance",
      email: "magezalesego@gmail.com",
      github: "https://github.com/magezalesego",
      linkedin: "https://www.linkedin.com/company/12-links/"
    },
    { 
      name: "Luke George", 
      role: "COO & Security Architect", 
      bio: "Manages quality assurance, automated CI/CD security scanning, and deployment operations to guarantee zero-defect handovers across every client sprint.", 
      image: "/team/ghost.jpeg",
      focus: "Cloud Security & Quality Assurance",
      university: "University of Pretoria (UP)",
      credentials: "BSc Information Technology // Cloud Security",
      email: "Lwandiso1234@users.noreply.github.com",
      github: "https://github.com/Lwandiso1234",
      linkedin: "https://www.linkedin.com/company/12-links/"
    },
    { 
      name: "Savuzwa Mpayipheli", 
      role: "Head of Partnerships & Developer", 
      bio: "Bridges client scoping with hands-on application development while building alliances across South Africa's tech ecosystem and developer communities.", 
      image: "/team/Savuzwa.png",
      focus: "Client Scoping & Strategic Alliances",
      university: "University of Pretoria (UP)",
      credentials: "BSc Computer Science & Ecosystem Partnerships",
      email: "savuzwampayipheli590@gmail.com",
      github: "https://github.com/Savuzwa-Mpayipheli",
      linkedin: "https://www.linkedin.com/company/12-links/"
    },
    { 
      name: "Zila Aphane", 
      role: "CMO & Data Scientist", 
      bio: "Analyzes system telemetry, user behavioral patterns, and predictive growth metrics to optimize product conversions and regional market adoption.", 
      image: "/team/zila.jpg",
      focus: "Market Intelligence & Telemetry Analytics",
      university: "University of Pretoria (UP)",
      credentials: "BSc Mathematical Statistics & Data Science",
      email: "207455937+SelloAphanee@users.noreply.github.com",
      github: "https://github.com/SelloAphanee",
      linkedin: "https://www.linkedin.com/company/12-links/"
    }
  ];

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    toast({
      title: "Email Copied",
      description: `${email} has been copied to your clipboard.`,
    });
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <div className="bg-background text-foreground min-h-screen py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Page Header ── */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            <span>University of Pretoria (UP) Founders // Gauteng Innovation Hub</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Engineering Africa's digital frontier from Pretoria.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed font-normal">
            We are 7 systems architects and software engineers from the <strong>University of Pretoria (UP)</strong>. We build production software, mobile applications, and custom AI systems for African enterprise with milestone-based transparency and 100% source code ownership.
          </p>
        </div>

        {/* ── Origin Story Narrative ── */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24 pb-16 border-b border-border">
          <div className="lg:col-span-5 space-y-4 text-sm text-muted-foreground leading-relaxed font-normal">
            <span className="text-xs font-mono text-emerald-400 uppercase font-semibold">The Origin Story</span>
            <h2 className="text-2xl font-bold text-foreground leading-tight">
              From University of Pretoria Labs to Enterprise Delivery
            </h2>
            <p>
              In university computer science and data science labs at the <strong>University of Pretoria (UP)</strong>, our founders saw two broken extremes in software development:
            </p>
            <p>
              On one side were multinational consultancies charging exorbitant monthly retainers, moving at glacial bureaucratic speeds, and delivering bloated legacy codebases. On the other side were fragmented gig freelancers with zero architectural accountability or long-term defect warranty.
            </p>
            <p>
              We established <strong>12 Links</strong> to bridge that gap: a disciplined, small engineering collective delivering modern, production-tested software directly to clients under milestone-gated agreements with full source code handover.
            </p>
            
            <div className="pt-2 text-xs text-muted-foreground border-t border-border">
              <strong className="text-foreground">Why the name '12 Links'? </strong>
              In computer engineering, a distributed architecture is only as resilient as its weakest connection. We ensure your data pipelines, machine learning models, security protocols, and client interfaces connect with equal durability.
            </div>
          </div>

          <div className="lg:col-span-7 p-8 rounded-2xl bg-card border border-border space-y-6">
            <h3 className="text-lg font-bold text-foreground">Our 4 Core Engineering Commitments</h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-background border border-border space-y-1.5">
                <span className="text-xs font-mono text-emerald-400 font-bold">01 // Zero Retainer Lock-in</span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We bill strictly on demonstrable technical milestones. You test and verify working software at each gate before funds are released.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-background border border-border space-y-1.5">
                <span className="text-xs font-mono text-emerald-400 font-bold">02 // 100% Code Ownership</span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  All repositories, trained model weights, documentation, and cloud deployment scripts belong exclusively to your business from day one.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-background border border-border space-y-1.5">
                <span className="text-xs font-mono text-emerald-400 font-bold">03 // POPIA Act No. 4 Compliance</span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We guarantee in-country data residency on AWS Cape Town (af-south-1) with AES-256 encryption and cryptographic audit trails.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-background border border-border space-y-1.5">
                <span className="text-xs font-mono text-emerald-400 font-bold">04 // 30-Day Defect Warranty</span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Every production handover includes 30 calendar days of active defect resolution support at zero additional charge.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground border-t border-border">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Founding Ecosystem: University of Pretoria & Gauteng Innovation Corridor</span>
              </span>
              <Link href="/trust" className="text-emerald-400 font-semibold hover:text-foreground">
                Review Trust Center →
              </Link>
            </div>
          </div>
        </div>

        {/* ── Verified Leadership & Engineering Team ── */}
        <div className="mb-24">
          <div className="max-w-3xl mb-12">
            <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2">
              Leadership & Systems Architects
            </div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight mb-3">
              The 7 University of Pretoria Builders.
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              When you engage 12 Links, you collaborate directly with the engineers designing and writing your code. Every profile is backed by verified University of Pretoria (UP) credentials, direct GitHub profiles, and individual contact emails.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-card border border-border hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-5"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border border-border shrink-0">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground leading-tight">{member.name}</h3>
                      <p className="text-xs text-emerald-400 font-medium leading-tight mt-0.5">{member.role}</p>
                      <span className="text-[11px] text-muted-foreground flex items-center gap-1 mt-1 font-mono">
                        <GraduationCap className="w-3 h-3 text-emerald-400" />
                        {member.university}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  <div className="p-3 rounded-xl bg-background border border-border text-[11px] font-mono text-muted-foreground space-y-1.5">
                    <div><strong className="text-foreground">Focus:</strong> {member.focus}</div>
                    <div className="text-[10px] text-muted-foreground/80 truncate">{member.credentials}</div>
                    
                    {/* Direct Verified Email */}
                    <div className="pt-1.5 border-t border-border flex items-center justify-between text-[10px]">
                      <span className="text-foreground font-semibold truncate max-w-[190px]">
                        {member.email}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopyEmail(member.email)}
                        className="text-muted-foreground hover:text-emerald-400 p-0.5 cursor-pointer"
                        title="Copy direct email"
                      >
                        {copiedEmail === member.email ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-background border border-border text-muted-foreground hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                      aria-label={`${member.name} LinkedIn`}
                      title="Verified LinkedIn Profile"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-background border border-border text-muted-foreground hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                      aria-label={`${member.name} GitHub`}
                      title="Verified GitHub Profile"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`mailto:${member.email}?subject=${encodeURIComponent(`Technical Inquiry for ${member.name}`)}`}
                      className="p-1.5 rounded-lg bg-background border border-border text-muted-foreground hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                      aria-label={`Email ${member.name} directly`}
                      title={`Email ${member.email}`}
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Route to Contact Page with specific consultant & their verified email */}
                  <Link
                    href={`/contact?consultant=${encodeURIComponent(member.name)}&email=${encodeURIComponent(member.email)}`}
                    className="text-[11px] font-semibold text-emerald-400 hover:text-foreground inline-flex items-center gap-1"
                  >
                    Request Call <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Call to Action ── */}
        <div className="p-10 rounded-2xl bg-card border border-border text-center max-w-3xl mx-auto shadow-sm">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Ready to partner with an engineering team that delivers?
          </h3>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Schedule a 20-minute technical discovery call to review your product roadmap, cloud architecture, and compliance requirements with our University of Pretoria engineering leads.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-xl text-xs transition-colors"
            >
              Schedule a Technical Call
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 border border-border hover:bg-muted text-foreground font-medium px-6 py-3 rounded-xl text-xs transition-colors"
            >
              Explore Reference Blueprints
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
