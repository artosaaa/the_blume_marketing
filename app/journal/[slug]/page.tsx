import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RevealText from "@/components/ui/RevealText";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { JOURNAL } from "@/lib/site";

export function generateStaticParams() {
  return JOURNAL.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = JOURNAL.find((p) => p.slug === params.slug);
  if (!post) return { title: "Journal" };
  return { title: post.title, description: post.excerpt };
}

const BODY = [
  "Here's the uncomfortable truth most agencies won't tell you: your audience doesn't scroll past bad products, they scroll past unconsidered ones. The brands that win treat every touchpoint like it's going to be photographed — because it is.",
  "Think about the last place you couldn't stop talking about. The lighting was intentional. The menu was set in a typeface someone agonized over. The bathroom had a quote on the wall. None of it was an accident, and all of it was marketing.",
  "That's the whole game. Make something worth pointing a camera at, then get out of the way and let people do the marketing for you. Editorial discipline isn't decoration — it's the most efficient growth channel you have.",
  "So the next time you brief a post, ask the only question that matters: would a magazine editor put this on the cover? If the answer is no, it's not done yet.",
];

export default function JournalDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = JOURNAL.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const next = JOURNAL[(JOURNAL.indexOf(post) + 1) % JOURNAL.length];

  return (
    <article>
      <header className="container-editorial pb-12 pt-40 sm:pt-48">
        <Link
          href="/journal"
          data-cursor="hover"
          className="eyebrow transition-colors hover:text-pink"
        >
          ← Journal
        </Link>
        <div className="mt-8 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-bone/45">
          <span>{post.category}</span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        <RevealText
          as="h1"
          lines={[post.title]}
          className="mt-6 max-w-5xl text-balance text-5xl leading-[0.95] tracking-tight sm:text-7xl"
        />
      </header>

      <div className="container-editorial pb-24">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-pretty text-2xl leading-relaxed text-bone/85">
              {post.excerpt}
            </p>
          </Reveal>
          <div className="mt-10 space-y-6">
            {BODY.map((para, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <p className="text-pretty text-lg leading-relaxed text-bone/65">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <section className="border-t border-bone/10">
        <Link
          href={`/journal/${next.slug}`}
          data-cursor="hover"
          className="group container-editorial flex flex-col items-center py-20 text-center"
        >
          <p className="eyebrow mb-4">Read next</p>
          <h2 className="max-w-3xl text-3xl transition-colors group-hover:text-pink sm:text-5xl">
            {next.title}
          </h2>
          <div className="mt-8">
            <MagneticButton href="/contact" variant="pink">
              Work with us
            </MagneticButton>
          </div>
        </Link>
      </section>
    </article>
  );
}
