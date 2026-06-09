"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

type Props = {
  /** Each string is rendered as its own masked line. */
  lines: string[];
  className?: string;
  delay?: number;
  /** Animate when scrolled into view instead of on mount. */
  inView?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

export default function RevealText({
  lines,
  className,
  delay = 0,
  inView = false,
  as = "h2",
}: Props) {
  const Tag = motion[as];
  const animateProps = inView
    ? { whileInView: "visible", viewport: { once: true, margin: "-12%" } }
    : { animate: "visible" };

  return (
    <Tag className={cn(className)} initial="hidden" {...animateProps}>
      {lines.map((line, i) => (
        <span key={i} className="reveal-line">
          <motion.span
            className="block will-change-transform"
            variants={{
              hidden: { y: "110%" },
              visible: { y: "0%" },
            }}
            transition={{
              duration: 0.9,
              ease,
              delay: delay + i * 0.09,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
