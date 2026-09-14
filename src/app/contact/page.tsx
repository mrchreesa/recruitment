import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { Reveal } from "@/components/reveal";
import { Button, Container, Eyebrow, Pill, SectionHeading } from "@/components/ui";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Call, email or drop into the Manchester office. Job seekers and employers both get a reply within one working day.",
};

const routes = [
  {
    tag: "Looking for work",
    title: "Job seekers",
    body: "Register, ask about a role you've seen, or chase an application. Always free.",
    action: { href: "/upload-cv", label: "Upload your CV" },
    detail: contact.phone,
    detailHref: contact.phoneHref,
    surface: "bg-zest",
  },
  {
    tag: "Looking to hire",
    title: "Employers",
    body: "New brief, existing booking, invoices or rate cards — this goes straight to the client team.",
    action: { href: "/employers#brief", label: "Send a brief" },
    detail: contact.employersEmail,
    detailHref: `mailto:${contact.employersEmail}`,
    surface: "bg-coral-soft",
  },
  {
    tag: "Anything else",
    title: "General enquiries",
    body: "Press, partnerships, college and careers-service enquiries, or working here yourself.",
    action: { href: "/book", label: "Book a call" },
    detail: contact.email,
    detailHref: `mailto:${contact.email}`,
    surface: "bg-grape-soft",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="grain relative overflow-hidden border-b-2 border-ink bg-grape-deep text-white">
        <div className="pointer-events-none absolute -top-28 right-[12%] h-80 w-80 rounded-full bg-grape/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-36 -left-16 h-80 w-80 rounded-full bg-coral/25 blur-3xl" />
        <Container className="relative py-12 sm:py-16">
          <div className="max-w-3xl">
            <Eyebrow tone="light">Contact us</Eyebrow>
            <h1 className="mt-5 text-[2.6rem] leading-[0.98] font-extrabold sm:text-6xl lg:text-[4rem]">
              Real people.
              <br />
              <span className="text-zest">Actual phone.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/70">
              No chatbot, no ticket number. Ring us and a consultant picks up. Email us and you
              hear back within one working day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={contact.phoneHref}
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-ink bg-zest px-6 py-3.5 font-display text-lg font-extrabold text-ink shadow-block transition-transform hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 5a2 2 0 012-2h2.2a1 1 0 01.97.76l.9 3.6a1 1 0 01-.28.96l-1.6 1.6a14 14 0 005.9 5.9l1.6-1.6a1 1 0 01.96-.28l3.6.9a1 1 0 01.76.97V19a2 2 0 01-2 2A16 16 0 014 5z" />
                </svg>
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-white/50 px-6 py-3.5 text-[0.95rem] font-semibold transition-colors hover:border-white hover:bg-white hover:text-ink"
              >
                {contact.email}
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Routes />
      <FormSection />
      <Office />
    </>
  );
}

