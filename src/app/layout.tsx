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
    default: "LOGO Recruitment — Good jobs for young people. Reliable staff for employers.",
    template: "%s · LOGO Recruitment",
  },
  description:
    "A UK recruitment agency built around young people getting into good work. Upload your CV for free, or brief us on the staff you need and get a vetted shortlist in 48 hours.",
  openGraph: {
    title: "LOGO Recruitment",
    description:
      "Good jobs for young people. Reliable staff for employers. Free for job seekers, always.",
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
