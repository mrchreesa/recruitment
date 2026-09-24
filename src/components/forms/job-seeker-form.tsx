"use client";

import {
  Check,
  Field,
  FileDrop,
  FormSection,
  FormShell,
  SelectField,
  TextareaField,
  ChipGroup,
} from "./form-kit";
import {
  availabilityOptions,
  contact,
  locations,
  rotationOptions,
  workTypes,
} from "@/lib/content";

export function JobSeekerForm({ id = "apply" }: { id?: string }) {
  return (
    <FormShell
      id={id}
      submitLabel="Send my details"
      accent="zest"
      successTitle="Nice one — that's in."
      successBody={`A consultant will call you back within 24 hours (Mon–Sat). Save our number, ${contact.phone}, so you don't miss us. In the meantime, you can complete your £30 Registration Pack.`}
      next={{ href: "/register#candidate", label: "Pay your Registration Pack" }}
      footnote={
        <>
          We&rsquo;ll only ever use your details to find you work. No further fees, no spam, and you
          can ask us to delete anything at any time.
        </>
      }
    >
      <FormSection step="1" title="About you">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full name" name="name" required autoComplete="name" placeholder="Jordan Okafor" />
          <Field
            label="Phone number"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="07700 900123"
            hint="We'll text before we call"
          />
          <Field
            label="Email address"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
          />
          <SelectField label="Your area" name="location" options={locations} required placeholder="Where are you based?" />
        </div>
      </FormSection>

      <FormSection step="2" title="The work you're after">
        <div className="grid gap-5 sm:grid-cols-2">
          <SelectField label="Type of work" name="workType" options={workTypes} required placeholder="Pick a sector" />
          <SelectField
            label="When can you start?"
            name="availability"
            options={availabilityOptions}
            required
            placeholder="Your availability"
          />
          <TextareaField
            label="Previous experience or qualifications?"
            name="experience"
            rows={3}
            placeholder="E.g. six months' bar work, Food Hygiene Level 2 — or nothing yet, that's fine."
            hint="First-timers welcome"
            className="sm:col-span-2"
          />
        </div>
        <ChipGroup label="Weekly pattern that suits you" options={rotationOptions} hint="Pick as many as you like" />
      </FormSection>

      <FormSection step="3" title="Your CV">
        <FileDrop />
        <Check
          name="noCv"
          label="I don't have a CV yet — please help me build one (it's free)"
        />
      </FormSection>

      <FormSection step="4" title="Anything else?">
        <TextareaField
          label="Tell us anything useful"
          name="message"
          rows={4}
          placeholder="Travel limits, physical restrictions, days or times you definitely can't work, or what you'd love to get into."
          hint="Optional"
        />
        <Check
          name="consent"
          required
          label={
            <>
              I&rsquo;m happy for{" "}
              <span className="font-semibold text-ink">The JobFather</span> to contact me about work and to
              hold my details in line with their privacy policy.
            </>
          }
        />
      </FormSection>
    </FormShell>
  );
}
