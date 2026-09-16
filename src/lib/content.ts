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
    ["Monday – Thursday", "8:00am – 6:00pm"],
    ["Friday", "8:00am – 5:00pm"],
    ["Saturday", "9:00am – 1:00pm"],
    ["Sunday", "Closed"],
  ] as const,
};

/* ------------------------------------------------------------------ */
/* Sectors                                                             */
/* ------------------------------------------------------------------ */

export type Sector = {
  slug: string;
  name: string;
  blurb: string;
  pay: string;
  roles: string[];
  image: string;
  tint: "grape" | "coral" | "butter" | "zest";
};

export const sectors: Sector[] = [
  {
    slug: "warehouse",
    name: "Warehouse & Logistics",
    blurb: "Pickers, packers, FLT drivers and shift leads across the North West's biggest distribution hubs.",
    pay: "£12.21 – £15.80 / hr",
    roles: ["Picker / Packer", "FLT Counterbalance", "Goods In", "Shift Supervisor"],
    image: photo.warehouse({ w: 900, h: 1100 }),
    tint: "grape",
  },
  {
    slug: "hospitality",
    name: "Hospitality & Events",
    blurb: "Bar, front of house, baristas and event crew. Flexible shifts that fit around study and family.",
    pay: "£12.21 – £16.00 / hr",
    roles: ["Bar Staff", "Barista", "Waiting Staff", "Event Crew"],
    image: photo.hospitality({ w: 900, h: 1100 }),
    tint: "coral",
  },
  {
    slug: "care",
    name: "Health & Social Care",
    blurb: "Support workers, HCAs and care assistants. Full training and DBS support included.",
    pay: "£12.60 – £18.40 / hr",
    roles: ["Support Worker", "Healthcare Assistant", "Care Assistant", "Senior Carer"],
    image: photo.care({ w: 900, h: 1100 }),
    tint: "butter",
  },
  {
    slug: "construction",
    name: "Construction & Trades",
    blurb: "CSCS-carded labourers through to skilled trades. Sites across the Midlands and North.",
    pay: "£14.00 – £24.00 / hr",
    roles: ["Labourer (CSCS)", "Groundworker", "Carpenter", "Site Operative"],
    image: photo.construction({ w: 900, h: 1100 }),
    tint: "zest",
  },
  {
    slug: "retail",
    name: "Retail & Customer Service",
    blurb: "Shop floor, tills, stockroom and seasonal peaks. Great first step into permanent work.",
    pay: "£12.21 – £14.50 / hr",
    roles: ["Sales Assistant", "Stockroom", "Customer Advisor", "Team Leader"],
    image: photo.retail({ w: 900, h: 1100 }),
    tint: "coral",
  },
  {
    slug: "driving",
    name: "Driving & Delivery",
    blurb: "Multi-drop, van and 7.5t work. We cover licence checks and route inductions.",
    pay: "£13.50 – £19.00 / hr",
    roles: ["Multi-drop Driver", "Van Driver", "7.5t Driver", "Driver's Mate"],
    image: photo.driver({ w: 900, h: 1100 }),
    tint: "grape",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Production",
    blurb: "Production operatives, machine ops and QC. Days, nights and rotating shifts.",
    pay: "£12.50 – £17.20 / hr",
    roles: ["Production Operative", "Machine Operator", "Quality Control", "Line Lead"],
    image: photo.manufacturing({ w: 900, h: 1100 }),
    tint: "butter",
  },
  {
    slug: "office",
    name: "Office & Admin",
    blurb: "Admin, reception, data entry and contact centre roles — temp, temp-to-perm and permanent.",
    pay: "£12.80 – £18.00 / hr",
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
    body: "Two minutes, one form. No CV yet? Tell us what you've done and we'll build one with you — free.",
  },
  {
    n: "02",
    title: "Have a proper chat",
    body: "A real consultant calls you within 24 hours. We talk hours, travel, money and what you actually want.",
  },
  {
    n: "03",
    title: "Get matched & prepped",
    body: "We only send you roles that fit. Interview prep, what to wear, what they'll ask — all covered.",
  },
  {
    n: "04",
    title: "Start earning",
    body: "Offer accepted. We sort the paperwork, chase your start date and check in during week one.",
  },
];

