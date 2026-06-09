"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/site";

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const [display, setDisplay] = useState(value);

  // Animate the leading numeric portion if present (e.g. "180+", "$42M").
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);

  useEffect(() => {
    if (!inView || !match) return;
    const [, prefix, num, suffix] = match;
    const target = parseFloat(num);
    const decimals = num.includes(".") ? 1 : 0;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;

    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = (target * eased).toFixed(decimals);
      setDisplay(`${prefix}${current}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, match]);

  return <span ref={ref}>{display}</span>;
}

export default function Stats() {
  return (
    <section className="container-editorial border-y border-bone/10 py-16 sm:py-24">
      <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <span className="font-punch text-5xl tracking-tight sm:text-7xl">
              <Counter value={stat.value} />
            </span>
            <span className="mt-3 max-w-[14ch] text-sm text-bone/55">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
