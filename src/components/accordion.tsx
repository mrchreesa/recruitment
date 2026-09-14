"use client";

import { useState } from "react";
import { cx } from "./ui";

export type FaqItem = { q: string; a: string };

export function Accordion({
  items,
  tone = "dark",
  className,
}: {
  items: FaqItem[];
  tone?: "dark" | "light";
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className={cx("flex flex-col gap-3", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li
            key={item.q}
            className={cx(
              "overflow-hidden rounded-3xl border-2 transition-colors duration-200",
              tone === "light"
                ? isOpen
                  ? "border-zest bg-white/10"
                  : "border-white/20 bg-white/[0.04] hover:border-white/40"
                : isOpen
                  ? "border-ink bg-white shadow-block"
                  : "border-line bg-white hover:border-ink/40",
            )}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7"
              >
                <span
                  className={cx(
                    "font-display text-[1.02rem] font-bold tracking-tight sm:text-[1.15rem]",
                    tone === "light" ? "text-white" : "text-ink",
                  )}
                >
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={cx(
                    "grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 transition-transform duration-300",
                    isOpen && "rotate-45",
                    tone === "light"
                      ? isOpen
                        ? "border-zest bg-zest text-ink"
                        : "border-white/40 text-white"
                      : isOpen
                        ? "border-ink bg-zest text-ink"
                        : "border-ink/25 text-ink",
                  )}
                >
                  <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M8 3v10M3 8h10" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              className={cx(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p
                  className={cx(
                    "px-5 pb-6 text-[0.96rem] leading-relaxed sm:px-7 sm:text-[1rem]",
                    tone === "light" ? "text-white/75" : "text-ink-2",
                  )}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
