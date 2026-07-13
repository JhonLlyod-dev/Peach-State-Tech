// app/page.tsx — Server Component (no "use client")
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import ThemeToggle from "@/components/ThemeToggle";
import NewsGrid from "@/components/NewsGrid"; // the client part, extracted

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-900 font-sans">
      <section className="relative w-full h-80 sm:h-96 md:h-112 overflow-hidden bg-zinc-950 dark:bg-black">
        <Image
          src="/background.webp"
          fill
          sizes="100vw"
          priority
          alt="Peach State Articles in news paper form"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-zinc-950/65 dark:bg-black/65 backdrop-blur-[2px] px-4 sm:px-8 md:px-16 text-white text-center">
          <p className="font-extrabold motion-preset-fade-lg motion-delay-100 tracking-widest text-gradient-peach dark:text-gradient-violet text-xs sm:text-sm uppercase">
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

      <NewsGrid />

      <ThemeToggle />
    </main>
  );
}