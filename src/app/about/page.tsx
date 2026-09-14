import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { LogoWall } from "@/components/sections/logo-wall";
import { PageHero } from "@/components/sections/page-hero";
import { StatsBand } from "@/components/sections/stats-band";
import { Button, Container, Eyebrow, Pill, SectionHeading } from "@/components/ui";
import { accreditations } from "@/lib/content";
import { photo } from "@/lib/images";

export const metadata: Metadata = {
  title: "About us",
  description:
    "We started LOGO in 2019 because the hiring system was failing young people and frustrating employers. Here's how we work and who we are.",
};

const values = [
  {
    icon: "£0",
    title: "Free for workers. Full stop.",
    body: "It's illegal to charge a work-seeker in the UK, and plenty of people still don't know that. We say it loudly because it matters.",
    tint: "bg-zest-soft",
  },
  {
    icon: "24h",
    title: "We ring you back",
    body: "Every single registration gets a call from a named consultant within one working day. Not an auto-reply. A phone call.",
    tint: "bg-coral-soft",
  },
  {
    icon: "No",
    title: "We'll tell you no",
    body: "If a role isn't right for you, or a candidate isn't right for a client, we say so. Short-term placements that fall over help nobody.",
    tint: "bg-butter-soft",
  },
  {
    icon: "1st",
    title: "First jobs welcome",
    body: "A third of the people we place have never had a permanent contract before. No experience isn't a problem — it's the whole point.",
    tint: "bg-grape-soft",
  },
];

const team = [
  {
    name: "Amara Bright",
    role: "Founder & Managing Director",
    bio: "Fifteen years in industrial recruitment. Started the agency after watching too many capable 19-year-olds get filtered out by an algorithm.",
    photo: photo.seekerA({ w: 600, h: 700 }),
  },
  {
    name: "Tom Rafferty",
    role: "Head of Employer Partnerships",
    bio: "Looks after the client side — briefs, rates, service levels. Used to run a 400-person distribution site, so he knows what a bad agency feels like.",
    photo: photo.seekerG({ w: 600, h: 700 }),
  },
  {
    name: "Nadia Hussain",
    role: "Youth Employment Lead",
    bio: "Runs our college partnerships, CV clinics and mock interview sessions. If you've got no CV and no clue, Nadia's your person.",
    photo: photo.seekerH({ w: 600, h: 700 }),
  },
  {
    name: "Dean Okoro",
    role: "Compliance & Payroll Manager",
    bio: "Right-to-work, DBS, CSCS, AWR, weekly payroll. Unglamorous, absolutely essential, and he has never once missed a pay run.",
    photo: photo.seekerE({ w: 600, h: 700 }),
  },
];

const milestones = [
  { year: "2019", text: "Founded above a print shop in Ancoats with two desks and one client." },
  { year: "2021", text: "First college partnership launched. 300 young people through CV clinics." },
  { year: "2023", text: "Opened the Manchester office. Passed 2,000 placements." },
  { year: "2026", text: "4,200+ placed, 90 active client sites, still ringing everyone back." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Built for the people
            <br />
            the system keeps
            <br />
            <span className="text-zest">filtering out.</span>
          </>
        }
        lead="We're a Manchester recruitment agency with a simple bias: young people are not a risk to be managed, they're the best hire most employers aren't making."
        primary={{ href: "/upload-cv", label: "Upload your CV" }}
        secondary={{ href: "/contact", label: "Come and say hello" }}
        image={photo.teamHappy({ w: 900, h: 1100 })}
        imageAlt="The team laughing together around a laptop in the office"
        pills={["Founded 2019", "Manchester based", "REC corporate member"]}
      />

      <Story />
      <StatsBand tone="bone" />
      <Values />
      <Team />
      <LogoWall label="A few of the employers we work with" />
      <Accreditations />
    </>
  );
}

