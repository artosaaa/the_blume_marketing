import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Reveal from "@/components/ui/Reveal";
import Marquee from "@/components/ui/Marquee";
import MagneticButton from "@/components/ui/MagneticButton";
import { SERVICES, CLIENT_TYPES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand identity, social & content, web & digital, paid media, street marketing, and growth strategy — the full Blumé toolkit.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        index="02 / 10"
        titleLines={["Six levers.", "One brand."]}
        intro="Pull the right combination and a quiet business becomes the place everyone's talking about. Mix and match, or hand us the whole engine."
      />

      <div className="border-y border-bone/10 py-5 font-punch text-xl uppercase tracking-tight sm:text-3xl">
        <Marquee items={CLIENT_TYPES} />
      </div>

      {/* Service rows */}
      <section className="container-editorial py-12 sm:py-20">
        <ul>
          {SERVICES.map((service, i) => (
            <Reveal key={service.no} delay={(i % 3) * 0.05}>
              <li
                data-cursor="hover"
                className="group grid grid-cols-1 gap-6 border-b border-bone/10 py-10 transition-colors hover:bg-bone/[0.02] sm:grid-cols-12 sm:gap-8 sm:py-14"
              >
                <div className="sm:col-span-1">
                  <span className="font-punch text-3xl text-bone/20 transition-colors group-hover:text-pink">
                    {service.no}
                  </span>
                </div>
                <div className="sm:col-span-4">
                  <h2 className="text-4xl transition-colors group-hover:text-pink sm:text-6xl">
                    {service.title}
                  </h2>
                </div>
                <div className="sm:col-span-4">
                  <p className="max-w-md text-pretty leading-relaxed text-bone/65">
                    {service.summary}
                  </p>
                </div>
                <div className="sm:col-span-3">
                  <ul className="space-y-2 text-sm text-bone/55">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2">
                        <span className="text-pink">—</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Engagement models */}
      <section className="container-editorial py-24">
        <Reveal>
          <p className="eyebrow mb-8">How we work together</p>
        </Reveal>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-bone/10 bg-bone/10 md:grid-cols-3">
          {[
            {
              t: "Projects",
              d: "Fixed-scope identity and web builds with a clear start, finish, and price.",
            },
            {
              t: "Retainers",
              d: "Always-on content, paid, and growth. The compounding engine that never sleeps.",
            },
            {
              t: "Sprints",
              d: "Two-week positioning or campaign sprints when you need momentum, fast.",
            },
          ].map((m) => (
            <div key={m.t} className="bg-ink p-8 sm:p-10">
              <h3 className="display-italic text-3xl text-pink">{m.t}</h3>
              <p className="mt-4 leading-relaxed text-bone/60">{m.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap gap-4">
          <MagneticButton href="/pricing" variant="pink">
            See pricing
          </MagneticButton>
          <MagneticButton href="/work" variant="outline">
            See the work
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
