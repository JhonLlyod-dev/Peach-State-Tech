'use client'

import { getAllCategory, getCategory } from "@/sanity/queries"
import { useState, useEffect } from "react"
import BarticleSmall from "@/components/Barticle"
import { newsCard } from "@/components/Card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import Load from "@/components/Load"

const ARTICLES_PER_PAGE = 8

export default function CategoryClient() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const categoryParam = searchParams?.get("category") ?? "Technology"
  const pageParam = Math.max(1, parseInt(searchParams?.get("page") ?? "1", 10))

  const [categories, setCategories] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam)
  const [relatedArticles, setRelatedArticles] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getAllCategory().then((data) => {
      setCategories(data)
    })
  }, [])

  useEffect(() => {
    setSelectedCategory(categoryParam)
  }, [categoryParam])

  useEffect(() => {
    if (!selectedCategory) return
    setLoading(true)
    getCategory(selectedCategory).then((data) => {
      setRelatedArticles(data)
      setLoading(false)
    })
  }, [selectedCategory])

  const totalPages = Math.ceil(relatedArticles.length / ARTICLES_PER_PAGE)
  const paginatedArticles = relatedArticles.slice(
    (pageParam - 1) * ARTICLES_PER_PAGE,
    pageParam * ARTICLES_PER_PAGE
  )

  const buildUrl = (newCategory: string, newPage: number) => {
    const params = new URLSearchParams()
    params.set("category", newCategory)
    if (newPage > 1) params.set("page", String(newPage))
    return `/blog?${params.toString()}`
  }

  const handleCategoryChange = (title: string) => {
    router.push(buildUrl(title, 1))
  }

  const handlePageChange = (page: number) => {
    router.push(buildUrl(selectedCategory, page))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const buildPages = () => {
    const pages: (number | "ellipsis-left" | "ellipsis-right")[] = []

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      if (pageParam > 4) pages.push("ellipsis-left")
      const start = Math.max(2, pageParam - 2)
      const end = Math.min(totalPages - 1, pageParam + 2)
      for (let i = start; i <= end; i++) pages.push(i)
      if (pageParam < totalPages - 3) pages.push("ellipsis-right")
      pages.push(totalPages)
    }

    return pages
  }

  return (
    <div>
      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-8 pb-6 border-b border-zinc-200">
        {categories.map((category: any) => (
          <button
            key={category._id}
            onClick={() => handleCategoryChange(category.title)}
            className={`text-xs font-semibold px-4 py-2 rounded-full border transition-colors cursor-pointer ${
              selectedCategory === category.title
                ? "bg-gradient-peach dark:bg-gradient-violet text-white border-peach dark:border-violet"
                : "bg-white text-zinc-600 border-zinc-200 hover:border-peach hover:text-peach dark:hover:border-violet dark:hover:text-violet"
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Section label */}
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          {selectedCategory}
        </h2>
        {!loading && (
          <p className="text-zinc-500 text-sm">
            {relatedArticles.length} {relatedArticles.length === 1 ? "story" : "stories"}
          </p>
        )}
      </div>

      {/* Article Grid */}
      <div className="mb-8">
        {loading ? (
          <div className="flex justify-center items-center h-48">
            <Load />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {paginatedArticles.length === 0 ? (
                <p className="text-zinc-500 text-center col-span-full">
                  No stories here yet. Try another topic.
                </p>
              ) : (
                paginatedArticles.map((post: any, index: number) => {
                  const firstCategory =
                    Array.isArray(post.categories) && post.categories.length > 0
                      ? post.categories[0].title || ""
                      : ""

                  const cardData: newsCard = {
                    title: post.title || "",
                    description: post.description || "",
                    coverImage: post.coverImage || "",
                    categories: firstCategory,
                    slug: post.slug || "",
                    publishedAt: post.publishedAt || "",
                    id: post.id || "",
                    delay: (index + 1) * 100,
                  }

                  return <BarticleSmall key={post.id} {...cardData} />
                })
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-1.5 mt-10">
                <button
                  onClick={() => handlePageChange(pageParam - 1)}
                  disabled={pageParam === 1}
                  className="flex items-center justify-center w-9 h-9 rounded-md border border-zinc-200 text-zinc-500 hover:border-peach hover:text-peach disabled:opacity-40 disabled:hover:border-zinc-200 disabled:hover:text-zinc-500 transition-colors cursor-pointer"
                >
                  <ChevronLeft size={18} />
                </button>

                {buildPages().map((p) => {
                  if (p === "ellipsis-left" || p === "ellipsis-right") {
                    return (
                      <span key={p} className="px-1 text-zinc-400 select-none">
                        …
                      </span>
                    )
                  }
                  return (
                    <button
                      key={p}
                      onClick={() => handlePageChange(p)}
                      className={`flex items-center justify-center w-9 h-9 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                        pageParam === p
                          ? "bg-gradient-peach text-white"
                          : "text-zinc-600 hover:bg-zinc-100"
                      }`}
                    >
                      {p}
                    </button>
                  )
                })}

                <button
                  onClick={() => handlePageChange(pageParam + 1)}
                  disabled={pageParam === totalPages}
                  className="flex items-center justify-center w-9 h-9 rounded-md border border-zinc-200 text-zinc-500 hover:border-peach hover:text-peach disabled:opacity-40 disabled:hover:border-zinc-200 disabled:hover:text-zinc-500 transition-colors cursor-pointer"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}

            {totalPages > 1 && (
              <p className="text-center text-sm text-zinc-500 mt-3">
                Page {pageParam} of {totalPages} · {relatedArticles.length} stories
              </p>
            )}
          </>
        )}
      </div>
    </div>
  )
}