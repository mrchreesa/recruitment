"use client";

import { Check, ChipGroup, Field, FormSection, FormShell, TextareaField } from "./form-kit";

const reasons = [
  "I'm looking for work",
  "I want to hire staff",
  "I'm already registered",
  "Something else",
];

export function ContactForm({ id = "contact-form" }: { id?: string }) {
  return (
    <FormShell
      id={id}
      submitLabel="Send message"
      accent="coral"
      successTitle="Message sent."
      successBody="We reply to everything within one working day — usually a lot faster. If it's urgent, give the office a ring during opening hours."
      footnote="We aim to reply within one working day, Monday to Saturday."
    >
      <FormSection step="1" title="Who's getting in touch">
        <ChipGroup label="I'm contacting you because…" options={reasons} single />
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Your name" name="name" required autoComplete="name" placeholder="Jordan Okafor" />
          <Field label="Email address" name="email" type="email" required autoComplete="email" placeholder="you@email.com" />
          <Field label="Phone number" name="phone" type="tel" autoComplete="tel" placeholder="07700 900123" hint="Optional" />
          <Field label="Company" name="company" autoComplete="organization" placeholder="If you're an employer" hint="Optional" />
        </div>
      </FormSection>

      <FormSection step="2" title="Your message">
        <TextareaField
          label="How can we help?"
          name="message"
          rows={6}
          required
          placeholder="Tell us what you need and we'll point you at the right person."
        />
        <Check
          name="consent"
          required
          label={
            <>
              I&rsquo;m happy for <span className="font-semibold text-ink">The JobFather</span> to reply to
              this message and hold my details in line with their privacy policy.
            </>
          }
        />
      </FormSection>
    </FormShell>
  );
}
