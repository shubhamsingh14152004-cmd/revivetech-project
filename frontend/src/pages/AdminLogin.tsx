import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "@tanstack/react-router";
import { api, getAdminToken } from "../services/api";
import {
  Lock,
  Mail,
  ShieldCheck,
  ArrowRight,
  Loader2,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";
import { toast } from "sonner";

export function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // If already authenticated, jump to dashboard
    if (getAdminToken()) {
      navigate({ to: "/admin" });
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setIsLoading(true);

    try {
      const res = await api.adminLogin(email.trim(), password);
      if (res.success) {
        toast.success("Welcome back, Administrator!", {
          description: "Authenticated securely with JWT session.",
        });
        navigate({ to: "/admin" });
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Invalid credentials. Please check your email and password.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="dusk-admin min-h-screen w-full flex items-center justify-center px-4 py-12 text-white selection:bg-brand selection:text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="sun-orb absolute -top-24 -left-24 h-96 w-96 rounded-full opacity-60 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-label text-emerald-200/70 hover:text-emerald-300 transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Public Storefront</span>
          </Link>
        </div>

        {/* Login Card */}
        <div className="rounded-3xl glass-card-admin p-8 md:p-10 border border-[#43C59E]/30 shadow-2xl backdrop-blur-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto chrome-plate grid h-14 w-14 place-items-center rounded-2xl shadow-xl mb-4">
              <ShieldCheck className="h-7 w-7 text-white" />
            </div>
            <span className="font-label text-[10px] uppercase tracking-widest text-[#43C59E] font-bold">
              Cleanroom Management Portal
            </span>
            <h1 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-white mt-1">
              Staff Admin Login
            </h1>
            <p className="font-display text-xs text-slate-300 mt-1.5">
              Enter your credentials to access the repair orders & trade-in triage desk.
            </p>
          </div>

          {/* Error Banner */}
          {errorMsg && (
            <div className="mb-6 flex items-start gap-2.5 rounded-2xl bg-rose-500/20 p-4 border border-rose-500/30 text-rose-200 text-xs font-display animate-in fade-in">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-display text-xs font-medium text-slate-200 mb-1.5">
                Staff Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@revora.com"
                  className="w-full rounded-xl border border-white/15 bg-black/40 pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-[#43C59E] focus:ring-2 focus:ring-[#43C59E]/20"
                />
              </div>
            </div>

            <div>
              <label className="block font-display text-xs font-medium text-slate-200 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full rounded-xl border border-white/15 bg-black/40 pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-[#43C59E] focus:ring-2 focus:ring-[#43C59E]/20"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#007F5F] py-3.5 text-sm font-bold text-white shadow-lg shadow-[#007F5F]/40 hover:bg-[#005B46] font-label cursor-pointer transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Verifying Credentials…</span>
                </>
              ) : (
                <>
                  <span>Sign In to Admin Dashboard</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Security watermark */}
        <p className="font-label text-center text-[10px] text-emerald-400/50 uppercase tracking-widest mt-6">
          🔒 NIST 800-88 & JWT 256-Bit Encrypted Cleanroom Admin
        </p>
      </div>
    </div>
  );
}
