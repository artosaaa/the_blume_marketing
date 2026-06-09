import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { JOURNAL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Field notes on editorial branding, street marketing, and growth from the Blumé studio.",
};

export default function JournalPage() {
  const [lead, ...rest] = JOURNAL;

  return (
    <>
      <PageHeader
        eyebrow="Journal"
        index="06 / 10"
        titleLines={["Field notes", "from the studio."]}
        intro="Opinions, playbooks, and the occasional rant on making brands unforgettable."
      />

      {/* Lead article */}
      <section className="container-editorial pb-16">
        <Reveal>
          <Link
            href={`/journal/${lead.slug}`}
            data-cursor="hover"
            className="group block border-y border-bone/10 py-10"
          >
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-2">
                <span className="font-punch text-xl text-pink">Featured</span>
              </div>
              <div className="lg:col-span-7">
                <h2 className="text-4xl leading-tight transition-colors group-hover:text-pink sm:text-6xl">
                  {lead.title}
                </h2>
                <p className="mt-4 max-w-xl text-pretty leading-relaxed text-bone/60">
                  {lead.excerpt}
                </p>
              </div>
              <div className="lg:col-span-3 lg:text-right">
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-bone/45 lg:justify-end">
                  <span>{lead.category}</span>
                  <span>·</span>
                  <span>{lead.readingTime}</span>
                </div>
                <p className="mt-2 text-sm text-bone/40">{lead.date}</p>
              </div>
            </div>
          </Link>
        </Reveal>
      </section>

      {/* Rest */}
      <section className="container-editorial pb-32">
        <ul className="divide-y divide-bone/10 border-b border-bone/10">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <li>
                <Link
                  href={`/journal/${post.slug}`}
                  data-cursor="hover"
                  className="group grid grid-cols-1 gap-4 py-8 transition-colors hover:bg-bone/[0.02] sm:grid-cols-12 sm:items-baseline"
                >
                  <span className="font-punch text-sm text-bone/30 sm:col-span-1">
                    0{i + 2}
                  </span>
                  <div className="sm:col-span-7">
                    <h3 className="text-2xl transition-colors group-hover:text-pink sm:text-3xl">
                      {post.title}
                    </h3>
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-bone/45 sm:col-span-2">
                    {post.category}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-bone/45 sm:col-span-2 sm:text-right">
                    {post.date}
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
