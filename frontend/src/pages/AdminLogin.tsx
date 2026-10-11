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
  Eye,
  EyeOff,
} from "lucide-react";
import { toast } from "sonner";

export function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
      setErrorMsg(
        err.message || "Invalid credentials. Please check your email and password."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-neutral-50 px-4 py-8 sm:py-12 relative overflow-x-hidden selection:bg-brand selection:text-white">
      {/* Subtle light ambient background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-50/60 via-neutral-50 to-neutral-100 -z-10 pointer-events-none" />

      <div className="w-full max-w-[420px] mx-auto">
        {/* Back Link */}
        <div className="mb-4 sm:mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-600 hover:text-brand-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-lg px-2 py-1 -ml-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Public Storefront</span>
          </Link>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 md:p-10 border border-neutral-200/90 shadow-xl shadow-neutral-900/5">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-brand-50 border border-brand-200/60 shadow-sm mb-4">
              <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7 text-brand-600" />
            </div>
            <span className="inline-block text-[11px] uppercase tracking-wider text-brand-700 font-bold bg-brand-50/80 px-2.5 py-0.5 rounded-full border border-brand-100 mb-2">
              Lab Management Portal
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
              Staff Admin Login
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
              Enter your credentials to access the repair orders &amp; trade-in triage desk.
            </p>
          </div>

          {/* Error Banner */}
          {errorMsg && (
            <div
              role="alert"
              className="mb-5 flex items-start gap-3 rounded-xl bg-red-50 p-3.5 sm:p-4 border border-red-200 text-red-800 text-xs sm:text-sm animate-in fade-in"
            >
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-red-600" />
              <span className="font-medium">{errorMsg}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div>
              <label
                htmlFor="admin-email"
                className="block text-xs sm:text-sm font-semibold text-neutral-800 mb-1.5"
              >
                Staff Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 pointer-events-none" />
                <input
                  id="admin-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@revora.com"
                  className="w-full h-11 sm:h-12 rounded-xl border border-neutral-300 bg-white pl-10 pr-4 py-2 text-sm sm:text-base text-neutral-900 placeholder:text-neutral-400 outline-none transition-all hover:border-neutral-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="admin-password"
                  className="block text-xs sm:text-sm font-semibold text-neutral-800"
                >
                  Password
                </label>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 pointer-events-none" />
                <input
                  id="admin-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full h-11 sm:h-12 rounded-xl border border-neutral-300 bg-white pl-10 pr-11 py-2 text-sm sm:text-base text-neutral-900 placeholder:text-neutral-400 outline-none transition-all hover:border-neutral-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-neutral-500 hover:text-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/30 rounded-lg cursor-pointer"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  tabIndex={0}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 sm:h-12 mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-sm sm:text-base font-bold text-white shadow-md shadow-brand-600/20 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
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
        <div className="mt-6 text-center">
          <p className="text-[11px] sm:text-xs text-neutral-500 font-medium tracking-wide flex items-center justify-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-brand-600 shrink-0" />
            <span>NIST 800-88 &amp; JWT 256-Bit Encrypted Lab Admin</span>
          </p>
        </div>
      </div>
    </div>
  );
}
