import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, ExternalLink, Globe2, ShieldCheck } from "lucide-react";
import { ContactMessage } from "../types";

interface ContactProps {
  onContactSubmit: (msg: Omit<ContactMessage, "id" | "createdAt" | "status">) => void;
}

export default function Contact({ onContactSubmit }: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");

  const [activeOffice, setActiveOffice] = useState({
    city: "Hinjewadi Pune",
    coords: "18.5913° N, 73.7389° E",
    desc: "Global Corporate HQ & AI Engineering Cluster",
    phone: "+91 957185573",
  });

  const officesList = [
    { city: "Hinjewadi Pune", coords: "18.5913° N, 73.7389° E", desc: "Global Corporate HQ & AI Engineering Cluster", phone: "+91 957185573" },
    { city: "London", coords: "51.5074° N, 0.1278° W", desc: "FinTech & UX Design Lab", phone: "+44 (20) 7946-0192" },
    { city: "Singapore", coords: "1.3521° N, 103.8198° E", desc: "APAC Cloud Infrastructure Center", phone: "+65 6789-0123" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");

    if (!name.trim()) return setValidationError("Please provide your name.");
    if (!email.trim() || !email.includes("@")) return setValidationError("Please enter a valid email.");
    if (!subject.trim()) return setValidationError("Please describe your subject brief.");
    if (!message.trim() || message.length < 10) return setValidationError("Please supply a complete message description (min 10 characters).");

    const contactPayload = {
      name,
      email,
      phone: phone || "Not provided",
      subject,
      message,
    };

    onContactSubmit(contactPayload);
    setFormSubmitted(true);

    // Reset fields
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="bg-white py-16 sm:py-24" id="contact-us-page-pane">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 font-mono text-xs font-semibold text-blue-700">
            <span>GET IN IMPACT IMMEDIATE CONTACT</span>
          </div>
          <h2 className="font-sans text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Let's Engineer Solid Frameworks Together
          </h2>
          <p className="font-sans text-base text-slate-600 font-medium">
            Contact our office network. Submit general enquiries below or trigger an instant chat route to our standby technical specialists on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-16 items-stretch">
          
          {/* Address Cards & Interactive office coordinates - Column 1 */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-slate-150 p-6 sm:p-8 space-y-6">
            
            <div className="space-y-4">
              <h3 className="font-sans text-lg font-bold text-slate-950">
                General Communication Channels
              </h3>

              {/* Channels list details */}
              <div className="space-y-3.5 font-sans text-xs">
                <a
                  href="mailto:umangsevak9@gmail.com"
                  className="flex items-center gap-3 rounded-xl border border-slate-100 p-3 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 shrink-0">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900">Email Support</span>
                    <span className="text-slate-500 font-medium font-mono text-[11px]">umangsevak9@gmail.com</span>
                  </div>
                </a>

                <a
                  href="tel:+91957185573"
                  className="flex items-center gap-3 rounded-xl border border-slate-100 p-3 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 shrink-0">
                    <Phone className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900">Phone Mainframe</span>
                    <span className="text-slate-500 font-medium font-mono text-[11px]">{activeOffice.phone}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 rounded-xl border border-slate-100 p-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-teal-600 shrink-0 mt-0.5">
                    <MapPin className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900">Headquarters Hub</span>
                    <span className="text-slate-500 font-medium">Hinjewadi, Pune, Maharashtra, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Interactive SVG Map showing headquarters location vector */}
            <div className="rounded-xl border border-blue-50 bg-blue-50/10 p-4 space-y-3 font-sans text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                  <Globe2 className="h-4 w-4 text-blue-500" /> GEOGRAPHIC OFFICES COORDINATES
                </span>
                <span className="text-[9px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.5 rounded font-mono">
                  {activeOffice.city === "Hinjewadi Pune" ? "IST ZONE" : activeOffice.city === "London" ? "GMT GMT" : "SGT ZONE"}
                </span>
              </div>

              {/* Simulated Map Graphic Container */}
              <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-200/60 bg-white shadow-2xs flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 400 200" className="w-full h-full text-slate-300">
                  {/* Subtle dots represent map land abstract */}
                  <rect width="400" height="200" fill="#f8fafc" />
                  <path d="M50 80 Q 70 50, 90 90 T 130 70 T 170 100 T 215 50 T 260 80 T 300 40 T 350 90 T 400 70" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="3 3" />
                  
                  {/* Hinjewadi Pune Pin */}
                  <circle cx="80" cy="80" r="10" fill="rgba(59, 130, 246, 0.15)" />
                  <circle cx="80" cy="80" r="4" fill="#3b82f6" />
                  
                  {/* London Pin */}
                  <circle cx="190" cy="65" r="10" fill="rgba(99, 102, 241, 0.15)" />
                  <circle cx="190" cy="65" r="4" fill="#6366f1" />

                  {/* Singapore Pin */}
                  <circle cx="310" cy="130" r="10" fill="rgba(20, 184, 166, 0.15)" />
                  <circle cx="310" cy="130" r="4" fill="#14b8a6" />

                  {/* Active target coordinate indicator highlight box */}
                  <line
                    x1={activeOffice.city === "Hinjewadi Pune" ? 80 : activeOffice.city === "London" ? 190 : 310}
                    y1={activeOffice.city === "Hinjewadi Pune" ? 80 : activeOffice.city === "London" ? 65 : 130}
                    x2={activeOffice.city === "Hinjewadi Pune" ? 80 : activeOffice.city === "London" ? 190 : 310}
                    y2="175"
                    stroke="rgba(59, 130, 246, 0.3)"
                    strokeDasharray="2 2"
                  />
                </svg>
                <div className="absolute bottom-2 left-2 text-[9px] font-mono font-medium text-slate-500 bg-white/90 border rounded px-1.5 py-0.5">
                  TARGET: {activeOffice.coords}
                </div>
              </div>

              {/* Selector buttons to swap coordinates */}
              <div className="grid grid-cols-3 gap-1 px-0.5">
                {officesList.map((off) => (
                  <button
                    key={off.city}
                    onClick={() => setActiveOffice(off)}
                    className={`rounded px-2.5 py-1 font-sans text-[10px] font-bold text-center border focus:outline-none ${
                      activeOffice.city === off.city
                        ? "bg-blue-600 border-blue-600 text-white shadow-3xs"
                        : "bg-slate-50 border-slate-205 text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    {off.city}
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <p className="font-sans text-[10px] leading-relaxed text-slate-500">
                  <strong>{activeOffice.city} Office:</strong> {activeOffice.desc}
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Call out action */}
            <a
              href="https://wa.me/91957185573"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 p-3.5 text-center font-sans text-xs font-bold text-white shadow-sm shadow-emerald-100 hover:bg-emerald-700 transition"
              id="whatsapp-instant-chat-btn"
            >
              <MessageSquare className="h-4.5 w-4.5 fill-current" />
              <span>Launch Instant Standby WhatsApp Help Chat</span>
            </a>
          </div>

          {/* Contact form - Column 2 */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-150 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-3xs">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans text-lg font-bold text-slate-900">Contact Message Dispatched!</h3>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed max-w-xs mx-auto font-semibold">
                    We have submitted your message directly to the general office communications system.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-left space-y-2 max-w-md mx-auto">
                  <span className="inline-flex items-center gap-1 rounded bg-orange-100 px-2 py-0.5 font-mono text-[9px] font-bold text-orange-700">
                    TESTING INSTRUMENT
                  </span>
                  <p className="font-sans text-[11px] text-slate-500 leading-normal font-medium">
                    Your sent message has successfully appeared in our <strong className="text-blue-600 font-semibold">ADMIN HUB</strong> under general inquiries! Go ahead and check it out using the navigation link.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="rounded-xl border border-slate-200 px-4 py-2 font-sans text-xs font-bold text-slate-600 hover:bg-slate-50"
                  >
                    Submit Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="general-contact-form">
                
                {validationError && (
                  <div className="rounded-xl border border-rose-100 bg-rose-50 p-3 font-sans text-xs font-bold text-rose-750">
                    {validationError}
                  </div>
                )}

                <h3 className="font-sans text-base font-bold text-slate-950 pb-2 border-b border-slate-50">
                  Submit General Enquiries
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold text-slate-500 uppercase">Your Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Liam Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 py-2.5 px-3.5 font-sans text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none bg-white"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold text-slate-500 uppercase">Your Email *</label>
                    <input
                      type="email"
                      placeholder="e.g. liam@vance.io"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 py-2.5 px-3.5 font-sans text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none bg-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold text-slate-500 uppercase">Your Phone</label>
                    <input
                      type="tel"
                      placeholder="Optional"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 py-2.5 px-3.5 font-sans text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none bg-white"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold text-slate-500 uppercase">Subject brief *</label>
                    <input
                      type="text"
                      placeholder="e.g. SaaS integration specs"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 py-2.5 px-3.5 font-sans text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none bg-white"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-bold text-slate-500 uppercase">Your Message *</label>
                  <textarea
                    rows={4}
                    placeholder="Describe what you want to communicate with our administrative team..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 py-2.5 px-3.5 font-sans text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none bg-white font-semibold"
                    required
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-blue-600 px-5 py-3 font-sans text-xs font-extrabold text-white transition-all hover:bg-blue-700 shadow-sm"
                    id="submit-contact-btn"
                  >
                    <span>Send Message Brief File</span>
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
