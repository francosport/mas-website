import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for Metro Appliance Services — warranty coverage, parts policy, pricing, and service agreement details for appliance repair in the Greater DMV area.",
  alternates: { canonical: "https://www.metroappliances.net/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="section-navy py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#F5821F] text-sm font-semibold uppercase tracking-widest mb-3">
            Legal
          </p>
          <h1
            className="font-heading text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Terms &amp; Conditions
          </h1>
          <p className="text-gray-400 text-sm">
            Last updated: October 2026 &nbsp;|&nbsp; Metro Appliance Services, Largo, MD
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-14">
        <div className="prose prose-gray max-w-none space-y-10 text-gray-700 leading-relaxed">

          {/* Intro */}
          <section>
            <p>
              These Terms &amp; Conditions govern all appliance repair services provided by{" "}
              <strong>Metro Appliance Services</strong> ("we," "us," or "our") to customers in the
              Greater DMV area. By scheduling or receiving service, you agree to these terms.
            </p>
          </section>

          {/* 1. Limited Warranty */}
          <section id="warranty">
            <h2
              className="font-heading text-2xl font-bold text-[#1B2A4A] mb-3 pb-2 border-b border-gray-200"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              1. Limited Warranty on Parts &amp; Labor
            </h2>
            <p>
              Metro Appliance Services provides a <strong>1-year limited warranty</strong> on parts
              and labor for covered repairs. This warranty means that if the same issue we repaired
              recurs within 12 months of the original service date, we will return and address it at
              no additional charge, subject to the exclusions listed below.
            </p>

            <h3 className="font-semibold text-[#1B2A4A] mt-5 mb-2">What the Warranty Covers</h3>
            <p>
              The warranty covers the specific failure or malfunction diagnosed and repaired during
              the original service visit, including the parts installed and the labor performed to
              complete that repair.
            </p>

            <h3 className="font-semibold text-[#1B2A4A] mt-5 mb-2">Warranty Exclusions</h3>
            <p>The limited warranty does <strong>not</strong> apply under the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <strong>Reduced-rate or discounted service:</strong> Repairs performed at a special,
                promotional, or otherwise reduced service price may carry a modified or limited
                warranty scope, which will be communicated to the customer prior to service.
              </li>
              <li>
                <strong>Misuse or overuse of the appliance:</strong> Damage or recurring failures
                resulting from improper use, overloading, neglect, unauthorized modifications, or
                operation outside the manufacturer&apos;s intended guidelines are not covered.
              </li>
              <li>
                <strong>Known manufacturer issues (service bulletins):</strong> If a recurring
                failure is attributable to a defect or design issue formally acknowledged by the
                manufacturer — typically via an issued service bulletin — that issue falls outside
                the scope of our warranty, as the root cause is a manufacturer responsibility.
              </li>
              <li>
                <strong>Pre-disclosed conditions:</strong> Any issue, limitation, or risk discussed
                with and agreed upon by the customer prior to or at the time of the repair is
                excluded from warranty coverage. This includes situations where a repair is
                performed with the understanding that a specific outcome or longevity cannot be
                guaranteed.
              </li>
              <li>
                <strong>New or unrelated failures:</strong> The warranty does not cover new failures
                unrelated to the original repair, nor damage caused by subsequent events (power
                surges, flooding, further misuse, etc.).
              </li>
            </ul>

            <p className="mt-4">
              If you believe your repair qualifies for warranty service, please contact us at{" "}
              <a href="tel:+12408591014" className="text-[#F5821F] hover:underline">
                (240) 859-1014
              </a>{" "}
              or{" "}
              <a href="mailto:support@metroappliances.net" className="text-[#F5821F] hover:underline">
                support@metroappliances.net
              </a>
              .
            </p>
          </section>

          {/* 2. Parts Policy */}
          <section id="parts">
            <h2
              className="font-heading text-2xl font-bold text-[#1B2A4A] mb-3 pb-2 border-b border-gray-200"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              2. Parts Policy
            </h2>
            <p>
              Metro Appliance Services is committed to using quality parts on every repair.
            </p>

            <h3 className="font-semibold text-[#1B2A4A] mt-5 mb-2">OEM (Original Equipment Manufacturer) Parts</h3>
            <p>
              We prioritize OEM parts — components manufactured by or for the original appliance
              brand — because they are designed for proper fit, function, and longevity. When OEM
              parts are available and reasonably priced, they are our default choice.
            </p>

            <h3 className="font-semibold text-[#1B2A4A] mt-5 mb-2">Industry-Standard Replacement Parts</h3>
            <p>
              In cases where OEM parts are unavailable, discontinued, or otherwise unobtainable,
              we use high-quality, industry-standard replacement parts that meet or exceed the
              functional specifications of the original component. These parts are sourced from
              reputable suppliers and are vetted for compatibility and quality.
            </p>

            <h3 className="font-semibold text-[#1B2A4A] mt-5 mb-2">Customer Communication</h3>
            <p>
              Any situation outside the above — including part substitutions, special orders,
              extended lead times, or cost considerations — will be discussed with the customer
              before any parts are purchased or any repair work is performed. We do not proceed
              with a repair without your informed approval.
            </p>
          </section>

          {/* 3. Pricing & Payment */}
          <section id="pricing">
            <h2
              className="font-heading text-2xl font-bold text-[#1B2A4A] mb-3 pb-2 border-b border-gray-200"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              3. Pricing &amp; Transparent Billing
            </h2>
            <p>
              You will know exactly what is wrong with your appliance and exactly what it will cost
              to fix it <strong>before anything is repaired</strong>. We provide a clear, written or
              verbal quote after diagnosis. There are no hidden fees, no surprise charges, and no
              work performed without your explicit authorization.
            </p>
            <p className="mt-3">
              Our diagnostic fee, if applicable, will be disclosed at the time of scheduling. In
              many cases, the diagnostic fee is waived or applied toward the total repair cost when
              service proceeds.
            </p>
            <p className="mt-3">
              Payment is due upon completion of service unless other arrangements have been made in
              advance. We accept major credit and debit cards, cash, and other payment methods as
              communicated at the time of service.
            </p>
          </section>

          {/* 4. Honest Assessments */}
          <section id="assessment">
            <h2
              className="font-heading text-2xl font-bold text-[#1B2A4A] mb-3 pb-2 border-b border-gray-200"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              4. Honest Appliance Assessments
            </h2>
            <p>
              We provide a full assessment of your appliance — not just the reported issue, but its
              overall health and condition. Our technicians will disclose any additional concerns
              observed during the service visit.
            </p>
            <p className="mt-3">
              Our business is built on honest, long-term relationships — not one-time transactions.
              If, in our professional opinion, a repair is not in your best interest — whether
              because the repair cost approaches the cost of a replacement, the appliance has
              underlying issues that make a long-term repair inadvisable, or any other legitimate
              reason — we will tell you directly, even when recommending replacement means less
              revenue for us. We will never push a repair that we wouldn&apos;t recommend to our
              own family.
            </p>
          </section>

          {/* 5. Scheduling & Access */}
          <section>
            <h2
              className="font-heading text-2xl font-bold text-[#1B2A4A] mb-3 pb-2 border-b border-gray-200"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              5. Scheduling &amp; Customer Responsibilities
            </h2>
            <p>
              Customers are responsible for ensuring safe and reasonable access to the appliance at
              the scheduled appointment time. If access is not possible or conditions are unsafe, we
              reserve the right to reschedule. A cancellation or rescheduling fee may apply for
              appointments cancelled with less than 24 hours&apos; notice.
            </p>
            <p className="mt-3">
              Customers should ensure that the appliance is accessible, cleared of personal items,
              and that a responsible adult (18+) is present during the service visit.
            </p>
          </section>

          {/* 6. Limitation of Liability */}
          <section>
            <h2
              className="font-heading text-2xl font-bold text-[#1B2A4A] mb-3 pb-2 border-b border-gray-200"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              6. Limitation of Liability
            </h2>
            <p>
              Metro Appliance Services is not liable for pre-existing conditions unrelated to the
              repair performed, appliance failures caused by misuse or external factors after
              service, or any indirect or consequential damages. Our total liability is limited to
              the cost of the original service performed.
            </p>
          </section>

          {/* 7. SMS Terms */}
          <section id="sms">
            <h2
              className="font-heading text-2xl font-bold text-[#1B2A4A] mb-3 pb-2 border-b border-gray-200"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              7. SMS / Text Messaging Terms
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Program:</strong> Metro Appliance Services sends text messages about service
                you request from us, including appointment confirmations and reminders, technician
                arrival updates, scheduling, estimates, invoices, parts updates, and replies to your
                questions.
              </li>
              <li>
                <strong>Message frequency:</strong> Message frequency varies based on your service
                activity.
              </li>
              <li>
                <strong>Cost:</strong> Message and data rates may apply.
              </li>
              <li>
                <strong>Opt out:</strong> Reply <strong>STOP</strong> at any time to stop receiving
                text messages. You will receive one confirmation message and no further messages. To
                resubscribe, reply <strong>START</strong>.
              </li>
              <li>
                <strong>Help:</strong> Reply <strong>HELP</strong> for help, or contact us at{" "}
                <a href="tel:+12408591014" className="text-[#F5821F] hover:underline">
                  (240) 859-1014
                </a>{" "}
                or{" "}
                <a href="mailto:support@metroappliances.net" className="text-[#F5821F] hover:underline">
                  support@metroappliances.net
                </a>
                .
              </li>
              <li>Carriers are not liable for delayed or undelivered messages.</li>
              <li>
                Consent to receive text messages is not a condition of purchase or service.
              </li>
              <li>
                <strong>Privacy:</strong> See our{" "}
                <Link href="/privacy" className="text-[#F5821F] hover:underline">
                  Privacy Policy
                </Link>{" "}
                for how we handle your information.
              </li>
            </ul>
          </section>

          {/* 8. Changes */}
          <section>
            <h2
              className="font-heading text-2xl font-bold text-[#1B2A4A] mb-3 pb-2 border-b border-gray-200"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              8. Changes to These Terms
            </h2>
            <p>
              We may update these Terms &amp; Conditions from time to time. The most current version
              will always be available at{" "}
              <Link href="/terms" className="text-[#F5821F] hover:underline">
                metroappliances.net/terms
              </Link>
              . Continued use of our services after any changes constitutes acceptance of the
              updated terms.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-[#E2E6EC] rounded-xl p-6 mt-8">
            <h2
              className="font-heading text-xl font-bold text-[#1B2A4A] mb-2"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Questions?
            </h2>
            <p className="text-sm">
              Contact us at{" "}
              <a href="tel:+12408591014" className="text-[#F5821F] hover:underline font-semibold">
                (240) 859-1014
              </a>{" "}
              or{" "}
              <a href="mailto:support@metroappliances.net" className="text-[#F5821F] hover:underline font-semibold">
                support@metroappliances.net
              </a>
              . We&apos;re available Monday–Friday, 8:00 AM – 6:00 PM.
            </p>
            <p className="text-sm mt-2 text-gray-500">
              Metro Appliance Services &nbsp;·&nbsp; 9701 Apollo Drive, Suite 100, Largo, MD 20774
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