function Story() {
  return (
    <section className="border-b-2 border-ink bg-cream py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title={
                <>
                  It started with a
                  <br />
                  <span className="marker-coral">stack of CVs</span> nobody read
                </>
              }
            />
            <div className="mt-7 flex flex-col gap-5 text-[1.02rem] leading-relaxed text-ink-2">
              <p>
                Our founder spent years placing people into warehouses and factories across Greater
                Manchester, and kept hitting the same wall: brilliant 19, 21, 24-year-olds with
                nothing wrong with them except a thin CV and no one willing to make the first call.
              </p>
              <p>
                Meanwhile the clients on the other end of the phone were desperate. Shifts unfilled,
                agencies sending whoever was nearest, turnover through the roof. Two problems that
                were obviously the same problem.
              </p>
              <p>
                So we built an agency around the bit everyone else skips — actually talking to
                people. Every registration gets a call. Every brief gets a named manager. Nobody
                gets sent somewhere we wouldn&rsquo;t send a mate.
              </p>
              <p className="font-semibold text-ink">
                Seven years on, that&rsquo;s still the whole model. It just happens at a bigger scale.
              </p>
            </div>

            <ol className="mt-10 flex flex-col">
              {milestones.map((m, i) => (
                <Reveal
                  as="li"
                  key={m.year}
                  delay={i * 70}
                  className="border-l-2 border-ink/15 pb-8 last:border-transparent last:pb-0"
                >
                  <div className="flex flex-col gap-1.5 pl-7 sm:flex-row sm:items-baseline sm:gap-6">
                    <span className="relative shrink-0 sm:w-16">
                      <span className="absolute -left-[calc(1.75rem+6px)] top-[0.45rem] h-3 w-3 rounded-full border-2 border-ink bg-zest" />
                      <span className="font-display text-xl font-extrabold text-grape">{m.year}</span>
                    </span>
                    <p className="text-[0.95rem] leading-relaxed text-ink-2">{m.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-5">
            <div className="overflow-hidden rounded-5xl border-2 border-ink shadow-block-lg">
              <img
                src={photo.hospitalityServer({ w: 800, h: 700 })}
                alt="A hospitality worker taking an order during a shift"
                loading="lazy"
                className="aspect-[7/6] w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="overflow-hidden rounded-4xl border-2 border-ink">
                <img
                  src={photo.retailTill({ w: 500, h: 500 })}
                  alt="A retail worker smiling behind the till"
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center rounded-4xl border-2 border-ink bg-grape p-6 text-white">
                <p className="font-display text-4xl font-extrabold leading-none">91%</p>
                <p className="mt-2 text-[0.85rem] leading-snug text-white/70">
                  of the people we place are still in the role six months later
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Values() {
  return (
    <section className="border-b-2 border-ink bg-bone py-16 sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="What we stand on"
          title="Four things we won't budge on"
          lead="They're not posters on a wall. They're the reasons people come back to us."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 70}>
              <article
                className={`flex h-full flex-col rounded-4xl border-2 border-ink ${v.tint} p-7 transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-block-lg`}
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl border-2 border-ink bg-white font-display text-xl font-extrabold">
                  {v.icon}
                </span>
                <h3 className="mt-5 text-[1.15rem] leading-tight font-extrabold">{v.title}</h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-2">{v.body}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="grain border-b-2 border-ink bg-grape-deep py-16 text-white sm:py-24">
      <Container>
        <div className="flex flex-col items-start gap-7 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            tone="light"
            eyebrow="The people you'll deal with"
            title={
              <>
                Small team.
                <br />
                Everyone answers their phone.
              </>
            }
            lead="You get a named consultant from day one — not a shared inbox and a ticket number."
            className="max-w-2xl"
          />
          <Button href="/contact" variant="zest" size="md" className="shrink-0">
            Get in touch
          </Button>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 70}>
              <article className="group flex h-full flex-col overflow-hidden rounded-4xl border-2 border-white/15 bg-white/[0.04] transition-colors duration-200 hover:border-zest">
                <div className="aspect-[5/6] overflow-hidden border-b-2 border-white/15">
                  <img
                    src={p.photo}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[1.05rem] font-extrabold">{p.name}</h3>
                  <p className="mt-1 text-[0.76rem] font-bold uppercase tracking-wider text-zest">
                    {p.role}
                  </p>
                  <p className="mt-3 text-[0.86rem] leading-relaxed text-white/60">{p.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Accreditations() {
  return (
    <section className="bg-bone py-16 sm:py-20">
      <Container>
        <div className="rounded-5xl border-2 border-ink bg-white p-8 shadow-block-lg sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <Eyebrow>Doing it properly</Eyebrow>
              <h2 className="mt-4 text-[1.9rem] leading-tight font-extrabold sm:text-4xl">
                Audited, accredited and insured
              </h2>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-2">
                Every placement carries a full compliance trail — digital right-to-work, references,
                sector tickets and AWR parity tracking. If you&rsquo;re ever audited, so are we, and
                we&rsquo;re ready.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {accreditations.map((a) => (
                <li
                  key={a}
                  className="flex items-center gap-3 rounded-2xl border-2 border-line bg-cream/50 px-4 py-3.5"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-ink bg-zest">
                    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="#14121A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8.5l3.5 3.5L13 4.5" />
                    </svg>
                  </span>
                  <span className="text-[0.88rem] font-bold">{a}</span>
                </li>
              ))}
              <li className="sm:col-span-2">
                <Pill tone="grape">£10m employer&rsquo;s &amp; public liability insurance</Pill>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
