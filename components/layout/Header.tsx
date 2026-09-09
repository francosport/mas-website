"use client";

import Link from "next/link";
import { useState } from "react";
import { SERVICES } from "@/lib/services";
import Logo from "@/components/Logo";
import ApplianceIcon from "@/components/ApplianceIcon";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1B2A4A] shadow-lg">
      {/* Top bar */}
      <div className="bg-[#0F1A2E] text-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center h-11">
          <div className="flex-1 hidden md:block" />
          <span className="flex-1 text-white text-base font-medium hidden md:flex justify-center">
            Mon–Fri &nbsp;8:00 AM – 6:00 PM &nbsp;|&nbsp; Largo, MD &amp; Greater DMV
          </span>
          <div className="flex items-center gap-4 flex-1 justify-end">
            <a
              href="mailto:support@metroappliances.net"
              className="text-white hover:text-gray-200 transition-colors text-base hidden md:block"
            >
              support@metroappliances.net
            </a>
            <a
              href="tel:+12408591014"
              aria-label="Call (240) 859-1014"
              className="bg-[#F5821F] text-white font-semibold px-4 py-1.5 rounded text-sm md:text-base hover:bg-[#D96B10] transition-colors"
            >
              (240) 859-1014
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav aria-label="Main navigation" className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo variant="light" size={44} />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-white hover:text-[#F5821F] font-medium transition-colors text-base"
            >
              Home
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-white hover:text-[#F5821F] font-medium transition-colors text-base">
                Our Services
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-gray-100 pt-3 pb-2 z-50 before:absolute before:inset-x-0 before:-top-2 before:h-2 before:content-['']">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="flex items-center gap-2 px-4 py-2 text-[#1B2A4A] hover:bg-[#E2E6EC] hover:text-[#F5821F] transition-colors text-sm font-medium"
                    >
                      <span className="text-[#1B2A4A] group-hover:text-[#F5821F]">
                        <ApplianceIcon slug={service.slug} size={18} />
                      </span>
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/service-areas"
              className="text-white hover:text-[#F5821F] font-medium transition-colors text-base"
            >
              Service Areas
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-[#F5821F] font-medium transition-colors text-base"
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className="text-white hover:text-[#F5821F] font-medium transition-colors text-base"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-[#F5821F] font-medium transition-colors text-base"
            >
              Contact Us
            </Link>

            <a
              href="https://booking.metroappliances.net"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pulse bg-[#F5821F] text-white font-bold px-6 py-2.5 rounded-lg hover:bg-[#D96B10] transition-colors text-base"
            >
              Book Online
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-[#243560] pb-4">
            <div className="flex flex-col gap-1 pt-3">
              <Link href="/" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white px-2 py-2 text-sm font-medium">Home</Link>
              <div className="px-2 py-1 text-xs text-[#F5821F] font-semibold uppercase tracking-wider">Our Services</div>
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-400 hover:text-white px-4 py-1.5 text-sm flex items-center gap-2"
                >
                  <span className="text-gray-400"><ApplianceIcon slug={service.slug} size={16} /></span> {service.name}
                </Link>
              ))}
              <Link href="/service-areas" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white px-2 py-2 text-sm font-medium">Service Areas</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white px-2 py-2 text-sm font-medium">About Us</Link>
              <Link href="/blog" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white px-2 py-2 text-sm font-medium">Blog</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white px-2 py-2 text-sm font-medium">Contact Us</Link>
              <a
                href="tel:+12408591014"
                className="mt-2 mx-2 bg-[#F5821F] text-white font-bold px-4 py-3 rounded-lg text-center text-sm"
              >
                Call (240) 859-1014
              </a>
              <a
                href="sms:+12408591014?body=Hi%2C%20I%27d%20like%20to%20schedule%20an%20appliance%20repair"
                className="mx-2 bg-white/10 border border-white/20 text-white font-bold px-4 py-3 rounded-lg text-center text-sm"
              >
                Text Us
              </a>
              <a
                href="https://booking.metroappliances.net"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 bg-white/10 border border-white/20 text-white font-bold px-4 py-3 rounded-lg text-center text-sm"
              >
                Book Online
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
