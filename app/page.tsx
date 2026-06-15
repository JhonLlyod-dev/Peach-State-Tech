import { Search } from "lucide-react";
import Card from "@/components/Card";
import { newsCard } from "@/components/Card";
import { getNewsCard } from "@/sanity/queries";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";

export default async function Home() {
  const posts = await getNewsCard();

  return (
    <main className="flex flex-col min-h-screen bg-zinc-50 font-sans">
      {/* Hero */}
      <section className="relative w-full h-80 sm:h-96 md:h-112 overflow-hidden bg-foreground">
        <img
          src="/background.webp"
          alt="Atlanta skyline representing Georgia's growing tech ecosystem"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-foreground/65 backdrop-blur-[2px] px-4 sm:px-8 md:px-16 text-white text-center">
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
          <h2 className="font-bold text-gradient-peach text-xl sm:text-2xl ">
            Latest Georgia Tech &amp; Startup News
          </h2>
          <Link
            href="/browse"
            className="hidden sm:inline-flex font-semibold text-sm text-gradient-peach hover:text-gradient-violet transition-colors"
          >
            View all →
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="mt-12 text-center text-zinc-400">
            We're working on new articles. Stay tuned!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post: any, index: number) => {
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
                delay: (index + 1) * 200,
              };

              return <Card key={post.slug || post.title} {...cardData} />;
            })}
          </div>
        )}

        {posts.length > 0 && (
          <Link
            href="/browse"
            className="mt-10 self-center font-semibold text-sm sm:text-base text-peach border-2 border-peach rounded-full px-6 py-2 hover:bg-gradient-peach hover:text-white active:bg-gradient-violet active:border-violet transition-colors duration-200"
          >
            Browse more stories
          </Link>
        )}
      </section>
    </main>
  );
}