import { useState, FormEvent } from "react";
import { Link2, Sparkles, Send, MailCheck, Github, Youtube, Linkedin, Twitter } from "lucide-react";

interface FooterProps {
  setActiveTab: (tabId: string) => void;
  isAdminActive: boolean;
  toggleAdminView: () => void;
}

export default function Footer({ setActiveTab, isAdminActive, toggleAdminView }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !email.includes("@")) {
      setError("Please supply a valid corporate email.");
      return;
    }

    setSubscribed(true);
    setEmail("");
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact Us" }
  ];

  const services = [
    { label: "Website Development" },
    { label: "Mobile App Development" },
    { label: "AI Solutions" },
    { label: "Software Development" },
    { label: "UI/UX Design" },
    { label: "Cloud Solutions" }
  ];

  const handleLinkClick = (tabId: string) => {
    setActiveTab(tabId);
    if (isAdminActive) {
      toggleAdminView();
    }
    // Scroll window smoothly to the header
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800" id="corporate-footer-block">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 space-y-12">
        
        {/* Main Footer Sitemap & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Column 1 - Brand description */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 100 100" className="h-10 w-10 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#4f46e5" />
                  </linearGradient>
                  <linearGradient id="footer-shard-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#60a5fa" />
                  </linearGradient>
                </defs>
                <rect width="100" height="100" rx="24" fill="url(#footer-logo-grad)" />
                <path d="M 50 18 L 82 70 H 18 Z" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="3" strokeLinejoin="round" />
                <path d="M 38 60 L 50 44 L 62 60" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                
                <path d="M 18 84 L 58 36" stroke="url(#footer-shard-grad)" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
                <path d="M 30 88 L 70 40" stroke="url(#footer-shard-grad)" strokeWidth="3" strokeLinecap="round" opacity="0.6" />

                <path d="M 24 81 L 64 33 C 67 29.5, 71 29.5, 73 32.5" stroke="white" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 36 85 L 76 37 C 79 33.5, 83 33.5, 85 36.5" stroke="white" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <span className="block font-sans text-lg font-bold tracking-tight text-white leading-none">
                  SKI TECH
                </span>
                <span className="block font-mono text-[10px] tracking-wider text-blue-400 uppercase mt-0.5">
                  Platform Ecosystems
                </span>
              </div>
            </div>
            
            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Deploying enterprise-grade, speedy web, cross-platform mobile app, and cognitive AI pipelines since 2026.
            </p>

            {/* Social channels icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Linkedin className="h-4 w-4" />, href: "https://linkedin.com", label: "LinkedIn corporate profile" },
                { icon: <Twitter className="h-4 w-4" />, href: "https://twitter.com", label: "Twitter micro-blog channel" },
                { icon: <Github className="h-4 w-4" />, href: "https://github.com", label: "GitHub open source repo assets" },
                { icon: <Youtube className="h-4 w-4" />, href: "https://youtube.com", label: "YouTube technology showcase" }
              ].map((soc, i) => (
                <a
                  key={i}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition shadow-sm"
                  title={soc.label}
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="col-span-2 space-y-3 font-sans text-xs sm:text-sm">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Sitemap Links</h4>
            <ul className="space-y-2 font-semibold">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="hover:text-blue-400 transition focus:outline-none"
                    id={`footer-sitemap-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services links */}
          <div className="col-span-3 space-y-3 font-sans text-xs sm:text-sm">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Offered Services</h4>
            <ul className="space-y-2 font-semibold">
              {services.map((serv, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleLinkClick("services")}
                    className="hover:text-blue-400 text-left transition focus:outline-none"
                  >
                    {serv.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Newsletter SignUp */}
          <div className="md:col-span-3 space-y-3 font-sans text-xs sm:text-sm">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs flex items-center gap-1">
              <Sparkles className="h-4.5 w-4.5 text-blue-400 animate-pulse" />
              Developer Updates
            </h4>
            <p className="font-sans text-xs text-slate-400 leading-normal">
              Subscribe to received digests of AI breakthroughs, frontend standards, and cloud performance notes.
            </p>

            {subscribed ? (
              <div className="rounded-xl border border-blue-900 bg-blue-950/40 p-3.5 text-blue-300 flex items-center gap-2">
                <MailCheck className="h-4.5 w-4.5 shrink-0" />
                <span className="text-xs font-bold font-sans">Subscription confirmed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2 font-sans" id="newsletter-form">
                
                {error && (
                  <span className="block text-[11px] text-rose-400 font-bold leading-none">{error}</span>
                )}

                <div className="relative">
                  <input
                    type="email"
                    placeholder="e.g. tech-lead@saas.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 pr-10 text-xs font-medium text-slate-300 placeholder-slate-600 focus:border-blue-500 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 rounded-lg bg-blue-600 p-1.5 text-white hover:bg-blue-700 transition"
                    title="Subscribe"
                  >
                    <Send className="h-3 w-3" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-sans font-semibold gap-4">
          <div className="space-y-0.5">
            <span>© {currentYear} SKI Technologies Inc. All rights reserved.</span>
            <span className="block text-[10px] text-slate-600 font-mono">
              Designed dynamically under strict WCAG and speed compliance guidelines.
            </span>
          </div>

          <div className="flex gap-4">
            <a href="#about" className="hover:text-blue-400">Security Parameters</a>
            <span>•</span>
            <a href="#about" className="hover:text-blue-400">Terms of Licensing</a>
            <span>•</span>
            <a href="#about" className="hover:text-blue-400">DNS Certifications</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
