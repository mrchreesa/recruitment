"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { contact } from "@/lib/content";
import { Button, Eyebrow, cx } from "../ui";
import { Field } from "./form-kit";

type Fee = { label: ReactNode; price: string; per: string };

/**
 * Collects the registrant's details, then hands off to a Stripe Payment Link.
 * The email is passed through as `prefilled_email` so they don't retype it at checkout.
 * While `paymentUrl` is empty (links not set up yet) it shows a call-us fallback instead.
 */
function RegistrationCard({
  id,
  eyebrow,
  title,
  fees,
  children,
  notes,
  paymentUrl,
  payLabel,
  surface,
}: {
  id: string;
  eyebrow: string;
  title: string;
  fees: Fee[];
  children: ReactNode;
  notes?: ReactNode;
  paymentUrl: string;
  payLabel: string;
  surface: string;
}) {
  const [unavailable, setUnavailable] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!paymentUrl) {
      setUnavailable(true);
      return;
    }
    const email = new FormData(e.currentTarget).get("email");
    const url = new URL(paymentUrl);
    if (typeof email === "string" && email) url.searchParams.set("prefilled_email", email);
    window.location.assign(url.toString());
  };

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className="flex h-full scroll-mt-28 flex-col overflow-hidden rounded-5xl border-2 border-ink bg-white shadow-block-lg"
    >
      <div className={cx("border-b-2 border-ink p-7 sm:p-9", surface)}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 text-[1.8rem] leading-[1.05] font-extrabold sm:text-[2.2rem]">{title}</h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-7 sm:p-9">
        {children}

        <dl className="mt-2 flex flex-col divide-y-2 divide-line rounded-3xl border-2 border-ink">
          {fees.map((f) => (
            <div key={f.price} className="flex items-start justify-between gap-4 px-5 py-4">
              <dt className="text-[0.9rem] leading-snug font-semibold text-ink-2">{f.label}</dt>
              <dd className="shrink-0 text-right">
                <span className="block font-display text-[1.5rem] leading-none font-extrabold">{f.price}</span>
                <span className="mt-1 block text-[0.72rem] font-bold uppercase tracking-wider text-ink-3">
                  {f.per}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        {notes}

        <div className="mt-auto pt-3">
          {unavailable ? (
            <p role="status" className="rounded-2xl border-2 border-ink bg-butter-soft px-5 py-4 text-[0.9rem] leading-relaxed text-ink">
              <span className="font-bold">Online payment is being set up.</span> Please call us on{" "}
              <a href={contact.phoneHref} className="font-bold text-grape underline underline-offset-2">
                {contact.phone}
              </a>{" "}
              to complete your registration.
            </p>
          ) : (
            <>
              <Button type="submit" variant="zest" size="lg" full>
                {payLabel}
              </Button>
              <p className="mt-3 text-center text-[0.76rem] text-ink-3">
                You&rsquo;ll continue to our secure payment page.
              </p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

export function CandidateRegistration({ paymentUrl }: { paymentUrl: string }) {
  return (
    <RegistrationCard
      id="candidate"
      eyebrow="Your name"
      title="Registering as a Volunteer Parachute Candidate"
      surface="bg-zest"
      paymentUrl={paymentUrl}
      payLabel="Continue to payment — £30"
      fees={[{ label: "Volunteer Parachute Candidate Registration", price: "£30", per: "One-off" }]}
      notes={
        <p className="text-[0.86rem] leading-relaxed text-ink-2">
          Confirms your particulars meet regulations and registers your profile. After your
          Registration Pack there are no further fees at any time.
        </p>
      }
    >
      <Field label="Your name" name="name" required autoComplete="name" placeholder="Jordan Okafor" />
      <Field label="Your contact telephone number" name="phone" type="tel" required autoComplete="tel" placeholder="07700 900123" />
      <Field label="Your email" name="email" type="email" required autoComplete="email" placeholder="you@email.com" />
    </RegistrationCard>
  );
}

export function EmployerRegistration({ paymentUrl }: { paymentUrl: string }) {
  return (
    <RegistrationCard
      id="employer"
      eyebrow="Your company"
      title="Registering as an Employer"
      surface="bg-grape-soft"
      paymentUrl={paymentUrl}
      payLabel="Continue to payment — £1,250"
      fees={[
        {
          label: "Employer Registration (to include 1st Volunteer Parachute Candidate)",
          price: "£1,250",
          per: "One-off",
        },
        {
          label: "Each additional or on-going Volunteer Parachute Candidate, payable by employer",
          price: "£250",
          per: "Per quarter",
        },
      ]}
      notes={
        <div className="rounded-3xl bg-cream px-5 py-4 text-[0.86rem] leading-relaxed text-ink-2">
          <p>
            <span className="font-bold text-ink">Plus:</span> the employer pays the Volunteer
            Parachute member of staff £100 cash expenses, per week.
          </p>
          <p className="mt-2">
            Eliminating National Insurance, minimum wages, sick pay, etc., as a Parachute Candidate
            is a voluntary worker.
          </p>
        </div>
      }
    >
      <Field label="Your company name" name="company" required autoComplete="organization" placeholder="Your company Ltd" />
      <Field label="Your contact name" name="name" required autoComplete="name" placeholder="Sarah Whitfield" />
      <Field label="Your contact telephone number" name="phone" type="tel" required autoComplete="tel" placeholder="020 0000 0000" />
      <Field label="Your email" name="email" type="email" required autoComplete="email" placeholder="you@company.co.uk" />
    </RegistrationCard>
  );
}
