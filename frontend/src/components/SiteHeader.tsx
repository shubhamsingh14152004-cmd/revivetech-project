import React, { useState } from"react";
import { Link } from"@tanstack/react-router";
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
} from"lucide-react";
import { WhatsAppIcon } from"./WhatsAppIcon";
import { trackEvent } from"../lib/analytics";

interface SiteHeaderProps {
 onOpenRepairModal?: () => void;
}

export function SiteHeader({ onOpenRepairModal }: SiteHeaderProps) {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
 const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

 const handleCallClick = () => {
 trackEvent("phone_call_click", { source:"header_call_button" });
 };

 const handleWhatsAppClick = () => {
 trackEvent("whatsapp_click", { source:"header_whatsapp_button" });
 };

 return (
 <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-line shadow-xs">
 {/* Top Ticker Bar */}
 <div className="w-full bg-brand-tint border-b border-line px-4 py-1.5 text-[11px]">
 <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-2">
 <div className="flex items-center gap-2 text-brand-ink">
 <span className="h-2 w-2 rounded-full bg-brand shrink-0" />
 <span className="font-bold uppercase tracking-wider hidden sm:inline text-brand-ink">
 lab Express:
 </span>
 <span className="text-ink/90 font-medium truncate max-w-xs sm:max-w-none">
 Free Doorstep Pickup • Same-Day Screen & Battery Repair • a fair price for Dead Phones
 </span>
 </div>

 <div className="flex items-center gap-3 shrink-0">
 <a
 href="tel:8591770877"
 onClick={handleCallClick}
 className="inline-flex items-center gap-1 rounded-full bg-white hover:bg-background px-2.5 py-0.5 text-brand transition font-bold border border-brand/30 shadow-xs text-[11px]"
 title="Call Support: 8591770877"
 >
 <PhoneCall className="h-3 w-3 text-brand" />
 <span>+91 8591770877</span>
 </a>

 <a
 href="https://wa.me/918591770877?text=Hi%20Revora%2C%20I%20want%20to%20sell%20or%20repair%20my%20phone."
 target="_blank"
 rel="noopener noreferrer"
 onClick={handleWhatsAppClick}
 className="inline-flex items-center gap-1 rounded-full bg-emerald-50 hover:bg-emerald-100 px-2.5 py-0.5 text-emerald-800 transition font-bold border border-emerald-200 text-[11px]"
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
 className="flex items-center gap-2 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg p-0.5"
 >
 <img
 src="/images/revora-icon-transparent.png"
 alt="Revora Logo"
 className="h-8 sm:h-9 w-auto object-contain transition group-hover:scale-105"
 />
 <div className="flex flex-col">
 <span className="text-lg sm:text-xl font-bold tracking-tight text-ink group-hover:text-brand transition leading-none">
 Revora
 </span>
 <span className="text-[8px] uppercase tracking-wider text-brand font-semibold mt-0.5 whitespace-nowrap hidden sm:inline">
 Sell Old Phone · Get Paid · Simple
 </span>
 </div>
 </Link>

 {/* Desktop Nav Links - Single Row, Whitespace-Nowrap */}
 <div className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 text-xs text-ink font-medium">
 <Link
 to="/sell-phone"
 className="px-2.5 py-1.5 rounded-lg hover:bg-background hover:text-brand transition flex items-center gap-1 whitespace-nowrap"
 activeProps={{ className:"bg-brand-tint text-brand-ink font-bold" }}
 >
 <IndianRupee className="h-3.5 w-3.5 text-brand" />
 <span>Sell Phone</span>
 </Link>

 <Link
 to="/sell-dead-phone"
 className="px-2.5 py-1.5 rounded-lg hover:bg-background hover:text-brand transition flex items-center gap-1 text-brand-ink whitespace-nowrap"
 activeProps={{ className:"bg-brand-tint text-brand-ink font-bold" }}
 >
 <Zap className="h-3.5 w-3.5 text-brand" />
 <span>Sell Dead Phone</span>
 </Link>

 <Link
 to="/repair"
 className="px-2.5 py-1.5 rounded-lg hover:bg-background hover:text-brand transition flex items-center gap-1 whitespace-nowrap"
 activeProps={{ className:"bg-brand-tint text-brand-ink font-bold" }}
 >
 <Wrench className="h-3.5 w-3.5 text-brand" />
 <span>Repair</span>
 </Link>

 <Link
 to="/buyback"
 className="px-2.5 py-1.5 rounded-lg hover:bg-background hover:text-brand transition flex items-center gap-1 whitespace-nowrap"
 activeProps={{ className:"bg-brand-tint text-brand-ink font-bold" }}
 >
 <ShieldCheck className="h-3.5 w-3.5 text-brand" />
 <span>Buyback</span>
 </Link>

 {/* Brands & Services Dropdown */}
 <div className="relative">
 <button
 type="button"
 onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
 onMouseEnter={() => setServicesDropdownOpen(true)}
 className="px-2.5 py-1.5 rounded-lg hover:bg-background hover:text-brand transition flex items-center gap-1 text-ink font-medium cursor-pointer whitespace-nowrap"
 >
 <span>Brands & Services</span>
 <ChevronDown className="h-3 w-3 text-muted" />
 </button>

 {servicesDropdownOpen && (
 <div
 onMouseLeave={() => setServicesDropdownOpen(false)}
 className="absolute top-full right-0 lg:-left-12 mt-1 w-72 rounded-2xl bg-white border border-line p-3 shadow-xl z-50 text-xs max-h-[75vh] overflow-y-auto animate-in fade-in zoom-in-95"
 >
 <div className="text-[10px] uppercase font-bold text-brand-ink tracking-wider px-2 py-1 bg-brand-tint rounded-md mb-1">
 Brand Repair Hubs
 </div>
 <Link
 to="/iphone-repair"
 onClick={() => setServicesDropdownOpen(false)}
 className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-background text-ink hover:text-brand transition"
 >
 <span>Apple iPhone Repair</span>
 <span className="text-[10px] text-muted">OEM</span>
 </Link>
 <Link
 to="/samsung-repair"
 onClick={() => setServicesDropdownOpen(false)}
 className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-background text-ink hover:text-brand transition"
 >
 <span>Samsung Galaxy Repair</span>
 <span className="text-[10px] text-muted">AMOLED</span>
 </Link>
 <Link
 to="/oneplus-repair"
 onClick={() => setServicesDropdownOpen(false)}
 className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-background text-ink hover:text-brand transition"
 >
 <span>OnePlus Repair</span>
 <span className="text-[10px] text-muted">120Hz</span>
 </Link>
 <Link
 to="/xiaomi-repair"
 onClick={() => setServicesDropdownOpen(false)}
 className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-background text-ink hover:text-brand transition"
 >
 <span>Xiaomi, Redmi & POCO</span>
 <span className="text-[10px] text-muted">CPU Reball</span>
 </Link>
 <Link
 to="/vivo-repair"
 onClick={() => setServicesDropdownOpen(false)}
 className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-background text-ink hover:text-brand transition"
 >
 <span>Vivo & iQOO Repair</span>
 <span className="text-[10px] text-muted">Curved 3D</span>
 </Link>
 <Link
 to="/oppo-repair"
 onClick={() => setServicesDropdownOpen(false)}
 className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-background text-ink hover:text-brand transition"
 >
 <span>Oppo Repair</span>
 <span className="text-[10px] text-muted">SuperVOOC</span>
 </Link>
 <Link
 to="/realme-repair"
 onClick={() => setServicesDropdownOpen(false)}
 className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-background text-ink hover:text-brand transition"
 >
 <span>Realme Repair</span>
 <span className="text-[10px] text-muted">Dart</span>
 </Link>
 <Link
 to="/motorola-repair"
 onClick={() => setServicesDropdownOpen(false)}
 className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-background text-ink hover:text-brand transition"
 >
 <span>Motorola Repair</span>
 <span className="text-[10px] text-muted">pOLED</span>
 </Link>
 <Link
 to="/google-pixel-repair"
 onClick={() => setServicesDropdownOpen(false)}
 className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-background text-ink hover:text-brand transition"
 >
 <span>Google Pixel Repair</span>
 <span className="text-[10px] text-muted">Tensor</span>
 </Link>

 <div className="border-t border-line my-1.5" />

 <div className="text-[10px] uppercase font-bold text-brand-ink tracking-wider px-2 py-1 bg-brand-tint rounded-md mb-1">
 Specialized Repair Services
 </div>
 <Link
 to="/doorstep-mobile-repair"
 onClick={() => setServicesDropdownOpen(false)}
 className="block px-2.5 py-1.5 rounded-lg hover:bg-background text-brand font-semibold transition"
 >
 Doorstep Mobile Repair (45-Min)
 </Link>
 <Link
 to="/dead-phone-repair"
 onClick={() => setServicesDropdownOpen(false)}
 className="block px-2.5 py-1.5 rounded-lg hover:bg-background text-brand-ink font-semibold transition"
 >
 Dead Phone Motherboard Repair
 </Link>
 <Link
 to="/screen-repair"
 onClick={() => setServicesDropdownOpen(false)}
 className="block px-2.5 py-1.5 rounded-lg hover:bg-background text-muted hover:text-ink transition"
 >
 Screen & OLED Replacement
 </Link>
 <Link
 to="/battery-replacement"
 onClick={() => setServicesDropdownOpen(false)}
 className="block px-2.5 py-1.5 rounded-lg hover:bg-background text-muted hover:text-ink transition"
 >
 Battery Replacement
 </Link>
 <Link
 to="/charging-port-repair"
 onClick={() => setServicesDropdownOpen(false)}
 className="block px-2.5 py-1.5 rounded-lg hover:bg-background text-muted hover:text-ink transition"
 >
 Charging Port & IC Repair
 </Link>
 <Link
 to="/water-damage-repair"
 onClick={() => setServicesDropdownOpen(false)}
 className="block px-2.5 py-1.5 rounded-lg hover:bg-background text-muted hover:text-ink transition"
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
 className="px-2.5 py-1.5 rounded-lg hover:bg-background hover:text-brand transition flex items-center gap-1 text-ink font-medium cursor-pointer whitespace-nowrap"
 >
 <span>Company</span>
 <ChevronDown className="h-3 w-3 text-muted" />
 </button>

 {moreDropdownOpen && (
 <div
 onMouseLeave={() => setMoreDropdownOpen(false)}
 className="absolute top-full right-0 mt-1 w-44 rounded-2xl bg-white border border-line p-2 shadow-xl z-50 text-xs animate-in fade-in zoom-in-95"
 >
 <Link
 to="/about"
 onClick={() => setMoreDropdownOpen(false)}
 className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg hover:bg-background text-muted hover:text-ink transition"
 >
 <Info className="w-3.5 h-3.5 text-brand" />
 <span>About Us</span>
 </Link>
 <Link
 to="/faq"
 onClick={() => setMoreDropdownOpen(false)}
 className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg hover:bg-background text-muted hover:text-ink transition"
 >
 <HelpCircle className="w-3.5 h-3.5 text-brand" />
 <span>FAQs</span>
 </Link>
 <Link
 to="/blog"
 onClick={() => setMoreDropdownOpen(false)}
 className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg hover:bg-background text-muted hover:text-ink transition"
 >
 <BookOpen className="w-3.5 h-3.5 text-brand" />
 <span>Guides & Articles</span>
 </Link>
 <Link
 to="/contact"
 onClick={() => setMoreDropdownOpen(false)}
 className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg hover:bg-background text-muted hover:text-ink transition"
 >
 <Mail className="w-3.5 h-3.5 text-brand" />
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
 className="inline-flex items-center justify-center rounded-full bg-brand hover:bg-brand-ink px-4 py-2 text-xs font-bold text-white transition shadow-md shadow-brand/20 cursor-pointer whitespace-nowrap"
 >
 <span>Book Repair</span>
 </button>
 )}

 {/* Mobile Menu Toggle Button */}
 <button
 type="button"
 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
 className="lg:hidden grid h-9 w-9 place-items-center rounded-xl bg-background text-ink hover:bg-line transition border border-line"
 aria-label="Toggle mobile menu"
 >
 {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
 </button>
 </div>
 </nav>

 {/* Mobile Navigation Drawer */}
 {mobileMenuOpen && (
 <div className="lg:hidden mt-3 rounded-2xl bg-white border border-line p-4 shadow-xl space-y-3 animate-in fade-in duration-150 text-xs">
 <Link
 to="/sell-phone"
 onClick={() => setMobileMenuOpen(false)}
 className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-background text-ink font-semibold"
 >
 <IndianRupee className="h-4 w-4 text-brand" />
 <span>Sell Old Phone (Purana Phone Becho)</span>
 </Link>
 <Link
 to="/sell-dead-phone"
 onClick={() => setMobileMenuOpen(false)}
 className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-background text-brand-ink font-semibold"
 >
 <Zap className="h-4 w-4 text-brand" />
 <span>Sell Dead Phone for Cash</span>
 </Link>
 <Link
 to="/repair"
 onClick={() => setMobileMenuOpen(false)}
 className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-background text-ink font-semibold"
 >
 <Wrench className="h-4 w-4 text-brand" />
 <span>Phone Repair Services</span>
 </Link>
 <Link
 to="/dead-phone-repair"
 onClick={() => setMobileMenuOpen(false)}
 className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-background text-brand-ink font-semibold"
 >
 <Cpu className="h-4 w-4 text-brand" />
 <span>Dead Phone Motherboard Repair</span>
 </Link>
 <Link
 to="/doorstep-mobile-repair"
 onClick={() => setMobileMenuOpen(false)}
 className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-background text-brand font-semibold"
 >
 <Wrench className="h-4 w-4 text-brand" />
 <span>45-Min Doorstep Mobile Repair</span>
 </Link>
 <Link
 to="/buyback"
 onClick={() => setMobileMenuOpen(false)}
 className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-background text-ink font-semibold"
 >
 <ShieldCheck className="h-4 w-4 text-brand" />
 <span>Trade-In & Buyback Program</span>
 </Link>

 <div className="px-3 py-1 text-[11px] uppercase font-bold text-brand-ink tracking-wider bg-brand-tint rounded-md">
 Popular Brands
 </div>
 <div className="grid grid-cols-2 gap-1.5 px-1">
 <Link
 to="/iphone-repair"
 onClick={() => setMobileMenuOpen(false)}
 className="px-2.5 py-1.5 rounded-lg bg-background hover:bg-brand-tint text-xs text-ink border border-line"
 >
 iPhone Repair
 </Link>
 <Link
 to="/samsung-repair"
 onClick={() => setMobileMenuOpen(false)}
 className="px-2.5 py-1.5 rounded-lg bg-background hover:bg-brand-tint text-xs text-ink border border-line"
 >
 Samsung Repair
 </Link>
 <Link
 to="/oneplus-repair"
 onClick={() => setMobileMenuOpen(false)}
 className="px-2.5 py-1.5 rounded-lg bg-background hover:bg-brand-tint text-xs text-ink border border-line"
 >
 OnePlus Repair
 </Link>
 <Link
 to="/xiaomi-repair"
 onClick={() => setMobileMenuOpen(false)}
 className="px-2.5 py-1.5 rounded-lg bg-background hover:bg-brand-tint text-xs text-ink border border-line"
 >
 Xiaomi / POCO
 </Link>
 <Link
 to="/vivo-repair"
 onClick={() => setMobileMenuOpen(false)}
 className="px-2.5 py-1.5 rounded-lg bg-background hover:bg-brand-tint text-xs text-ink border border-line"
 >
 Vivo / iQOO
 </Link>
 <Link
 to="/oppo-repair"
 onClick={() => setMobileMenuOpen(false)}
 className="px-2.5 py-1.5 rounded-lg bg-background hover:bg-brand-tint text-xs text-ink border border-line"
 >
 Oppo Repair
 </Link>
 <Link
 to="/realme-repair"
 onClick={() => setMobileMenuOpen(false)}
 className="px-2.5 py-1.5 rounded-lg bg-background hover:bg-brand-tint text-xs text-ink border border-line"
 >
 Realme Repair
 </Link>
 <Link
 to="/google-pixel-repair"
 onClick={() => setMobileMenuOpen(false)}
 className="px-2.5 py-1.5 rounded-lg bg-background hover:bg-brand-tint text-xs text-ink border border-line"
 >
 Google Pixel
 </Link>
 </div>

 <div className="border-t border-line pt-2 flex items-center justify-around text-xs">
 <Link
 to="/about"
 onClick={() => setMobileMenuOpen(false)}
 className="text-muted hover:text-ink"
 >
 About Us
 </Link>
 <Link
 to="/blog"
 onClick={() => setMobileMenuOpen(false)}
 className="text-muted hover:text-ink"
 >
 Guides
 </Link>
 <Link
 to="/faq"
 onClick={() => setMobileMenuOpen(false)}
 className="text-muted hover:text-ink"
 >
 FAQs
 </Link>
 <Link
 to="/contact"
 onClick={() => setMobileMenuOpen(false)}
 className="text-brand font-bold"
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

