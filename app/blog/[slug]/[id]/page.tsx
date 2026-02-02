import type { Metadata } from "next";
import { getArticle,sameCategory } from "@/sanity/queries";
import PageNotFound from "@/app/not-found";
import { formatDate } from "@/lib/format";
import { urlFor } from "@/sanity/sanityClient";
import BarticleSmall from "@/components/Barticle";
import { PortableText } from "@portabletext/react";
import {portableTextComponents} from "@/lib/Portable";
import { newsCard } from "@/components/Card";
import CopyLinkButton from "@/components/Copy";




type Post = {
  title: string;
  description: string;
  id: string;
  publishedAt: string;
  coverImage: string;
  slug: string;

  categories: {
    title: string;
  }[];

  author: {
    name: string;
    role: string;
    bio: string;
    authorImg: string;
  };

  body: any;
};



async function fetchPostBySlug(slug: string, id: string): Promise<Post | null> {
  try {
    const article = await getArticle(slug, id);

    if (!article || !article.length) return null; // nothing found

    const data = article[0]; // pick first element

    return {
      title: data.title,
      description: data.description,
      id: data.id,
      publishedAt: data.publishedAt,
      coverImage: data.coverImage,
      slug: data.slug,
      categories: data.categories,
      author: data.author,
      body: data.body,
    };
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
}



type PageProps = {
  params: Promise<{ slug: string; id: string }>;
};


// ✅ Dynamic metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const {slug, id} =  await params;
  const post = await fetchPostBySlug(slug, id);

  if (!post) {
    return {
      title: "Post Not Found | Peach State Tech",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: `${post.title} | Peach State Tech`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const {slug, id} =  await params;
  const post = await fetchPostBySlug(slug, id);




  if (!post) {
    return <PageNotFound/>;
  }
    const Related3 = await sameCategory(post.categories[0].title, post.id);


    return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-6xl mx-auto">
        <article className=" motion-preset-focus motion-delay-100 bg-white rounded-2xl shadow-lg p-6 sm:p-10 mb-8">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 bg-peach/10 text-peach rounded-full text-sm font-medium border border-peach/30">
              {post.categories[0].title}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
            {post.description}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-600 pb-6 border-b border-peach">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-peach" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formatDate(post.publishedAt)}</span>
            </div>
          </div>

          {/* Author Info */}
          <div className="flex items-center justify-between mt-6 flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-peach to-orange-500 flex items-center justify-center text-white font-semibold text-2xl ring-2 ring-peach/20 flex-shrink-0">
                <img src={urlFor(post.author.authorImg).url()} alt="Author Image" className="w-full h-full object-cover rounded-full" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="font-semibold text-gray-900">{post.author.name}</p>
                </div>
                <p className="text-sm text-gray-600">{post.author.role}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <CopyLinkButton/>
            </div>
          </div>
        </article>

        {/* Article Body */}
        <div className="motion-preset-focus motion-delay-200 bg-white flex flex-col rounded-2xl shadow-lg pb-4  mb-8">
          <img src={urlFor(post.coverImage).url()} alt={post.title} className="w-full h-86 object-cover rounded-t-2xl" />
          <div className="px-6 pt-4 sm:px-10">
            <PortableText value={post.body} components={portableTextComponents} />
          </div>
        </div>

        {/* Author Bio Card */}
        <div className="motion-preset-focus motion-delay-300 bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">About the Author</h3>
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-peach to-orange-500 flex items-center justify-center text-white font-semibold text-2xl ring-2 ring-peach/20 flex-shrink-0">
              <img src={urlFor(post.author.authorImg).url()} alt="Author Image" className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <p className="font-semibold text-lg text-gray-900 ">{post.author.name}</p>
              <p className="text-gray-600 mb-3">{post.author.role}</p>
              <p className="text-gray-700 leading-relaxed">
                {post.author.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Related Articles Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Related3.length === 0 && <p className="text-gray-600 text-center col-span-3">No related articles found.</p>}
            {Related3.map((post: any,index: number) =>{
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
                  delay: (index+1) * 100,
                };

                console.log(cardData);
              return <BarticleSmall key={post.id} {...cardData} ></BarticleSmall>
            } )}   

          </div>
        </div>

      </div>
    </main>
  );
}

