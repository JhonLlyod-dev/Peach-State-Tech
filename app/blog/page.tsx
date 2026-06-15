import { Suspense } from "react"
import { Metadata } from "next"
import CategoryClient from "./Categegoryclient"
import Load from "@/components/Load"

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Georgia Tech News by Topic | Peach State Tech",
  description:
    "Browse Georgia startup, AI, and venture capital news by topic. From Atlanta innovation labs to founder spotlights, find stories that match your interests.",
  keywords: [
    "Georgia tech news",
    "Atlanta startups",
    "AI Georgia",
    "venture capital Georgia",
    "tech categories",
    "startup founders",
    "innovation news",
  ],
  authors: [{ name: "Peach State Tech" }],
  alternates: {
    canonical: "https://www.peachstate.tech/blog",
  },
  openGraph: {
    title: "Georgia Tech News by Topic | Peach State Tech",
    description:
      "Browse Georgia startup, AI, and venture capital news by topic. From Atlanta innovation labs to founder spotlights.",
    type: "website",
    url: "https://www.peachstate.tech/blog",
    locale: "en_US",
    siteName: "Peach State Tech",
    images: ["/atlanta-skyline.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Georgia Tech News by Topic | Peach State Tech",
    description:
      "Browse Georgia startup, AI, and venture capital news by topic.",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text side */}
        <div className="flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-peach">
            Pick Your Lane
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Sorted by Topic
          </h1>

          <p className="text-gray-600 max-w-md">
            Find stories on Georgia startups, AI, and innovation, organized your way.
          </p>

          <div className="flex flex-wrap gap-3">
            {["AI", "Startups", "Funding", "Founders", "Research", "Policy"].map((tag) => (
              <span
                key={tag}
                className="text-xs bg-linear-to-tr from-peach/40 to-peach-light font-semibold px-3 py-1.5 rounded-full border border-zinc-200 text-white bg-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Image side */}
        <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&fit=crop&w=1200&q=80"
            alt="Georgia Tech campus, home to startups and AI research"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-violet/20 to-transparent" />
        </div>
      </div>

      <Suspense
        fallback={
          <div className="flex justify-center items-center h-64">
            <Load />
          </div>
        }
      >
        <CategoryClient />
      </Suspense>
    </main>
  )
}