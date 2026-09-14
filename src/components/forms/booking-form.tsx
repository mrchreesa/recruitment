"use client";

import { useState, useSyncExternalStore } from "react";
import { Check, ChipGroup, Field, FormSection, FormShell, TextareaField } from "./form-kit";
import { cx } from "../ui";

const slots = ["9:00am", "10:00am", "11:30am", "1:00pm", "2:30pm", "4:00pm", "5:15pm"];
const callTypes = ["Phone call", "Video call", "Visit our office", "You come to our site"];
const topics = [
  "Hiring temporary staff",
  "Hiring permanent staff",
  "Volume / project ramp-up",
  "Rates & how it works",
  "I'm looking for work",
];

type Day = { key: string; weekday: string; date: string; month: string; full: boolean };

function nextWorkingDays(count: number): Day[] {
  const out: Day[] = [];
  const cursor = new Date();
  cursor.setDate(cursor.getDate() + 1);
  while (out.length < count) {
    const day = cursor.getDay();
    if (day !== 0) {
      out.push({
        key: cursor.toISOString().slice(0, 10),
        weekday: cursor.toLocaleDateString("en-GB", { weekday: "short" }),
        date: String(cursor.getDate()),
        month: cursor.toLocaleDateString("en-GB", { month: "short" }),
        // A couple of days shown as fully booked — it reads as a real calendar.
        full: out.length === 2 || out.length === 6,
      });
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return out;
}

/**
 * The slots depend on today's date, so they can only be built in the browser —
 * a prerendered list would go stale and break hydration. `useSyncExternalStore`
 * reads them client-side only: `null` on the server and during hydration, the
 * cached list on every render after that.
 */
let dayCache: Day[] | null = null;
const readDays = () => (dayCache ??= nextWorkingDays(8));
const noServerDays = () => null;
const neverChanges = () => () => {};

export function BookingForm({ id = "booking" }: { id?: string }) {
  const days = useSyncExternalStore(neverChanges, readDays, noServerDays);
  const [pickedDay, setPickedDay] = useState<string | null>(null);
  const [slot, setSlot] = useState<string | null>(null);

  // Default to the first day that isn't fully booked.
  const day = pickedDay ?? days?.find((d) => !d.full)?.key ?? null;

  return (
    <FormShell
      id={id}
      submitLabel="Confirm my consultation"
      accent="grape"
      successTitle="You're booked in."
      successBody="A calendar invite is on its way to your inbox with a dial-in link and your consultant's direct number. Need to move it? Just reply to that email."
      footnote="Free, no obligation, and normally about 20 minutes."
    >
      <FormSection step="1" title="Pick a day">
        {!days ? (
          <div className="flex gap-2.5 overflow-hidden">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-[86px] w-[74px] shrink-0 animate-pulse rounded-2xl bg-cream" />
            ))}
          </div>
        ) : (
          <div className="no-scrollbar -mx-1 flex gap-2.5 overflow-x-auto px-1 pb-1">
            {days.map((d) => {
              const on = day === d.key;
              return (
                <button
                  key={d.key}
                  type="button"
                  disabled={d.full}
                  onClick={() => {
                    setPickedDay(d.key);
                    setSlot(null);
                  }}
                  className={cx(
                    "flex w-[74px] shrink-0 flex-col items-center gap-0.5 rounded-2xl border-2 py-3 transition-all duration-150",
                    d.full
                      ? "cursor-not-allowed border-line bg-cream/60 text-ink-3/50"
                      : on
                        ? "border-ink bg-grape text-white shadow-block"
                        : "border-line bg-white text-ink hover:border-ink/40",
                  )}
                >
                  <span className="text-[0.68rem] font-bold uppercase tracking-wider opacity-70">
                    {d.weekday}
                  </span>
                  <span className="font-display text-2xl font-extrabold leading-none">{d.date}</span>
                  <span className="text-[0.66rem] font-semibold opacity-70">
                    {d.full ? "Full" : d.month}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </FormSection>

      <FormSection step="2" title="Pick a time">
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {slots.map((s, i) => {
            const unavailable = i === 3;
            const on = slot === s;
            return (
              <button
                key={s}
                type="button"
                disabled={unavailable}
                onClick={() => setSlot(s)}
                className={cx(
                  "rounded-2xl border-2 py-3 text-[0.85rem] font-bold tracking-tight transition-all duration-150",
                  unavailable
                    ? "cursor-not-allowed border-line bg-cream/60 text-ink-3/50 line-through"
                    : on
                      ? "border-ink bg-zest text-ink shadow-block"
                      : "border-line bg-white text-ink hover:border-ink/40",
                )}
              >
                {s}
              </button>
            );
          })}
        </div>
        <p className="text-[0.78rem] text-ink-3">
          All times UK. Can&rsquo;t see one that works? Tell us below and we&rsquo;ll fit around you —
          we do evenings too.
        </p>
      </FormSection>

      <FormSection step="3" title="Your details">
        <ChipGroup label="How should we meet?" options={callTypes} single />
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full name" name="name" required autoComplete="name" placeholder="Sarah Whitfield" />
          <Field label="Company" name="company" autoComplete="organization" placeholder="Northfield Logistics" hint="If applicable" />
          <Field label="Email address" name="email" type="email" required autoComplete="email" placeholder="you@company.co.uk" />
          <Field label="Phone number" name="phone" type="tel" required autoComplete="tel" placeholder="07700 900123" />
        </div>
        <ChipGroup label="What's it about?" options={topics} single />
        <TextareaField
          label="Anything we should know first?"
          name="message"
          rows={3}
          hint="Optional"
          placeholder="A quick line about your situation means we can come prepared."
        />
        <Check
          name="consent"
          required
          label={
            <>
              I&rsquo;m happy for <span className="font-semibold text-ink">LOGO</span> to contact me
              about this booking and hold my details in line with their privacy policy.
            </>
          }
        />
      </FormSection>
    </FormShell>
  );
}
