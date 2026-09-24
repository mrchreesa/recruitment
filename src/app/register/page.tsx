import { CandidateRegistration, EmployerRegistration } from "@/components/forms/registration-form";
import { Reveal } from "@/components/reveal";
import { Container, Eyebrow, Pill } from "@/components/ui";
import { contact, payments } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Registration & fees",
  description:
    "Register with The JobFather. Volunteer Parachute Candidates £30 one-off. Employers £1,250 one-off, including your first Volunteer Parachute Candidate.",
  path: "/register",
});

export default function RegisterPage() {
  return (
    <>
      <section className="grain relative overflow-hidden border-b-2 border-ink bg-grape-deep text-white">
        <div className="pointer-events-none absolute -top-32 right-[10%] h-80 w-80 rounded-full bg-grape/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-[5%] h-80 w-80 rounded-full bg-zest/15 blur-3xl" />
        <Container className="relative py-12 sm:py-16">
          <div className="max-w-3xl">
            <Eyebrow tone="light">Registration &amp; fees</Eyebrow>
            <h1 className="mt-5 text-[2.6rem] leading-[0.98] font-extrabold sm:text-6xl lg:text-[4rem]">
              Register once.
              <br />
              <span className="text-zest">Get started.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/75">
              Choose your side, fill in your details and continue to our secure payment page. Any
              questions first? Ring us on{" "}
              <a href={contact.phoneHref} className="font-bold text-white underline decoration-zest decoration-2 underline-offset-4">
                {contact.phone}
              </a>
              .
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {["Candidates £30 one-off", "Employers £1,250 one-off", "Secure online payment"].map((p) => (
                <li key={p}>
                  <Pill tone="light">{p}</Pill>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-bone py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <Reveal className="h-full">
              <CandidateRegistration paymentUrl={payments.candidateRegistration} />
            </Reveal>
            <Reveal delay={90} className="h-full">
              <EmployerRegistration paymentUrl={payments.employerRegistration} />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
