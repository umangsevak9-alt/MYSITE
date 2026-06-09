import { useState, useEffect, FormEvent } from "react";
import { Check, ClipboardList, Send, DollarSign, Clock, Users, Cpu, FileCheck2 } from "lucide-react";
import { QuoteRequest } from "../types";

interface QuoteFormProps {
  onQuoteSubmit: (quote: Omit<QuoteRequest, "id" | "createdAt" | "status">) => void;
  preselectedService?: string;
}

export default function QuoteForm({ onQuoteSubmit, preselectedService }: QuoteFormProps) {
  // Form values
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState(preselectedService || "Website Development");
  const [budgetRange, setBudgetRange] = useState("₹20,000 - ₹25,000 INR");
  const [projectDescription, setProjectDescription] = useState("");
  const [timeline, setTimeline] = useState("3 - 6 Months");

  // Estimator values derived dynamically
  const [estimatedCostRange, setEstimatedCostRange] = useState({ min: 20000, max: 25000 });
  const [estimatedHours, setEstimatedHours] = useState(240);
  const [resourceAllocation, setResourceAllocation] = useState("3 Developers + 1 UI UI/UX");

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");

  // Update preselected service parameter
  useEffect(() => {
    if (preselectedService) {
      setProjectType(preselectedService);
    }
  }, [preselectedService]);

  // Recalculate dynamic estimation details on input change
  useEffect(() => {
    let baseMin = 15000;
    let baseMax = 30000;
    let hours = 180;
    let staff = "2 Software Creators";

    switch (projectType) {
      case "Website Development":
        baseMin = 20000; baseMax = 25000; hours = 160; staff = "1 Fullstack Engineer + 1 UI Architect";
        break;
      case "Mobile App Development":
        baseMin = 35000; baseMax = 48000; hours = 320; staff = "1 Flutter Dev + 1 Backend Architect";
        break;
      case "AI Solutions":
        baseMin = 50000; baseMax = 75000; hours = 450; staff = "1 ML Researcher + 2 Backend Devs";
        break;
      case "Software Development":
        baseMin = 45000; baseMax = 60000; hours = 380; staff = "2 Backend Engineers + 1 QA Specialist";
        break;
      case "UI/UX Design":
        baseMin = 12000; baseMax = 18000; hours = 120; staff = "1 Principal Designer";
        break;
      case "E-commerce Development":
        baseMin = 25000; baseMax = 35000; hours = 240; staff = "1 Shopify Expert + 1 Security Dev";
        break;
      case "Digital Marketing":
        baseMin = 10000; baseMax = 15005; hours = 80; staff = "1 SEO Analyst + 1 Conversion Optimizer";
        break;
      case "Cloud Solutions":
        baseMin = 30000; baseMax = 42000; hours = 200; staff = "1 Devops Engineer + 1 Security Officer";
        break;
    }

    // Multiply by timeline speed coefficients
    if (timeline === "Under 1 Month") {
      baseMin *= 1.35; baseMax *= 1.45; hours = Math.floor(hours * 0.95); staff += " + 1 Fast-track Lead";
    } else if (timeline === "1 - 3 Months") {
      baseMin *= 1.15; baseMax *= 1.20; hours = Math.floor(hours * 1.0);
    } else if (timeline === "Over 6 Months") {
      baseMin *= 0.90; baseMax *= 0.90; hours = Math.floor(hours * 1.15);
    }

    setEstimatedCostRange({ min: Math.floor(baseMin), max: Math.floor(baseMax) });
    setEstimatedHours(hours);
    setResourceAllocation(staff);

    // Sync form's formal budget selector string to estimated numbers
    setBudgetRange(`₹${Math.floor(baseMin).toLocaleString("en-IN")} - ₹${Math.floor(baseMax).toLocaleString("en-IN")} INR`);

  }, [projectType, timeline]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setValidationError("");

    // Minimal form validation
    if (!name.trim()) return setValidationError("Please supply your full name.");
    if (!email.trim() || !email.includes("@")) return setValidationError("Please supply a valid corporate email.");
    if (!projectDescription.trim() || projectDescription.length < 15) {
      return setValidationError("Please describe your project specifications (minimum 15 characters).");
    }

    // Capture quote payload
    const quotePayload = {
      name,
      companyName: companyName || "Independent",
      email,
      phone: phone || "No Phone provided",
      projectType,
      budgetRange,
      projectDescription,
      timeline,
    };

    onQuoteSubmit(quotePayload);
    setFormSubmitted(true);

    // Reset fields
    setName("");
    setCompanyName("");
    setEmail("");
    setPhone("");
    setProjectDescription("");
  };

  return (
    <div className="bg-white py-16 sm:py-24" id="get-quote-page-pane">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 font-mono text-xs font-semibold text-blue-700">
            <span>REAL-TIME PROJECT PROJECT PROPOSAL</span>
          </div>
          <h2 className="font-sans text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Request an Estimated Development Quote
          </h2>
          <p className="font-sans text-base text-slate-600 font-medium">
            Define your digital objective. Use our dynamic scope calculator below to outline instant budget bounds, hours, and resources before submitting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-16 items-start">
          
          {/* Interactive Pricing Estimator Card - Column 1 (Left/Responsive) */}
          <div className="lg:col-span-5 rounded-2xl border border-blue-100 bg-blue-50/15 p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-blue-500/5 blur-2xl" />
            
            <h3 className="font-sans text-lg font-bold text-slate-950 flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-blue-600" />
              Scope Estimation Matrix
            </h3>

            <div className="space-y-4 font-sans text-xs">
              {/* Cost Box */}
              <div className="rounded-xl bg-white border border-slate-150 p-4 space-y-1 shadow-2xs">
                <span className="text-slate-400 font-bold uppercase tracking-wider block text-[10px]">
                  Estimated Pricing Index:
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-600 flex items-center tracking-tight leading-none pt-1">
                  <span className="text-xl sm:text-2xl font-bold mr-1 text-blue-500">₹</span>
                  {estimatedCostRange.min.toLocaleString("en-IN")} - {estimatedCostRange.max.toLocaleString("en-IN")}
                  <span className="text-xs font-medium text-slate-400 ml-1.5 font-mono text-slate-500">INR</span>
                </span>
                <p className="text-[10px] text-slate-400 leading-normal pt-1.5">
                  Estimation variables recalculate automatically on module branch and delivery speeds selected.
                </p>
              </div>

              {/* Stats parameters */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="rounded-xl bg-white border border-slate-150 p-3 flex flex-col justify-between">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-blue-500" /> HOUR METRIC
                  </span>
                  <span className="text-lg font-bold text-slate-800 pt-2 font-mono">
                    ~{estimatedHours} Hrs
                  </span>
                </div>
                <div className="rounded-xl bg-white border border-slate-150 p-3 flex flex-col justify-between">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-indigo-500" /> STAFF POOL
                  </span>
                  <span className="text-xs font-bold text-slate-700 pt-1 leading-tight font-sans">
                    {resourceAllocation.split(" + ")[0]}
                  </span>
                </div>
              </div>

              {/* Value Addpoints Lists */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  All Proposals Include:
                </span>
                {[
                  "Dedicated Senior Project Coordinator",
                  "Weekly staging demo site builds",
                  "Robust REST backend architecture deployment",
                  "Complete GitHub repository access handover",
                  "30 Days complementary system warranty",
                ].map((item, id) => (
                  <div key={id} className="flex items-center gap-2 text-slate-600 font-semibold">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span className="text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form container - Column 2 (Right/Responsive) */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-150 bg-white p-6 sm:p-8 shadow-xs">
            {formSubmitted ? (
              <div className="text-center py-10 space-y-5">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check className="h-7 w-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans text-xl font-bold text-slate-900">Quote Inquiry Submitted Successfully!</h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm mx-auto font-semibold">
                    We have dispatched your technical proposal request to our admin dashboard. A transaction confirmation has also been prepared for your email outbox.
                  </p>
                </div>
                
                {/* Micro instructions showing Admin Hub trigger */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-left space-y-2 max-w-md mx-auto">
                  <span className="inline-flex items-center gap-1 rounded bg-orange-100 px-2 py-0.5 font-mono text-[9px] font-bold text-orange-700">
                    TESTING INSTRUMENT
                  </span>
                  <h4 className="font-sans text-xs font-bold text-slate-800">Review Submission in Real-Time:</h4>
                  <p className="font-sans text-[11px] text-slate-500 leading-normal font-medium">
                    Because you are previewing this app, you can click the <strong className="text-blue-600 font-semibold">ADMIN HUB</strong> toggle in the top-right navbar menu to inspect this submitted quote, add admin reviews, and look at the confirmation email template!
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="rounded-xl border border-slate-200 px-5 py-2.5 font-sans text-xs font-bold text-slate-600 hover:bg-slate-50 focus:outline-none"
                  >
                    Submit Another Quote
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" id="quote-request-form">
                
                {validationError && (
                  <div className="rounded-xl border border-rose-100 bg-rose-50 p-4 font-sans text-xs font-bold text-rose-700">
                    {validationError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Richard Holloway"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 py-2.5 px-3.5 font-sans text-xs font-medium text-slate-800 placeholder-slate-450 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-100 bg-white"
                      required
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Aura Logistics Corp"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 py-2.5 px-3.5 font-sans text-xs font-medium text-slate-800 placeholder-slate-450 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-100 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide">
                      Corporate Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. holloway@aura-global.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 py-2.5 px-3.5 font-sans text-xs font-medium text-slate-800 placeholder-slate-450 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-100 bg-white"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 957185573"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 py-2.5 px-3.5 font-sans text-xs font-medium text-slate-800 placeholder-slate-450 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-100 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide">
                      Technology Branch <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 py-2.5 px-3 bg-white font-sans text-xs font-medium text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-100"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="AI Solutions">AI Solutions</option>
                      <option value="Software Development">Software Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="E-commerce Development">E-commerce Development</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Cloud Solutions">Cloud Solutions</option>
                    </select>
                  </div>

                  {/* Timeline speed */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide">
                      Target Time Framework <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 py-2.5 px-3 bg-white font-sans text-xs font-medium text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-100"
                    >
                      <option value="Under 1 Month">Under 1 Month (Fast-track)</option>
                      <option value="1 - 3 Months">1 - 3 Months</option>
                      <option value="3 - 6 Months">3 - 6 Months (Standard)</option>
                      <option value="Over 6 Months">Over 6 Months (Long Integration)</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide">
                    Project Description & Requirements <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly detail what your software, app, or system needs to accomplish..."
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 py-2.5 px-3.5 font-sans text-xs font-medium text-slate-800 placeholder-slate-450 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-100 bg-white"
                    minLength={15}
                    required
                  />
                  <span className="block text-[10px] text-slate-400 font-medium font-sans">
                    Please describe main objectives, database requirements, or other integration needs.
                  </span>
                </div>

                {/* Submit trigger */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-sans text-sm font-bold text-white transition-all hover:bg-blue-700 shadow-md shadow-blue-100 cursor-pointer"
                    id="submit-proposal-btn"
                  >
                    <span>Submit Proposal Request</span>
                    <Send className="h-4 w-4" />
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
