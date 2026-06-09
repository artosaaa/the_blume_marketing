"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES } from "@/lib/site";

// Pinned horizontal-scroll band for "what we do".
export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current!;
    const track = trackRef.current!;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${getScrollAmount()}`,
        pin: true,
        scrub: 1,
        animation: tween,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-bone text-ink"
    >
      <div className="absolute left-5 top-8 z-10 sm:left-8 lg:left-14">
        <p className="eyebrow">What we do</p>
      </div>

      <div
        ref={trackRef}
        className="flex h-full items-center gap-6 pl-5 pr-[20vw] sm:gap-10 sm:pl-8 lg:pl-14"
      >
        <div className="flex h-full w-[78vw] shrink-0 flex-col justify-center sm:w-[44vw] lg:w-[34vw]">
          <h2 className="text-6xl leading-[0.9] sm:text-7xl lg:text-8xl">
            Six ways
            <br />
            we make
            <br />
            <span className="display-italic text-pink/90">noise.</span>
          </h2>
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-ink/60">
            Scroll sideways. Every service below is a lever — pull the right
            ones and a quiet business becomes the place everyone&apos;s talking
            about.
          </p>
        </div>

        {SERVICES.map((service) => (
          <article
            key={service.no}
            className="group flex h-[62vh] w-[80vw] shrink-0 flex-col justify-between rounded-2xl border border-ink/15 bg-ink/[0.02] p-8 transition-colors duration-500 hover:border-ink/40 sm:w-[42vw] lg:w-[32vw]"
          >
            <div className="flex items-start justify-between">
              <span className="font-punch text-5xl text-ink/15 transition-colors group-hover:text-pink">
                {service.no}
              </span>
              <span className="text-2xl">→</span>
            </div>
            <div>
              <h3 className="text-4xl sm:text-5xl">{service.title}</h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/60">
                {service.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
