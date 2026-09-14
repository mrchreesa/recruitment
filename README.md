# LOGO Recruitment — demo site

A design demo for a UK recruitment agency. Eight pages, conversion-focused, built
to be shown to a client. **Nothing is wired to a backend** — forms validate and show
a success state, then stop.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

`npm run build` produces a fully static export-able build (all 8 pages prerender).

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, dual-path split, stats, process, sectors, testimonials, employer band, FAQs |
| `/about` | Story, timeline, values, team, accreditations |
| `/job-seekers` | Benefits, process, sectors, rights explainer, testimonials, FAQs |
| `/upload-cv` | **Job seeker form** with CV drag-and-drop + sidebar |
| `/employers` | Pain/fix cards, process, the case for younger hires, **employer brief form**, FAQs |
| `/services` | Six services, temp vs temp-to-perm vs permanent comparison table |
| `/book` | **Booking form** with a live day picker and time slots |
| `/contact` | Routing cards, **contact form**, opening hours, illustrative office map |

## Forms (demo behaviour)

All four forms use native HTML5 validation, then fake a 1.1s submit and swap to an
animated confirmation card. To make one real, replace the `onSubmit` in
`src/components/forms/form-kit.tsx` (`FormShell`) with a POST to your endpoint —
that's the only place submission is handled.

| Form | Component | Fields |
| --- | --- | --- |
| Job seeker | `forms/job-seeker-form.tsx` | Name, phone, email, area, work type, availability, experience, shift chips, **CV upload**, message, consent |
| Employer | `forms/employer-form.tsx` | Company, contact, phone, email, location, staff type, headcount, urgency, contract type, message |
| Booking | `forms/booking-form.tsx` | Day, time slot, meeting type, name, company, email, phone, topic, message |
| Contact | `forms/contact-form.tsx` | Reason, name, email, phone, company, message |

The CV drop zone (`FileDrop`) accepts drag-and-drop or click-to-browse and shows the
chosen filename and size. The file is held in component state only — never uploaded.

## Design system

Tokens live in `src/app/globals.css` under `@theme` (Tailwind v4 — no config file).

| Token | Value | Role |
| --- | --- | --- |
| `grape` / `grape-deep` | `#6D28D9` / `#240A4D` | Primary, dark sections |
| `zest` | `#C4F542` | Primary CTA, highlights |
| `coral` | `#FF6B5B` | Accents, badges, alerts |
| `butter` | `#FFD166` | Fourth card tint |
| `bone` / `cream` | `#FDFCF8` / `#F6F1E7` | Page and alternate backgrounds |
| `ink` | `#14121A` | Text and the 2px borders everywhere |

Type: **Bricolage Grotesque** (display) + **Plus Jakarta Sans** (body), via `next/font`.

Custom utilities in the same file: `grain` (paper noise), `marker-zest` /
`marker-coral` (hand-drawn highlighter behind a word), `shadow-block*` (chunky offset
shadows), `fade-x` (marquee edge fade), `no-scrollbar`.

## Content & imagery

- Copy, stats, testimonials, sectors and FAQs are all in `src/lib/content.ts` — one file to edit.
- Brand name is the `BRAND` constant (`"LOGO"` placeholder) in that same file.
- Photography is served from the Unsplash CDN; the curated set is in `src/lib/images.ts`.
  For production, swap these for licensed or client-supplied photos.

## Notes before this goes live

- Forms need a backend (see above), plus spam protection and a virus scan on CV uploads.
- Privacy policy, cookie and modern slavery links in the footer are inert placeholders.
- The contact page map is an illustration, not a real map embed.
- Replace the `LOGO` wordmark, the `icon.svg` favicon, and `metadataBase` in
  `src/app/layout.tsx` with the real brand and domain.
