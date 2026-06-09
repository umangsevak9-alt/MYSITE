import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Globe,
  Smartphone,
  Cpu,
  Database,
  Cloud,
  ChevronRight,
  ShieldCheck,
  Zap,
  Terminal,
  FileCheck2,
  Lock
} from "lucide-react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import QuoteForm from "./components/QuoteForm";
import Testimonials from "./components/Testimonials";
import AdminPanel from "./components/AdminPanel";
import AdminLogin from "./components/AdminLogin";
import Footer from "./components/Footer";
import { QuoteRequest, ContactMessage } from "./types";

// Seed Initial Proposals Data
const initialQuotes: QuoteRequest[] = [
  {
    id: "q-719a",
    name: "Richard Holloway",
    companyName: "Aura Global Logistics",
    email: "holloway@aura-global.com",
    phone: "+91 957185573",
    projectType: "Website Development",
    budgetRange: "₹20,000 - ₹25,000 INR",
    projectDescription: "Looking to replace our legacy corporate website with a speedy, headless Next.js solution that matches our multi-continent regional routes and renders assets in under 500ms.",
    timeline: "3 - 6 Months",
    status: "Reviewed",
    createdAt: "2026-06-08T14:22:00Z",
    adminNotes: "Client specifically requested raw performance and WCAG compliance. Recommended Next.js + static export routes."
  },
  {
    id: "q-402c",
    name: "Melissa Drake",
    companyName: "Vertex Wealth Management",
    email: "m.drake@vertex-wealth.com",
    phone: "+1 (555) 791-8022",
    projectType: "AI Solutions",
    budgetRange: "₹50,000 - ₹75,000 INR",
    projectDescription: "Need an automated cognitive text analysis system powered by Gemini Pro to scan PDF audit documents, match legislative compliance vectors, and file direct exceptions inside our database.",
    timeline: "1 - 3 Months",
    status: "Approved",
    createdAt: "2026-06-07T09:11:32Z",
    adminNotes: "Approved proposal specs. Setup a secure server-side API cluster with environment keys hidden completely. Next meeting scheduled for Wednesday."
  }
];

