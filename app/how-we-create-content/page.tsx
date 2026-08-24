import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://www.peachstate.tech";

export const metadata: Metadata = {
  title: "Editorial Standards | Peach State Tech",
  description:
    "How Peach State Tech researches, writes, and reviews articles covering Georgia's technology, business, and startup ecosystem.",
  alternates: {
    canonical: "/how-we-create-content",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Editorial Standards | Peach State Tech",
    description:
      "How Peach State Tech researches, writes, and reviews articles covering Georgia's technology, business, and startup ecosystem.",
    url: `${BASE_URL}/how-we-create-content`,
    siteName: "Peach State Tech",
    type: "website",
  },
};

const TOPICS = [
  "Artificial intelligence",
  "Atlanta startups",
  "Cybersecurity",
  "Financial technology",
  "Healthcare technology",
  "University research",
  "Technology jobs and skills",
  "Business funding and investment",
  "Company expansions",
  "Local events and programs",
];

const SOURCES = [
  "Government agencies",
  "Public records",
  "Universities and research centers",
  "Company filings",
  "Original studies and reports",
  "Industry organizations",
  "Company websites and press releases",
  "Interviews and direct statements",
  "Established news organizations",
];

export default function EditorialStandardsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Editorial Standards",
    url: `${BASE_URL}/how-we-create-content`,
    description:
      "How Peach State Tech researches, writes, and reviews articles covering Georgia's technology, business, and startup ecosystem.",
    isPartOf: {
      "@id": `${BASE_URL}/#website`,
    },
    publisher: {
      "@type": "Organization",
      name: "Peach State Tech",
      url: BASE_URL,
    },
  };

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">

      {/* ─────────────────────────────────────────────────────────────
          HERO
      ───────────────────────────────────────────────────────────── */}

      <section className="relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800">

        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-peach/5 blur-3xl dark:bg-violet/5" />

          <div className="absolute bottom-[-200px] left-1/3 w-[400px] h-[400px] rounded-full bg-peach/5 blur-3xl dark:bg-violet/5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-20 pb-16 sm:pb-24">

          {/* Breadcrumb / Label */}
          <div className="flex items-center gap-3 mb-14">

            <span className="w-8 h-px bg-peach dark:bg-violet" />

            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
              Peach State Tech
            </span>

            <span className="text-zinc-300 dark:text-zinc-700">
              /
            </span>

            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-peach dark:text-violet">
              Editorial
            </span>

          </div>

          <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-24 items-end">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-peach dark:text-violet mb-6">
                How We Work
              </p>

              <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-black tracking-[-0.065em] leading-[0.82] text-gradient-peach dark:text-gradient-violet">
                Editorial
                <br />
                Standards
              </h1>

              <p className="mt-10 max-w-2xl text-lg sm:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
                Peach State Tech covers technology, business, startups, and
                innovation across Georgia. These standards guide how our team
                researches, writes, and reviews each article.
              </p>

            </div>

            {/* Hero Number */}

            <div className="hidden lg:flex justify-end">

              <span className="text-[180px] font-black leading-none tracking-[-0.08em] text-zinc-100 dark:text-zinc-900 select-none">
                01
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ─────────────────────────────────────────────────────────────
          QUICK INTRO
      ───────────────────────────────────────────────────────────── */}

      <section className="border-b border-zinc-200 dark:border-zinc-800">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8">

          <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-12">

            <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400">
              Our Promise
            </span>

            <span className="hidden md:block w-px h-7 bg-zinc-200 dark:bg-zinc-800" />

            <p className="text-sm sm:text-base font-medium text-zinc-700 dark:text-zinc-300">
              Clear reporting. Reliable sources. Responsible technology coverage.
            </p>

          </div>

        </div>

      </section>


      {/* ─────────────────────────────────────────────────────────────
          CONTENT
      ───────────────────────────────────────────────────────────── */}

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">


        {/* ─────────────────────────────────────────────────────────
            OUR PURPOSE
        ───────────────────────────────────────────────────────── */}

        <section className="py-20 sm:py-28 border-b border-zinc-200 dark:border-zinc-800">

          <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-24">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-peach dark:text-violet mb-4">
                01 / Purpose
              </p>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-gradient-peach dark:text-gradient-violet">
                Our Purpose
              </h2>

            </div>

            <div className="max-w-3xl space-y-5 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">

              <p>
                We help readers understand the people, companies, programs,
                and technologies shaping Georgia.
              </p>

              <p>
                Our coverage serves business owners, founders, professionals,
                job seekers, students, investors, and other people interested
                in Georgia&rsquo;s technology industry.
              </p>

              <p>
                We do more than repeat announcements. We explain what
                happened, why it matters, who it may affect, and what the
                available evidence supports.
              </p>

            </div>

          </div>

        </section>


        {/* ─────────────────────────────────────────────────────────
            TOPICS
        ───────────────────────────────────────────────────────── */}

        <section className="py-20 sm:py-28 border-b border-zinc-200 dark:border-zinc-800">

          <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-24">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-peach dark:text-violet mb-4">
                02 / Coverage
              </p>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-gradient-peach dark:text-gradient-violet">
                How We Choose Topics
              </h2>

            </div>

            <div className="max-w-4xl">

              <p className="text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 mb-10">
                We select topics that have a clear connection to Georgia.
                Our coverage may include:
              </p>

              <div className="grid sm:grid-cols-2 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">

                {TOPICS.map((topic, index) => (

                  <div
                    key={topic}
                    className="bg-white dark:bg-zinc-950 px-5 py-5 flex items-center gap-4"
                  >

                    <span className="text-[10px] font-bold text-peach dark:text-violet">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      {topic}
                    </span>

                  </div>

                ))}

              </div>

              <p className="mt-10 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                We confirm a company&rsquo;s connection to Georgia before we
                describe it as a Georgia company. This connection may include
                its headquarters, offices, employees, or documented business
                activities within the state.
              </p>

            </div>

          </div>

        </section>


        {/* ─────────────────────────────────────────────────────────
            RESEARCH
        ───────────────────────────────────────────────────────── */}

        <section className="py-20 sm:py-28 border-b border-zinc-200 dark:border-zinc-800">

          <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-24">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-peach dark:text-violet mb-4">
                03 / Research
              </p>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-gradient-peach dark:text-gradient-violet">
                How We Research Articles
              </h2>

            </div>

            <div className="max-w-4xl">

              <p className="text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 mb-10">
                We use reliable and current sources whenever possible.
                Our sources may include:
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">

                {SOURCES.map((source, index) => (

                  <div
                    key={source}
                    className="flex gap-4 items-start"
                  >

                    <span className="shrink-0 mt-1 w-5 h-5 rounded-full border border-peach dark:border-violet flex items-center justify-center text-[8px] font-bold text-peach dark:text-violet">
                      {index + 1}
                    </span>

                    <span className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                      {source}
                    </span>

                  </div>

                ))}

              </div>

              <div className="border-l-2 border-peach dark:border-violet pl-6 space-y-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">

                <p>
                  We check important names, dates, locations, figures, and
                  links before publication.
                </p>

                <p>
                  A company press release can confirm what the company
                  announced. However, it does not always provide independent
                  proof of the result. We make this difference clear when it
                  affects the story.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ─────────────────────────────────────────────────────────
            DATA
        ───────────────────────────────────────────────────────── */}

        <section className="py-20 sm:py-28 border-b border-zinc-200 dark:border-zinc-800">

          <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-24">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-peach dark:text-violet mb-4">
                04 / Evidence
              </p>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-gradient-peach dark:text-gradient-violet">
                How We Present Data
              </h2>

            </div>

            <div className="max-w-3xl space-y-6 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">

              <p>
                We explain what each statistic measures. We also identify the
                source, date, location, and reporting period when these
                details are available.
              </p>

              <p>
                Two sources may report different funding totals, job numbers,
                or deal counts because they use different methods. We explain
                these differences instead of treating the figures as equal.
              </p>

              <p>
                We label estimates, forecasts, and company goals clearly. We
                do not present them as confirmed results.
              </p>

            </div>

          </div>

        </section>


        {/* ─────────────────────────────────────────────────────────
            EDITORIAL APPROACH
        ───────────────────────────────────────────────────────── */}

        <section className="py-20 sm:py-28 border-b border-zinc-200 dark:border-zinc-800">

          <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-24">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-peach dark:text-violet mb-4">
                05 / Approach
              </p>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-gradient-peach dark:text-gradient-violet">
                Our Editorial Approach
              </h2>

            </div>

            <div className="max-w-3xl space-y-6 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">

              <p>
                We avoid unsupported claims, promotional language, exaggerated
                descriptions, and fear-based statements.
              </p>

              <p>
                We explain both the benefits and the limits of a technology.
                When relevant, we also discuss cost, accuracy, privacy,
                security, access, employment, and responsible use.
              </p>

            </div>

          </div>

        </section>


        {/* ─────────────────────────────────────────────────────────
            BYLINES
        ───────────────────────────────────────────────────────── */}

        <section className="py-20 sm:py-28 border-b border-zinc-200 dark:border-zinc-800">

          <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-24">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-peach dark:text-violet mb-4">
                06 / Attribution
              </p>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-gradient-peach dark:text-gradient-violet">
                Bylines
              </h2>

            </div>

            <div className="max-w-3xl space-y-6 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">

              <p>
                Each article names an individual author or the Peach State
                Editorial Team.
              </p>

              <p>
                We may use the editorial team byline when several team members
                contribute to an article or when the publication takes shared
                responsibility for its content.
              </p>

            </div>

          </div>

        </section>

      </div>


      {/* ─────────────────────────────────────────────────────────────
          COMMITMENT
      ───────────────────────────────────────────────────────────── */}

      <section className="bg-gradient-peach dark:bg-gradient-violet text-white">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-24">

          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-24 items-center">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em]  mb-5">
                Our Commitment
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight ">
                Reporting that
                <br />
                earns trust.
              </h2>

            </div>

            <div>

              <p className="text-lg sm:text-xl leading-relaxed  max-w-2xl">
                Our goal is simple: provide useful, understandable,
                and responsibly reported information about Georgia&rsquo;s
                technology ecosystem.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ─────────────────────────────────────────────────────────────
          JSON-LD
      ───────────────────────────────────────────────────────────── */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

    </main>
  );
}