import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Appliance Repair Services in Largo MD",
  description:
    "Metro Appliance Services offers certified repair for refrigerators, washers, dryers, ovens, cooktops, dishwashers, garbage disposals, and dryer vent cleaning across the Greater DMV area.",
  alternates: { canonical: "https://www.metroappliances.net/services" },
};

const crumbs = [
  { name: "Home", url: "https://www.metroappliances.net" },
  { name: "Services", url: "https://www.metroappliances.net/services" },
];

export default function ServicesPage() {
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
            <span className="text-[#F5821F]">Services</span>
          </nav>
          <h1
            className="font-heading text-4xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Our Appliance Repair Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Certified technicians, OEM parts, and a 1-year warranty on every repair.
            We service all major brands across 17 communities in the Greater DMV.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-[#E2E6EC] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="card-hover bg-white rounded-xl border border-gray-200 p-7 flex gap-5 group"
              >
                <div className="text-5xl flex-shrink-0">{service.icon}</div>
                <div className="flex-1">
                  <h2
                    className="font-heading text-2xl font-bold text-[#1B2A4A] group-hover:text-[#F5821F] transition-colors mb-2"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {service.name}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.symptoms.slice(0, 3).map((symptom) => (
                      <span
                        key={symptom}
                        className="bg-[#E2E6EC] text-[#1B2A4A] text-xs px-2 py-1 rounded-full border border-gray-200"
                      >
                        {symptom}
                      </span>
                    ))}
                  </div>
                  <span className="text-[#F5821F] font-semibold text-sm group-hover:underline">
                    Learn more & book →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B2A4A] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="font-heading text-3xl md:text-4xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Not sure which service you need?
          </h2>
          <p className="text-gray-300 mb-6">
            Call us and describe the problem — we&apos;ll tell you exactly what&apos;s wrong and what it costs.
          </p>
          <a
            href="tel:+12408591014"
            className="btn-pulse inline-block bg-[#F5821F] text-white font-bold px-10 py-4 rounded-lg hover:bg-[#D96B10] transition-colors text-xl"
          >
            Call (240) 859-1014
          </a>
        </div>
      </section>
    </>
  );
}
