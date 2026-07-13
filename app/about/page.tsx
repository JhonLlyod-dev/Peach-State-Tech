import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-900 font-sans overflow-hidden">

      {/* ── Hero ── full-bleed photo background */}
      <section className="relative h-[70vh] min-h-[480px] max-h-[720px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1634010727710-aeef03fa4cba?q=80&w=1847&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&h=1080"
          alt="Atlanta skyline at dusk"
          fill
          priority
          className="motion-preset-fade motion-delay-100 absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-zinc-900/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 pb-16 w-full">
          <p className="motion-preset-slide-right motion-delay-200 text-gradient-peach dark:text-gradient-violet font-bold text-sm sm:text-base uppercase tracking-widest mb-4">
            About Peach State Tech
          </p>
          <h1 className="motion-preset-slide-up motion-delay-300 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-white mb-6">
            Georgia's Tech&nbsp;Story
            <br />
            <span className="text-gradient-peach dark:text-gradient-violet">Starts Here.</span>
          </h1>
          <p className="motion-preset-fade motion-delay-500 text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
            Peach State Tech is Georgia's dedicated media and marketing platform —
            built to spotlight the founders, startups, and innovators driving the
            state's fast-growing digital economy.
          </p>
        </div>
      </section>


      {/* ── Mission ── text left, photo right */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="motion-preset-slide-right motion-delay-200 space-y-6">
          <div className="inline-flex items-center gap-3">
            <span className="w-10 h-px bg-gradient-peach" />
            <span className="text-gradient-peach dark:text-gradient-violet font-bold text-xs uppercase tracking-widest">
              Our Mission
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-zinc-900 dark:text-zinc-50 tracking-tight">
            Connecting Georgia's<br />Tech Ecosystem
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            Our mission is to bridge the gap between Georgia-based startups,
            scale-ups, and tech leaders — and the investors, professionals, and
            communities ready to champion them.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            We publish stories that build trust, drive discovery, and put
            Georgia's most innovative companies on the map — locally, nationally,
            and beyond.
          </p>
        </div>

        <div className="motion-preset-slide-left motion-delay-400 relative h-80 lg:h-96">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop"
            alt="Startup team collaborating around a table"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover rounded-sm shadow-lg dark:shadow-black/30"
          />
          <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-4 border-l-4 border-peach rounded-bl-sm" />
        </div>
      </section>


      {/* ── What We Do ── dark bg, photo left, text right */}
      <section className="bg-zinc-900 dark:bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="motion-preset-slide-right motion-delay-200 relative order-2 lg:order-1 h-80 lg:h-96">
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80&auto=format&fit=crop"
              alt="Modern open tech office workspace"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover rounded-sm shadow-2xl"
            />
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-4 border-r-4 border-violet rounded-tr-sm" />
          </div>

          <div className="motion-preset-slide-left motion-delay-300 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="w-10 h-px bg-gradient-violet" />
              <span className="text-gradient-violet font-bold text-xs uppercase tracking-widest">
                What We Do
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
              Coverage That
              <br />
              <span className="text-gradient-violet">Gets You Seen</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              We publish in-depth features, founder interviews, and industry
              insights covering Georgia's fast-growing technology sector — from
              Atlanta's Midtown corridor to emerging hubs in Savannah, Augusta,
              and beyond.
            </p>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              Our platform helps companies improve their visibility, establish
              credibility, and reach the right audiences across Georgia's
              innovation ecosystem.
            </p>

            <div className="motion-preset-fade motion-delay-500 flex flex-wrap gap-2 pt-2">
              {[
                "Founder Interviews",
                "Startup Features",
                "Industry Insights",
                "Company Spotlights",
                "Event Coverage",
                "Georgia Tech News",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold border border-zinc-700 text-zinc-300 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ── Who It's For ── photo banner + cards */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 py-24">
        <div className="motion-preset-fade motion-delay-100 relative w-full h-56 sm:h-72 mb-16 overflow-hidden rounded-sm">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=80&auto=format&fit=crop"
            alt="Georgia tech community networking event"
            className="w-full h-full object-cover object-top"
            fill
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/85 via-zinc-900/50 to-transparent flex items-center px-8 sm:px-12">
            <div>
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="w-6 h-px bg-gradient-peach" />
                <span className="text-gradient-peach font-bold text-xs uppercase tracking-widest">
                  Who It's For
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight max-w-md">
                Built for Georgia's<br />Tech Community
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              delay: "motion-delay-200",
              icon: "💼",
              title: "Business Leaders",
              desc: "Stay updated on Georgia startups, business innovation, funding rounds, and the companies driving economic growth across the state.",
            },
            {
              delay: "motion-delay-350",
              icon: "🚀",
              title: "Entrepreneurs",
              desc: "Discover startup success stories, Georgia tech trends, investment opportunities, and resources to help grow your business.",
            },
            {
              delay: "motion-delay-500",
              icon: "📰",
              title: "Georgia Residents",
              desc: "Follow the latest Georgia technology news, local business developments, job creation, and innovations impacting your community.",
            },
            {
              delay: "motion-delay-[650ms]",
              icon: "💡",
              title: "Students & Professionals",
              desc: "Explore career opportunities, industry insights, workforce trends, and emerging technologies shaping Georgia's future.",
            },
          ].map(({ delay, icon, title, desc }) => (
            <div
              key={title}
              className={`
                motion-preset-slide-up ${delay}
                group bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-sm p-6
                hover:border-peach dark:hover:border-violet hover:shadow-md dark:hover:shadow-black/30 transition-all duration-200
              `}
            >
              <div className="text-2xl mb-4">{icon}</div>
              <h3 className="font-black text-zinc-900 dark:text-zinc-50 text-lg mb-2 group-hover:text-gradient-peach dark:group-hover:text-gradient-violet transition-colors duration-200">
                {title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ── CTA ── photo with peach overlay */}
      <section className="motion-preset-fade motion-delay-300 relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1400&q=80&auto=format&fit=crop"
          alt="Founders shaking hands at a Georgia tech event"
          className="absolute inset-0 w-full h-full object-cover"
          sizes="100vw"
          fill
        />
        <div className="absolute inset-0 bg-linear-to-r from-peach/90 to-peach-light/90 dark:from-violet/90 dark:to-violet/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              Ready to get your company featured?
            </h2>
            <p className="text-white/80 text-sm sm:text-base mt-1">
              Join the companies already growing their presence across Georgia.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 bg-white text-peach dark:text-violet font-bold text-sm px-6 py-3 rounded-sm hover:bg-zinc-100 transition-colors duration-150"
          >
            Get in Touch →
          </a>
        </div>
      </section>

    </main>
  );
}