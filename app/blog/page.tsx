import { Suspense } from "react"
import { Metadata } from "next"
import CategoryClient from "./Categegoryclient"
import Load from "@/components/Load"
import Image from "next/image"

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Georgia Tech News by Topic | Peach State Tech",
  description:
    "Browse Georgia startup, AI, and venture capital news by topic. From Atlanta innovation labs to founder spotlights, find stories that match your interests.",
  keywords: [
    "Georgia tech news",
    "Atlanta startups",
    "AI Georgia",
    "venture capital Georgia",
    "tech categories",
    "startup founders",
    "innovation news",
  ],
  authors: [{ name: "Peach State Tech" }],
  alternates: {
    canonical: "https://www.peachstate.tech/blog",
  },
  openGraph: {
    title: "Georgia Tech News by Topic | Peach State Tech",
    description:
      "Browse Georgia startup, AI, and venture capital news by topic. From Atlanta innovation labs to founder spotlights.",
    type: "website",
    url: "https://www.peachstate.tech/blog",
    locale: "en_US",
    siteName: "Peach State Tech",
    images: ["/atlanta-skyline.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Georgia Tech News by Topic | Peach State Tech",
    description:
      "Browse Georgia startup, AI, and venture capital news by topic.",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-zinc-950 dark:to-zinc-900 py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text side */}
        <div className="flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-peach">
            Pick Your Lane
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-zinc-50">
            Sorted by Topic
          </h1>

          <p className="text-gray-600 dark:text-zinc-400 max-w-md">
            Find stories on Georgia startups, AI, and innovation, organized your way.
          </p>

          <div className="flex flex-wrap gap-3">
            {["AI", "Startups", "Funding", "Founders", "Research", "Policy"].map((tag) => (
              <span
                key={tag}
                className="text-xs bg-linear-to-tr from-peach/40 to-peach-light dark:from-violet/40 dark:to-violet font-semibold px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 text-white bg-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Image side */}
        <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-sm dark:shadow-black/30">
          <Image
            src="https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&fit=crop&w=1200&q=80"
            alt="Georgia Tech campus, home to startups and AI research"
            className="absolute inset-0 w-full h-full object-cover"
            width={1200}
            height={800}
            sizes="100vw"
            priority

          />
          <div className="absolute inset-0 bg-gradient-to-tr from-violet/20 to-transparent" />
        </div>
      </div>

      <Suspense
        fallback={
          <div className="flex justify-center items-center h-64">
            <Load />
          </div>
        }
      >
        <CategoryClient />
      </Suspense>
      <div className="w-full flex justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="w-full max-w-5xl border-t border-zinc-200 dark:border-zinc-700" />
      </div>
      <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-14 flex flex-col items-center">
        <div className="motion-preset-fade-lg motion-delay-100 max-w-2xl mb-10 flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-gradient-peach dark:text-gradient-violet tracking-tight mb-4">
            What You'll Find by Topic
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            Every story is tagged so you can go straight to what matters —
            from AI breakthroughs to funding rounds across Georgia's tech scene.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              delay: "motion-delay-200",
              q: "What does AI cover?",
              a: "Breakthroughs and launches from Georgia's AI labs and startups, including work tied to Atlanta's growing AI corridor.",
            },
            {
              delay: "motion-delay-350",
              q: "Funding vs. Startups?",
              a: "Funding tracks raises and venture capital activity. Startups covers the companies themselves — product news and growth stories.",
            },
            {
              delay: "motion-delay-500",
              q: "Who are Founders about?",
              a: "Interviews and profiles of the people building Georgia's tech economy, from first-timers to serial entrepreneurs.",
            },
            {
              delay: "motion-delay-[650ms]",
              q: "What's under Policy?",
              a: "Regulation and state initiatives shaping how Georgia's tech and startup ecosystem grows.",
            },
          ].map(({ delay, q, a }) => (
            <div
              key={q}
              className={`
                motion-preset-slide-up ${delay}
                group bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-sm p-6
                hover:border-peach dark:hover:border-violet hover:shadow-md dark:hover:shadow-black/30 transition-all duration-200
              `}
            >
              <h3 className="font-black text-zinc-900 dark:text-zinc-50 text-base mb-2 group-hover:text-gradient-peach dark:group-hover:text-gradient-violet transition-colors duration-200">
                {q}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}