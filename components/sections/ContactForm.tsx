"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

const BUDGETS = ["< $5k", "$5k–$15k", "$15k–$50k", "$50k+"];
const INTERESTS = [
  "Brand Identity",
  "Social & Content",
  "Web & Digital",
  "Paid Media",
  "Street Marketing",
  "Strategy",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [budget, setBudget] = useState<string>("");
  const [interests, setInterests] = useState<string[]>([]);

  const toggle = (val: string) =>
    setInterests((cur) =>
      cur.includes(val) ? cur.filter((v) => v !== val) : [...cur, val]
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const fieldClass =
    "w-full border-b border-bone/20 bg-transparent py-4 text-xl text-bone outline-none transition-colors placeholder:text-bone/30 focus:border-pink";

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="thanks"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex min-h-[40vh] flex-col items-start justify-center"
        >
          <p className="eyebrow mb-6 text-pink">Message received</p>
          <h2 className="max-w-2xl text-balance text-4xl leading-tight sm:text-6xl">
            Talk soon. We reply to every serious enquiry within{" "}
            <span className="display-italic text-pink">one business day.</span>
          </h2>
          <button
            onClick={() => setSent(false)}
            data-cursor="hover"
            className="mt-8 text-sm uppercase tracking-[0.2em] text-bone/50 transition-colors hover:text-pink"
          >
            ← Send another
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-14"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <label className="block">
              <span className="eyebrow">Your name</span>
              <input required placeholder="Jane Doe" className={fieldClass} />
            </label>
            <label className="block">
              <span className="eyebrow">Email</span>
              <input
                required
                type="email"
                placeholder="jane@brand.com"
                className={fieldClass}
              />
            </label>
            <label className="block">
              <span className="eyebrow">Business / brand</span>
              <input placeholder="Maison Fleur" className={fieldClass} />
            </label>
            <label className="block">
              <span className="eyebrow">Industry</span>
              <input placeholder="Med-spa, café, restaurant…" className={fieldClass} />
            </label>
          </div>

          <div>
            <span className="eyebrow">What do you need?</span>
            <div className="mt-5 flex flex-wrap gap-3">
              {INTERESTS.map((item) => {
                const active = interests.includes(item);
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggle(item)}
                    data-cursor="hover"
                    className={`rounded-full border px-5 py-2.5 text-sm transition-colors ${
                      active
                        ? "border-pink bg-pink text-ink"
                        : "border-bone/20 text-bone/70 hover:border-pink hover:text-pink"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <span className="eyebrow">Budget</span>
            <div className="mt-5 flex flex-wrap gap-3">
              {BUDGETS.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setBudget(b)}
                  data-cursor="hover"
                  className={`rounded-full border px-5 py-2.5 text-sm transition-colors ${
                    budget === b
                      ? "border-pink bg-pink text-ink"
                      : "border-bone/20 text-bone/70 hover:border-pink hover:text-pink"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <label className="block">
            <span className="eyebrow">Tell us about the dream</span>
            <textarea
              rows={3}
              placeholder="We want to be the place everyone screenshots…"
              className={`${fieldClass} resize-none`}
            />
          </label>

          <MagneticButton variant="pink">Send it →</MagneticButton>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
