"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const TEXT =
  "We believe a neighborhood café and a global fashion house deserve the same obsession. So we art-direct every post, every menu, every storefront — until your brand is the one everyone screenshots.";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mr-[0.25em] inline-block">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.25"],
  });

  const words = TEXT.split(" ");

  return (
    <section ref={ref} className="container-editorial py-28 sm:py-40">
      <p className="eyebrow mb-12">Our belief</p>
      <p className="flex flex-wrap text-balance text-3xl leading-[1.18] tracking-tight sm:text-5xl lg:text-6xl">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </section>
  );
}
