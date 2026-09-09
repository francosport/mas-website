import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS, getPriorityLocations } from "@/lib/locations";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Appliance Repair Service Areas | Greater DMV",
  description:
    "Metro Appliance Services repairs appliances in 17 communities across Maryland and Washington, DC — including Bowie, Mitchellville, Upper Marlboro, Clinton, Waldorf, Silver Spring, and more.",
  alternates: { canonical: "https://www.metroappliances.net/service-areas" },
};

const crumbs = [
  { name: "Home", url: "https://www.metroappliances.net" },
  { name: "Service Areas", url: "https://www.metroappliances.net/service-areas" },
];

export default function ServiceAreasPage() {
  const priority = getPriorityLocations();
  const standard = LOCATIONS.filter((l) => !l.isPriority);

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
            <span className="text-[#F5821F]">Service Areas</span>
          </nav>
          <h1
            className="font-heading text-4xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Serving 17 Communities Across the DMV
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Based in Largo, MD, Metro Appliance Services provides certified appliance repair
            throughout Prince George&apos;s County, Montgomery County, Charles County, and
            Washington, DC.
          </p>
        </div>
      </section>

      {/* Priority areas */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <h2
              className="font-heading text-3xl md:text-4xl font-bold text-[#1B2A4A]"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Top Communities We Serve
            </h2>
            <span className="bg-[#F5821F] text-white text-xs font-bold px-3 py-1 rounded-full">
              Most Requested
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {priority.map((location) => (
              <Link
                key={location.slug}
                href={`/service-areas/${location.slug}`}
                className="card-hover bg-[#E2E6EC] rounded-xl border border-gray-200 p-6 group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3
                      className="font-heading text-xl font-bold text-[#1B2A4A] group-hover:text-[#F5821F] transition-colors mb-1"
                      style={{ fontFamily: "var(--font-barlow-condensed)" }}
                    >
                      {location.name}, {location.state}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{location.description}</p>
                    {location.zipCodes.length > 0 && (
                      <p className="text-gray-400 text-xs mt-2">
                        ZIP: {location.zipCodes.join(", ")}
                      </p>
                    )}
                  </div>
                  <span className="text-[#F5821F] font-bold text-xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Standard areas */}
      <section className="bg-[#E2E6EC] py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="font-heading text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-6"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Additional Service Areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {standard.map((location) => (
              <Link
                key={location.slug}
                href={`/service-areas/${location.slug}`}
                className="card-hover bg-white border border-gray-200 rounded-lg p-4 group"
              >
                <h3
                  className="font-heading font-bold text-[#1B2A4A] group-hover:text-[#F5821F] transition-colors"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {location.name}, {location.state}
                </h3>
                <p className="text-gray-400 text-xs mt-1">{location.county}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B2A4A] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="font-heading text-3xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Don&apos;t see your city?
          </h2>
          <p className="text-gray-300 mb-6">
            Call us — we may still be able to serve you. Our coverage area is expanding.
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
