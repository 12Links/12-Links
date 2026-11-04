import { useState } from "react";
import { Link } from "wouter";
import { 
  ArrowRight,
  MapPin,
  Github,
  Linkedin,
  Mail,
  Copy,
  Check,
  CheckCircle2,
  GraduationCap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  university: string;
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
      role: "Chief Executive Officer & Lead Data Scientist", 
      bio: "Leads technical strategy and custom machine learning development, translating complex enterprise datasets into production predictive systems.", 
      image: "/team/tebello.jpg",
      university: "University of Pretoria (UP)",
      email: "Matmohohoma68@gmail.com",
      github: "https://github.com/Matome",
      linkedin: "https://www.linkedin.com/company/12-links/"
    },
    { 
      name: "Nkosinathi Ngwenya", 
      role: "Chief Technology Officer & AI Systems Architect", 
      bio: "Architects low-latency distributed backends, pgvector retrieval pipelines, and containerized inference services deployed in South African cloud regions.", 
      image: "/team/nkosinathi-ngwenya.jpeg",
      university: "University of Pretoria (UP)",
      email: "devthrivepty@gmail.com",
      github: "https://github.com/NuttyDev",
      linkedin: "https://www.linkedin.com/company/12-links/"
    },
    { 
      name: "Jacky Mpoka", 
      role: "Project Lead & Full-Stack / Systems Engineer", 
      bio: "Directs agile sprint velocity, engineering high-throughput web and mobile platforms with resilient offline-first SQLite synchronization and clean UI.", 
      image: "/team/jackyn.png",
      university: "University of Pretoria (UP)",
      email: "jackympoka22@gmail.com",
      github: "https://github.com/Jackympoka",
      linkedin: "https://www.linkedin.com/company/12-links/"
    },
    { 
      name: "Lesego Mageza", 
      role: "Chief Financial Officer & Information Security Engineer", 
      bio: "Oversees capital governance, milestone billing security, and infrastructure hardening to ensure absolute POPIA compliance and audit readiness.", 
      image: "/team/lesego-mageza.jpeg",
      university: "University of Pretoria (UP)",
      email: "magezalesego@gmail.com",
      github: "https://github.com/magezalesego",
      linkedin: "https://www.linkedin.com/company/12-links/"
    },
    { 
      name: "Lwandiso George", 
      role: "Chief Operating Officer & Cloud Architect", 
      bio: "Manages quality assurance, automated CI/CD security scanning, and cloud deployment operations to guarantee zero-defect handovers across every client sprint.", 
      image: "/team/ghost.jpeg",
      university: "University of Pretoria (UP)",
      email: "Lwandiso1234@users.noreply.github.com",
      github: "https://github.com/Lwandiso1234",
      linkedin: "https://www.linkedin.com/company/12-links/"
    },
    { 
      name: "Savuzwa Mpayipheli", 
      role: "Head of Partnerships & Software Engineer", 
      bio: "Bridges client scoping with hands-on application development while building alliances across South Africa's tech ecosystem and developer communities.", 
      image: "/team/Savuzwa.png",
      university: "University of Pretoria (UP)",
      email: "savuzwampayipheli590@gmail.com",
      github: "https://github.com/Savuzwa-Mpayipheli",
      linkedin: "https://www.linkedin.com/company/12-links/"
    },
    { 
      name: "Zila Aphane", 
      role: "Chief Marketing Officer & Data Scientist", 
      bio: "Analyzes system telemetry, user behavioral patterns, and predictive growth metrics to optimize product conversions and regional market adoption.", 
      image: "/team/zila.jpg",
      university: "University of Pretoria (UP)",
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
          <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-3">
            ABOUT 12 LINKS
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-foreground tracking-tight mb-5">
            Built by computer scientists and engineers in Pretoria.
          </h1>
          <p className="text-secondary text-lg leading-relaxed font-normal">
            12 Links is a software and AI engineering studio founded in Pretoria by seven University of Pretoria computer science, data science, and information systems specialists.
          </p>
        </div>

        {/* ── Origin Narrative ── */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24 pb-16 border-b border-border">
          <div className="lg:col-span-6 space-y-4 text-base text-secondary leading-relaxed font-normal">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground block">
              Origin & Purpose
            </span>
            <h2 className="text-2xl font-semibold text-foreground leading-tight">
              A direct path to serious systems engineering
            </h2>
            <p>
              We founded 12 Links in Pretoria to give South African businesses a direct path to serious systems engineering. Too often, companies are forced to choose between slow, overpriced legacy consultancies and unaccountable solo freelancers.
            </p>
            <p>
              Our team combines rigorous computer science foundations with fast, milestone-driven execution to ship software that works in production. We operate on structured milestones where your technical leads review functional software at each gate before sign-off.
            </p>
            <div className="pt-4 text-xs text-muted-foreground border-t border-border">
              <strong className="text-foreground">Why 12 Links? </strong>
              In computer engineering, a distributed architecture is only as resilient as its weakest connection. We ensure your data pipelines, machine learning models, security protocols, and client interfaces connect with equal durability.
            </div>
          </div>

          <div className="lg:col-span-6 p-8 rounded-lg bg-card border border-border space-y-6 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">
              Core Studio Principles
            </h3>
            
            <div className="space-y-4">
              <div className="p-4 rounded-md bg-muted/40 border border-border space-y-1">
                <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 block">
                  01. Milestone-Gated Delivery
                </span>
                <p className="text-xs text-secondary leading-relaxed">
                  We bill strictly on demonstrable technical deliverables. You test and verify working software in staging before funds are approved.
                </p>
              </div>

              <div className="p-4 rounded-md bg-muted/40 border border-border space-y-1">
                <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 block">
                  02. 100% Source Code Ownership
                </span>
                <p className="text-xs text-secondary leading-relaxed">
                  All repositories, trained model weights, documentation, and cloud deployment scripts belong exclusively to your business.
                </p>
              </div>

              <div className="p-4 rounded-md bg-muted/40 border border-border space-y-1">
                <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 block">
                  03. In-Country Compliance
                </span>
                <p className="text-xs text-secondary leading-relaxed">
                  We architect systems for South African data sovereignty and cloud regions with AES-256 encryption and cryptographic audit trails.
                </p>
              </div>

              <div className="p-4 rounded-md bg-muted/40 border border-border space-y-1">
                <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 block">
                  04. 30-Day Defect Warranty
                </span>
                <p className="text-xs text-secondary leading-relaxed">
                  Every production handover includes 30 calendar days of active defect resolution support at zero additional charge.
                </p>
              </div>
            </div>

            <div className="pt-2 text-xs text-muted-foreground flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Headquartered in Pretoria, Gauteng, South Africa</span>
            </div>
          </div>
        </div>

        {/* ── The Founding Team ── */}
        <div className="mb-24">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-2">
              FOUNDING TEAM
            </div>
            <h2 className="text-3xl font-semibold text-foreground tracking-tight mb-3">
              Engineers and systems architects
            </h2>
            <p className="text-secondary text-base leading-relaxed font-normal">
              When you work with 12 Links, you collaborate directly with the engineers designing and writing your code.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-lg bg-card border border-border flex flex-col justify-between space-y-5 shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border border-border shrink-0">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-medium leading-tight mt-0.5">
                        {member.role}
                      </p>
                      <span className="text-[11px] text-muted-foreground flex items-center gap-1 mt-1 font-mono">
                        <GraduationCap className="w-3 h-3 text-muted-foreground" />
                        {member.university}
                      </span>
                    </div>
                  </div>

                  <p className="text-secondary text-xs leading-relaxed font-normal">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors p-1"
                      aria-label={`${member.name}'s GitHub Profile`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors p-1"
                      aria-label={`${member.name}'s LinkedIn Profile`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-[11px] font-mono text-muted-foreground hover:text-foreground flex items-center gap-1"
                      title={member.email}
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopyEmail(member.email)}
                      className="text-muted-foreground hover:text-foreground p-1 cursor-pointer"
                      title="Copy Email Address"
                    >
                      {copiedEmail === member.email ? (
                        <Check className="w-3.5 h-3.5 text-blue-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom Callout ── */}
        <div className="p-10 rounded-lg bg-card border border-border text-center max-w-3xl mx-auto shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3">
            Start a project with our team
          </h2>
          <p className="text-secondary text-sm mb-6 max-w-xl mx-auto leading-relaxed">
            Reach out to our engineering leads in Pretoria to review your technical requirements and timeline.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md text-sm transition-colors shadow-sm cursor-pointer"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
