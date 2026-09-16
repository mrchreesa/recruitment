import type { Metadata } from "next";
import type { ReactNode } from "react";
import { preconnect } from "react-dom";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
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

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "The JobFather — Volunteer Parachute Positions · Croydon & South London",
    template: "%s · The JobFather",
  },
  description:
    "The JobFather, His Excellency Ambassador Dr. Winston McKenzie, recruits with a difference. Volunteer Parachute Positions, full-time and part-time roles across Croydon and South London.",
  openGraph: {
    title: "The JobFather — We recruit with a difference",
    description:
      "Become a Parachute Applicant — and land yourself in a job. £100 per week expenses for 9 hours' work per week. Croydon & South London.",
    url: "/",
    siteName: "The JobFather",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "The JobFather — We recruit with a difference",
    description:
      "Become a Parachute Applicant — and land yourself in a job. £100 per week expenses for 9 hours' work per week. Croydon & South London.",
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
      </body>
    </html>
  );
}
