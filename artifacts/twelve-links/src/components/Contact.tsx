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
  ShieldCheck, 
  Send,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"book" | "scope">("book");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Booking State
  const [selectedDate, setSelectedDate] = useState<string>("Tomorrow");
  const [selectedSlot, setSelectedSlot] = useState<string>("10:00 AM SAST");
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    notes: ""
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [scopeConfirmed, setScopeConfirmed] = useState(false);

  // Dedicated Consultant Routing State
  const [consultant, setConsultant] = useState<string | null>(null);
  const [consultantEmail, setConsultantEmail] = useState<string | null>(null);

  // Scoping Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    vertical: "Financial Services & Payments",
    timeline: "1 - 3 Months",
    budget: "R150,000 - R350,000",
    cloud: "AWS Cape Town (af-south-1)",
    message: ""
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const proj = searchParams.get("project") || searchParams.get("service") || searchParams.get("industry");
      const cons = searchParams.get("consultant");
      const consMail = searchParams.get("email");

      if (cons) {
        setConsultant(cons);
      }
      if (consMail) {
        setConsultantEmail(consMail);
      }

      if (proj) {
        setFormData(prev => ({
          ...prev,
          message: `Hi 12 Links team, I would like to review architecture and requirements for ${proj}.`
        }));
        setActiveTab("scope");
      }
      if (cons) {
        setFormData(prev => ({
          ...prev,
          message: `Hi 12 Links team, I would like to schedule a technical consultation with ${cons}${consMail ? ` (${consMail})` : ""}.`
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

  // Shared EmailJS dispatcher (zero mailto: popups)
  const dispatchEmail = async (templateParams: Record<string, string>) => {
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      throw new Error("Email service configuration keys are missing in environment variables.");
    }

    return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const routingText = consultant ? ` with ${consultant}` : "";
    const targetEmail = consultantEmail || "info@12links.co.za";
    const payloadSummary = `Inquiry Type: 20-Minute Technical Discovery Call\nName: ${bookingData.name}\nEmail: ${bookingData.email}\nPreferred Day: ${selectedDate}\nPreferred Time: ${selectedSlot}\nAssigned Consultant: ${consultant || "General Engineering"} (${targetEmail})\n\nNotes:\n${bookingData.notes || "None provided"}`;

    try {
      await dispatchEmail({
        inquiry_type: "20-Minute Technical Discovery Call",
        name: bookingData.name,
        email: bookingData.email,
        company: "Discovery Call Booking",
        vertical: "Technical Discovery",
        timeline: `${selectedDate} at ${selectedSlot}`,
        budget: "N/A",
        cloud: "N/A",
        message: bookingData.notes || `Discovery call requested for ${selectedDate} at ${selectedSlot}.`,
        consultant: consultant || "General Engineering",
        consultant_email: targetEmail,
        to_email: targetEmail,
        cc_email: "info@12links.co.za",
        summary: payloadSummary
      });

      setBookingConfirmed(true);
      toast({
        title: "Technical Discovery Call Scheduled",
        description: `Reserved for ${selectedDate} at ${selectedSlot}${routingText}. We have sent your booking directly to our engineering team.`,
      });
    } catch (err) {
      console.error("Booking submission failed:", err);
      toast({
        variant: "destructive",
        title: "Transmission Failed",
        description: "Unable to send your booking right now. Please try again or copy info@12links.co.za.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleScopingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const targetEmail = consultantEmail || "info@12links.co.za";
    const assignedConsultantInfo = consultant ? `\nAssigned Consultant: ${consultant} (${targetEmail})` : "";
    const payloadSummary = `Inquiry Type: Structured Project Scope\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}${assignedConsultantInfo}\nVertical: ${formData.vertical}\nTimeline: ${formData.timeline}\nBudget Tier: ${formData.budget}\nTarget Cloud: ${formData.cloud}\n\nProject Scope:\n${formData.message}`;

    try {
      await dispatchEmail({
        inquiry_type: "Structured Project Scope",
        name: formData.name,
        email: formData.email,
        company: formData.company,
        vertical: formData.vertical,
        timeline: formData.timeline,
        budget: formData.budget,
        cloud: formData.cloud,
        message: formData.message,
        consultant: consultant || "General Engineering",
        consultant_email: targetEmail,
        to_email: targetEmail,
        cc_email: "info@12links.co.za",
        summary: payloadSummary
      });

      setScopeConfirmed(true);
      toast({
        title: "Project Scope Transmitted",
        description: `Our systems architects${consultant ? ` and ${consultant}` : ""} have received your scope and will respond within 24 hours.`,
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        vertical: "Financial Services & Payments",
        timeline: "1 - 3 Months",
        budget: "R150,000 - R350,000",
        cloud: "AWS Cape Town (af-south-1)",
        message: ""
      });
    } catch (err) {
      console.error("Scoping submission failed:", err);
      toast({
        variant: "destructive",
        title: "Transmission Failed",
        description: "Unable to send your project scope right now. Please try again or copy info@12links.co.za.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#090D16] text-slate-50 min-h-screen py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Page Header ── */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-3">
            CONTACT
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-50 tracking-tight mb-5">
            Start a conversation with our engineering team.
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed font-normal">
            Tell us about your project, technical challenge, or timeline. A lead engineer in Pretoria will review your inquiry and respond within one business day.
          </p>
        </div>

        {/* ── 2-Column Layout ── */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Pretoria Details & Studio Information (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-lg bg-[#111827] border border-slate-800 space-y-4 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-50 uppercase tracking-wider">
                Studio & Direct Channels
              </h3>

              <div className="space-y-3 text-xs">
                
                {/* Location */}
                <div className="p-3.5 rounded-md bg-slate-900/60 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-slate-50 font-medium">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span>Studio Location</span>
                  </div>
                  <p className="text-slate-300 pl-6">
                    Pretoria, Gauteng, South Africa
                  </p>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between p-3.5 rounded-md bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span>Direct Email:</span>
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-50 font-mono font-medium">info@12links.co.za</span>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="p-1 hover:text-slate-100 text-slate-500 transition-colors cursor-pointer"
                      title="Copy Email"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-blue-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Response SLA */}
                <div className="flex items-center justify-between p-3.5 rounded-md bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span>Response Window:</span>
                  </span>
                  <span className="text-slate-50 font-mono font-medium">Within 1 business day (SAST / UTC+2)</span>
                </div>

              </div>
            </div>

            {/* University & Governance Assurance */}
            <div className="p-6 rounded-lg bg-[#111827] border border-slate-800 text-xs text-slate-300 space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-slate-50 font-semibold">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Confidentiality & Governance</span>
              </div>
              <p className="leading-relaxed">
                All seven founding engineers are University of Pretoria (UP) specialists. Every initial inquiry, technical discussion, and scoping document is handled under strict professional confidentiality and POPIA-aligned data practices.
              </p>
            </div>

          </div>

          {/* Right Column: Interaction Modes (Cols 6-12) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-lg bg-[#111827] border border-slate-800 shadow-sm space-y-6">
              
              {/* Consultant Banner */}
              {consultant && (
                <div className="p-4 rounded-md bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <div className="text-xs font-semibold text-slate-50">
                      Direct consultation routed to {consultant}
                    </div>
                    {consultantEmail && (
                      <div className="text-slate-400 font-mono text-[11px] mt-0.5">
                        {consultantEmail}
                      </div>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-600/15 text-blue-400 border border-blue-500/30 font-medium text-[11px]">
                    Direct Web Dispatch Active
                  </span>
                </div>
              )}

              {/* Mode Toggle Header */}
              <div className="flex items-center gap-2 p-1 rounded-md bg-slate-800/80 border border-slate-700">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("book");
                    setBookingConfirmed(false);
                  }}
                  className={`flex-1 py-2 rounded-md text-xs font-medium transition-colors cursor-pointer flex items-center justify-center gap-2 ${
                    activeTab === "book"
                      ? "bg-[#111827] text-slate-50 shadow-sm font-semibold"
                      : "text-slate-400 hover:text-slate-100"
                  }`}
                >
                  <CalendarIcon className="w-3.5 h-3.5" />
                  Schedule a 20-Min Call
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("scope");
                    setScopeConfirmed(false);
                  }}
                  className={`flex-1 py-2 rounded-md text-xs font-medium transition-colors cursor-pointer flex items-center justify-center gap-2 ${
                    activeTab === "scope"
                      ? "bg-[#111827] text-slate-50 shadow-sm font-semibold"
                      : "text-slate-400 hover:text-slate-100"
                  }`}
                >
                  <Send className="w-3.5 h-3.5" />
                  Structured Project Scope
                </button>
              </div>

              {/* TAB 1: 20-MIN CALL SCHEDULER */}
              {activeTab === "book" && (
                bookingConfirmed ? (
                  <div className="p-6 rounded-md bg-slate-900/80 border border-blue-500/30 text-center space-y-4">
                    <CheckCircle2 className="w-10 h-10 text-blue-400 mx-auto" />
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-slate-50">
                        Discovery Call Request Sent
                      </h3>
                      <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                        We have received your request for <strong>{selectedDate} at {selectedSlot}</strong>. A calendar invite will be sent to <strong>{bookingData.email}</strong> shortly.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setBookingConfirmed(false);
                        setBookingData({ name: "", email: "", notes: "" });
                      }}
                      className="text-xs text-blue-400 hover:text-blue-300 underline cursor-pointer"
                    >
                      Schedule another time
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-medium text-slate-50 block mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={bookingData.name}
                          onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-md bg-slate-900 text-slate-50 placeholder:text-slate-400 border border-slate-700 text-xs focus:outline-none focus:border-blue-600"
                          placeholder="Full name"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-slate-50 block mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={bookingData.email}
                          onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-md bg-slate-900 text-slate-50 placeholder:text-slate-400 border border-slate-700 text-xs focus:outline-none focus:border-blue-600"
                          placeholder="you@company.co.za"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-slate-50 block mb-2">
                        Select Meeting Day (South African Standard Time)
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {["Tomorrow", "In 2 Days", "Next Monday"].map((day) => (
                          <button
                            key={day}
                            type="button"
                            onClick={() => setSelectedDate(day)}
                            className={`py-2 px-3 rounded-md text-xs font-medium border text-center transition-colors cursor-pointer ${
                              selectedDate === day
                                ? "border-blue-600 bg-blue-600/15 text-slate-50 font-semibold"
                                : "border-slate-700 bg-slate-900 text-slate-400 hover:text-slate-100"
                            }`}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-slate-50 block mb-2">
                        Available SAST Time Slots
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedSlot(slot)}
                            className={`py-2 px-2.5 rounded-md text-xs font-mono border text-center transition-colors cursor-pointer ${
                              selectedSlot === slot
                                ? "border-blue-600 bg-blue-600/15 text-slate-50 font-semibold"
                                : "border-slate-700 bg-slate-900 text-slate-400 hover:text-slate-100"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-slate-50 block mb-1.5">
                        Topic / Agenda (Optional)
                      </label>
                      <input
                        type="text"
                        value={bookingData.notes}
                        onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-md bg-slate-900 text-slate-50 placeholder:text-slate-400 border border-slate-700 text-xs focus:outline-none focus:border-blue-600"
                        placeholder="e.g., Cloud architecture review, API integration..."
                      />
                    </div>

                    <div className="p-4 rounded-md bg-slate-900/60 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                      Selected consultation: <strong className="text-slate-50">{selectedDate} at {selectedSlot}</strong>. Submitting sends your request directly to our team—we will email your Google Meet / Teams invite.
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium py-3 rounded-md text-sm transition-colors shadow-sm cursor-pointer"
                    >
                      {loading ? "Scheduling Call..." : "Confirm & Schedule Call"}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )
              )}

              {/* TAB 2: STRUCTURED SCOPING FORM */}
              {activeTab === "scope" && (
                scopeConfirmed ? (
                  <div className="p-6 rounded-md bg-slate-900/80 border border-blue-500/30 text-center space-y-4">
                    <CheckCircle2 className="w-10 h-10 text-blue-400 mx-auto" />
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-slate-50">
                        Project Scope Received
                      </h3>
                      <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                        Thank you. Your technical requirements have been transmitted directly to our engineering leads in Pretoria. We will follow up within one business day.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setScopeConfirmed(false)}
                      className="text-xs text-blue-400 hover:text-blue-300 underline cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleScopingSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-medium text-slate-50 block mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-md bg-slate-900 text-slate-50 placeholder:text-slate-400 border border-slate-700 text-xs focus:outline-none focus:border-blue-600"
                          placeholder="Full name"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-slate-50 block mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-md bg-slate-900 text-slate-50 placeholder:text-slate-400 border border-slate-700 text-xs focus:outline-none focus:border-blue-600"
                          placeholder="Work email address"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-medium text-slate-50 block mb-1.5">
                          Company or Project Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-md bg-slate-900 text-slate-50 placeholder:text-slate-400 border border-slate-700 text-xs focus:outline-none focus:border-blue-600"
                          placeholder="Company or organization"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-slate-50 block mb-1.5">
                          Primary Industry Vertical
                        </label>
                        <select
                          value={formData.vertical}
                          onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-md bg-slate-900 text-slate-50 border border-slate-700 text-xs focus:outline-none focus:border-blue-600"
                        >
                          <option>Financial Services & Payments</option>
                          <option>Agriculture & Supply Chain</option>
                          <option>Healthcare & Operations</option>
                          <option>Manufacturing & Industrial Systems</option>
                          <option>Other Enterprise Application</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-slate-50 block mb-1.5">
                        Project Description & Requirements *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-md bg-slate-900 text-slate-50 placeholder:text-slate-400 border border-slate-700 text-xs focus:outline-none focus:border-blue-600 resize-none leading-relaxed"
                        placeholder="Briefly describe what you are building, your timeline, and any technical requirements."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium py-3 rounded-md text-sm transition-colors shadow-sm cursor-pointer"
                    >
                      {loading ? "Transmitting..." : "Submit Project Scope"}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}