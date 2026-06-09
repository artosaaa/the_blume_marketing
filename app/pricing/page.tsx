import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { PRICING, FAQS } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent monthly plans — Spark, Bloom, and Editorial. Pricing that whispers nothing and delivers everything.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        index="05 / 10"
        titleLines={["Pretty", "that pays."]}
        intro="No mystery quotes, no nickel-and-diming. Three ways to work with us — pick the altitude that matches your ambition."
      />

      <section className="container-editorial pb-24">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/10 lg:grid-cols-3">
          {PRICING.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <div
                className={cn(
                  "flex h-full flex-col p-8 sm:p-10",
                  plan.featured ? "bg-pink text-ink" : "bg-ink text-bone"
                )}
              >
                <div className="flex items-center justify-between">
                  <h2 className="display-italic text-4xl">{plan.name}</h2>
                  {plan.featured && (
                    <span className="rounded-full border border-ink/30 px-3 py-1 text-[10px] uppercase tracking-[0.18em]">
                      Most loved
                    </span>
                  )}
                </div>
                <p
                  className={cn(
                    "mt-3 text-sm",
                    plan.featured ? "text-ink/70" : "text-bone/55"
                  )}
                >
                  {plan.tagline}
                </p>

                <div className="mt-8 flex items-baseline gap-1">
                  <span className="font-punch text-5xl tracking-tight">
                    {plan.price}
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      plan.featured ? "text-ink/60" : "text-bone/45"
                    )}
                  >
                    {plan.cadence}
                  </span>
                </div>

                <ul className="mt-8 flex-1 space-y-3 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className={plan.featured ? "text-ink" : "text-pink"}>
                        —
                      </span>
                      <span className={plan.featured ? "text-ink/80" : "text-bone/70"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <MagneticButton
                    href="/contact"
                    variant={plan.featured ? "solid" : "outline"}
                    className="w-full"
                  >
                    {plan.price === "Custom" ? "Request a quote" : "Get started"}
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-sm text-bone/45">
            All plans are month-to-month after a 90-day initial commitment. Brand
            identity & web builds are quoted as fixed-scope projects.
          </p>
        </Reveal>
      </section>

      {/* Mini FAQ */}
      <section className="container-editorial border-t border-bone/10 py-24">
        <p className="eyebrow mb-12">Common questions</p>
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
          {FAQS.slice(0, 4).map((faq, i) => (
            <Reveal key={faq.q} delay={(i % 2) * 0.06}>
              <h3 className="text-xl text-pink">{faq.q}</h3>
              <p className="mt-3 leading-relaxed text-bone/60">{faq.a}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-12">
          <MagneticButton href="/faq" variant="outline">
            All FAQs →
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
