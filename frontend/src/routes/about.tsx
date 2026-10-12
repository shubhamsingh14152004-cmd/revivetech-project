import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SeoJsonLd, getBreadcrumbSchema, SITE_URL } from "../components/SeoJsonLd";
import { ExperienceHighlights } from "../components/ExperienceHighlights";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Revora | Mobile Repair in Mumbai" },
      {
        name: "description",
        content:
          "Learn about Revora’s mobile repair services in Mumbai, Navi Mumbai and Thane, backed by 7+ years of expertise and 1,200+ repairs completed.",
      },
      { name: "keywords", content: "about Revora, mobile repair Mumbai, phone repair services" },
      { property: "og:title", content: "About Revora | Mobile Repair in Mumbai" },
      {
        property: "og:description",
        content:
          "Learn about Revora’s mobile repair services and experience serving Mumbai, Navi Mumbai and Thane.",
      },
      { property: "og:url", content: `${SITE_URL}/about` },
      { property: "og:image", content: `${SITE_URL}/images/hero-phone.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "About Us", url: `${SITE_URL}/about` },
  ]);

  return (
    <div className="min-h-screen bg-background text-ink flex flex-col selection:bg-brand selection:text-white pb-24">
      <SeoJsonLd schema={[breadcrumbSchema]} />
      <SiteHeader />
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 pt-6">
        <nav
          aria-label="Breadcrumb"
          className="border-b border-line bg-white py-3 mb-6 text-sm text-muted"
        >
          <Link to="/" className="hover:text-brand">
            Home
          </Link>{" "}
          <span aria-hidden="true">/</span> <span>About Us</span>
        </nav>
        <section className="py-10 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
            About Revora
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            With over 7 years of mobile repair expertise and 1,200+ repairs completed, we focus on
            reliable service, quality workmanship, and customer satisfaction.
          </p>
        </section>
        <ExperienceHighlights />
        <section aria-label="Our services" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <article className="bg-white border border-line p-7 rounded-2xl shadow-xs">
            <h2 className="text-xl font-bold text-ink mb-3">Mobile phone repair</h2>
            <p className="text-sm text-muted leading-relaxed">
              We help customers with common phone issues, including screen, battery, charging, and
              device troubleshooting. Contact us with your model and symptoms to discuss available
              options.
            </p>
          </article>
          <article className="bg-white border border-line p-7 rounded-2xl shadow-xs">
            <h2 className="text-xl font-bold text-ink mb-3">Phone buyback enquiries</h2>
            <p className="text-sm text-muted leading-relaxed">
              If you are considering selling a used phone, share its model and condition so we can
              discuss assessment and current availability.
            </p>
          </article>
        </section>
        <section className="mb-14 rounded-3xl bg-white p-8 border border-line shadow-xs text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink">Talk to Revora</h2>
          <p className="text-sm text-muted mt-3">
            Contact us with your phone model, issue, and location. We can discuss repair or buyback
            options and current availability.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              to="/repair"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-brand hover:bg-brand-ink text-white text-sm font-semibold transition-colors"
            >
              Explore Repair Services
            </Link>
            <Link
              to="/sell-phone"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-white border border-line text-ink text-sm font-semibold"
            >
              Check Buyback Value
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
