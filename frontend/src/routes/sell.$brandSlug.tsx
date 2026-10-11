import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { TradeInCalculator } from "../components/TradeInCalculator";
import { brands } from "../content/brands";
import { getDevicesByBrand } from "../content/devices";
import { ArrowRight, Sparkles, Truck, ShieldCheck, Zap } from "lucide-react";
import { SeoJsonLd, getServiceSchema, getBreadcrumbSchema, SITE_URL } from "../components/SeoJsonLd";

// Loader to fetch devices for this brand
export const Route = createFileRoute("/sell/$brandSlug")({
  loader: async ({ params }) => {
    const brandSlug = params.brandSlug;
    const b = brands.find(br => br.id === brandSlug);
    if (!b) return { brand: null, devices: [], error: "Brand not found" };

    const localDevices = getDevicesByBrand(brandSlug);
    return { brand: b, devices: localDevices };
  },
  head: ({ loaderData }) => {
    if (!loaderData || !loaderData.brand) {
      return {
        meta: [{ name: "robots", content: "noindex" }]
      };
    }
    const { brand, devices } = loaderData;
    const shouldIndex = devices.length >= 5;
    
    const meta = [
      { title: `Sell Old ${brand.name} Phone Online | Best Resale Value | Revora` },
      { name: "description", content: `Sell your used, broken, or dead ${brand.name} mobile phone for the direct WhatsApp quote. Get an instant quote for ${brand.name} models, free doorstep pickup, and secure data wipe.` },
      { property: "og:title", content: `Sell Old ${brand.name} Phone Online | Best Resale Value | Revora` },
      { property: "og:description", content: `Calculate your used ${brand.name} smartphone's trade-in value online. Free pickup and payment.` },
      { property: "og:url", content: `${SITE_URL}/sell/${brand.id}` },
    ];
    
    if (!shouldIndex) {
      meta.push({ name: "robots", content: "noindex" } as any);
    }
    
    return { meta };
  },
  component: SellBrandComponent,
});

function SellBrandComponent() {
  const { brand, devices, error } = Route.useLoaderData();

  if (error || !brand) {
    return (
      <div className="min-h-screen bg-neutral-50 flex flex-col">
        <SiteHeader />
        <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-3xl font-black text-ink mb-4">Brand Not Found</h2>
          <p className="text-muted mb-8">We couldn't find the brand you're looking for.</p>
          <Link to="/sell-phone" className="px-6 py-3 rounded-full bg-brand text-white font-bold">
            View All Brands
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const schema = getServiceSchema({
    name: `Sell Old ${brand.name} Phone`,
    description: `Sell your used, broken, or dead ${brand.name} mobile phone for the direct WhatsApp quote.`,
    url: `${SITE_URL}/sell/${brand.id}`,
    image: `https://www.sellrepairphone.org/images/revora-logo-transparent.png`
  });

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Sell Phone", url: `${SITE_URL}/sell-phone` },
    { name: `Sell ${brand.name}`, url: `${SITE_URL}/sell/${brand.id}` }
  ]);

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
      <SeoJsonLd schema={[schema, breadcrumbs]} />
      <SiteHeader />
      
      <main className="flex-1 w-full pb-20">
        <section className="relative overflow-hidden bg-ink pt-28 pb-32 text-white">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <div className="absolute top-0 right-0 p-20 opacity-20 pointer-events-none flex items-center justify-center w-96 h-96 filter invert">
            <brand.logo />
          </div>
          <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 mb-6">
              <Sparkles className="h-4 w-4 text-brand-300" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">Sell Your {brand.name}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              Get the Best Value for Your <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">
                {brand.name} Phone
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-medium">
              Find out exactly how much your used, broken, or dead {brand.name} is worth. We offer free doorstep evaluation and payment.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 md:px-8 -mt-20 relative z-20">
          <TradeInCalculator initialBrandId={brand.id} initialDevices={devices} />
        </section>

        <section className="mx-auto max-w-7xl px-4 md:px-8 py-24">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-line shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">Instant Valuation</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                Our dynamic estimator provides a fair market value for your {brand.name} device in seconds.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-line shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
                <Truck className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">Free Doorstep Pickup</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                We'll collect the phone directly from your home or office. No haggling, no hassle.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-line shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">Secure Data Wipe</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                We ensure 100% of your personal data is securely wiped before the device is processed.
              </p>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
