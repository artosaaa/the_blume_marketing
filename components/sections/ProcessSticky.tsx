"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROCESS } from "@/lib/site";

export default function ProcessSticky() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Big ghost number that scrubs through the steps as you scroll.
  const bigIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [1, PROCESS.length + 0.999]
  );
  const bigLabel = useTransform(bigIndex, (v) => `0${Math.floor(v)}`);

  return (
    <section ref={ref} className="relative">
      <div className="container-editorial grid grid-cols-1 lg:grid-cols-12">
        {/* Sticky left rail */}
        <div className="hidden lg:col-span-5 lg:block">
          <div className="sticky top-0 flex h-screen flex-col justify-center">
            <p className="eyebrow mb-8">The Blumé method</p>
            <motion.span className="font-punch text-[28vh] leading-none text-pink/90">
              {bigLabel}
            </motion.span>
            <p className="mt-6 max-w-sm leading-relaxed text-bone/55">
              Five phases, repeated every quarter. Discovery to double-down — a
              loop that compounds instead of resets.
            </p>
          </div>
        </div>

        {/* Scrolling steps */}
        <div className="lg:col-span-7">
          {PROCESS.map((step) => (
            <div
              key={step.no}
              className="flex min-h-[70vh] flex-col justify-center border-b border-bone/10 py-16"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30%" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="font-punch text-2xl text-pink lg:hidden">
                  {step.no}
                </span>
                <h2 className="mt-4 text-5xl sm:text-7xl">{step.title}</h2>
                <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-bone/65">
                  {step.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
