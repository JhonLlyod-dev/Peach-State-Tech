'use client'

import { getAllCategory, getCategory } from "@/sanity/queries"
import { useState, useEffect } from "react"
import BarticleSmall from "@/components/Barticle"
import { newsCard } from "@/components/Card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import Load from "@/components/Load";

const ARTICLES_PER_PAGE = 6;

export default function Category() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryParam = searchParams?.get("category") ?? "Technology";
  const pageParam = Math.max(1, parseInt(searchParams?.get("page") ?? "1", 10));

  const [categories, setCategories] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam);
  const [relatedArticles, setRelatedArticles] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getAllCategory().then((data) => {
      setCategories(data)
    })
  }, [])

  // Sync selected category when URL param changes (e.g. browser back/forward)
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
    const params = new URLSearchParams();
    params.set("category", newCategory);
    if (newPage > 1) params.set("page", String(newPage));
    return `/blog?${params.toString()}`;
  };

  const handleCategoryChange = (title: string) => {
    router.push(buildUrl(title, 1));
  }

  const handlePageChange = (page: number) => {
    router.push(buildUrl(selectedCategory, page));
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const buildPages = () => {
    const pages: (number | 'ellipsis-left' | 'ellipsis-right')[] = [];

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (pageParam > 4) pages.push('ellipsis-left');

      const start = Math.max(2, pageParam - 2);
      const end = Math.min(totalPages - 1, pageParam + 2);
      for (let i = start; i <= end; i++) pages.push(i);

      if (pageParam < totalPages - 3) pages.push('ellipsis-right');

      pages.push(totalPages);
    }

    return pages;
  }

  return (
    <div className="p-6 min-h-[80dvh] max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {selectedCategory}
      </h1>

      {/* Category List — centered */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category: any) => (
          <button
            key={category._id}
            onClick={() => handleCategoryChange(category.title)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedCategory === category.title
                ? 'bg-black text-white'
                : 'bg-white text-black border-gray-300 hover:bg-gray-100'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Related Articles */}
      <div className="mb-8">
        {loading ? (
          <div className="flex justify-center items-center h-48">
            <Load />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedArticles.length === 0 ? (
                <p className="text-gray-600 text-center col-span-3">
                  No related articles found.
                </p>
              ) : (
                paginatedArticles.map((post: any, index: number) => {
                  const firstCategory =
                    Array.isArray(post.categories) && post.categories.length > 0
                      ? post.categories[0].title || ''
                      : ''

                  const cardData: newsCard = {
                    title: post.title || '',
                    description: post.description || '',
                    coverImage: post.coverImage || '',
                    categories: firstCategory,
                    slug: post.slug || '',
                    publishedAt: post.publishedAt || '',
                    id: post.id || '',
                    delay: (index + 1) * 100,
                  }

                  return <BarticleSmall key={post.id} {...cardData} />
                })
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-10">
                {/* Prev */}
                <button
                  onClick={() => handlePageChange(pageParam - 1)}
                  disabled={pageParam === 1}
                  className="pagination"
                >
                  <ChevronLeft size={18} />
                </button>

                {/* Page Numbers */}
                {buildPages().map((p) => {
                  if (p === 'ellipsis-left' || p === 'ellipsis-right') {
                    return (
                      <span key={p} className="px-1 text-gray-400 select-none">
                        …
                      </span>
                    );
                  }
                  return (
                    <button
                      key={p}
                      onClick={() => handlePageChange(p)}
                      className={`px-2 cursor-pointer ${
                        pageParam === p ? 'border rounded text-white bg-peach' : ''
                      }`}
                    >
                      {p}
                    </button>
                  );
                })}

                {/* Next */}
                <button
                  onClick={() => handlePageChange(pageParam + 1)}
                  disabled={pageParam === totalPages}
                  className="pagination"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}

            {/* Page info */}
            {totalPages > 1 && (
              <p className="text-center text-sm text-gray-500 mt-3">
                Page {pageParam} of {totalPages} · {relatedArticles.length} articles
              </p>
            )}
          </>
        )}
      </div>
    </div>
  )
}