import type { Metadata } from "next";
import { BRAND, contact } from "./content";
import { siteUrl } from "./site";

/** The site-wide share card (app/opengraph-image.tsx), re-attached on every page. */
const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "The JobFather — Volunteer Parachute Positions, £100 per week expenses, 9 hours per week, Croydon & South London.",
};

/**
 * Per-page metadata. Next merges metadata shallowly, so a page that sets `openGraph`
 * replaces the root layout's block entirely — this rebuilds the shared fields each time.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} · ${BRAND}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: BRAND,
      type: "website",
      locale: "en_GB",
      images: [shareImage],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [shareImage] },
  };
}

/* ------------------------------------------------------------------ */
/* Structured data (schema.org JSON-LD)                                */
/* ------------------------------------------------------------------ */

export const absoluteUrl = (path = "/") => new URL(path, siteUrl).toString();
const url = absoluteUrl;
const ORG_ID = url("/#organization");

const gbp = (price: number) => ({ price: String(price), priceCurrency: "GBP" });

/** The business itself — rendered once, site-wide, from the root layout. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EmploymentAgency",
        "@id": ORG_ID,
        name: BRAND,
        url: url(),
        logo: url("/icon.svg"),
        image: url("/opengraph-image"),
        description:
          "The JobFather recruits with a difference, specialising in Volunteer Parachute Positions: 9 hours' work per week, in a rotation to suit the candidate and the employer, with £100 expenses paid at the end of every week.",
        telephone: "+44 7984 690625",
        email: contact.email,
        areaServed: [
          { "@type": "City", name: "Croydon" },
          { "@type": "Place", name: "South London" },
        ],
        founder: {
          "@type": "Person",
          name: "Dr. Winston McKenzie",
          honorificPrefix: "His Excellency, Ambassador",
          alternateName: BRAND,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:30",
            closes: "16:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "10:00",
            closes: "15:00",
          },
        ],
        priceRange: "£30 – £1,250",
        knowsAbout: ["Volunteer Parachute Positions", "Recruitment", "CV help", "Interview coaching"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Registration & fees",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Volunteer Parachute Candidate Registration",
              description:
                "One-off Registration Pack to confirm a candidate's particulars meet regulations and register their profile. No further fees.",
              url: url("/register#candidate"),
              ...gbp(30),
            },
            {
              "@type": "Offer",
              name: "Employer Registration",
              description: "One-off employer registration, including the first Volunteer Parachute Candidate.",
              url: url("/register#employer"),
              ...gbp(1250),
            },
            {
              "@type": "Offer",
              name: "Additional Volunteer Parachute Candidate",
              description: "Each additional or on-going Volunteer Parachute Candidate, payable by the employer.",
              url: url("/register#employer"),
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                ...gbp(250),
                billingDuration: "P3M",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": url("/#website"),
        name: BRAND,
        url: url(),
        inLanguage: "en-GB",
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Indexable pages, in rough order of importance — shared by the sitemap and llms.txt. */
export const indexedPages = [
  { path: "/", title: "Home", priority: 1 },
  { path: "/job-seekers", title: "For job seekers", priority: 0.9 },
  { path: "/employers", title: "For employers", priority: 0.9 },
  { path: "/register", title: "Registration & fees", priority: 0.8 },
  { path: "/upload-cv", title: "Upload your CV", priority: 0.8 },
  { path: "/services", title: "Services", priority: 0.7 },
  { path: "/book", title: "Book a consultation", priority: 0.6 },
  { path: "/contact", title: "Contact", priority: 0.6 },
] as const;
