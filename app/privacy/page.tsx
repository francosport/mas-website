import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Metro Appliance Services — how we collect, use, and protect your personal information when you use our appliance repair services in the Greater DMV area.",
  alternates: { canonical: "https://www.metroappliances.net/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
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
            Privacy Policy
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
              Metro Appliance Services ("we," "us," or "our") respects your privacy. This Privacy
              Policy explains what information we collect, how we use it, and your rights regarding
              your personal data when you visit{" "}
              <Link href="/" className="text-[#F5821F] hover:underline">
                metroappliances.net
              </Link>{" "}
              or use our appliance repair services.
            </p>
          </section>

          {/* 1. Information We Collect */}
          <section>
            <h2
              className="font-heading text-2xl font-bold text-[#1B2A4A] mb-3 pb-2 border-b border-gray-200"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              1. Information We Collect
            </h2>

            <h3 className="font-semibold text-[#1B2A4A] mt-5 mb-2">Information You Provide</h3>
            <p>
              When you contact us, request a quote, or book a service appointment, you may provide:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Name</li>
              <li>Phone number and/or email address</li>
              <li>Service address</li>
              <li>Appliance type, brand, and description of the issue</li>
              <li>Preferred appointment dates and times</li>
            </ul>

            <h3 className="font-semibold text-[#1B2A4A] mt-5 mb-2">
              Information Collected Automatically
            </h3>
            <p>
              When you visit our website, standard web server and analytics tools may automatically
              collect non-personal technical data, including your browser type, device type, pages
              visited, time on site, and referring URL. This data is used in aggregate to improve
              our website and is not linked to your identity.
            </p>
          </section>

          {/* 2. How We Use Your Information */}
          <section>
            <h2
              className="font-heading text-2xl font-bold text-[#1B2A4A] mb-3 pb-2 border-b border-gray-200"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              2. How We Use Your Information
            </h2>
            <p>We use the information you provide solely to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Schedule and confirm appliance repair appointments</li>
              <li>Contact you regarding your service request or appointment</li>
              <li>Send appointment reminders or follow-up communications related to your repair</li>
              <li>Respond to questions or requests you send us directly</li>
              <li>Maintain service records for warranty purposes</li>
            </ul>
            <p className="mt-3">
              We do not use your information for unrelated marketing purposes without your consent.
            </p>
          </section>

          {/* 3. Third-Party Services */}
          <section>
            <h2
              className="font-heading text-2xl font-bold text-[#1B2A4A] mb-3 pb-2 border-b border-gray-200"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              3. Third-Party Services
            </h2>
            <p>
              We use a small number of trusted third-party tools to operate our business and
              website:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <strong>Online Booking (GoHighLevel / LeadConnector):</strong> Our online booking
                widget is powered by a third-party CRM platform. When you submit a booking request,
                your contact information is stored and managed within that platform, subject to
                their own privacy policies.
              </li>
              <li>
                <strong>Google Reviews (Trustindex):</strong> Our reviews widget loads and displays
                reviews from Google. Google&apos;s privacy policy governs any data collected through
                that interaction.
              </li>
              <li>
                <strong>Website Analytics:</strong> We may use basic analytics tools (such as
                Google Analytics or Vercel Analytics) to understand aggregate site traffic. These
                tools do not identify individual users.
              </li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or share your personal information with any third party for
              marketing or advertising purposes.
            </p>
          </section>

          {/* 4. Text Messaging (SMS) */}
          <section id="sms">
            <h2
              className="font-heading text-2xl font-bold text-[#1B2A4A] mb-3 pb-2 border-b border-gray-200"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              4. Text Messaging (SMS)
            </h2>
            <p>
              If you opt in to receive text messages from Metro Appliance Services, we collect your
              mobile phone number and your consent status so we can send messages about your service
              request.
            </p>
            <p className="mt-3">
              No mobile information will be shared with third parties or affiliates for marketing or
              promotional purposes. Information will not be sold or shared with third parties for
              promotional or marketing purposes. All the above categories exclude text messaging
              originator opt-in data and consent; this information will not be shared with any third
              parties.
            </p>
            <p className="mt-3">
              We may share your phone number only with service providers that help us deliver text
              messages, such as our messaging platform and wireless carriers, and only to provide the
              messaging service.
            </p>
            <p className="mt-3">
              You can opt out at any time by replying <strong>STOP</strong>. For help, reply{" "}
              <strong>HELP</strong> or contact us at{" "}
              <a href="tel:+12408591014" className="text-[#F5821F] hover:underline">
                (240) 859-1014
              </a>{" "}
              or{" "}
              <a href="mailto:support@metroappliances.net" className="text-[#F5821F] hover:underline">
                support@metroappliances.net
              </a>
              . See our{" "}
              <Link href="/terms#sms" className="text-[#F5821F] hover:underline">
                SMS Terms
              </Link>{" "}
              for full program details.
            </p>
          </section>

          {/* 5. Data Retention */}
          <section>
            <h2
              className="font-heading text-2xl font-bold text-[#1B2A4A] mb-3 pb-2 border-b border-gray-200"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              5. Data Retention
            </h2>
            <p>
              We retain service records, including contact information, for as long as reasonably
              necessary to fulfill our service obligations (including honoring warranty claims) and
              to comply with applicable legal requirements. If you would like your information
              removed from our records, please contact us at the details below.
            </p>
          </section>

          {/* 6. Cookies */}
          <section>
            <h2
              className="font-heading text-2xl font-bold text-[#1B2A4A] mb-3 pb-2 border-b border-gray-200"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              6. Cookies
            </h2>
            <p>
              Our website may use essential cookies to ensure basic functionality. Third-party tools
              embedded on our site (such as the booking widget and reviews widget) may set their own
              cookies, governed by their respective privacy policies. You can control cookie settings
              through your browser preferences.
            </p>
          </section>

          {/* 7. Your Rights */}
          <section>
            <h2
              className="font-heading text-2xl font-bold text-[#1B2A4A] mb-3 pb-2 border-b border-gray-200"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              7. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information from our records</li>
              <li>Opt out of any marketing communications</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us directly at the information below.
            </p>
          </section>

          {/* 8. Changes */}
          <section>
            <h2
              className="font-heading text-2xl font-bold text-[#1B2A4A] mb-3 pb-2 border-b border-gray-200"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. The most current version will always
              be available at{" "}
              <Link href="/privacy" className="text-[#F5821F] hover:underline">
                metroappliances.net/privacy
              </Link>
              . We encourage you to review it from time to time.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-[#E2E6EC] rounded-xl p-6 mt-8">
            <h2
              className="font-heading text-xl font-bold text-[#1B2A4A] mb-2"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Contact Us
            </h2>
            <p className="text-sm">
              For privacy-related questions or requests, reach us at{" "}
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
