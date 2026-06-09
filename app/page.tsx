import Hero from "@/components/sections/Hero";
import Marquee from "@/components/ui/Marquee";
import Manifesto from "@/components/sections/Manifesto";
import HorizontalScroll from "@/components/sections/HorizontalScroll";
import Stats from "@/components/sections/Stats";
import SelectedWork from "@/components/sections/SelectedWork";
import Testimonials from "@/components/sections/Testimonials";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";
import { CLIENT_TYPES } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Infinite client-type marquee */}
      <div className="border-y border-bone/10 py-5 font-punch text-xl uppercase tracking-tight sm:text-3xl">
        <Marquee items={CLIENT_TYPES} />
      </div>

      <Manifesto />

      <HorizontalScroll />

      <Stats />

      <SelectedWork />

      <Testimonials />

      {/* Closing services teaser */}
      <section className="container-editorial py-28 text-center sm:py-40">
        <Reveal>
          <p className="eyebrow mb-8">From whisper to wildfire</p>
          <h2 className="mx-auto max-w-4xl text-balance text-5xl leading-[0.95] sm:text-7xl">
            Ready to become the place everyone&apos;s{" "}
            <span className="display-italic text-pink">talking about?</span>
          </h2>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <MagneticButton href="/contact" variant="pink">
              Start a project
            </MagneticButton>
            <MagneticButton href="/services" variant="outline">
              Explore services
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