export const employerSteps = [
  {
    n: "01",
    title: "Tell us the brief",
    body: "Roles, volume, shift pattern, start date. A 15-minute call is usually all it takes.",
  },
  {
    n: "02",
    title: "Shortlist in 48 hours",
    body: "Pre-screened, right-to-work checked, reference-backed candidates — never a CV dump.",
  },
  {
    n: "03",
    title: "You interview, we handle the rest",
    body: "Scheduling, reminders, feedback loops and offer management run through your account manager.",
  },
  {
    n: "04",
    title: "Aftercare that sticks",
    body: "Day-one check-ins, week-one reviews and a free replacement inside the rebate period.",
  },
];

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export const services = [
  {
    slug: "temporary",
    name: "Temporary & Shift Staffing",
    tag: "Cover in 24 hrs",
    body: "Same-week cover for peaks, sickness and seasonal surges. One pooled workforce, fully compliant, invoiced weekly.",
    points: ["Vetted worker pool of 4,000+", "Weekly payroll & AWR handled", "Out-of-hours booking line", "Live timesheet portal"],
    tint: "grape" as const,
  },
  {
    slug: "temp-to-perm",
    name: "Temp-to-Perm",
    tag: "Try before you hire",
    body: "Bring someone in on a temp basis, see them work, then convert with a sliding fee that drops the longer they stay.",
    points: ["Zero conversion fee after 12 weeks", "Weekly performance notes", "Swap-out at any point", "Ideal for first-time hires"],
    tint: "coral" as const,
  },
  {
    slug: "permanent",
    name: "Permanent Recruitment",
    tag: "90-day rebate",
    body: "Full search and selection for roles you need to get right first time. Competency interviews, references and a written shortlist report.",
    points: ["Structured competency screening", "Written shortlist report", "90-day free replacement", "Fixed percentage fee"],
    tint: "butter" as const,
  },
  {
    slug: "volume",
    name: "Volume & Project Ramp-Up",
    tag: "50 – 500 people",
    body: "New site opening, peak season or a contract win. We run assessment days, inductions and on-site management for you.",
    points: ["On-site account manager", "Group assessment days", "Transport & induction planning", "Daily fill-rate reporting"],
    tint: "zest" as const,
  },
  {
    slug: "youth",
    name: "Youth Employment Programmes",
    tag: "Our speciality",
    body: "Structured routes into work for 18–29s, built with local colleges and employers. Includes CV clinics and interview coaching.",
    points: ["Free CV and profile build", "Mock interviews", "Apprenticeship signposting", "Travel & kit support fund"],
    tint: "grape" as const,
  },
  {
    slug: "compliance",
    name: "Compliance & Payroll",
    tag: "Fully covered",
    body: "Right-to-work, DBS, CSCS, AWR and pension auto-enrolment. Audit-ready records for every single placement.",
    points: ["Digital RTW checks", "DBS & CSCS verification", "AWR parity tracking", "Full audit trail"],
    tint: "coral" as const,
  },
];

/* ------------------------------------------------------------------ */
/* Social proof                                                        */
/* ------------------------------------------------------------------ */

export const seekerTestimonials = [
  {
    quote:
      "I'd been applying for months and heard nothing back. Rang these on the Tuesday, had a trial shift Thursday, permanent contract by the end of the month.",
    name: "Leah M.",
    role: "Warehouse Team Lead · Trafford Park",
    age: "23",
    avatar: photo.seekerC({ w: 200, h: 200 }),
  },
  {
    quote:
      "They actually helped me write my CV instead of just telling me it was bad. First proper job after college and I'm still there two years later.",
    name: "Deon A.",
    role: "Production Operative · Oldham",
    age: "21",
    avatar: photo.seekerB({ w: 200, h: 200 }),
  },
  {
    quote:
      "No pressure, no dodgy shifts, no being ghosted. My consultant texts me before every placement to check I'm alright with it.",
    name: "Priya R.",
    role: "Healthcare Assistant · Stockport",
    age: "26",
    avatar: photo.seekerF({ w: 200, h: 200 }),
  },
  {
    quote:
      "Got me flexible bar work that fits around uni, and they never guilt-trip me when I can't do a shift. Sound people.",
    name: "Callum W.",
    role: "Bar Supervisor · Manchester",
    age: "22",
    avatar: photo.seekerE({ w: 200, h: 200 }),
  },
];

export const employerTestimonials = [
  {
    quote:
      "We needed 60 seasonal operatives in three weeks. They ran the assessment days on site and filled every shift. Retention beat our own internal hiring by a mile.",
    name: "Sarah Whitfield",
    role: "Head of Operations",
    company: "Northern Fulfilment Group",
    avatar: photo.seekerA({ w: 200, h: 200 }),
  },
  {
    quote:
      "The shortlists are short. Four CVs, all interviewable, all right-to-work checked. That's the whole reason we stopped using anyone else.",
    name: "Marcus Bell",
    role: "Site Director",
    company: "Halden Construction",
    avatar: photo.seekerG({ w: 200, h: 200 }),
  },
];

