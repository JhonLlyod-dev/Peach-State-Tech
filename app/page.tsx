"use client";

import { useState, useEffect } from "react";
import Card from "@/components/Card";
import { newsCard } from "@/components/Card";
import { getNewsCard } from "@/sanity/queries";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import ThemeToggle from "@/components/ThemeToggle";

function CardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden bg-white dark:bg-zinc-800 shadow-sm dark:shadow-black/30 animate-pulse">
      <div className="h-48 bg-zinc-200 dark:bg-zinc-700" />
      <div className="p-4 flex flex-col gap-3">
        <div className="h-3 w-20 bg-zinc-200 dark:bg-zinc-700 rounded-full" />
        <div className="h-5 w-full bg-zinc-200 dark:bg-zinc-700 rounded-full" />
        <div className="h-5 w-3/4 bg-zinc-200 dark:bg-zinc-700 rounded-full" />
        <div className="h-3 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full" />
        <div className="h-3 w-5/6 bg-zinc-100 dark:bg-zinc-800 rounded-full" />
      </div>
    </div>
  );
}

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchPosts() {
      try {
        const data = await getNewsCard();
        if (!cancelled) setPosts(data);
      } catch (err) {
        if (!cancelled) setError("Failed to load articles. Please try again.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchPosts();
    return () => { cancelled = true; };
  }, []);

  const cards: newsCard[] = posts.map((post, index) => ({
    title: post.title || "",
    description: post.description || "",
    coverImage: post.coverImage || "",
    categories:
      Array.isArray(post.categories) && post.categories.length > 0
        ? post.categories[0].title || ""
        : "",
    slug: post.slug || "",
    publishedAt: post.publishedAt || "",
    id: post.id || "",
    delay: (index + 1) * 200,
  }));

  return (
    <main className="relative flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-900 font-sans">
      {/* Hero */}
      <section className="relative w-full h-80 sm:h-96 md:h-112 overflow-hidden bg-zinc-950 dark:bg-black">
        <img
          src="/background.webp"
          alt="Atlanta skyline representing Georgia's growing tech ecosystem"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-zinc-950/65 dark:bg-black/65 backdrop-blur-[2px] px-4 sm:px-8 md:px-16 text-white text-center">
          <p className="font-extrabold motion-preset-fade-lg motion-delay-100 tracking-widest text-gradient-peach text-xs sm:text-sm uppercase">
            Peach State Tech
          </p>
          <h1 className="font-bold text-white motion-preset-fade-lg motion-delay-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl">
            Georgia's Tech, Startup &amp; Innovations
          </h1>
          <p className="font-light motion-preset-fade-lg motion-delay-300 text-sm sm:text-base md:text-lg max-w-2xl text-zinc-200">
            AI breakthroughs, startup funding, and the founders shaping Georgia's tech economy.
          </p>
          <SearchBar />
        </div>
      </section>

      {/* News grid */}
      <section className="flex flex-col py-10 md:py-14 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-gradient-peach text-xl sm:text-2xl">
            Latest Georgia Tech &amp; Startup News
          </h2>
          <Link
            href="/browse"
            className="hidden sm:inline-flex font-semibold text-sm text-gradient-peach hover:text-gradient-violet transition-colors"
          >
            View all →
          </Link>
        </div>

        {/* Loading skeletons */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <p className="mt-12 text-center text-red-400">{error}</p>
        )}

        {/* Empty state */}
        {!loading && !error && cards.length === 0 && (
          <p className="mt-12 text-center text-zinc-400">
            We're working on new articles. Stay tuned!
          </p>
        )}

        {/* Cards */}
        {!loading && !error && cards.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {cards.map((card) => (
                <Card key={card.slug || card.title} {...card} />
              ))}
            </div>
            <Link
              href="/browse"
              className="mt-10 self-center font-semibold text-sm sm:text-base text-peach border-2 border-peach rounded-full px-6 py-2 hover:bg-gradient-peach hover:text-white active:bg-gradient-violet active:border-violet transition-colors duration-200"
            >
              Browse more stories
            </Link>
          </>
        )}
      </section>

      <ThemeToggle />
    </main>
  );
}