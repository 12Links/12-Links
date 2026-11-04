import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  Copy, 
  Check, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar as CalendarIcon, 
  ArrowRight, 
  Phone, 
  ShieldCheck, 
  Server, 
  Sparkles,
  ChevronRight,
  Send,
  Building,
  CheckCircle2
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"book" | "scope">("book");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>("Tomorrow");
  const [selectedSlot, setSelectedSlot] = useState<string>("10:00 AM SAST");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Scoping Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    vertical: "Fintech & Banking",
    timeline: "1 - 3 Months",
    budget: "R150,000 - R350,000",
    cloud: "AWS Cape Town (af-south-1)",
    message: ""
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const proj = searchParams.get("project") || searchParams.get("service") || searchParams.get("industry");
      const consultant = searchParams.get("consultant");
      if (proj) {
        setFormData(prev => ({
          ...prev,
          message: `Hi 12 Links team, I would like to review architecture and requirements for ${proj}.`
        }));
        setActiveTab("scope");
      }
      if (consultant) {
        setFormData(prev => ({
          ...prev,
          message: `Hi 12 Links team, I would like to schedule a technical consultation with ${consultant}.`
        }));
      }
    }
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("info@12links.co.za");
    setCopied(true);
    toast({
      title: "Email Copied",
      description: "info@12links.co.za has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const timeSlots = [
    "09:30 AM SAST",
    "10:00 AM SAST",
    "11:30 AM SAST",
    "02:00 PM SAST",
    "03:30 PM SAST",
    "04:30 PM SAST"
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
    toast({
      title: "Technical Discovery Call Scheduled",
      description: `Reserved for ${selectedDate} at ${selectedSlot}. A calendar invite has been queued for dispatch.`,
    });
  };

  const handleScopingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

    const payloadSummary = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nVertical: ${formData.vertical}\nTimeline: ${formData.timeline}\nBudget Tier: ${formData.budget}\nTarget Cloud: ${formData.cloud}\n\nProject Scope:\n${formData.message}`;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      // Direct email client fallback
      const subject = encodeURIComponent(`12 Links Scoping Scope from ${formData.name} (${formData.company || "Enterprise"})`);
      const body = encodeURIComponent(payloadSummary);
      window.location.href = `mailto:info@12links.co.za?subject=${subject}&body=${body}`;

      toast({
        title: "Dispatching via Email Client",
        description: "Your structured project scope has been drafted to info@12links.co.za.",
      });
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          vertical: formData.vertical,
          timeline: formData.timeline,
          budget: formData.budget,
          cloud: formData.cloud,
          message: formData.message,
          summary: payloadSummary
        },
        PUBLIC_KEY
      );

      toast({
        title: "Project Scope Transmitted",
        description: "Our systems architects will evaluate your requirements and send a formal response within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        vertical: "Fintech & Banking",
        timeline: "1 - 3 Months",
        budget: "R150,000 - R350,000",
        cloud: "AWS Cape Town (af-south-1)",
        message: ""
      });
    } catch (err) {
      const subject = encodeURIComponent(`12 Links Inquiry from ${formData.name}`);
      const body = encodeURIComponent(payloadSummary);
      window.location.href = `mailto:info@12links.co.za?subject=${subject}&body=${body}`;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Page Header ── */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Direct Engineering Intake</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Connect with our systems architects.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed font-normal">
            Whether you want to schedule an immediate 20-minute technical discovery call or submit a detailed project specification for architecture review, our engineering leads respond within 24 hours.
          </p>
        </div>

        {/* ── 2-Column Enterprise Intake Grid ── */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Direct Credentials, Phone, Hub Addresses (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Channel Cards */}
            <div className="p-6 rounded-2xl bg-card border border-border space-y-4">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">
                Direct Channels & SLAs
              </h3>

              <div className="space-y-3 text-xs">
                {/* Email */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-background border border-border">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4 text-emerald-400" />
                    Direct Email:
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-foreground font-semibold font-mono">info@12links.co.za</span>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="p-1 hover:text-emerald-400 text-muted-foreground transition-colors cursor-pointer"
                      title="Copy Email"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-background border border-border">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    Direct Business Line:
                  </span>
                  <a 
                    href="tel:+27120040122" 
                    className="text-foreground font-semibold font-mono hover:text-emerald-400 transition-colors"
                  >
                    +27 (0) 12 004 0122
                  </a>
                </div>

                {/* 24-Hour SLA */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-background border border-border">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    Proposal & Architecture SLA:
                  </span>
                  <span className="text-emerald-400 font-semibold font-mono">&lt; 24 Hours</span>
                </div>
              </div>
            </div>

            {/* Physical Engineering Hubs */}
            <div className="p-6 rounded-2xl bg-card border border-border space-y-4">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                Physical Engineering Hubs
              </h3>

              <div className="space-y-3.5 text-xs">
                {/* Pretoria Hub */}
                <div className="p-3.5 rounded-xl bg-background border border-border space-y-1">
                  <div className="flex items-center justify-between">
                    <strong className="text-foreground">Pretoria Engineering Lab</strong>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Gauteng Core</span>
                  </div>
                  <p className="text-muted-foreground text-[11px] leading-relaxed">
                    Lynnwood Bridge Office Park, 4 Daventry St, Lynnwood Manor, Pretoria, 0081
                  </p>
                </div>

                {/* Johannesburg Hub */}
                <div className="p-3.5 rounded-xl bg-background border border-border space-y-1">
                  <div className="flex items-center justify-between">
                    <strong className="text-foreground">Johannesburg Innovation Pod</strong>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Commercial Hub</span>
                  </div>
                  <p className="text-muted-foreground text-[11px] leading-relaxed">
                    The Rosebank Link, 173 Oxford Rd, Rosebank, Johannesburg, 2196
                  </p>
                </div>
              </div>
            </div>

            {/* Procurement & Governance Assurance */}
            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-muted-foreground space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Enterprise Governance Assurance</span>
              </div>
              <p className="leading-relaxed">
                All communications and scope submissions are held in strict confidence under mutual non-disclosure agreements (NDA). In-country data storage complies fully with POPIA Act No. 4 (2013).
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Mode Switcher (Scheduler vs Scoping Form) (Cols 6-12) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-card border border-border shadow-xl space-y-6">
              
              {/* Mode Toggle Header */}
              <div className="flex items-center gap-2 p-1 rounded-xl bg-background border border-border">
                <button
                  type="button"
                  onClick={() => setActiveTab("book")}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    activeTab === "book"
                      ? "bg-emerald-500 text-white shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <CalendarIcon className="w-3.5 h-3.5" />
                  Instant 20-Min Call
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("scope")}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    activeTab === "scope"
                      ? "bg-emerald-500 text-white shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Building className="w-3.5 h-3.5" />
                  Structured Project Scoping
                </button>
              </div>

              {/* ── OPTION A: INSTANT 20-MINUTE CALL SCHEDULER ── */}
              {activeTab === "book" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Schedule a 20-Minute Technical Discovery Call
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Select an available engineering slot with our Pretoria and Johannesburg leads. We meet over Google Meet or Microsoft Teams.
                    </p>
                  </div>

                  {bookingConfirmed ? (
                    <div className="p-6 rounded-xl bg-emerald-950/20 border border-emerald-500/40 text-center space-y-3">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground">Discovery Call Reserved!</h4>
                      <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
                        We have reserved <strong>{selectedDate}</strong> at <strong>{selectedSlot}</strong>. A calendar invite with video link has been sent to your inbox.
                      </p>
                      <button
                        type="button"
                        onClick={() => setBookingConfirmed(false)}
                        className="text-xs font-mono text-emerald-400 hover:text-foreground cursor-pointer pt-2 inline-block"
                      >
                        ← Modify date & time
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleBookingSubmit} className="space-y-5">
                      {/* Day Selector */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-muted-foreground uppercase">
                          1. Select Date:
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {["Tomorrow", "In 2 Days", "Next Monday"].map((d) => (
                            <button
                              key={d}
                              type="button"
                              onClick={() => setSelectedDate(d)}
                              className={`p-3 rounded-xl border text-xs font-medium transition-all cursor-pointer text-center ${
                                selectedDate === d
                                  ? "border-emerald-500 bg-emerald-500/10 text-emerald-400 font-bold"
                                  : "border-border bg-background text-muted-foreground hover:text-foreground"
                              }`}
                            >
                              {d}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Time Slot Selector */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-muted-foreground uppercase">
                          2. Select Time Slot (SAST // UTC+2):
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setSelectedSlot(slot)}
                              className={`p-2.5 rounded-lg border text-xs font-mono transition-all cursor-pointer text-center ${
                                selectedSlot === slot
                                  ? "border-emerald-500 bg-emerald-500 text-white font-bold"
                                  : "border-border bg-background text-muted-foreground hover:text-foreground"
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Attendee Details */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-medium text-foreground">Your Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Sindi Ndlovu"
                            className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border text-foreground text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-medium text-foreground">Work Email *</label>
                          <input
                            type="email"
                            required
                            placeholder="sindi@company.co.za"
                            className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border text-foreground text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-foreground">Discussion Topic (Optional)</label>
                        <input
                          type="text"
                          placeholder="e.g. Architecture review for AWS Cape Town migration"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border text-foreground text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-xl text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                      >
                        Confirm 20-Minute Technical Call
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              )}

              {/* ── OPTION B: STRUCTURED PROJECT SCOPING FORM ── */}
              {activeTab === "scope" && (
                <form onSubmit={handleScopingSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Structured Project Scope Submission
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Provide high-level parameters for your application or machine learning pipeline. We evaluate requirements and provide a formal milestone proposal.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Liam de Kock"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border text-foreground text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="liam@enterprise.co.za"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border text-foreground text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground">Company / Organization</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Standard Logistics Ltd"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border text-foreground text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground">Industry Vertical</label>
                      <select
                        value={formData.vertical}
                        onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border text-foreground text-xs focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                      >
                        <option value="Fintech & Banking">Fintech & Banking</option>
                        <option value="Agriculture & AgriTech">Agriculture & AgriTech</option>
                        <option value="MedTech & Public Health">MedTech & Public Health</option>
                        <option value="Manufacturing & Industrial">Manufacturing & Industrial</option>
                        <option value="Enterprise SaaS & Logistics">Enterprise SaaS & Logistics</option>
                        <option value="Other / Emerging Tech">Other / Emerging Tech</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground">Timeline</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-background border border-border text-foreground text-xs focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                      >
                        <option value="Rapid MVP (< 4 Weeks)">Rapid MVP (&lt; 4 Weeks)</option>
                        <option value="1 - 3 Months">1 - 3 Months</option>
                        <option value="3 - 6 Months">3 - 6 Months</option>
                        <option value="Ongoing Pod">Ongoing Pod</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground">Estimated Budget Tier</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-background border border-border text-foreground text-xs focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                      >
                        <option value="R50,000 - R150,000">R50k - R150k</option>
                        <option value="R150,000 - R350,000">R150k - R350k</option>
                        <option value="R350,000+">R350k+</option>
                        <option value="Enterprise Custom">Enterprise Custom</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground">Target Cloud</label>
                      <select
                        value={formData.cloud}
                        onChange={(e) => setFormData({ ...formData, cloud: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-background border border-border text-foreground text-xs focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                      >
                        <option value="AWS Cape Town (af-south-1)">AWS Cape Town (af-south-1)</option>
                        <option value="Microsoft Azure South Africa">Azure South Africa</option>
                        <option value="On-Premise Private Server">On-Premise Server</option>
                        <option value="Flexible / Undecided">Flexible / Undecided</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">
                      Tell us what you're building or what's slowing your team down *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your application requirements, current tech stack, integration needs, or compliance constraints..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border text-foreground text-xs focus:outline-none focus:border-emerald-500 transition-colors resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-white font-medium rounded-xl text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    {loading ? "Transmitting Scope..." : "Submit Project Scope for Architecture Review"}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
