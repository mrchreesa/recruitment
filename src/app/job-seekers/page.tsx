import { Accordion } from "@/components/accordion";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { SectorGrid } from "@/components/sections/sector-grid";
import { Steps } from "@/components/sections/steps";
import { Button, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { seekerFaqs, seekerSteps } from "@/lib/content";
import { JsonLd } from "@/components/json-ld";
import { faqJsonLd } from "@/lib/seo";
import { photo } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "For job seekers",
  description:
    "Volunteer Parachute Positions in Croydon & South London. Upload your CV, get a call back within 24 hours and receive £100 expenses at the end of every week.",
  path: "/job-seekers",
});

const perks = [
  {
    title: "One fee, then nothing",
    body: "After your Registration Pack there are no further fees at any time — not a CV fee, not a percentage of your wages.",
    tint: "bg-zest",
  },
  {
    title: "Free CV build",
    body: "Turn up with nothing and we'll write one with you over the phone in about twenty minutes. Most people have never been shown how.",
    tint: "bg-white",
  },
  {
    title: "Expenses paid",
    body: "Expenses for Volunteer Parachute Positions are paid by the employer at the end of every weekly task.",
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
    body: "You receive a yes or a no with a reason. If a candidate isn't successful, we tell you why and put you forward somewhere else.",
    tint: "bg-white",
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
        lead="One short form, one real phone call, and a consultant whose actual job is getting you into work. Specialising in Volunteer Parachute Positions — with £100 expenses paid at the end of every week."
        primary={{ href: "/upload-cv", label: "Upload your CV" }}
        secondary={{ href: "#how", label: "See how it works" }}
        image={photo.seekerD({ w: 900, h: 1100 })}
        imageAlt="A young woman ready for her first day at work"
        pills={["Specialising in Volunteer Parachute Positions", "Call back in 24 hours"]}
      />

      <Perks />

      <div id="how">
        <Steps
          eyebrow="How it works"
          title={
            <>
              From CV to your first <span className="marker-zest">Parachute Position</span>
            </>
          }
          lead="Here's exactly what happens after you hit send. No mystery, no waiting around wondering."
          steps={seekerSteps}
        />
      </div>

      <SectorGrid heading />
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
        <JsonLd data={faqJsonLd(seekerFaqs)} />
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
