import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/* ------------------------------------------------------------------ */
/* Layout                                                              */
/* ------------------------------------------------------------------ */

export function Container({
  className,
  children,
  size = "default",
}: {
  className?: string;
  children: ReactNode;
  size?: "default" | "narrow" | "wide";
}) {
  const width =
    size === "narrow" ? "max-w-4xl" : size === "wide" ? "max-w-[88rem]" : "max-w-7xl";
  return <div className={cx("mx-auto w-full px-5 sm:px-8", width, className)}>{children}</div>;
}

/* ------------------------------------------------------------------ */
/* Buttons                                                             */
/* ------------------------------------------------------------------ */

type Variant = "zest" | "grape" | "coral" | "ink" | "white" | "outline" | "outlineLight";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  zest: "bg-zest text-ink border-ink hover:bg-zest-deep",
  grape: "bg-grape text-white border-ink hover:bg-grape-mid",
  coral: "bg-coral text-ink border-ink hover:brightness-105",
  ink: "bg-ink text-bone border-ink hover:bg-grape-deep",
  white: "bg-white text-ink border-ink hover:bg-cream",
  outline: "bg-transparent text-ink border-ink hover:bg-ink hover:text-bone",
  outlineLight:
    "bg-transparent text-white border-white/60 hover:bg-white hover:text-ink hover:border-white",
};

const sizes: Record<Size, string> = {
  sm: "text-[0.8rem] px-4 py-2 gap-1.5",
  md: "text-[0.9rem] px-5 py-3 gap-2",
  lg: "text-base px-7 py-4 gap-2.5",
};

const shadowFor: Record<Variant, string> = {
  zest: "shadow-block hover:shadow-block-lg",
  grape: "shadow-block hover:shadow-block-lg",
  coral: "shadow-block hover:shadow-block-lg",
  ink: "shadow-[4px_4px_0_0_var(--color-zest)] hover:shadow-[7px_7px_0_0_var(--color-zest)]",
  white: "shadow-block hover:shadow-block-lg",
  outline: "shadow-none",
  outlineLight: "shadow-none",
};

function buttonClass(variant: Variant, size: Size, full?: boolean, className?: string) {
  return cx(
    "group/btn inline-flex items-center justify-center rounded-full border-2 font-semibold tracking-tight",
    "transition-all duration-150 ease-out active:translate-x-[2px] active:translate-y-[2px]",
    "hover:-translate-x-[1px] hover:-translate-y-[1px]",
    variants[variant],
    shadowFor[variant],
    sizes[size],
    full && "w-full",
    className,
  );
}

export function Button({
  href,
  variant = "zest",
  size = "md",
  full,
  className,
  children,
  arrow = true,
  ...rest
}: {
  href?: string;
  variant?: Variant;
  size?: Size;
  full?: boolean;
  className?: string;
  children: ReactNode;
  arrow?: boolean;
} & Omit<ComponentProps<"button">, "ref">) {
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <Arrow className="transition-transform duration-150 group-hover/btn:translate-x-1" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClass(variant, size, full, className)}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={buttonClass(variant, size, full, className)} {...rest}>
      {inner}
    </button>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={cx("h-[1em] w-[1em] shrink-0", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10h11M10.5 5l5 5-5 5" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Typography helpers                                                  */
/* ------------------------------------------------------------------ */

export function Eyebrow({
  children,
  tone = "grape",
  className,
}: {
  children: ReactNode;
  tone?: "grape" | "zest" | "coral" | "light";
  className?: string;
}) {
  const tones = {
    grape: "text-grape",
    zest: "text-zest-deep",
    coral: "text-coral",
    light: "text-zest",
  };
  return (
    <p
      className={cx(
        "flex items-center gap-2.5 text-[0.72rem] font-bold uppercase tracking-[0.22em]",
        tones[tone],
        className,
      )}
    >
      <span aria-hidden="true" className="inline-block h-[7px] w-[7px] rotate-45 bg-current" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "dark",
  align = "left",
  className,
  eyebrowTone,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
  eyebrowTone?: "grape" | "zest" | "coral" | "light";
}) {
  return (
    <div
      className={cx(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow tone={eyebrowTone ?? (tone === "light" ? "light" : "grape")}>{eyebrow}</Eyebrow>}
      <h2
        className={cx(
          "text-[2.1rem] leading-[1.04] font-extrabold sm:text-5xl lg:text-[3.4rem]",
          tone === "light" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cx(
            "max-w-2xl text-[1.02rem] leading-relaxed sm:text-lg",
            tone === "light" ? "text-white/75" : "text-ink-2",
            align === "center" && "mx-auto",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

export function Pill({
  children,
  tone = "grape",
  className,
}: {
  children: ReactNode;
  tone?: "grape" | "zest" | "coral" | "butter" | "outline" | "light";
  className?: string;
}) {
  const tones = {
    grape: "bg-grape-soft text-grape border-grape/25",
    zest: "bg-zest-soft text-ink border-zest-deep/50",
    coral: "bg-coral-soft text-ink border-coral/40",
    butter: "bg-butter-soft text-ink border-butter/60",
    outline: "bg-transparent text-ink-2 border-line",
    light: "bg-white/10 text-white border-white/25",
  };
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.74rem] font-semibold tracking-tight",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Decorative                                                          */
/* ------------------------------------------------------------------ */

export function Marquee({
  items,
  className,
  reverse,
  separator = "✦",
}: {
  items: string[];
  className?: string;
  reverse?: boolean;
  separator?: string;
}) {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center" aria-hidden={key === "b"}>
      {items.map((item, i) => (
        <span key={`${key}-${i}`} className="flex items-center">
          <span className="px-6 text-[clamp(1.1rem,2.4vw,1.65rem)] font-extrabold tracking-tight whitespace-nowrap">
            {item}
          </span>
          <span className="text-[0.9rem] opacity-50">{separator}</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={cx("fade-x flex overflow-hidden font-display", className)}>
      <div className={cx("flex w-max", reverse ? "animate-marquee-rev" : "animate-marquee")}>
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}

export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 24"
      aria-hidden="true"
      className={cx("h-4 w-auto", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
    >
      <path d="M4 16C24 4 44 4 64 16s40 12 60 0 40-12 60 0 40 12 52 4" />
    </svg>
  );
}

export function Burst({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={cx("h-8 w-8", className)} fill="currentColor">
      <path d="M50 0l9.6 28.2L82.5 9.8 71.3 35.9l28.5-6.7-22.6 18.9 26.1 12.6-29.2.9 17.5 23.4-26.4-12.7L50 100l-7.2-29.7-26.4 12.7L33.9 59.6l-29.2-.9L30.8 46.1 8.2 27.2l28.5 6.7L25.5 9.8l22.9 18.4z" />
    </svg>
  );
}

export function HandArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 80"
      aria-hidden="true"
      className={cx("h-16 w-auto", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8c34 2 58 18 70 44" />
      <path d="M58 56l19 0M76 56l-3-19" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Cards                                                               */
/* ------------------------------------------------------------------ */

export function Card({
  className,
  children,
  as: Tag = "div",
}: {
  className?: string;
  children: ReactNode;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag
      className={cx(
        "rounded-4xl border-2 border-ink bg-white p-6 sm:p-7",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
