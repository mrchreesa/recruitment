import { JobSeekerForm } from "@/components/forms/job-seeker-form";
import { Reveal } from "@/components/reveal";
import { Button, Container, Eyebrow, Marquee, Pill } from "@/components/ui";
import { contact, marqueeTerms } from "@/lib/content";
import { photo } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Upload your CV",
  description:
    "Send us your CV and we'll call you within 24 hours. Pay the registration charge once, with no further fees or spam.",
  path: "/upload-cv",
});

const whatHappens = [
  { t: "Within 24 hours", b: "A named consultant calls you. Mobile, not a withheld number." },
  { t: "Within 1 week", b: "We send you roles that actually fit your travel and hours." },
  { t: "Within 2 weeks", b: "Interview or trial shift booked, with prep from us beforehand." },
];

export default function UploadCvPage() {
  return (
    <>
      {/* Compact hero */}
      <section className="grain relative overflow-hidden border-b-2 border-ink bg-grape-deep text-white">
        <div className="pointer-events-none absolute -top-32 right-[10%] h-80 w-80 rounded-full bg-grape/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-[5%] h-80 w-80 rounded-full bg-coral/20 blur-3xl" />
        <Container className="relative py-12 sm:py-16">
          <div className="max-w-3xl">
            <Eyebrow tone="light">Upload your CV</Eyebrow>
            <h1 className="mt-5 text-[2.6rem] leading-[0.98] font-extrabold sm:text-6xl lg:text-[4rem]">
              Two minutes now.
              <br />
              A phone call <span className="text-zest">tomorrow.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/75">
              Fill this in once. After registration, we&rsquo;ll match you against any position
              within our jurisdiction.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {["Registration charge only", "No CV? No problem", "No further fees", "You can pause anytime"].map(
                (p) => (
                  <li key={p}>
                    <Pill tone="light">{p}</Pill>
                  </li>
                ),
              )}
            </ul>
          </div>
        </Container>
      </section>

      <div className="border-b-2 border-ink bg-zest py-3 text-ink">
        <Marquee items={marqueeTerms} />
      </div>

      {/* Form + sidebar */}
      <section className="bg-bone py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.55fr_0.95fr] lg:gap-12">
            <Reveal>
              <JobSeekerForm />
            </Reveal>

            <aside className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start">
              <div className="overflow-hidden rounded-5xl border-2 border-ink shadow-block">
                <img
                  src={photo.seekerB({ w: 800, h: 600 })}
                  alt="A young man smiling after getting a job offer"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              <div className="rounded-5xl border-2 border-ink bg-white p-7 shadow-block">
                <Eyebrow>What happens next</Eyebrow>
                <ol className="mt-5 flex flex-col gap-5">
                  {whatHappens.map((w, i) => (
                    <li key={w.t} className="flex gap-4">
                      <span className="relative flex flex-col items-center">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 border-ink bg-zest text-[0.72rem] font-extrabold">
                          {i + 1}
                        </span>
                        {i < whatHappens.length - 1 && (
                          <span className="mt-1 w-[2px] flex-1 bg-line" aria-hidden="true" />
                        )}
                      </span>
                      <div className="pb-1">
                        <p className="text-[0.92rem] font-extrabold">{w.t}</p>
                        <p className="mt-1 text-[0.86rem] leading-relaxed text-ink-2">{w.b}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-5xl border-2 border-ink bg-zest p-7 shadow-block">
                <Eyebrow tone="grape">Registration Pack</Eyebrow>
                <p className="mt-3 font-display text-5xl leading-none font-extrabold">
                  £30
                  <span className="ml-2 text-lg font-bold">one-off</span>
                </p>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-ink/80">
                  Confirms your particulars meet regulations and registers your profile. No further
                  fees at any time.
                </p>
                <Button href="/register#candidate" variant="ink" size="md" full className="mt-5">
                  Pay your Registration Pack
                </Button>
              </div>

              <div className="rounded-5xl border-2 border-ink bg-coral p-7 shadow-block">
                <h2 className="font-display text-[1.3rem] leading-tight font-extrabold">
                  Rather just talk to someone?
                </h2>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-ink/80">
                  Completely fine. Ring the office and ask for the duty consultant — no form
                  needed, no appointment.
                </p>
                <a
                  href={contact.phoneHref}
                  className="mt-5 flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-white px-5 py-3.5 font-display text-lg font-extrabold shadow-block transition-transform hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px]"
                >
                  {contact.phone}
                </a>
                <p className="mt-4 text-center text-[0.76rem] font-semibold text-ink/60">
                  Monday–Friday 9:30am–4:30pm · Saturday 10am–3pm
                </p>
              </div>

              <div className="rounded-5xl border-2 border-line bg-cream/60 p-6">
                <p className="text-[0.82rem] leading-relaxed text-ink-2">
                  <span className="font-bold text-ink">Your data, your call.</span> We only share
                  your CV with a client once you&rsquo;ve said yes to that specific role. Ask us to
                  delete anything and we will, same day.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
