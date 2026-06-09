"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/site";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-32">
      {/* ambient gradient bloom */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/3 left-1/2 h-[120vh] w-[120vh] -translate-x-1/2 rounded-full opacity-[0.18] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #F4C2D7 0%, #E9D5E8 35%, transparent 70%)",
        }}
      />

      <div className="container-editorial relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-between"
        >
          <p className="eyebrow">{SITE.location}</p>
          <p className="eyebrow hidden sm:block">Marketing · Branding · Growth</p>
          <p className="eyebrow">Est. 2017</p>
        </motion.div>
      </div>

      <div className="container-editorial relative">
        <h1 className="text-[15.5vw] leading-[0.82] tracking-tightest sm:text-[13vw] lg:text-[12vw]">
          <RevealText as="span" lines={["Let's make"]} delay={0.5} className="block" />
          <span className="block">
            <span className="reveal-line inline-block align-top">
              <motion.span
                className="display-italic block text-pink will-change-transform"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, ease, delay: 0.62 }}
              >
                your brand
              </motion.span>
            </span>
          </span>
          <RevealText
            as="span"
            lines={["unforgettable."]}
            delay={0.74}
            className="block"
          />
        </h1>
      </div>

      <div className="container-editorial relative pb-12 pt-10">
        <div className="hairline mb-8" />
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 1 }}
            className="max-w-md text-pretty text-base leading-relaxed text-bone/70"
          >
            A luxe-editorial agency for beauty, med-spas, restaurants, cafés, and
            local brands. High-fashion polish meets bold street marketing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 1.12 }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="/contact" variant="pink">
              Start a project
            </MagneticButton>
            <MagneticButton href="/work" variant="outline">
              See the work
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="container-editorial relative pb-6"
      >
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-bone/40">
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
          Scroll to explore
        </div>
      </motion.div>
    </section>
  );
}
