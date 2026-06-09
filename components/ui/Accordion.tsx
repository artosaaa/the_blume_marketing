"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Item = { q: string; a: string };

export default function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="border-t border-bone/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q} className="border-b border-bone/10">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              data-cursor="hover"
              aria-expanded={isOpen}
              className="group flex w-full items-center justify-between gap-6 py-7 text-left"
            >
              <span className="flex items-baseline gap-5">
                <span className="font-punch text-sm text-bone/30">0{i + 1}</span>
                <span className="text-2xl transition-colors group-hover:text-pink sm:text-3xl">
                  {item.q}
                </span>
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="shrink-0 text-2xl text-pink"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-8 pl-0 text-pretty leading-relaxed text-bone/60 sm:pl-11">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
