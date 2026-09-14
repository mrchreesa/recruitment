import type { Metadata } from "next";
import { Accordion } from "@/components/accordion";
import { EmployerForm } from "@/components/forms/employer-form";
import { Reveal } from "@/components/reveal";
import { LogoWall } from "@/components/sections/logo-wall";
import { PageHero } from "@/components/sections/page-hero";
import { Steps } from "@/components/sections/steps";
import { EmployerTestimonials } from "@/components/sections/testimonials";
import { Button, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { employerFaqs, employerSteps } from "@/lib/content";
import { photo } from "@/lib/images";

export const metadata: Metadata = {
  title: "For employers",
  description:
    "Vetted, right-to-work checked staff across warehouse, driving, care, hospitality, construction and admin. Shortlists in 48 hours, cover from 24.",
};

const problems = [
  {
    pain: "Agencies send you forty CVs",
    fix: "We send four or five, each one screened, referenced and genuinely interviewable.",
  },
  {
    pain: "Nobody turns up on Monday",
    fix: "Every temp gets a confirmation call the night before and a check-in on arrival.",
  },
  {
    pain: "You never speak to the same person twice",
    fix: "One named account manager with a direct mobile. Out-of-hours line for shift cover.",
  },
  {
    pain: "Hidden uplifts on the invoice",
    fix: "A published rate card. Pay rate plus a fixed margin. No weekend surcharges you didn't agree.",
  },
];

const guarantees = [
  { v: "24 hrs", l: "Emergency shift cover" },
  { v: "48 hrs", l: "First vetted shortlist" },
  { v: "90 days", l: "Permanent placement rebate" },
  { v: "1 hr", l: "Callback on a new brief" },
];

export default function EmployersPage() {
  return (
    <>
      <PageHero
        eyebrow="For employers"
        title={
          <>
            Staff who turn up,
            <br />
            fit in and
            <br />
            <span className="text-zest">stay put.</span>
          </>
        }
        lead="We recruit across warehouse, driving, care, hospitality, construction, production, retail and admin — with a bias toward younger workers that most agencies quietly avoid. Our six-month retention is 91%."
        primary={{ href: "#brief", label: "Send us a brief" }}
        secondary={{ href: "/book", label: "Book a consultation" }}
        image={photo.handshakeLaptop({ w: 900, h: 1100 })}
        imageAlt="A hiring manager shaking hands with a new recruit"
        pills={["Shortlist in 48 hrs", "90-day rebate", "REC corporate member"]}
      />

      <Guarantees />
      <LogoWall label="Currently staffing 90+ sites across the North &amp; Midlands" />
      <Problems />

      <Steps
        eyebrow="How we work"
        title={
          <>
            A hiring process that
            <br />
            doesn&rsquo;t eat your week
          </>
        }
        lead="You give us fifteen minutes at the start. We do the rest and report back."
        steps={employerSteps}
        tone="dark"
      />

      <WhyYoung />
      <EmployerTestimonials />
      <BriefSection />
      <Faqs />
    </>
  );
}

function Guarantees() {
  return (
    <section className="border-b-2 border-ink bg-zest">
      <Container className="py-10 sm:py-12">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {guarantees.map((g, i) => (
            <Reveal key={g.l} delay={i * 60}>
              <div className="flex flex-col">
                <dt className="sr-only">{g.l}</dt>
                <dd className="font-display text-[2.2rem] leading-none font-extrabold sm:text-5xl">
                  {g.v}
                </dd>
                <p className="mt-2 text-[0.84rem] font-semibold text-ink/70">{g.l}</p>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}

function Problems() {
  return (
    <section className="border-b-2 border-ink bg-bone py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Let's be honest"
          title={
            <>
              You&rsquo;ve probably been
              <br />
              <span className="marker-coral">burned before</span>
            </>
          }
          lead="Four things clients tell us they hated about their last agency — and exactly what we do instead."
          className="max-w-2xl"
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {problems.map((p, i) => (
            <Reveal as="li" key={p.pain} delay={(i % 2) * 80}>
              <article className="flex h-full flex-col overflow-hidden rounded-4xl border-2 border-ink bg-white transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-block-lg">
                <div className="flex items-start gap-3 border-b-2 border-ink bg-coral-soft p-6">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-ink bg-white">
                    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="#FF6B5B" strokeWidth="3.2" strokeLinecap="round">
                      <path d="M4 4l8 8M12 4l-8 8" />
                    </svg>
                  </span>
                  <h3 className="text-[1.05rem] leading-snug font-extrabold">{p.pain}</h3>
                </div>
                <div className="flex flex-1 items-start gap-3 p-6">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-ink bg-zest">
                    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="#14121A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8.5l3.5 3.5L13 4.5" />
                    </svg>
                  </span>
                  <p className="text-[0.93rem] leading-relaxed text-ink-2">{p.fix}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function WhyYoung() {
  return (
    <section className="border-b-2 border-ink bg-cream py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-5xl border-2 border-ink shadow-block-lg">
              <img
                src={photo.warehouseBoxes({ w: 900, h: 750 })}
                alt="A young warehouse operative at work"
                loading="lazy"
                className="aspect-[6/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-3 rotate-[-3deg] rounded-3xl border-2 border-ink bg-white px-5 py-4 shadow-block sm:-left-6">
              <p className="font-display text-3xl font-extrabold leading-none text-grape">1 in 3</p>
              <p className="mt-1 max-w-[10rem] text-[0.76rem] leading-snug font-semibold text-ink-2">
                of our placements are someone&rsquo;s first permanent contract
              </p>
            </div>
          </Reveal>

          <div>
            <Eyebrow>The case for younger hires</Eyebrow>
            <h2 className="mt-5 text-[2.1rem] leading-[1.03] font-extrabold sm:text-5xl">
              The candidates
              <br />
              everyone else skips
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-[1rem] leading-relaxed text-ink-2">
              <p>
                A thin CV isn&rsquo;t a character flaw. Most 21-to-29-year-olds we place have had no
                one show them how to write one, let alone how to interview — and they get screened
                out before a human ever reads their name.
              </p>
              <p>
                We do the screening properly: a structured competency call, two references and a
                straight conversation about attitude, travel and reliability. Then we prep them
                before they walk into your building.
              </p>
              <p className="font-semibold text-ink">
                The result is a cohort that&rsquo;s cheaper to hire, quicker to train and — on our
                numbers — noticeably more likely to still be there in six months.
              </p>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#brief" variant="grape" size="lg">
                Tell us what you need
              </Button>
              <Button href="/services" variant="outline" size="lg" arrow={false}>
                See our services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function BriefSection() {
  return (
    <section className="border-b-2 border-ink bg-bone py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Send a brief"
              title={
                <>
                  Tell us what
                  <br />
                  you&rsquo;re short of
                </>
              }
              lead="Takes about ninety seconds. You'll get a call from your account manager within one working hour, and a shortlist inside 48."
            />

            <ul className="mt-8 flex flex-col gap-3">
              {[
                "No obligation and no cost to enquire",
                "Commercially confidential — we never approach your staff",
                "Rate card sent with your shortlist",
                "Out-of-hours cover line for live shifts",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[0.93rem] text-ink-2">
                  <span className="mt-[3px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full border-2 border-ink bg-zest">
                    <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="#14121A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8.5l3.5 3.5L13 4.5" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-9 rounded-4xl border-2 border-ink bg-grape p-6 text-white">
              <p className="text-[0.94rem] leading-relaxed text-white/80">
                Need someone on site tomorrow morning? Don&rsquo;t use the form —
              </p>
              <Button href="/book" variant="zest" size="md" className="mt-4">
                Book an urgent call
              </Button>
            </div>
          </div>

          <Reveal>
            <EmployerForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Faqs() {
  return (
    <section id="faqs" className="bg-cream py-16 sm:py-24">
      <Container size="narrow">
        <SectionHeading
          align="center"
          eyebrow="Employer FAQs"
          title="The practical questions"
          lead="Rates, compliance, replacements and speed. If it's not covered, ask us directly."
        />
        <Accordion items={employerFaqs} className="mt-12" />
      </Container>
    </section>
  );
}
