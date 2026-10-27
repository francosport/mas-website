import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/services";
import { LOCATIONS } from "@/lib/locations";
import { faqSchema } from "@/lib/schema";
import ApplianceIcon from "@/components/ApplianceIcon";
import TrustindexWidget from "@/components/TrustindexWidget";
import JobsMapSection from "@/components/JobsMapSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Appliance Repair in Largo MD | Metro Appliance Services",
  description:
    "Professional appliance repair in Largo, MD & the DMV. Refrigerator, washer, dryer, oven & dishwasher repair. 1-year warranty. Call (240) 859-1014.",
  alternates: { canonical: "https://www.metroappliances.net" },
};

const BRANDS = [
  "Samsung", "LG", "GE", "Whirlpool", "Maytag",
  "Frigidaire", "Electrolux", "KitchenAid", "Kenmore", "Jenn-Air",
  "Bosch", "Miele", "Sub-Zero", "Viking", "Thermador",
];

const GHL_BOOKING = "https://booking.metroappliances.net";

const HOME_FAQS = [
  {
    question: "What appliances does Metro Appliance Services repair?",
    answer:
      "We repair refrigerators, washing machines, dryers, ranges, ovens, cooktops, dishwashers, and garbage disposals. We also provide professional dryer vent cleaning. We service all major brands including Samsung, LG, GE, Whirlpool, Maytag, Frigidaire, and more.",
  },
  {
    question: "How quickly can I get an appliance repair appointment?",
    answer:
      "We offer flexible scheduling throughout the Greater DMV area and work to accommodate your schedule as soon as possible. Call (240) 859-1014 for current availability.",
  },
  {
    question: "Do you offer a warranty on your appliance repairs?",
    answer:
      "Yes. Most repairs come with a 1-year limited warranty on parts and labor. Exclusions include misuse or overuse of the appliance, known manufacturer issues (addressed via service bulletins), repairs performed at a reduced service rate, or any situations discussed and agreed upon prior to the repair. See our Terms & Conditions for full details.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve the entire Greater DMV area including Largo, Bowie, Mitchellville, Upper Marlboro, Clinton, Waldorf, Silver Spring, Washington DC, Riverdale, Glenarden, Lanham, Hyattsville, Capitol Heights, District Heights, Suitland, College Park, and Seat Pleasant.",
  },
  {
    question: "Do you use original (OEM) parts?",
    answer:
      "Yes. We use OEM (original equipment manufacturer) or manufacturer-approved parts on all repairs to ensure proper fit, performance, and longevity.",
  },
  {
    question: "How do I know if it's worth repairing my appliance or replacing it?",
    answer:
      "A general rule: if the repair cost is less than 50% of the cost of a new unit and the appliance is under 10 years old, repair is almost always the better financial choice. We'll give you an honest assessment and never recommend a repair that isn't in your best interest.",
  },
  {
    question: "Do you charge a diagnostic fee?",
    answer:
      "Yes — there's an $85 service call fee for the initial visit. But you pay the service call fee or the repair fee, never both. If you move forward with the repair, the service call fee is covered. No hidden charges, ever.",
  },
  {
    question: "Why is my refrigerator not cooling but the freezer works?",
    answer:
      "This is usually caused by a failed evaporator fan motor, a clogged defrost drain, or a faulty damper control — all of which prevent cold air from circulating into the refrigerator compartment while the freezer stays cold. It can also be caused by an overfilled fridge blocking air vents. Call us at (240) 859-1014 and we can walk you through a quick check before scheduling a visit.",
  },
  {
    question: "How much does appliance repair cost in the DMV area?",
    answer:
      "Most repairs in the Greater DMV area range from $150 to $400 depending on the appliance, the issue, and the parts required. The service call fee is $85 — if you move forward with the repair, you pay the repair cost only, never both. We quote the full price before any work begins.",
  },
  {
    question: "Do you repair Samsung and LG appliances?",
    answer:
      "Yes — Samsung and LG are two of the most common brands we service. We also repair GE, Whirlpool, Maytag, Frigidaire, Electrolux, KitchenAid, Kenmore, Jenn-Air, Bosch, Miele, Sub-Zero, Viking, and Thermador appliances.",
  },
  {
    question: "How long does an appliance repair take?",
    answer:
      "Most repairs are completed in a single visit, typically 1–2 hours. If a part needs to be ordered, we'll schedule a follow-up as soon as it arrives — usually within 1–3 business days. We'll give you a clear timeline before any work begins.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(HOME_FAQS)) }}
      />
      {/* ── HERO ── */}
      <section className="section-navy relative overflow-hidden">
        {/* Decorative orange bar */}
        <div className="absolute left-0 top-0 h-1 w-full bg-[#F5821F]" />

        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text content */}
            <div>
              {/* Eyebrow */}
              <div className="flex flex-wrap items-center gap-3 mb-6 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 bg-[#F5821F]/10 border border-[#F5821F]/30 rounded-full px-4 py-1.5">
                  <span className="text-[#F5821F] text-sm font-semibold tracking-wide">
                    Serving the Greater DMV Area Since 2019
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/20 rounded-full px-4 py-1.5">
                  <span className="text-yellow-400 text-sm">★★★★★</span>
                  <span className="text-white text-sm font-semibold">4.9</span>
                  <span className="text-gray-400 text-sm">· 204+ Google Reviews</span>
                </div>
              </div>

              {/* Headline */}
              <h1
                className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up delay-slide-100"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                DMV&apos;s Most Trusted{" "}
                <span className="text-[#F5821F]">Appliance Repair</span>{" "}
                Experts
              </h1>

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 animate-fade-in-up delay-200">
                Expert technicians. OEM parts. 1-year warranty on most repairs.
                We specialize in refrigerator repair, washer repair, dryer repair, oven repair,
                dishwasher repair, and more — serving the Greater DMV from Largo, MD.
                $85 service call fee — you pay that or the repair, never both.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up delay-300">
                <a
                  href="tel:+12408591014"
                  className="btn-pulse bg-[#F5821F] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#D96B10] transition-colors text-lg text-center"
                >
                  Call (240) 859-1014
                </a>
                <a
                  href="sms:+12408591014?body=Hi%2C%20I%27d%20like%20to%20schedule%20an%20appliance%20repair"
                  className="bg-white/10 border border-white/20 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors text-lg text-center"
                >
                  Text Us
                </a>
                <a
                  href={GHL_BOOKING}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 border border-white/20 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors text-lg text-center"
                >
                  Book Online
                </a>
              </div>

            </div>

            {/* Right: kitchen photo */}
            <div className="hidden lg:block relative animate-fade-in-up delay-200">
              <div className="absolute -inset-1 bg-[#F5821F]/20 rounded-2xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10" style={{ aspectRatio: "700/525" }}>
                <Image
                  src="/hero-kitchen.jpg"
                  alt="Modern kitchen with premium appliances serviced by Metro Appliance Services"
                  width={700}
                  height={525}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 0vw, 50vw"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1B2A4A]/80 to-transparent px-6 py-5">
                  <p className="text-white text-sm font-semibold">Premium appliances deserve expert care.</p>
                  <p className="text-gray-300 text-xs mt-0.5">OEM parts · 1-year warranty · Expert technicians</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Trust badge bar ── */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 animate-fade-in-up delay-400">
            {[
              { icon: "🛡️", label: "1-Year Limited Warranty", href: "/terms#warranty" },
              { icon: "🔩", label: "OEM Parts", href: "/terms#parts" },
              { icon: "💰", label: "Transparent Pricing", href: "/terms#pricing" },
              { icon: "🔬", label: "Thorough Diagnostics", href: "/terms" },
              { icon: "📋", label: "Detailed Assessment", href: "/terms#assessment" },
              { icon: "🏠", label: "Locally Owned", href: "/terms" },
            ].map((badge) => (
              <Link
                key={badge.label}
                href={badge.href}
                className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-lg px-4 py-3 hover:bg-white/10 hover:border-white/20 transition-colors group"
              >
                <span className="text-xl shrink-0">{badge.icon}</span>
                <span className="text-white text-sm font-medium leading-tight group-hover:text-[#F5821F] transition-colors">{badge.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF / TESTIMONIALS ── */}
      <section className="bg-[#E2E6EC] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2
            className="font-heading text-4xl md:text-5xl font-bold text-[#1B2A4A] mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            What Our Customers Say
          </h2>
          <p className="text-gray-500 mb-10">
            Trusted by homeowners across the Greater DMV area.
          </p>
          <TrustindexWidget />
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="font-heading text-4xl md:text-5xl font-bold text-[#1B2A4A] mb-4"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Our Appliance Repair Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From refrigerators to dryer vents, our expert technicians handle it all —
              with OEM parts and a 1-year warranty on most repairs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="card-hover bg-[#E2E6EC] rounded-xl border border-gray-200 p-6 flex flex-col gap-3 group"
              >
                <div className="text-[#1B2A4A] group-hover:text-[#F5821F] transition-colors">
                  <ApplianceIcon slug={service.slug} size={44} />
                </div>
                <h3
                  className="font-heading text-xl font-bold text-[#1B2A4A] group-hover:text-[#F5821F] transition-colors"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {service.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.tagline}</p>
                <span className="text-[#F5821F] text-sm font-semibold group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE MAS ── */}
      <section className="bg-[#E2E6EC] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="font-heading text-4xl md:text-5xl font-bold text-[#1B2A4A] mb-6"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Why Choose Metro Appliance Services?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We&apos;re a locally-owned business in Largo, MD — not a national franchise. Every
                technician is experienced and vetted, every part is genuine, and most repairs are backed by
                our one-year limited warranty.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: "🛡️",
                    title: "1-Year Limited Warranty",
                    desc: "Parts and labor covered for 12 months on most repairs. See our Terms & Conditions for full details.",
                    href: "/terms#warranty",
                  },
                  {
                    icon: "🔩",
                    title: "OEM Parts",
                    desc: "OEM parts used when available. When not, an industry-standard replacement is used — always discussed with you upfront.",
                    href: "/terms#parts",
                  },
                  {
                    icon: "💰",
                    title: "Transparent Pricing",
                    desc: "You'll know exactly what's wrong and what it costs before anything is repaired. No hidden fees or surprise charges!",
                    href: "/terms#pricing",
                  },
                  {
                    icon: "🔬",
                    title: "Thorough Diagnostics",
                    desc: "We go above and beyond the reported issue to help extend your appliance's life and performance.",
                    href: "/terms",
                  },
                  {
                    icon: "📋",
                    title: "Detailed Assessment",
                    desc: "Full disclosure of any issues and the health of your appliances. If our professional opinion is to replace your appliance, as opposed to profit from an ill-advised repair, we will openly share that.",
                    href: "/terms#assessment",
                  },
                  {
                    icon: "🏠",
                    title: "Locally Owned",
                    desc: "DMV-based since 2019. We're your neighbors, not a franchise.",
                    href: "/terms",
                  },
                ].map((item) => (
                  <Link key={item.title} href={item.href} className="flex gap-3 p-4 rounded-lg bg-white border border-gray-200 hover:border-[#F5821F] hover:shadow-sm transition-all group">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4
                        className="font-heading font-bold text-[#1B2A4A] text-base group-hover:text-[#F5821F] transition-colors"
                        style={{ fontFamily: "var(--font-barlow-condensed)" }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Call card */}
            <div className="section-navy rounded-2xl p-6 md:p-8 text-center">
              <div className="text-4xl mb-3">📞</div>
              <h3
                className="font-heading text-3xl md:text-4xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Need a Repair?
              </h3>
              <p className="text-gray-300 mb-5 text-sm">
                Call us and speak directly with a technician. We serve all 17 DMV communities.
              </p>
              <a
                href="tel:+12408591014"
                className="btn-pulse block bg-[#F5821F] text-white font-bold text-xl py-4 rounded-xl hover:bg-[#D96B10] transition-colors mb-3"
              >
                (240) 859-1014
              </a>
              <p className="text-gray-400 text-sm">Monday–Friday, 8:00 AM – 6:00 PM</p>
              <a
                href={GHL_BOOKING}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-white/20 text-white font-bold text-base py-3 rounded-xl hover:bg-white/10 transition-colors mt-3"
              >
                Book Online
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEET THE TECHNICIAN ── */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="font-heading text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-8 text-center"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Meet Your Technician
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-8 bg-[#E2E6EC] rounded-2xl p-8 border border-gray-200">
            <div className="shrink-0 w-24 h-24 rounded-full bg-[#1B2A4A] flex items-center justify-center text-white text-2xl font-bold" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
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
              <p className="text-gray-600 text-sm leading-relaxed">
                Frank has been diagnosing and repairing household appliances across the Greater DMV area since 2019.
                He specializes in refrigerators, washers, dryers, ovens, and dishwashers, and services all major
                brands including Samsung, LG, GE, Whirlpool, and more. When you book a repair with Metro Appliance
                Services, Frank is the person coming to your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRANDS SCROLLING MARQUEE ── */}
      <section className="bg-white py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <p
            className="text-center text-[#1B2A4A] font-heading font-bold text-xl uppercase tracking-widest"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Brands We Service
          </p>
        </div>
        <div className="relative overflow-hidden h-14">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee whitespace-nowrap">
            {/* Two copies for seamless loop */}
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="inline-flex items-center mx-4 bg-[#E2E6EC] border border-gray-200 text-[#1B2A4A] font-bold px-7 py-3 rounded-full text-sm shadow-sm tracking-wide"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontSize: "1rem" }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOBS MAP ── */}
      <section className="bg-white py-20">
        <JobsMapSection />
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="hidden md:block bg-[#E2E6EC] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2
              className="font-heading text-4xl md:text-5xl font-bold text-[#1B2A4A] mb-4"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Serving 17 Communities Across the DMV
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Based in Largo, MD in Prince George's County — we bring the same fast,
              expert appliance repair service to Maryland and Washington, DC.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {LOCATIONS.map((location) => (
              <Link
                key={location.slug}
                href={`/service-areas/${location.slug}`}
                className={`group flex items-center justify-between gap-2 rounded-lg border px-4 py-3 text-sm font-medium transition-all hover:border-[#F5821F] hover:bg-[#FFF8F3] hover:text-[#F5821F] ${
                  location.isPriority
                    ? "border-[#1B2A4A]/20 bg-white text-[#1B2A4A]"
                    : "border-gray-200 bg-white text-gray-600"
                }`}
              >
                <span>
                  {location.name}, {location.state}
                </span>
                <span className="text-[#F5821F] opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                  →
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 bg-[#1B2A4A] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#243560] transition-colors"
            >
              View All Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-navy py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2
            className="font-heading text-4xl md:text-5xl font-bold text-white text-center mb-3"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-center mb-10">
            Everything you need to know about appliance repair with Metro Appliance Services.
          </p>

          <Accordion className="space-y-3">
            {HOME_FAQS.map((faq, idx) => (
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
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-[#F5821F] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="font-heading text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Ready to Schedule Your Repair?
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            OEM parts. 1-year warranty. No hidden fees. Serving 17 DMV communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12408591014"
              className="bg-[#1B2A4A] text-white font-bold px-10 py-4 rounded-lg hover:bg-[#0F1A2E] transition-colors text-xl"
            >
              Call (240) 859-1014
            </a>
            <a
              href={GHL_BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#F5821F] font-bold px-10 py-4 rounded-lg hover:bg-orange-50 transition-colors text-xl"
            >
              Book Online
            </a>
          </div>
          <p className="text-orange-100 text-sm mt-5">
            Monday–Friday &nbsp;8:00 AM – 6:00 PM &nbsp;|&nbsp; Largo, MD &amp; Greater DMV
          </p>
        </div>
      </section>
    </>
  );
}
