import RevealText from "@/components/ui/RevealText";
import Reveal from "@/components/ui/Reveal";

type Props = {
  eyebrow: string;
  /** title rendered line-by-line with mask reveal */
  titleLines: string[];
  intro?: string;
  index?: string;
};

export default function PageHeader({ eyebrow, titleLines, intro, index }: Props) {
  return (
    <header className="container-editorial pb-16 pt-40 sm:pt-48">
      <div className="flex items-center justify-between">
        <p className="eyebrow">{eyebrow}</p>
        {index && <p className="eyebrow tabular-nums">{index}</p>}
      </div>
      <div className="mt-8 hairline" />
      <RevealText
        as="h1"
        lines={titleLines}
        className="mt-10 text-[15vw] leading-[0.86] tracking-tighter sm:text-[11vw] lg:text-[9vw]"
      />
      {intro && (
        <Reveal delay={0.2} className="ml-auto mt-10 max-w-xl">
          <p className="text-pretty text-lg leading-relaxed text-bone/70">
            {intro}
          </p>
        </Reveal>
      )}
    </header>
  );
}
