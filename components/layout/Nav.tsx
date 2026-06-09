"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const ease = [0.76, 0, 0.24, 1] as const;

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the menu whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[80] transition-colors duration-500",
          scrolled && !open
            ? "bg-ink/70 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <nav className="container-editorial flex items-center justify-between py-5">
          <Link
            href="/"
            data-cursor="hover"
            className="display-italic text-2xl leading-none text-bone mix-blend-difference"
          >
            {SITE.name}
            <span className="text-pink">.</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              data-cursor="hover"
              className="hidden text-[12px] uppercase tracking-[0.2em] text-bone/80 transition-colors hover:text-pink sm:block"
            >
              Start a project
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              data-cursor="hover"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] mix-blend-difference"
            >
              <span
                className={cn(
                  "block h-px w-7 bg-bone transition-all duration-300",
                  open && "translate-y-[3.5px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-px w-7 bg-bone transition-all duration-300",
                  open && "-translate-y-[3.5px] -rotate-45"
                )}
              />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[75] flex flex-col bg-ink"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="container-editorial flex flex-1 flex-col justify-center pt-24">
              <p className="eyebrow mb-10 text-bone">Menu — {NAV_LINKS.length} pages</p>
              <ul className="flex flex-col">
                {NAV_LINKS.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href} className="overflow-hidden">
                      <motion.div
                        initial={{ y: "110%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "110%" }}
                        transition={{ duration: 0.6, ease, delay: 0.15 + i * 0.04 }}
                      >
                        <Link
                          href={link.href}
                          data-cursor="hover"
                          className="group flex items-baseline gap-4 border-b border-bone/10 py-3"
                        >
                          <span className="font-sans text-[11px] tabular-nums text-bone/40">
                            0{i + 1}
                          </span>
                          <span
                            className={cn(
                              "display-italic text-4xl leading-tight transition-colors duration-300 sm:text-6xl",
                              active
                                ? "text-pink"
                                : "text-bone group-hover:text-pink"
                            )}
                          >
                            {link.label}
                          </span>
                        </Link>
                      </motion.div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="container-editorial flex flex-wrap items-center justify-between gap-4 pb-8 pt-6 text-[12px] uppercase tracking-[0.2em] text-bone/50">
              <span>{SITE.email}</span>
              <div className="flex gap-5">
                {SITE.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    data-cursor="hover"
                    className="transition-colors hover:text-pink"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
