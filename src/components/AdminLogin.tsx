import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Lock, User, Eye, EyeOff, ShieldCheck, Terminal, HelpCircle, Check, AlertTriangle } from "lucide-react";

interface AdminLoginProps {
  onLoginSuccess: () => void;
  onCancel: () => void;
}

export default function AdminLogin({ onLoginSuccess, onCancel }: AdminLoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Hardcoded premium default credentials for instant offline admin authentication
  const DEFAULT_USERNAME = "umangsevak";
  const DEFAULT_PASSWORD = "Umang0822@";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username.trim() || !password.trim()) {
      setError("Please fill out all authorization telemetry fields.");
      return;
    }

    setIsLoading(true);

    // Simulate standard secure network latency
    setTimeout(() => {
      const isUsernameCorrect = username.trim().toLowerCase() === DEFAULT_USERNAME;
      const isPasswordCorrect = password === DEFAULT_PASSWORD;

      if (isUsernameCorrect && isPasswordCorrect) {
        setSuccess(true);
        setIsLoading(false);
        setTimeout(() => {
          onLoginSuccess();
        }, 800);
      } else {
        setIsLoading(false);
        setError("Invalid administrative token credentials. Verify codes.");
      }
    }, 1200);
  };

  return (
    <div className="mx-auto max-w-md px-4 py-16" id="admin-login-barrier">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, cubicBezier: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl shadow-slate-100 relative overflow-hidden"
      >
        {/* Visual Header Grid Accent */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500" />
        
        {/* Shield and Corporate Identity */}
        <div className="text-center space-y-3 mb-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <Lock className="h-6 w-6" id="lock-icon-svg" />
          </div>
          <div>
            <h2 className="font-display text-xl font-bold tracking-tight text-slate-900 leading-snug">
              Administrative Command Center
            </h2>
            <p className="font-sans text-xs text-slate-500 font-semibold leading-relaxed">
              Authenticate keys to manage service proposals and communications.
            </p>
          </div>
        </div>

        {/* Security parameters warning alert */}
        <div className="rounded-xl bg-slate-50/70 border border-slate-150 p-3 flex items-start gap-2.5 mb-6 text-slate-500 text-xs font-medium">
          <ShieldCheck className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
          <div className="space-y-0.5 leading-normal">
            <span className="block font-bold text-slate-800">Connection Secured Integrity</span>
            <span>All localized dashboard database writes and review updates are encrypted.</span>
          </div>
        </div>

        {/* Form challenges */}
        <form onSubmit={handleSubmit} className="space-y-4" id="admin-login-form">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl bg-rose-50 border border-rose-250 p-3.5 text-rose-800 text-xs font-semibold flex items-start gap-2"
            >
              <AlertTriangle className="h-4.5 w-4.5 text-rose-500 shrink-0 mt-0.5" />
              <span>{error}</span>
            </motion.div>
          )}

          {success && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl bg-emerald-50 border border-emerald-250 p-3.5 text-emerald-800 text-xs font-bold flex items-start gap-2"
            >
              <Check className="h-4.5 w-4.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>Admin token approved! Opening console...</span>
            </motion.div>
          )}

          {/* User field */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-700 font-sans tracking-wide uppercase">
              Admin Login ID
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                autoComplete="username"
                disabled={isLoading || success}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. umangsevak"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-3 pl-10 text-xs font-medium text-slate-850 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none transition shadow-3xs"
                required
              />
            </div>
          </div>

          {/* Password field */}
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="block text-xs font-bold text-slate-700 font-sans tracking-wide uppercase">
                Auth Password Sequence
              </label>
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                disabled={isLoading || success}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Secure Password key"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-3 pl-10 pr-10 text-xs font-medium text-slate-850 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none transition shadow-3xs"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-700 focus:outline-none"
                tabIndex={-1}
                title={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Action Trigger Buttons */}
          <div className="pt-2 flex flex-col gap-2">
            <button
              type="submit"
              disabled={isLoading || success}
              className="w-full inline-flex items-center justify-center gap-1.5 rounded-2xl bg-blue-600 px-4 py-3.5 text-xs font-bold text-white shadow-md shadow-blue-100 hover:bg-blue-700 focus:outline-none disabled:bg-slate-300 disabled:shadow-none transition"
              id="admin-form-submit-butt"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Verifying Terminal Signature...</span>
                </>
              ) : success ? (
                <span>Access Granted</span>
              ) : (
                <span>Grant Console Safe Entry</span>
              )}
            </button>

            <button
              type="button"
              onClick={onCancel}
              className="w-full inline-flex items-center justify-center rounded-2xl bg-slate-100 px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-150 transition"
              id="admin-login-cancel-btn"
            >
              Cancel & Return Home
            </button>
          </div>
        </form>

      </motion.div>
    </div>
  );
}
