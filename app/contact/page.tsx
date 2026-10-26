"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    referral: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder: replace with your actual form submission endpoint
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="section-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-[#F5821F]">Contact</span>
          </nav>
          <h1
            className="font-heading text-4xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">
            Have a question or just want to get in touch? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-[#E2E6EC] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h2
                    className="font-heading text-3xl font-bold text-[#1B2A4A] mb-3"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    Message Received!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Thanks for reaching out. We&apos;ll get back to you within one business day.
                    For urgent repair needs, call us directly.
                  </p>
                  <a
                    href="tel:+12408591014"
                    className="btn-pulse inline-block bg-[#F5821F] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#D96B10] transition-colors"
                  >
                    Call (240) 859-1014
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-8">
                  <h2
                    className="font-heading text-2xl font-bold text-[#1B2A4A] mb-6"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    General Inquiry
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#1B2A4A] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1B2A4A] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="(240) 000-0000"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1B2A4A] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1B2A4A] mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:border-transparent"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-semibold text-[#1B2A4A] mb-1.5">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:border-transparent resize-none"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-semibold text-[#1B2A4A] mb-1.5">
                        How did you hear about us?
                      </label>
                      <select
                        name="referral"
                        value={formState.referral}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:border-transparent bg-white"
                      >
                        <option value="">Select one...</option>
                        <option>Google Search</option>
                        <option>Google Maps</option>
                        <option>Facebook</option>
                        <option>Nextdoor</option>
                        <option>Thumbtack</option>
                        <option>Yelp</option>
                        <option>Apple Maps</option>
                        <option>Bing</option>
                        <option>YouTube</option>
                        <option>Referral / Word of mouth</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-6 w-full bg-[#F5821F] text-white font-bold py-4 rounded-lg hover:bg-[#D96B10] disabled:opacity-60 transition-colors text-lg"
                  >
                    {submitting ? "Sending..." : "Send Message →"}
                  </button>
                  <p className="text-gray-400 text-xs text-center mt-3">
                    We respond within one business day.
                  </p>
                </form>
              )}
            </div>

            {/* Contact info sidebar */}
            <div className="space-y-5">
              <div className="bg-[#1B2A4A] rounded-2xl p-6 text-white">
                <h3
                  className="font-heading text-xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  Need a Repair?
                </h3>
                <a
                  href="https://booking.metroappliances.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pulse block bg-[#F5821F] text-white font-bold text-center py-4 rounded-xl text-lg hover:bg-[#D96B10] transition-colors mb-3"
                >
                  Book Online
                </a>
                <a
                  href="tel:+12408591014"
                  className="block text-center text-white/80 hover:text-white text-sm transition-colors"
                >
                  Or call (240) 859-1014
                </a>
                <p className="text-gray-400 text-sm text-center mt-1">Monday–Friday, 8:00 AM – 6:00 PM</p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3
                  className="font-heading text-lg font-bold text-[#1B2A4A] mb-4"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  Contact Info
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <span className="text-[#F5821F]">📍</span>
                    <div>
                      <p className="font-semibold text-[#1B2A4A]">Mailing address</p>
                      <p className="text-gray-500">9701 Apollo Drive, Suite 100<br />Largo, MD 20774</p>
                      <p className="text-gray-500 mt-1">We come to you. There is no walk-in location.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#F5821F]">✉️</span>
                    <div>
                      <p className="font-semibold text-[#1B2A4A]">Email</p>
                      <a href="mailto:support@metroappliances.net" className="text-gray-500 hover:text-[#F5821F] break-all">
                        support@metroappliances.net
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#F5821F]">🕐</span>
                    <div>
                      <p className="font-semibold text-[#1B2A4A]">Hours</p>
                      <p className="text-gray-500">Monday–Friday<br />8:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#E2E6EC] rounded-2xl border border-gray-200 p-5">
                <h4
                  className="font-heading font-bold text-[#1B2A4A] mb-2"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  What to Expect
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    "We respond within 1 business day",
                    "All inquiries are welcome — no question is too small",
                    "For repair scheduling, use the Book Online button above",
                    "For urgent issues, call us directly",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#F5821F] font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
