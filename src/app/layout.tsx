import type { Metadata } from "next";
import type { ReactNode } from "react";
import { preconnect } from "react-dom";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { BRAND } from "@/lib/content";
import { organizationJsonLd, shareImage } from "@/lib/seo";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const title = `${BRAND} — Volunteer Parachute Positions`;
const description =
  "Volunteer Parachute Positions in Croydon & South London. Work 9 hours a week with £100 weekly expenses. Register as a job seeker or employer.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: BRAND,
  title: {
    default: title,
    template: `%s · ${BRAND}`,
  },
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: BRAND,
    type: "website",
    locale: "en_GB",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // Open the Unsplash connection early — most page photography is served from there.
  preconnect("https://images.unsplash.com");

  return (
    <html lang="en-GB" className={`${display.variable} ${sans.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:border-2 focus:border-ink focus:bg-zest focus:px-5 focus:py-3 focus:font-bold"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <JsonLd data={organizationJsonLd()} />
      </body>
    </html>
  );
}
