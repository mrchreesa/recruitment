import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
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
  metadataBase: new URL("https://example.com"),
  title: {
    default: "The JobFather — Volunteer Parachute Positions · Croydon & South London",
    template: "%s · The JobFather",
  },
  description:
    "The JobFather, His Excellency Ambassador Dr. Winston McKenzie, recruits with a difference. Volunteer Parachute Positions, full-time and part-time roles across Croydon and South London.",
  openGraph: {
    title: "The JobFather",
    description:
      "We recruit with a difference. Become a Parachute Applicant — and land yourself in a job.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
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
