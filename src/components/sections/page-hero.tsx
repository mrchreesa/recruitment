import type { ReactNode } from "react";
import { Button, Container, Eyebrow, Pill, cx } from "../ui";

export function PageHero({
  eyebrow,
  title,
  lead,
  primary,
  secondary,
  image,
  imageAlt,
  pills,
  tone = "grape",
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  image?: string;
  imageAlt?: string;
  pills?: string[];
  tone?: "grape" | "coral" | "bone";
}) {
  const dark = tone !== "bone";
  const bg =
    tone === "grape" ? "bg-grape-deep" : tone === "coral" ? "bg-ink" : "bg-cream";

  return (
    <section className={cx("grain relative overflow-hidden border-b-2 border-ink", bg)}>
      {dark && (
        <>
          <div className="pointer-events-none absolute -top-32 right-[8%] h-96 w-96 rounded-full bg-grape/45 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-36 -left-24 h-96 w-96 rounded-full bg-coral/25 blur-3xl" />
        </>
      )}
      <Container className="relative py-14 sm:py-20 lg:py-24">
        <div className={cx("grid items-center gap-12", image && "lg:grid-cols-[1.15fr_0.85fr]")}>
          <div>
            <Eyebrow tone={dark ? "light" : "grape"}>{eyebrow}</Eyebrow>
            <h1
              className={cx(
                "mt-5 text-[2.6rem] leading-[0.98] font-extrabold sm:text-6xl lg:text-[4.2rem]",
                dark ? "text-white" : "text-ink",
              )}
            >
              {title}
            </h1>
            <p
              className={cx(
                "mt-6 max-w-xl text-[1.05rem] leading-relaxed sm:text-lg",
                dark ? "text-white/75" : "text-ink-2",
              )}
            >
              {lead}
            </p>

            {pills && (
              <ul className="mt-7 flex flex-wrap gap-2">
                {pills.map((p) => (
                  <li key={p}>
                    <Pill tone={dark ? "light" : "grape"}>{p}</Pill>
                  </li>
                ))}
              </ul>
            )}

            {(primary || secondary) && (
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {primary && (
                  <Button href={primary.href} variant="zest" size="lg">
                    {primary.label}
                  </Button>
                )}
                {secondary && (
                  <Button
                    href={secondary.href}
                    variant={dark ? "outlineLight" : "outline"}
                    size="lg"
                    arrow={false}
                  >
                    {secondary.label}
                  </Button>
                )}
              </div>
            )}
          </div>

          {image && (
            <div className="relative">
              <div className="absolute -inset-3 -rotate-2 rounded-5xl border-2 border-zest/40" aria-hidden="true" />
              <img
                src={image}
                alt={imageAlt ?? ""}
                loading="eager"
                className="relative aspect-[4/5] w-full rounded-5xl border-2 border-ink object-cover shadow-block-lg"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
