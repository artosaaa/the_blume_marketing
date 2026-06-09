import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import Reveal from "@/components/ui/Reveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import { WORK } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected case studies from Blumé — med-spas, cafés, restaurants, and beauty brands made unforgettable.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        index="03 / 10"
        titleLines={["Proof, not", "promises."]}
        intro="A few brands we made impossible to ignore. Real businesses, real numbers, real magic."
      />

      <section className="container-editorial pb-32">
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2">
          {WORK.map((project, i) => (
            <Reveal
              key={project.slug}
              delay={(i % 2) * 0.08}
              className={i % 2 === 1 ? "md:mt-28" : ""}
            >
              <Link
                href={`/work/${project.slug}`}
                data-cursor="hover"
                className="group block"
              >
                <div className="overflow-hidden rounded-xl">
                  <div className="transition-transform duration-700 ease-editorial group-hover:scale-[1.03]">
                    <ParallaxImage
                      src={project.image}
                      alt={project.client}
                      className="aspect-[4/3] w-full"
                    />
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-bone/45">
                      <span>{project.category}</span>
                      <span>·</span>
                      <span>{project.year}</span>
                    </div>
                    <h2 className="mt-2 text-3xl transition-colors group-hover:text-pink sm:text-4xl">
                      {project.client}
                    </h2>
                    <p className="mt-1 max-w-sm text-sm text-bone/55">
                      {project.title}
                    </p>
                  </div>
                  <span className="font-punch text-3xl text-pink">{project.stat}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