function Routes() {
  return (
    <section className="border-b-2 border-ink bg-bone py-14 sm:py-20">
      <Container>
        <ul className="grid gap-5 lg:grid-cols-3">
          {routes.map((r, i) => (
            <Reveal as="li" key={r.title} delay={i * 80}>
              <article
                className={`flex h-full flex-col rounded-4xl border-2 border-ink ${r.surface} p-7 transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-block-lg`}
              >
                <Pill tone="outline" className="self-start border-ink/25 bg-white/70">
                  {r.tag}
                </Pill>
                <h2 className="mt-5 text-[1.5rem] leading-tight font-extrabold">{r.title}</h2>
                <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-ink-2">{r.body}</p>
                <a
                  href={r.detailHref}
                  className="mt-5 block truncate font-display text-[1.05rem] font-extrabold text-grape underline decoration-2 underline-offset-4 hover:text-grape-mid"
                >
                  {r.detail}
                </a>
                <Button href={r.action.href} variant="ink" size="md" className="mt-5 self-start">
                  {r.action.label}
                </Button>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function FormSection() {
  return (
    <section className="border-b-2 border-ink bg-cream py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Send a message"
              title={
                <>
                  Drop us a line
                  <br />
                  and we&rsquo;ll come back
                </>
              }
              lead="Tell us roughly what you need and we'll route it to the right consultant rather than bouncing you round the office."
            />
            <div className="mt-8 rounded-4xl border-2 border-ink bg-white p-6">
              <Eyebrow>Opening hours</Eyebrow>
              <dl className="mt-4 flex flex-col gap-2.5">
                {contact.hours.map(([day, time]) => (
                  <div key={day} className="flex items-baseline justify-between gap-4 border-b border-line pb-2.5 last:border-0 last:pb-0">
                    <dt className="text-[0.88rem] font-semibold">{day}</dt>
                    <dd className="text-[0.88rem] text-ink-2">{time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 rounded-2xl bg-zest-soft px-4 py-3 text-[0.82rem] leading-relaxed text-ink-2">
                <span className="font-bold text-ink">Shift cover line:</span> answered from 6am,
                seven days, for live client bookings.
              </p>
            </div>
          </div>

          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Office() {
  return (
    <section className="bg-bone py-16 sm:py-24">
      <Container>
        <div className="overflow-hidden rounded-5xl border-2 border-ink bg-white shadow-block-lg">
          <div className="grid lg:grid-cols-[1fr_1.1fr]">
            <div className="p-8 sm:p-11">
              <Eyebrow>Come and see us</Eyebrow>
              <h2 className="mt-4 text-[1.9rem] leading-tight font-extrabold sm:text-4xl">
                The Manchester office
              </h2>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-2">
                Two minutes from Oxford Road station. Walk-ins welcome during opening hours —
                bring photo ID and proof of your right to work and we can register you on the spot.
              </p>

              <address className="mt-7 not-italic">
                <p className="font-display text-[1.15rem] font-extrabold leading-relaxed">
                  {contact.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </address>

              <div className="mt-7 flex flex-wrap gap-2">
                <Pill tone="zest">Step-free access</Pill>
                <Pill tone="grape">2 min from Oxford Road</Pill>
                <Pill tone="coral">Walk-ins welcome</Pill>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/book" variant="grape" size="md">
                  Book a slot
                </Button>
                <Button href="/upload-cv" variant="outline" size="md" arrow={false}>
                  Register online instead
                </Button>
              </div>
            </div>

            {/* Stylised map panel */}
            <div className="relative min-h-[19rem] overflow-hidden border-t-2 border-ink bg-grape-soft lg:border-t-0 lg:border-l-2">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-70"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(109,40,217,.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(109,40,217,.14) 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                }}
              />
              <svg
                aria-hidden="true"
                viewBox="0 0 400 320"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
              >
                <path d="M-20 210 L120 150 L230 205 L420 130" stroke="#6D28D9" strokeOpacity="0.35" strokeWidth="14" fill="none" strokeLinecap="round" />
                <path d="M60 -20 L110 120 L90 340" stroke="#6D28D9" strokeOpacity="0.22" strokeWidth="9" fill="none" strokeLinecap="round" />
                <path d="M300 -20 L270 140 L330 340" stroke="#6D28D9" strokeOpacity="0.22" strokeWidth="9" fill="none" strokeLinecap="round" />
                <rect x="150" y="60" width="70" height="52" rx="8" fill="#FFD166" fillOpacity="0.5" />
                <rect x="250" y="175" width="88" height="62" rx="8" fill="#FF6B5B" fillOpacity="0.35" />
                <rect x="30" y="230" width="66" height="48" rx="8" fill="#C4F542" fillOpacity="0.55" />
              </svg>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
                <div className="flex flex-col items-center">
                  <span className="rounded-full border-2 border-ink bg-ink px-4 py-2 text-[0.76rem] font-extrabold text-zest whitespace-nowrap">
                    LOGO Recruitment
                  </span>
                  <svg viewBox="0 0 32 40" className="mt-1 h-10 w-8 drop-shadow-sm" aria-hidden="true">
                    <path
                      d="M16 39s13-14.4 13-23A13 13 0 103 16c0 8.6 13 23 13 23z"
                      fill="#FF6B5B"
                      stroke="#14121A"
                      strokeWidth="2.5"
                    />
                    <circle cx="16" cy="15.5" r="4.6" fill="#14121A" />
                  </svg>
                </div>
              </div>

              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border-2 border-ink bg-white px-4 py-1.5 text-[0.72rem] font-bold whitespace-nowrap">
                Illustrative map · demo site
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
