import type { Metadata } from "next";
import { getArticle, sameCategory, getFaqs } from "@/sanity/queries";
import PageNotFound from "@/app/not-found";
import { formatDate } from "@/lib/format";
import { urlFor } from "@/sanity/sanityClient";
import BarticleSmall from "@/components/Barticle";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/lib/Portable";
import { newsCard } from "@/components/Card";
import CopyLinkButton from "@/components/Copy";
import SubscribeForm from "@/components/SubscribeForm";
import nlp from "compromise";
import FaqAccordion from "@/components/FaqAccordion";
import { Calendar, PenLine, BookOpen, HelpCircle, Newspaper, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    slug: string;
    bio: string;
    authorImg: string;
  };
  body: any;
};

async function fetchPostBySlug(slug: string): Promise<Post | null> {
  try {
    const article = await getArticle(slug);

    if (!article || !article.length) return null;

    const data = article[0];

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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Peach State Tech",
      description: "The requested article could not be found.",
    };
  }

  const categoryTitle = post.categories?.[0]?.title ?? "";
  const doc = nlp(categoryTitle + post.description);
  const Keywords = doc.nouns().out("array");

  return {
    title: `${post.title}`,
    description: post.description?.slice(0, 155) + "...",
    authors: [{ name: post.author?.name ?? "Peach State Tech" }],
    openGraph: {
      title: post.title,
      description: post.description?.slice(0, 155) + "...",
      type: "article",
      url: `https://www.peachstate.tech/blog/${post.slug}`,
      siteName: "Peach State Tech",
      publishedTime: post.publishedAt,
      authors: [post.author?.name ?? "Peach State Tech"],
      images: [
        {
          url: urlFor(post.coverImage).url(),
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
    alternates: {
      canonical: `https://www.peachstate.tech/blog/${post.slug}`,
    },
    keywords: [
      ...Keywords,
      "Peach State Tech",
      "Blog",
      "Peach State Blog",
      "Peach State Tech Blog",
      "Georgia Peach State",
      "Georgia Peach State Tech",
      "Georgia Blog",
      "Georgia Peach State Tech Blog",
    ].filter(Boolean),
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return <PageNotFound />;
  }

  const categoryTitle = post.categories?.[0]?.title ?? "";
  const Related3 = await sameCategory(categoryTitle, post.id);

  const result = await getFaqs(post.id);
  const faqs = result?.FAQs ?? [];

  const coverImageUrl = urlFor(post.coverImage).url();
  const canonicalUrl = `https://www.peachstate.tech/blog/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.description,
    image: [coverImageUrl],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author?.name ?? "Peach State Tech",
      ...(post.author?.role ? { jobTitle: post.author.role } : {}),
    },
    publisher: {
      "@type": "NewsMediaOrganization",
      name: "Peach State Tech",
      logo: {
        "@type": "ImageObject",
        url: "https://www.peachstate.tech/logo1.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    ...(categoryTitle ? { articleSection: categoryTitle } : {}),
    url: canonicalUrl,
  };

const FAQJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq:   any) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.peachstate.tech",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.peachstate.tech/blog",
    },
  ];

  breadcrumbItems.push({
    "@type": "ListItem",
    position: breadcrumbItems.length + 1,
    name: post.title,
    item: canonicalUrl,
  });

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  };

  return (
  <main className=" scroll-smooth min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-zinc-950 dark:to-zinc-900 py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQJsonLd), }}
    />

    <div className="max-w-7xl mx-auto">
      {/* ── Hero ─────────────────────────────────────────── */}
      <article className="motion-preset-focus motion-delay-100 bg-white dark:bg-zinc-800 rounded-2xl shadow-lg dark:shadow-black/30 overflow-hidden mb-8">
        <Image
          src={coverImageUrl}
          alt={`Cover image for ${post.title}`}
          width={1200}
          height={630}
          priority
          sizes="100vw"
          className="w-full h-auto"
        />

        <div className="p-6 sm:p-10">
          {categoryTitle && (
            <span className="inline-block mb-4 px-4 py-1.5 bg-peach/10 text-peach rounded-full text-sm font-medium border border-peach/30">
              {categoryTitle}
            </span>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-zinc-50 mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-zinc-400 mb-6 leading-relaxed">
            {post.description}
          </p>

          <div className="flex items-center justify-between gap-2 text-sm text-gray-600 dark:text-zinc-400 pt-4 border-t border-peach/40">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-zinc-400 ">
              <Calendar className="w-4 h-4 text-peach" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>

            <CopyLinkButton/>
          </div>


        </div>
      </article>

      {/* ── Content grid: sticky sidebar + main column ─────── */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Sidebar */}
        <aside className="lg:col-span-1 lg:sticky lg:top-8 flex flex-col gap-6 order-2 lg:order-1">
          {/* Author card */}
          <Link href={`/author/${post.author.slug}`} className="motion-preset-focus motion-delay-200 bg-white dark:bg-zinc-800 rounded-2xl shadow-lg dark:shadow-black/30 p-6 border border-gray-100 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-violet-bottom flex items-center justify-center text-white font-semibold text-xl ring-2 ring-peach/20 flex-shrink-0">
                <Image
                  src={urlFor(post.author.authorImg).url()}
                  alt={post.author.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded-full p-2"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <PenLine className="w-3.5 h-3.5 text-gray-400 dark:text-zinc-500" />
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-400 dark:text-zinc-500">
                    Written by
                  </span>
                </div>
                <p className="font-semibold text-lg text-gray-900 dark:text-zinc-100 leading-tight">
                  {post.author.name}
                </p>
                <span className="inline-block mt-1.5 px-2.5 py-0.5 bg-peach/10 text-peach rounded-full text-xs font-medium border border-peach/30">
                  {post.author.role}
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-700 dark:text-zinc-300 leading-relaxed mb-4">
              {post.author.bio}
            </p>
          </Link>

          {/* Quick nav — keeps every section reachable without scrolling */}
          <nav className="motion-preset-focus motion-delay-250 bg-white dark:bg-zinc-800 rounded-2xl shadow-lg dark:shadow-black/30 p-4 border border-gray-100 dark:border-zinc-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-zinc-500 px-2 mb-2">
              On this page
            </p>

            <a
              href="#article-body"
              className="flex items-center gap-2 px-2 py-2 rounded-lg text-sm text-gray-700 dark:text-zinc-300 hover:bg-peach/10 hover:text-peach transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>Article</span>
            </a>

            {faqs?.length > 0 && (
              <a
                href="#faqs"
                className="flex items-center gap-2 px-2 py-2 rounded-lg text-sm text-gray-700 dark:text-zinc-300 hover:bg-peach/10 hover:text-peach transition-colors"
              >
                <HelpCircle className="w-4 h-4" />
                <span>FAQs</span>
              </a>
            )}

            <a
              href="#related"
              className="flex items-center gap-2 px-2 py-2 rounded-lg text-sm text-gray-700 dark:text-zinc-300 hover:bg-peach/10 hover:text-peach transition-colors"
            >
              <Newspaper className="w-4 h-4" />
              <span>Related articles</span>
            </a>
          </nav>

          {/* Subscribe */}
          <div className="motion-preset-focus motion-delay-300 bg-white dark:bg-zinc-800 rounded-2xl shadow-lg dark:shadow-black/30 p-6 border border-gray-100 dark:border-zinc-700">
            <div className="flex items-center gap-2 mb-1">
              <Mail className="w-4 h-4 text-peach" />
              <p className="font-semibold text-gray-900 dark:text-zinc-50">
                Enjoyed this post?
              </p>
            </div>
            <SubscribeForm />
          </div>
        </aside>

        {/* Main column */}
        <div className="lg:col-span-3 flex flex-col gap-8 order-1 lg:order-2">
          {/* Article body */}
          <div
            id="article-body"
            className="motion-preset-focus motion-delay-200 bg-white dark:bg-zinc-800 rounded-2xl shadow-lg dark:shadow-black/30 p-6 sm:p-10 text-gray-800 dark:text-zinc-200 scroll-mt-8"
          >
            <PortableText value={post.body} components={portableTextComponents} />
          </div>

          {/* FAQs — client-rendered accordion */}
          <FaqAccordion faqs={faqs} />

          {/* Related articles */}
          <div id="related" className="scroll-mt-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-50 mb-6 flex items-center gap-2">
              <Newspaper className="w-5 h-5 text-peach" />
              <span>Related articles</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Related3.length === 0 && (
                <p className="text-gray-600 dark:text-zinc-400 text-center col-span-2">
                  No related articles found.
                </p>
              )}

              {Related3.map((relatedPost: any, index: number) => {
                const firstCategory =
                  Array.isArray(relatedPost.categories) && relatedPost.categories.length > 0
                    ? relatedPost.categories[0].title || ""
                    : "";

                const cardData: newsCard = {
                  title: relatedPost.title || "",
                  description: relatedPost.description || "",
                  coverImage: relatedPost.coverImage || "",
                  categories: firstCategory,
                  slug: relatedPost.slug || "",
                  publishedAt: relatedPost.publishedAt || "",
                  id: relatedPost.id || "",
                  delay: (index + 1) * 100,
                };

                return <BarticleSmall key={relatedPost.id} {...cardData} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);
    
}