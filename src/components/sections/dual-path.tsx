import { photo } from "@/lib/images";
import { contact } from "@/lib/content";
import { Button, Container, SectionHeading } from "../ui";
import { Reveal } from "../reveal";

const paths = [
  {
    tag: "For job seekers",
    title: "I need a job",
    body: "Send us your CV and get a real conversation with a real consultant inside 24 hours. Free, always — you never pay us a penny.",
    bullets: ["Free CV help if you need it", "Temp, part-time and permanent", "Paid weekly on temp work"],
    primary: { href: "/upload-cv", label: "Upload your CV" },
    secondary: { href: "/job-seekers", label: "How it works" },
    image: photo.seekerC({ w: 700, h: 780 }),
    alt: "A young woman smiling after starting a new job",
    surface: "bg-zest",
  },
  {
    tag: "For employers",
    title: "I need staff",
    body: "Give us the brief and get a short, vetted shortlist in 48 hours. Right-to-work checked, referenced, and ready to start.",
    bullets: ["Cover from 24 hours", "90-day rebate on permanent", "One account manager, always"],
    primary: { href: "/employers", label: "Hire staff" },
    secondary: { href: "/book", label: "Book a call" },
    image: photo.handshakeSmile({ w: 700, h: 780 }),
    alt: "Two business people shaking hands after agreeing a hire",
    surface: "bg-white",
  },
];

export function DualPath() {
  return (
    <section className="border-b-2 border-ink bg-cream py-16 sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Two ways in"
          title={
            <>
              Which one&rsquo;s <span className="marker-zest">you</span>?
            </>
          }
          lead="Pick your side and we'll take it from there. Both routes start with one short form."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {paths.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article
                className={`group flex h-full flex-col overflow-hidden rounded-5xl border-2 border-ink ${p.surface} shadow-block-lg transition-transform duration-200 hover:-translate-y-1`}
              >
                <div className="relative h-56 overflow-hidden border-b-2 border-ink sm:h-64">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
