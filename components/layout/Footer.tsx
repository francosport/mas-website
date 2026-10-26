import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { LOCATIONS } from "@/lib/locations";
import Logo from "@/components/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer aria-label="Site footer" className="bg-[#0F1A2E] text-gray-300">
      {/* CTA strip */}
      <div className="bg-[#F5821F]">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-heading text-2xl font-bold tracking-wide">
              Ready to schedule a repair?
            </p>
            <p className="text-orange-100 text-sm">Mon–Fri 8:00 AM – 6:00 PM &nbsp;|&nbsp; Book your appointment online</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+12408591014"
              className="bg-[#1B2A4A] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#243560] transition-colors whitespace-nowrap text-lg text-center"
            >
              (240) 859-1014
            </a>
            <a
              href="https://booking.metroappliances.net"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#F5821F] font-bold px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors whitespace-nowrap text-lg text-center"
            >
              Book Online
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo variant="light" size={40} />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your trusted appliance repair experts in the Greater DMV area. Serving Maryland and Washington, DC since 2019.
            </p>
            <address className="not-italic space-y-2 text-sm">
              <p>
                <span className="text-[#F5821F] font-semibold">Phone:</span>{" "}
                <a href="tel:+12408591014" aria-label="Call (240) 859-1014" className="hover:text-white transition-colors">
                  (240) 859-1014
                </a>
              </p>
              <p>
                <span className="text-[#F5821F] font-semibold">Email:</span>{" "}
                <a href="mailto:support@metroappliances.net" className="hover:text-white transition-colors">
                  support@metroappliances.net
                </a>
              </p>
              <p>
                <span className="text-[#F5821F] font-semibold">Mailing address:</span>{" "}
                <span className="text-gray-400">9701 Apollo Drive, Suite 100, Largo, MD 20774</span>
              </p>
              <p>
                <span className="text-[#F5821F] font-semibold">Hours:</span>{" "}
                <span className="text-gray-400">Mon–Fri, 8:00 AM – 6:00 PM</span>
              </p>
            </address>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4 tracking-wide">Our Services</h3>
            <ul aria-label="Services navigation" className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-[#F5821F] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="text-[#F5821F] text-xs">›</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas column */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4 tracking-wide">Service Areas</h3>
            <ul aria-label="Service areas navigation" className="space-y-2">
              {LOCATIONS.slice(0, 10).map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/service-areas/${location.slug}`}
                    className="text-gray-400 hover:text-[#F5821F] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="text-[#F5821F] text-xs">›</span>
                    {location.name}, {location.state}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="text-[#F5821F] hover:text-orange-300 transition-colors text-sm font-semibold"
                >
                  View all areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links + Trust */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4 tracking-wide">Quick Links</h3>
            <ul className="space-y-2 mb-8">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "All Services" },
                { href: "/service-areas", label: "Service Areas" },
                { href: "/about", label: "About Us" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
                { href: "/terms", label: "Terms & Conditions" },
                { href: "/privacy", label: "Privacy Policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#F5821F] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="text-[#F5821F] text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Trust badges */}
            <div className="space-y-2">
              {[
                "✓ 1-Year Parts & Labor Warranty",
                "✓ OEM / Manufacturer-Approved Parts",
                "✓ Transparent, Upfront Pricing",
                "✓ Thorough, Above-and-Beyond Diagnostics",
              ].map((badge) => (
                <p key={badge} className="text-xs text-gray-400 flex items-start gap-1">
                  <span className="text-[#F5821F]">{badge.slice(0, 1)}</span>
                  {badge.slice(1)}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#1B2A4A] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {currentYear} Metro Appliance Services. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p>9701 Apollo Drive, Suite 100, Largo, MD 20774 &nbsp;|&nbsp; Licensed &amp; Insured</p>
            <div className="flex items-center gap-3">
              <Link href="/terms" className="hover:text-[#F5821F] transition-colors">
                Terms &amp; Conditions
              </Link>
              <span>·</span>
              <Link href="/privacy" className="hover:text-[#F5821F] transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
