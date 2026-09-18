import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Wrench,
  IndianRupee,
  ShieldCheck,
  PhoneCall,
  Menu,
  X,
  Sparkles,
  Smartphone,
  ChevronDown,
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { trackEvent } from "../lib/analytics";

interface SiteHeaderProps {
  onOpenRepairModal?: () => void;
}

export function SiteHeader({ onOpenRepairModal }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleCallClick = () => {
    trackEvent("phone_call_click", { source: "header_call_button" });
  };

  const handleWhatsAppClick = () => {
    trackEvent("whatsapp_click", { source: "header_whatsapp_button" });
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0e0d15]/95 border-b border-white/10 shadow-lg">
      {/* Top Ticker Bar */}
      <div className="w-full bg-black/50 border-b border-white/10 px-4 py-1.5 text-[11px] font-label">
        <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-white/90">
            <span className="h-2 w-2 rounded-full bg-emerald-400 live-pulse" />
            <span className="text-emerald-400 font-bold uppercase tracking-wider hidden sm:inline">
              Cleanroom Express:
            </span>
            <span className="text-white/80">
              Free Doorstep Pickup & 45-Min Express Screen / Battery Repairs
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:8591770877"
              onClick={handleCallClick}
              className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 hover:bg-blue-500/30 px-2.5 py-0.5 text-blue-300 hover:text-white transition font-mono font-bold border border-blue-500/30"
              title="Call ReviveTech Support at 8591770877"
            >
              <PhoneCall className="h-3 w-3" />
              <span>8591770877</span>
            </a>
            <a
              href="https://wa.me/918591770877?text=Hi%20ReviveTech%2C%20I%20want%20to%20sell%20or%20repair%20my%20phone."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 px-2.5 py-0.5 text-emerald-300 hover:text-white transition font-mono font-bold border border-emerald-500/30"
              title="WhatsApp ReviveTech Support at 8591770877"
            >
              <WhatsAppIcon className="h-3 w-3 fill-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3">
        <nav className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="chrome-plate grid h-10 w-10 place-items-center rounded-xl transition group-hover:scale-105 shadow-md">
              <span className="font-label font-bold text-ink text-lg">R</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-tight text-white group-hover:text-accent transition">
                ReviveTech
              </span>
              <span className="font-label text-[9px] uppercase tracking-widest text-accent font-semibold -mt-1">
                Repair & Buyback Lab
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-5 text-xs text-white/80 font-display">
            <Link
              to="/repair"
              className="transition hover:text-accent flex items-center gap-1 py-1"
              activeProps={{ className: "text-accent font-bold" }}
            >
              <Wrench className="h-3.5 w-3.5 text-brand" />
              <span>Phone Repair</span>
            </Link>

            <Link
              to="/sell-phone"
              className="transition hover:text-accent flex items-center gap-1 py-1"
              activeProps={{ className: "text-accent font-bold" }}
            >
              <IndianRupee className="h-3.5 w-3.5 text-gold" />
              <span>Sell Dead Phone</span>
            </Link>

            <Link
              to="/buyback"
              className="transition hover:text-accent flex items-center gap-1 py-1"
              activeProps={{ className: "text-accent font-bold" }}
            >
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Buyback Program</span>
            </Link>

            {/* Dropdown for Brand & Specific Repairs */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className="transition hover:text-accent flex items-center gap-1 py-1 cursor-pointer bg-transparent border-none text-xs font-display text-white/80"
              >
                <span>Brands & Issues</span>
                <ChevronDown className="h-3 w-3" />
              </button>

              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute top-full -left-12 mt-2 w-64 rounded-2xl bg-[#141221] border border-white/15 p-3 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 z-50 text-xs"
                >
                  <div className="font-label text-[10px] uppercase font-bold text-accent tracking-wider px-2.5 py-1">
                    Phone Brands
                  </div>
                  <Link
                    to="/iphone-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition"
                  >
                    <span>Apple iPhone Repair</span>
                    <span className="text-[10px] text-white/40 font-mono">OEM</span>
                  </Link>
                  <Link
                    to="/samsung-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition"
                  >
                    <span>Samsung Galaxy Repair</span>
                    <span className="text-[10px] text-white/40 font-mono">OLED</span>
                  </Link>
                  <Link
                    to="/android-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition"
                  >
                    <span>Android All-Brand Repair</span>
                    <span className="text-[10px] text-white/40 font-mono">10+ Brands</span>
                  </Link>

                  <div className="border-t border-white/10 my-1.5" />

                  <div className="font-label text-[10px] uppercase font-bold text-accent tracking-wider px-2.5 py-1">
                    Common Repairs
                  </div>
                  <Link
                    to="/screen-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-2.5 py-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition"
                  >
                    Screen & OLED Replacement
                  </Link>
                  <Link
                    to="/battery-replacement"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-2.5 py-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition"
                  >
                    Battery Replacement
                  </Link>
                  <Link
                    to="/charging-port-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-2.5 py-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition"
                  >
                    Charging Port & IC Rework
                  </Link>
                  <Link
                    to="/water-damage-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-2.5 py-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition"
                  >
                    Liquid Damage Ultrasonic Repair
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="transition hover:text-accent py-1"
              activeProps={{ className: "text-accent font-bold" }}
            >
              About
            </Link>

            <Link
              to="/faq"
              className="transition hover:text-accent py-1"
              activeProps={{ className: "text-accent font-bold" }}
            >
              FAQ
            </Link>

            <Link
              to="/contact"
              className="transition hover:text-accent py-1"
              activeProps={{ className: "text-accent font-bold" }}
            >
              Contact
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5">
            {onOpenRepairModal && (
              <button
                type="button"
                onClick={onOpenRepairModal}
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-xs font-bold text-white shadow-[0_4px_16px_oklch(0.704_0.192_37.126/30%)] transition hover:brightness-110 font-label cursor-pointer"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Book 24h Repair</span>
              </button>
            )}

            <a
              href="tel:8591770877"
              onClick={handleCallClick}
              className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-[#489535] hover:bg-[#3d832c] text-white shadow-md transition hover:scale-105"
              title="Call ReviveTech at 8591770877"
            >
              <PhoneCall className="h-4 w-4" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden grid h-9 w-9 place-items-center rounded-xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/10 space-y-2 pb-2 text-sm font-display animate-in slide-in-from-top-2">
            <Link
              to="/repair"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white/10 text-white/90"
            >
              <Wrench className="h-4 w-4 text-brand" />
              <span>Phone Repair Services</span>
            </Link>
            <Link
              to="/sell-phone"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white/10 text-white/90"
            >
              <IndianRupee className="h-4 w-4 text-gold" />
              <span>Sell Dead & Used Phone</span>
            </Link>
            <Link
              to="/buyback"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white/10 text-white/90"
            >
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Phone Buyback Program</span>
            </Link>

            <div className="px-3 py-1.5 text-[11px] font-label uppercase font-bold text-accent tracking-wider">
              Popular Repairs
            </div>
            <div className="grid grid-cols-2 gap-1.5 px-2">
              <Link
                to="/iphone-repair"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white/80"
              >
                iPhone Repair
              </Link>
              <Link
                to="/samsung-repair"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white/80"
              >
                Samsung Repair
              </Link>
              <Link
                to="/screen-repair"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white/80"
              >
                Screen Repair
              </Link>
              <Link
                to="/battery-replacement"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white/80"
              >
                Battery Swap
              </Link>
            </div>

            <div className="border-t border-white/10 pt-2 flex items-center justify-around text-xs">
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/70 hover:text-white"
              >
                About Us
              </Link>
              <Link
                to="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/70 hover:text-white"
              >
                FAQs
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/70 hover:text-white font-bold text-accent"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
