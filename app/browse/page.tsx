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
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-white py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className=" mb-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text side */}
        <div className="flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gradient-peach">
            Georgia Tech Stories
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Discover What's Next
          </h1>

          <p className="text-gray-600 max-w-md">
            Startups, breakthroughs, and the people building Georgia's tech future.
          </p>

          <div className="flex flex-wrap gap-3">
            {topics.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-linear-to-tr from-peach/40 to-peach-light font-semibold px-3 py-1.5 rounded-full border border-zinc-200 text-white bg-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Image side */}
        <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="/background.webp"
            alt="Atlanta skyline, home to Georgia's growing tech ecosystem"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-tr from-peach/20 to-transparent" />
        </div>
      </div>

      <Suspense fallback={<Load />}>
        <BrowseClient />
      </Suspense>
    </main>
  );
}