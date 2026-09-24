"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contact } from "@/lib/content";
import { Logo } from "./logo";
import { Arrow, Button, Container, cx } from "./ui";

const nav = [
  { href: "/job-seekers", label: "For Job Seekers" },
  { href: "/employers", label: "For Employers" },
  { href: "/services", label: "Services" },
  { href: "/register", label: "Register" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navigating anywhere (including browser back) dismisses the mobile drawer.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Utility strip */}
      <div className="hidden bg-grape-deep text-white lg:block">
        <Container className="flex h-9 items-center justify-between text-[0.76rem] font-medium">
          <p className="flex items-center gap-2 text-white/80">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-zest" />
            We recruit with a difference · Croydon &amp; South London
          </p>
          <div className="flex items-center gap-6 text-white/80">
            <a href={contact.phoneHref} className="transition-colors hover:text-zest">
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="transition-colors hover:text-zest">
              {contact.email}
            </a>
          </div>
        </Container>
      </div>

      <header
        className={cx(
          "sticky top-0 z-50 border-b-2 transition-all duration-200",
          scrolled
            ? "border-ink bg-bone/92 backdrop-blur-md"
            : "border-transparent bg-bone",
        )}
      >
        <Container className="flex h-[4.5rem] items-center justify-between gap-4">
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cx(
                    "relative rounded-full px-3.5 py-2 text-[0.88rem] font-semibold tracking-tight transition-colors",
                    active ? "text-grape" : "text-ink-2 hover:text-ink",
                  )}
                >
                  {item.label}
                  <span
                    className={cx(
                      "absolute inset-x-3.5 -bottom-0.5 h-[3px] rounded-full bg-zest-deep transition-transform duration-200",
                      active ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            <Button href="/book" variant="outline" size="sm" arrow={false}>
              Book a call
            </Button>
            <Button href="/upload-cv" variant="zest" size="sm">
              Upload your CV
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink bg-white shadow-block transition-transform active:translate-x-[2px] active:translate-y-[2px] lg:hidden"
          >
            <span className="relative block h-[14px] w-[20px]">
              <span
                className={cx(
                  "absolute left-0 h-[2.5px] w-full rounded-full bg-ink transition-all duration-200",
                  open ? "top-[6px] rotate-45" : "top-0",
                )}
              />
              <span
                className={cx(
                  "absolute top-[6px] left-0 h-[2.5px] w-full rounded-full bg-ink transition-opacity duration-200",
                  open && "opacity-0",
                )}
              />
              <span
                className={cx(
                  "absolute left-0 h-[2.5px] w-full rounded-full bg-ink transition-all duration-200",
                  open ? "top-[6px] -rotate-45" : "top-[12px]",
                )}
              />
            </span>
          </button>
        </Container>
      </header>

      {/* Mobile drawer */}
      <div
        className={cx(
          "fixed inset-0 z-40 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cx(
            "absolute inset-0 bg-ink/40 transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          onClick={() => setOpen(false)}
          className={cx(
            "absolute inset-x-0 top-0 origin-top rounded-b-5xl border-b-2 border-ink bg-bone pt-[4.75rem] pb-8 transition-all duration-300 ease-out",
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
          )}
        >
          <Container>
            <nav aria-label="Mobile" className="flex flex-col border-t border-line">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cx(
                      "flex items-center justify-between border-b border-line py-4 font-display text-2xl font-extrabold tracking-tight",
                      active ? "text-grape" : "text-ink",
                    )}
                  >
                    {item.label}
                    <Arrow className="h-5 w-5 opacity-40" />
                  </Link>
                );
              })}
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <Button href="/upload-cv" variant="zest" size="lg" full>
                Upload your CV
              </Button>
              <Button href="/book" variant="grape" size="lg" full>
                Book a consultation
              </Button>
            </div>
            <a
              href={contact.phoneHref}
              className="mt-5 block text-center text-sm font-semibold text-ink-2"
            >
              Or call us: <span className="text-grape">{contact.phone}</span>
            </a>
          </Container>
        </div>
      </div>
    </>
  );
}
