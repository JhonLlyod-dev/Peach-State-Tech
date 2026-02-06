import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Peach State Tech',
  description: 'Learn how Peach State Tech collects, uses, and protects your personal information. Our Privacy Policy outlines our commitment to your data security and privacy rights.',
  keywords: ['privacy policy', 'data protection', 'personal information', 'user privacy', 'data security', 'Peach State Tech'],
  openGraph: {
    title: 'Privacy Policy | Peach State Tech',
    description: 'Our commitment to protecting your privacy and personal information at Peach State Tech.',
    url: 'https://peachstate.tech/privacy',
    siteName: 'Peach State Tech',
    type: 'website',
    images: [
      {
        url: '/happy.webp',
        width: 1200,
        height: 630,
        alt: 'Peach State Tech Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Peach State Tech',
    description: 'Our commitment to protecting your privacy and personal information.',
    images: ['/happy.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://peachstate.tech/privacy',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-peach/5 via-white to-peach/10">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-peach to-peach/80 text-white">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              Your privacy matters to us at Peach State Tech
            </p>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium">Effective: February 6, 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sticky Navigation */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-8">
              <nav className="bg-white rounded-2xl shadow-sm border border-peach/10 p-6">
                <h3 className="text-sm font-bold text-zinc-900 mb-4 uppercase tracking-wide">Quick Navigation</h3>
                <ul className="space-y-3">
                  {['Introduction', 'Information We Collect', 'How We Use Your Info', 'Data Security', 'Your Rights', 'Contact Us'].map((item, index) => (
                    <li key={index}>
                      <a href={`#section-${index + 1}`} className="text-sm text-zinc-600 hover:text-peach transition-colors flex items-center gap-2 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-peach/40 group-hover:bg-peach transition-colors"></span>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Section 1 */}
            <section id="section-1" className="bg-white rounded-2xl shadow-sm border border-peach/10 p-8 md:p-10 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-peach to-peach/80 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-peach/20">
                  1
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-zinc-900 mb-2">Introduction</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-peach to-peach/40 rounded-full"></div>
                </div>
              </div>
              <p className="text-zinc-700 leading-relaxed text-lg">
                At Peach State Tech, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect the information you share when contacting us via our website. By using our contact form, you agree to the practices described below.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="bg-white rounded-2xl shadow-sm border border-peach/10 p-8 md:p-10 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-peach to-peach/80 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-peach/20">
                  2
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-zinc-900 mb-2">Information We Collect</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-peach to-peach/40 rounded-full"></div>
                </div>
              </div>
              <p className="text-zinc-700 leading-relaxed text-lg mb-6">
                When you submit our contact form, we may collect:
              </p>
              <div className="space-y-3">
                {['Name', 'Email address', 'Message or inquiry content'].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-peach/5 rounded-lg p-4 border border-peach/10">
                    <svg className="w-6 h-6 text-peach flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-gradient-to-r from-peach/10 to-transparent border-l-4 border-peach rounded-r-lg p-4">
                <p className="text-zinc-700 leading-relaxed">
                  <strong className="text-peach">Note:</strong> No other personal information is collected through the form.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="bg-white rounded-2xl shadow-sm border border-peach/10 p-8 md:p-10 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-peach to-peach/80 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-peach/20">
                  3
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-zinc-900 mb-2">How We Use Your Information</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-peach to-peach/40 rounded-full"></div>
                </div>
              </div>
              <p className="text-zinc-700 leading-relaxed text-lg mb-6">
                The information you provide is used solely to:
              </p>
              <div className="space-y-3 mb-6">
                {[
                  'Respond to your questions or inquiries',
                  'Address feedback or suggestions',
                  'Provide information about collaborations or partnerships'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-peach/5 rounded-lg p-4 border border-peach/10">
                    <div className="w-6 h-6 rounded-full bg-peach/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-peach font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-zinc-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-peach/10 to-transparent border-l-4 border-peach rounded-r-lg p-4">
                <p className="text-zinc-700 leading-relaxed">
                  <strong className="text-peach">Promise:</strong> We will not share, sell, or use your personal information for any other purposes.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="bg-white rounded-2xl shadow-sm border border-peach/10 p-8 md:p-10 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-peach to-peach/80 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-peach/20">
                  4
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-zinc-900 mb-2">Data Security</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-peach to-peach/40 rounded-full"></div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-peach/5 to-peach/10 rounded-xl p-6 border border-peach/20">
                <div className="flex items-start gap-4">
                  <svg className="w-8 h-8 text-peach flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <p className="text-zinc-700 leading-relaxed text-lg">
                    We implement reasonable measures to protect your submitted information from unauthorized access or disclosure.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="bg-white rounded-2xl shadow-sm border border-peach/10 p-8 md:p-10 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-peach to-peach/80 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-peach/20">
                  5
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-zinc-900 mb-2">Your Rights</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-peach to-peach/40 rounded-full"></div>
                </div>
              </div>
              <p className="text-zinc-700 leading-relaxed text-lg mb-6">
                You may request that we:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { title: 'Access', desc: 'View the information you submitted', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
                  { title: 'Correct', desc: 'Fix any inaccuracies', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
                  { title: 'Delete', desc: 'Remove your information', icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' }
                ].map((right, index) => (
                  <div key={index} className="bg-gradient-to-br from-peach/5 to-peach/10 rounded-xl p-5 border border-peach/20 hover:shadow-md transition-shadow">
                    <svg className="w-8 h-8 text-peach mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={right.icon} />
                    </svg>
                    <h3 className="font-bold text-zinc-900 mb-1">{right.title}</h3>
                    <p className="text-sm text-zinc-600">{right.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-peach/5 rounded-xl p-6 border border-peach/20">
                <p className="text-zinc-700 leading-relaxed">
                  To exercise these rights, contact us at:{" "}
                  <a href="mailto:sam@thomasmarketing.solutions" className="text-peach font-semibold hover:underline">
                    sam@thomasmarketing.solutions
                  </a>
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="bg-gradient-to-br from-peach to-peach/80 text-white rounded-2xl shadow-lg shadow-peach/20 p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-lg">
                  6
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
                  <div className="h-1 w-16 bg-white/40 rounded-full"></div>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed text-lg mb-6">
                If you have questions or concerns about this Privacy Policy or your submitted information, please reach out:
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm text-white/70 mb-1">Email</p>
                      <a href="mailto:sam@thomasmarketing.solutions" className="font-semibold hover:underline">
                        sam@thomasmarketing.solutions
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <div>
                      <p className="text-sm text-white/70 mb-1">Website</p>
                      <a href="https://peachstate.tech" className="font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
                        https://peachstate.tech
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="bg-white rounded-2xl shadow-sm border border-peach/10 p-6 text-center">
              <div className="inline-flex items-center gap-2 text-sm text-zinc-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Last updated: February 6, 2026
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}