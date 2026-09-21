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
  Cpu,
  Zap,
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
              Free Doorstep Pickup • Same-Day Screen & Battery Repair • Top Cash for Dead Phones
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:8591770877"
              onClick={handleCallClick}
              className="inline-flex items-center gap-1 rounded-full bg-blue-500/20 hover:bg-blue-500/30 px-2 py-0.5 text-blue-300 hover:text-white transition font-mono font-bold border border-blue-500/30"
              title="Call Technician: 8591770877"
            >
              <PhoneCall className="h-3 w-3" />
              <span>+91 8591770877</span>
            </a>

            <a
              href="https://wa.me/918591770877?text=Hi%20Sagar%20Tech%2C%20I%20want%20to%20sell%20or%20repair%20my%20phone."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-1 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 px-2 py-0.5 text-emerald-300 hover:text-white transition font-mono font-bold border border-emerald-500/30"
              title="WhatsApp: 8591770877"
            >
              <WhatsAppIcon className="h-3 w-3 fill-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="chrome-plate grid h-10 w-10 place-items-center rounded-xl transition group-hover:scale-105">
              <span className="font-label font-bold text-ink text-lg">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-tight text-white group-hover:text-accent transition">
                Sagar Tech
              </span>
              <span className="font-label text-[8px] sm:text-[8.5px] uppercase tracking-wider text-accent font-semibold -mt-0.5 whitespace-nowrap">
                SELL OLD PHONE & REPAIR YOUR PHONE
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-4 text-xs text-white/80 font-display">
            <Link
              to="/repair"
              className="transition hover:text-accent flex items-center gap-1 py-1"
              activeProps={{ className: "text-accent font-bold" }}
            >
              <Wrench className="h-3.5 w-3.5 text-brand" />
              <span>Repair</span>
            </Link>

            <Link
              to="/dead-phone-repair"
              className="transition hover:text-accent flex items-center gap-1 py-1 text-emerald-300"
              activeProps={{ className: "text-accent font-bold" }}
            >
              <Cpu className="h-3.5 w-3.5 text-emerald-400" />
              <span>Dead Phone Repair</span>
            </Link>

            <Link
              to="/sell-phone"
              className="transition hover:text-accent flex items-center gap-1 py-1"
              activeProps={{ className: "text-accent font-bold" }}
            >
              <IndianRupee className="h-3.5 w-3.5 text-gold" />
              <span>Sell Phone</span>
            </Link>

            <Link
              to="/dead-phone-buyback"
              className="transition hover:text-accent flex items-center gap-1 py-1 text-amber-300"
              activeProps={{ className: "text-accent font-bold" }}
            >
              <Zap className="h-3.5 w-3.5 text-amber-400" />
              <span>Sell Dead Phone</span>
            </Link>

            <Link
              to="/buyback"
              className="transition hover:text-accent flex items-center gap-1 py-1"
              activeProps={{ className: "text-accent font-bold" }}
            >
              <ShieldCheck className="h-3.5 w-3.5 text-purple-400" />
              <span>Buyback</span>
            </Link>

            {/* Dropdown for Brand & Specific Repairs */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className="transition hover:text-accent flex items-center gap-1 py-1 cursor-pointer bg-transparent border-none text-xs font-display text-white/80"
              >
                <span>Brands & Services</span>
                <ChevronDown className="h-3 w-3" />
              </button>

              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute top-full -left-20 mt-2 w-72 rounded-2xl bg-[#141221] border border-white/15 p-3 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 z-50 text-xs max-h-[80vh] overflow-y-auto"
                >
                  <div className="font-label text-[10px] uppercase font-bold text-accent tracking-wider px-2.5 py-1">
                    Brand Cleanroom Hubs
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
                    <span className="text-[10px] text-white/40 font-mono">AMOLED</span>
                  </Link>
                  <Link
                    to="/oneplus-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition"
                  >
                    <span>OnePlus Repair</span>
                    <span className="text-[10px] text-white/40 font-mono">Fluid AMOLED</span>
                  </Link>
                  <Link
                    to="/xiaomi-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition"
                  >
                    <span>Xiaomi, Redmi & POCO Repair</span>
                    <span className="text-[10px] text-white/40 font-mono">CPU Reball</span>
                  </Link>
                  <Link
                    to="/vivo-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition"
                  >
                    <span>Vivo & iQOO Repair</span>
                    <span className="text-[10px] text-white/40 font-mono">Curved 3D</span>
                  </Link>
                  <Link
                    to="/oppo-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition"
                  >
                    <span>Oppo Reno & Find Repair</span>
                    <span className="text-[10px] text-white/40 font-mono">SuperVOOC</span>
                  </Link>
                  <Link
                    to="/realme-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition"
                  >
                    <span>Realme GT & Narzo Repair</span>
                    <span className="text-[10px] text-white/40 font-mono">SuperDart</span>
                  </Link>
                  <Link
                    to="/motorola-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition"
                  >
                    <span>Motorola Edge & Razr Repair</span>
                    <span className="text-[10px] text-white/40 font-mono">pOLED / Razr</span>
                  </Link>
                  <Link
                    to="/google-pixel-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition"
                  >
                    <span>Google Pixel 9 / 8 / 7 Repair</span>
                    <span className="text-[10px] text-white/40 font-mono">Tensor</span>
                  </Link>
                  <Link
                    to="/android-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition font-medium"
                  >
                    <span>Android All-Brand Repair</span>
                    <span className="text-[10px] text-accent font-mono">Multi-Brand</span>
                  </Link>

                  <div className="border-t border-white/10 my-1.5" />

                  <div className="font-label text-[10px] uppercase font-bold text-accent tracking-wider px-2.5 py-1">
                    Specialized Component & Local Hubs
                  </div>
                  <Link
                    to="/doorstep-mobile-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-2.5 py-1 rounded-lg hover:bg-white/10 text-white font-semibold transition"
                  >
                    🏠 Doorstep Mobile Repair (45-Min Fix)
                  </Link>
                  <Link
                    to="/mobile-repair-mumbai"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-2.5 py-1 rounded-lg hover:bg-white/10 text-accent font-semibold transition"
                  >
                    📍 Mobile Repair in Mumbai Hub
                  </Link>
                  <Link
                    to="/dead-phone-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-2.5 py-1 rounded-lg hover:bg-white/10 text-emerald-300 font-semibold transition"
                  >
                    ⚡ Dead Phone Motherboard Repair
                  </Link>
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
          <div className="flex items-center gap-2">
            <a
              href="tel:8591770877"
              onClick={handleCallClick}
              className="hidden xl:inline-flex items-center justify-between gap-2.5 rounded-full bg-[#489535] hover:bg-[#3d832c] text-white pl-3.5 pr-1 py-1 text-xs font-bold font-display shadow-md border border-white/20 transition hover:scale-105"
              title="Call Us: 8591770877"
            >
              <span>Call Us</span>
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20">
                <PhoneCall className="h-3 w-3 text-white stroke-[2.4]" />
              </span>
            </a>

            <a
              href="https://wa.me/918591770877?text=Hi%20Sagar%20Tech%2C%20I%20want%20to%20sell%20or%20repair%20my%20phone."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="hidden sm:inline-flex items-center justify-between gap-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white pl-3.5 pr-1 py-1 text-xs font-bold font-display shadow-md border border-white/20 transition hover:scale-105"
              title="WhatsApp Us: 8591770877"
            >
              <span>WhatsApp</span>
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20">
                <WhatsAppIcon className="h-3.5 w-3.5 fill-white" />
              </span>
            </a>

            {onOpenRepairModal && (
              <button
                type="button"
                onClick={onOpenRepairModal}
                className="chrome-plate inline-flex items-center justify-center rounded-full px-3.5 py-1.5 text-xs font-bold text-ink transition hover:brightness-105 font-label shadow-md cursor-pointer"
              >
                <span>Book Repair</span>
              </button>
            )}

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-white hover:bg-white/20 transition"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 rounded-2xl bg-[#141221] border border-white/15 p-4 shadow-2xl space-y-3 animate-in fade-in duration-150 text-xs">
            <Link
              to="/repair"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white/10 text-white/90"
            >
              <Wrench className="h-4 w-4 text-brand" />
              <span>Phone Repair Services</span>
            </Link>
            <Link
              to="/dead-phone-repair"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white/10 text-emerald-300 font-semibold"
            >
              <Cpu className="h-4 w-4 text-emerald-400" />
              <span>Dead Phone Motherboard Repair (Band Phone)</span>
            </Link>
            <Link
              to="/sell-phone"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white/10 text-white/90"
            >
              <IndianRupee className="h-4 w-4 text-gold" />
              <span>Sell Old Phone (Purana Phone Becho)</span>
            </Link>
            <Link
              to="/dead-phone-buyback"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white/10 text-amber-300 font-semibold"
            >
              <Zap className="h-4 w-4 text-amber-400" />
              <span>Sell Dead Phone for Cash (Band Phone Becho)</span>
            </Link>
            <Link
              to="/buyback"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white/10 text-white/90"
            >
              <ShieldCheck className="h-4 w-4 text-purple-400" />
              <span>Trade-In & Buyback Program</span>
            </Link>

            <div className="px-3 py-1.5 text-[11px] font-label uppercase font-bold text-accent tracking-wider">
              Popular Brands
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
                to="/oneplus-repair"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white/80"
              >
                OnePlus Repair
              </Link>
              <Link
                to="/xiaomi-repair"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white/80"
              >
                Xiaomi / POCO
              </Link>
              <Link
                to="/vivo-repair"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white/80"
              >
                Vivo / iQOO
              </Link>
              <Link
                to="/oppo-repair"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white/80"
              >
                Oppo Repair
              </Link>
              <Link
                to="/realme-repair"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white/80"
              >
                Realme Repair
              </Link>
              <Link
                to="/google-pixel-repair"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white/80"
              >
                Google Pixel
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
