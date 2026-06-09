"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/site";

// Plays on every route mount (template.tsx remounts per navigation),
// producing a pink-then-black curtain wipe that reveals the new page.
const ease = [0.76, 0, 0.24, 1] as const;

export default function Curtain() {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center"
      initial={{ pointerEvents: "auto" }}
      animate={{ pointerEvents: "none" }}
    >
      {/* Black panel — reveals last */}
      <motion.div
        className="absolute inset-0 bg-ink"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.35 }}
        style={{ transformOrigin: "top" }}
      />
      {/* Pink panel — reveals first, sitting underneath */}
      <motion.div
        className="absolute inset-0 bg-pink"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.18 }}
        style={{ transformOrigin: "top" }}
      />
      {/* Wordmark flashing during the wipe */}
      <motion.span
        className="display-italic relative z-10 text-4xl text-ink"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: [0, 1, 0], y: [10, 0, -10] }}
        transition={{ duration: 0.7, ease, times: [0, 0.5, 1] }}
      >
        {SITE.name}
      </motion.span>
    </motion.div>
  );
}
