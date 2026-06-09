import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import ParallaxImage from "@/components/ui/ParallaxImage";
import Marquee from "@/components/ui/Marquee";
import Stats from "@/components/sections/Stats";
import MagneticButton from "@/components/ui/MagneticButton";
import { VALUES, TEAM, CLIENT_TYPES } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Blumé is a luxe-editorial marketing agency that treats every local business like a global fashion house.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Blumé"
        index="01 / 10"
        titleLines={["Editorial", "obsessives."]}
        intro="We're a small, fierce studio that fell in love with making local businesses feel like global brands. Founded in 2017, built on craft, run on results."
      />

      {/* Intro split */}
      <section className="container-editorial grid grid-cols-1 gap-12 pb-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop"
            alt="The Blumé studio at work"
            className="aspect-[4/3] w-full rounded-xl"
            priority
          />
        </div>
        <div className="flex flex-col justify-end lg:col-span-5">
          <Reveal>
            <p className="text-pretty text-xl leading-relaxed text-bone/80">
              Blumé began with a stubborn idea: that the corner café down the
              street deserves the same art direction as the brand on the
              billboard.
            </p>
            <p className="mt-6 text-pretty leading-relaxed text-bone/60">
              Today we partner with med-spas, restaurants, beauty labels, and
              local businesses who refuse to look like everyone else. High-fashion
              editorial on the surface, ruthless about results underneath.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="border-y border-bone/10 py-5 font-punch text-xl uppercase tracking-tight sm:text-3xl">
        <Marquee items={CLIENT_TYPES} reverse />
      </div>

      {/* Values */}
      <section className="container-editorial py-24 sm:py-32">
        <RevealText
          inView
          lines={["What we", "stand for."]}
          className="text-6xl leading-[0.9] sm:text-8xl"
        />
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-bone/10 bg-bone/10 sm:grid-cols-2">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.06} className="bg-ink">
              <div className="h-full p-8 sm:p-10">
                <span className="font-punch text-2xl text-pink">0{i + 1}</span>
                <h3 className="mt-6 text-3xl">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-bone/60">{value.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Stats />

      {/* Team */}
      <section className="container-editorial py-24 sm:py-32">
        <div className="flex items-end justify-between">
          <RevealText inView lines={["The people."]} className="text-5xl sm:text-7xl" />
          <p className="eyebrow hidden sm:block">06 humans, infinite ideas</p>
        </div>
        <ul className="mt-12 divide-y divide-bone/10 border-t border-bone/10">
          {TEAM.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.04}>
              <li
                data-cursor="hover"
                className="group flex items-center justify-between py-6 transition-colors hover:text-pink"
              >
                <span className="text-3xl sm:text-5xl">{person.name}</span>
                <span className="text-right text-sm uppercase tracking-[0.15em] text-bone/50 group-hover:text-pink">
                  {person.role}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="container-editorial pb-32 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-balance text-4xl leading-tight sm:text-6xl">
            Want to see how we&apos;d{" "}
            <span className="display-italic text-pink">reimagine</span> your brand?
          </h2>
          <div className="mt-10 flex justify-center">
            <MagneticButton href="/contact" variant="pink">
              Let&apos;s talk
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
