import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Copy, Check, Mail, MapPin, Clock, Calendar, ArrowRight, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [defaultMessage, setDefaultMessage] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const proj = searchParams.get("project") || searchParams.get("service") || searchParams.get("industry");
      if (proj) {
        setDefaultMessage(`Hi 12 Links team, I'd like to discuss a project related to ${proj}.`);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("user_email") || "");
    const company = String(formData.get("company") || "");
    const message = String(formData.get("message") || "");

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      // Direct, reliable mailto fallback
      const subject = encodeURIComponent(`12 Links Project Inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nProject Overview:\n${message}`);
      window.location.href = `mailto:info@12links.co.za?subject=${subject}&body=${body}`;

      toast({
        title: "Opening Email Client",
        description: "Your message has been prepared for dispatch to info@12links.co.za.",
      });
      setLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
      });

      toast({
        title: "Message Sent",
        description: "Thank you. An engineering lead will review your requirements and reply within 24 hours.",
      });
      form.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      const subject = encodeURIComponent(`12 Links Inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:info@12links.co.za?subject=${subject}&body=${body}`;
      
      toast({
        title: "Direct Routing",
        description: "Routing your inquiry to info@12links.co.za via your default email client.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0F1117] text-gray-200 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Editorial Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2">
            Contact & Scoping
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Talk directly to our builders.
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed font-normal">
            Tell us about your project or where your existing software is falling short. You'll hear back directly from one of our engineers with an honest technical assessment within 24 hours.
          </p>
        </div>

        {/* Clean 2-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contacts & Booking Link */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#141721] border border-white/10 space-y-5">
              <h2 className="text-lg font-bold text-white">Direct Communication Channels</h2>
              
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-xs text-gray-400 mb-1">Email Our Engineering Leads:</div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-emerald-400 font-medium">info@12links.co.za</span>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="p-1 text-gray-400 hover:text-white transition-colors"
                      title="Copy email address"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-gray-300 pt-1">
                  <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Physical Hubs: </span>
                    Pretoria & Johannesburg, Gauteng, South Africa
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-gray-300">
                  <Clock className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Turnaround: </span>
                    Under 24 hours for all scoped inquiries
                  </div>
                </div>
              </div>

              {/* Direct Booking / WhatsApp Shortcut */}
              <div className="pt-4 border-t border-white/10 space-y-2.5">
                <a
                  href="mailto:info@12links.co.za?subject=Schedule%20Technical%20Consultation"
                  className="w-full flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-gray-200 text-xs font-medium py-2.5 px-4 rounded-lg transition-colors"
                >
                  <Calendar className="w-4 h-4" /> Schedule a 20-Minute Technical Call
                </a>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="p-6 rounded-2xl bg-[#141721] border border-white/10">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                What happens after you reach out
              </h3>
              <ul className="space-y-3 text-xs text-gray-300 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span>An engineering lead reviews your project requirements directly (no sales reps).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span>We schedule a technical discovery call to align on data schemas and constraints.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span>You receive a clear, milestone-governed proposal with fixed deliverables and timelines.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Short 4-Field Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#141721] border border-white/10">
              <h2 className="text-xl font-bold text-white mb-2">Project Scoping Form</h2>
              <p className="text-gray-400 text-sm mb-6 font-normal">
                Fill in these 4 fields and our team will get back to you promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-1.5">
                    Your Name <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    id="name"
                    required
                    name="name"
                    type="text"
                    placeholder="e.g. Sipho Ndlovu"
                    className="w-full bg-[#0E1017] border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="user_email" className="block text-xs font-medium text-gray-300 mb-1.5">
                    Work or Personal Email <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    id="user_email"
                    required
                    name="user_email"
                    type="email"
                    placeholder="name@organization.co.za"
                    className="w-full bg-[#0E1017] border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-medium text-gray-300 mb-1.5">
                    Company or Organization <span className="text-gray-500">(Optional)</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="e.g. Acme Farming Co-op / FinSwitch Pty"
                    className="w-full bg-[#0E1017] border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-300 mb-1.5">
                    Tell us what you're building or what's slowing your team down <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    name="message"
                    rows={5}
                    defaultValue={defaultMessage}
                    placeholder="Describe what you need built, your preferred timeline, or the bottleneck your current systems are facing..."
                    className="w-full bg-[#0E1017] border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm transition-colors shadow-sm disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message to Engineering Team
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
