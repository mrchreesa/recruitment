import { photo } from "./images";

export const BRAND = "The JobFather";

export const contact = {
  phone: "07984 690625",
  phoneHref: "tel:07984690625",
  whatsapp: "07984 690625",
  email: "winstonscrusade@hotmail.com",
  employersEmail: "winstonscrusade@hotmail.com",
  address: ["Croydon & South London"],
  hours: [
    ["Monday – Friday", "9:30am – 4:30pm"],
    ["Saturday", "10:00am – 3:00pm"],
    ["Sunday", "Closed"],
  ] as const,
};

/**
 * Stripe Payment Links for the registration page.
 * TODO: paste the live links here — while a link is empty, the register page
 * asks the visitor to call the office instead of sending them to checkout.
 */
export const payments = {
  candidateRegistration: "",
  employerRegistration: "",
};

/* ------------------------------------------------------------------ */
/* Sectors                                                             */
/* ------------------------------------------------------------------ */

export type Sector = {
  slug: string;
  name: string;
  blurb: string;
  roles: string[];
  image: string;
  tint: "grape" | "coral" | "butter" | "zest";
};

export const sectors: Sector[] = [
  {
    slug: "warehouse",
    name: "Warehouse & Logistics",
    blurb: "Picking, packing, goods-in and stock work. A practical first step for anyone happy to get stuck in.",
    roles: ["Picker / Packer", "FLT Counterbalance", "Goods In", "Shift Supervisor"],
    image: photo.warehouse({ w: 900, h: 1100 }),
    tint: "grape",
  },
  {
    slug: "hospitality",
    name: "Hospitality & Events",
    blurb: "Bar, front of house, barista and event work. Hours that fit around study and family.",
    roles: ["Bar Staff", "Barista", "Waiting Staff", "Event Crew"],
    image: photo.hospitality({ w: 900, h: 1100 }),
    tint: "coral",
  },
  {
    slug: "care",
    name: "Health & Social Care",
    blurb: "Support and care assistant roles for people who want to make a difference day to day.",
    roles: ["Support Worker", "Healthcare Assistant", "Care Assistant", "Senior Carer"],
    image: photo.care({ w: 900, h: 1100 }),
    tint: "butter",
  },
  {
    slug: "construction",
    name: "Construction & Trades",
    blurb: "Labouring through to skilled trades, for people who like to see what they've built.",
    roles: ["Labourer (CSCS)", "Groundworker", "Carpenter", "Site Operative"],
    image: photo.construction({ w: 900, h: 1100 }),
    tint: "zest",
  },
  {
    slug: "retail",
    name: "Retail & Customer Service",
    blurb: "Shop floor, tills and stockroom. A great way to build confidence with customers.",
    roles: ["Sales Assistant", "Stockroom", "Customer Advisor", "Team Leader"],
    image: photo.retail({ w: 900, h: 1100 }),
    tint: "coral",
  },
  {
    slug: "driving",
    name: "Driving & Delivery",
    blurb: "Van, delivery and driver's-mate work, with licence checks covered.",
    roles: ["Multi-drop Driver", "Van Driver", "7.5t Driver", "Driver's Mate"],
    image: photo.driver({ w: 900, h: 1100 }),
    tint: "grape",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Production",
    blurb: "Production, machine operation and quality control roles.",
    roles: ["Production Operative", "Machine Operator", "Quality Control", "Line Lead"],
    image: photo.manufacturing({ w: 900, h: 1100 }),
    tint: "butter",
  },
  {
    slug: "office",
    name: "Office & Admin",
    blurb: "Admin, reception, data entry and customer support roles.",
    roles: ["Administrator", "Receptionist", "Data Entry", "Customer Support"],
    image: photo.officeAdmin({ w: 900, h: 1100 }),
    tint: "zest",
  },
];

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

export const seekerSteps = [
  {
    n: "01",
    title: "Send us your CV",
    body: "Two minutes, one form. No CV yet? Tell us what you've done and we'll help you build one.",
  },
  {
    n: "02",
    title: "Registration Pack",
    body: "A one-off £30 to confirm your particulars meet regulations and register your profile. No further fees.",
  },
  {
    n: "03",
    title: "Have a proper chat",
    body: "A real consultant calls you back within 24 hours to talk through your hours, travel and what you'd love to try.",
  },
  {
    n: "04",
    title: "Start your Parachute Position",
    body: "9 hours a week in a rotation to suit you, with £100 expenses paid at the end of every week.",
  },
];

