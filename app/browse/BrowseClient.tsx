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
    <section>
      {/* Search Bar */}
      <div className="mb-8">
        <div className="flex items-center gap-2 bg-gradient-peach dark:bg-gradient-violet border border-l-4 border-l-peach dark:border-l-violet border-zinc-200 bg-white shadow-sm rounded-md px-4 py-2.5 w-full sm:w-[420px] md:w-[480px]">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="outline-none text-white transition-all duration-300 tracking-wide w-full bg-transparent  placeholder:text-white"
            placeholder="Search Author, Company, or Keyword..."
          />
          <button onClick={handleSearch} className="text-white hover:text-violet cursor-pointer transition-colors">
            <Search size={16} />
          </button>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-baseline justify-between mb-6 pb-3 border-b border-zinc-200">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground">
          {query ? `Results for "${query}"` : "All Articles"}
        </h2>
        <p className="text-zinc-500 text-sm">
          {totalResults} {totalResults === 1 ? "article" : "articles"}
        </p>
      </div>

      {/* Results */}
      {loading ? (
        <div className="flex items-center justify-center min-h-[40vh]">
          <Load />
        </div>
      ) : currentPosts.length > 0 ? (
        <div className="flex flex-col gap-10">
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
            <div className="flex items-center justify-center gap-1.5">
              {/* Prev */}
              <button
                disabled={page === 1}
                onClick={() => handlePageChange(page - 1)}
                className="flex items-center justify-center w-9 h-9 rounded-md border border-zinc-200 text-zinc-500 hover:border-peach hover:text-peach disabled:opacity-40 disabled:hover:border-zinc-200 disabled:hover:text-zinc-500 transition-colors cursor-pointer"
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
                      <span key={p} className="px-1 text-zinc-400 select-none">
                        …
                      </span>
                    );
                  }
                  return (
                    <button
                      key={p}
                      onClick={() => handlePageChange(p)}
                      className={`flex items-center justify-center w-9 h-9 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                        page === p
                          ? 'bg-gradient-peach text-white'
                          : 'text-zinc-600 hover:bg-zinc-100'
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
                className="flex items-center justify-center w-9 h-9 rounded-md border border-zinc-200 text-zinc-500 hover:border-peach hover:text-peach disabled:opacity-40 disabled:hover:border-zinc-200 disabled:hover:text-zinc-500 transition-colors cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      ) : (
        <section className="min-h-[40vh] flex flex-col items-center justify-center px-4 text-center gap-4 sm:gap-5">
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/logo_white.webp"
              alt="no articles available"
              width={140}
              height={140}
              className="motion-preset-blur-left-lg delay-200 w-24 sm:w-28 md:w-36"
              priority
            />
            <h2 className="motion-preset-blur-down-lg delay-600 text-gradient-violet font-black tracking-wide text-2xl sm:text-3xl md:text-4xl">
              Not Found
            </h2>
          </div>
          <p className="motion-preset-blur-down-lg delay-800 text-zinc-500 text-sm sm:text-base max-w-xs sm:max-w-md">
            Hmm… we couldn't find any articles matching your search. Try another one!
          </p>
        </section>
      )}
    </section>
  );
}