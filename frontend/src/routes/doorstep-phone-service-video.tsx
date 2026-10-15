import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, PhoneCall } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { SeoJsonLd, SITE_URL } from "../components/SeoJsonLd";
import { siteConfig } from "../config/siteConfig";
import { waHref } from "../lib/whatsapp";

const pageUrl = `${SITE_URL}/doorstep-phone-service-video`;
const videoUrl = `${SITE_URL}/videos/revora-animation.mp4`;
const thumbnailUrl = `${SITE_URL}/images/revora-doorstep-video-thumbnail.svg`;
const videoName = "Revora doorstep phone handoff animation";
const videoDescription =
  "A short animation showing a customer handing a phone to a Revora representative at the doorstep. Contact Revora to ask about phone repair or buyback service in your area.";

export const Route = createFileRoute("/doorstep-phone-service-video")({
  head: () => ({
    meta: [
      { title: "Watch Revora's Doorstep Phone Service Animation | Mumbai" },
      { name: "description", content: videoDescription },
      { property: "og:type", content: "video.other" },
      { property: "og:title", content: videoName },
      { property: "og:description", content: videoDescription },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: thumbnailUrl },
      { property: "og:video", content: videoUrl },
      { property: "og:video:secure_url", content: videoUrl },
      { property: "og:video:type", content: "video/mp4" },
      { name: "twitter:card", content: "player" },
      { name: "twitter:title", content: videoName },
      { name: "twitter:description", content: videoDescription },
      { name: "twitter:image", content: thumbnailUrl },
      { name: "twitter:player", content: pageUrl },
      { name: "twitter:player:width", content: "1280" },
      { name: "twitter:player:height", content: "720" },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
  }),
  component: DoorstepPhoneServiceVideoPage,
});

function DoorstepPhoneServiceVideoPage() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${pageUrl}#video`,
    name: videoName,
    description: videoDescription,
    thumbnailUrl,
    uploadDate: "2026-10-04T08:32:16Z",
    contentUrl: videoUrl,
    embedUrl: pageUrl,
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}/#org` },
    mainEntityOfPage: pageUrl,
  };

  return (
    <div className="min-h-screen bg-background text-ink flex flex-col">
      <SeoJsonLd schema={videoSchema} />
      <SiteHeader />

      <main className="flex-1">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-5 pt-6 text-sm text-muted">
          <Link to="/" className="hover:text-brand">Home</Link>
          <span aria-hidden="true" className="mx-2">/</span>
          <span aria-current="page">Doorstep service video</span>
        </nav>

        <article className="mx-auto max-w-5xl px-5 py-8 md:py-12">
          <header className="mb-6 max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1.5 text-sm font-semibold text-brand">
              <MapPin className="h-4 w-4" aria-hidden="true" /> Mumbai, Navi Mumbai &amp; Thane
            </p>
            <h1 className="text-3xl font-black leading-tight tracking-tight text-ink md:text-5xl">
              Watch Revora's doorstep phone handoff animation
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              This short animation shows a customer handing a phone to a Revora representative at the doorstep. Contact us to ask how phone repair or buyback service works in your area.
            </p>
          </header>

          <figure className="overflow-hidden rounded-3xl border border-line bg-black shadow-xl">
            <video
              controls
              playsInline
              preload="metadata"
              poster={thumbnailUrl}
              width="1280"
              height="720"
              className="mx-auto block max-h-[75vh] w-full object-contain"
              aria-label={videoName}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag. <a href={videoUrl}>Open the video file</a>.
            </video>
            <figcaption className="bg-white px-4 py-3 text-sm text-muted md:px-6">
              A short animated illustration of a phone handoff at a customer's doorstep.
            </figcaption>
          </figure>

          <section aria-labelledby="next-steps" className="mt-8 rounded-3xl border border-line bg-white p-5 md:p-7">
            <h2 id="next-steps" className="text-xl font-bold text-ink">Ask us about phone repair or buyback</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Tell us your phone model and what it needs. We'll confirm service availability for your location.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={waHref("GENERAL")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-ink focus-ring">
                Ask on WhatsApp <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={`tel:${siteConfig.phoneE164}`} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-line px-5 py-3 font-semibold text-ink hover:border-brand hover:text-brand focus-ring">
                <PhoneCall className="h-4 w-4" aria-hidden="true" /> Call {siteConfig.phoneDisplay}
              </a>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <Link to="/sell-dead-phone" className="font-medium text-brand hover:underline">Sell a dead phone</Link>
              <Link to="/dead-phone-repair" className="font-medium text-brand hover:underline">Explore dead phone repair</Link>
              <Link to="/mobile-repair-mumbai" className="font-medium text-brand hover:underline">Mobile repair in Mumbai</Link>
            </div>
          </section>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
