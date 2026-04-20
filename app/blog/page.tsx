
import { Suspense } from "react"
import { Metadata } from "next"
import CategoryClient from "./Categegoryclient"
import Load from "@/components/Load"

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Blog | Browse Articles by Category",
  description:
    "Browse articles by category with insights, trends, and the latest updates across a wide range of topics.",
  keywords: [
    "blog",
    "articles",
    "technology",
    "science",
    "culture",
    "lifestyle",
    "news",
    "trends",
  ],
  authors: [{ name: "Your Brand Name" }],
  alternates: {
    canonical: "https://www.peachstate.tech/blog",
  },
  openGraph: {
    title: "Blog | Browse Articles by Category",
    description:
      "Browse articles by category with insights, trends, and the latest updates across a wide range of topics.",
    type: "website",
    url: "https://www.peachstate.tech/blog",
    locale: "en_US",
    siteName: "Peach State Tech",
  },
  twitter: {
    card: "summary",
    title: "Blog | Browse Articles by Category",
    description:
      "Browse articles by category with insights, trends, and the latest updates across a wide range of topics.",
  },
};

export default function BlogPage() {
  return (
    <main>

      <section className="sr-only-seo px-6 pt-8 pb-2 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-3">
          Browse Articles by Category
        </h1>
        <p className="text-gray-600 max-w-5xl text-base leading-relaxed">
          Browse articles by category with insights, trends, and the latest updates across a wide range of topics.
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