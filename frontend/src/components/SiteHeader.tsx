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
  ChevronDown,
  Cpu,
  Zap,
  Phone,
  HelpCircle,
  BookOpen,
  Info,
  Mail,
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { trackEvent } from "../lib/analytics";

interface SiteHeaderProps {
  onOpenRepairModal?: () => void;
}

export function SiteHeader({ onOpenRepairModal }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const handleCallClick = () => {
    trackEvent("phone_call_click", { source: "header_call_button" });
  };

  const handleWhatsAppClick = () => {
    trackEvent("whatsapp_click", { source: "header_whatsapp_button" });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-xs">
      {/* Top Ticker Bar */}
      <div className="w-full bg-[#DDF5EA] border-b border-[#E5E7EB] px-4 py-1.5 text-[11px] font-label">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#005B46]">
            <span className="h-2 w-2 rounded-full bg-[#007F5F] animate-pulse shrink-0" />
            <span className="font-bold uppercase tracking-wider hidden sm:inline text-[#005B46]">
              Cleanroom Express:
            </span>
            <span className="text-[#102A26]/90 font-medium truncate max-w-xs sm:max-w-none">
              Free Doorstep Pickup • Same-Day Screen & Battery Repair • Top Cash for Dead Phones
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:8591770877"
              onClick={handleCallClick}
              className="inline-flex items-center gap-1 rounded-full bg-white hover:bg-[#FAFAF7] px-2.5 py-0.5 text-[#007F5F] transition font-mono font-bold border border-[#007F5F]/30 shadow-xs text-[11px]"
              title="Call Support: 8591770877"
            >
              <PhoneCall className="h-3 w-3 text-[#007F5F]" />
              <span>+91 8591770877</span>
            </a>

            <a
              href="https://wa.me/918591770877?text=Hi%20Revora%2C%20I%20want%20to%20sell%20or%20repair%20my%20phone."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-1 rounded-full bg-emerald-50 hover:bg-emerald-100 px-2.5 py-0.5 text-emerald-800 transition font-mono font-bold border border-emerald-200 text-[11px]"
              title="WhatsApp: 8591770877"
            >
              <WhatsAppIcon className="h-3 w-3 fill-emerald-800" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2.5">
        <nav className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007F5F] rounded-lg p-0.5"
          >
            <img
              src="/images/revora-icon-transparent.png"
              alt="Revora Logo"
              className="h-8 sm:h-9 w-auto object-contain transition group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#102A26] group-hover:text-[#007F5F] transition leading-none">
                Revora
              </span>
              <span className="font-label text-[8px] uppercase tracking-wider text-[#007F5F] font-semibold mt-0.5 whitespace-nowrap hidden sm:inline">
                Sell Old Phone · Get Paid · Simple
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links - Single Row, Whitespace-Nowrap */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 text-xs text-[#102A26] font-display font-medium">
            <Link
              to="/sell-phone"
              className="px-2.5 py-1.5 rounded-lg hover:bg-[#FAFAF7] hover:text-[#007F5F] transition flex items-center gap-1 whitespace-nowrap"
              activeProps={{ className: "bg-[#DDF5EA] text-[#005B46] font-bold" }}
            >
              <IndianRupee className="h-3.5 w-3.5 text-[#007F5F]" />
              <span>Sell Phone</span>
            </Link>

            <Link
              to="/sell-dead-phone"
              className="px-2.5 py-1.5 rounded-lg hover:bg-[#FAFAF7] hover:text-[#007F5F] transition flex items-center gap-1 text-[#005B46] whitespace-nowrap"
              activeProps={{ className: "bg-[#DDF5EA] text-[#005B46] font-bold" }}
            >
              <Zap className="h-3.5 w-3.5 text-[#43C59E]" />
              <span>Sell Dead Phone</span>
            </Link>

            <Link
              to="/repair"
              className="px-2.5 py-1.5 rounded-lg hover:bg-[#FAFAF7] hover:text-[#007F5F] transition flex items-center gap-1 whitespace-nowrap"
              activeProps={{ className: "bg-[#DDF5EA] text-[#005B46] font-bold" }}
            >
              <Wrench className="h-3.5 w-3.5 text-[#007F5F]" />
              <span>Repair</span>
            </Link>

            <Link
              to="/buyback"
              className="px-2.5 py-1.5 rounded-lg hover:bg-[#FAFAF7] hover:text-[#007F5F] transition flex items-center gap-1 whitespace-nowrap"
              activeProps={{ className: "bg-[#DDF5EA] text-[#005B46] font-bold" }}
            >
              <ShieldCheck className="h-3.5 w-3.5 text-[#007F5F]" />
              <span>Buyback</span>
            </Link>

            {/* Brands & Services Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className="px-2.5 py-1.5 rounded-lg hover:bg-[#FAFAF7] hover:text-[#007F5F] transition flex items-center gap-1 text-[#102A26] font-medium cursor-pointer whitespace-nowrap"
              >
                <span>Brands & Services</span>
                <ChevronDown className="h-3 w-3 text-[#6B7280]" />
              </button>

              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute top-full right-0 lg:-left-12 mt-1 w-72 rounded-2xl bg-white border border-[#E5E7EB] p-3 shadow-xl z-50 text-xs max-h-[75vh] overflow-y-auto animate-in fade-in zoom-in-95"
                >
                  <div className="font-label text-[10px] uppercase font-bold text-[#005B46] tracking-wider px-2 py-1 bg-[#DDF5EA] rounded-md mb-1">
                    Brand Repair Hubs
                  </div>
                  <Link
                    to="/iphone-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-[#FAFAF7] text-[#102A26] hover:text-[#007F5F] transition"
                  >
                    <span>Apple iPhone Repair</span>
                    <span className="text-[10px] text-[#6B7280] font-mono">OEM</span>
                  </Link>
                  <Link
                    to="/samsung-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-[#FAFAF7] text-[#102A26] hover:text-[#007F5F] transition"
                  >
                    <span>Samsung Galaxy Repair</span>
                    <span className="text-[10px] text-[#6B7280] font-mono">AMOLED</span>
                  </Link>
                  <Link
                    to="/oneplus-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-[#FAFAF7] text-[#102A26] hover:text-[#007F5F] transition"
                  >
                    <span>OnePlus Repair</span>
                    <span className="text-[10px] text-[#6B7280] font-mono">120Hz</span>
                  </Link>
                  <Link
                    to="/xiaomi-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-[#FAFAF7] text-[#102A26] hover:text-[#007F5F] transition"
                  >
                    <span>Xiaomi, Redmi & POCO</span>
                    <span className="text-[10px] text-[#6B7280] font-mono">CPU Reball</span>
                  </Link>
                  <Link
                    to="/vivo-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-[#FAFAF7] text-[#102A26] hover:text-[#007F5F] transition"
                  >
                    <span>Vivo & iQOO Repair</span>
                    <span className="text-[10px] text-[#6B7280] font-mono">Curved 3D</span>
                  </Link>
                  <Link
                    to="/oppo-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-[#FAFAF7] text-[#102A26] hover:text-[#007F5F] transition"
                  >
                    <span>Oppo Repair</span>
                    <span className="text-[10px] text-[#6B7280] font-mono">SuperVOOC</span>
                  </Link>
                  <Link
                    to="/realme-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-[#FAFAF7] text-[#102A26] hover:text-[#007F5F] transition"
                  >
                    <span>Realme Repair</span>
                    <span className="text-[10px] text-[#6B7280] font-mono">Dart</span>
                  </Link>
                  <Link
                    to="/motorola-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-[#FAFAF7] text-[#102A26] hover:text-[#007F5F] transition"
                  >
                    <span>Motorola Repair</span>
                    <span className="text-[10px] text-[#6B7280] font-mono">pOLED</span>
                  </Link>
                  <Link
                    to="/google-pixel-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-[#FAFAF7] text-[#102A26] hover:text-[#007F5F] transition"
                  >
                    <span>Google Pixel Repair</span>
                    <span className="text-[10px] text-[#6B7280] font-mono">Tensor</span>
                  </Link>

                  <div className="border-t border-[#E5E7EB] my-1.5" />

                  <div className="font-label text-[10px] uppercase font-bold text-[#005B46] tracking-wider px-2 py-1 bg-[#DDF5EA] rounded-md mb-1">
                    Specialized Repair Services
                  </div>
                  <Link
                    to="/doorstep-mobile-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-2.5 py-1.5 rounded-lg hover:bg-[#FAFAF7] text-[#007F5F] font-semibold transition"
                  >
                    🏠 Doorstep Mobile Repair (45-Min)
                  </Link>
                  <Link
                    to="/dead-phone-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-2.5 py-1.5 rounded-lg hover:bg-[#FAFAF7] text-[#005B46] font-semibold transition"
                  >
                    ⚡ Dead Phone Motherboard Repair
                  </Link>
                  <Link
                    to="/screen-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-2.5 py-1.5 rounded-lg hover:bg-[#FAFAF7] text-[#475569] hover:text-[#102A26] transition"
                  >
                    Screen & OLED Replacement
                  </Link>
                  <Link
                    to="/battery-replacement"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-2.5 py-1.5 rounded-lg hover:bg-[#FAFAF7] text-[#475569] hover:text-[#102A26] transition"
                  >
                    Battery Replacement
                  </Link>
                  <Link
                    to="/charging-port-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-2.5 py-1.5 rounded-lg hover:bg-[#FAFAF7] text-[#475569] hover:text-[#102A26] transition"
                  >
                    Charging Port & IC Repair
                  </Link>
                  <Link
                    to="/water-damage-repair"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-2.5 py-1.5 rounded-lg hover:bg-[#FAFAF7] text-[#475569] hover:text-[#102A26] transition"
                  >
                    Liquid Damage Treatment
                  </Link>
                </div>
              )}
            </div>

            {/* More Links Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                onMouseEnter={() => setMoreDropdownOpen(true)}
                className="px-2.5 py-1.5 rounded-lg hover:bg-[#FAFAF7] hover:text-[#007F5F] transition flex items-center gap-1 text-[#102A26] font-medium cursor-pointer whitespace-nowrap"
              >
                <span>Company</span>
                <ChevronDown className="h-3 w-3 text-[#6B7280]" />
              </button>

              {moreDropdownOpen && (
                <div
                  onMouseLeave={() => setMoreDropdownOpen(false)}
                  className="absolute top-full right-0 mt-1 w-44 rounded-2xl bg-white border border-[#E5E7EB] p-2 shadow-xl z-50 text-xs animate-in fade-in zoom-in-95"
                >
                  <Link
                    to="/about"
                    onClick={() => setMoreDropdownOpen(false)}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg hover:bg-[#FAFAF7] text-[#475569] hover:text-[#102A26] transition"
                  >
                    <Info className="w-3.5 h-3.5 text-[#007F5F]" />
                    <span>About Us</span>
                  </Link>
                  <Link
                    to="/faq"
                    onClick={() => setMoreDropdownOpen(false)}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg hover:bg-[#FAFAF7] text-[#475569] hover:text-[#102A26] transition"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-[#007F5F]" />
                    <span>FAQs</span>
                  </Link>
                  <Link
                    to="/blog"
                    onClick={() => setMoreDropdownOpen(false)}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg hover:bg-[#FAFAF7] text-[#475569] hover:text-[#102A26] transition"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#007F5F]" />
                    <span>Guides & Articles</span>
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setMoreDropdownOpen(false)}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg hover:bg-[#FAFAF7] text-[#475569] hover:text-[#102A26] transition"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#007F5F]" />
                    <span>Contact</span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 shrink-0">
            {onOpenRepairModal && (
              <button
                type="button"
                onClick={onOpenRepairModal}
                className="inline-flex items-center justify-center rounded-full bg-[#007F5F] hover:bg-[#005B46] px-4 py-2 text-xs font-bold text-white transition font-label shadow-md shadow-[#007F5F]/20 cursor-pointer whitespace-nowrap"
              >
                <span>Book Repair</span>
              </button>
            )}

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden grid h-9 w-9 place-items-center rounded-xl bg-[#FAFAF7] text-[#102A26] hover:bg-[#E5E7EB] transition border border-[#E5E7EB]"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 rounded-2xl bg-white border border-[#E5E7EB] p-4 shadow-xl space-y-3 animate-in fade-in duration-150 text-xs">
            <Link
              to="/sell-phone"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-[#FAFAF7] text-[#102A26] font-semibold"
            >
              <IndianRupee className="h-4 w-4 text-[#007F5F]" />
              <span>Sell Old Phone (Purana Phone Becho)</span>
            </Link>
            <Link
              to="/sell-dead-phone"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-[#FAFAF7] text-[#005B46] font-semibold"
            >
              <Zap className="h-4 w-4 text-[#43C59E]" />
              <span>Sell Dead Phone for Cash</span>
            </Link>
            <Link
              to="/repair"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-[#FAFAF7] text-[#102A26] font-semibold"
            >
              <Wrench className="h-4 w-4 text-[#007F5F]" />
              <span>Phone Repair Services</span>
            </Link>
            <Link
              to="/dead-phone-repair"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-[#FAFAF7] text-[#005B46] font-semibold"
            >
              <Cpu className="h-4 w-4 text-[#007F5F]" />
              <span>Dead Phone Motherboard Repair</span>
            </Link>
            <Link
              to="/doorstep-mobile-repair"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-[#FAFAF7] text-[#007F5F] font-semibold"
            >
              <Wrench className="h-4 w-4 text-[#007F5F]" />
              <span>45-Min Doorstep Mobile Repair</span>
            </Link>
            <Link
              to="/buyback"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-[#FAFAF7] text-[#102A26] font-semibold"
            >
              <ShieldCheck className="h-4 w-4 text-[#007F5F]" />
              <span>Trade-In & Buyback Program</span>
            </Link>

            <div className="px-3 py-1 text-[11px] font-label uppercase font-bold text-[#005B46] tracking-wider bg-[#DDF5EA] rounded-md">
              Popular Brands
            </div>
            <div className="grid grid-cols-2 gap-1.5 px-1">
              <Link
                to="/iphone-repair"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg bg-[#FAFAF7] hover:bg-[#DDF5EA] text-xs text-[#102A26] border border-[#E5E7EB]"
              >
                iPhone Repair
              </Link>
              <Link
                to="/samsung-repair"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg bg-[#FAFAF7] hover:bg-[#DDF5EA] text-xs text-[#102A26] border border-[#E5E7EB]"
              >
                Samsung Repair
              </Link>
              <Link
                to="/oneplus-repair"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg bg-[#FAFAF7] hover:bg-[#DDF5EA] text-xs text-[#102A26] border border-[#E5E7EB]"
              >
                OnePlus Repair
              </Link>
              <Link
                to="/xiaomi-repair"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg bg-[#FAFAF7] hover:bg-[#DDF5EA] text-xs text-[#102A26] border border-[#E5E7EB]"
              >
                Xiaomi / POCO
              </Link>
              <Link
                to="/vivo-repair"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg bg-[#FAFAF7] hover:bg-[#DDF5EA] text-xs text-[#102A26] border border-[#E5E7EB]"
              >
                Vivo / iQOO
              </Link>
              <Link
                to="/oppo-repair"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg bg-[#FAFAF7] hover:bg-[#DDF5EA] text-xs text-[#102A26] border border-[#E5E7EB]"
              >
                Oppo Repair
              </Link>
              <Link
                to="/realme-repair"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg bg-[#FAFAF7] hover:bg-[#DDF5EA] text-xs text-[#102A26] border border-[#E5E7EB]"
              >
                Realme Repair
              </Link>
              <Link
                to="/google-pixel-repair"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg bg-[#FAFAF7] hover:bg-[#DDF5EA] text-xs text-[#102A26] border border-[#E5E7EB]"
              >
                Google Pixel
              </Link>
            </div>

            <div className="border-t border-[#E5E7EB] pt-2 flex items-center justify-around text-xs">
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#6B7280] hover:text-[#102A26]"
              >
                About Us
              </Link>
              <Link
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#6B7280] hover:text-[#102A26]"
              >
                Guides
              </Link>
              <Link
                to="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#6B7280] hover:text-[#102A26]"
              >
                FAQs
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#007F5F] font-bold"
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

