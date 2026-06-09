"use client";

import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "solid" | "outline" | "pink";
  strength?: number;
};

export default function MagneticButton({
  children,
  href,
  onClick,
  className,
  variant = "solid",
  strength = 0.4,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
    setPos({ x, y });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const styles = {
    solid: "bg-bone text-ink hover:bg-pink",
    outline: "border border-current text-bone hover:bg-bone hover:text-ink",
    pink: "bg-pink text-ink hover:bg-bone",
  }[variant];

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.4 }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-4 text-[13px] font-medium uppercase tracking-[0.18em] transition-colors duration-300",
        styles,
        className
      )}
    >
      <motion.span
        animate={{ x: pos.x * 0.3, y: pos.y * 0.3 }}
        transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.4 }}
        className="relative z-10 flex items-center gap-3"
      >
        {children}
      </motion.span>
    </motion.div>
  );

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto");
    if (external) {
      return (
        <a href={href} className="inline-block" data-cursor="hover">
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className="inline-block" data-cursor="hover">
        {inner}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="inline-block" data-cursor="hover">
      {inner}
    </button>
  );
}
