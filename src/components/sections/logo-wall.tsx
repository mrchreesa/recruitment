import { clientLogos } from "@/lib/content";
import { Container } from "../ui";

export function LogoWall({ label = "Trusted by employers across the North" }: { label?: string }) {
  return (
    <section className="border-b-2 border-ink bg-bone">
      <Container className="py-10 sm:py-12">
        <p className="text-center text-[0.72rem] font-bold uppercase tracking-[0.22em] text-ink-3">
          {label}
        </p>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-9 gap-y-5 sm:gap-x-14">
          {clientLogos.map((logo) => (
            <li
              key={logo}
              className="font-display text-[0.95rem] font-extrabold tracking-[-0.01em] text-ink/45 transition-colors duration-200 hover:text-ink/80 sm:text-[1.1rem]"
            >
              {logo}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
