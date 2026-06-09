import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <p className="font-punch text-[28vw] leading-none text-pink/90 sm:text-[20vw]">
        404
      </p>
      <h1 className="mt-4 max-w-xl text-balance text-3xl leading-tight sm:text-5xl">
        This page went off to get{" "}
        <span className="display-italic text-pink">unforgettable.</span>
      </h1>
      <p className="mt-4 max-w-md text-bone/55">
        The link you followed doesn&apos;t exist (anymore). Let&apos;s get you
        back to something beautiful.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <MagneticButton href="/" variant="pink">
          Back home
        </MagneticButton>
        <Link
          href="/work"
          data-cursor="hover"
          className="self-center text-sm uppercase tracking-[0.2em] text-bone/60 transition-colors hover:text-pink"
        >
          See the work ↗
        </Link>
      </div>
    </section>
  );
}
