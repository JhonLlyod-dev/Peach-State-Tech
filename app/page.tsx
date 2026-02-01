'use client';

import { Search } from "lucide-react";
import Card from "@/components/Card";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { newsCard } from "@/components/Card";
import Load from "@/components/Load";
import { getNewsCard } from "@/sanity/queries";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = () => {
    if (searchQuery) {
      router.push(`/browse?q=${searchQuery}`);
    }
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getNewsCard().then((data) => {
      setPosts(data);
    });
  }, []);



  return (
    <main className=" flex flex-col min-h-screen bg-zinc-50 font-sans ">
    <div className="  w-full h-88 sm:h-112 md:h-136 overflow-hidden bg-foreground px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32  relative">
      <img src="/background.jpg" alt="peach-tech-background" className="h-full w-full object-cover" />
      <div className="absolute flex flex-col justify-between top-0 left-0 right-0 bottom-0 bg-foreground/30 backdrop-blur-xs px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 padding py-8 sm:py-12 md:py-16lg:py-20 text-white">
        <div className="flex flex-col gap-2 motion-preset-fade-sm">
          <h3 className="font-bold text-peach text-sm sm:text-base md:text-lg">
            Peach State Tech
          </h3>

          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            Stay Ahead of Georgia Tech Trends
          </h1>

          <h2 className="font-extralight text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl">
            Positive, informative coverage that helps tech businesses get discovered by the people who matter most.
          </h2>
        </div>

        <div className="w-full motion-preset-fade-md flex-center flex-col gap-4">
          <h3 className="font-extralight text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl italic">
            " Discover the stories behind Georgia’s fastest-growing companies. "
          </h3>

          <div className="
            border
            text-foreground
            flex-center
            border-l-4
            bg-zinc-50
            border-l-peach
            gap-1
            border-gray-100
            shadow-sm
            p-2 px-4
            rounded-sm
            w-full sm:w-[420px] md:w-[520px] lg:w-[640px]
          ">
            <input
              type="text"
              onChange={(e)=> setSearchQuery(e.target.value)}
              value={searchQuery}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="
                outline-none
                text-foreground
                transition-all
                duration-300
                w-full
              "
              placeholder="Search Author, Company, or Keyword..."
            />
            <button onClick={handleSearch} className="hover:text-peach cursor-pointer">
                <Search size={16} />
            </button>
          </div>
        </div>


      </div>
    </div>

    <div className=" flex flex-col py-4 md:py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 padding">
      <h2 className="font-bold  text-peach py-1 px-2 border-2 border-peach w-fit rounded-sm">Latest</h2>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {posts.length === 0 && 
          <span className="mt-12 col-span-1 sm:col-span-2 md:col-span-3 flex-center  text-gray-400  ">We’re working on new articles. Stay tuned!</span>
        }

        {posts.map((post: any, index) => {
          const firstCategory =
            Array.isArray(post.categories) && post.categories.length > 0
              ? post.categories[0].title || ''
              : '';

          const cardData: newsCard = {
            title: post.title || '',
            description: post.description || '',      // if your post has no description
            coverImage: post.coverImage || '',       // string from your data
            categories: firstCategory,
            slug: post.slug || '',
            publishedAt: post.publishedAt || '',
            id: post.id || '',
            delay: (index+1) * 200,
          };

          return <Card key={post.slug || post.title} {...cardData} />;
        })}

      </div>
      { posts.length > 0 &&
        <button className=" cursor-pointer font-bold mt-8 self-center hover:bg-peach hover:text-white transition duration-100 ease-in  text-peach py-1 px-2 border-2 border-peach w-fit rounded-sm">
          <Link href="/browse?">
            Browse More
          </Link>
        </button>
      }
    </div>
    </main>
  );
}
