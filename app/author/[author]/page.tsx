import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { getAuthor } from "@/sanity/queries";
import { urlFor } from "@/sanity/sanityClient";

// ─── Types ──────────────────────────────────────────────────────────────────

export interface Author {
  name: string;
  slug: string;
  authorImg: any;
  role: string;
  bio: any[];
  description: any[];
  areasOfCoverage: string[];
  authorType: string;
  editorialStandardsUrl?: string;
}

type Props = {
  params: Promise<{ author: string }>;
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function portableTextToPlainText(blocks: any[] = []) {
  return blocks
    .map(
      (block) =>
        block.children
          ?.map((child: any) => child.text || "")
          .join("") || ""
    )
    .join(" ")
    .trim();
}

// ─── SEO Metadata ────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { author: slug } = await params;
  const author = await getAuthor(slug);

  if (!author) {
    return {
      title: "Author Not Found | Peach State Tech",
    };
  }

  const bioText = portableTextToPlainText(author.bio);

  const title = `${author.name} | Peach State Tech`;
  const url = `https://www.peachstate.tech/${author.slug}`;

  return {
    title,
    description: bioText,

    keywords: [
      author.name,
      author.role,
      author.authorType,
      ...(author.areasOfCoverage || []),
      "Peach State Tech author",
    ],

    authors: [{ name: author.name }],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description: bioText,
      type: "profile",
      url,
      locale: "en_US",
      siteName: "Peach State Tech",
      images: [
        {
          url: urlFor(author.authorImg).url(),
          alt: `${author.name} profile image`,
        },
      ],
    },

    twitter: {
      card: "summary",
      title,
      description: bioText,
    },
  };
}

// ─── Author Page ─────────────────────────────────────────────────────────────

export default async function AuthorPage({ params }: Props) {
  const { author: slug } = await params;
  const author = await getAuthor(slug);

  if (!author) {
    notFound();
  }

  const authorImage = urlFor(author.authorImg).url();

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">

      {/* ─────────────────────────────────────────────────────────────
          HERO
      ───────────────────────────────────────────────────────────── */}

      <section className="relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800">

        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-peach/5 blur-3xl dark:bg-violet/5" />

          <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-peach/5 blur-3xl dark:bg-violet/5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-20 pb-16">

          {/* Section label */}
          <div className="flex items-center gap-3 mb-12">

            <span className="w-8 h-px bg-peach dark:bg-violet" />

            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
              Peach State Tech
            </span>

            <span className="text-zinc-300 dark:text-zinc-700">
              /
            </span>

            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-peach dark:text-violet">
              Author
            </span>

          </div>

          {/* Hero */}
          <div className="grid lg:grid-cols-[420px_1fr] gap-10 lg:gap-20 items-center">

            {/* ─────────────────────────────────────────────
                PORTRAIT
            ───────────────────────────────────────────── */}

            <div className="relative flex justify-center">

              {/* Circle image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-[10px] border-white dark:border-zinc-900 shadow-2xl">

                <Image
                  src={authorImage}
                  alt={`${author.name} profile`}
                  fill
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 380px"
                  className="object-cover"
                />

              </div>

              {/* Author type badge */}
              <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2">

                <span className="inline-flex whitespace-nowrap px-4 py-2 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-lg text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-900 dark:text-white">
                  {author.authorType}
                </span>

              </div>

            </div>

            {/* ─────────────────────────────────────────────
                HERO CONTENT
            ───────────────────────────────────────────── */}

            <div className="pb-2 text-center lg:text-left">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-600 dark:text-zinc-400 mb-5">
                {author.role}
              </p>

              <h1 className="text-[clamp(3rem,7vw,7rem)] font-black tracking-[-0.06em] leading-[0.85] text-gradient-peach dark:text-gradient-violet">
                {author.name}
              </h1>

              <div className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 mx-auto lg:mx-0">
                <PortableText value={author.bio} />
              </div>

              {/* Metadata */}
              <div className="mt-10 pt-6 border-t border-peach dark:border-violet flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-5">

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 mb-1">
                    Role
                  </p>

                  <p className="text-sm font-semibold">
                    {author.role}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 mb-1">
                    Coverage
                  </p>

                  <p className="text-sm font-semibold">
                    {author.areasOfCoverage?.length || 0} Areas
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 mb-1">
                    Publication
                  </p>

                  <p className="text-sm font-semibold">
                    Peach State Tech
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          COVERAGE INDEX
      ───────────────────────────────────────────────────────────── */}

      <section className="border-b border-zinc-200 dark:border-zinc-800">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8">

          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">

            <div className="shrink-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400">
                Areas of Coverage
              </p>
            </div>

            <div className="hidden lg:block w-px h-8 bg-zinc-200 dark:bg-zinc-800" />

            <div className="flex flex-wrap gap-x-6 gap-y-3">

              {author.areasOfCoverage?.map(
                (area: string, index: number) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    <span className="text-[9px] font-bold text-peach dark:text-violet">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {area}
                  </div>
                )
              )}

            </div>

          </div>

        </div>

      </section>


      {/* ─────────────────────────────────────────────────────────────
          ABOUT
      ───────────────────────────────────────────────────────────── */}

      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">

        <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-24">

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-peach dark:text-violet mb-4">
              01 / Profile
            </p>

            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              About the Author
            </h2>

          </div>

          <div className="max-w-3xl">

            <div className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight leading-[1.25] text-zinc-800 dark:text-zinc-200">
              <PortableText value={author.description} />
            </div>

          </div>

        </div>

      </section>


      {/* ─────────────────────────────────────────────────────────────
          EDITORIAL BUTTON
      ───────────────────────────────────────────────────────────── */}

      <section className="border-t border-zinc-200 dark:border-zinc-800">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">

          <div className="flex flex-col items-center text-center">

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-peach dark:text-violet mb-4">
              Our Editorial Process
            </p>

            <h2 className="text-2xl sm:text-3xl text-gradient-peach dark:text-gradient-violet font-black tracking-tight mb-4">
              How We Write Our Articles
            </h2>

            <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-500 dark:text-zinc-400 mb-8">
              Learn more about how Peach State Tech researches stories,
              verifies information, handles sources, and maintains
              editorial standards.
            </p>

            <Link
              href={"/how-we-create-content"}
              className="font-semibold text-sm sm:text-base text-peach dark:text-violet border-2 border-peach dark:border-violet rounded-full px-6 py-2 hover:bg-gradient-peach dark:hover:bg-gradient-violet hover:text-white active:bg-gradient-violet active:border-violet dark:active:border-peach dark:active:bg-gradient-peach transition-colors duration-200"
            >
              <span>
                How We Write Articles
              </span>

              <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

        </div>

      </section>




    </main>
  );
}