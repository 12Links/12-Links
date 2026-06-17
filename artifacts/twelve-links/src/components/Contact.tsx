import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Users, Building, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";

const inputCls =
  "w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#00FF88]/50 focus:ring-1 focus:ring-[#00FF88]/50 transition-colors placeholder-gray-600";
const labelCls = "block text-sm font-medium text-gray-400 mb-2";

// Define strict prop types for sub-forms to satisfy Vite's compiler
interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
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

function AIForm({ onSubmit, loading }: FormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <input type="hidden" name="inquiry_type" value="AI Solution Request" />
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Full Name" required>
          <input required name="user_name" type="text" className={inputCls} />
        </Field>
        <Field label="Email Address" required>
          <input required name="user_email" type="email" className={inputCls} />
        </Field>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Company" required>
          <input required name="company" type="text" className={inputCls} />
        </Field>
        <Field label="Industry">
          <select name="industry" className={inputCls}>
            <option value="">Select industry</option>
            {["Fintech", "AgriTech", "HealthTech", "Education", "Manufacturing", "Other"].map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </Field>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Budget Range">
          <select name="budget_range" className={inputCls}>
            <option value="">Select range</option>
            {["Under R50k", "R50k – R150k", "R150k – R500k", "R500k+", "Prefer not to say"].map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </Field>
        <Field label="Timeline">
          <select name="timeline" className={inputCls}>
            <option value="">Select timeline</option>
            {["Urgent (< 1 month)", "1–3 months", "3–6 months", "Flexible"].map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Project Description" required>
        <textarea
          required
          name="message"
          rows={5}
          className={inputCls}
          placeholder="Describe the AI solution you need — what problem does it solve? What data do you have available?"
        />
      </Field>
      <SubmitBtn loading={loading} />
    </form>
  );
}

function TalentForm({ onSubmit, loading }: FormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <input type="hidden" name="inquiry_type" value="Talent Partnership" />
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Full Name" required>
          <input required name="user_name" type="text" className={inputCls} />
        </Field>
        <Field label="Email Address" required>
          <input required name="user_email" type="email" className={inputCls} />
        </Field>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Company">
          <input name="company" type="text" className={inputCls} />
        </Field>
        <Field label="Partnership Type">
          <select name="partnership_type" className={inputCls}>
            <option value="">Select type</option>
            {["Staff Augmentation", "Project Team", "Long-term Retainer", "Other"].map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </Field>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Team Size Needed">
          <select name="team_size" className={inputCls}>
            <option value="">Select size</option>
            {["1 Developer", "2–5 Developers", "5–10 Developers", "10+ Developers"].map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </Field>
        <Field label="Required Skills">
          <input name="required_skills" type="text" className={inputCls} placeholder="e.g. Python, React, ML, Node.js" />
        </Field>
      </div>
      <Field label="Additional Notes">
        <textarea name="message" rows={4} className={inputCls} placeholder="Tell us more about your talent partnership needs..." />
      </Field>
      <SubmitBtn loading={loading} />
    </form>
  );
}

function EnterpriseForm({ onSubmit, loading }: FormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <input type="hidden" name="inquiry_type" value="Enterprise Inquiry" />
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Full Name" required>
          <input required name="user_name" type="text" className={inputCls} />
        </Field>
        <Field label="Job Title" required>
          <input required name="job_title" type="text" className={inputCls} />
        </Field>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Company" required>
          <input required name="company" type="text" className={inputCls} />
        </Field>
        <Field label="Email Address" required>
          <input required name="user_email" type="email" className={inputCls} />
        </Field>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Phone">
          <input name="phone" type="tel" className={inputCls} placeholder="+27 ..." />
        </Field>
        <Field label="Company Size">
          <select name="company_size" className={inputCls}>
            <option value="">Select size</option>
            {["10–50", "51–200", "201–1000", "1000+"].map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Primary Need" required>
        <select required name="primary_need" className={inputCls}>
          <option value="">Select primary need</option>
          {["AI Development", "Digital Transformation", "Data Infrastructure", "Custom Software", "Other"].map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </Field>
      <Field label="Message" required>
        <textarea required name="message" rows={5} className={inputCls} placeholder="Tell us about your enterprise technology needs and goals." />
      </Field>
      <SubmitBtn loading={loading} />
    </form>
  );
}

function GeneralForm({ onSubmit, loading }: FormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <input type="hidden" name="inquiry_type" value="General Inquiry" />
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Full Name" required>
          <input required name="user_name" type="text" className={inputCls} />
        </Field>
        <Field label="Email Address" required>
          <input required name="user_email" type="email" className={inputCls} />
        </Field>
      </div>
      <Field label="Subject Line" required>
        <input required name="subject_line" type="text" className={inputCls} placeholder="What's this about?" />
      </Field>
      <Field label="Message" required>
        <textarea required name="message" rows={5} className={inputCls} placeholder="How can we help?" />
      </Field>
      <SubmitBtn loading={loading} />
    </form>
  );
}

function DefaultForm({ onSubmit, loading, subject, setSubject }: DefaultFormProps) {
  const inquiryTypes = [
    { id: "ai", label: "AI Solution Request" },
    { id: "talent", label: "Talent Partnership" },
    { id: "enterprise", label: "Enterprise Inquiry" },
    { id: "general", label: "General Inquiry" },
  ];
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <input type="hidden" name="inquiry_type" value="General Default Inquiry" />
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Full Name" required>
          <input required name="user_name" type="text" className={inputCls} />
        </Field>
        <Field label="Email Address" required>
          <input required name="user_email" type="email" className={inputCls} />
        </Field>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Company">
          <input name="company" type="text" className={inputCls} />
        </Field>
        <Field label="Subject" required>
          <select required name="subject_line" value={subject} onChange={(e) => setSubject(e.target.value)} className={inputCls}>
            <option value="">Select a subject</option>
            {inquiryTypes.map((t) => (
              <option key={t.id} value={t.id}>{t.label}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Message" required>
        <textarea required name="message" rows={5} className={inputCls} placeholder="Tell us how we can help..." />
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
      className="w-full neon-border bg-[#00FF88]/10 text-[#00FF88] hover:bg-[#00FF88]/20 px-8 py-4 rounded-md font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 disabled:opacity-60"
    >
      {loading ? "Sending..." : "Send Message"}
    </button>
  );
}

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [subject, setSubject] = useState("");

  const inquiryTypes = [
    { id: "ai", title: "AI Solution Request", icon: Brain },
    { id: "talent", title: "Talent Partnership", icon: Users },
    { id: "enterprise", title: "Enterprise Inquiry", icon: Building },
    { id: "general", title: "General Inquiry", icon: MessageSquare },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast({
        title: "Configuration Error",
        description: "API execution context parameters are completely missing.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, {
        publicKey: PUBLIC_KEY,
      });

      toast({
        title: "Message Sent Successfully",
        description: "Our team will get back to you within 24 hours.",
        variant: "default",
      });
      e.currentTarget.reset();
    } catch (error) {
      console.error("EmailJS Router Execution Fault:", error);
      toast({
        title: "Transmission Failure",
        description: "Unable to route request via edge mail gateway. Please mail info@twelvelinks.co.za.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const renderForm = () => {
    const baseProps = { onSubmit: handleSubmit, loading };
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
    <div className="pb-24 bg-background min-h-screen">
      {/* Page Hero */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[#00FF88]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In{" "}
              <span className="relative inline-block">
                Touch
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#00FF88] rounded-full shadow-[0_0_10px_#00FF88]" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
              Ready to build the future? Tell us about your project and we'll put together a tailored proposal.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Inquiry Type Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {inquiryTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSubject(type.id)}
              className={`p-6 rounded-xl border flex flex-col items-center justify-center gap-3 transition-all ${
                subject === type.id
                  ? "border-[#00FF88] bg-[#00FF88]/10 text-[#00FF88]"
                  : "border-white/10 bg-card/50 text-gray-400 hover:border-white/30 hover:text-white"
              }`}
            >
              <type.icon className="w-8 h-8" />
              <span className="text-sm font-bold text-center">{type.title}</span>
            </button>
          ))}
        </div>

        {/* Helper text */}
        {subject && (
          <motion.p initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="text-xs text-gray-500 font-mono mb-6">
            Showing fields for:{" "}
            <span className="text-[#00FF88]">{inquiryTypes.find((t) => t.id === subject)?.title}</span>
            {" — "}
            <button onClick={() => setSubject("")} className="underline hover:text-white transition-colors">
              clear selection
            </button>
          </motion.p>
        )}

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form panel */}
          <div className="lg:col-span-3 bg-card border border-white/10 p-8 rounded-2xl relative shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FF88]/5 rounded-full blur-2xl pointer-events-none" />
            <AnimatePresence mode="wait">
              <motion.div
                key={subject}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
                className="relative z-10"
              >
                {renderForm()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card border border-white/5 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Contact Details</h3>
              <div className="space-y-4 text-gray-400 font-mono text-sm">
                <p><span className="text-[#00FF88]">Email:</span> info@twelvelinks.co.za</p>
                <p><span className="text-[#00FF88]">HQ:</span> Johannesburg, South Africa</p>
                <p><span className="text-[#00FF88]">Response:</span> Within 24 hours</p>
                <p><span className="text-[#00FF88]">Coverage:</span> Pan-African, Global</p>
              </div>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">How We Engage</h3>
              <ul className="space-y-6">
                {[
                  { num: "01", title: "Submit Request", desc: "Fill out the form with your project details." },
                  { num: "02", title: "Consultation", desc: "Our team reviews and schedules a discovery call." },
                  { num: "03", title: "Proposal", desc: "Receive a tailored proposal within 24 hours." },
                  { num: "04", title: "Launch", desc: "We assemble the team and kick off your project." },
                ].map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-[#FFB800] font-mono font-bold mt-1 shrink-0">{step.num}</span>
                    <div>
                      <h4 className="text-white font-bold text-sm mb-1">{step.title}</h4>
                      <p className="text-gray-500 text-xs">{step.desc}</p>
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
