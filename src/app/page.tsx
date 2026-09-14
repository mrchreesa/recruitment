import { Accordion } from "@/components/accordion";
import { Reveal } from "@/components/reveal";
import { DualPath } from "@/components/sections/dual-path";
import { LogoWall } from "@/components/sections/logo-wall";
import { SectorGrid } from "@/components/sections/sector-grid";
import { StatsBand } from "@/components/sections/stats-band";
import { Steps } from "@/components/sections/steps";
import { SeekerTestimonials } from "@/components/sections/testimonials";
import { Button, Container, Eyebrow, Marquee, Pill, SectionHeading } from "@/components/ui";
import { marqueeTerms, seekerFaqs, seekerSteps } from "@/lib/content";
import { photo } from "@/lib/images";

export default function HomePage() {
  return (
    <>
      <Hero />

      <div className="border-b-2 border-ink bg-ink py-3.5 text-zest">
        <Marquee items={marqueeTerms} />
      </div>

      <LogoWall />
      <DualPath />
      <StatsBand />

      <Steps
        eyebrow="How it works"
        title={
          <>
            Four steps. About <span className="marker-zest">a week</span>.
          </>
        }
        lead="No endless portals, no application black hole, no being ghosted. A person picks up your CV and rings you."
        steps={seekerSteps}
      />

      <SectorGrid />
      <SeekerTestimonials />
      <EmployerBand />
      <HomeFaqs />
    </>
  );
}

/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="grain relative overflow-hidden border-b-2 border-ink bg-bone">
      <div className="pointer-events-none absolute -top-24 -right-24 h-[20rem] w-[20rem] rounded-full bg-grape/10 blur-3xl sm:-top-40 sm:-right-32 sm:h-[34rem] sm:w-[34rem]" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-[18rem] w-[18rem] rounded-full bg-zest/15 blur-3xl sm:-bottom-52 sm:-left-40 sm:h-[30rem] sm:w-[30rem]" />

      <Container className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Copy */}
          <div className="animate-rise">
            <Pill tone="coral" className="px-3.5 py-1.5">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-coral" />
              Now placing across Greater Manchester &amp; the North
            </Pill>

            <h1 className="mt-6 text-[2.9rem] leading-[0.94] font-extrabold tracking-[-0.035em] sm:text-[4.2rem] lg:text-[4.9rem]">
              Get a job you&rsquo;ll{" "}
              <span className="marker-zest">actually</span>
              <br className="hidden sm:block" /> turn up for.
            </h1>

            <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-ink-2 sm:text-[1.18rem]">
              We&rsquo;re a recruitment agency for people who are sick of applying into the void.
              Send us your CV, get a call from an actual human inside 24 hours, and start earning.
              It costs you nothing. Ever.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/upload-cv" variant="zest" size="lg">
                Upload your CV — it&rsquo;s free
              </Button>
              <Button href="/employers" variant="outline" size="lg" arrow={false}>
                I&rsquo;m hiring staff
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-line pt-7">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[
                    photo.seekerC({ w: 120, h: 120 }),
                    photo.seekerB({ w: 120, h: 120 }),
                    photo.seekerF({ w: 120, h: 120 }),
                    photo.seekerE({ w: 120, h: 120 }),
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      loading="lazy"
                      className="h-9 w-9 rounded-full border-2 border-bone object-cover"
                    />
                  ))}
                </div>
                <p className="text-[0.86rem] leading-tight font-semibold text-ink">
                  4,200+ placed
                  <span className="block font-normal text-ink-3">since 2019</span>
                </p>
              </div>

              <div className="h-9 w-px bg-line" aria-hidden="true" />

              <div className="flex items-center gap-2.5">
                <div className="flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 text-coral" fill="currentColor">
                      <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[0.86rem] leading-tight font-semibold text-ink">
                  4.9 / 5
                  <span className="block font-normal text-ink-3">from 380 reviews</span>
                </p>
              </div>
            </div>
          </div>

          {/* Collage */}
          <div className="relative mx-auto w-full max-w-[30rem] lg:max-w-none">
            <div className="relative aspect-[4/4.4] w-full">
              <div className="absolute top-0 right-0 h-[74%] w-[72%] rotate-[3deg] overflow-hidden rounded-5xl border-2 border-ink shadow-block-lg">
                <img
                  src={photo.seekerC({ w: 800, h: 1000 })}
                  alt="A young woman smiling on her first day at a new job"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-0 h-[58%] w-[58%] -rotate-[4deg] overflow-hidden rounded-5xl border-2 border-ink shadow-block-lg">
                <img
                  src={photo.warehouseTeam({ w: 700, h: 800 })}
                  alt="Warehouse colleagues walking the aisles on shift"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute top-[5%] left-[1%] animate-float rounded-2xl border-2 border-ink bg-white px-3.5 py-2.5 shadow-block rotate-[-6deg] sm:left-[-2%] sm:px-4 sm:py-3">
                <p className="text-[0.68rem] font-bold uppercase tracking-wider text-ink-3">
                  Avg. first call
                </p>
                <p className="font-display text-xl font-extrabold leading-none sm:text-2xl">
                  17 hrs
                </p>
              </div>

              <div
                className="absolute bottom-[22%] right-[1%] animate-float rounded-2xl border-2 border-ink bg-zest px-3.5 py-2.5 shadow-block rotate-[5deg] sm:right-[-3%] sm:px-4 sm:py-3"
                style={{ animationDelay: "1.4s" }}
              >
                <p className="text-[0.68rem] font-bold uppercase tracking-wider text-ink/60">
                  Live rates
                </p>
                <p className="font-display text-[1.05rem] font-extrabold leading-none sm:text-xl">
                  £12.21 – £24/hr
                </p>
              </div>

              <div
                className="absolute bottom-[2%] right-[8%] flex animate-float items-center gap-2 rounded-full border-2 border-ink bg-coral px-3.5 py-2 shadow-block sm:right-[14%] sm:px-4"
                style={{ animationDelay: "0.7s" }}
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-ink">
                  <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="#C4F542" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8.5l3.5 3.5L13 4.5" />
                  </svg>
                </span>
                <span className="text-[0.74rem] font-extrabold sm:text-[0.8rem]">No fees. Not ever.</span>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */

