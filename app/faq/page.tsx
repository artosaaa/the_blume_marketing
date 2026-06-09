import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { FAQS } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to the questions we hear most — timelines, retainers, scope, and who we work with.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        index="08 / 10"
        titleLines={["Questions,", "answered."]}
        intro="The things prospective clients ask us most. Still curious? We're one message away."
      />

      <section className="container-editorial pb-24">
        <Accordion items={FAQS} />
      </section>

      <section className="container-editorial pb-32 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-balance text-4xl leading-tight sm:text-6xl">
            Still wondering if we&apos;re the{" "}
            <span className="display-italic text-pink">right fit?</span>
          </h2>
          <div className="mt-10 flex justify-center">
            <MagneticButton href="/contact" variant="pink">
              Ask us anything
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
