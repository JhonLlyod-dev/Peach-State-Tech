// app/page.tsx — Server Component (no "use client")
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import ThemeToggle from "@/components/ThemeToggle";
import NewsGrid from "@/components/NewsGrid";
import Link from "next/link"; // the client part, extracted

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
      {/* ── Intro / About blurb ── card version ── */}
      <div className="w-full flex justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="w-full max-w-5xl border-t border-zinc-200 dark:border-zinc-700" />
      </div>
      <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-14 flex flex-col items-center">
        <div className="motion-preset-fade-lg motion-delay-100 max-w-2xl mb-10 flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-gradient-peach dark:text-gradient-violet tracking-tight mb-4">
            Georgia's Tech Story, Told in Real Time
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            From Atlanta's Midtown corridor to emerging hubs in Athens, Savannah, and
            Augusta — we cover the founders, startups, and innovators building Georgia's
            digital economy.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            {
              delay: "motion-delay-200",
              icon: "💼",
              title: "Business Leaders",
              desc: "Funding rounds, market moves, and the companies driving Georgia's economic growth.",
            },
            {
              delay: "motion-delay-350",
              icon: "🚀",
              title: "Entrepreneurs",
              desc: "Startup success stories, investment opportunities, and resources to grow your company.",
            },
            {
              delay: "motion-delay-500",
              icon: "📰",
              title: "Georgia Residents",
              desc: "Local tech news, job creation, and innovations shaping your community.",
            },
            {
              delay: "motion-delay-[650ms]",
              icon: "💡",
              title: "Students & Pros",
              desc: "Career opportunities, industry insight, and the trends shaping Georgia's future workforce.",
            },
          ].map(({ delay, icon, title, desc }) => (
            <div
              key={title}
              className={`
                motion-preset-slide-up ${delay}
                group bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-sm p-6
                hover:border-peach dark:hover:border-violet hover:shadow-md dark:hover:shadow-black/30 transition-all duration-200
              `}
            >
              <div className="text-2xl mb-4">{icon}</div>
              <h3 className="font-black text-zinc-900 dark:text-zinc-50 text-base mb-2 group-hover:text-gradient-peach dark:group-hover:text-gradient-violet transition-colors duration-200">
                {title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <Link
          href="/browse"
          className="font-semibold text-sm sm:text-base text-peach dark:text-violet border-2 border-peach dark:border-violet rounded-full px-6 py-2 hover:bg-gradient-peach dark:hover:bg-gradient-violet hover:text-white active:bg-gradient-violet active:border-violet dark:active:border-peach dark:active:bg-gradient-peach transition-colors duration-200"
        >
          Browse more stories
        </Link>
      </section>

      <ThemeToggle />

    </main>
  );
}