const employerPoints = [
  {
    title: "A shortlist, not a CV dump",
    body: "Four or five people who can actually do the job, each one right-to-work checked and referenced before you see them.",
  },
  {
    title: "One account manager",
    body: "Same name, same mobile number, every time. No being passed around a call centre when a shift falls through at 6am.",
  },
  {
    title: "Cover from 24 hours",
    body: "A live pool of 4,000+ vetted workers across warehouse, driving, care, hospitality and construction.",
  },
];

function EmployerBand() {
  return (
    <section className="grain relative overflow-hidden border-b-2 border-ink bg-grape-deep text-white">
      <div className="pointer-events-none absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-grape/40 blur-3xl" />
      <Container className="relative py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[5/4] overflow-hidden rounded-5xl border-2 border-ink shadow-block-lg">
              <img
                src={photo.teamGlassTable({ w: 1000, h: 800 })}
                alt="A hiring manager reviewing a shortlist with colleagues"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-3xl border-2 border-ink bg-zest px-6 py-4 text-ink shadow-block sm:-right-8">
              <p className="font-display text-4xl font-extrabold leading-none">48 hrs</p>
              <p className="mt-1 text-[0.74rem] font-bold uppercase tracking-wider text-ink/60">
                to first shortlist
              </p>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Eyebrow tone="light">For employers</Eyebrow>
            <h2 className="mt-5 text-[2.2rem] leading-[1.02] font-extrabold sm:text-5xl lg:text-[3.3rem]">
              Need people who
              <br />
              turn up and stay?
            </h2>
            <p className="mt-5 max-w-lg text-[1.02rem] leading-relaxed text-white/70">
              We do the sifting, screening and chasing so your managers can get on with running the
              place. 91% of our placements are still in role at six months.
            </p>

            <ul className="mt-9 flex flex-col gap-5">
              {employerPoints.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 80}>
                  <div className="flex gap-4 border-t border-white/12 pt-5">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 border-zest text-[0.72rem] font-extrabold text-zest">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-[1.05rem] font-extrabold">{p.title}</h3>
                      <p className="mt-1.5 text-[0.92rem] leading-relaxed text-white/60">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/employers" variant="zest" size="lg">
                Send us a brief
              </Button>
              <Button href="/book" variant="outlineLight" size="lg" arrow={false}>
                Book a consultation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function HomeFaqs() {
  return (
    <section className="bg-bone py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Straight answers"
              title={
                <>
                  The stuff
                  <br />
                  everyone asks
                </>
              }
              lead="No small print, no catch. If your question isn't here, ring us and ask it."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start">
              <Button href="/job-seekers#faqs" variant="grape" size="md">
                All job seeker FAQs
              </Button>
              <Button href="/employers#faqs" variant="outline" size="md" arrow={false}>
                Employer FAQs
              </Button>
            </div>
          </div>
          <Accordion items={seekerFaqs.slice(0, 5)} />
        </div>
      </Container>
    </section>
  );
}