export const employerSteps = [
  {
    n: "01",
    title: "Tell us the brief",
    body: "What you're short of, when you need them and the days that suit. A short call is usually all it takes.",
  },
  {
    n: "02",
    title: "Register your company",
    body: "A one-off £1,250, which includes your first Volunteer Parachute Candidate.",
  },
  {
    n: "03",
    title: "Meet your candidate",
    body: "A pre-selected, right-to-work checked Volunteer Parachute Candidate, ready to start.",
  },
  {
    n: "04",
    title: "Replacement if needed",
    body: "If the candidate is found to be unsuitable within 2 weeks, we find a replacement at no additional charge.",
  },
];

/* ------------------------------------------------------------------ */
/* FAQs                                                                */
/* ------------------------------------------------------------------ */

export const seekerFaqs = [
  {
    q: "Does it cost me anything?",
    a: "Only your introductory Registration fee of £30, to make sure you are compliant. We do not charge you a fee for finding you work, for helping with your CV, or for any interview coaching. Nothing else. The employers pay us to find you.",
  },
  {
    q: "I don't have a CV. Can I still apply?",
    a: "Yes. Tick the 'I don't have a CV yet' box on the upload form and a consultant will call you and build one with you over the phone.",
  },
  {
    q: "I've got no experience at all.",
    a: "That's fine — first-timers are welcome. A Volunteer Parachute Position is a great way to get your first job, and attitude and turning up on time matter more than a CV.",
  },
  {
    q: "How many hours would I work?",
    a: "9 hours a week, in a rotation to suit you and your employer — for example 9 hours on one day, 4½ hours on two days, or 3 hours on three days. Expenses of £100 are paid at the end of every week.",
  },
  {
    q: "What do I need to bring?",
    a: "Photo ID and proof of your right to work in the UK — a passport, or a share code. If you're missing something, tell us and we'll talk you through the alternatives.",
  },
  {
    q: "Will you keep sending me jobs I don't want?",
    a: "No. You tell us your travel limit, your hours and anything else pertinent, and we stick to it. One text, one reply, and you can pause your profile at any time.",
  },
];

export const employerFaqs = [
  {
    q: "What do you charge?",
    a: "After your one-off Registration fee of £1,250 (which includes your first Volunteer Parachute Candidate), you only pay us £250 per quarter per candidate. You also pay the Volunteer Parachute Worker £100 expenses directly, at the end of every week's task, for the quarter.",
  },
  {
    q: "What is a Volunteer Parachute Position?",
    a: "A voluntary position of 9 hours per week, in a rotation to suit you and the candidate, derived from a revolving 3-month position. It can lead to a permanent position — that part is optional.",
  },
  {
    q: "How do you vet candidates?",
    a: "Every Volunteer Parachute Candidate completes our Registration Pack, which confirms their particulars meet regulations, and is right-to-work checked before we put them forward.",
  },
  {
    q: "What happens if it doesn't work out?",
    a: "If the candidate is found to be unsuitable within 2 weeks, a replacement will be found at no additional charge.",
  },
];

/* ------------------------------------------------------------------ */
/* Form options                                                        */
/* ------------------------------------------------------------------ */

export const marqueeTerms = [
  "Warehouse",
  "Hospitality",
  "Care",
  "Construction",
  "Retail",
  "Driving",
  "Manufacturing",
  "Admin",
  "Events",
  "Customer Service",
];

export const locations = [
  "Croydon",
  "Purley",
  "Thornton Heath",
  "Norbury",
  "Streatham",
  "Brixton",
  "Sutton",
  "Mitcham",
  "Wimbledon",
  "Bromley",
  "Lewisham",
  "Elsewhere in South London",
];

export const workTypes = [
  "Warehouse & Logistics",
  "Hospitality & Events",
  "Health & Social Care",
  "Construction & Trades",
  "Retail & Customer Service",
  "Driving & Delivery",
  "Manufacturing & Production",
  "Office & Admin",
  "Not sure yet — help me decide",
];

export const availabilityOptions = [
  "Immediately",
  "Within 1 week",
  "Within 2 weeks",
  "Within a month",
  "Just looking for now",
];

/** The weekly rotations a 9-hour Parachute Position can take. */
export const rotationOptions = [
  "9 hrs × 1 day",
  "4½ hrs × 2 days",
  "3 hrs × 3 days",
  "1½ hrs × 6 days",
  "Flexible",
];

export const staffTypeOptions = [
  "Warehouse & Logistics",
  "Hospitality & Events",
  "Health & Social Care",
  "Construction & Trades",
  "Retail & Customer Service",
  "Driving & Delivery",
  "Manufacturing & Production",
  "Office & Admin",
  "Mixed / multiple roles",
];

export const staffCountOptions = ["1", "2", "3 – 5", "6 – 10", "10+"];

export const urgencyOptions = [
  "Immediately — this week",
  "Within 2 weeks",
  "Within a month",
  "1 – 3 months",
  "Planning ahead / no fixed date",
];
