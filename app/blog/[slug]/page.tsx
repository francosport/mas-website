import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { POSTS, CALL_TO_ACTION, getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://www.metroappliances.net/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      title: `${post.title} | Metro Appliance Services`,
      description: post.metaDescription,
      url: `https://www.metroappliances.net/blog/${slug}`,
      publishedTime: post.datePublished,
    },
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const otherPosts = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  const crumbs = [
    { name: "Home", url: "https://www.metroappliances.net" },
    { name: "Blog", url: "https://www.metroappliances.net/blog" },
    { name: post.title, url: `https://www.metroappliances.net/blog/${slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema(post)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />

      {/* Hero */}
      <section className="section-navy py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          </nav>
          <h1
            className="font-heading text-3xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            {post.title}
          </h1>
          <p className="text-gray-400 text-sm">
            By Frank Robinson, owner and lead technician ·{" "}
            <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-lg md:text-xl text-[#1B2A4A] font-medium leading-relaxed border-l-4 border-[#F5821F] pl-5 mb-10">
            {post.answer}
          </p>

          <div className="space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2
                  className="font-heading text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-4"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="space-y-2">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                        <span className="text-[#F5821F] font-bold mt-0.5">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-12 bg-[#E2E6EC] rounded-xl border border-gray-200 p-6">
            <p className="text-gray-700 leading-relaxed mb-4">{CALL_TO_ACTION}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+12408591014"
                className="bg-[#F5821F] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#D96B10] transition-colors text-center"
              >
                Call (240) 859-1014
              </a>
              <Link
                href={post.relatedService.href}
                className="bg-[#1B2A4A] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#243560] transition-colors text-center"
              >
                {post.relatedService.name} →
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* More posts */}
      <section className="bg-[#E2E6EC] py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="font-heading text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-6"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            More Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="card-hover bg-white border border-gray-200 rounded-lg p-5 group"
              >
                <p
                  className="font-heading font-bold text-[#1B2A4A] group-hover:text-[#F5821F] transition-colors text-lg"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {p.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
