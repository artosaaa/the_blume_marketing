"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    setEnabled(true);
    document.body.classList.add("has-custom-cursor");

    const dot = dotRef.current!;
    const ring = ringRef.current!;

    // Target position (mouse) and lagging ring position
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const isInteractive = (el: Element | null) =>
      !!el?.closest('a, button, [data-cursor="hover"], input, textarea, select');

    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target as Element)) {
        ring.dataset.hover = "true";
      }
    };
    const onOut = (e: MouseEvent) => {
      if (isInteractive(e.target as Element)) {
        ring.dataset.hover = "false";
      }
    };
    const onDown = () => (ring.dataset.down = "true");
    const onUp = () => (ring.dataset.down = "false");

    const loop = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] hidden md:block"
      style={{ mixBlendMode: "difference" }}
    >
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-white"
      />
      <div
        ref={ringRef}
        data-hover="false"
        data-down="false"
        className="absolute left-0 top-0 h-9 w-9 rounded-full border border-white transition-[width,height,opacity] duration-300 ease-out data-[down=true]:scale-90 data-[hover=true]:h-16 data-[hover=true]:w-16"
      />
    </div>
  );
}
