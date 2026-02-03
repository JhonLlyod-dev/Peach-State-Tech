import Link from "next/link";
import { newsCard } from "./Card";
import { urlFor } from "@/sanity/sanityClient";
import { formatDate } from "@/lib/format";

export default function BarticleSmall(card: newsCard) {
  return (
    <div className={`motion-preset-slide-up motion-delay-${card.delay} w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col`}>
      
      {/* Image */}
      <img
        src={urlFor(card.coverImage).url()}
        alt="Article Thumbnail"
        className="w-full h-32 object-cover"
      />

      {/* Content */}
      <div className="p-3 flex flex-col flex-1 justify-between">

        {/* Category / Title / Description */}
        <div className="flex flex-col gap-1">
          <span className="text-xs text-peach font-semibold uppercase">{card.categories}</span>

          <h3 className="text-sm font-bold text-gray-800 line-clamp-2">
            {card.title}
          </h3>

          <p className="text-gray-600 text-xs line-clamp-3">
            {card.description}
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-2 text-gray-500 text-xs">
          <span>{formatDate(card.publishedAt)}</span>
          <Link href={`/blog/${card.slug}`} className="text-peach font-semibold hover:underline">
            Read → 
          </Link>
        </div>

      </div>
    </div>
  );
}
