import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES, getServiceBySlug, getAllServiceSlugs } from "@/lib/services";
import { servicePageSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { getPostsForService } from "@/lib/posts";
import ApplianceIcon from "@/components/ApplianceIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://www.metroappliances.net/services/${slug}`,
    },
    openGraph: {
      title: `${service.metaTitle} | Metro Appliance Services`,
      description: service.metaDescription,
      url: `https://www.metroappliances.net/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 4);
  const guides = getPostsForService(slug);

  const crumbs = [
    { name: "Home", url: "https://www.metroappliances.net" },
    { name: "Services", url: "https://www.metroappliances.net/services" },
    { name: service.name, url: `https://www.metroappliances.net/services/${slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicePageSchema(service)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(service.faqs)) }}
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
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>›</span>
            <span className="text-[#F5821F]">{service.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              <div className="text-[#F5821F] mb-4">
                <ApplianceIcon slug={service.slug} size={64} />
              </div>
              <h1
                className="font-heading text-4xl md:text-6xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                {service.name}{" "}
                <span className="text-[#F5821F]">in the DMV Area</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">{service.description}</p>
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

            {/* Quick-contact sidebar */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3
                className="font-heading text-xl font-bold text-[#1B2A4A] mb-4"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Book {service.shortName} Repair
              </h3>
              <div className="space-y-3 mb-5">
                {[
                  "✓ Thorough, above-and-beyond diagnostics",
                  "✓ OEM parts — always",
                  "✓ 1-year parts & labor warranty",
                  "✓ Transparent, upfront pricing",
                  "✓ Experienced, professional technicians",
                ].map((item) => (
                  <p key={item} className="text-sm text-gray-600 flex items-start gap-1">
                    <span className="text-[#F5821F] font-bold">{item.slice(0, 1)}</span>
                    {item.slice(1)}
                  </p>
                ))}
              </div>
              <a
                href="tel:+12408591014"
                className="btn-pulse block bg-[#F5821F] text-white font-bold text-center py-3 rounded-lg hover:bg-[#D96B10] transition-colors mb-2"
              >
                (240) 859-1014
              </a>
              <a
                href="https://booking.metroappliances.net"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-[#1B2A4A] border border-gray-200 py-3 rounded-lg hover:bg-[#E2E6EC] transition-colors text-sm font-semibold"
              >
                Book Online →
              </a>
              <p className="text-center text-gray-400 text-xs mt-3">Mon–Fri 8:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="bg-[#E2E6EC] py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="font-heading text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-8"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Signs You Need {service.shortName} Repair
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {service.symptoms.map((symptom) => (
              <div
                key={symptom}
                className="bg-white rounded-lg border border-gray-200 p-4 flex items-start gap-3"
              >
                <span className="text-[#F5821F] font-bold text-lg mt-0.5">⚠</span>
                <p className="text-[#1B2A4A] font-medium text-sm">{symptom}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long description */}
      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h2
            className="font-heading text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-6"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            About Our {service.name} Service
          </h2>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
            {service.longDescription.split("\n\n").map((paragraph, idx) => {
              if (paragraph.startsWith("**") && paragraph.includes("**:")) {
                const [boldPart, ...rest] = paragraph.split("**:");
                const title = boldPart.replace("**", "").trim();
                return (
                  <div key={idx}>
                    <h3
                      className="font-heading text-xl font-bold text-[#1B2A4A] mb-2"
                      style={{ fontFamily: "var(--font-barlow-condensed)" }}
                    >
                      {title}
                    </h3>
                    <p>{rest.join("**:").trim()}</p>
                  </div>
                );
              }
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul key={idx} className="list-disc list-inside space-y-1">
                    {items.map((item, i) => (
                      <li key={i}>{item.slice(2)}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={idx}>{paragraph}</p>;
            })}
          </div>

          {/* Brands */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3
              className="font-heading text-xl font-bold text-[#1B2A4A] mb-4"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Brands We Service
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.brands.map((brand) => (
                <span
                  key={brand}
                  className="bg-[#E2E6EC] border border-gray-200 text-[#1B2A4A] text-sm px-3 py-1.5 rounded-full font-medium"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-navy py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2
            className="font-heading text-3xl md:text-4xl font-bold text-white mb-8"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            {service.name} FAQ
          </h2>
          <Accordion className="space-y-3">
            {service.faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="bg-white/5 border border-white/10 rounded-xl px-5 overflow-hidden"
              >
                <AccordionTrigger className="text-white font-semibold text-left py-5 hover:no-underline hover:text-[#F5821F] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {guides.length > 0 && (
            <div className="mt-8 space-y-2">
              {guides.map((g) => (
                <p key={g.slug} className="text-gray-300">
                  Read our guide:{" "}
                  <Link href={`/blog/${g.slug}`} className="text-[#F5821F] font-semibold hover:underline">
                    {g.title}
                  </Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-[#E2E6EC] py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="font-heading text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-6"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Other Services We Offer
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="card-hover bg-white border border-gray-200 rounded-lg p-4 text-center group"
              >
                <div className="flex justify-center text-[#1B2A4A] group-hover:text-[#F5821F] transition-colors mb-2">
                  <ApplianceIcon slug={s.slug} size={36} />
                </div>
                <p
                  className="font-heading font-bold text-[#1B2A4A] group-hover:text-[#F5821F] transition-colors text-sm"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {s.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#F5821F] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="font-heading text-3xl md:text-4xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Ready to Schedule {service.shortName} Repair?
          </h2>
          <p className="text-orange-100 mb-6">
            OEM parts. 1-year warranty. Transparent pricing. Serving 17 DMV communities.
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
