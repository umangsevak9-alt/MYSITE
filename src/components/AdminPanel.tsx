import { useState } from "react";
import {
  Briefcase,
  Mail,
  Send,
  Trash2,
  CheckCircle,
  Clock,
  MessageSquare,
  AlertCircle,
  FileCheck2,
  ExternalLink,
  ShieldAlert,
  Inbox,
  PenTool,
  LogOut
} from "lucide-react";
import { QuoteRequest, ContactMessage } from "../types";

interface AdminPanelProps {
  quotes: QuoteRequest[];
  contacts: ContactMessage[];
  onUpdateQuoteStatus: (id: string, status: QuoteRequest["status"], notes?: string) => void;
  onDeleteQuote: (id: string) => void;
  onDeleteContact: (id: string) => void;
  onLogout?: () => void;
}

export default function AdminPanel({
  quotes,
  contacts,
  onUpdateQuoteStatus,
  onDeleteQuote,
  onDeleteContact,
  onLogout,
}: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<"quotes" | "contacts" | "emails">("quotes");
  const [selectedQuoteId, setSelectedQuoteId] = useState<string | null>(null);
  const [editingNotes, setEditingNotes] = useState<{ [id: string]: string }>({});

  const selectedQuote = quotes.find((q) => q.id === selectedQuoteId);

  const handleNotesChange = (id: string, text: string) => {
    setEditingNotes((prev) => ({ ...prev, [id]: text }));
  };

  const handleSaveNotes = (id: string) => {
    const rawQuote = quotes.find((q) => q.id === id);
    if (rawQuote) {
      onUpdateQuoteStatus(id, rawQuote.status, editingNotes[id]);
    }
  };

  return (
    <div className="bg-slate-50 min-h-[80vh] py-10" id="admin-dashboard-container">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Banner header info */}
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 font-mono text-[9px] font-bold px-2 py-0.5 rounded">
              <span>SKI ACTIVE SIM DATABASE</span>
            </div>
            <h2 className="font-sans text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Administrative Control Terminal
            </h2>
            <p className="font-sans text-xs text-slate-500 font-semibold leading-normal">
              Inspect submitted quotes, read message briefs, and verify transactional automatic SMTP message pipelines in real-time.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <div className="flex gap-1 bg-slate-100 rounded-xl p-1 font-mono text-xs">
              <button
                onClick={() => setActiveTab("quotes")}
                className={`rounded-lg px-3 py-1.5 font-bold transition focus:outline-none flex items-center gap-1.5 ${
                  activeTab === "quotes" ? "bg-white text-slate-800 shadow-2xs" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <Briefcase className="h-3.5 w-3.5" />
                <span>Quotes ({quotes.length})</span>
              </button>
              <button
                onClick={() => setActiveTab("contacts")}
                className={`rounded-lg px-3 py-1.5 font-bold transition focus:outline-none flex items-center gap-1.5 ${
                  activeTab === "contacts" ? "bg-white text-slate-800 shadow-2xs" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Messages ({contacts.length})</span>
              </button>
              <button
                onClick={() => setActiveTab("emails")}
                className={`rounded-lg px-3 py-1.5 font-bold transition focus:outline-none flex items-center gap-1.5 ${
                  activeTab === "emails" ? "bg-white text-slate-800 shadow-2xs" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <Send className="h-3.5 w-3.5" />
                <span>Outbox ({quotes.length + contacts.length})</span>
              </button>
            </div>

            {onLogout && (
              <button
                onClick={onLogout}
                className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 font-mono text-xs font-bold text-rose-700 hover:bg-rose-100 hover:text-rose-800 transition flex items-center gap-1.5 focus:outline-none"
                id="admin-logout-btn"
                title="Secure Terminal Log Out"
              >
                <LogOut className="h-3 w-3" />
                <span>LOG OUT</span>
              </button>
            )}
          </div>
        </div>

        {/* Dynamic content rendering depending on chosen tab */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* TAB 1: QUOTES DIRECTORIES */}
          {activeTab === "quotes" && (
            <>
              {/* Quotes Directory List */}
              <div className="lg:col-span-7 rounded-2xl border border-slate-150 bg-white p-5 space-y-4 shadow-3xs">
                <h3 className="font-sans text-sm font-extrabold text-slate-700 uppercase tracking-wider pb-2 border-b border-slate-100">
                  Received Corporate Proposals Inquiries
                </h3>
                
                {quotes.length === 0 ? (
                  <div className="text-center py-12 text-slate-400 space-y-2">
                    <Inbox className="h-10 w-10 text-slate-300 mx-auto" />
                    <p className="font-sans text-xs font-semibold">No Proposals Filed Yet</p>
                    <p className="text-[10px]">Submit values in the 'Get a Quote' page to populate this chart.</p>
                  </div>
                ) : (
                  <div className="divide-y divide-slate-100 space-y-3.5 pt-1">
                    {quotes.map((q) => (
                      <div
                        key={q.id}
                        onClick={() => {
                          setSelectedQuoteId(q.id);
                          if (editingNotes[q.id] === undefined) {
                            handleNotesChange(q.id, q.adminNotes || "");
                          }
                        }}
                        className={`pt-3.5 first:pt-0 pb-1 cursor-pointer flex items-start justify-between gap-4 group ${
                          selectedQuoteId === q.id ? "border-l-2 border-blue-500 pl-2" : ""
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-sans text-sm font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                              {q.name}
                            </span>
                            <span className="font-mono text-[9px] text-slate-400">#{q.id}</span>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[9px] text-slate-500">
                            <span className="font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded uppercase">
                              {q.projectType}
                            </span>
                            <span>Timeline: {q.timeline}</span>
                            <span className="text-blue-600 font-bold">{q.budgetRange}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded border ${
                            q.status === "Approved" ? "bg-emerald-50 border-emerald-105 text-emerald-700" :
                            q.status === "Contacted" ? "bg-blue-50 border-blue-105 text-blue-700" :
                            q.status === "Reviewed" ? "bg-indigo-50 border-indigo-105 text-indigo-700" :
                            "bg-orange-50 border-orange-105 text-orange-700"
                          }`}>
                            {q.status}
                          </span>
                          <button
                            onClick={(e) => { e.stopPropagation(); onDeleteQuote(q.id); if (selectedQuoteId === q.id) setSelectedQuoteId(null); }}
                            className="rounded p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                            title="Delete Quote Archive entry"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Individual Quote Detail Inspection inspector page */}
              <div className="lg:col-span-5 rounded-2xl border border-slate-150 bg-white p-5 space-y-6 shadow-3xs lg:sticky lg:top-20">
                {selectedQuote ? (
                  <div className="space-y-5">
                    <div className="border-b border-slate-100 pb-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] font-bold text-slate-400 tracking-wider uppercase">Proposal Spec Sheet</span>
                        <span className="text-[10px] text-slate-400 font-semibold">{selectedQuote.createdAt}</span>
                      </div>
                      <h4 className="font-sans text-base font-extrabold text-slate-900 mt-1">{selectedQuote.name}</h4>
                      <p className="font-sans text-xs text-slate-400 font-bold">Company: {selectedQuote.companyName}</p>
                    </div>

                    {/* Specifications copy */}
                    <div className="space-y-1.5 font-sans text-xs leading-relaxed text-slate-600 border border-slate-100 rounded-lg p-3.5 bg-slate-50/50">
                      <strong className="block text-slate-800 font-bold">Project Requirements:</strong>
                      <p className="font-semibold text-slate-700">{selectedQuote.projectDescription}</p>
                    </div>

                    {/* Metadata specs list */}
                    <div className="grid grid-cols-2 gap-3.5 font-sans text-[11px] leading-relaxed">
                      <div>
                        <strong className="block text-slate-400 font-medium">Inquiry Email</strong>
                        <a href={`mailto:${selectedQuote.email}`} className="text-blue-600 font-semibold hover:underline font-mono">
                          {selectedQuote.email}
                        </a>
                      </div>
                      <div>
                        <strong className="block text-slate-400 font-medium">Phone Channel</strong>
                        <span className="font-bold text-slate-700 font-mono">{selectedQuote.phone}</span>
                      </div>
                    </div>

                    {/* State controller workflow */}
                    <div className="space-y-4 pt-3.5 border-t border-slate-100">
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          Update Proposal Status:
                        </label>
                        <select
                          value={selectedQuote.status}
                          onChange={(e) => onUpdateQuoteStatus(selectedQuote.id, e.target.value as QuoteRequest["status"], selectedQuote.adminNotes)}
                          className="w-full rounded-lg border border-slate-205 py-2 px-3 bg-white font-sans text-xs font-medium text-slate-800 focus:outline-none"
                        >
                          <option value="Pending">Pending Review</option>
                          <option value="Reviewed">Reviewed & Logged</option>
                          <option value="Contacted">Contacted Client</option>
                          <option value="Approved">Approved Proposal</option>
                        </select>
                      </div>

                      {/* Notes Pad */}
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          Internal Engineering Notes:
                        </label>
                        <textarea
                          rows={2}
                          value={editingNotes[selectedQuote.id] || ""}
                          onChange={(e) => handleNotesChange(selectedQuote.id, e.target.value)}
                          placeholder="e.g. Needs DB scaling check; timeline looks appropriate."
                          className="w-full rounded-lg border border-slate-205 py-1.5 px-2.5 font-sans text-xs font-semibold text-slate-800 bg-white placeholder-slate-400 focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => handleSaveNotes(selectedQuote.id)}
                          className="rounded-lg bg-slate-900 text-white px-3 py-1 font-sans text-[10px] font-bold hover:bg-slate-850"
                        >
                          Save Notes
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-20 text-slate-400 space-y-1.5">
                    <CheckCircle className="h-9 w-9 text-slate-350 mx-auto" />
                    <p className="font-sans text-xs font-bold leading-none">Inquiry Inspection Selected</p>
                    <p className="text-[10px]">Click a proposal in the incoming mailbox to read target specs, update process statuses, and pad admin comments.</p>
                  </div>
                )}
              </div>
            </>
          )}

          {/* TAB 2: GENERAL MESSAGE INBOX */}
          {activeTab === "contacts" && (
            <div className="lg:col-span-12 rounded-2xl border border-slate-150 bg-white p-5 space-y-4 shadow-3xs">
              <h3 className="font-sans text-sm font-extrabold text-slate-700 uppercase tracking-wider pb-2 border-b border-slate-100">
                General Communication Mailbox
              </h3>

              {contacts.length === 0 ? (
                <div className="text-center py-16 text-slate-400 space-y-2">
                  <Inbox className="h-10 w-10 text-slate-300 mx-auto" />
                  <p className="font-sans text-xs font-semibold">Message Buffer Empty</p>
                  <p className="text-[10px]">Incoming consumer comments submitted in Contact sections are indexed here.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {contacts.map((msg) => (
                    <div key={msg.id} className="rounded-xl border border-slate-150 p-4 space-y-3.5 relative hover:shadow-2xs transition">
                      
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-0.5">
                          <span className="block font-sans text-sm font-extrabold text-slate-900 leading-snug">{msg.name}</span>
                          <span className="block font-sans font-semibold text-[10px] text-blue-600 font-mono tracking-tight">{msg.email}</span>
                          <span className="block font-sans text-[10px] text-slate-400 leading-none pt-1">{msg.createdAt}</span>
                        </div>
                        <button
                          onClick={() => onDeleteContact(msg.id)}
                          className="rounded p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition shrink-0"
                          title="Delete General Message"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="border-t border-slate-50 pt-2 space-y-1 font-sans text-xs">
                        <strong className="block text-slate-800 font-bold uppercase tracking-wide text-[10px]">
                          Subject: {msg.subject}
                        </strong>
                        <p className="text-slate-600 font-semibold leading-relaxed p-2.5 bg-slate-50 rounded-lg">{msg.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: TRANSACTIONAL EMAIL OUTBOX BROWSER SIMULATOR */}
          {activeTab === "emails" && (
            <div className="lg:col-span-12 rounded-2xl border border-slate-150 bg-white p-5 space-y-4 shadow-3xs">
              <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                <div>
                  <h3 className="font-sans text-sm font-extrabold text-slate-700 uppercase tracking-wider">
                    Simulated Transactional Outbox
                  </h3>
                  <p className="text-[10px] text-slate-400 font-semibold leading-none mt-1">SMTP Gateway status: SSL SECURED • DNS MATCH PASS (SPF & DKIM)</p>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 font-mono text-[9px] font-bold text-emerald-800 animate-pulse">
                  SIM OUTBOX SYSTEM LIVE
                </span>
              </div>

              {(quotes.length + contacts.length) === 0 ? (
                <div className="text-center py-20 text-slate-400 space-y-2">
                  <Inbox className="h-10 w-10 text-slate-350 mx-auto" />
                  <p className="font-sans text-xs font-bold leading-normal">Mail Buffer Empty</p>
                  <p className="text-[10px]">Submitting active forms will trigger automatic template email records that display here perfectly.</p>
                </div>
              ) : (
                <div className="space-y-6 pt-2">
                  {/* Map over submitted quotes and messages to represent mock email despatches */}
                  
                  {/* QUOTES CONFIRMATIONS */}
                  {quotes.map((q) => (
                    <div key={`mail-q-${q.id}`} className="border rounded-2xl overflow-hidden shadow-2xs font-sans text-xs">
                      {/* Email Browser header */}
                      <div className="bg-slate-50 border-b border-slate-100 p-3.5 flex flex-wrap items-center justify-between gap-2">
                        <div className="space-y-0.5">
                          <span className="block font-sans text-xs font-bold text-slate-750">
                            <strong>Subject:</strong> SKI Technical Proposal Estimator Confirmed [ID: #SKI-{q.id.toUpperCase()}]
                          </span>
                          <span className="block text-[10px] text-slate-400">
                            <strong>To:</strong> {q.name} &lt;<span className="font-mono text-blue-600 font-semibold">{q.email}</span>&gt;
                          </span>
                        </div>
                        <div className="flex items-center gap-2 font-mono text-[9px]">
                          <span className="rounded bg-emerald-50 border border-emerald-150 text-emerald-700 font-bold px-1.5">✔ SPF: PASS</span>
                          <span className="rounded bg-emerald-50 border border-emerald-150 text-emerald-700 font-bold px-1.5">✔ DKIM: PASS</span>
                        </div>
                      </div>

                      {/* Email core template content */}
                      <div className="p-5 bg-white space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-lg bg-blue-600 font-mono text-white flex items-center justify-center font-bold text-sm">
                            S
                          </div>
                          <div>
                            <span className="block font-sans font-extrabold text-slate-900 leading-none">SKI PLATFORM SYSTEMS</span>
                            <span className="block font-mono text-[9px] text-slate-400 leading-none mt-1">gateway@ski-tech.com</span>
                          </div>
                        </div>

                        <div className="space-y-2 text-slate-700 font-medium leading-relaxed font-sans text-xs max-w-2xl px-1">
                          <p>Dear {q.name},</p>
                          
                          <p>
                            Thank you for utilizing the digital <strong>SKI Technologies Estimator Engine</strong>. We have securely received your request for <strong>{q.projectType}</strong>.
                          </p>

                          <p>
                            We have queued your requirements under inquiry ticket reference <strong>#SKI-{q.id}</strong>. Here is the active estimation blueprint summary generated by your chosen criteria:
                          </p>

                          {/* Data spec table */}
                          <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-3.5 grid grid-cols-1 sm:grid-cols-2 gap-3 font-semibold text-slate-700">
                            <div>
                              <span className="text-[10px] text-slate-400 font-medium block">Digital Module Route</span>
                              <span className="text-slate-900 font-bold">{q.projectType}</span>
                            </div>
                            <div>
                              <span className="text-[10px] text-slate-405 font-medium block">Speed Target Framework</span>
                              <span className="text-slate-900 font-bold">{q.timeline}</span>
                            </div>
                            <div>
                              <span className="text-[10px] text-slate-405 font-medium block">Calculated Budget Scale (USD)</span>
                              <span className="text-slate-900 font-bold">{q.budgetRange}</span>
                            </div>
                            <div>
                              <span className="text-[10px] text-slate-405 font-medium block">Authorized Verification Status</span>
                              <span className="text-blue-600 font-bold">SMTP QUEUED (PENDING INTAKE)</span>
                            </div>
                          </div>

                          <p>
                            <strong>What happens next?</strong> My team is actively checking your descriptions. A senior technical product architect will reach out to you within **12 business hours** using your email <strong>({q.email})</strong> or listed phone channel <strong>({q.phone})</strong> with precise scheduling plans.
                          </p>

                          <p className="pt-2 font-semibold">
                            With professional regard,<br />
                            <span className="text-slate-900 font-extrabold text-xs">Aries Automated Butler System</span><br />
                            <span className="text-slate-400 text-[10px]">SKI Technologies Inc.</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* CONTACT FORM CONFIRMATION */}
                  {contacts.map((c) => (
                    <div key={`mail-c-${c.id}`} className="border rounded-2xl overflow-hidden shadow-2xs font-sans text-xs">
                      {/* Email Browser header */}
                      <div className="bg-slate-50 border-b border-slate-100 p-3.5 flex flex-wrap items-center justify-between gap-2">
                        <div className="space-y-0.5">
                          <span className="block font-sans text-xs font-bold text-slate-750">
                            <strong>Subject:</strong> We have received your message [Ticket: #TXT-{c.id.toUpperCase()}]
                          </span>
                          <span className="block text-[10px] text-slate-400">
                            <strong>To:</strong> {c.name} &lt;<span className="font-mono text-blue-600 font-semibold">{c.email}</span>&gt;
                          </span>
                        </div>
                        <div className="flex items-center gap-2 font-mono text-[9px]">
                          <span className="rounded bg-emerald-50 border border-emerald-150 text-emerald-700 font-bold px-1.5">✔ SPF: PASS</span>
                        </div>
                      </div>

                      {/* Email core template content */}
                      <div className="p-5 bg-white space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-lg bg-blue-600 font-mono text-white flex items-center justify-center font-bold text-sm">
                            S
                          </div>
                          <div>
                            <span className="block font-sans font-extrabold text-slate-900 leading-none">SKI PLATFORM COMMUNICATIONS</span>
                            <span className="block font-mono text-[9px] text-slate-400 leading-none mt-1">gateway@ski-tech.com</span>
                          </div>
                        </div>

                        <div className="space-y-2 text-slate-700 font-medium leading-relaxed font-sans text-xs max-w-2xl px-1">
                          <p>Hi {c.name},</p>
                          
                          <p>
                            Thanks for dropping us a note! We have submitted your message safely into general administration.
                          </p>

                          <div className="rounded-xl border bg-slate-50/50 p-3.5 font-semibold text-slate-750">
                            <span className="text-[10px] text-slate-405 font-medium block">Your message text recorded:</span>
                            <p className="font-semibold text-slate-700 mt-1 italic font-sans">"{c.message}"</p>
                          </div>

                          <p>
                            Our support desk coordinates reviews continuously. An officer will reply directly to your address if additional actions are requested.
                          </p>

                          <p className="pt-2 font-semibold">
                            Warmly,<br />
                            <span className="text-slate-900 font-extrabold text-xs">Customer Support Desk</span><br />
                            <span className="text-slate-400 text-[10px]">SKI Technologies Inc.</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
