import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const SITE_URL = "https://www.metroappliances.net";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Appliance Repair in Largo MD | Metro Appliance Services",
    template: "%s | Metro Appliance Services",
  },
  description:
    "Professional appliance repair in Largo, MD & the DMV. Refrigerator, washer, dryer, oven & dishwasher repair. 1-year warranty. Call (240) 859-1014.",
  keywords: [
    "appliance repair Largo MD",
    "appliance repair DMV",
    "refrigerator repair Maryland",
    "washer repair Prince George's County",
    "dryer repair near me",
    "Metro Appliance Services",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Metro Appliance Services",
    title: "Appliance Repair in Largo MD | Metro Appliance Services",
    description:
      "Professional appliance repair in the Greater DMV. Refrigerator, washer, dryer, oven, dishwasher. OEM parts, 1-year warranty. Call (240) 859-1014.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Metro Appliance Services — DMV Appliance Repair Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Appliance Repair in Largo MD | Metro Appliance Services",
    description:
      "Professional appliance repair in the Greater DMV. OEM parts, 1-year warranty, transparent pricing. Call (240) 859-1014.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://cdn.trustindex.io" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-barlow), ui-sans-serif, system-ui, sans-serif" }}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#F5821F] focus:text-white focus:font-bold focus:px-4 focus:py-2 focus:rounded-lg focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        {/* Mobile sticky call bar — hidden on md+ where header call button is always visible */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex border-t border-white/10 shadow-xl">
          <a
            href="tel:+12408591014"
            className="flex-1 bg-[#1B2A4A] text-white font-bold text-center py-4 text-base active:bg-[#0F1A2E]"
          >
            📞 Call (240) 859-1014
          </a>
          <a
            href="https://booking.metroappliances.net"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#F5821F] text-white font-bold text-center py-4 text-base active:bg-[#D96B10]"
          >
            Book Online
          </a>
        </div>
        {/* Spacer so footer content isn't hidden behind sticky bar on mobile */}
        <div className="md:hidden h-14" />
      </body>
    </html>
  );
}
