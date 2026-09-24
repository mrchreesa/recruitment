import Link from "next/link";
import { BRAND, contact, marqueeTerms } from "@/lib/content";
import { Logo } from "./logo";
import { Burst, Button, Container, Marquee } from "./ui";

const columns = [
  {
    title: "Looking for work",
    links: [
      { href: "/job-seekers", label: "For job seekers" },
      { href: "/upload-cv", label: "Upload your CV" },
      { href: "/job-seekers#sectors", label: "Sectors we cover" },
      { href: "/job-seekers#faqs", label: "Job seeker FAQs" },
    ],
  },
  {
    title: "Looking to hire",
    links: [
      { href: "/employers", label: "For employers" },
      { href: "/services", label: "Recruitment services" },
      { href: "/book", label: "Book a consultation" },
      { href: "/employers#brief", label: "Send a hiring brief" },
    ],
  },
  {
    title: "Agency",
    links: [
      { href: "/services", label: "What we do" },
      { href: "/register", label: "Registration & fees" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      {/* Closing CTA band */}
      <section className="grain relative overflow-hidden bg-grape text-white">
        <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-coral/18 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-28 h-80 w-80 rounded-full bg-zest/18 blur-3xl" />
        <Container className="relative py-16 sm:py-20">
          <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <Burst className="mb-5 h-9 w-9 animate-spin-slow text-zest" />
              <h2 className="text-[2.3rem] leading-[1.02] font-extrabold sm:text-5xl lg:text-[3.6rem]">
                The JobFather
                <br />
                is hiring <span className="text-zest">NOW</span>.
              </h2>
              <p className="mt-5 max-w-lg text-[1.02rem] leading-relaxed text-white/75">
                Need a job? Upload your CV. Need staff? Send us the brief. Either way, you&rsquo;ll
                have a real conversation with a real Consultant.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:max-w-xs">
              <Button href="/upload-cv" variant="zest" size="lg" full>
                Upload your CV
              </Button>
              <Button href="/employers" variant="white" size="lg" full>
                Hire staff
              </Button>
              <Button href="/book" variant="outlineLight" size="lg" full arrow={false}>
                Book a call instead
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <div className="border-y-2 border-ink bg-zest py-3 text-ink">
        <Marquee items={marqueeTerms} reverse />
      </div>

      {/* Main footer */}
      <div className="grain bg-grape-deep text-white">
        <Container className="py-14 sm:py-16">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
            <div>
              <Logo tone="light" interactive={false} />
              <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-white/65">
                We recruit with a difference. Specialising in Volunteer Parachute Positions across
                Croydon and South London.
              </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {columns.map((col) => (
                <div key={col.title}>
                  <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-zest">
                    {col.title}
                  </h3>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-[0.92rem] text-white/70 transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div>
                <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-zest">
                  Get in touch
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5 text-[0.92rem] text-white/70">
                  <li>
                    <a href={contact.phoneHref} className="transition-colors hover:text-white">
                      {contact.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${contact.email}`} className="transition-colors [overflow-wrap:anywhere] hover:text-white">
                      {contact.email}
                    </a>
                  </li>
                  <li className="pt-1 leading-relaxed text-white/55">
                    {contact.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/12 pt-7 text-[0.8rem] text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {BRAND}. Croydon &amp; South London.
            </p>
            <p className="flex flex-wrap gap-x-5 gap-y-2">
              <span className="cursor-default transition-colors hover:text-white/80">Privacy policy</span>
              <span className="cursor-default transition-colors hover:text-white/80">Modern slavery statement</span>
              <span className="cursor-default transition-colors hover:text-white/80">Cookies</span>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