export const stats = [
  { value: "4,200+", label: "people placed since 2019" },
  { value: "24 hrs", label: "average time to first call" },
  { value: "48 hrs", label: "typical employer shortlist" },
  { value: "91%", label: "still in role at 6 months" },
];

export const clientLogos = [
  "NORTHFIELD LOGISTICS",
  "HALDEN CONSTRUCTION",
  "BRIGHTSIDE CARE",
  "MERIDIAN FOODS",
  "CASTLEGATE RETAIL",
  "ORBIT MANUFACTURING",
];

export const accreditations = ["REC Corporate Member", "Disability Confident", "Living Wage Employer", "Cyber Essentials"];

/* ------------------------------------------------------------------ */
/* FAQs                                                                */
/* ------------------------------------------------------------------ */

export const seekerFaqs = [
  {
    q: "Does it cost me anything?",
    a: "No. Never. It is illegal for a recruitment agency in the UK to charge a work-seeker a fee for finding them work, and we don't charge for CV help, interview coaching or anything else either. Employers pay us.",
  },
  {
    q: "I don't have a CV. Can I still apply?",
    a: "Yes. Tick the 'I don't have a CV yet' box on the upload form and a consultant will call you and build one with you over the phone. It takes about twenty minutes.",
  },
  {
    q: "I've got no experience at all.",
    a: "That's genuinely fine — a big chunk of what we do is first jobs. Plenty of our warehouse, hospitality and care clients train from scratch. Attitude and turning up on time matter more than a CV.",
  },
  {
    q: "How quickly could I start?",
    a: "For temporary work, often within a week. We've had people register on a Monday and start a shift on the Wednesday. Permanent roles usually run two to four weeks from first call to start date.",
  },
  {
    q: "What do I need to bring?",
    a: "Photo ID and proof of your right to work in the UK — a passport, or a share code. If you're missing something, tell us and we'll talk you through the alternatives.",
  },
  {
    q: "Will you keep sending me jobs I don't want?",
    a: "No. You tell us your travel limit, your hours and your minimum pay, and we stick to it. One text, one reply, and you can pause your profile at any time.",
  },
];

export const employerFaqs = [
  {
    q: "How fast can you cover a shift?",
    a: "Same-day for warehouse, driving and hospitality where we hold a live pool. For everything else, expect a vetted shortlist within 48 hours of the brief.",
  },
  {
    q: "What do you charge?",
    a: "Temporary work is a transparent hourly charge rate — pay rate plus a fixed margin, no hidden uplifts. Permanent placements are a fixed percentage of first-year salary with a 90-day rebate. Full rate card on request.",
  },
  {
    q: "How do you vet candidates?",
    a: "Digital right-to-work checks, two references, a structured competency interview and sector tickets where relevant (CSCS, DBS, FLT). Every record is audit-ready.",
  },
  {
    q: "What happens if someone doesn't work out?",
    a: "Temporary: tell us and we replace them, usually the same day, and you don't pay for hours not worked. Permanent: a free replacement inside the 90-day rebate period.",
  },
  {
    q: "Do you handle AWR and payroll?",
    a: "Yes. We're the employer of record for temporary workers — PAYE, holiday accrual, pension auto-enrolment and Agency Worker Regulations parity tracking all sit with us.",
  },
];

/* ------------------------------------------------------------------ */
/* Misc                                                                */
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
  "Manchester",
  "Salford",
  "Stockport",
  "Oldham",
  "Bolton",
  "Warrington",
  "Liverpool",
  "Leeds",
  "Sheffield",
  "Birmingham",
  "Preston",
  "Chester",
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

export const experienceOptions = [
  "No experience yet",
  "Under 1 year",
  "1 – 3 years",
  "3 – 5 years",
  "5+ years",
];

export const shiftOptions = ["Days", "Nights", "Weekends", "Flexible / any", "Part-time only"];

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

export const staffCountOptions = ["1 – 2", "3 – 5", "6 – 10", "11 – 25", "26 – 50", "50+"];

export const urgencyOptions = [
  "Immediately — this week",
  "Within 2 weeks",
  "Within a month",
  "1 – 3 months",
  "Planning ahead / no fixed date",
];

export const contractOptions = ["Temporary", "Temp-to-perm", "Permanent", "Not sure yet"];
