import { Menu, X, Terminal, ArrowRight, Bell } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  quoteCount: number;
  contactCount: number;
  toggleAdminView: () => void;
  isAdminActive: boolean;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  quoteCount,
  contactCount,
  toggleAdminView,
  isAdminActive,
}: NavbarProps) {
  const totalNotifications = quoteCount + contactCount;

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    if (isAdminActive) {
      toggleAdminView();
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNavClick("home")}
              className="group flex items-center gap-2 text-left focus:outline-none"
              id="nav-logo-btn"
            >
              <svg viewBox="0 0 100 100" className="h-10 w-10 shrink-0 transition-transform duration-300 group-hover:scale-105" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#4f46e5" />
                  </linearGradient>
                  <linearGradient id="shard-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#60a5fa" />
                  </linearGradient>
                </defs>
                <rect width="100" height="100" rx="24" fill="url(#logo-grad)" />
                <path d="M 50 18 L 82 70 H 18 Z" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="3" strokeLinejoin="round" />
                <path d="M 38 60 L 50 44 L 62 60" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                
                <path d="M 18 84 L 58 36" stroke="url(#shard-grad)" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
                <path d="M 30 88 L 70 40" stroke="url(#shard-grad)" strokeWidth="3" strokeLinecap="round" opacity="0.6" />

                <path d="M 24 81 L 64 33 C 67 29.5, 71 29.5, 73 32.5" stroke="white" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 36 85 L 76 37 C 79 33.5, 83 33.5, 85 36.5" stroke="white" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <span className="font-sans text-lg font-bold tracking-tight text-slate-900">
                  SKI
                </span>
                <span className="block font-mono text-[10px] tracking-widest text-blue-600 uppercase">
                  Technologies
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id && !isAdminActive;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors focus:outline-none ${
                    isActive ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
                  }`}
                  id={`nav-link-${item.id}`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Bar */}
          <div className="hidden md:flex items-center gap-3">
            {/* Admin Console Toggle */}
            <button
              onClick={toggleAdminView}
              className={`relative flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-mono text-xs font-medium transition-all focus:outline-none ${
                isAdminActive
                  ? "bg-emerald-50 border-emerald-200 text-emerald-700 font-bold"
                  : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-950"
              }`}
              id="admin-console-toggle-desktop"
              title="View Admin Dashboard Hub"
            >
              <Terminal className="h-3.5 w-3.5" />
              <span>ADMIN HUB</span>
              {totalNotifications > 0 && (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 font-mono text-[9px] font-bold text-white leading-none">
                  {totalNotifications}
                </span>
              )}
            </button>

            {/* Quick Quote Button */}
            <button
              onClick={() => handleNavClick("quote")}
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold transition-all shadow-sm focus:outline-none ${
                activeTab === "quote" && !isAdminActive
                  ? "bg-blue-700 text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-100"
              }`}
              id="get-quote-nav-btn"
            >
              <span>Get a Quote</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleAdminView}
              className={`relative rounded-lg p-2 transition-colors ${
                isAdminActive ? "text-emerald-600 bg-emerald-50" : "text-slate-600 hover:bg-slate-100"
              }`}
              id="admin-console-toggle-mobile"
            >
              <Terminal className="h-5 w-5" />
              {totalNotifications > 0 && (
                <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 font-mono text-[9px] font-bold text-white leading-none">
                  {totalNotifications}
                </span>
              )}
            </button>

            {/* Mobile Burger Trigger */}
            <button
              onClick={() => setActiveTab(activeTab === "mobile-menu" ? "home" : "mobile-menu")}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none"
              id="mobile-burger-trigger"
            >
              {activeTab === "mobile-menu" ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {activeTab === "mobile-menu" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-100 bg-white"
          >
            <div className="space-y-1 px-4 py-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full rounded-lg px-4 py-2.5 text-left text-base font-semibold ${
                    activeTab === item.id && !isAdminActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                  id={`nav-link-mobile-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t border-slate-100 pt-3 flex flex-col gap-2">
                <button
                  onClick={() => handleNavClick("quote")}
                  className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2.5 text-center font-bold text-white hover:bg-blue-700"
                  id="get-quote-mobile-nav-btn"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
