import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Peach State Tech',
  description: 'Read the Terms of Service for Peach State Tech. Learn about our website usage policies, user agreements, and legal guidelines for accessing our tech news and digital insights.',
  keywords: ['terms of service', 'terms and conditions', 'user agreement', 'legal', 'website policies', 'Peach State Tech'],
  openGraph: {
    title: 'Terms of Service | Peach State Tech',
    description: 'Terms of Service and user agreements for Peach State Tech.',
    url: 'https://peachstate.tech/terms',
    siteName: 'Peach State Tech',
    type: 'website',
    images: [
      {
        url: '/happy.webp',
        width: 1200,
        height: 630,
        alt: 'Peach State Tech Terms of Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Peach State Tech',
    description: 'Terms of Service and user agreements for Peach State Tech.',
    images: ['/happy.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://peachstate.tech/terms',
  },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-peach/5 via-white to-peach/10">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-peach to-peach/80 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Terms of Service
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-4 sm:mb-6">
              Legal guidelines for using Peach State Tech
            </p>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">Effective: February 6, 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Sticky Navigation */}
          <aside className="lg:col-span-1 order-2 lg:order-1">
            <div className="lg:sticky lg:top-8">
              <nav className="bg-white rounded-xl lg:rounded-2xl shadow-sm border border-peach/10 p-4 sm:p-6">
                <h3 className="text-xs sm:text-sm font-bold text-zinc-900 mb-3 sm:mb-4 uppercase tracking-wide">Quick Navigation</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    'Acceptance of Terms',
                    'Use of Website',
                    'Intellectual Property',
                    'User-Submitted Content',
                    'Disclaimer of Warranties',
                    'Limitation of Liability',
                    'External Links',
                    'Modifications',
                    'Governing Law',
                    'Contact Us'
                  ].map((item, index) => (
                    <li key={index}>
                      <a href={`#section-${index + 1}`} className="text-xs sm:text-sm text-zinc-600 hover:text-peach transition-colors flex items-center gap-2 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-peach/40 group-hover:bg-peach transition-colors flex-shrink-0"></span>
                        <span className="truncate">{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-3 space-y-6 sm:space-y-8 order-1 lg:order-2">
            
            {/* Section 1 */}
            <section id="section-1" className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-peach/10 p-6 sm:p-8 md:p-10 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-peach to-peach/80 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg shadow-peach/20">
                  1
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">Acceptance of Terms</h2>
                  <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-peach to-peach/40 rounded-full"></div>
                </div>
              </div>
              <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
                By accessing or using{" "}
                <a href="https://peachstate.tech" className="text-peach font-semibold hover:underline break-all">
                  https://peachstate.tech
                </a>
                , you agree to be bound by these Terms of Service. If you do not agree, please discontinue use of the website.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-peach/10 p-6 sm:p-8 md:p-10 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-peach to-peach/80 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg shadow-peach/20">
                  2
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">Use of Website</h2>
                  <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-peach to-peach/40 rounded-full"></div>
                </div>
              </div>
              <p className="text-zinc-700 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
                Peach State Tech provides informational content including tech news, tutorials, and digital insights.
                You agree to use the website only for lawful purposes.
              </p>
              <div className="bg-gradient-to-r from-peach/10 to-transparent border-l-4 border-peach rounded-r-lg p-4 sm:p-5 mb-4 sm:mb-6">
                <h3 className="text-peach font-bold mb-3 flex items-center gap-2 text-sm sm:text-base">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>You must not:</span>
                </h3>
                <div className="space-y-3">
                  {[
                    'Engage in illegal or unauthorized activities',
                    'Disrupt or interfere with site functionality',
                    'Transmit malicious software or harmful code',
                    'Collect user data without consent'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white/80 rounded-lg p-3">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-peach flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-zinc-700 font-medium text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-peach/10 p-6 sm:p-8 md:p-10 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-peach to-peach/80 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg shadow-peach/20">
                  3
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">Intellectual Property</h2>
                  <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-peach to-peach/40 rounded-full"></div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-peach/5 to-peach/10 rounded-xl p-4 sm:p-6 border border-peach/20">
                <div className="flex items-start gap-3 sm:gap-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-peach flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
                    All content on Peach State Tech is the intellectual property of Peach State Tech or its licensors and is protected by applicable laws.
                    Unauthorized use, reproduction, or distribution is prohibited.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-peach/10 p-6 sm:p-8 md:p-10 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-peach to-peach/80 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg shadow-peach/20">
                  4
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">User-Submitted Content</h2>
                  <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-peach to-peach/40 rounded-full"></div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-peach/5 to-peach/10 rounded-xl p-4 sm:p-6 border border-peach/20">
                <div className="flex items-start gap-3 sm:gap-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-peach flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
                    Content submitted via contact forms or communication channels is used solely to respond to inquiries and operate the website.
                    You confirm submitted content is accurate and lawful.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-peach/10 p-6 sm:p-8 md:p-10 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-peach to-peach/80 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg shadow-peach/20">
                  5
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">Disclaimer of Warranties</h2>
                  <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-peach to-peach/40 rounded-full"></div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-amber-50 to-peach/5 rounded-xl p-4 sm:p-6 border border-amber-200">
                <div className="flex items-start gap-3 sm:gap-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-amber-900 mb-2 text-sm sm:text-base">"As Is" Basis</h3>
                    <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
                      The website is provided "as is" without warranties of any kind regarding accuracy, availability, or reliability.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-peach/10 p-6 sm:p-8 md:p-10 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-peach to-peach/80 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg shadow-peach/20">
                  6
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">Limitation of Liability</h2>
                  <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-peach to-peach/40 rounded-full"></div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-peach/5 rounded-xl p-4 sm:p-6 border border-red-200">
                <div className="flex items-start gap-3 sm:gap-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-red-900 mb-2 text-sm sm:text-base">Limited Liability</h3>
                    <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
                      Peach State Tech shall not be liable for any damages arising from use or inability to use the website.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-peach/10 p-6 sm:p-8 md:p-10 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-peach to-peach/80 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg shadow-peach/20">
                  7
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">External Links</h2>
                  <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-peach to-peach/40 rounded-full"></div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-peach/5 to-peach/10 rounded-xl p-4 sm:p-6 border border-peach/20">
                <div className="flex items-start gap-3 sm:gap-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-peach flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
                    We are not responsible for the content or policies of third-party websites linked from our platform.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-peach/10 p-6 sm:p-8 md:p-10 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-peach to-peach/80 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg shadow-peach/20">
                  8
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">Modifications</h2>
                  <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-peach to-peach/40 rounded-full"></div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-peach/5 to-peach/10 rounded-xl p-4 sm:p-6 border border-peach/20">
                <div className="flex items-start gap-3 sm:gap-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-peach flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
                    These terms may be updated at any time. Continued use constitutes acceptance of revised terms.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-peach/10 p-6 sm:p-8 md:p-10 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-peach to-peach/80 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg shadow-peach/20">
                  9
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">Governing Law</h2>
                  <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-peach to-peach/40 rounded-full"></div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-peach/5 to-peach/10 rounded-xl p-4 sm:p-6 border border-peach/20">
                <div className="flex items-start gap-3 sm:gap-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-peach flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-zinc-900 mb-2 text-sm sm:text-base">Jurisdiction</h3>
                    <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
                      These Terms are governed by the laws of the State of Georgia, United States.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10 - Contact */}
            <section id="section-10" className="bg-gradient-to-br from-peach to-peach/80 text-white rounded-xl sm:rounded-2xl shadow-lg shadow-peach/20 p-6 sm:p-8 md:p-10">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-base sm:text-lg">
                  10
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">Contact Us</h2>
                  <div className="h-1 w-12 sm:w-16 bg-white/40 rounded-full"></div>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white/80 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-white/70 mb-1">Email</p>
                    <a href="mailto:sam@thomasmarketing.solutions" className="font-semibold hover:underline text-sm sm:text-base break-all">
                      sam@thomasmarketing.solutions
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-peach/10 p-4 sm:p-6 text-center">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-zinc-500">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Last updated: February 6, 2026</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}