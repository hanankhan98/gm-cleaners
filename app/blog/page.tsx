import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cleaning Tips & Local Guides | MZ Cleaners Blog",
  description:
    "Practical cleaning checklists, moving guides and local advice for homes and businesses across Manchester and Greater Manchester, from MZ Cleaners.",
  alternates: {
    canonical: "https://mzcleaners.co.uk/blog",
  },
  openGraph: {
    title: "Cleaning Tips & Local Guides | MZ Cleaners Blog",
    description:
      "Practical cleaning checklists, moving guides and local advice for homes and businesses across Manchester and Greater Manchester.",
    url: "https://mzcleaners.co.uk/blog",
    siteName: "MZ Cleaners",
    locale: "en_GB",
    type: "website",
  },
};

// Newest first. Add each new post here, and to public/sitemap.xml.
const posts = [
  {
    href: "/blog/office-cleaning-checklist-manchester",
    category: "Business & Office Guides",
    title: "Office Cleaning Manchester: The Complete Checklist for Local Businesses",
    excerpt:
      "What to clean daily, weekly and monthly, the areas most offices forget, and how to choose the right office cleaners in Manchester.",
  },
  {
    href: "/blog/top-neighbourhoods-for-renters-manchester",
    category: "Moving & Local Guides",
    title: "Top 5 Neighbourhoods for Renters in Manchester",
    excerpt:
      "A practical local guide to five popular Manchester neighbourhoods for renters, from Didsbury and Chorlton to Salford Quays and Stockport.",
  },
];

export default function BlogIndex() {
  return (
    <main className="bg-[#f7fbff] text-[#1c2d3e]">
      <div className="mx-auto max-w-[1060px] px-5 py-12 md:px-10 md:py-20">
        <header className="border-b border-[#dceaf5] pb-10">
          <div className="text-sm font-semibold text-[#2a8fd4]">MZ CLEANERS BLOG</div>
          <h1 className="mt-7 max-w-4xl font-plus-jakarta-sans text-4xl font-bold leading-tight md:text-6xl">
            Cleaning Tips &amp; Local Guides
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4a6278] md:text-xl">
            Practical checklists, moving advice and local know-how for homes and businesses across Manchester and Greater Manchester.
          </p>
        </header>

        <div className="grid gap-6 pt-12 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group flex flex-col rounded-2xl border border-[#dceaf5] bg-white p-6 shadow-[0_8px_30px_rgba(42,143,212,0.08)] transition-colors hover:border-[#2a8fd4]"
            >
              <span className="text-sm font-semibold text-[#2a8fd4]">{post.category}</span>
              <h2 className="mt-3 font-plus-jakarta-sans text-2xl font-bold leading-snug group-hover:text-[#2a8fd4]">
                {post.title}
              </h2>
              <p className="mt-4 flex-1 text-base leading-8 text-[#4a6278]">{post.excerpt}</p>
              <span className="mt-6 text-sm font-bold text-[#2a8fd4]">Read the guide &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
