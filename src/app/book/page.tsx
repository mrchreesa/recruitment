import type { Metadata } from "next";
import { BookingForm } from "@/components/forms/booking-form";
import { Reveal } from "@/components/reveal";
import { Container, Eyebrow, Pill } from "@/components/ui";
import { contact } from "@/lib/content";
import { photo } from "@/lib/images";

export const metadata: Metadata = {
  title: "Book a consultation",
  description:
    "Book a free 20-minute consultation with a LOGO recruitment consultant. Phone, video, our office or your site — whatever suits.",
};

const covered = [
  "What you're short of, and by when",
  "Realistic pay rates for your area right now",
  "Temp vs temp-to-perm vs permanent — which costs you least",
  "How fast we can realistically fill it",
  "Our rate card, in full, with no games",
];

const hosts = [
  {
    name: "Tom Rafferty",
    role: "Head of Employer Partnerships",
    photo: photo.seekerG({ w: 300, h: 300 }),
  },
  {
    name: "Amara Bright",
    role: "Founder & Managing Director",
    photo: photo.seekerA({ w: 300, h: 300 }),
  },
];

export default function BookPage() {
  return (
    <>
      <section className="grain relative overflow-hidden border-b-2 border-ink bg-ink text-white">
        <div className="pointer-events-none absolute -top-32 left-[15%] h-80 w-80 rounded-full bg-grape/45 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-[5%] h-80 w-80 rounded-full bg-zest/15 blur-3xl" />
        <Container className="relative py-12 sm:py-16">
          <div className="max-w-3xl">
            <Eyebrow tone="light">Book a consultation</Eyebrow>
            <h1 className="mt-5 text-[2.6rem] leading-[0.98] font-extrabold sm:text-6xl lg:text-[4rem]">
              Twenty minutes.
              <br />
              <span className="text-zest">No sales patter.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/70">
              Pick a slot that suits and we&rsquo;ll come prepared — local pay benchmarks, realistic
              timescales and a straight answer on whether we&rsquo;re the right fit for you.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {["Free", "No obligation", "Phone, video or in person", "Evenings available"].map((p) => (
                <li key={p}>
                  <Pill tone="light">{p}</Pill>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-bone py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
            <Reveal>
              <BookingForm />
            </Reveal>

            <aside className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-5xl border-2 border-ink bg-white p-7 shadow-block">
                <Eyebrow>What we&rsquo;ll cover</Eyebrow>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {covered.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-[0.92rem] leading-relaxed text-ink-2">
                      <span className="mt-[3px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full border-2 border-ink bg-zest">
                        <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="#14121A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 8.5l3.5 3.5L13 4.5" />
                        </svg>
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-5xl border-2 border-ink bg-grape-soft p-7">
                <Eyebrow>Who you&rsquo;ll speak to</Eyebrow>
                <ul className="mt-5 flex flex-col gap-4">
                  {hosts.map((h) => (
                    <li key={h.name} className="flex items-center gap-3.5">
                      <img
                        src={h.photo}
                        alt=""
                        loading="lazy"
                        className="h-12 w-12 rounded-full border-2 border-ink object-cover"
                      />
                      <span>
                        <span className="block text-[0.95rem] font-extrabold">{h.name}</span>
                        <span className="block text-[0.8rem] text-ink-2">{h.role}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-5xl border-2 border-ink bg-zest p-7 shadow-block">
                <h2 className="font-display text-[1.3rem] leading-tight font-extrabold">
                  Need someone today?
                </h2>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-ink/75">
                  Shift falling over this morning? Skip the calendar and ring the cover line
                  directly — it&rsquo;s answered from 6am.
                </p>
                <a
                  href={contact.phoneHref}
                  className="mt-5 flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-white px-5 py-3.5 font-display text-lg font-extrabold shadow-block transition-transform hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px]"
                >
                  {contact.phone}
                </a>
              </div>

              <div className="overflow-hidden rounded-5xl border-2 border-ink shadow-block">
                <img
                  src={photo.meetingPair({ w: 800, h: 600 })}
                  alt="A consultant meeting a client to discuss hiring"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
