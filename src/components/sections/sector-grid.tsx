import { sectors } from "@/lib/content";
import { Button, Container, Pill, SectionHeading } from "../ui";
import { Reveal } from "../reveal";

const tints = {
  grape: "bg-grape-soft",
  coral: "bg-coral-soft",
  butter: "bg-butter-soft",
  zest: "bg-zest-soft",
} as const;

export function SectorGrid({
  heading = true,
  limit,
}: {
  heading?: boolean;
  limit?: number;
}) {
  const list = limit ? sectors.slice(0, limit) : sectors;

  return (
    <section id="sectors" className="border-b-2 border-ink bg-bone py-16 sm:py-24">
      <Container>
        {heading && (
          <div className="flex flex-col items-start gap-7 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Where we place people"
              title={
                <>
                  Eight sectors.
                  <br />
                  One <span className="marker-coral">speciality</span>.
                </>
              }
              lead="Specialising in Volunteer Parachute Positions, currently in Croydon and South London. Leading to a possible permanent position — optional."
              className="max-w-2xl"
            />
            <Button href="/upload-cv" variant="grape" size="md" className="shrink-0">
              Get matched to one
            </Button>
          </div>
        )}

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={(i % 4) * 70}>
              <article
                className={`group flex h-full flex-col overflow-hidden rounded-4xl border-2 border-ink ${tints[s.tint]} transition-all duration-200 hover:-translate-y-1.5 hover:shadow-block-lg`}
              >
                <div className="aspect-[5/4] overflow-hidden border-b-2 border-ink">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[1.2rem] leading-tight font-extrabold">{s.name}</h3>
                  <p className="mt-2.5 text-[0.87rem] leading-relaxed text-ink-2">{s.blurb}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {s.roles.slice(0, 3).map((r) => (
                      <li key={r}>
                        <Pill tone="outline" className="bg-white/70">
                          {r}
                        </Pill>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
