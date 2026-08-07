// app/browse/page.tsx
import { Suspense } from "react";
import BrowseClient from "./BrowseClient";
import Load from "@/components/Load";
import Image from "next/image";

const topics = [
  "Startups",
  "AI & Innovation",
  "Venture Capital",
  "Founders",
  "Research",
];

export default function BrowsePage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-white dark:from-zinc-950 dark:to-zinc-900 py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className=" mb-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text side */}
        <div className="flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gradient-peach">
            Georgia Tech Stories
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-zinc-50">
            Discover What's Next
          </h1>

          <p className="text-gray-600 dark:text-zinc-400 max-w-md">
            Startups, breakthroughs, and the people building Georgia's tech future.
          </p>

          <div className="flex flex-wrap gap-3">
            {topics.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-linear-to-tr  from-peach/40 to-peach-light dark:from-violet/40 dark:to-violet font-semibold px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 text-white bg-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Image side */}
        <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-sm dark:shadow-black/30">
          <Image
            src="/background.webp"
            alt="Atlanta skyline, home to Georgia's growing tech ecosystem"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-tr from-peach/20 to-transparent" />
        </div>
      </div>

      <Suspense fallback={<Load />}>
        <BrowseClient />
      </Suspense>

      <div className="w-full pt-14 flex justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="w-full max-w-5xl border-t border-zinc-200 dark:border-zinc-700" />
      </div>
      <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-14 flex flex-col items-center">
        <div className="motion-preset-fade-lg motion-delay-100 max-w-2xl mb-10 flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-gradient-peach dark:text-gradient-violet tracking-tight mb-4">
            How We Cover Georgia Tech
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            Every story starts on the ground — in Atlanta labs, founder meetups,
            and the deals shaping Georgia's innovation economy.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              delay: "motion-delay-200",
              icon: "🔍",
              title: "Reported, Not Aggregated",
              desc: "We talk to the founders, researchers, and investors behind every story — not just rewrite press releases.",
            },
            {
              delay: "motion-delay-350",
              icon: "📍",
              title: "Georgia-First",
              desc: "From Midtown Atlanta to Athens, Savannah, and Augusta — if it's shaping Georgia tech, we're covering it.",
            },
            {
              delay: "motion-delay-500",
              icon: "⚡",
              title: "Updated Daily",
              desc: "New funding rounds, launches, and interviews added as they happen, so you're never behind.",
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
      </section>
    </main>
  );
}