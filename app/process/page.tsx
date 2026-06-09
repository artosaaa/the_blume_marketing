import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import ProcessSticky from "@/components/sections/ProcessSticky";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Discover, Define, Design, Deploy, Double-down — the five-phase Blumé method that compounds instead of resets.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="The method"
        index="04 / 10"
        titleLines={["A loop, not", "a launch."]}
        intro="Most agencies launch and leave. We run a five-phase loop every quarter, reading the data and doubling down on what works."
      />

      <ProcessSticky />

      <section className="container-editorial py-28 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-balance text-4xl leading-tight sm:text-6xl">
            Curious what phase one would{" "}
            <span className="display-italic text-pink">uncover</span> for you?
          </h2>
          <div className="mt-10 flex justify-center">
            <MagneticButton href="/contact" variant="pink">
              Book a discovery call
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
