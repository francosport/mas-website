import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { LOCATIONS, getLocationBySlug, getAllLocationSlugs } from "@/lib/locations";
import { locationPageSchema, breadcrumbSchema } from "@/lib/schema";
import ApplianceIcon from "@/components/ApplianceIcon";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const location = getLocationBySlug(city);
  if (!location) return {};
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: `https://www.metroappliances.net/service-areas/${city}`,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `https://www.metroappliances.net/service-areas/${city}`,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const location = getLocationBySlug(city);
  if (!location) notFound();

  const nearbyLocations = LOCATIONS.filter(
    (l) => l.slug !== city && location.nearbyAreas.some((a) => a.includes(l.name))
  ).slice(0, 4);

  const crumbs = [
    { name: "Home", url: "https://www.metroappliances.net" },
    { name: "Service Areas", url: "https://www.metroappliances.net/service-areas" },
    {
      name: `${location.name}, ${location.state}`,
      url: `https://www.metroappliances.net/service-areas/${city}`,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationPageSchema(location)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />

      {/* Hero */}
      <section className="section-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/service-areas" className="hover:text-white transition-colors">Service Areas</Link>
            <span>›</span>
            <span className="text-[#F5821F]">{location.name}, {location.state}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              {location.isPriority && (
                <span className="inline-block bg-[#F5821F]/20 border border-[#F5821F]/40 text-[#F5821F] text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  Priority Service Area
                </span>
              )}
              <h1
                className="font-heading text-4xl md:text-6xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Appliance Repair in{" "}
                <span className="text-[#F5821F]">{location.name}, {location.state}</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">{location.description}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+12408591014"
                  className="btn-pulse bg-[#F5821F] text-white font-bold px-7 py-3 rounded-lg hover:bg-[#D96B10] transition-colors"
                >
                  Call (240) 859-1014
                </a>
                <a
                  href="https://booking.metroappliances.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 border border-white/20 text-white font-bold px-7 py-3 rounded-lg hover:bg-white/20 transition-colors"
                >
                  Book Online
                </a>
              </div>
            </div>

            {/* Location info sidebar */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3
                className="font-heading text-xl font-bold text-[#1B2A4A] mb-4"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Service Details
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex gap-2">
                  <span className="text-[#F5821F]">📍</span>
                  <div>
                    <p className="font-semibold text-[#1B2A4A]">Area</p>
                    <p className="text-gray-500">{location.name}, {location.state}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#F5821F]">🏛️</span>
                  <div>
                    <p className="font-semibold text-[#1B2A4A]">County</p>
                    <p className="text-gray-500">{location.county}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#F5821F]">🕐</span>
                  <div>
                    <p className="font-semibold text-[#1B2A4A]">Hours</p>
                    <p className="text-gray-500">Mon–Fri, 8:00 AM – 6:00 PM</p>
                  </div>
                </div>
                {location.zipCodes.length > 0 && (
                  <div className="flex gap-2">
                    <span className="text-[#F5821F]">📮</span>
                    <div>
                      <p className="font-semibold text-[#1B2A4A]">ZIP Codes</p>
                      <p className="text-gray-500">{location.zipCodes.join(", ")}</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-5 pt-5 border-t border-gray-100">
                <a
                  href="tel:+12408591014"
                  className="btn-pulse block bg-[#F5821F] text-white font-bold text-center py-3 rounded-lg hover:bg-[#D96B10] transition-colors"
                >
                  (240) 859-1014
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in this area */}
      <section className="bg-[#E2E6EC] py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="font-heading text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Appliance Repair Services in {location.name}
          </h2>
          <p className="text-gray-600 mb-8">
            Metro Appliance Services offers the full range of appliance repair in {location.name}, {location.state}.
            All repairs include our 1-year parts-and-labor warranty.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="card-hover bg-white border border-gray-200 rounded-lg p-4 text-center group"
              >
                <div className="flex justify-center text-[#1B2A4A] group-hover:text-[#F5821F] transition-colors mb-2">
                  <ApplianceIcon slug={service.slug} size={36} />
                </div>
                <p
                  className="font-heading font-bold text-[#1B2A4A] group-hover:text-[#F5821F] transition-colors text-sm"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {service.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Area content */}
      {location.isPriority && (
        <section className="bg-white py-14">
          <div className="max-w-4xl mx-auto px-4">
            <h2
              className="font-heading text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-6"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Serving {location.name} Homeowners Since 2019
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Metro Appliance Services is proud to serve {location.name}, {location.state} — one of the
                DMV&apos;s most established residential communities. Our certified technicians provide
                fast, professional appliance repair to homeowners throughout {location.name} and
                surrounding neighborhoods including {location.neighborhoods.join(", ")}.
              </p>
              <p>
                When your refrigerator stops cooling, your washer won&apos;t spin, or your dryer is leaving
                clothes damp, you need a repair service you can trust. Metro Appliance Services uses
                only OEM (original equipment manufacturer) parts and backs every repair with a full
                1-year parts-and-labor warranty.
              </p>
              <p>
                Our service area covers all of {location.name}, {location.state}. Call{" "}
                <a href="tel:+12408591014" className="text-[#F5821F] font-semibold">(240) 859-1014</a>{" "}
                or book online to schedule your repair today.
              </p>
            </div>

            {location.neighborhoods.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3
                  className="font-heading text-xl font-bold text-[#1B2A4A] mb-4"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  Neighborhoods We Serve in {location.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {location.neighborhoods.map((n) => (
                    <span
                      key={n}
                      className="bg-[#E2E6EC] border border-gray-200 text-[#1B2A4A] text-sm px-3 py-1.5 rounded-full font-medium"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Nearby areas */}
      {nearbyLocations.length > 0 && (
        <section className="bg-[#E2E6EC] py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h3
              className="font-heading text-2xl font-bold text-[#1B2A4A] mb-5"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Nearby Service Areas
            </h3>
            <div className="flex flex-wrap gap-3">
              {nearbyLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/service-areas/${loc.slug}`}
                  className="bg-white border border-gray-200 text-[#1B2A4A] hover:border-[#F5821F] hover:text-[#F5821F] transition-colors px-4 py-2 rounded-lg text-sm font-medium"
                >
                  {loc.name}, {loc.state} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#F5821F] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="font-heading text-3xl md:text-4xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Schedule Appliance Repair in {location.name}
          </h2>
          <p className="text-orange-100 mb-6">
            OEM parts. 1-year warranty. Transparent pricing. Certified technicians.
          </p>
          <a
            href="tel:+12408591014"
            className="bg-[#1B2A4A] text-white font-bold px-10 py-4 rounded-lg hover:bg-[#0F1A2E] transition-colors text-xl inline-block"
          >
            Call (240) 859-1014
          </a>
        </div>
      </section>
    </>
  );
}
