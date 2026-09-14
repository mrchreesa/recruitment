import { employerTestimonials, seekerTestimonials } from "@/lib/content";
import { Container, SectionHeading } from "../ui";
import { Reveal } from "../reveal";

const cardTints = ["bg-zest-soft", "bg-coral-soft", "bg-butter-soft", "bg-grape-soft"];

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 text-coral" fill="currentColor" aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function SeekerTestimonials() {
  return (
    <section className="border-b-2 border-ink bg-bone py-16 sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Real people, real jobs"
          title={
            <>
              They were where <span className="marker-zest">you are</span> six months ago
            </>
          }
          lead="Every one of these started with the same two-minute form you're about to fill in."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {seekerTestimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 70}>
              <figure
                className={`flex h-full flex-col rounded-4xl border-2 border-ink p-6 ${cardTints[i % cardTints.length]} transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-block-lg`}
              >
                <Stars />
                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t-2 border-ink/10 pt-5">
                  <img
                    src={t.avatar}
                    alt=""
                    loading="lazy"
                    className="h-11 w-11 rounded-full border-2 border-ink object-cover"
                  />
                  <span className="min-w-0">
                    <span className="block text-[0.9rem] font-extrabold text-ink">
                      {t.name} <span className="font-semibold text-ink-3">· {t.age}</span>
                    </span>
                    <span className="block text-[0.76rem] leading-snug text-ink-2">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function EmployerTestimonials() {
  return (
    <section className="grain border-b-2 border-ink bg-ink py-16 text-white sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What clients say"
          tone="light"
          title={
            <>
              Short shortlists.
              <br />
              Fewer headaches.
            </>
          }
          className="max-w-2xl"
        />
        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {employerTestimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-5xl border-2 border-white/15 bg-white/[0.04] p-7 transition-colors duration-200 hover:border-zest sm:p-9">
                <span className="font-display text-5xl leading-none text-zest" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className="mt-3 flex-1 text-[1.05rem] leading-relaxed text-white/85 sm:text-[1.15rem]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3.5 border-t border-white/12 pt-6">
                  <img
                    src={t.avatar}
                    alt=""
                    loading="lazy"
                    className="h-12 w-12 rounded-full border-2 border-zest object-cover"
                  />
                  <span>
                    <span className="block text-[0.95rem] font-extrabold">{t.name}</span>
                    <span className="block text-[0.8rem] text-white/55">
                      {t.role} · {t.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
