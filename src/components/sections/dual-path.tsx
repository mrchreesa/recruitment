import { photo } from "@/lib/images";
import { contact } from "@/lib/content";
import { Button, Container, SectionHeading } from "../ui";
import { Reveal } from "../reveal";

const paths = [
  {
    tag: "For job seekers",
    title: "I need a job",
    body: "Send us your CV, and have a real conversation with a real Consultant.",
    bullets: [
      "Full-time, part-time or Parachute position",
      "Permanent, part-time or temporary",
      "Parachute jobs are voluntary — expenses paid per week",
      "One-off registration charge of £30 to confirm your particulars meet regulations and register your profile",
      "Help can be given improving your CV",
      "Pre-selected choice of positions in warehouse, hospitality, care & production. First-timers welcome",
    ],
    primary: { href: "/upload-cv", label: "Upload your CV" },
    secondary: { href: "/job-seekers", label: "For job seekers" },
    image: photo.seekerC,
    focus: "object-[60%_30%]",
    alt: "A young woman smiling after starting a new job",
    surface: "bg-zest",
  },
  {
    tag: "For employers",
    title: "I need staff",
    body: "Send us the brief, and have a real conversation with a real Consultant.",
    bullets: [
      "We will have a vetted shortlist ready",
      "Right-to-work checked and referenced",
      "Ready to start — try a Parachute job",
      "Test a Parachute Applicant in position for 3 months before offering full-time engagement",
      "Many looking for new positions — immediate start",
      "Voluntary positions — only pay £100 expenses per week",
    ],
    primary: { href: "/employers#brief", label: "Send your brief" },
    secondary: { href: "/book", label: "Book a call with a Consultant" },
    image: photo.handshakeSmile,
    focus: "object-[50%_35%]",
    alt: "Two business people shaking hands after agreeing a hire",
    surface: "bg-white",
  },
];

/* Both photos are 3:2 landscape originals — serve the full frame at a few widths. */
const IMAGE_WIDTHS = [480, 720, 960, 1280];
const IMAGE_SIZES =
  "(min-width: 1280px) 600px, (min-width: 1024px) calc(50vw - 3.5rem), (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)";

export function DualPath() {
  return (
    <section id="which-one" className="border-b-2 border-ink bg-cream py-16 sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Two ways in"
          title={
            <>
              Which one are <span className="marker-zest">you</span>?
            </>
          }
          lead="Pick your side and we'll take it from there. Both routes start with one short form."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {paths.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} className="h-full">
              <article
                className={`group flex h-full flex-col overflow-hidden rounded-5xl border-2 border-ink ${p.surface} shadow-block-lg transition-transform duration-200 hover:-translate-y-1`}
              >
                <div className="relative aspect-[3/2] overflow-hidden border-b-2 border-ink lg:aspect-[16/9]">
                  <img
                    src={p.image({ w: 960 })}
                    srcSet={IMAGE_WIDTHS.map((w) => `${p.image({ w })} ${w}w`).join(", ")}
                    sizes={IMAGE_SIZES}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    className={`absolute inset-0 h-full w-full object-cover ${p.focus} transition-transform duration-500 group-hover:scale-105`}
                  />
                  <span className="absolute left-5 top-5 rounded-full border-2 border-ink bg-white px-3.5 py-1.5 text-[0.72rem] font-extrabold uppercase tracking-wider">
                    {p.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-9">
                  <h3 className="text-4xl font-extrabold sm:text-[2.8rem]">{p.title}</h3>
                  <p className="mt-4 text-[1rem] leading-relaxed text-ink-2">{p.body}</p>

                  <ul className="mt-6 flex flex-col gap-2.5">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[0.92rem] font-medium text-ink">
                        <span className="mt-[3px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full border-2 border-ink bg-white">
                          <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="#14121A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 8.5l3.5 3.5L13 4.5" />
                          </svg>
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row sm:flex-wrap">
                    <Button href={p.primary.href} variant="ink" size="md">
                      {p.primary.label}
                    </Button>
                    <Button href={p.secondary.href} variant="outline" size="md" arrow={false}>
                      {p.secondary.label}
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-[0.92rem] text-ink-3">
          Not sure which you are?{" "}
          <a href={contact.phoneHref} className="font-bold text-grape underline decoration-zest-deep decoration-2 underline-offset-4 hover:text-grape-mid">
            Just ring us on {contact.phone}
          </a>
        </p>
      </Container>
    </section>
  );
}
