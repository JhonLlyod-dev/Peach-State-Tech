
import Link from "next/link";
import Image from "next/image";
import { Search, Home } from "lucide-react";

export default function PageNotFound() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 text-center overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-peach opacity-10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-gradient-violet opacity-10 blur-3xl" />

      <div className="relative flex flex-col items-center gap-4 sm:gap-5 z-10">
        {/* Eyebrow */}
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-violet motion-preset-fade-sm motion-delay-100">
          Lost in the Loop
        </span>

        {/* 404 with gradient */}
        <h1 className="motion-preset-blur-down-md motion-delay-200 text-gradient-violet font-black tracking-widest text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
          404
        </h1>

        <Image
          src="/logo_white.webp"
          alt="Embarrassed animated character for 404 page"
          width={160}
          height={160}
          className="motion-preset-pop motion-delay-200 w-28 sm:w-32 md:w-40"
          priority
        />

        <div className="flex flex-col gap-2">
          <h2 className="motion-preset-blur-down-md motion-delay-300 text-xl sm:text-2xl font-bold text-gray-600">
            This Page Wandered Off
          </h2>
          <p className="motion-preset-blur-down-md motion-delay-300 text-gray-600 text-sm sm:text-base max-w-xs sm:max-w-md">
            The link may be broken, or the story moved. Let's get you back on track.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6 motion-preset-blur-down-md motion-delay-400">
          <Link href="/">
            <button className="flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3 bg-gradient-violet text-white rounded-lg text-sm sm:text-base hover-link w-full sm:w-auto cursor-pointer">
              <Home size={18} />
              Back to Home
            </button>
          </Link>

          <Link href="/browse">
            <button className="flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3 border border-zinc-200 text-zinc-700 rounded-lg text-sm sm:text-base hover:border-violet hover:text-violet transition-colors w-full sm:w-auto cursor-pointer">
              <Search size={18} />
              Browse Articles
            </button>
          </Link>
        </div>


      </div>
    </section>
  );
}