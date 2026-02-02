"use client";

import { useSearchParams } from "next/navigation";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { getSearchResults } from "@/sanity/queries";
import { newsCard } from "@/components/Card";
import Load from "@/components/Load";
import {ChevronLeft,ChevronRight} from "lucide-react";
import Image from "next/image";
import { FileSearch, ArrowLeft } from "lucide-react";

export default function BrowseClient() {
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

  // Pagination logic

  const [page, setPage] = useState(1);
  const postsPerPage = 6;
  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
  const totalPages = Math.ceil(posts.length / postsPerPage);


  function pageHandler(condition: string){
    if(condition === "next"){
      setPage(page + 1);
    }else if(condition === "prev"){
      setPage(page - 1);
    }
  }

  return (
    <main className="min-h-[90vh] bg-gradient-to-b from-gray-50 to-white py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
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
          <button onClick={handleSearch} className="hover:text-peach cursor-pointer">
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
        <div className={`flex flex-col gap4`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {currentPosts.map((post, index) => {
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

            <div className="flex-center gap-2  mt-4">

              <button disabled={page === 1} onClick={() => pageHandler("prev") } className="pagination">
                <ChevronLeft size={18} className="" />
              </button>

              <span className="text-gray-600 font-semibold">
                {page} of {totalPages}
              </span>

              <button disabled={page === totalPages} onClick={() => pageHandler("next") }  className="pagination">
                <ChevronRight size={18} />
              </button>

            </div>
        </div>
        
      ) : (
    <section className="min-h-[20vh] flex flex-col items-center justify-center px-4 text-center gap-4 sm:gap-5">
      
      <div className="flex-center">
        <h2 className="motion-preset-blur-down-lg delay-600 text-peach font-black tracking-wide text-2xl sm:text-3xl md:text-4xl">
          Not Found
        </h2>

        <Image
          src="/search.webp" 
          alt="  Confused animated character with no articles available"
          width={160}
          height={160}
          className=" motion-preset-blur-left-lg delay-200 w-24 sm:w-28 md:w-36"
          priority
        />
      </div>

      <p className="motion-preset-blur-down-lg delay-800 text-gray-600 text-sm sm:text-base max-w-xs sm:max-w-md">
        Hmm… we couldn’t find any articles matching your search. Try another one!
      </p>

    </section>
      )}
    </main>
  );
}
