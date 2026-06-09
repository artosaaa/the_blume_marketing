import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/site";
import Marquee from "@/components/ui/Marquee";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-bone/10 bg-ink text-bone">
      {/* CTA band */}
      <div className="container-editorial py-24 sm:py-32">
        <p className="eyebrow mb-6">Let&apos;s begin</p>
        <h2 className="max-w-5xl text-balance text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">
          Let&apos;s make your brand{" "}
          <span className="display-italic text-pink">unforgettable.</span>
        </h2>
        <div className="mt-12">
          <MagneticButton href="/contact" variant="pink">
            Start a project →
          </MagneticButton>
        </div>
      </div>

      <div className="border-y border-bone/10 py-6 font-punch text-3xl uppercase tracking-tight text-bone/90 sm:text-5xl">
        <Marquee
          items={["BLUMÉ", "LET'S TALK", "BLUMÉ", "UNFORGETTABLE", "BLUMÉ", "EST. 2017"]}
        />
      </div>

      <div className="container-editorial grid grid-cols-2 gap-10 py-16 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="display-italic text-3xl">
            {SITE.name}<span className="text-pink">.</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone/60">
            {SITE.tagline}
          </p>
        </div>

        <div>
          <p className="eyebrow mb-5">Sitemap</p>
          <ul className="space-y-2 text-sm text-bone/70">
            {NAV_LINKS.slice(0, 5).map((l) => (
              <li key={l.href}>
                <Link href={l.href} data-cursor="hover" className="transition-colors hover:text-pink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5">More</p>
          <ul className="space-y-2 text-sm text-bone/70">
            {NAV_LINKS.slice(5).map((l) => (
              <li key={l.href}>
                <Link href={l.href} data-cursor="hover" className="transition-colors hover:text-pink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5">Connect</p>
          <ul className="space-y-2 text-sm text-bone/70">
            <li>
              <a href={`mailto:${SITE.email}`} data-cursor="hover" className="transition-colors hover:text-pink">
                {SITE.email}
              </a>
            </li>
            <li>{SITE.phone}</li>
            <li>{SITE.location}</li>
            {SITE.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} data-cursor="hover" className="transition-colors hover:text-pink">
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-editorial flex flex-col items-start justify-between gap-3 border-t border-bone/10 py-6 text-[11px] uppercase tracking-[0.2em] text-bone/40 sm:flex-row sm:items-center">
        <span>© {year} {SITE.fullName}</span>
        <span>Made with obsession in Los Angeles</span>
      </div>
    </footer>
  );
}
