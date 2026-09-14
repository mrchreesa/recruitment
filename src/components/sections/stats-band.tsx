import { stats } from "@/lib/content";
import { Container } from "../ui";
import { Reveal } from "../reveal";

export function StatsBand({ tone = "grape" }: { tone?: "grape" | "bone" }) {
  const dark = tone === "grape";
  return (
    <section
      className={`grain border-b-2 border-ink ${dark ? "bg-grape text-white" : "bg-bone text-ink"}`}
    >
      <Container className="py-12 sm:py-14">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div className="flex flex-col gap-2">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-[2.6rem] leading-none font-extrabold tracking-tight sm:text-6xl">
                  {s.value}
                </dd>
                <p className={`text-[0.86rem] leading-snug ${dark ? "text-white/65" : "text-ink-3"}`}>
                  {s.label}
                </p>
                <span
                  className={`mt-1 h-[3px] w-10 rounded-full ${dark ? "bg-zest" : "bg-coral"}`}
                  aria-hidden="true"
                />
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
