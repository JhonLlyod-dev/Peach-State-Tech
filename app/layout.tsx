// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import ThemeToggle from "../components/ThemeToggle";
import { CookieConsentProvider } from "@/components/CookieConsentContext";
import AnalyticsScripts from "@/components/cookies/AnalyticsScripts";
import CookieBanner from "@/components/cookies/CookieBanner";
import CookiePreferencesModal from "@/components/cookies/CookiesPreferencesModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.peachstate.tech"),
  title: "Peach State Tech | Georgia Tech, Startup & Innovation News",
  authors: [{ name: "Peach State Tech" }],
  description:
    "Peach State Tech covers Georgia's startup, AI, and venture capital news — from Atlanta innovation labs to emerging tech companies shaping the state's economy.",
  keywords: [
    "Georgia tech",
    "Atlanta startups",
    "Georgia startups",
    "Tech news Georgia",
    "Peach State Tech",
    "Technology blog Georgia",
    "Georgia Peach State Tech Blog",
  ],
  openGraph: {
    title: "Peach State Tech",
    description:
      "Stay ahead of Georgia Tech trends with peachstate.tech! Discover the latest innovations, insights, and updates shaping the future of technology in Georgia.",
    url: "https://www.peachstate.tech",
    siteName: "Peach State Tech",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo1.webp",
        width: 1200,
        height: 630,
        alt: "Peach State Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peach State Tech",
    description:
      "Georgia's startup, AI, and venture capital news — from Atlanta innovation labs to the companies shaping the state's tech economy.",
    images: ["/logo1.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://www.peachstate.tech",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdf6f0" },
    { media: "(prefers-color-scheme: dark)", color: "#18181b" },
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsMediaOrganization",
  name: "Peach State Tech",
  url: "https://www.peachstate.tech",
  logo: {
    "@type": "ImageObject",
    url: "https://www.peachstate.tech/logo1.webp",
    width: 1200,
    height: 630,
  },
  description:
    "Peach State Tech covers Georgia's startup, AI, and venture capital news — from Atlanta innovation labs to emerging tech companies shaping the state's economy.",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61588566181619",
    "https://www.instagram.com/peachstatetech.team/",
    "https://x.com/peach_state2026",
    "https://www.tiktok.com/@peach_state_tech",
    "https://www.youtube.com/@PeachStateTech",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Peach State Tech",
  url: "https://www.peachstate.tech",
  publisher: {
    "@type": "NewsMediaOrganization",
    name: "Peach State Tech",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.peachstate.tech/browse?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CookieConsentProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ThemeToggle />
            <CookieBanner />
            <CookiePreferencesModal />
            <AnalyticsScripts />
          </CookieConsentProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}