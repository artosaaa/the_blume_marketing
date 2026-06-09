import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RevealText from "@/components/ui/RevealText";
import Reveal from "@/components/ui/Reveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import MagneticButton from "@/components/ui/MagneticButton";
import { WORK } from "@/lib/site";

export function generateStaticParams() {
  return WORK.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = WORK.find((p) => p.slug === decodeURIComponent(params.slug));
  if (!project) return { title: "Case study" };
  return {
    title: `${project.client} — Case study`,
    description: project.title,
  };
}

export default function WorkDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = decodeURIComponent(params.slug);
  const project = WORK.find((p) => p.slug === slug);
  if (!project) notFound();

  const next = WORK[(WORK.indexOf(project) + 1) % WORK.length];

  return (
    <article>
      <header className="container-editorial pb-12 pt-40 sm:pt-48">
        <Link
          href="/work"
          data-cursor="hover"
          className="eyebrow transition-colors hover:text-pink"
        >
          ← All work
        </Link>
        <div className="mt-8 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-bone/45">
          <span>{project.category}</span>
          <span>·</span>
          <span>{project.year}</span>
        </div>
        <RevealText
          as="h1"
          lines={[project.client]}
          className="mt-6 text-[16vw] leading-[0.86] tracking-tighter sm:text-[10vw]"
        />
        <Reveal delay={0.2}>
          <p className="ml-auto mt-8 max-w-2xl text-pretty text-xl leading-relaxed text-bone/75">
            {project.title}.
          </p>
        </Reveal>
      </header>

      <div className="container-editorial">
        <ParallaxImage
          src={project.image}
          alt={project.client}
          className="aspect-[16/9] w-full rounded-xl"
          priority
          amount={50}
          sizes="100vw"
        />
      </div>

      {/* Headline stat */}
      <section className="container-editorial border-y border-bone/10 py-20 sm:py-28">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <span className="font-punch text-7xl text-pink sm:text-8xl">
              {project.stat}
            </span>
            <p className="mt-3 text-sm text-bone/55">{project.statLabel}</p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-pretty text-2xl leading-relaxed text-bone/80 sm:text-3xl">
              We rebuilt {project.client} from the brand out — identity,
              content, and an always-on growth engine — until the numbers spoke
              for themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="container-editorial py-20 sm:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {[
            {
              t: "The challenge",
              d: `${project.client} had a great product and a forgettable presence. Loyal regulars, zero buzz, and a feed that looked like everyone else's.`,
            },
            {
              t: "Our approach",
              d: "We art-directed a brand world from scratch, shot a season of editorial content, and launched it loud with paid and real-world moments.",
            },
            {
              t: "The result",
              d: `A brand people screenshot, share, and travel for. ${project.stat} ${project.statLabel}, and a waitlist that keeps growing.`,
            },
          ].map((block, i) => (
            <Reveal key={block.t} delay={i * 0.08}>
              <span className="font-punch text-xl text-pink">0{i + 1}</span>
              <h2 className="mt-4 text-2xl">{block.t}</h2>
              <p className="mt-4 leading-relaxed text-bone/60">{block.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Next project */}
      <section className="border-t border-bone/10">
        <Link
          href={`/work/${next.slug}`}
          data-cursor="hover"
          className="group container-editorial flex flex-col items-center py-24 text-center"
        >
          <p className="eyebrow mb-6">Next project</p>
          <h2 className="text-5xl transition-colors group-hover:text-pink sm:text-8xl">
            {next.client}
          </h2>
          <p className="mt-4 text-sm text-bone/50">{next.title}</p>
          <div className="mt-10">
            <MagneticButton href={`/work/${next.slug}`} variant="outline">
              View case study →
            </MagneticButton>
          </div>
        </Link>
      </section>
    </article>
  );
}
