import type { Metadata } from "next";

// The contact page is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "Contact Us | Largo MD",
  description:
    "Call or text (240) 859-1014, Mon–Fri 8 AM–6 PM, or book online. Appliance repair across Prince George's County, Silver Spring and Washington, DC.",
  alternates: { canonical: "https://www.metroappliances.net/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
