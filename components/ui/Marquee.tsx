"use client";

import { cn } from "@/lib/utils";

type Props = {
  items: string[];
  className?: string;
  reverse?: boolean;
  separator?: string;
};

export default function Marquee({
  items,
  className,
  reverse = false,
  separator = "—",
}: Props) {
  const sequence = (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6">{item}</span>
          <span aria-hidden className="text-pink">
            {separator}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("flex w-full overflow-hidden whitespace-nowrap", className)}>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {sequence}
        {sequence}
      </div>
    </div>
  );
}
