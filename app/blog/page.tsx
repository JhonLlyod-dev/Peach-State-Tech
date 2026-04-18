
import { Suspense } from "react"
import { Metadata } from "next"
import CategoryClient from "./Categegoryclient"
import Load from "@/components/Load"

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Blog | Browse Articles by Category",
  description:
    "Explore our full collection of articles organized by category. From Technology and Science to Culture and Lifestyle — find in-depth reads, expert insights, and the latest news across every topic.",
  openGraph: {
    title: "Blog | Browse Articles by Category",
    description:
      "Explore our full collection of articles organized by category. From Technology and Science to Culture and Lifestyle — find in-depth reads, expert insights, and the latest news across every topic.",
    type: "website",
  },
}

export default function BlogPage() {
  return (
    <main>

      <section className="sr-only-seo px-6 pt-8 pb-2 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-3">
          Browse Articles by Category
        </h1>
        <p className="text-gray-600 max-w-5xl text-base leading-relaxed">
          Discover a wide range of articles across every topic that matters to
          you. Whether you are interested in the latest breakthroughs in
          Technology, thought-provoking pieces on Science, cultural commentary,
          or practical Lifestyle guides — our blog covers it all. Use the
          category filters below to explore articles curated around the subjects
          you care about most. New content is added regularly, so there is always
          something fresh to read.
        </p>
      </section>

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