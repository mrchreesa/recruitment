import { PageHero } from "@/components/sections/page-hero";
import { SectorGrid } from "@/components/sections/sector-grid";
import { photo } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Volunteer Parachute Positions: pre-selected candidates for 9 hours a week across Croydon & South London, with a possible permanent position to follow.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            One agency.
            <br />
            One <span className="text-zest">speciality.</span>
          </>
        }
        lead="We specialise in Volunteer Parachute Positions: pre-selected candidates working 9 hours a week, in a rotation to suit you and your business. Each one derives from a revolving 3-month position — leading to a possible permanent position, if you choose."
        primary={{ href: "/book", label: "Book a consultation" }}
        secondary={{ href: "/employers#brief", label: "Send a brief" }}
        image={photo.warehouseAisle({ w: 900, h: 1100 })}
        imageAlt="A large distribution warehouse"
        pills={["Volunteer Parachute Positions", "9 hrs per week", "3-month revolving position", "Croydon & South London"]}
      />

      <SectorGrid heading />
    </>
  );
}
