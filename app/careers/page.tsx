import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import Marquee from "@/components/ui/Marquee";
import { OPENINGS, VALUES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Blumé — a small, fierce studio making local businesses feel like global brands. Open roles in creative, growth, and production.",
};

const PERKS = [
  "Editorial-grade gear & studio",
  "4-day creative sprints",
  "Unlimited PTO (we mean it)",
  "Annual brand-trip offsite",
  "Profit share on retainers",
  "Learning budget, no questions",
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        index="07 / 10"
        titleLines={["Make things", "people screenshot."]}
        intro="We're a small team that takes craft seriously and ourselves not at all. If you'd rebuild a café's brand for fun, you'll fit right in."
      />

      <div className="border-y border-bone/10 py-5 font-punch text-xl uppercase tracking-tight sm:text-3xl">
        <Marquee
          items={["WE'RE HIRING", "JOIN BLUMÉ", "WE'RE HIRING", "MAKE MAGIC", "WE'RE HIRING"]}
        />
      </div>

      {/* Open roles */}
      <section className="container-editorial py-20 sm:py-28">
        <div className="flex items-end justify-between">
          <h2 className="text-4xl sm:text-6xl">Open roles</h2>
          <p className="eyebrow hidden sm:block">{OPENINGS.length} positions</p>
        </div>
        <ul className="mt-12 divide-y divide-bone/10 border-y border-bone/10">
          {OPENINGS.map((job, i) => (
            <Reveal key={job.role} delay={i * 0.04}>
              <li
                data-cursor="hover"
                className="group grid grid-cols-1 gap-3 py-7 transition-colors hover:bg-bone/[0.02] sm:grid-cols-12 sm:items-center"
              >
                <span className="font-punch text-sm text-bone/30 sm:col-span-1">
                  0{i + 1}
                </span>
                <h3 className="text-2xl transition-colors group-hover:text-pink sm:col-span-5 sm:text-3xl">
                  {job.role}
                </h3>
                <span className="text-sm text-bone/55 sm:col-span-3">{job.team}</span>
                <span className="text-sm text-bone/55 sm:col-span-2">{job.type}</span>
                <span className="text-pink opacity-0 transition-opacity group-hover:opacity-100 sm:col-span-1 sm:text-right">
                  Apply →
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Perks */}
      <section className="container-editorial pb-20 sm:pb-28">
        <p className="eyebrow mb-10">Why Blumé</p>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-bone/10 bg-bone/10 sm:grid-cols-2 lg:grid-cols-3">
          {PERKS.map((perk, i) => (
            <div key={perk} className="bg-ink p-8">
              <span className="font-punch text-xl text-pink">0{i + 1}</span>
              <p className="mt-4 text-lg">{perk}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Culture */}
      <section className="container-editorial pb-32">
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={(i % 2) * 0.06}>
              <h3 className="display-italic text-3xl text-pink">{value.title}</h3>
              <p className="mt-3 leading-relaxed text-bone/60">{value.desc}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-balance text-4xl leading-tight sm:text-5xl">
              Don&apos;t see your role? Pitch us{" "}
              <span className="display-italic text-pink">anyway.</span>
            </h2>
            <div className="mt-10 flex justify-center">
              <MagneticButton href="/contact" variant="pink">
                Send an introduction
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
