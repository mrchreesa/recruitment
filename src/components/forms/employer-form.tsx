"use client";

import {
  Check,
  Field,
  FormSection,
  FormShell,
  SelectField,
  TextareaField,
} from "./form-kit";
import {
  locations,
  staffCountOptions,
  staffTypeOptions,
  urgencyOptions,
} from "@/lib/content";

export function EmployerForm({ id = "brief" }: { id?: string }) {
  return (
    <FormShell
      id={id}
      submitLabel="Send hiring brief"
      accent="grape"
      successTitle="Brief received."
      successBody="A consultant will call you back during office hours to talk through your brief. To get on our shortlist, complete your £1,250 company registration — it includes your first Volunteer Parachute Candidate."
      next={{ href: "/register#employer", label: "Register your company" }}
      footnote={
        <>
          Sent securely and treated as commercially confidential. We&rsquo;ll never approach your
          existing staff.
        </>
      }
    >
      <FormSection step="1" title="Your business">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Company name" name="company" required autoComplete="organization" placeholder="Northfield Logistics Ltd" />
          <Field label="Contact person" name="contact" required autoComplete="name" placeholder="Sarah Whitfield" />
          <Field label="Phone number" name="phone" type="tel" required autoComplete="tel" placeholder="020 0000 0000" />
          <Field label="Email address" name="email" type="email" required autoComplete="email" placeholder="you@company.co.uk" />
          <SelectField
            label="Business location"
            name="location"
            options={locations}
            required
            placeholder="Nearest city or town"
            className="sm:col-span-2"
          />
        </div>
      </FormSection>

      <FormSection step="2" title="What you need">
        <div className="grid gap-5 sm:grid-cols-2">
          <SelectField label="Type of staff required" name="staffType" options={staffTypeOptions} required placeholder="Pick a sector" />
          <SelectField label="Number of staff" name="staffCount" options={staffCountOptions} required placeholder="How many people?" />
          <SelectField
            label="Urgency / start date"
            name="urgency"
            options={urgencyOptions}
            required
            placeholder="When do you need them?"
            className="sm:col-span-2"
          />
        </div>
        <p className="rounded-2xl border-2 border-ink bg-zest-soft px-4 py-3.5 text-[0.9rem] font-bold text-ink">
          We specialise in Volunteer Parachute Positions.
        </p>
      </FormSection>

      <FormSection step="3" title="The detail">
        <TextareaField
          label="Tell us anything useful"
          name="message"
          rows={5}
          placeholder="Travel expected, physical work, communication with customers, certifications required, etc."
          hint="Optional but useful"
        />
        <Check
          name="consent"
          required
          label={
            <>
              I&rsquo;m happy for <span className="font-semibold text-ink">The JobFather</span> to contact me
              about this vacancy and to hold these details in line with their privacy policy.
            </>
          }
        />
      </FormSection>
    </FormShell>
  );
}
