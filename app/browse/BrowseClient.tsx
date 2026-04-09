"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { getSearchResults, totalSearchResults } from "@/sanity/queries";
import { newsCard } from "@/components/Card";
import Load from "@/components/Load";
import Image from "next/image";

export default function BrowseClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const query = searchParams?.get("q") ?? "";
  const page = Math.max(1, parseInt(searchParams?.get("page") ?? "1", 10));

  const [searchInput, setSearchInput] = useState(query);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPosts, setCurrentPosts] = useState<newsCard[]>([]);

  const postsPerPage = 6;
  const totalPages = Math.ceil(totalResults / postsPerPage);

  useEffect(() => {
    setSearchInput(query);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    const start = (page - 1) * postsPerPage;
    const end = start + postsPerPage;

    Promise.all([
      totalSearchResults(query),
      getSearchResults(query, start, end),
    ]).then(([total, posts]) => {
      setTotalResults(total.length);
      setCurrentPosts(posts);
      setLoading(false);
    });
  }, [query, page]);

  const buildUrl = (newQuery: string, newPage: number) => {
    const params = new URLSearchParams();
    if (newQuery) params.set("q", newQuery);
    if (newPage > 1) params.set("page", String(newPage));
    return `/browse${params.size ? `?${params.toString()}` : ""}`;
  };

  const handleSearch = () => {
    router.push(buildUrl(searchInput.trim(), 1));
  };

  const handlePageChange = (newPage: number) => {
    router.push(buildUrl(query, newPage));
  };

  return (
    <section className="">

      {/* Search Bar */}
      <div className="mb-10">
        <div className="border text-foreground flex items-center border-l-4 border-l-peach gap-1 border-gray-100 shadow-sm p-2 px-4 rounded-sm w-full sm:w-[420px] md:w-[520px] lg:w-[640px]">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="outline-none text-foreground transition-all duration-300 w-full bg-transparent"
            placeholder="Search Author, Company, or Keyword..."
          />
          <button onClick={handleSearch} className="hover:text-peach cursor-pointer">
            <Search size={16} />
          </button>
        </div>
      </div>

      {/* Results Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          {query ? `Results for "${query}"` : "All Articles"}
        </h2>
        <p className="text-gray-600 text-sm mt-1">
          {totalResults} {totalResults === 1 ? "article" : "articles"}
        </p>
      </div>

      {/* Results */}
      {loading ? (
        <div className="flex items-center justify-center min-h-[40vh]">
          <Load />
        </div>
      ) : currentPosts.length > 0 ? (
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {currentPosts.map((post, index) => {
              const firstCategory =
                Array.isArray(post.categories) && post.categories.length > 0
                  ? post.categories[0].title || ""
                  : "";

              const cardData: newsCard = {
                title: post.title || "",
                description: post.description || "",
                coverImage: post.coverImage || "",
                categories: firstCategory,
                slug: post.slug || "",
                publishedAt: post.publishedAt || "",
                id: post.id || "",
                delay: (index + 1) * 100,
              };

              return <Card key={post.slug || post.id} {...cardData} />;
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex-center gap-2 mt-4">
              {/* Prev */}
              <button
                disabled={page === 1}
                onClick={() => handlePageChange(page - 1)}
                className="pagination"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Page Numbers */}
              {(() => {
                const pages: (number | 'ellipsis-left' | 'ellipsis-right')[] = [];

                if (totalPages <= 10) {
                  for (let i = 1; i <= totalPages; i++) pages.push(i);
                } else {
                  pages.push(1);

                  if (page > 4) pages.push('ellipsis-left');

                  const start = Math.max(2, page - 2);
                  const end = Math.min(totalPages - 1, page + 2);
                  for (let i = start; i <= end; i++) pages.push(i);

                  if (page < totalPages - 3) pages.push('ellipsis-right');

                  pages.push(totalPages);
                }

                return pages.map((p) => {
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
                      className={`px-2 cursor-pointer  ${
                        page === p ? 'border rounded text-white bg-peach' : ''
                      }`}
                    >
                      {p}
                    </button>
                  );
                });
              })()}

              {/* Next */}
              <button
                disabled={page === totalPages}
                onClick={() => handlePageChange(page + 1)}
                className="pagination"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      ) : (
        <section className="min-h-[20vh] flex flex-col items-center justify-center px-4 text-center gap-4 sm:gap-5">
          <div className="flex-center">
            <h2 className="motion-preset-blur-down-lg delay-600 text-peach font-black tracking-wide text-2xl sm:text-3xl md:text-4xl">
              Not Found
            </h2>
            <Image
              src="/find.webp"
              alt="Confused animated character with no articles available"
              width={160}
              height={160}
              className="motion-preset-blur-left-lg delay-200 w-24 sm:w-28 md:w-36"
              priority
            />
          </div>
          <p className="motion-preset-blur-down-lg delay-800 text-gray-600 text-sm sm:text-base max-w-xs sm:max-w-md">
            Hmm… we couldn't find any articles matching your search. Try another one!
          </p>
        </section>
      )}
    </section>
  );
}