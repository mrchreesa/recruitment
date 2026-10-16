import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { Button, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { photo } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Parachute Positions explained",
  description:
    "Why employers offer Volunteer Parachute Positions of 9 hours a week, who they suit, and what £100 weekly expenses can cover. Croydon & South London.",
  path: "/parachute-positions",
});

/* Copy from the client's "Addition to the Website" brief (11-10-26). */

const employerReasons = [
  "To give an individual returning to work, or a youth starting out, the opportunity to prove themselves before employing them full-time.",
  "Only required for a short-term position.",
  "To fill a holiday job period.",
  "You would prefer a more experienced person, but can only offer short hours or occasional days.",
  "To offer a senior role on a part-time basis.",
  "You require a number of people, covering a number of positions, but only for a specific upcoming event.",
  "You require someone to fill in for a maternity leave period only.",
  "You need someone capable to cover a more senior role during your own or a senior colleague’s absence.",
  "You are looking to fill basic start-up positions, warehouse duties, shelf-filling roles, general cleaning or odd-job positions — short-term only.",
];

const employerHeadlines = ["No National Insurance", "No tax", "No payroll", "Expenses only of £100 per week"];

const employerAdvantages = [
  "To experience a person’s suitability before offering a permanent contract.",
  "To cover for absence.",
  "Short-term position with set hours to suit.",
  "No long-term commitment.",
];

const seekerFits = [
  "Youths happy to trial different placements, after-hours clearing up or cleaning tasks, or early morning packing, distribution or repetitive work.",
  "Parents and carers returning to work, with suitable set hours, to continue family life and school runs.",
  "Veterans or disabled people looking for occasional reception duties, telephone work or accountancy roles, where abilities and skills are valued above age or disability.",
  "Weekend shop assistant work.",
  "Evening work in pubs or restaurants.",
];

const expenseUses = [
  "Help to upgrade qualifications or start basic certification.",
  "Help with uniform or suitable attire for new positions.",
  "Help towards travel: bus or train fares, parking, car parks or congestion charges.",
];

export default function ParachutePositionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Volunteer Parachute Positions"
        title={
          <>
            Why a Parachute
            <br />
            <span className="text-zest">Position?</span>
          </>
        }
        lead="9 hours’ work per week, in a rotation to suit, with £100 expenses paid at the end of every week. Here’s why it works for employers and job seekers alike."
        primary={{ href: "#employers", label: "I’m an employer" }}
        secondary={{ href: "#job-seekers", label: "I’m looking for work" }}
        image={photo.warehouseTeam({ w: 900, h: 1100 })}
        imageAlt="Warehouse staff in hi-vis walking through a bright distribution centre"
        pills={["9 hrs per week", "£100 expenses per week", "3-month revolving position"]}
      />

      <Employers />
      <JobSeekers />
      <Overall />
    </>
  );
}

function Check() {
  return (
    <span className="mt-[5px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full border-2 border-ink bg-zest">
      <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="#14121A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8.5l3.5 3.5L13 4.5" />
      </svg>
    </span>
  );
}

function Employers() {
  return (
    <section id="employers" className="scroll-mt-[4.5rem] border-b-2 border-ink bg-bone py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="For employers"
          title={
            <>
              Why would you offer a Parachute Position for only{" "}
              <span className="marker-zest">9 hours&rsquo; work</span> per week?
            </>
          }
          className="max-w-4xl"
        />

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {employerReasons.map((reason, i) => (
            <Reveal as="li" key={reason} delay={(i % 3) * 70}>
              <article className="flex h-full flex-col rounded-4xl border-2 border-ink bg-white p-6 transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-block-lg sm:p-7">
                <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-ink bg-grape-soft font-display text-[0.85rem] font-extrabold text-grape">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-2">{reason}</p>
              </article>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14">
          <div className="grain relative overflow-hidden rounded-5xl border-2 border-ink bg-grape p-7 text-white shadow-block-lg sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
              <div>
                <Eyebrow tone="light">Advantages</Eyebrow>
                <h3 className="mt-4 text-[1.9rem] leading-[1.05] font-extrabold sm:text-[2.4rem]">
                  Advantages of using Volunteer Parachute Candidates
                </h3>
                <ul className="mt-7 flex flex-wrap gap-2.5">
                  {employerHeadlines.map((h) => (
                    <li
                      key={h}
                      className="rounded-full border-2 border-ink bg-zest px-4 py-2 text-[0.9rem] font-bold text-ink"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-between gap-8">
                <ul className="flex flex-col gap-3.5">
                  {employerAdvantages.map((a) => (
                    <li key={a} className="flex items-start gap-3 text-[1rem] leading-relaxed text-white/85">
                      <Check />
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button href="/employers#brief" variant="zest" size="lg">
                    Send us a brief
                  </Button>
                  <Button href="/register#employer" variant="outlineLight" size="lg" arrow={false}>
                    Register your company
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function JobSeekers() {
  return (
    <section id="job-seekers" className="scroll-mt-[4.5rem] border-b-2 border-ink bg-cream py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="For job seekers"
              title={
                <>
                  Looking for a
                  <br />
                  <span className="marker-coral">Parachute Position?</span>
                </>
              }
            />
            <ul className="mt-9 flex flex-col gap-4">
              {seekerFits.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[1.02rem] leading-relaxed text-ink-2">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/upload-cv" variant="grape" size="lg">
                Upload your CV
              </Button>
              <Button href="/register#candidate" variant="outline" size="lg" arrow={false}>
                Registration pack
              </Button>
            </div>
          </div>

          <Reveal className="lg:pt-4">
            <div className="rounded-4xl border-2 border-ink bg-zest p-7 shadow-block-lg sm:p-9">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-ink/60">
                What will £100 expenses cover?
              </p>
              <p className="mt-2 font-display text-6xl leading-none font-extrabold">
                £100
                <span className="ml-2 text-2xl font-bold">per week</span>
              </p>
              <ol className="mt-7 flex flex-col gap-3">
                {expenseUses.map((u, i) => (
                  <li
                    key={u}
                    className="flex items-start gap-4 rounded-3xl border-2 border-ink bg-white p-5 text-[0.95rem] leading-relaxed text-ink-2"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 border-ink bg-grape font-display text-[0.8rem] font-extrabold text-white">
                      {["i", "ii", "iii"][i]}
                    </span>
                    {u}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Overall() {
  return (
    <section className="bg-bone py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-9 rounded-5xl border-2 border-ink bg-white p-8 shadow-block-lg sm:p-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <Eyebrow>Overall</Eyebrow>
            <p className="mt-4 font-display text-[1.45rem] leading-snug font-extrabold sm:text-[1.9rem]">
              This is an opportunity to commence work with short set hours to suit, in a new role,
              gaining experience and proving your worth and commitment to an employer, whilst
              improving your CV and positioning yourself above other applicants.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Button href="/upload-cv" variant="ink" size="lg" full>
              Upload your CV
            </Button>
            <Button href="/employers#brief" variant="outline" size="lg" full arrow={false}>
              I need staff
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
