import Link from "next/link";
import { urlFor } from "@/sanity/sanityClient";
import { formatDate } from "@/lib/format";

export type newsCard = {
  title: string;
  description: string;
  coverImage: string;
  categories: string;
  slug: string;
  publishedAt: string;
  id: string;
  delay: number;
}

export default function Card(card: newsCard) {
  return (
    <div className={` motion-preset-slide-up motion-delay-${card.delay} w-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col`}>
      <img
        src={urlFor(card.coverImage).url()}
        alt={card.title}
        className="w-full h-40 sm:h-48 md:h-56 object-cover "
      />

      {/* Card Content */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        
        <div className="flex flex-col gap-2">
          {/* Category / Tag */}
          <span className="text-sm text-peach font-semibold uppercase">{card.categories}</span>

          {/* Title */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 line-clamp-2">
            {card.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base line-clamp-3">
            {card.description}
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 text-gray-500 text-xs sm:text-sm">
          <span>{formatDate(card.publishedAt)}</span>
          <Link
            href={`/blog/${card.slug}`}
            className="text-peach font-semibold hover:underline"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  )
}
