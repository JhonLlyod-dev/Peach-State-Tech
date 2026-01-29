"use client";

import { useSearchParams } from "next/navigation";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { getSearchResults } from "@/sanity/queries";
import { newsCard } from "@/components/Card";
import Load from "@/components/Load";

export default function BrowsePage() {
  const searchParams = useSearchParams();
  const query = searchParams?.get("q");

  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(query || '');
  const [posts, setPosts] = useState<newsCard[]>([]);

  const router = useRouter();

  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      router.push(`/browse?q=${encodeURIComponent(trimmedQuery)}`);
    }
  };

  useEffect(() => {
    setLoading(true);
    getSearchResults(query || '').then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, [query]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
          Browse Articles
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          Discover insights, stories, and ideas from our collection
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-10">
        <div className="border text-foreground flex items-center border-l-4 border-l-peach gap-1 border-gray-100 shadow-sm p-2 px-4 rounded-sm w-full sm:w-[420px] md:w-[520px] lg:w-[640px]">
          <input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="outline-none text-foreground transition-all duration-300 w-full bg-transparent"
            placeholder="Search Author, Company, or Keyword..."
          />
          <button onClick={handleSearch}>
            <Search size={16} />
          </button>
        </div>
      </div>

      {/* Results Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          {searchQuery ? `Results for "${searchQuery}"` : 'All Articles'}
        </h2>
        <p className="text-gray-600 text-sm mt-1">
          {posts.length} {posts.length === 1 ? 'article' : 'articles'}
        </p>
      </div>

      {/* Results */}
      {loading ? (
        <div className="flex items-center justify-center min-h-[40vh]">
          <Load />
        </div>
      ) : posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, index) => {
            const firstCategory = Array.isArray(post.categories) && post.categories.length > 0
              ? post.categories[0].title || ''
              : '';

            const cardData: newsCard = {
              title: post.title || '',
              description: post.description || '',
              coverImage: post.coverImage || '',
              categories: firstCategory,
              slug: post.slug || '',
              publishedAt: post.publishedAt || '',
              id: post.id || '',
              delay: (index + 1) * 100,
            };

            return <Card key={post.slug || post.id} {...cardData} />;
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
            <Search className="text-gray-400" size={32} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
          <p className="text-gray-600">Try adjusting your search terms</p>
        </div>
      )}
    </main>
  );
}
