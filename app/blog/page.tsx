import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Appliance Repair Tips & Guides",
  description:
    "Appliance repair tips, maintenance guides, and homeowner advice from Metro Appliance Services — serving the Greater DMV area since 2019.",
  alternates: { canonical: "https://www.metroappliances.net/blog" },
};

const crumbs = [
  { name: "Home", url: "https://www.metroappliances.net" },
  { name: "Blog", url: "https://www.metroappliances.net/blog" },
];

export default function BlogPage() {
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
            <span className="text-[#F5821F]">Blog</span>
          </nav>
          <h1
            className="font-heading text-4xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Appliance Repair Tips & Guides
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Expert advice on appliance maintenance, common repairs, and how to get the most
            out of your home appliances — from the technicians at Metro Appliance Services.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-5">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-hover block bg-[#E2E6EC] rounded-xl border border-gray-200 p-6 group"
              >
                <h2
                  className="font-heading text-2xl font-bold text-[#1B2A4A] group-hover:text-[#F5821F] transition-colors mb-2"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{post.answer}</p>
                <span className="inline-block mt-3 text-[#F5821F] font-semibold">Read the guide →</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 mb-6">
              Have a specific appliance question? Call and ask; there&apos;s no charge for advice.
            </p>
            <a
              href="tel:+12408591014"
              className="btn-pulse bg-[#F5821F] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#D96B10] transition-colors text-lg inline-block"
            >
              Call (240) 859-1014
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
