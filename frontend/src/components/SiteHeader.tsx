import React, { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import {
  Menu,
  X,
  Search,
  MapPin,
  ChevronRight
} from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";

const SiteSearchDialog = React.lazy(() => import("./SiteSearchDialog"));

interface SiteHeaderProps {
  onOpenRepairModal?: () => void;
}

export function SiteHeader({ onOpenRepairModal }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-bg/90 backdrop-blur-xl border-b border-line shadow-sm transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center shrink-0 group focus-ring rounded-lg py-2"
              >
                <Logo variant="horizontal" className="transition group-hover:opacity-80" />
              </Link>
              
              {/* Optional Pincode Chip (Desktop) */}
              <Link to="/mobile-repair-mumbai" aria-label="Check repair availability in Mumbai" className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-line text-[13px] font-medium text-muted hover:text-ink hover:border-neutral-300 transition focus-ring">
                <MapPin className="w-3.5 h-3.5" />
                <span>Mumbai</span>
              </Link>
            </div>

            {/* Action CTAs */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-black/5 text-ink transition focus-ring"
                aria-label="Search"
                aria-haspopup="dialog"
                aria-expanded={searchOpen}
                title="Search services"
              >
                <Search className="w-5 h-5" />
              </button>
              <Link to="/sell-phone" className="hidden sm:inline-flex items-center justify-center h-10 rounded-full border border-line bg-white px-4 text-[14px] font-semibold text-ink transition hover:border-brand hover:text-brand focus-ring">
                Sell Dead Phone
              </Link>
              
              {onOpenRepairModal ? (
                <Button
                  variant="default"
                  onClick={onOpenRepairModal}
                  className="hidden sm:flex h-10 md:h-10 px-5 text-[14px] rounded-full"
                >
                  Book Repair
                </Button>
              ) : (
                <Link to="/repair" className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-brand px-5 text-[14px] font-semibold text-white transition hover:bg-brand-ink focus-ring">
                  Book Repair
                </Link>
              )}

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-transparent text-ink hover:bg-black/5 transition focus-ring"
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="site-navigation-menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Full Height Menu Sheet */}
      {mobileMenuOpen && (
        <div id="site-navigation-menu" role="dialog" aria-modal="true" aria-label="Site navigation" className="fixed inset-0 z-50 bg-bg flex flex-col animate-in slide-in-from-bottom-4 fade-in duration-360 ease-out">
          <div className="flex items-center justify-between px-4 h-[72px] border-b border-line">
            <span className="text-xl font-semibold text-ink tracking-tight">Menu</span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-black/5 text-ink transition focus-ring"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
            <Link to="/sell-phone" className="flex items-center justify-between h-12 px-4 rounded-xl hover:bg-black/5 text-ink font-semibold text-[16px]">
              <span>Sell Dead Phone</span>
              <ChevronRight className="w-5 h-5 text-muted" />
            </Link>
            <Link to="/repair" className="flex items-center justify-between h-12 px-4 rounded-xl hover:bg-black/5 text-ink font-semibold text-[16px]">
              <span>Book Repair</span>
              <ChevronRight className="w-5 h-5 text-muted" />
            </Link>
            <Link to="/buyback" className="flex items-center justify-between h-12 px-4 rounded-xl hover:bg-black/5 text-ink font-semibold text-[16px]">
              <span>Enterprise ITAD</span>
              <ChevronRight className="w-5 h-5 text-muted" />
            </Link>
            <div className="h-4"></div>
            <div className="text-[12px] font-bold uppercase tracking-wider text-muted px-4 py-2">Company</div>
            <Link to="/about" className="flex items-center h-12 px-4 rounded-xl hover:bg-black/5 text-ink text-[16px]">About Us</Link>
            <Link to="/fix-or-sell" className="flex items-center h-12 px-4 rounded-xl hover:bg-black/5 text-ink text-[16px]">Fix or Sell?</Link>
            <Link to="/faq" className="flex items-center h-12 px-4 rounded-xl hover:bg-black/5 text-ink text-[16px]">FAQs</Link>
            <Link to="/contact" className="flex items-center h-12 px-4 rounded-xl hover:bg-black/5 text-ink text-[16px]">Contact Us</Link>
          </div>
        </div>
      )}
      {searchOpen && (
        <React.Suspense fallback={null}>
          <SiteSearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
        </React.Suspense>
      )}
    </>
  );
}
