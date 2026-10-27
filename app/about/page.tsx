import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us | Largo MD",
  description:
    "Learn about Metro Appliance Services — a locally-owned appliance repair company serving the Greater DMV area since 2019. Expert technicians, OEM parts, 1-year warranty.",
  alternates: { canonical: "https://www.metroappliances.net/about" },
};

const crumbs = [
  { name: "Home", url: "https://www.metroappliances.net" },
  { name: "About Us", url: "https://www.metroappliances.net/about" },
];

export default function AboutPage() {
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
            <span className="text-[#F5821F]">About Us</span>
          </nav>
          <h1
            className="font-heading text-4xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            About Metro Appliance Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            A locally-owned appliance repair company serving Maryland and Washington, DC
            since 2019 — with experienced technicians, OEM parts, and a commitment to honest service.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="font-heading text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-6"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Who We Are
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Metro Appliance Services was founded in 2019 with a simple mission: provide the
                  Greater DMV area with professional, honest appliance repair at a fair price.
                </p>
                <p>
                  We&apos;re a locally-owned business based in Largo, MD — not a national franchise. Every
                  technician we send to your home is experienced, thoroughly vetted, and committed to
                  doing the job right the first time.
                </p>
                <p>
                  We believe in transparency: clear pricing before we start, honest assessments of
                  whether repair or replacement makes more sense, and a one-year limited warranty on most
                  repairs we complete.
                </p>
              </div>
            </div>

            <div className="section-navy rounded-2xl p-8 text-white">
              <h3
                className="font-heading text-2xl font-bold mb-6"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                By the Numbers
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "2019", label: "Year Founded" },
                  { value: "17", label: "Communities Served" },
                  { value: "8", label: "Appliance Types" },
                  { value: "1-Yr", label: "Warranty on Most Jobs" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div
                      className="text-3xl font-bold text-[#F5821F]"
                      style={{ fontFamily: "var(--font-barlow-condensed)" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technician */}
      <section className="bg-[#E2E6EC] py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="font-heading text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-8 text-center"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Meet the Team
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-8 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="shrink-0 w-28 h-28 rounded-full bg-[#1B2A4A] flex items-center justify-center text-white text-3xl font-bold" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
              FR
            </div>
            <div>
              <h3
                className="font-heading text-2xl font-bold text-[#1B2A4A] mb-1"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Foman &ldquo;Frank&rdquo; Robinson
              </h3>
              <p className="text-[#F5821F] font-semibold text-sm mb-3">Lead Appliance Repair Technician &nbsp;·&nbsp; Greater DMV Since 2019</p>
              <p className="text-gray-600 leading-relaxed">
                Frank founded Metro Appliance Services in 2019 with one goal: give DMV homeowners access to
                honest, thorough appliance repair without the runaround. He personally handles every service
                call — diagnosing refrigerators, washers, dryers, ovens, cooktops, dishwashers, and garbage
                disposals across all major brands. When you book with Metro Appliance Services, you&apos;re
                getting Frank at your door, not a random dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="font-heading text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-10 text-center"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            The MAS Guarantee
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🛡️",
                title: "1-Year Parts & Labor Warranty",
                desc: "Most repairs are backed by a one-year limited warranty. If the same issue returns, we fix it at no charge.",
              },
              {
                icon: "🔩",
                title: "OEM Parts Only",
                desc: "We use only original equipment manufacturer or manufacturer-approved parts — never cheap aftermarket alternatives.",
              },
              {
                icon: "💰",
                title: "Transparent, Upfront Pricing",
                desc: "We quote you the full price before any work begins. No hidden fees, no surprise charges on the invoice.",
              },
              {
                icon: "🔬",
                title: "Thorough Diagnostics",
                desc: "We offer thorough diagnostics that go above and beyond the reported issue, helping extend the life and performance of your appliance.",
              },
              {
                icon: "📋",
                title: "Detailed Assessment",
                desc: "We give you a clear, honest picture of what's wrong and what it will cost before any work begins.",
              },
              {
                icon: "🏠",
                title: "Locally Owned & Operated",
                desc: "We're your neighbors — based in Largo, MD, serving the DMV community with pride since 2019.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3
                  className="font-heading text-xl font-bold text-[#1B2A4A] mb-2"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="font-heading text-3xl font-bold text-[#1B2A4A] mb-6"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 text-sm">
            <div className="bg-[#E2E6EC] rounded-lg p-4">
              <p className="text-[#F5821F] font-bold mb-1">📞 Phone</p>
              <a href="tel:+12408591014" className="text-[#1B2A4A] font-semibold hover:text-[#F5821F]">
                (240) 859-1014
              </a>
            </div>
            <div className="bg-[#E2E6EC] rounded-lg p-4">
              <p className="text-[#F5821F] font-bold mb-1">✉️ Email</p>
              <a href="mailto:support@metroappliances.net" className="text-[#1B2A4A] font-semibold hover:text-[#F5821F] break-all">
                support@metroappliances.net
              </a>
            </div>
            <div className="bg-[#E2E6EC] rounded-lg p-4">
              <p className="text-[#F5821F] font-bold mb-1">🕐 Hours</p>
              <p className="text-[#1B2A4A] font-semibold">Mon–Fri 8AM–6PM</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="btn-pulse inline-block bg-[#F5821F] text-white font-bold px-10 py-4 rounded-lg hover:bg-[#D96B10] transition-colors text-lg"
          >
            Schedule a Repair →
          </Link>
        </div>
      </section>
    </>
  );
}
