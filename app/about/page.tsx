export default function About() {
  return (
    <main className="min-h-screen px-6 sm:px-10 lg:px-20 padding py-12">
      {/* Header */}
      <section className=" motion-preset-slide-down-md motion-delay-200  max-w-4xl mx-auto text-center mb-16">
        <h3 className="text-peach font-bold text-sm sm:text-base md:text-md lg:text-lg mb-2">
          About Peach State Tech
        </h3>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Powering Georgia’s Growing Tech Ecosystem
        </h1>
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
          Peach State Tech is a media and marketing platform dedicated to
          highlighting innovative technology companies across Georgia.
        </p>
      </section>

      <section className="max-w-6xl lg:max-w-7xl mx-auto flex flex-col gap-20 px-20">
        {/* Mission */}
        <div className="motion-preset-slide-down-right motion-delay-450 space-y-6 py-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Our Mission
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
            Our mission is to connect Georgia-based startups, scale-ups, and
            tech leaders with Georgians across our wonderful state.
            We focus on sharing positive, informative stories that help businesses
            get discovered and trusted online.
          </p>
        </div>

        {/* What We Do */}
        <div className="motion-preset-slide-down-left motion-delay-700 space-y-6 py-10 flex items-end flex-col">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            What We Do
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
          We publish in-depth features, interviews, and industry insights
          covering Georgia’s fast-growing technology sector. Our platform
          helps companies improve visibility, credibility, and reach
          across Georgia’s innovation ecosystem.
          </p>
        </div>
      </section>



      {/* Who It’s For */}
      <section className="motion-preset-slide-up  max-w-6xl lg:max-w-7xl mx-auto mt-32 mb-22 text-center px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Who It’s For
        </h2>
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
          Peach State Tech is built for investors, entrepreneurs, elected
          officials, and professionals who want to stay informed about the
          companies shaping Georgia’s technology landscape.
        </p>
      </section>
    </main>
  );
}
