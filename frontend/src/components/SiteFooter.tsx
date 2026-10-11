import React from "react";
import { Link } from "@tanstack/react-router";
import { siteConfig, telHref, waHref, mailtoHref } from "../config/siteConfig";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="w-full bg-brand-ink text-brand-tint mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block focus-ring rounded-lg">
              <Logo variant="horizontal" className="brightness-0 invert" />
            </Link>
            <p className="text-[14px] text-brand-tint/70 leading-relaxed">
              Sell your smartphone or book a repair with a simple, convenient experience. 
              Phone repair and buyback options in Mumbai, Navi Mumbai, and Thane. Contact us to confirm current service availability.
            </p>
            <div className="space-y-3 text-[14px]">
              {siteConfig.business.hasPublicAddress && siteConfig.business.address && (
                <div className="text-brand-tint/80">
                  <span className="block font-semibold text-white">Service Hub:</span>
                  {siteConfig.business.address}
                </div>
              )}
              <div>
                <a href={telHref()} className="inline-block text-brand-tint/80 hover:text-white transition py-1 focus-ring">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div>
                <a href={mailtoHref()} className="inline-block text-brand-tint/80 hover:text-white transition py-1 focus-ring">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Sell & Buyback */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-white mb-2">Sell & Buyback</h4>
            <Link to="/sell-old-phone" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Sell Old Phone</Link>
            <Link to="/sell-phone" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Phone Valuation</Link>
            <Link to="/sell-damaged-phone" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Sell Damaged Phone</Link>
            <Link to="/sell-dead-phone" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Sell Dead Phone</Link>
            <Link to="/dead-phone-buyback" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Dead Mobile Salvage</Link>
            <Link to="/sell-dead-iphone" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Sell a Dead iPhone</Link>
            <Link to="/sell-water-damaged-phone" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Sell a Water-Damaged Phone</Link>
            <Link to="/phone-buyback-price-india" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Phone Buyback Prices</Link>
            <Link to="/buyback" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Enterprise ITAD</Link>
          </div>

          {/* Repair Services */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-white mb-2">Repair Services</h4>
            <Link to="/doorstep-mobile-repair" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Doorstep Repair</Link>
            <Link to="/mobile-repair-mumbai" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Mumbai Service Hub</Link>
            <Link to="/dead-phone-repair" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Dead Phone Repair</Link>
            <Link to="/screen-repair" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Screen Replacement</Link>
            <Link to="/battery-replacement" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Battery Replacement</Link>
            <Link to="/water-damage-repair" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Liquid Damage Repair</Link>
            <Link to="/phone-repair-navi-mumbai" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Navi Mumbai Repair</Link>
            <Link to="/phone-repair-thane" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Thane Repair</Link>
            <Link to="/doorstep-mobile-repair-andheri" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Andheri Repair</Link>
            <Link to="/doorstep-mobile-repair-bandra" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Bandra Repair</Link>
            <Link to="/doorstep-mobile-repair-borivali" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Borivali Repair</Link>
            <Link to="/doorstep-mobile-repair-dadar" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Dadar Repair</Link>
            <Link to="/doorstep-mobile-repair-kurla" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Kurla Repair</Link>
            <Link to="/doorstep-mobile-repair-powai" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Powai Repair</Link>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-white mb-2">Company</h4>
            <Link to="/about" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">About Revora</Link>
            <Link to="/fix-or-sell" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Fix or Sell?</Link>
            <Link to="/how-we-wipe-your-data" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Data Privacy Process</Link>
            <Link to="/blog" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Guides & Articles</Link>
            <Link to="/faq" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">FAQs</Link>
            <Link to="/contact" className="text-[14px] text-brand-tint/70 hover:text-white transition py-1 inline-block focus-ring">Contact Us</Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-tint/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[13px] text-brand-tint/50">
             {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <Link to="/privacy" className="text-[13px] text-brand-tint/50 hover:text-white transition py-1 inline-block focus-ring">Privacy Policy</Link>
            <Link to="/terms" className="text-[13px] text-brand-tint/50 hover:text-white transition py-1 inline-block focus-ring">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
