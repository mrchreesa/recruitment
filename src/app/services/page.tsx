import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { SectorGrid } from "@/components/sections/sector-grid";
import { Button, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { services } from "@/lib/content";
import { photo } from "@/lib/images";

export const metadata: Metadata = {
  title: "Recruitment services",
  description:
    "Temporary, temp-to-perm, permanent, volume ramp-up, youth employment programmes and full compliance and payroll — from one agency, one account manager.",
};

const surfaces = {
  grape: { card: "bg-grape-soft", chip: "bg-grape text-white" },
  coral: { card: "bg-coral-soft", chip: "bg-coral text-ink" },
  butter: { card: "bg-butter-soft", chip: "bg-butter text-ink" },
  zest: { card: "bg-zest-soft", chip: "bg-zest text-ink" },
} as const;

const comparison = {
  head: ["", "Temporary", "Temp-to-perm", "Permanent"],
  rows: [
    ["Typical time to start", "24 – 72 hrs", "3 – 7 days", "2 – 4 weeks"],
    ["Who employs them", "We do", "We do, then you", "You do"],
    ["You're invoiced", "Weekly, hourly", "Weekly, then a fee", "One fixed fee"],
    ["Payroll & AWR", "Handled by us", "Handled by us", "Your payroll"],
    ["Replacement cover", "Same day", "Same day", "90-day rebate"],
    ["Best for", "Peaks & absence", "Testing a fit", "Roles you must get right"],
  ],
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Recruitment services"
        title={
          <>
            One agency.
            <br />
            Every shape
            <br />
            of <span className="text-zest">hire.</span>
          </>
        }
        lead="From a single shift covered at 6am to a 300-person site ramp-up, it runs through the same account manager and the same compliance standard."
        primary={{ href: "/book", label: "Book a consultation" }}
        secondary={{ href: "/employers#brief", label: "Send a brief" }}
        image={photo.warehouseAisle({ w: 900, h: 1100 })}
        imageAlt="A large distribution warehouse"
        pills={["Temporary", "Temp-to-perm", "Permanent", "Volume", "Payroll"]}
      />

      <ServiceGrid />
      <Comparison />
      <SectorGrid heading />
      <Process />
    </>
  );
}

function ServiceGrid() {
  return (
    <section className="border-b-2 border-ink bg-bone py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Six services,
              <br />
              no bolt-on surprises
            </>
          }
          lead="Mix them however you like. Most clients start with one and end up using three."
          className="max-w-2xl"
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const skin = surfaces[s.tint];
            return (
              <Reveal as="li" key={s.slug} delay={(i % 3) * 70}>
                <article
                  className={`flex h-full flex-col rounded-4xl border-2 border-ink ${skin.card} p-7 transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-block-lg`}
                >
                  <span
                    className={`self-start rounded-full border-2 border-ink ${skin.chip} px-3 py-1 text-[0.7rem] font-extrabold uppercase tracking-wider`}
                  >
                    {s.tag}
                  </span>
                  <h3 className="mt-5 text-[1.35rem] leading-tight font-extrabold">{s.name}</h3>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-2">{s.body}</p>

                  <ul className="mt-6 flex flex-col gap-2.5 border-t-2 border-ink/10 pt-5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[0.87rem] font-medium">
                        <span className="mt-[3px] grid h-[17px] w-[17px] shrink-0 place-items-center rounded-full border-2 border-ink bg-white">
                          <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="#14121A" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 8.5l3.5 3.5L13 4.5" />
                          </svg>
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

function Comparison() {
  return (
    <section className="grain border-b-2 border-ink bg-grape-deep py-16 text-white sm:py-24">
      <Container>
        <SectionHeading
          tone="light"
          eyebrow="Which one do I need?"
          title="Side by side, no jargon"
          lead="Still unsure? Book a call and we'll tell you honestly which route costs you least."
          className="max-w-2xl"
        />

        <div className="mt-12 overflow-x-auto rounded-4xl border-2 border-white/15">
          <table className="w-full min-w-[42rem] border-collapse text-left">
            <thead>
              <tr className="bg-white/[0.07]">
                {comparison.head.map((h, i) => (
                  <th
                    key={h || i}
                    scope="col"
                    className={`px-5 py-4 font-display text-[0.95rem] font-extrabold ${
                      i === 0 ? "text-white/50" : "text-zest"
                    }`}
                  >
                    {h || " "}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row[0]} className="border-t border-white/10">
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      className={`px-5 py-4 text-[0.9rem] ${
                        i === 0 ? "font-bold text-white/70" : "text-white/90"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/book" variant="zest" size="lg">
            Talk it through with us
          </Button>
          <Button href="/employers#brief" variant="outlineLight" size="lg" arrow={false}>
            Just send the brief
          </Button>
        </div>
      </Container>
    </section>
  );
}

function Process() {
  const items = [
    {
      t: "Compliance as standard",
      b: "Digital right-to-work, two references, DBS and CSCS verification where needed, and AWR parity tracked from week one.",
    },
    {
      t: "Transparent rates",
      b: "A published rate card. Pay rate plus a fixed margin. No weekend uplift you didn't agree to, no invoice surprises.",
    },
    {
      t: "Reporting you'll actually read",
      b: "Weekly fill rate, attendance, retention and spend — one page, in your inbox every Monday morning.",
    },
  ];

  return (
    <section className="bg-bone py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-5xl border-2 border-ink shadow-block-lg">
              <img
                src={photo.deskPair({ w: 900, h: 760 })}
                alt="Two colleagues reviewing hiring data on a monitor"
                loading="lazy"
                className="aspect-[6/5] w-full object-cover"
              />
            </div>
            <div className="absolute -top-5 -right-3 rotate-[4deg] rounded-3xl border-2 border-ink bg-zest px-5 py-4 shadow-block sm:-right-6">
              <p className="font-display text-2xl font-extrabold leading-none">Mondays</p>
              <p className="mt-1 text-[0.74rem] font-bold uppercase tracking-wider text-ink/60">
                Your report lands
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Eyebrow>Behind the scenes</Eyebrow>
            <h2 className="mt-5 text-[2.1rem] leading-[1.03] font-extrabold sm:text-5xl">
              The boring bits,
              <br />
              done properly
            </h2>
            <ul className="mt-8 flex flex-col gap-6">
              {items.map((it, i) => (
                <Reveal as="li" key={it.t} delay={i * 80}>
                  <div className="border-t-2 border-line pt-5">
                    <h3 className="text-[1.08rem] font-extrabold">{it.t}</h3>
                    <p className="mt-2 text-[0.94rem] leading-relaxed text-ink-2">{it.b}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Button href="/contact" variant="grape" size="lg" className="mt-9">
              Ask for the rate card
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