// Seed Initial Message Briefs Data
const initialContacts: ContactMessage[] = [
  {
    id: "msg-12b",
    name: "Julian Thorne",
    email: "julian@vividbank.com",
    phone: "+1 (202) 555-0143",
    subject: "Neo-bank Branding assets",
    message: "We're launching a mobile neo-bank pilot and need a polished, modern vector design system, style layout guidelines, and a suite of responsive UI templates in React.",
    createdAt: "2026-06-08T18:45:10Z",
    status: "Received"
  },
  {
    id: "msg-88c",
    name: "Chloe Bell",
    email: "chloe.bell@zenith-saas.co",
    phone: "Not provided",
    subject: "Headless commerce integration specs",
    message: "Could you supply documentation or sample architectural layouts for your headless Shopify store components? We maintain complex ERP inventory sync constraints.",
    createdAt: "2026-06-06T11:04:15Z",
    status: "Received"
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isAdminActive, setIsAdminActive] = useState<boolean>(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem("ski_admin_logged_in") === "true";
  });
  const [preselectedService, setPreselectedService] = useState<string>("");

  // Sync admin authentication to localStorage
  useEffect(() => {
    localStorage.setItem("ski_admin_logged_in", String(isAdminLoggedIn));
  }, [isAdminLoggedIn]);

  // Quotes and Message database states loaded from cache
  const [quotes, setQuotes] = useState<QuoteRequest[]>(() => {
    const cached = localStorage.getItem("ski_quotes_db");
    return cached ? JSON.parse(cached) : initialQuotes;
  });

  const [contacts, setContacts] = useState<ContactMessage[]>(() => {
    const cached = localStorage.getItem("ski_contacts_db");
    return cached ? JSON.parse(cached) : initialContacts;
  });

  // Sync state modifications to localStorage
  useEffect(() => {
    localStorage.setItem("ski_quotes_db", JSON.stringify(quotes));
  }, [quotes]);

  useEffect(() => {
    localStorage.setItem("ski_contacts_db", JSON.stringify(contacts));
  }, [contacts]);

  // Handle Client Quote Form Submissions
  const handleQuoteSubmit = (newQuoteData: Omit<QuoteRequest, "id" | "createdAt" | "status">) => {
    const newQuote: QuoteRequest = {
      ...newQuoteData,
      id: "q-" + Math.random().toString(36).substring(2, 6),
      status: "Pending",
      createdAt: new Date().toISOString(),
    };
    setQuotes((prev) => [newQuote, ...prev]);
  };

  // Handle Customer General Message Submissions
  const handleContactSubmit = (newMsgData: Omit<ContactMessage, "id" | "createdAt" | "status">) => {
    const newMsg: ContactMessage = {
      ...newMsgData,
      id: "msg-" + Math.random().toString(36).substring(2, 6),
      status: "Received",
      createdAt: new Date().toISOString()
    };
    setContacts((prev) => [newMsg, ...prev]);
  };

  // Admin Panel Action Toggles
  const handleUpdateQuoteStatus = (id: string, status: QuoteRequest["status"], notes?: string) => {
    setQuotes((prev) =>
      prev.map((q) => (q.id === id ? { ...q, status, adminNotes: notes } : q))
    );
  };

  const handleDeleteQuote = (id: string) => {
    setQuotes((prev) => prev.filter((q) => q.id !== id));
  };

  const handleDeleteContact = (id: string) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  // Direct Redirect Toggles
  const handleRequestServiceQuote = (serviceName: string) => {
    setPreselectedService(serviceName);
    setActiveTab("quote");
    setIsAdminActive(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavbarQuoteClick = () => {
    setPreselectedService("");
    setActiveTab("quote");
    setIsAdminActive(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans flex flex-col justify-between select-none">
      
      {/* Top sticky blurred Navigation strip */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        quoteCount={quotes.filter(q => q.status === "Pending").length}
        contactCount={contacts.filter(c => c.status === "Received").length}
        toggleAdminView={() => setIsAdminActive(!isAdminActive)}
        isAdminActive={isAdminActive}
      />

      {/* Main page view renderer wrapper */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {isAdminActive ? (
            <motion.div
              key={isAdminLoggedIn ? "admin-terminal" : "admin-auth"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {isAdminLoggedIn ? (
                <AdminPanel
                  quotes={quotes}
                  contacts={contacts}
                  onUpdateQuoteStatus={handleUpdateQuoteStatus}
                  onDeleteQuote={handleDeleteQuote}
                  onDeleteContact={handleDeleteContact}
                  onLogout={() => setIsAdminLoggedIn(false)}
                />
              ) : (
                <AdminLogin
                  onLoginSuccess={() => setIsAdminLoggedIn(true)}
                  onCancel={() => setIsAdminActive(false)}
                />
              )}
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.25 }}
            >
              {activeTab === "home" && (
                <div id="home-view-block">
                  {/* HERO HEADER */}
                  <Hero
                    onQuoteClick={handleNavbarQuoteClick}
                    onPortfolioClick={() => setActiveTab("portfolio")}
                  />

                  {/* MINI SERVICES INTRODUCTION TEASERS */}
                  <div className="bg-white py-16 sm:py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
                      <div className="flex flex-col md:flex-row items-baseline justify-between gap-4 border-b border-slate-100 pb-5">
                        <div className="space-y-1.5 max-w-xl">
                          <span className="font-mono text-[9px] font-bold text-blue-600 uppercase tracking-widest block">Core Competencies</span>
                          <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-none">
                            Tailored High-Performance Software Modules
                          </h3>
                        </div>
                        <button
                          onClick={() => { setActiveTab("services"); window.scrollTo({ top: 0 }); }}
                          className="font-mono text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 shrink-0"
                        >
                          <span>Explore All 8 Structural Branches</span>
                          <ChevronRight className="h-4.5 w-4.5" />
                        </button>
                      </div>

                      {/* 3 Featured competencies cards */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          {
                            icon: <Globe className="h-5 w-5 text-blue-600" />,
                            bg: "bg-blue-50",
                            title: "Scalable Web Architectures",
                            desc: "Building gorgeous Next.js and React storefront portals with server components that load instantly under heavy, worldwide server queries."
                          },
                          {
                            icon: <Cpu className="h-5 w-5 text-emerald-600" />,
                            bg: "bg-emerald-50",
                            title: "Cognitive AI Integrations",
                            desc: "Deploying structural Large Language pipelines, parsing automations, vector databases, and secure semantic API search layers."
                          },
                          {
                            icon: <Cloud className="h-5 w-5 text-indigo-600" />,
                            bg: "bg-indigo-50",
                            title: "Auto-Scaling Cloud Systems",
                            desc: "Configuring robust Docker partitions and CI/CD pipelines across AWS & Google Cloud for bulletproof operational reliability."
                          }
                        ].map((comp, idx) => (
                          <div key={idx} className="rounded-2xl border border-slate-150 p-6 space-y-4 hover:shadow-xs transition">
                            <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${comp.bg}`}>
                              {comp.icon}
                            </div>
                            <h4 className="font-sans text-base font-bold text-slate-950 uppercase tracking-tight">{comp.title}</h4>
                            <p className="font-sans text-xs text-slate-500 font-semibold leading-relaxed">{comp.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* BRAND TECHNOLOGY STACKS */}
                  <div className="bg-slate-50 border-y border-slate-100 py-16 sm:py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
                      <div className="text-center max-w-2xl mx-auto space-y-2">
                        <span className="font-mono text-[9px] font-bold text-blue-600 uppercase tracking-widest block">ENGINEER LAB SPANS</span>
                        <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-none">
                          Core Technology Matrix Stack
                        </h3>
                        <p className="font-sans text-xs text-slate-500 font-semibold leading-relaxed">
                          We do not write mock code. Our teams write production-ready architectures employing standard modular libraries.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                        {[
                          { title: "React Ecosystem", text: "React 19+, Vite speed optimizations, standard custom Hooks compilation.", desc: "Web Frontends" },
                          { title: "NextJS Platforms", text: "Static export generation, React Server Components routing structures.", desc: "CMS & Landing Pages" },
                          { title: "NodeJS & Express", text: "Concurrent REST APIs, secure token auth, microservice structures.", desc: "Backend Servers" },
                          { title: "Python Architectures", text: "ML models fine-tuning, embeddings indices, text parsing.", desc: "Cognitive AI Pipelines" },
                          { title: "Flutter Engines", text: "Direct canvas pixel rendering, unified Dart core compilation.", desc: "Mobile Application UI" },
                          { title: "Cloud Clustering", text: "Deployment containers, Cloud Run, serverless databases, VM setup.", desc: "Cloud Infrastructure" },
                          { title: "PostgreSQL & SQL", text: "Strict relational schemas, index scaling, pgvector databases.", desc: "Durable Cloud Storage" },
                          { title: "Gemini SDK API", text: "Robust integration of modern generative LLM task workflows.", desc: "AI Cognition API" }
                        ].map((itm, i) => (
                          <div key={i} className="rounded-xl border border-slate-200/65 bg-white p-4 space-y-2 shadow-3xs">
                            <span className="block font-sans text-[9px] font-bold text-blue-600 tracking-wider uppercase">{itm.desc}</span>
                            <h4 className="font-sans text-sm font-bold text-slate-900 leading-snug">{itm.title}</h4>
                            <p className="font-sans text-[11px] text-slate-400 font-semibold leading-relaxed">{itm.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* TESTIMONIALS SLIDER ASSETS */}
                  <Testimonials />

                  {/* HOME VIEW BLOG HIGHLIGHTS */}
                  <div className="bg-white py-16 sm:py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
                      <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4">
                        <div className="space-y-1.5">
                          <span className="font-mono text-[9px] font-bold text-blue-600 uppercase tracking-widest block">RECENT DISPATCHES</span>
                          <h3 className="font-sans text-2xl font-extrabold text-slate-900 tracking-tight leading-none">
                            Technical Knowledge Insights
                          </h3>
                        </div>
                        <button
                          onClick={() => { setActiveTab("blog"); window.scrollTo({ top: 0 }); }}
                          className="font-mono text-xs font-bold text-blue-600 hover:underline shrink-0"
                        >
                          View all articles
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                        {[
                          {
                            title: "Leveraging Large Language Models for Enterprise Document Workflows",
                            summary: "How organizations are utilizing custom embeddings, vector indices, and RAG architectures to automate administrative PDF searching, summarization, and data extraction.",
                            date: "June 04, 2026",
                            author: "Dr. Sarah Lin (CEO)"
                          },
                          {
                            title: "Mastering Core Web Vitals in 2026: Designing for Instant Interaction",
                            summary: "Explore standard web rendering techniques to keep your Largest Contentful Paint (LCP) under 1.2s, eliminate layout shifts, and boost SEO organically.",
                            date: "May 28, 2026",
                            author: "Marcus Vance (Head of Web Platforms)"
                          }
                        ].map((art, idx) => (
                          <div
                            key={idx}
                            onClick={() => { setActiveTab("blog"); window.scrollTo({ top: 0 }); }}
                            className="rounded-xl border border-slate-150 p-5 space-y-3 shadow-3xs hover:shadow-2xs transition cursor-pointer"
                          >
                            <span className="font-mono text-[9px] text-slate-400 font-bold block">{art.date} • {art.author}</span>
                            <h4 className="font-sans text-base font-bold text-slate-900 leading-snug">{art.title}</h4>
                            <p className="font-sans text-xs text-slate-500 leading-relaxed font-semibold line-clamp-2">{art.summary}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM ACTION CTA */}
                  <div className="bg-blue-600 text-white py-16 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 font-mono text-[100px] font-bold tracking-tighter shrink-0 uppercase select-none pointer-events-none transform translate-y-7 pl-6 select-none leading-none">
                      SKI ENTERPRISE
                    </div>
                    <div className="relative z-10 mx-auto max-w-4xl px-4 text-center space-y-5">
                      <h3 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight">
                        Do you seek an elite, scalable technical blueprint for your venture?
                      </h3>
                      <p className="font-sans text-sm text-blue-100 max-w-xl mx-auto leading-relaxed">
                        Submit your custom specs today. Our developer coordinators will detail a thorough operational proposal containing accurate pricing and milestones.
                      </p>
                      <div className="pt-2">
                        <button
                          onClick={handleNavbarQuoteClick}
                          className="inline-flex items-center gap-1.5 rounded-xl bg-white px-5 py-3 font-sans text-xs font-bold text-blue-700 shadow shadow-blue-900/10 hover:bg-blue-50 focus:outline-none"
                          id="homepage-cta-btn"
                        >
                          <span>Initiate Dynamic Quote estimate</span>
                          <ChevronRight className="h-4.5 w-4.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "about" && (
                <About onQuoteClick={handleNavbarQuoteClick} />
              )}

              {activeTab === "services" && (
                <Services onQuoteClick={handleRequestServiceQuote} />
              )}

              {activeTab === "portfolio" && (
                <Portfolio />
              )}

              {activeTab === "blog" && (
                <Blog />
              )}

              {activeTab === "contact" && (
                <Contact onContactSubmit={handleContactSubmit} />
              )}

              {activeTab === "quote" && (
                <QuoteForm
                  onQuoteSubmit={handleQuoteSubmit}
                  preselectedService={preselectedService}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Corporate branding Footer sitemap container */}
      <Footer
        setActiveTab={setActiveTab}
        isAdminActive={isAdminActive}
        toggleAdminView={() => setIsAdminActive(!isAdminActive)}
      />

    </div>
  );
}
