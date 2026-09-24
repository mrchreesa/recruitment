import Link from "next/link";
import { BRAND } from "@/lib/content";
import { cx } from "./ui";

/**
 * Fedora mark — a nod to the "JobFather" name and Dr McKenzie's signature hat.
 * The viewBox is cropped tight around the hat so it fills its badge.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="3 3 34 34" aria-hidden="true" className={className}>
      <path
        d="M12 24.5C11.4 18.5 11.9 13.4 14.4 11.2c1.6-1.3 3.2.9 5.6.9s4-2.2 5.6-.9c2.5 2.2 3 7.3 2.4 13.3z"
        fill="#14121A"
      />
      <path d="M11.7 19.6h16.6v3.6H11.7z" fill="#FF6B5B" />
      <path
        d="M3.5 25.2c5.2-3.4 27.8-3.4 33 0-2.8 4.6-30.2 4.6-33 0z"
        fill="#14121A"
      />
    </svg>
  );
}

export function Logo({
  tone = "dark",
  interactive = true,
}: {
  tone?: "dark" | "light";
  interactive?: boolean;
}) {
  return (
    <Link href="/" className="group flex shrink-0 items-center gap-2.5" aria-label={`${BRAND} — home`}>
      <span
        className={cx(
          "grid h-14 w-14 place-items-center rounded-2xl border-2 border-ink bg-zest",
          interactive && "transition-transform duration-200 group-hover:-rotate-6",
        )}
      >
        <LogoMark className="h-12 w-12" />
      </span>
      <span
        className={cx(
          "font-display text-[1.25rem] leading-none font-extrabold tracking-[-0.035em] whitespace-nowrap xl:text-[1.45rem]",
          tone === "light" ? "text-white" : "text-ink",
        )}
      >
        The JobFather
      </span>
    </Link>
  );
}
