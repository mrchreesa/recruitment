import { Reveal } from "@/components/reveal";
import { DualPath } from "@/components/sections/dual-path";
import { Button, Container, Marquee, Pill, SectionHeading, cx } from "@/components/ui";
import { contact, marqueeTerms } from "@/lib/content";

/* Draft photography supplied in the client brief — swap for hi-res originals. */
const briefImages = {
  portrait: "/images/brief/winston-mckenzie.webp",
  gardening: "/images/brief/gardening.webp",
  robotics: "/images/brief/robotics.webp",
  teamMeeting: "/images/brief/team-meeting.webp",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <div className="border-b-2 border-ink bg-ink py-3.5 text-zest">
        <Marquee items={marqueeTerms} />
      </div>

      <ParachutePositions />
      <HiringBand />
      <DualPath />
    </>
  );
}

/* ------------------------------------------------------------------ */

const heroFacts = [
  { value: "£100", label: "per week, expenses paid" },
  { value: "9 hrs", label: "work per week" },
  { value: "3 months", label: "revolving position" },
];

function Hero() {
  return (
    <section className="grain relative overflow-hidden border-b-2 border-ink bg-bone">
      <div className="pointer-events-none absolute -top-24 -right-24 h-[20rem] w-[20rem] rounded-full bg-grape/10 blur-3xl sm:-top-40 sm:-right-32 sm:h-[34rem] sm:w-[34rem]" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-[18rem] w-[18rem] rounded-full bg-zest/15 blur-3xl sm:-bottom-52 sm:-left-40 sm:h-[30rem] sm:w-[30rem]" />

      <Container className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Copy */}
          <div className="animate-rise">
            <Pill tone="coral" className="px-3.5 py-1.5">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-coral" />
              Volunteer Parachute Positions
            </Pill>

            <p className="mt-6 font-display text-[1.15rem] font-bold text-grape sm:text-[1.35rem]">
              Looking for a job? Are you sick of being rejected?
            </p>

            <h1 className="mt-3 text-[2.7rem] leading-[0.96] font-extrabold tracking-[-0.035em] sm:text-[3.8rem] lg:text-[3.9rem] xl:text-[4.3rem]">
              Become a Parachute Applicant — and{" "}
              <span className="marker-zest">land yourself</span> in a job.
            </h1>

            <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-ink-2 sm:text-[1.15rem]">
              <strong className="font-bold text-ink">The JobFather</strong> specialises in offering{" "}
              <strong className="font-bold text-ink">&ldquo;Volunteer Parachute Positions&rdquo;</strong>.
              Guaranteed expenses paid, for only 9 hours&rsquo; work per week, in a rotation to suit
              you and your employer.
            </p>

            <dl className="mt-8 grid max-w-xl grid-cols-3 overflow-hidden rounded-3xl border-2 border-ink bg-white shadow-block">
              {heroFacts.map((f, i) => (
                <div key={f.label} className={cx("px-2.5 py-4 sm:px-5", i > 0 && "border-l-2 border-ink")}>
                  <dt className="sr-only">{f.label}</dt>
                  <dd>
                    <span className="block font-display text-[1.15rem] leading-none font-extrabold whitespace-nowrap min-[400px]:text-[1.3rem] sm:text-[1.9rem]">
                      {f.value}
                    </span>
                    <span className="mt-1.5 block text-[0.72rem] leading-snug font-semibold text-ink-3 sm:text-[0.8rem]">
                      {f.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/upload-cv" variant="zest" size="lg">
                Need a job? Upload your CV
              </Button>
              <Button href="#which-one" variant="outline" size="lg" arrow={false}>
                I need staff
              </Button>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-[28rem] pt-10 pb-8 lg:max-w-none">
            <figure className="relative rotate-[2deg] overflow-hidden rounded-5xl border-2 border-ink bg-white shadow-block-lg">
              <img
                src={briefImages.portrait}
                alt="His Excellency, Ambassador, Dr. Winston McKenzie — The JobFather"
                fetchPriority="high"
                className="aspect-[264/228] w-full object-cover"
              />
              <figcaption className="border-t-2 border-ink px-6 py-5">
                <span className="block text-[0.7rem] font-bold uppercase tracking-[0.2em] text-grape">
                  His Excellency, Ambassador
                </span>
                <span className="mt-1 block font-display text-[1.6rem] leading-tight font-extrabold">
                  Dr. Winston McKenzie
                </span>
                <span className="mt-1 block text-[0.88rem] font-semibold text-ink-3">The JobFather</span>
              </figcaption>
            </figure>

            {/* Speech bubble */}
            <div className="absolute top-0 left-[-2%] animate-float rounded-3xl rounded-bl-md border-2 border-ink bg-zest px-5 py-3.5 shadow-block rotate-[-5deg] sm:left-[-8%]">
              <p className="font-display text-[1.25rem] leading-none font-extrabold sm:text-[1.45rem]">
                &ldquo;I have a Job for you.&rdquo;
              </p>
            </div>

            <div
              className="absolute right-[-1%] bottom-0 flex animate-float items-center gap-2 rounded-full border-2 border-ink bg-coral px-4 py-2.5 shadow-block sm:right-[-5%]"
              style={{ animationDelay: "1.2s" }}
            >
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-ink" />
              <span className="text-[0.82rem] font-extrabold">Hiring NOW</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */

const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

const rotations = [
  { hours: "9 hrs", days: "1 day", detail: "9 hrs per day, 1 day per week", active: [0] },
  { hours: "3 hrs", days: "3 days", detail: "3 hrs per day, 3 days per week", active: [0, 2, 4] },
  { hours: "1½ hrs", days: "6 days", detail: "1 hr 30 mins per day, 6 days per week", active: [0, 1, 2, 3, 4, 5] },
];

function ParachutePositions() {
  return (
    <section id="parachute" className="border-b-2 border-ink bg-white py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Volunteer Parachute Positions"
              title={
                <>
                  9 hours a week.
                  <br />
                  <span className="marker-zest">Your</span> rotation.
                </>
              }
              lead="Parachute jobs derive from a revolving 3-month position, in a rotation to suit you and your employer."
            />

            <div className="mt-9 rounded-4xl border-2 border-ink bg-zest p-7 shadow-block-lg">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-ink/60">
                Guaranteed expenses paid
              </p>
              <p className="mt-2 font-display text-6xl leading-none font-extrabold">
                £100
                <span className="ml-2 text-2xl font-bold">per week</span>
              </p>
              <p className="mt-4 text-[0.98rem] leading-relaxed font-medium text-ink-2">
                Ideal to get you into your first job, as a holiday job, or extra income.
              </p>
            </div>
          </div>

          <ul className="flex flex-col gap-5">
            {rotations.map((r, i) => (
              <Reveal as="li" key={r.days} delay={i * 90}>
                <div className="flex flex-col gap-5 rounded-4xl border-2 border-ink bg-bone p-6 shadow-block sm:flex-row sm:items-center sm:justify-between sm:p-7">
                  <div>
                    <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-grape">
                      Option {i + 1}
                    </p>
                    <p className="mt-1.5 font-display text-[1.9rem] leading-none font-extrabold">
                      {r.hours} <span className="text-ink-3">×</span> {r.days}
                    </p>
                    <p className="mt-2 text-[0.9rem] text-ink-3">{r.detail}</p>
                  </div>

                  <div className="flex gap-1.5" aria-hidden="true">
                    {DAYS.map((d, di) => {
                      const on = r.active.includes(di);
                      return (
                        <span
                          key={di}
                          className={cx(
                            "grid h-10 w-8 place-items-center rounded-lg border-2 text-[0.72rem] font-extrabold sm:h-12 sm:w-9",
                            on ? "border-ink bg-grape text-white" : "border-line bg-white text-ink-3",
                          )}
                        >
                          {d}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            ))}
            <li className="px-2 text-[0.84rem] text-ink-3">
              Example weeks shown — days are agreed to suit you and your employer.
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */

const hiringCards = [
  {
    image: briefImages.gardening,
    alt: "An adult and a child planting seedlings in a garden bed",
    line: "Amb. Dr. Winston McKenzie: “I have a Job for you.”",
    cta: { href: "#parachute", label: "How Parachute jobs work" },
  },
  {
    image: briefImages.robotics,
    alt: "A young man building a robot in a workshop",
    line: "Need a Job? Upload your CV.",
    sub: "Registration charge only. No further fees, no spam — ask us to delete everything at any time.",
    cta: { href: "/upload-cv", label: "Upload your CV" },
  },
  {
    image: briefImages.teamMeeting,
    alt: "A diverse team meeting around a table in a bright office",
    line: "The JobFather is hiring NOW.",
    cta: { href: contact.phoneHref, label: `Call ${contact.phone}` },
  },
];

function HiringBand() {
  return (
    <section className="grain relative overflow-hidden border-b-2 border-ink bg-grape-deep text-white">
      <div className="pointer-events-none absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-grape/40 blur-3xl" />
      <Container className="relative py-16 sm:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {hiringCards.map((c, i) => (
            <Reveal key={c.line} delay={i * 90} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-4xl border-2 border-ink bg-white text-ink shadow-[7px_7px_0_0_var(--color-zest)]">
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  className="aspect-[430/240] w-full border-b-2 border-ink object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[1.65rem] leading-[1.08] font-extrabold">{c.line}</h3>
                  {c.sub && <p className="mt-2 text-[0.92rem] font-semibold text-ink-3">{c.sub}</p>}
                  {c.cta && (
                    <div className="mt-auto pt-5">
                      <Button href={c.cta.href} variant="ink" size="sm">
                        {c.cta.label}
                      </Button>
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-8 border-t border-white/15 pt-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-zest">For more details</p>
            <a
              href={contact.phoneHref}
              className="mt-3 block font-display text-[2.2rem] leading-none font-extrabold transition-colors hover:text-zest sm:text-5xl"
            >
              {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="mt-3 inline-block break-all text-[1.05rem] font-semibold text-white/75 underline decoration-zest decoration-2 underline-offset-4 transition-colors hover:text-white"
            >
              {contact.email}
            </a>
          </div>

          <div className="rounded-4xl border-2 border-white/20 bg-white/[0.06] p-7">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-zest">Employers</p>
            <h2 className="mt-3 text-[1.9rem] leading-[1.08] font-extrabold sm:text-[2.2rem]">
              Are you looking for staff?
            </h2>
            <p className="mt-3 text-[1rem] text-white/70">Full-time, part-time or Parachute positions?</p>
            <div className="mt-6">
              <Button href="/employers" variant="zest" size="md">
                For employers
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
