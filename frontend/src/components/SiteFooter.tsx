import React from "react";
import { Link } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Truck,
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { trackEvent } from "../lib/analytics";

export function SiteFooter() {
  const handleCall = () => {
    trackEvent("phone_call_click", { source: "footer_call_link" });
  };

  const handleWhatsApp = () => {
    trackEvent("whatsapp_click", { source: "footer_whatsapp_link" });
  };

  return (
    <footer className="w-full bg-[#0a0910] border-t border-white/10 text-xs text-white/70 font-display pt-12 pb-14 mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-10 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand/20 text-brand">
              <Truck className="h-4 w-4" />
            </div>
            <div>
              <span className="font-bold text-white block">Free Doorstep Pickup</span>
              <span className="text-[11px] text-white/50">Zero courier fees across India</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent/20 text-accent">
              <Clock className="h-4 w-4" />
            </div>
            <div>
              <span className="font-bold text-white block">45-Min Express Lab</span>
              <span className="text-[11px] text-white/50">Same-day screen & battery swap</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-500/20 text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div>
              <span className="font-bold text-white block">90-Day VIP Warranty</span>
              <span className="text-[11px] text-white/50">OEM-grade certified components</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-500/20 text-blue-400">
              <Lock className="h-4 w-4" />
            </div>
            <div>
              <span className="font-bold text-white block">NIST 800-88 Wiped</span>
              <span className="text-[11px] text-white/50">Military privacy data sanitization</span>
            </div>
          </div>
        </div>

        {/* Multi-Column Sitemap Links & NAP */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 py-10">
          {/* Column 1: Business NAP */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="chrome-plate grid h-8 w-8 place-items-center rounded-lg shadow-md">
                <span className="font-label font-bold text-ink">R</span>
              </div>
              <span className="font-display text-base font-bold text-white tracking-tight">
                ReviveTech
              </span>
            </div>
            <p className="text-white/60 leading-relaxed text-xs">
              Precision cleanroom mobile phone repairs and guaranteed top cash buyback for dead, liquid-damaged, or used smartphones.
            </p>

            {/* Consistent NAP Presentation */}
            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-white/80">
                <MapPin className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                <span>
                  <strong className="text-white block">Service Hub & Dispatch:</strong>
                  Doorstep Express Courier Pickup & Cleanroom Facility, India
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Phone className="h-3.5 w-3.5 text-gold shrink-0" />
                <a
                  href="tel:8591770877"
                  onClick={handleCall}
                  className="hover:text-accent font-mono font-bold"
                  title="Call ReviveTech"
                >
                  +91 8591770877
                </a>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <WhatsAppIcon className="h-3.5 w-3.5 fill-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/918591770877?text=Hi%20ReviveTech%2C%20I%20have%20an%20inquiry%20regarding%20phone%20repair%20or%20buyback."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsApp}
                  className="hover:text-emerald-400 font-mono font-bold"
                  title="WhatsApp ReviveTech"
                >
                  +91 8591770877
                </a>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="h-3.5 w-3.5 text-accent shrink-0" />
                <a
                  href="mailto:supportsellphone@gmail.com"
                  className="hover:text-white"
                  title="Email ReviveTech Support"
                >
                  supportsellphone@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-[11px]">
                <Clock className="h-3.5 w-3.5 text-white/40 shrink-0" />
                <span>Open Mon – Sun: 09:00 AM – 09:00 PM IST</span>
              </div>
            </div>
          </div>

          {/* Column 2: Phone Repair Services */}
          <div>
            <h4 className="font-label text-xs font-bold uppercase text-white tracking-wider mb-3">
              Repair Services
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <Link to="/repair" className="hover:text-white transition">
                  Same-Day Phone Repair
                </Link>
              </li>
              <li>
                <Link to="/screen-repair" className="hover:text-white transition">
                  Screen & OLED Replacement
                </Link>
              </li>
              <li>
                <Link to="/battery-replacement" className="hover:text-white transition">
                  Phone Battery Replacement
                </Link>
              </li>
              <li>
                <Link to="/charging-port-repair" className="hover:text-white transition">
                  Charging Port & IC Rework
                </Link>
              </li>
              <li>
                <Link to="/water-damage-repair" className="hover:text-white transition">
                  Water Damage Ultrasonic Bath
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Brand Specializations */}
          <div>
            <h4 className="font-label text-xs font-bold uppercase text-white tracking-wider mb-3">
              Supported Brands
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <Link to="/iphone-repair" className="hover:text-white transition">
                  Apple iPhone Repair
                </Link>
              </li>
              <li>
                <Link to="/samsung-repair" className="hover:text-white transition">
                  Samsung Galaxy Repair
                </Link>
              </li>
              <li>
                <Link to="/android-repair" className="hover:text-white transition">
                  Android Multi-Brand Repair
                </Link>
              </li>
              <li>
                <Link to="/sell-phone" className="hover:text-white transition">
                  Sell Dead iPhone for Cash
                </Link>
              </li>
              <li>
                <Link to="/sell-phone" className="hover:text-white transition">
                  Sell Broken Samsung Phone
                </Link>
              </li>
              <li>
                <Link to="/buyback" className="hover:text-white transition">
                  Smartphone Buyback Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links & Trust */}
          <div>
            <h4 className="font-label text-xs font-bold uppercase text-white tracking-wider mb-3">
              Company & Help
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About ReviveTech Lab
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact & Free Courier Pickup
                </Link>
              </li>
              <li>
                <Link to="/buyback" className="hover:text-white transition">
                  Data Wipe & Recycle Standards
                </Link>
              </li>
              <li>
                <a
                  href="/admin/login"
                  rel="nofollow"
                  className="hover:text-accent font-semibold flex items-center gap-1 mt-4"
                >
                  <Lock className="h-3 w-3" />
                  <span>Staff Cleanroom Portal</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/50">
          <p>© 2026 ReviveTech (sellrepairphone.org). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-white">
              NIST 800-88 Data Sanitization
            </Link>
            <span>·</span>
            <Link to="/faq" className="hover:text-white">
              Warranty Terms
            </Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-white">
              Nationwide Coverage
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
