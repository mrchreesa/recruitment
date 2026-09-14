import type { Metadata } from "next";
import { Accordion } from "@/components/accordion";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { SectorGrid } from "@/components/sections/sector-grid";
import { Steps } from "@/components/sections/steps";
import { SeekerTestimonials } from "@/components/sections/testimonials";
import { Button, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { seekerFaqs, seekerSteps } from "@/lib/content";
import { photo } from "@/lib/images";

export const metadata: Metadata = {
  title: "For job seekers",
  description:
    "Free help finding work across the North West. Upload your CV, get a call from a real consultant within 24 hours, and start earning. No fees, ever.",
};

const perks = [
  {
    title: "It costs you nothing",
    body: "Not a registration fee, not a CV fee, not a percentage of your wages. Employers pay us — you never do. That's the law, and we're glad of it.",
    tint: "bg-zest",
  },
  {
    title: "Free CV build",
    body: "Turn up with nothing and we'll write one with you over the phone in about twenty minutes. Most people have never been shown how.",
    tint: "bg-white",
  },
  {
    title: "Paid weekly on temp",
    body: "Temporary work is paid every Friday, PAYE, with holiday accrued and pension auto-enrolment. Payslips in the app.",
    tint: "bg-coral-soft",
  },
  {
    title: "Interview prep that helps",
    body: "What they'll ask, what to wear, where the entrance is, what the manager's like. The small stuff that decides it.",
    tint: "bg-white",
  },
  {
    title: "No experience needed",
    body: "Loads of our clients train from scratch. Warehouse, care, hospitality and production all take first-timers every single week.",
    tint: "bg-butter-soft",
  },
  {
    title: "We don't ghost people",
    body: "You get a yes or a no with a reason. If a client passes, we tell you why and put you forward somewhere else.",
    tint: "bg-white",
  },
];

const rights = [
  {
    q: "An agency can never charge you to find you work",
    a: "The Conduct of Employment Agencies Regulations make it illegal. If anyone asks you for money to get you a job, walk away and report them.",
  },
  {
    q: "You get holiday pay on temp work",
    a: "Agency workers accrue statutory holiday from day one. It shows on your payslip and you can book it.",
  },
  {
    q: "After 12 weeks you get equal terms",
    a: "Agency Worker Regulations mean that after 12 weeks in the same role you're entitled to the same basic pay and conditions as a directly employed person doing that job.",
  },
  {
    q: "You can say no to a shift",
    a: "Turning down a placement doesn't put you to the back of any queue. We'd rather you were honest about what you can do.",
  },
];

export default function JobSeekersPage() {
  return (
    <>
      <PageHero
        tone="coral"
        eyebrow="For job seekers"
        title={
          <>
            Stop applying
            <br />
            into the void.
            <br />
            <span className="text-zest">Start earning.</span>
          </>
        }
        lead="One short form, one real phone call, and a consultant whose actual job is getting you into work you'll stick at. Free for you — always has been, always will be."
        primary={{ href: "/upload-cv", label: "Upload your CV" }}
        secondary={{ href: "#how", label: "See how it works" }}
        image={photo.seekerD({ w: 900, h: 1100 })}
        imageAlt="A young woman ready for her first day at work"
        pills={["No fees ever", "Call back in 24 hrs", "Temp, part-time & permanent"]}
      />

      <Perks />

      <div id="how">
        <Steps
          eyebrow="How it works"
          title={
            <>
              From CV to first shift in about <span className="marker-zest">a week</span>
            </>
          }
          lead="Here's exactly what happens after you hit send. No mystery, no waiting around wondering."
          steps={seekerSteps}
        />
      </div>

      <SectorGrid heading />
      <Rights />
      <SeekerTestimonials />
      <Faqs />
      <CtaBand />
    </>
  );
}

function Perks() {
  return (
    <section className="border-b-2 border-ink bg-bone py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What you actually get"
          title={
            <>
              Six reasons this beats
              <br />
              scrolling job boards at 1am
            </>
          }
          className="max-w-2xl"
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((p, i) => (
            <Reveal as="li" key={p.title} delay={(i % 3) * 70}>
              <article
                className={`flex h-full flex-col rounded-4xl border-2 border-ink ${p.tint} p-7 transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-block-lg`}
              >
                <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-ink bg-white/80 font-display text-[0.85rem] font-extrabold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-[1.2rem] leading-tight font-extrabold">{p.title}</h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-2">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Rights() {
  return (
    <section className="grain border-b-2 border-ink bg-grape py-16 text-white sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              tone="light"
              eyebrow="Know where you stand"
              title={
                <>
                  Your rights,
                  <br />
                  in plain English
                </>
              }
              lead="Agency work has a reputation, and some of it's earned. Here's what you're legally entitled to, so nobody can pull a fast one."
            />
            <div className="mt-8 overflow-hidden rounded-5xl border-2 border-ink shadow-block-lg">
              <img
                src={photo.teamTable({ w: 900, h: 620 })}
                alt="A team of colleagues working together around a table"
                loading="lazy"
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
          </div>

          <ul className="flex flex-col gap-4">
            {rights.map((r, i) => (
              <Reveal as="li" key={r.q} delay={i * 70}>
                <div className="flex gap-4 rounded-4xl border-2 border-white/15 bg-white/[0.05] p-6 transition-colors duration-200 hover:border-zest">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-zest">
                    <svg viewBox="0 0 16 16" className="h-4 w-4 text-zest" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8.5l3.5 3.5L13 4.5" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-[1.02rem] leading-snug font-extrabold">{r.q}</h3>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-white/65">{r.a}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function Faqs() {
  return (
    <section id="faqs" className="border-b-2 border-ink bg-cream py-16 sm:py-24">
      <Container size="narrow">
        <SectionHeading
          align="center"
          eyebrow="Job seeker FAQs"
          title="Ask us anything"
          lead="And if it's not here, ring the office — someone will pick up."
        />
        <Accordion items={seekerFaqs} className="mt-12" />
      </Container>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="bg-bone py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-9 rounded-5xl border-2 border-ink bg-zest p-8 shadow-block-lg sm:p-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <Eyebrow tone="grape">Two minutes, honestly</Eyebrow>
            <h2 className="mt-4 text-[2.1rem] leading-[1.03] font-extrabold sm:text-5xl">
              Right — let&rsquo;s get your CV over.
            </h2>
            <p className="mt-4 max-w-lg text-[1rem] leading-relaxed text-ink/75">
              Haven&rsquo;t got one? Doesn&rsquo;t matter. Tick the box on the form and we&rsquo;ll build
              one with you on the phone.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Button href="/upload-cv" variant="ink" size="lg" full>
              Upload your CV
            </Button>
            <Button href="/contact" variant="outline" size="lg" full arrow={false}>
              Ask a question first
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
