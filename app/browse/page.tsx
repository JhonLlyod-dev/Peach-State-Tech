// app/browse/page.tsx
import { Suspense } from "react";
import BrowseClient from "./BrowseClient";
import Load from "@/components/Load";

export default function BrowsePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
          Browse Articles
        </h1>
        <section className="max-w-3xl text-gray-600 ">
          <p>
            Explore a curated collection of articles covering Georgia’s growing
            technology ecosystem, including startups, innovation trends, and
            business insights. Peach State Tech provides valuable resources for
            entrepreneurs, developers, and tech enthusiasts.
          </p>
        </section>
      </div>
      <Suspense fallback={<Load/>}>
        <BrowseClient />
      </Suspense>
    </main>
  );
}
        