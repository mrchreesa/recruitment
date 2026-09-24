import { BRAND, contact, employerFaqs, seekerFaqs } from "@/lib/content";
import { absoluteUrl, indexedPages } from "@/lib/seo";

/**
 * llms.txt — a plain-Markdown summary for AI assistants and answer engines (https://llmstxt.org).
 * Built from the same content as the site, so fees, hours and FAQs never drift.
 */
export const dynamic = "force-static";

export function GET() {
  const hours = contact.hours.map(([day, time]) => `- ${day}: ${time}`).join("\n");
  const pages = indexedPages.map((p) => `- [${p.title}](${absoluteUrl(p.path)})`).join("\n");
  const faqs = (list: { q: string; a: string }[]) => list.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n");

  const body = `# ${BRAND}

> ${BRAND} — His Excellency, Ambassador, Dr. Winston McKenzie — is a recruitment agency in Croydon and South London that specialises in Volunteer Parachute Positions: 9 hours' work per week, in a rotation to suit the candidate and the employer, with £100 expenses paid at the end of every week.

## What a Volunteer Parachute Position is

- 9 hours per week, for example 9 hours × 1 day, 4½ hours × 2 days, 3 hours × 3 days or 1½ hours × 6 days.
- Derived from a revolving 3-month position, leading to a possible permanent position (optional).
- The employer pays the candidate £100 expenses directly, at the end of every week.
- Sectors: warehouse & logistics, hospitality & events, health & social care, construction & trades, retail & customer service, driving & delivery, manufacturing & production, office & admin.

## Fees

- Volunteer Parachute Candidate Registration: £30, one-off. No further fees at any time.
- Employer Registration: £1,250, one-off, including the first Volunteer Parachute Candidate.
- Each additional or on-going Volunteer Parachute Candidate: £250 per quarter, payable by the employer.
- If a candidate is found to be unsuitable within 2 weeks, a replacement is found at no additional charge.

## Contact

- Phone: ${contact.phone}
- Email: ${contact.email}
- Area: ${contact.address.join(", ")}

Opening hours:

${hours}

## Pages

${pages}

## Job seeker FAQs

${faqs(seekerFaqs)}

## Employer FAQs

${faqs(employerFaqs)}
`;

  return new Response(body, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
