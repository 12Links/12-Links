import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Brain, 
  Users, 
  Building, 
  MessageSquare, 
  Copy, 
  Check, 
  Mail, 
  MapPin, 
  Clock, 
  Globe, 
  Sparkles,
  ExternalLink,
  PhoneCall
} from "lucide-react";
import emailjs from "@emailjs/browser";

const inputCls =
  "w-full bg-[#0D0F17] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00FF88] focus:ring-1 focus:ring-[#00FF88]/50 transition-all placeholder-gray-500";
const labelCls = "block text-xs font-mono font-medium text-gray-300 mb-2 uppercase tracking-wider";

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  defaultValues?: Record<string, string>;
}

interface DefaultFormProps extends FormProps {
  subject: string;
  setSubject: (s: string) => void;
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className={labelCls}>
        {label} {required && <span className="text-[#00FF88]">*</span>}
      </label>
      {children}
    </div>
  );
}

function AIForm({ onSubmit, loading, defaultValues }: FormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <input type="hidden" name="title" value="AI Solution Request" />
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Full Name" required>
          <input required name="name" type="text" className={inputCls} placeholder="e.g. Sipho Ndlovu" />
        </Field>
        <Field label="Work Email" required>
          <input required name="user_email" type="email" className={inputCls} placeholder="name@company.co.za" />
        </Field>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Company / Entity" required>
          <input required name="company" type="text" className={inputCls} placeholder="Company (Pty) Ltd" />
        </Field>
        <Field label="Industry Sector">
          <select name="industry" defaultValue={defaultValues?.industry || ""} className={inputCls}>
            <option value="">Select industry</option>
            {["Fintech & Banking", "Agriculture & AgriTech", "Healthcare & MedTech", "Education & E-Learning", "Manufacturing & Supply", "Other Sector"].map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </Field>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Estimated Budget Range">
          <select name="budget_range" className={inputCls}>
            <option value="">Select range</option>
            {["Under R75k", "R75k – R200k", "R200k – R600k", "R600k+", "Prefer not to disclose"].map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </Field>
        <Field label="Target Milestone Horizon">
          <select name="timeline" className={inputCls}>
            <option value="">Select timeline</option>
            {["Urgent (< 1 month)", "Standard (1–3 months)", "Strategic (3–6 months)", "Flexible Planning"].map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Project Scope & Friction Vector" required>
        <textarea
          required
          name="message"
          rows={4}
          defaultValue={defaultValues?.message || ""}
          className={inputCls}
          placeholder="Describe the solution needed: What problem does it address? What data assets or systems need integration?"
        />
      </Field>
      <SubmitBtn loading={loading} />
    </form>
  );
}

function TalentForm({ onSubmit, loading }: FormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <input type="hidden" name="title" value="Talent & Builder Partnership" />
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Full Name" required>
          <input required name="name" type="text" className={inputCls} placeholder="e.g. Jacky Mpoka" />
        </Field>
        <Field label="Email Address" required>
          <input required name="user_email" type="email" className={inputCls} placeholder="yourname@gmail.com" />
        </Field>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Institution / University">
          <input name="university" type="text" className={inputCls} placeholder="e.g. UP, Wits, UJ, UCT, etc." />
        </Field>
        <Field label="Primary Specialization">
          <select name="partnership_type" className={inputCls}>
            <option value="">Select discipline</option>
            {["Machine Learning & AI", "Fullstack Web & Mobile", "Cybersecurity & DevOps", "Data Engineering", "UI/UX & Product"].map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </Field>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="GitHub / Portfolio Link">
          <input name="portfolio" type="url" className={inputCls} placeholder="https://github.com/username" />
        </Field>
        <Field label="Core Technical Stack">
          <input name="required_skills" type="text" className={inputCls} placeholder="e.g. Python, PyTorch, React, Go" />
        </Field>
      </div>
      <Field label="Why 12 Links? Tell us what you build">
        <textarea name="message" rows={4} className={inputCls} placeholder="Describe recent projects you shipped and why you want to build with 12 Links pods..." />
      </Field>
      <SubmitBtn loading={loading} />
    </form>
  );
}

function EnterpriseForm({ onSubmit, loading, defaultValues }: FormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <input type="hidden" name="title" value="Enterprise SOW Inquiry" />
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Executive / Lead Name" required>
          <input required name="name" type="text" className={inputCls} placeholder="e.g. Sarah van der Merwe" />
        </Field>
        <Field label="Corporate Role / Title" required>
          <input required name="job_title" type="text" className={inputCls} placeholder="e.g. Head of Innovation / CIO" />
        </Field>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Enterprise Entity" required>
          <input required name="company" type="text" className={inputCls} placeholder="Enterprise Holdings" />
        </Field>
        <Field label="Corporate Email" required>
          <input required name="user_email" type="email" className={inputCls} placeholder="lead@enterprise.com" />
        </Field>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Direct Phone / WhatsApp">
          <input name="phone" type="tel" className={inputCls} placeholder="+27 82 000 0000" />
        </Field>
        <Field label="Primary Delivery Priority" required>
          <select required name="primary_need" defaultValue={defaultValues?.need || ""} className={inputCls}>
            <option value="">Select primary need</option>
            {["Custom AI Model & Deployment", "Digital Transformation & Cloud Core", "Data Engineering & Analytics Pipeline", "Embedded Engineering Pod", "POPIA Security Hardening"].map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Executive Project Summary" required>
        <textarea required name="message" rows={4} className={inputCls} placeholder="Outline organizational goals, current system architecture, and required delivery timeline." />
      </Field>
      <SubmitBtn loading={loading} />
    </form>
  );
}

function GeneralForm({ onSubmit, loading }: FormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <input type="hidden" name="title" value="General Inquiry" />
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Full Name" required>
          <input required name="name" type="text" className={inputCls} placeholder="Your name" />
        </Field>
        <Field label="Email Address" required>
          <input required name="user_email" type="email" className={inputCls} placeholder="yourname@domain.co.za" />
        </Field>
      </div>
      <Field label="Inquiry Subject" required>
        <input required name="subject_title" type="text" className={inputCls} placeholder="What would you like to discuss?" />
      </Field>
      <Field label="Message" required>
        <textarea required name="message" rows={5} className={inputCls} placeholder="How can our engineering team help you?" />
      </Field>
      <SubmitBtn loading={loading} />
    </form>
  );
}

function DefaultForm({ onSubmit, loading, subject, setSubject, defaultValues }: DefaultFormProps & { defaultValues?: Record<string, string> }) {
  const inquiryTypes = [
    { id: "ai", label: "AI Solution Request" },
    { id: "enterprise", label: "Enterprise Inquiry" },
    { id: "talent", label: "Talent Partnership" },
    { id: "general", label: "General Inquiry" },
  ];
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Full Name" required>
          <input required name="name" type="text" className={inputCls} placeholder="Your name" />
        </Field>
        <Field label="Email Address" required>
          <input required name="user_email" type="email" className={inputCls} placeholder="name@domain.co.za" />
        </Field>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Company / Entity">
          <input name="company" type="text" className={inputCls} placeholder="Optional" />
        </Field>
        <Field label="Inquiry Type" required>
          <select required name="title" value={subject} onChange={(e) => setSubject(e.target.value)} className={inputCls}>
            <option value="">Select an inquiry type</option>
            {inquiryTypes.map((t) => (
              <option key={t.id} value={t.id}>{t.label}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Message" required>
        <textarea 
          required 
          name="message" 
          rows={5} 
          defaultValue={defaultValues?.message || ""}
          className={inputCls} 
          placeholder="Tell us about your project requirements..." 
        />
      </Field>
      <SubmitBtn loading={loading} />
    </form>
  );
}

function SubmitBtn({ loading }: { loading: boolean }) {
  return (
    <button
      disabled={loading}
      type="submit"
      className="w-full bg-[#00FF88] text-black hover:bg-[#00FF88]/90 py-3.5 px-6 rounded-xl font-bold uppercase tracking-wider text-xs font-mono transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#00FF88]/20 disabled:opacity-50 cursor-pointer"
    >
      {loading ? (
        <>
          <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
          Transmitting Inquiry...
        </>
      ) : (
        <>
          Submit Project Inquiry
        </>
      )}
    </button>
  );
}

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [subject, setSubject] = useState("ai");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [paramsData, setParamsData] = useState<Record<string, string>>({});

  // Parse query parameters from URL (e.g., from Blueprint Estimator or Services)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const ind = searchParams.get("industry");
      const sol = searchParams.get("solution") || searchParams.get("service");
      const sub = searchParams.get("subject");

      const newParams: Record<string, string> = {};
      if (ind) newParams.industry = ind;
      if (sol) {
        newParams.solution = sol;
        newParams.message = `Inquiring about ${sol} solution for ${ind || "our organization"}.`;
      }
      setParamsData(newParams);

      if (sub && ["ai", "talent", "enterprise", "general"].includes(sub)) {
        setSubject(sub);
      } else if (sol || ind) {
        setSubject("ai");
      }
    }
  }, []);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("info@12links.co.za");
    setCopiedEmail(true);
    toast({
      title: "Email Copied",
      description: "info@12links.co.za has been copied to your clipboard.",
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const inquiryTypes = [
    { id: "ai", title: "AI Solution Request", icon: Brain, subtitle: "Custom Models & Software" },
    { id: "enterprise", title: "Enterprise SOW", icon: Building, subtitle: "Large Scale & Hardening" },
    { id: "talent", title: "Builder Network", icon: Users, subtitle: "Student Developers" },
    { id: "general", title: "General Inquiry", icon: MessageSquare, subtitle: "Advisory & Press" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const targetForm = e.currentTarget;
    const formData = new FormData(targetForm);
    const formValues: Record<string, string> = {};
    formData.forEach((val, key) => {
      formValues[key] = String(val);
    });

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

    // Graceful check: if EmailJS keys are not provided, offer seamless client mailto fallback
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.warn("EmailJS credentials not configured in environment. Launching direct email fallback.");
      const mailtoSubject = encodeURIComponent(`12 Links Inquiry: ${formValues.title || formValues.subject_title || "Project Scope"}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${formValues.name}\nEmail: ${formValues.user_email}\nCompany: ${formValues.company || "N/A"}\nMessage:\n${formValues.message}`
      );
      
      window.location.href = `mailto:info@12links.co.za?subject=${mailtoSubject}&body=${mailtoBody}`;
      
      toast({
        title: "Launching Email Client",
        description: "Your inquiry details have been drafted directly to info@12links.co.za.",
      });
      setLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, targetForm, {
        publicKey: PUBLIC_KEY,
      });

      toast({
        title: "Inquiry Transmitted Successfully",
        description: "Our engineering leads will evaluate your scope and respond within 24 hours.",
      });
      targetForm.reset();
    } catch (error) {
      console.error("EmailJS Transmission Error:", error);
      // Seamless fallback on failure
      const mailtoSubject = encodeURIComponent(`12 Links Inquiry: ${formValues.title || "Project Inquiry"}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${formValues.name}\nEmail: ${formValues.user_email}\nMessage:\n${formValues.message}`
      );
      window.location.href = `mailto:info@12links.co.za?subject=${mailtoSubject}&body=${mailtoBody}`;

      toast({
        title: "Direct Routing Initiated",
        description: "Opening your email client to complete dispatch to info@12links.co.za.",
      });
    } finally {
      setLoading(false);
    }
  };

  const renderForm = () => {
    const baseProps = { onSubmit: handleSubmit, loading, defaultValues: paramsData };
    switch (subject) {
      case "ai":
        return <AIForm {...baseProps} />;
      case "talent":
        return <TalentForm {...baseProps} />;
      case "enterprise":
        return <EnterpriseForm {...baseProps} />;
      case "general":
        return <GeneralForm {...baseProps} />;
      default:
        return <DefaultForm {...baseProps} subject={subject} setSubject={setSubject} />;
    }
  };

  return (
    <div className="pb-24 bg-[#0A0A0F] text-foreground min-h-screen">
      {/* ── PAGE HERO ── */}
      <section className="pt-24 pb-16 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[#00FF88]/5 rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#00FF88] px-3.5 py-1 rounded-full bg-[#00FF88]/10 border border-[#00FF88]/20 inline-block mb-4">
              Direct Intake Channel
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Initialize a Project
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
              Tell us about your technical challenge. Our engineering leads will review your scope and provide a structured milestone blueprint within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── INQUIRY TYPE SELECTOR TILES ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {inquiryTypes.map((type) => {
            const isSelected = subject === type.id;
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => setSubject(type.id)}
                className={`p-5 rounded-2xl border flex flex-col items-start gap-2.5 transition-all text-left relative overflow-hidden cursor-pointer ${
                  isSelected
                    ? "border-[#00FF88] bg-[#00FF88]/10 text-white shadow-lg shadow-[#00FF88]/10"
                    : "border-white/10 bg-card/40 text-gray-400 hover:border-white/25 hover:text-white"
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#00FF88]/20 rounded-full blur-xl pointer-events-none" />
                )}
                <type.icon className={`w-7 h-7 ${isSelected ? "text-[#00FF88]" : "text-gray-400"}`} />
                <div>
                  <span className="text-sm font-bold block text-white">{type.title}</span>
                  <span className="text-[11px] font-mono text-gray-400">{type.subtitle}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* ── MAIN CONTENT GRID ── */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* FORM CONTAINER (LEFT 7 COLS) */}
          <div className="lg:col-span-7 bg-card/50 border border-white/10 p-6 sm:p-10 rounded-3xl relative shadow-2xl overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00FF88]/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="mb-6 pb-4 border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#00FF88] font-bold">
                  Active Intake Pathway
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {inquiryTypes.find((t) => t.id === subject)?.title}
                </h3>
              </div>
              <span className="text-[11px] font-mono text-gray-500">
                Encrypted Submission
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={subject}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                {renderForm()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CONTACT INFO & HOW WE ENGAGE (RIGHT 5 COLS) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-card/50 border border-white/10 p-7 rounded-3xl backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#00FF88]" /> Direct Channels
              </h3>
              
              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-gray-400">Direct Email:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#00FF88] font-bold">info@12links.co.za</span>
                    <button
                      type="button"
                      onClick={copyEmailToClipboard}
                      className="p-1 hover:text-white text-gray-400 transition-colors"
                      title="Copy Email"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#00FF88]" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-gray-400">Headquarters:</span>
                  <span className="text-white">Pretoria & JHB, South Africa</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-gray-400">SLA Response:</span>
                  <span className="text-[#FFB800] font-bold">Within 24 Hours</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-gray-400">Data Standard:</span>
                  <span className="text-white">POPIA Act No. 4 Compliant</span>
                </div>
              </div>

              {/* Direct Mailto shortcut button */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <a
                  href="mailto:info@12links.co.za?subject=Project%20Inquiry%20-%2012%20Links"
                  className="w-full inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:border-[#00FF88]/60 hover:bg-white/5 py-3 rounded-xl text-xs font-mono uppercase tracking-wider transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#00FF88]" /> Launch Direct Email Client
                </a>
              </div>
            </div>

            {/* Engagement Roadmap */}
            <div className="bg-card/50 border border-white/10 p-7 rounded-3xl backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#FFB800]" /> 4-Stage Engagement
              </h3>
              <ul className="space-y-4">
                {[
                  { num: "01", title: "Intake Review", desc: "Our engineering leads review your requirements within 24h." },
                  { num: "02", title: "Architecture Blueprint", desc: "Receive a line-item milestone plan and system topology." },
                  { num: "03", title: "Pod Assembly", desc: "Sprint zero initializes with verified student developers & tech lead." },
                  { num: "04", title: "Milestone Handover", desc: "Weekly approvals, full source code delivery, and IP sign-off." },
                ].map((step, i) => (
                  <li key={i} className="flex gap-3.5 items-start">
                    <span className="text-[#00FF88] font-mono text-xs font-bold mt-0.5 shrink-0 px-1.5 py-0.5 rounded bg-[#00FF88]/10 border border-[#00FF88]/20">
                      {step.num}
                    </span>
                    <div>
                      <h4 className="text-white font-bold text-xs">{step.title}</h4>
                      <p className="text-gray-400 text-xs font-light mt-0.5">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </section>
    </div>
  );
}
