import Link from "next/link";
import { WORK } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import ParallaxImage from "@/components/ui/ParallaxImage";

export default function SelectedWork() {
  const featured = WORK.slice(0, 4);

  return (
    <section className="container-editorial py-24 sm:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-6">Selected work</p>
          <RevealText
            inView
            lines={["Proof, not", "promises."]}
            className="text-6xl leading-[0.9] sm:text-8xl"
          />
        </div>
        <Link
          href="/work"
          data-cursor="hover"
          className="text-sm uppercase tracking-[0.2em] text-bone/60 transition-colors hover:text-pink"
        >
          All projects ↗
        </Link>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2">
        {featured.map((project, i) => (
          <Reveal
            key={project.slug}
            delay={(i % 2) * 0.1}
            className={i % 2 === 1 ? "md:mt-24" : ""}
          >
            <Link href={`/work/${project.slug}`} data-cursor="hover" className="group block">
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
                  <h3 className="text-2xl transition-colors group-hover:text-pink sm:text-3xl">
                    {project.client}
                  </h3>
                  <p className="mt-1 text-sm text-bone/50">{project.title}</p>
                </div>
                <div className="text-right">
                  <span className="font-punch text-2xl text-pink">{project.stat}</span>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-bone/40">
                    {project.category}
                  </p>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
