// components/NewsGrid.tsx — Client Component (data fetching only)
"use client";

import { useState, useEffect } from "react";
import Card from "@/components/Card";
import { newsCard } from "@/components/Card";
import { getNewsCard } from "@/sanity/queries";
import Link from "next/link";

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

export default function NewsGrid() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function fetchPosts() {
      try {
        const data = await getNewsCard();
        if (!cancelled) setPosts(data);
      } catch {
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
    categories: Array.isArray(post.categories) && post.categories.length > 0 ? post.categories[0].title || "" : "",
    slug: post.slug || "",
    publishedAt: post.publishedAt || "",
    id: post.id || "",
    delay: (index + 1) * 200,
  }));

  return (
    <section className="flex flex-col py-10 md:py-14 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-bold text-gradient-peach dark:text-gradient-violet text-xl sm:text-2xl">
          Latest Georgia Tech &amp; Startup News
        </h2>
        <Link href="/browse" className="hidden sm:inline-flex font-semibold text-sm text-gradient-peach dark:text-gradient-violet hover:text-gradient-violet dark:hover:text-gradient-peach transition-colors">
          View all →
        </Link>
      </div>

      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)}
        </div>
      )}

      {!loading && error && <p className="mt-12 text-center text-red-400">{error}</p>}

      {!loading && !error && cards.length === 0 && (
        <p className="mt-12 text-center text-zinc-400">We're working on new articles. Stay tuned!</p>
      )}

      {!loading && !error && cards.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {cards.map((card) => <Card key={card.slug || card.title} {...card} />)}
          </div>
          <Link href="/browse" className="mt-10 self-center font-semibold text-sm sm:text-base text-peach dark:text-violet border-2 border-peach dark:border-violet rounded-full px-6 py-2 hover:bg-gradient-peach dark:hover:bg-gradient-violet hover:text-white active:bg-gradient-violet active:border-violet dark:active:border-peach dark:active:bg-gradient-peach transition-colors duration-200">
            Browse more stories
          </Link>
        </>
      )}
    </section>
  );
}