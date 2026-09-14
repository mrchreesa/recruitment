import { Container, SectionHeading } from "../ui";
import { Reveal } from "../reveal";

export function Steps({
  eyebrow,
  title,
  lead,
  steps,
  tone = "light",
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  steps: { n: string; title: string; body: string }[];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <section
      className={`grain border-b-2 border-ink py-16 sm:py-24 ${dark ? "bg-grape-deep" : "bg-cream"}`}
    >
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          lead={lead}
          tone={dark ? "light" : "dark"}
          className="max-w-2xl"
        />

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 80}>
              <div
                className={`relative flex h-full flex-col rounded-4xl border-2 p-6 transition-transform duration-200 hover:-translate-y-1.5 ${
                  dark
                    ? "border-white/20 bg-white/[0.05] hover:border-zest"
                    : "border-ink bg-white hover:shadow-block-lg"
                }`}
              >
                <span
                  className={`font-display text-[3.2rem] leading-none font-extrabold tracking-tighter ${
                    dark ? "text-zest/40" : "text-grape/25"
                  }`}
                >
                  {s.n}
                </span>
                <h3
                  className={`mt-3 text-[1.2rem] leading-tight font-extrabold ${
                    dark ? "text-white" : "text-ink"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`mt-2.5 text-[0.9rem] leading-relaxed ${
                    dark ? "text-white/65" : "text-ink-2"
                  }`}
                >
                  {s.body}
                </p>
                {i < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={`absolute top-9 -right-[13px] hidden h-5 w-5 lg:block ${
                      dark ? "text-zest/50" : "text-grape/35"
                    }`}
                  >
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 10h11M10.5 5l5 5-5 5" />
                    </svg>
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
