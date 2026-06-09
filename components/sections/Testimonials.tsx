"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="bg-bone text-ink">
      <div className="container-editorial py-24 sm:py-36">
        <p className="eyebrow mb-12 text-ink/60">Kind words</p>

        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease }}
            className="max-w-5xl"
          >
            <p className="text-balance text-3xl leading-[1.15] sm:text-5xl lg:text-6xl">
              <span className="display-italic text-pink">“</span>
              {t.quote}
              <span className="display-italic text-pink">”</span>
            </p>
            <footer className="mt-10 flex items-center gap-4 text-sm uppercase tracking-[0.15em] text-ink/60">
              <span className="font-medium text-ink">{t.name}</span>
              <span className="h-px w-8 bg-ink/30" />
              <span>{t.role}</span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>

        <div className="mt-14 flex items-center gap-4">
          <button
            onClick={() => go(-1)}
            data-cursor="hover"
            aria-label="Previous testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 transition-colors hover:bg-ink hover:text-bone"
          >
            ←
          </button>
          <button
            onClick={() => go(1)}
            data-cursor="hover"
            aria-label="Next testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 transition-colors hover:bg-ink hover:text-bone"
          >
            →
          </button>
          <span className="ml-4 font-punch text-lg tabular-nums">
            0{index + 1} / 0{TESTIMONIALS.length}
          </span>
        </div>
      </div>
    </section>
  );
}
