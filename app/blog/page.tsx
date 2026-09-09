import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Appliance Repair Tips & Guides | Blog",
  description:
    "Appliance repair tips, maintenance guides, and homeowner advice from Metro Appliance Services — serving the Greater DMV area since 2019.",
  alternates: { canonical: "https://www.metroappliances.net/blog" },
};

const crumbs = [
  { name: "Home", url: "https://www.metroappliances.net" },
  { name: "Blog", url: "https://www.metroappliances.net/blog" },
];

const UPCOMING_TOPICS = [
  "Why Your Refrigerator Isn't Cooling (And What to Do)",
  "How Often Should You Clean Your Dryer Vent? The Answer Might Surprise You",
  "5 Signs Your Washer Needs Professional Repair",
  "Gas vs. Electric: Which Appliances Are Cheaper to Repair?",
  "How to Choose a Reliable Appliance Repair Company in the DMV",
  "The Real Cost of Ignoring a Broken Dishwasher",
];

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />

      {/* Hero */}
      <section className="section-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-[#F5821F]">Blog</span>
          </nav>
          <h1
            className="font-heading text-4xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Appliance Repair Tips & Guides
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Expert advice on appliance maintenance, common repairs, and how to get the most
            out of your home appliances — from the technicians at Metro Appliance Services.
          </p>
        </div>
      </section>

      {/* Coming soon */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-5xl mb-5">📝</div>
          <h2
            className="font-heading text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Content Coming Soon
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto">
            We&apos;re building a library of helpful guides for DMV homeowners. In the meantime,
            call us for any appliance questions — no charge for advice.
          </p>

          <div className="bg-[#E2E6EC] rounded-2xl border border-gray-200 p-8 text-left mb-10">
            <h3
              className="font-heading text-xl font-bold text-[#1B2A4A] mb-5"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Coming Soon — Topics We&apos;re Covering
            </h3>
            <ul className="space-y-3">
              {UPCOMING_TOPICS.map((topic) => (
                <li key={topic} className="flex items-start gap-3">
                  <span className="text-[#F5821F] font-bold mt-0.5">→</span>
                  <span className="text-gray-600 font-medium">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-gray-500 mb-6">
            Have a specific appliance question? Our technicians are happy to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12408591014"
              className="btn-pulse bg-[#F5821F] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#D96B10] transition-colors text-lg"
            >
              Call (240) 859-1014
            </a>
            <Link
              href="/services"
              className="bg-[#1B2A4A] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#243560] transition-colors text-lg"
            >
              View Our Services →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
