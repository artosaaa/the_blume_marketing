import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import ContactForm from "@/components/sections/ContactForm";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your brand. We reply to every serious enquiry within one business day. Let's make your brand unforgettable.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        index="09 / 10"
        titleLines={["Let's make", "magic."]}
        intro="Tell us where your brand is and where you want it to be. The more you share, the sharper our first ideas."
      />

      <section className="container-editorial grid grid-cols-1 gap-16 pb-32 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        <aside className="lg:col-span-4 lg:col-start-9">
          <Reveal>
            <div className="space-y-10">
              <div>
                <p className="eyebrow mb-3">Email</p>
                <a
                  href={`mailto:${SITE.email}`}
                  data-cursor="hover"
                  className="text-xl text-bone transition-colors hover:text-pink"
                >
                  {SITE.email}
                </a>
              </div>
              <div>
                <p className="eyebrow mb-3">Phone</p>
                <p className="text-xl">{SITE.phone}</p>
              </div>
              <div>
                <p className="eyebrow mb-3">Studio</p>
                <p className="text-xl">{SITE.location}</p>
              </div>
              <div>
                <p className="eyebrow mb-3">Follow</p>
                <ul className="space-y-1">
                  {SITE.social.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        data-cursor="hover"
                        className="text-lg text-bone/70 transition-colors hover:text-pink"
                      >
                        {s.label} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-bone/10 p-6">
                <p className="display-italic text-2xl text-pink">
                  &ldquo;Let&apos;s make your brand unforgettable.&rdquo;
                </p>
                <p className="mt-3 text-sm text-bone/50">
                  Our promise, and the reason we pick up the phone.
                </p>
              </div>
            </div>
          </Reveal>
        </aside>
      </section>
    </>
  );
}
