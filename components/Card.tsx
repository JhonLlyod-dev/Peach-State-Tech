import Link from "next/link";
import { urlFor } from "@/sanity/sanityClient";
import { formatDate } from "@/lib/format";
import Image from "next/image";

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
    <div className={` motion-preset-slide-up w-full bg-white dark:bg-zinc-800 rounded-lg shadow-md dark:shadow-black/30 overflow-hidden hover:shadow-xl dark:hover:shadow-black/40 transition-shadow duration-300 flex flex-col`}>
      <Image
        src={urlFor(card.coverImage).url()}
        alt={`Thumbnail for ${card.title}`}
        width={368}
        height={128}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="w-full object-cover "
      />

      {/* Card Content */}
      <div className="p-4 flex flex-col flex-1 justify-between motion-delay">
        
        <div className="flex flex-col gap-2">
          {/* Category / Tag */}
          <span className="text-sm text-peach font-bold tracking-wide uppercase">{card.categories}</span>

          {/* Title */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-zinc-100 line-clamp-2">
            {card.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-zinc-400 text-sm sm:text-base line-clamp-3">
            {card.description}
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 text-gray-500 dark:text-zinc-500 text-xs sm:text-sm">
          <span>{formatDate(card.publishedAt)}</span>
          <Link
            aria-label="Read more about the Article"
            href={`/blog/${card.slug}`}
            className="text-peach font-semibold hover:underline hover:text-violet transition ease-in"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  )
}